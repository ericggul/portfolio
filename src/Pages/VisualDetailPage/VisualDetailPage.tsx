import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import './VisualDetailPage.scss';
import { useHistory, Link, useLocation } from 'react-router-dom';
import VisualSingleElement from './VisualSingleElement/VisualSingleElement';
import { Projects, Topics } from '../../utils/Constants';


function VisualDetailPage() {

  const history = useHistory();
  type LocationState = {projectIdx: number};
  const location = useLocation<LocationState>();
  type Params = {indicator: any};
  const {indicator} = useParams<Params>();

  const [currentProject, setCurrentProject] = useState(location?.state?.projectIdx ? location?.state?.projectIdx : 0);

  console.log(currentProject, Projects[indicator])

  const navigatorClick = useCallback((dir: number) => {
    setCurrentProject(current => current > 0 || dir === 1 ? (current + dir) % Projects[indicator].length : Projects[indicator].length-1);
  }, [currentProject, indicator]);



  const BackToMain = () => (
    <div 
      className="back" 
      onClick={()=>
        history.push({
          pathname: `/main`,
          state: { audioPlaying: true },
        })
      }
    >
      Back to Main
    </div>
  )

  const CurrentPage = () => (
    <div className="current">
      {Projects[indicator][currentProject]?.description.name}
    </div>
  )

  const ProjectNavigator = (props: any) => (
    <div className="whole-screen">
      <div className="side-navigator" onClick={() => props.handleClick(-1)}>{'<'}</div>
      <div className="side-navigator" onClick={() => props.handleClick(1)}>{'>'}</div>
    </div>
  )


  return (
    <div className="container">
      <VisualSingleElement project={Projects[indicator][currentProject]} topic={Topics[indicator]} />
      <BackToMain />
      <CurrentPage />
      <ProjectNavigator handleClick={navigatorClick} />
    </div>
  );
}

export default VisualDetailPage;
