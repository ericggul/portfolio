import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import './MainPageShadow.scss';
import { motion } from 'framer-motion';
import Projects from '../../utils/Constants';

import useMousePosition from '../../hooks/useMousePosition';
import useTouchPosition from '../../hooks/useTouchPosition';
import useWindowDimensions from '../../hooks/useWindowDimensions';


function MainPageShadow() {

  const isMobile = useMemo(()=> window.innerWidth< 600, [window.innerWidth])

  const { mouseX, mouseY } = useMousePosition();
  const { touchX, touchY } = useTouchPosition();
  const posX = isMobile ? touchX : mouseX;
  const posY = isMobile ? touchY : mouseY;

  
  const mainRef = useRef<any>();
  const subjectWrapperRef = useRef<any>();


  //Add Star Component
  const addStarMouse = (e: any) =>{
    function createNode() {
      const n = document.createElement('div');
      const width = Math.random()*5 + 2;
      n.className = 'mouse-star';
      n.setAttribute('style',
        `left: ${e.pageX}px; top: ${e.pageY}px; width: ${width}px; height: ${width}px; filter: blur(${width/3}px)`
      )
      mainRef.current.appendChild(n);
    }
    createNode();
  }

  useEffect(()=>{
    window.addEventListener('click', addStarMouse)
    return () => window.removeEventListener('click', addStarMouse)
  }, [])


  const SubjectRender = (props : any) => {

    const i = props.index;
    const subject = props.subject;

    const imgRef = useRef<any>();


    const [ elementPosition, setElementPosition ] = useState<any>({});
    const [ elementRect, setElementRect ] = useState<DOMRect | undefined>();
    
    useLayoutEffect(()=>{
      const { width, height, offsetTop } = imgRef.current;
      const rect = imgRef.current.getBoundingClientRect();
      setElementRect(rect)
      console.log(i, rect);
      setElementPosition({width, height, offsetTop})
    }, [imgRef])


    // const { width, height } = useWindowDimensions();
    
    // const left = useMemo(()=> 450* i + 225, []); 
    // const top = useMemo(()=> height/2-525/2 + 173, [height]);
    var shadowX = useMemo(()=> elementRect && (elementRect.left + elementRect.width/2 -posX)/10, [elementRect, posX])
    var shadowY = useMemo(()=> elementRect && (elementRect.top + elementRect.height/2 -posY)/10, [elementRect, posY])
    var shadowLength = useMemo(()=> elementRect &&  Math.sqrt((elementRect.top + elementRect.height/2 -posY) ** 2 + (elementRect.left + elementRect.width/2-posX) ** 2)/20 + 80, [elementRect, posX, posY])


    return(
      <div className="subject" >
        <div className="cards-wrapper">
          <div className="image-card" >
            <img 
              ref={imgRef}
              src={subject.image} 
              alt={subject.description.name}
              style={{ boxShadow : `
                ${shadowX}px ${shadowY}px ${shadowLength}px #888
              `}}
            />
          </div>
          <div 
            className="subject-card"
            style={{
              marginLeft: `${ elementRect && 165-elementRect.width/2}px`
            }}
          >
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
    console.log(e);
    const position = window;
    console.log(position, position.pageXOffset)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <div className="main" ref={mainRef}>
      <div className="shadow" />
      <div className="subject-list">
        <div className="subject-wrapper" ref={subjectWrapperRef}>
          {
            Projects.map((subject, i) =>(
              <SubjectRender subject={subject} index={i} key={i} />
            ))
          }
        </div>

      </div>


    </div>
  );
}

export default MainPageShadow;
