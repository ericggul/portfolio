import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import './MainPage.scss';
import { motion } from 'framer-motion';
import Projects from '../../utils/Constants';
import { useHistory } from 'react-router-dom';
import useMousePosition from '../../hooks/useMousePosition';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const transition = {
  duration: .6, ease: [.43, .13, 0.23, 0.96]
}

function MainPage() {

  const history = useHistory();
  const isMobile = useMemo(()=> window.innerWidth< 600, [window.innerWidth])

  const { mouseX, mouseY } = useMousePosition();
  const { height, width } = useWindowDimensions();
  const mainRef = useRef<any>();
  const subjectWrapperRef = useRef<any>();


  const createNode = (x: number, y: number) => {
    const n = document.createElement('div');
    const width = Math.random()*5 + 2;
    n.className = 'mouse-star';
    n.setAttribute('style',
      `left: ${x}px; top: ${y}px; width: ${width}px; height: ${width}px; filter: blur(${width/3}px)`
    )
    mainRef.current.appendChild(n);
  }

  //Add Star Component
  const addStarMouse = (e: any) =>{
    if(!isMobile && mainRef.current){
      createNode(e.x, e.y);
    }
  }

  useEffect(()=>{
    window.addEventListener('click', addStarMouse)
    return () => window.removeEventListener('click', addStarMouse)
  }, [])

  useEffect(()=>{
    const interval = setInterval(()=>{
      createNode(Math.random()*width, Math.random()*height)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const SubjectRender = (props : any) => {

    const i = props.index;
    const subject = props.subject;
    const imgRef = useRef<any>();

    const [ elementPosition, setElementPosition ] = useState<any>({});
    const [ elementRect, setElementRect ] = useState<DOMRect | undefined>();
    
    useLayoutEffect(()=>{
      const { width, height, offsetTop } = imgRef.current;
      console.log(width, height);
      const rect = imgRef.current.getBoundingClientRect();
      setElementRect(rect)
      console.log(i, rect);
      setElementPosition({width, height, offsetTop})
    }, [imgRef])


    var shadowX = useMemo(()=> !isMobile && elementRect && (elementRect.left + elementRect.width/2 -mouseX)/10, [elementRect, mouseX])
    var shadowY = useMemo(()=> !isMobile && elementRect && (elementRect.top + elementRect.height/2 -mouseY)/10, [elementRect, mouseY])
    var shadowLength = useMemo(()=> !isMobile && elementRect &&  Math.sqrt((elementRect.top + elementRect.height/2 -mouseY) ** 2 + (elementRect.left + elementRect.width/2-mouseY) ** 2)/20 + 80, [elementRect, mouseX, mouseY])

    console.log(i,  elementRect && elementRect.width);

    return(
      <div className="subject"  onClick={()=>history.push(`/detail/${i+1}`)}>
        <div className="cards-wrapper">
          <div className="image-card" onClick={()=>history.push(`/detail/${i+1}`)}>
            <motion.img 
              exit={{opacity: 0}}
              transition = {transition}
              ref={imgRef}
              src={subject.image} 
              alt={subject.description.name}
              style={{ boxShadow : `${
                isMobile ? `0 0 25vw #AAA` : `${shadowX}px ${shadowY}px ${shadowLength}px #888` 
              }
              `}}
            />
          </div>
          <div className="subject-card">
            <div className="title">
              {subject.description.name}
            </div>
            <div className="description">
                <div>{subject.description.type}</div>
                <div>{subject.description.detail}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleScroll = (e: any) => {
    const position = window;
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleSubjectClick = (i: number) => {

  }



  return (
    <div className="main" 
      ref={mainRef}
    >
      <div className="subject-list">
        <div className="subject-row" ref={subjectWrapperRef}>
          {
            Projects.map((subject, i) =>(
              <SubjectRender subject={subject} index={i} key={i}/>
            ))
          }
        </div>
        <div className="subject-row" ref={subjectWrapperRef}>
          {
            Projects.map((subject, i) =>(
              <SubjectRender subject={subject} index={i} key={i}/>
            ))
          }
        </div>
        <div className="subject-row" ref={subjectWrapperRef}>
          {
            Projects.map((subject, i) =>(
              <SubjectRender subject={subject} index={i} key={i}/>
            ))
          }
        </div>

      </div>


    </div>
  );
}

export default MainPage;
