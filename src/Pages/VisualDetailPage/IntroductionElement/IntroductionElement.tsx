import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import "./IntroductionElement.scss";
import { motion } from "framer-motion";

function IntroductionElement(props: any) {
  const DetailElement = () => (
    <div className="detail-element">
      <div className="title-section">
        <div className="large-title">{props.topic.name}</div>
        <div className="small-title">{props.topic.description}</div>
      </div>
      <div className="title-section">
        <div className="large-title">{props.topic.name}</div>
        <div className="small-title">{props.topic.description}</div>
      </div>
    </div>
  );

  return (
    <motion.div className="mainbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit="exit">
      <DetailElement />
    </motion.div>
  );
}

export default IntroductionElement;
