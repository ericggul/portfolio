import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./LifePage.scss";
import Zarathustra from "../../assets/mp3/Zarathustra.mp3";

const UNI_CONVERTER = [
  { university: "UAL", city: "London" },
  { university: "Goldsmiths", city: "London" },
  { university: "MIT", city: "Boston" },
  { university: "NYU", city: "New York" },
  { university: "GATech", city: "Atlanta" },
  { university: "CMU", city: "Pittsburgh" },
  { university: "RCA", city: "London" },
  { university: "ZER01NE", city: "ZER01NE" },
  { university: "SAC", city: "Seoul" },
  { university: "BeomSeon", city: "Busan" },
];

function LifePage() {
  const history = useHistory();
  type Params = { uni: any };
  const { uni } = useParams<Params>();

  const [city, setCity] = useState(UNI_CONVERTER.filter((entity) => entity.university === uni)[0] ? UNI_CONVERTER.filter((entity) => entity.university === uni)[0].city : null);

  const [volume, setVolume] = useState(1);

  const audio: HTMLAudioElement = new Audio(Zarathustra);

  const [text, setText] = useState(0);
  const [color, setColor] = useState(0);

  const hour = new Date().getHours();

  const timeConverter = (hour: number) => {
    if (hour < 6) {
      return "Night";
    } else if (hour < 12) {
      return "Morning";
    } else if (hour < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  const [texts, setTexts] = useState(city ? [`good ${timeConverter(hour)} ${city}`, "please turn on the music"] : ["Enter"]);

  const color_set = ["#0E3F89", "#A30E0B"];

  const handleClick = () => {
    if (city) {
      goToMonolith();
    } else {
      goToMain();
    }
  };

  const goToMonolith = () => {
    if (text == 0) {
      setText(1);
      setColor(1);
    }

    setTimeout(() => {
      history.push(`/monolith/${uni}`);
    }, 9000);

    audio.currentTime = 3;
    audio.volume = volume;
    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          console.log("playing");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const goToMain = () => {
    history.push("/main");
  };

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(texts[text]);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  }, [text]);

  return (
    <div className="App">
      <div
        className={`terminal ${text > 0 && "termi-animation"}`}
        style={{
          background: `${color_set[color]}`,
          cursor: `${color === 0 ? "pointer" : "wait"}`,
        }}
      >
        <div className={`text ${text > 0 && "animation"}`} onClick={handleClick}>
          {texts[text]}
        </div>
      </div>
    </div>
  );
}

export default LifePage;
