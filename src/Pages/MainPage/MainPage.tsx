import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import './MainPage.scss';
import { motion } from 'framer-motion';
import { Topics, Projects } from '../../utils/Constants';
import AudioVisualization from '../../components/AudioVisualization/AudioVisualization';
import Subject from '../../components/SubjectRender/SubjectRender';
import VisualDetailPage from '../VisualDetailPage/VisualDetailPage';
import DetailPage from '../DetailPage/DetailPage';

const transition = {
  duration: .6, ease: [.43, .13, 0.23, 0.96]
}

function MainContainer() {

  const isMobile = useMemo(()=> window.innerWidth< 600, [window.innerWidth]);

  const starRef = useRef<any>();
  const subjectWrapperRef = useRef<any>();

  const createNode = (x: number, y: number) => {
    const n = document.createElement('div');
    const width = Math.random()*5 + 2;
    n.className = 'mouse-star';
    n.setAttribute('style',
      `left: ${x}px; top: ${y}px; width: ${width}px; height: ${width}px; filter: blur(${width/3}px)`
    )
    starRef.current.appendChild(n);
  }

  //Add Star Component
  const addStarMouse = (e: any) =>{
    if(!isMobile && starRef.current){
      createNode(e.x, e.y);
    }
  };

  useEffect(()=>{
    window.addEventListener('click', addStarMouse)
    return () => window.removeEventListener('click', addStarMouse)
  }, []);


  const Topic = (props: any) => {
    return(
      <div className="topic">
        <div className="topic-header">
          {Topics[props.i].name}
        </div>
        <div className="topic-description">
          {Topics[props.i].description}
        </div>
      </div>
    )
  };

  //POPUP
  const [visualPopupOpened, setVisualPopupOpened] = useState(false);
  const [visualPopupStatus, setVisualPopupStatus] = useState({indicator: 0, projectIdx: 0});
  const [detailPopupOpened, setDetailPopupOpened] = useState(false);
  const [detailPopupStatus, setDetailPopupStatus] = useState(10);

  const sendToDetail = useCallback((indicator: number, projectIdx: number)=>{
    if(indicator === 0 || indicator === 1 || indicator === 4){
      setVisualPopupStatus({indicator: indicator, projectIdx: projectIdx});
      setVisualPopupOpened(true);
    } else{
      setDetailPopupStatus(indicator * 10 + projectIdx + 1);
      setDetailPopupOpened(true);
    }
  }, []);

  const handlePopupClose = useCallback(()=>{
    setVisualPopupOpened(false);
    setDetailPopupOpened(false);
  }, []);

  const handleIdChange = useCallback((dir)=>{
    setDetailPopupStatus(id => {
      if(id+dir<21){
        return 24
      } else if (id<30 && id+dir>24){
        return 21
      } else if (id>30 && id+dir<31){
        return 33
      } else if (id+dir>33){
        return 31
      } else{
        return id + dir
      }
    });
  }, [detailPopupStatus]);

  return (
    <>
      <div className="main">
        <div className="star" ref={starRef} />
        <div className="subject-list">
          {new Array(5).fill(0).map((e, idx) => 
            <div className="subject-row" ref={subjectWrapperRef} key={idx}>
              <Topic i={idx} />
              {
                Projects[idx].map((subject, i) =>(
                  <Subject subject={subject} index={i} key={i} idx={idx} sendToDetail={sendToDetail}/>
                ))
              }
            </div>
          )}
        </div>
      </div>
      {visualPopupOpened && 
        <VisualDetailPage 
          indicator={visualPopupStatus.indicator} 
          projectIdx={visualPopupStatus.projectIdx} 
          handlePopupClose={handlePopupClose}
        />}
      {detailPopupOpened && 
        <DetailPage 
          id={detailPopupStatus}
          handlePopupClose={handlePopupClose}
          handleIdChange={handleIdChange}
        />}
    </>
  );
}

function MainPage(){
  return(
    <>
      <AudioVisualization audioPlaying={false}/>
      <MainContainer />
    </>
  )
}
export default MainPage;
