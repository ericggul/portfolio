import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import './VisualDetailPage.scss';
import VisualSingleElement from './VisualSingleElement/VisualSingleElement';
import { Projects, Topics } from '../../utils/Constants';

interface DetailProps {
  indicator: number;
  projectIdx: number;
  handlePopupClose: any;
}

function VisualDetailPage({indicator, projectIdx, handlePopupClose}: DetailProps) {

  const [currentProject, setCurrentProject] = useState(projectIdx);
  
  console.log(currentProject, Projects[indicator])

  const navigatorClick = useCallback((dir: number) => {
    setCurrentProject(current => current > 0 || dir === 1 ? (current + dir) % Projects[indicator].length : Projects[indicator].length-1);
  }, [currentProject, indicator]);



  const BackToMain = () => (
    <div 
      className="back" 
      onClick={handlePopupClose}
    >
      Back to Main
    </div>
  )

  const CurrentPage = () => (
    <div className="current-back" onClick={handlePopupClose}>
      &#215;
    </div>
  )

  const ProjectNavigator = (props: any) => (
    <div className="whole-screen">
      <div className="side-navigator" onClick={() => props.handleClick(-1)}>{'<'}</div>
      <div className="side-navigator" onClick={() => props.handleClick(1)}>{'>'}</div>
    </div>
  )


  return (
    <div className="detail-container">
      <VisualSingleElement project={Projects[indicator][currentProject]} topic={Topics[indicator]} />
      <BackToMain />
      <CurrentPage />
      <ProjectNavigator handleClick={navigatorClick} />
    </div>
  );
}

export default VisualDetailPage;
