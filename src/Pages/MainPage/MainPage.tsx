import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import './MainPage.scss';
import { motion } from 'framer-motion';
import { Topics, Projects } from '../../utils/Constants';
import { useHistory, useLocation } from 'react-router-dom';
import useMousePosition from '../../hooks/useMousePosition';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import BlueDanube from "../../assets/mp3/BlueDanube.mp3";
import AudioVisualization from '../../components/AudioVisualization/AudioVisualization';
import Subject from '../../components/SubjectRender/SubjectRender';
import VisualDetailPage from '../VisualDetailPage/VisualDetailPage';
import DetailPage from '../DetailPage/DetailPage';

const transition = {
  duration: .6, ease: [.43, .13, 0.23, 0.96]
}

function MainContainer() {

  const history = useHistory();
  // type LocationState = {audioPlaying: boolean};
  // const location = useLocation<LocationState>();
  // console.log(location?.state?.audioPlaying);
  // const [audioPlaying, setAudioPlaying] = useState(location?.state?.audioPlaying !== undefined ? location?.state?.audioPlaying : true);

  const isMobile = useMemo(()=> window.innerWidth< 600, [window.innerWidth]);

  const { height, width } = useWindowDimensions();
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

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     createNode(Math.random()*width, Math.random()*height)
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, []);


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
