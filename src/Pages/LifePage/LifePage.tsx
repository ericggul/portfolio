import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LifePage.scss';


function LifePage() {

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
    `good ${timeConverter(hour)} ${city_array[Math.floor(Math.random()*4)]}`,
    "please turn on the music",
  ]



  const color_set = [
    '#0E3F89',"#A30E0B"
  ]

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setText(1)
      setColor(1)
    }, 3000)
    return () => clearTimeout(timer);

  }, [])

  useEffect(()=>{
    const utterance = new SpeechSynthesisUtterance(text_set[text])
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }, [text])

  setTimeout(()=>{
    history.push('/door')
  }, 10000)

  return (
    <div className="App">
      <div className="terminal" style={{background: `${color_set[color]}`}}>
        <div className={`text ${text>0 && 'animation'}`}>
          {text_set[text]}
        </div>
      </div>
    </div>
  );
}

export default LifePage;
