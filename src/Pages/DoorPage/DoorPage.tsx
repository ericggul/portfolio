import React, { useState, useEffect, useReducer } from "react";
import "./DoorPage.scss";
import { motion } from "framer-motion";
import { useHistory, useParams } from "react-router-dom";
import { LoadImages } from "../../static/Constants";

const transition = { duration: 2 };

const UNI_CONVERTER = [
  { university: "UAL", phase: "UAL MRes Creative Computing" },
  { university: "Goldsmiths", phase: "Goldsmiths Computational Art" },
  { university: "MIT", phase: "MIT Media Arts and Science" },
  { university: "NYU", phase: "NYU IDM" },
  { university: "GATech", phase: "GATech MSHCI" },
  { university: "CMU", phase: "CMU MHCI" },
  { university: "RCA", phase: "RCA IED" },
  { university: "ZER01NE", phase: "ZER01NE Creator" },
  { university: "SAC", phase: "Seoul Arts Center Youth Artist Shop" },
  { university: "BeomSeon", phase: "2022 Lotte Young Artist Art Fair" },
];

export default function DoorPage() {
  useEffect(() => {
    LoadImages();
  }, []);

  const history = useHistory();
  type Params = { uni: any };
  const { uni } = useParams<Params>();

  const selectedPhase = UNI_CONVERTER.filter((e) => e.university === uni)[0] ? UNI_CONVERTER.filter((e) => e.university === uni)[0].phase : "UAL MRes Creative Computing";

  const [pushed, setPushed] = useState(false);
  const [volume, setVolume] = useState(1);
  const [script, setScript] = useState(0);

  const script_array = [
    "",
    "Monolith, a perfect geometrical structure",
    "Represents the human evolution in Stanley Kubrick's film",
    "This Nietzsche-tic representation of evolution should be well replicated",
    "When presenting where our civilization should be heading for next decades.",
    `${selectedPhase} Candidate, Jeongyoon Choi`,
    "Push the right door to enter",
  ];

  useEffect(() => {
    setTimeout(() => {
      setScript(1);
    }, 30000);
    setTimeout(() => {
      setScript(2);
    }, 38000);
    setTimeout(() => {
      setScript(3);
    }, 45000);
    setTimeout(() => {
      setScript(4);
    }, 53000);
    setTimeout(() => {
      setScript(5);
    }, 60000);
    setTimeout(() => {
      setScript(6);
    }, 73000);
  }, []);

  const handlePush = (e: any) => {
    setOpacity(0);
    setPushed(true);
    setTimeout(
      () =>
        history.push({
          pathname: `/main`,
          state: { audioPlaying: false },
        }),
      2000
    );
  };

  const [opacity, setOpacity] = useState(1);

  return (
    <motion.div className="App" initial="initial" exit="exit" transition={transition}>
      <motion.div
        animate={{
          opacity: opacity,
        }}
        transition={transition}
        className="door-container left-door"
      />
      <div className="door-container right-container">
        <motion.div
          animate={{
            opacity: opacity,
          }}
          transition={transition}
          className={"right-door"}
          style={{ cursor: `${script > 4 ? "pointer" : "wait"}` }}
          onClick={handlePush}
        >
          <div className="push-box">
            <div className="push-text">PUSH</div>
          </div>
        </motion.div>
      </div>

      <div className="subtitle">{script_array[script]}</div>
    </motion.div>
  );
}
