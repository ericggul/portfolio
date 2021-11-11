import React, { useState, useEffect } from 'react';
import './DetailPage.scss';
import { motion } from 'framer-motion';
import { useHistory, useParams } from 'react-router-dom';
import { OriginalPages } from '../../utils/Constants';

function DetailPage() {

  const history = useHistory();
  type Params = {id: any}
  const { id } = useParams<Params>();

  console.log(id);
  const project = OriginalPages.filter(prj => prj.id == id)[0]
  console.log(project);

  const backToMain = (
    <div className="back" onClick={()=>history.push({pathname: '/main'})}>
      Back to Main
    </div>
  )

  const CurrentPage = () => {
    return(
      <div className="current">
        {project?.description.name}
      </div>
    )
  }

  interface CaptionProps {
    list: any;
  }

  const Caption = ({list}: CaptionProps) => {
    return(
      <div className="stacks">
        {list.map((el: any, i: any) => (
          <div className="body" key={i}>
            {el}
          </div>
        ))}
      </div>
    )
  }

  interface TTTProps {
    list: any;
  }

  const TTT = ({list} : TTTProps) => {
    return(
      <div className="ttt-container">
        {
          list.map((el: any, i: any)=>(
            <div className="ttt-sector" key={i}>
              <div className="header">{el[0]}</div>
              <div className="body">{el[1]}</div>
            </div>
          ))
        }
      </div>
    )
  }

  interface ParaProps {
    header: string;
    body: string;
  }

  const Paragraph = ({header, body}: ParaProps) => {
    return(
      <div className="paragraph">
        <div className="header">
          {header}
        </div>
        <div className="body">
          {body}
        </div>
      </div>
    )
  }

  const textParser = (string: string) => {
    return string.split('\n')
  }

  const link = project?.description.link.length > 0 ? project?.description.link[0] : undefined;
  
  const DetailElement1 = () => {
    return(
      <div className="detail-element">
          <div className="image">
            <div className="image-container">
              <a href={link}>
                <motion.img 
                  src={project?.description.Images[0]} 
                  alt={project?.description.name}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                />
              </a>
            </div>
            {project?.description.Captions && <Caption list={project?.description.Captions[0]} />}

          </div>
          <div className="description">
            <div className="title">
              <a href={link} style={{textDecoration: 'none', color: 'white'}}>
                {project?.description.name}
              </a>
              <div className="sub">
                {project?.description?.Subtitles[0]}
              </div>
            </div>
            <TTT list={project?.description.TTT}/>
          </div>
        </div>
    )
  }

  interface DetailElement2Props {
    image: any;
    title: any;
    contents: any;
    index: number;
  }

  const DetailElement2 = ({image, title, contents, index}: DetailElement2Props) => {
    return(
      <div className="detail-element">
          <div className="image">
            <div className="image-container">
              <img 
                src={project?.description.Images[index+1]} 
                alt={project?.description.name}
              />
            </div>
            {project?.description.Captions && <Caption list={project?.description.Captions[index + 1]} />}
          </div>
          <div className="description">
            <div className="title">
              {title}
              <div className="sub">
                {project?.description?.Subtitles[index+1]}
              </div>
            </div>
            {contents.map((v: any,i: any)=>(
              <Paragraph
                header={v[0]}
                body = {v[1]}
                key={i}
              />
            ))}
          </div>
        </div>
    )
  }
  

  return (
    <div className="container">
      <motion.div 
        className="mainbox"
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = 'exit'
      >
        <DetailElement1 />
        {
          project?.description.Paragraphs.map((e: any,i) => {
            return(
            <DetailElement2 
              image={project?.image} 
              title={Object.keys(e)[0]} 
              contents={Object.entries(e)[0][1]}
              index ={i}
              key={i}
            />
            )
            
          })
        }
      </motion.div>
      {backToMain}
      <CurrentPage />
    </div>
  );
}

export default DetailPage;
