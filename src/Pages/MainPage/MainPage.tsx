import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import "./MainPage.scss";
import { motion } from "framer-motion";
import { Topics, SemiDescriptions, Projects } from "../../utils/Constants";
import AudioVisualization from "../../components/AudioVisualization/AudioVisualization";
import Subject from "../../components/SubjectRender/SubjectRender";
import VisualDetailPage from "../VisualDetailPage/VisualDetailPage";
import DetailPage from "../DetailPage/DetailPage";
import CVPDF from "../../assets/CV/CV.pdf";

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

function MainContainer() {
  const isMobile = useMemo(() => window.innerWidth < 600, [window.innerWidth]);

  const starRef = useRef<any>();
  const subjectWrapperRef = useRef<any>();

  const createNode = (x: number, y: number) => {
    const n = document.createElement("div");
    const width = Math.random() * 5 + 2;
    n.className = "mouse-star";
    n.setAttribute(
      "style",
      `left: ${x}px; top: ${y}px; width: ${width}px; height: ${width}px; filter: blur(${
        width / 3
      }px)`
    );
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
      <div className="expander" onClick={props.handleExpand}>
        {props.expanded ? "View Less" : "View More"}
      </div>
    );
  };

  const Row = React.memo(({ idx, expanded, handleRowExpansion }: any) => {
    const [expandedStatus, setExpandedStatus] = useState(false);

    useEffect(() => {
      if (expanded[idx] !== expandedStatus) {
        setExpandedStatus(expanded[idx]);
      }
    }, [expanded, expandedStatus, idx]);

    return (
      <div className="subject-row" ref={subjectWrapperRef} key={idx}>
        <Topic
          i={idx}
          expanded={expandedStatus}
          handleExpand={() => handleRowExpansion(idx)}
        />
        {expandedStatus &&
          Projects[idx].map((subject, i) => (
            <Subject
              subject={subject}
              index={i}
              key={i}
              idx={idx}
              sendToDetail={sendToDetail}
            />
          ))}
        {!expandedStatus && (
          <Overview
            handleExpand={() => handleRowExpansion(idx)}
            item={SemiDescriptions[idx]}
          />
        )}
        <Expander
          expanded={expandedStatus}
          handleExpand={() => handleRowExpansion(idx)}
        />
      </div>
    );
  });

  //ROW EXPANDED STATUS

  const [rowExpanded, setRowExpanded] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleRowExpansion = useCallback(
    (idx) => {
      setRowExpanded((array) =>
        array.map((bool, i) => (i === idx ? !bool : bool))
      );
    },
    [rowExpanded]
  );

  //POPUP
  const [visualPopupOpened, setVisualPopupOpened] = useState(false);
  const [visualPopupStatus, setVisualPopupStatus] = useState({
    indicator: 0,
    projectIdx: 0,
  });
  const [detailPopupOpened, setDetailPopupOpened] = useState(false);
  const [detailPopupStatus, setDetailPopupStatus] = useState(10);

  const sendToDetail = useCallback((indicator: number, projectIdx: number) => {
    if (indicator === 0 || indicator === 1 || indicator === 4) {
      setVisualPopupStatus({ indicator: indicator, projectIdx: projectIdx });
      setVisualPopupOpened(true);
    } else {
      setDetailPopupStatus(indicator * 10 + projectIdx + 1);
      setDetailPopupOpened(true);
    }
  }, []);

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

  return (
    <>
      <div className="main">
        <div className="info-sector">
          <div className="CV" onClick={hanldePDFDown}>
            CV
          </div>
        </div>
        <div className="star" ref={starRef} />
        <div className="subject-list">
          {new Array(5).fill(0).map((e, idx) => (
            <Row
              idx={idx}
              expanded={rowExpanded}
              handleRowExpansion={handleRowExpansion}
            />
          ))}
        </div>
      </div>
      {visualPopupOpened && (
        <VisualDetailPage
          indicator={visualPopupStatus.indicator}
          projectIdx={visualPopupStatus.projectIdx}
          handlePopupClose={handlePopupClose}
        />
      )}
      {detailPopupOpened && (
        <DetailPage
          id={detailPopupStatus}
          handlePopupClose={handlePopupClose}
          handleIdChange={handleIdChange}
        />
      )}
    </>
  );
}

function MainPage() {
  return (
    <>
      <AudioVisualization audioPlaying={false} />
      <MainContainer />
    </>
  );
}
export default MainPage;
