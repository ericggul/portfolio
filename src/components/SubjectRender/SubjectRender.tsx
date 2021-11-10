import React, {useState, useRef, useLayoutEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SubjectRender.scss';

const transition = {
    duration: .6, ease: [.43, .13, 0.23, 0.96]
}

function Subject(props : any) {
    const history = useHistory();
    const i = props.index;
    const subject = props.subject;
    const imgRef = useRef<any>();
    const [ elementRect, setElementRect ] = useState<DOMRect | undefined>();
    
    useLayoutEffect(()=>{
      const { width, height, offsetTop } = imgRef.current;
      const rect = imgRef.current.getBoundingClientRect();
      setElementRect(rect)
    }, [imgRef])
    
    return(
      <div className="subject" onClick={()=>history.push(`/detail/${i+1}`)}>
        <div className="cards-wrapper">
          <div className="image-card" onClick={()=>history.push(`/detail/${i+1}`)}>
            <motion.img 
              exit={{opacity: 0}}
              transition = {transition}
              ref={imgRef}
              src={subject.image} 
              alt={subject.description.name}
              style={{ filter : `drop-shadow(0 0 3rem #AAA)` }}
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

export default Subject;
