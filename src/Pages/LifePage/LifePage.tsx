import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LifePage.scss';
import Zarathustra from "../../assets/Zarathustra.mp3";

function LifePage() {

  const [volume, setVolume] = useState(1);
  
  const audio: HTMLAudioElement = new Audio(Zarathustra);
  
  useEffect(()=>{
    
  }, [])

  const [text, setText] = useState(0);
  const [color, setColor] = useState(0);
  const history = useHistory();

  const hour = new Date().getHours();
  
  const timeConverter = (hour: number) => {
    if(hour<6){
      return 'Night'
    } else if (hour<12){
      return 'Morning'
    } else if (hour<17){
      return 'Afternoon'
    } else{
      return 'Evening'
    }
  }

  const city_array = [
    'Seoul', 'Pittsburgh', 'New York', 'Atlanta', 'London'
  ]


  const text_set = [
    // `good ${timeConverter(hour)} ${city_array[Math.floor(Math.random()*4)]}`,
    `good ${timeConverter(hour)} Linz`,
    "please turn on the music",
  ]



  const color_set = [
    '#0E3F89',"#A30E0B"
  ]

  const handleClick = () => {
    if(text==0){
      setText(1)
      setColor(1)
    }

    setTimeout(()=>{
      history.push('/door')
    }, 9000)

    audio.currentTime = 3;
    audio.volume = volume;
    var playPromise = audio.play();

    if(playPromise!== undefined){
      playPromise.then(_ => {
        console.log('playing')
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  useEffect(()=>{
    const utterance = new SpeechSynthesisUtterance(text_set[text])
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }, [text])


  return (
    <div className="App">
      <div className={`terminal ${text>0 && 'termi-animation'}`} style={{background: `${color_set[color]}`, cursor: `${color===0 ? "pointer" : "wait"}`}}>
        <div className={`text ${text>0 && 'animation'}`} onClick={handleClick}>
          {text_set[text]}
        </div>
      </div>
    </div>
  );
}

export default LifePage;
