import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import "./MainPage.scss";

import { Topics, SemiDescriptions, Projects } from "../../static/Constants";
import AudioVisualization from "../../components/AudioVisualization/AudioVisualization";
import Subject from "../../components/SubjectRender/SubjectRender";
import VisualDetailPage from "../VisualDetailPage/VisualDetailPage";
import DetailPage from "../DetailPage/DetailPage";
import CVPDF from "../../assets/CV/CV.pdf";

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const Topic = (props: any) => {
  return (
    <div className="topic" onClick={props.handleExpand}>
      <div className="topic-header">{Topics[props.i].name}</div>
      <div className="topic-description">{Topics[props.i].description}</div>
      <div className="topic-view-less">{props.expanded && "View Less"}</div>
    </div>
  );
};

const Overview = ({ handleExpand, item }: any) => {
  return (
    <div className="overview" onClick={handleExpand}>
      <div className="overview-contents">
        <div className="overview-type"> {item.type}</div>
        {item.role && <div className="overview-role">{item.role}</div>}
        <div className="overview-description">{item.description}</div>
        <div className="overview-supp">{item.stacks}</div>
        <div className="overview-supp">{item.period}</div>
      </div>
    </div>
  );
};

const Expander = (props: any) => {
  return (
    <div className="expander" onClick={props.idx === 0 ? () => window.open("https://laboratory-occupied.com/lobby", "_blank") : props.handleExpand}>
      {props.expanded ? "View Less" : props.idx === 0 ? "Link" : "View More"}
    </div>
  );
};

const Row = React.memo(({ idx, setVisualPopupStatus, setVisualPopupOpened, setDetailPopupStatus, setDetailPopupOpened }: any) => {
  const [expanded, setExpanded] = useState(false);

  const subjectWrapperRef = useRef<any>();

  const sendToDetail = useCallback((indicator: number, projectIdx: number) => {
    if (indicator === 0 || indicator === 1 || indicator === 4) {
      setVisualPopupStatus({
        indicator: indicator,
        projectIdx: projectIdx,
      });
      setVisualPopupOpened(true);
    } else {
      setDetailPopupStatus(indicator * 10 + projectIdx + 1);
      setDetailPopupOpened(true);
    }
  }, []);

  return (
    <div className="subject-row" ref={subjectWrapperRef} key={idx}>
      <Topic i={idx} expanded={expanded} handleExpand={() => (idx === 0 ? window.open("https://laboratory-occupied.com/lobby", "_blank") : setExpanded((exp) => !exp))} />
      {expanded && Projects[idx].map((subject, i) => <Subject subject={subject} index={i} key={i} idx={idx} sendToDetail={sendToDetail} />)}
      {!expanded && <Overview handleExpand={() => (idx === 0 ? window.open("https://laboratory-occupied.com/lobby", "_blank") : setExpanded((exp) => !exp))} item={SemiDescriptions[idx]} />}
      <Expander expanded={expanded} handleExpand={() => setExpanded((exp) => !exp)} idx={idx} />
    </div>
  );
});

function MainContainer({ volume, onVolumeChange }: any) {
  const isMobile = useMemo(() => window.innerWidth < 600, [window.innerWidth]);

  const starRef = useRef<any>();

  const createNode = (x: number, y: number) => {
    const n = document.createElement("div");
    const width = Math.random() * 5 + 2;
    n.className = "mouse-star";
    n.setAttribute("style", `left: ${x}px; top: ${y}px; width: ${width}px; height: ${width}px; filter: blur(${width / 3}px)`);
    starRef.current.appendChild(n);
  };

  //Add Star Component
  const addStarMouse = (e: any) => {
    if (!isMobile && starRef.current) {
      createNode(e.x, e.y);
    }
  };

  useEffect(() => {
    window.addEventListener("click", addStarMouse);
    return () => window.removeEventListener("click", addStarMouse);
  }, []);

  //POPUP
  const [visualPopupOpened, setVisualPopupOpened] = useState(false);
  const [visualPopupStatus, setVisualPopupStatus] = useState({
    indicator: 0,
    projectIdx: 0,
  });
  const [detailPopupOpened, setDetailPopupOpened] = useState(false);
  const [detailPopupStatus, setDetailPopupStatus] = useState(10);

  const handlePopupClose = useCallback(() => {
    setVisualPopupOpened(false);
    setDetailPopupOpened(false);
  }, []);

  const handleIdChange = useCallback(
    (dir) => {
      setDetailPopupStatus((id) => {
        if (id + dir < 21) {
          return 24;
        } else if (id < 30 && id + dir > 24) {
          return 21;
        } else if (id > 30 && id + dir < 31) {
          return 33;
        } else if (id + dir > 33) {
          return 31;
        } else {
          return id + dir;
        }
      });
    },
    [detailPopupStatus]
  );

  const hanldePDFDown = () => {
    console.log("clicked!");
    var link = document.createElement("a");
    link.href = CVPDF;
    link.download = "JYC_CV.pdf";
    link.click();
  };

  const handleVolume = useCallback(() => {
    onVolumeChange(0.5);
  }, [volume]);

  return (
    <>
      <div className="main">
        <div className="info-sector">
          <div className="CV" onClick={hanldePDFDown}>
            CV
          </div>
          {/* {"|"}
          <div className="Volume" onClick={handleVolume}>
            Music
          </div> */}
        </div>
        <div className="star" ref={starRef} />
        <div className="subject-list">
          {new Array(5).fill(0).map((e, idx) => (
            <Row
              idx={idx}
              setVisualPopupStatus={setVisualPopupStatus}
              setVisualPopupOpened={setVisualPopupOpened}
              setDetailPopupStatus={setDetailPopupStatus}
              setDetailPopupOpened={setDetailPopupOpened}
            />
          ))}
        </div>
      </div>
      {visualPopupOpened && <VisualDetailPage indicator={visualPopupStatus.indicator} projectIdx={visualPopupStatus.projectIdx} handlePopupClose={handlePopupClose} />}
      {detailPopupOpened && <DetailPage id={detailPopupStatus} handlePopupClose={handlePopupClose} handleIdChange={handleIdChange} />}
    </>
  );
}

function MainPage() {
  const [volume, setVolume] = useState(1);
  const initializeAudioVolume = (initVolume: any) => {
    setVolume(initVolume);
  };

  return (
    <>
      <AudioVisualization audioPlaying={false} initializeVolume={initializeAudioVolume} volume={volume} />
      <MainContainer volume={volume} onVolumeChange={setVolume} />
    </>
  );
}
export default MainPage;
