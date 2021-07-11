import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './MainPageShadow.scss';
import { motion } from 'framer-motion';
import Projects from '../../utils/Constants';

import useMousePosition from '../../hooks/useMousePosition';
import useMousePositionPage from '../../hooks/useMousePositionPage';
import useWindowDimensions from '../../hooks/useWindowDimensions';


function MainPageShadow() {

  const { mouseX, mouseY } = useMousePosition();
  const { mousePageX, mousePageY } = useMousePositionPage();


  // const Mouse = () => (
  //   <div className="mouse-shadow" style={{left: `${mouseX}px`, top: `${mouseY}px`}}/>
  // )

  const StarMouse = (x: number, y: number) => (
    <div className="mouse-star" style={{left: `${x}px`, top: `${y}px`}} />
  )

  const starComponent = <></>

  const addStarMouse = () =>{
    
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
    
    useLayoutEffect(()=>{
      const { width, height, offsetTop } = imgRef.current;
      // const rect = imgRef.current.getBoudingClientRect();
      setElementPosition({width, height, offsetTop})
    }, [imgRef])


    const { width, height } = useWindowDimensions();
    
    const left = 450* i + 225
    const top = height/2-525/2 + 173;

    var shadowX = (left-mousePageX)/10
    var shadowY = (top-mousePageY)/10
    var shadowLength = Math.sqrt((top-mousePageY) ** 2 + (left-mousePageX) ** 2)/20 + 60
    
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
              marginLeft: `${165-elementPosition.width/2}px`
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
    <div className="main">
      {starComponent}
      <div className="shadow" />
      <div className="subject-list">
        <div className="subject-wrapper">
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
