//hooks
import { useState, useMemo, useEffect } from "react";
import useResize from "utils/hooks/useResize";

//styles
import * as S from "./styles";

import { toast, Toast } from "loplat-ui";

const getRandom = (a: number, b: number) => Math.random() * (b - a) + a;

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
}

function Intro({ moveToNextComponent }: any) {
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
      toast.info(`Then click on the button s'il vous plait`);
    } else if (level >= START + 8) {
      toast.success(`Stop playing with it and click on the link`);
    }
  }, [level]);

  function yesButtonClick(e: any) {
    e.preventDefault();
    moveToNextComponent();
  }

  return (
    <S.Container level={level} onClick={() => setLevel((l) => l + 1)}>
      <S.Title level={level}>
        Enter
        <S.Overline level={level} />
      </S.Title>
      {smallEl.map((el: any, i: number) => (
        <S.SmallEl key={el.key} pos={el.pos} rotation={level * getRandom(0.5, 2)} level={level} colorHue={el.colorHue} delay={el.delay}>
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
    </S.Container>
  );
}

export default Intro;
