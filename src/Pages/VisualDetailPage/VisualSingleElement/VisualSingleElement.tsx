import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import "./VisualSingleElement.scss";
import { motion } from "framer-motion";
import { useHistory, Link } from "react-router-dom";
import { EventBehavior } from "../../../initializer/googleAnalytics";
import { Projects, Topics } from "../../../utils/Constants";

function VisualSingleElement(props: any) {
  const history = useHistory();
  const project = props.project;

  console.log(project);

  const link =
    project?.description.link.length > 0
      ? project?.description.link[0]
      : undefined;

  useEffect(() => {
    EventBehavior("Activity", "Viewed New Project", "project view");
  }, [props.project]);

  interface TTTProps {
    list: any;
  }

  const TTT = ({ list }: TTTProps) => (
    <div className="ttt-container">
      {list.map((el: any, i: any) => (
        <div className="ttt-sector" key={i}>
          <div className="header">{el[0]}</div>
          <div className="body">{el[1]}</div>
        </div>
      ))}
    </div>
  );

  interface ParaProps {
    header: string;
    body: string;
  }

  const ImageCarousel = (props: any) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [transition, setTransition] = useState(true);
    const [imgList, setImgList] = useState([]);
    useEffect(() => {
      setImgList(props.imgList);
    }, [props.imgList]);
    useEffect(() => {
      if (loaded && imgList.length > 1) {
        const interval = setTimeout(() => {
          setCurrentImage((idx) => (idx + 1) % imgList.length);
          setLoaded(false);
        }, 5000);
        const timeOut1 = setTimeout(() => setTransition(false), 500);
        const timeOut2 = setTimeout(() => setTransition(true), 4500);
        return () => {
          clearTimeout(interval);
          clearTimeout(timeOut1);
          clearTimeout(timeOut2);
        };
      } else {
        const timeOut1 = setTimeout(() => setTransition(false), 500);
        return () => clearTimeout(timeOut1);
      }
    }, [currentImage, loaded]);

    return (
      <div className="carousel">
        <div className="image-container">
          <img
            onLoad={() => setLoaded(true)}
            src={props.imgList[currentImage]}
            alt={project?.description.name}
            className={transition || !loaded ? "darken" : ""}
          />
        </div>
        <div className="loc-guider">
          {props.imgList.map((img: any, idx: number) => (
            <div
              className="dot"
              key={idx}
              style={{
                backgroundColor: `${currentImage === idx ? "white" : "#777"}`,
              }}
              onClick={() => setCurrentImage(idx)}
            />
          ))}
        </div>
      </div>
    );
  };

  const DetailElement = () => (
    <div className="detail-element">
      <div className="image">
        <ImageCarousel imgList={project?.description.Images} />
        {link && (
          <a
            href={link}
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <div className="captions">Visit Link</div>
          </a>
        )}
      </div>
      <div className="description">
        <div className="title">
          <a
            href={link}
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            {project?.description.name}
          </a>
          <div className="sub">
            {props.topic.name}
            <br />
            {project?.description.type}
          </div>
        </div>
        <TTT list={project?.description.TTT} />
      </div>
    </div>
  );

  return (
    <motion.div
      className="mainbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit="exit"
    >
      <DetailElement />
    </motion.div>
  );
}

export default VisualSingleElement;
