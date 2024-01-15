//hooks
import { useState, useMemo, useEffect } from "react";
import useResize from "@/utils/hooks/useResize";

import Link from "next/link";
import { useRouter } from "next/navigation";

//
//styles
import * as S from "./styles";
import { toast, Toast } from "loplat-ui";
import { getRandom } from "@/utils/functions/getRandom";

const START = 8;

function showButtonSet(idx: number, lv: number) {
  if (lv <= START + 1) {
    return false;
  }
  if (lv === START + 2) {
    if (idx === 0) {
      return true;
    } else {
      return false;
    }
  }
  if (lv === START + 3) {
    if (idx <= 2) {
      return true;
    } else {
      return false;
    }
  }
  if (lv === START + 4) {
    if (idx <= 5) {
      return true;
    } else {
      return false;
    }
  }
  if (lv >= START + 5) {
    return true;
  }
  return false;
}

function Intro() {
  const [level, setLevel] = useState(0);
  const [smallEl, setSmallEl] = useState<any>([]);

  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    if (level >= START - 2) {
      setSmallEl((el: any) =>
        new Array(30).fill(0).map((_, i) => ({
          key: i,
          pos: {
            x: getRandom(0, windowWidth),
            y: getRandom(0, windowHeight),
          },
          colorHue: getRandom(0, 360),
          delay: getRandom(getRandom(0.5, 0.7), getRandom(0.8, 1.0)),
        }))
      );
    }

    if (level === START) {
      toast.success(`You really want to enter this portfolio. Don't you?`);
    } else if (level === START + 1) {
      toast.danger(`You really want to enter this portfolio. Don't you?`);
      toast.warning(`You really want to enter this portfolio. Don't you?`);
    } else if (level === START + 2 || level === START + 3 || level === START + 4) {
      toast.danger("Do You?");
    } else if (level === START + 6) {
      toast.info(`Then click on the button please`);
    } else if (level >= START + 8) {
      toast.success(`Stop playing with it and click on the link`);
    }
  }, [level, windowWidth, windowHeight]);

  const [popOut, setPopOut] = useState(new Array(5).fill(false));
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();
  function yesButtonClick(e: any) {
    e.preventDefault();
    setInterval(() => {
      setPopOut((arr: any) => {
        const newArr = [...arr];
        let i = 0;
        while (i < newArr.length) {
          if (!newArr[i]) {
            newArr[i] = true;
            break;
          }
          i++;
        }
        return newArr;
      });
    }, 180);

    setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    setTimeout(() => {
      window.alert("Site under construction! Please visit IG @schumpeterstrasse for more works");
      // router.push({
      //   pathname: "/main",
      //   query: { givenComponent: "tictactoe" },
      // });
    }, 3300);
  }

  const yesTextPos = useMemo(() => new Array(50).fill(0).map((_) => ({ top: getRandom(0, windowHeight), left: getRandom(0, windowWidth), size: getRandom(3, 7) })), [windowWidth, windowHeight]);

  useEffect(() => {
    //on enter button press on keyboard
    function handleOnKeydown(e: any) {
      if (e.key === "Enter") {
        setLevel((lv) => lv + 1);
      }
    }
    const event = document.addEventListener("keydown", handleOnKeydown);
    return () => document.removeEventListener("keydown", handleOnKeydown);
  }, []);

  return (
    <S.Container level={level} onClick={() => setLevel((l) => l + 1)} fadeOut={fadeOut}>
      <S.Title level={level}>
        Enter
        <S.Overline level={level} />
      </S.Title>
      {smallEl.map((el: any, i: number) => (
        <S.SmallEl key={el.key} pos={el.pos} rotation={getRandom(-1, 1)} level={level} colorHue={el.colorHue} delay={el.delay} popOut={popOut[0]}>
          Enter
        </S.SmallEl>
      ))}
      <Toast duration={2000} />
      <S.ButtonContainer>
        {new Array(10).fill(0).map((_, i) => (
          <S.SingleSet key={i} show={showButtonSet(i, level)}>
            <S.YesButton onClick={yesButtonClick}>Yes I Do!</S.YesButton>
            <S.NoButton>No I Do!</S.NoButton>
          </S.SingleSet>
        ))}
      </S.ButtonContainer>

      {popOut.map((bool, j) => (
        <S.YesContainer popOut={bool} key={j}>
          {new Array(10).fill(0).map((_, i) => (
            <S.YesText pos={yesTextPos[10 * j + i]} key={i}>
              Yes I Do
            </S.YesText>
          ))}
        </S.YesContainer>
      ))}
      <S.CoverageContainer fadeOut={fadeOut} />
      <S.InvisibleText>
        <h1>Jeanyoon Choi Portfolio.</h1>
        <h2>Web-based new media artist Jeanyoon Choi Portfolio.</h2>
        <h3>Featuring 200+ latest work by Jeanyoon Choi.</h3>
        <h4>Jeanyoon Choi is a student of Royal College of Art Information Experience Design program</h4>
        <p>Royal College of Art Information Experience Design Portfolio Jeanyoon Choi</p>
        <p>Copyright &#169; 2022 Jeanyoon Choi</p>
        <Link href="/main">
          <button>Go to Main Portfolio</button>
        </Link>

        <Link href="/main">
          <button>View Other Artworks</button>
        </Link>
      </S.InvisibleText>
    </S.Container>
  );
}

export default Intro;
