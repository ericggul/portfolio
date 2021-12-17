import React, {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
} from "react";
import "./SubjectRender.scss";

function Subject(props: any) {
  const subject = props.subject;
  const imgRef = useRef<any>();

  const handleLinkClick = useCallback(() => {
    props.sendToDetail(props.idx, props.index);
  }, [props]);

  const SubjectImage = () => {
    const [loaded, setLoaded] = useState(false);
    const handleLoaded = () => {
      setLoaded(true);
    };
    return (
      <img
        onLoad={handleLoaded}
        ref={imgRef}
        src={subject.image}
        alt={subject.description.name}
        style={{
          opacity: `${loaded ? "1" : "0"}`,
        }}
      />
    );
  };

  return (
    <div className="subject" onClick={handleLinkClick}>
      <div className="cards-wrapper">
        <div className="image-card" onClick={handleLinkClick}>
          <SubjectImage />
        </div>
        <div className="subject-card">
          <div className="title">{subject.description.name}</div>
          <div className="description">
            <div>{subject.description.type}</div>
            <div>{subject.description.detail}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;
