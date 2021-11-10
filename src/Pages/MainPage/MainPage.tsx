import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import './MainPage.scss';
import { motion } from 'framer-motion';
import { Topics, Projects } from '../../utils/Constants';
import { useHistory } from 'react-router-dom';
import useMousePosition from '../../hooks/useMousePosition';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Subject from '../../components/SubjectRender/SubjectRender';

const transition = {
  duration: .6, ease: [.43, .13, 0.23, 0.96]
}

function MainPage() {

  const history = useHistory();
  const isMobile = useMemo(()=> window.innerWidth< 600, [window.innerWidth])

  const { mouseX, mouseY } = useMousePosition();
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
  }


  return (
    <div className="main">
      <div className="star" ref={starRef} />
      <div className="subject-list">
        {new Array(5).fill(0).map((e, idx) => 
          <div className="subject-row" ref={subjectWrapperRef} key={idx}>
            <Topic i={idx} />
            {
              Projects[idx].map((subject, i) =>(
                <Subject subject={subject} index={i} key={i}/>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
