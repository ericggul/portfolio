import React, { useState, useEffect, useCallback } from "react";

import "./AudioVisualization.scss";

import ValkyriesAudio from "../../assets/mp3/Valkyries.mp3";

const getRandom = (a: number, b: number) => Math.random() * (b - a) + a;

declare global {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

function shuffle(length: any) {
  var array = [];
  for (var i = 0; i < length; i++) {
    array.push(i);
  }
  var currentIndex = length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function randomPosArray(length: any, pos: any) {
  var array = [];
  for (var i = 0; i < length; i++) {
    array.push({
      x: `${getRandom(0, pos.width)}`,
      y: `${getRandom(0, pos.height)}`,
    });
  }
  return array;
}

function randomColorArray(length: any) {
  var array = [];
  for (var i = 0; i < length; i++) {
    const color = getRandom(200, 250);
    array.push(`rgba(${color},${color},${color},0.9)`);
  }
  return array;
}

function activation(a: any) {
  if (a < 50) {
    return 0;
  } else {
    return a;
  }
}

const PI2 = Math.PI * 2;

function AudioVisualization(props: any) {
  const audio: HTMLAudioElement = new Audio(ValkyriesAudio);
  var wave: any;

  const [audioPlayed, setAudioPlayed] = useState(false);
  const [memorizedWave, setMemorizedWave] = useState<any>(!null);

  useEffect(() => {
    wave = new App(audio);
  }, []);

  useEffect(() => {
    document.addEventListener("click", playAudio);
    return () => document.removeEventListener("click", playAudio);
  }, [props.audioPlaying, audioPlayed]);

  const playAudio = useCallback(() => {
    if (!audioPlayed) {
      wave.audioCtx.resume();
      wave.audioElement.play();
      props.initializeVolume(wave.audioElement.volume);
      setMemorizedWave(wave);
      setAudioPlayed(true);
    }
  }, [audioPlayed]);

  useEffect(() => {
    console.log(props.volume);
    if (memorizedWave && memorizedWave.audioElement) {
      memorizedWave.audioElement.volume = props.volume;
    }
  }, [props.volume, memorizedWave]);

  return (
    <>
      <div
        id="CanvasWrapper"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          background: "black",
        }}
      />
    </>
  );
}

class App {
  canvas: any;
  ctx: any;
  wrapper: any;

  audioElement: any;
  analyser: any;
  audioCtx: any;
  source: any;

  data: any;

  stageWidth: any;
  stageHeight: any;
  space: any;
  columnNums: any;
  rowNums: any;
  columnWidth: any;
  rowHeight: any;
  cellSize: any;

  shuffledArray: any;
  randomPosArray: any;
  randomColorArray: any;

  constructor(audioElement: any) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.wrapper = document.getElementById("CanvasWrapper");
    this.wrapper.appendChild(this.canvas);

    this.audioElement = audioElement;
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.analyser = this.audioCtx.createAnalyser();

    this.analyser.fftSize = 2048;
    this.source = this.audioCtx.createMediaElementSource(this.audioElement);
    this.data = new Uint8Array(this.analyser.frequencyBinCount);

    this.source.connect(this.analyser);
    this.source.connect(this.audioCtx.destination);

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.init();
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;
    this.space = this.stageWidth / this.stageHeight;

    this.sizeCalculator();

    this.shuffledArray = shuffle(1025);
    this.randomPosArray = randomPosArray(1025, {
      width: this.stageWidth,
      height: this.stageHeight,
    });
    this.randomColorArray = randomColorArray(1025);

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.ctx.scale(1, 1);
  }

  sizeCalculator() {
    //   if(this.space > 3 ){
    //       this.columnNums = 64;
    //       this.rowNums = 16;
    //   } else if (this.space > 1.4 ){
    //       this.columnNums = 40;
    //       this.rowNums = 25;
    //   } else if (this.space > 0.75){
    //       this.columnNums = 32;
    //       this.rowNums = 32;
    //   } else if (this.space > 0.34){
    //       this.columnNums = 25;
    //       this.rowNums = 40;
    //   } else{
    //       this.columnNums = 16;
    //       this.rowNums = 64;
    //   }
    //   this.columnWidth = this.stageWidth / this.columnNums;
    //   this.rowHeight = this.stageHeight / this.rowNums;
    this.cellSize = this.stageWidth < 700 ? 6 : 10;
  }

  init() {
    this.loopingFunction();
  }

  loopingFunction() {
    requestAnimationFrame(this.loopingFunction.bind(this));
    this.analyser.getByteFrequencyData(this.data);
    this.draw(this.data);
  }

  draw(data: any) {
    data = [...data];
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.data.forEach((value: any, i: number) => {
      const shuffledNumber = this.shuffledArray[i];

      //   const xCenter = (shuffledNumber%this.columnNums) * this.columnWidth + this.columnWidth/2;
      //   const yCenter = Math.floor(shuffledNumber/this.columnNums) * this.rowHeight + this.rowHeight/2;
      const xCenter = this.randomPosArray[i].x;
      const yCenter = this.randomPosArray[i].y;
      const size = (value / 255) * this.cellSize;

      this.ctx.beginPath();

      var gradient = this.ctx.createRadialGradient(xCenter, yCenter, 0, xCenter, yCenter, size);
      // Add three color stops
      gradient.addColorStop(0, this.randomColorArray[i]);
      // gradient.addColorStop(0.5, this.randomColorArray[i+1]);
      gradient.addColorStop(1, `transparent`);

      // Set the fill style and draw a rectangle
      this.ctx.fillStyle = gradient;
      this.ctx.arc(xCenter, yCenter, size, 0, PI2, false);

      this.ctx.fill();
      this.ctx.closePath();
    });
  }
}

export default AudioVisualization;
