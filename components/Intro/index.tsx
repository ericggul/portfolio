//hooks
import { useState, useMemo, useEffect } from "react";
import useResize from "utils/hooks/useResize";

//styles
import * as S from "./styles";

import { toast, Toast } from "loplat-ui";

const getRandom = (a: number, b: number) => Math.random() * (b - a) + a;

function showButtonSet(idx: number, lv: number) {
  if (lv <= 4) {
    return false;
  }
  if (lv === 5) {
    if (idx === 0) {
      return true;
    } else {
      return false;
    }
  }
  if (lv === 6) {
    if (idx <= 2) {
      return true;
    } else {
      return false;
    }
  }
  if (lv === 7) {
    if (idx <= 5) {
      return true;
    } else {
      return false;
    }
  }
  if (lv >= 8) {
    return true;
  }
}

function Intro({ moveToNextComponent }: any) {
  const [level, setLevel] = useState(0);
  const [smallEl, setSmallEl] = useState<any>([]);

  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    if (level >= 2) {
      setSmallEl((el: any) =>
        new Array(30).fill(0).map((_, i) => ({
          key: i,
          pos: {
            x: getRandom(0, windowWidth),
            y: getRandom(0, windowHeight),
          },
          colorHue: getRandom(0, 360),
        }))
      );
    }

    if (level === 4) {
      toast.success(`You really want to enter this portfolio. Don't you?`);
    } else if (level === 5) {
      toast.danger(`You really want to enter this portfolio. Don't you?`);
      toast.info(`You really want to enter this portfolio. Don't you?`);
      toast.white(`You really want to enter this portfolio. Don't you?`);
      toast.warning(`You really want to enter this portfolio. Don't you?`);

      toast.danger(`You really want to enter this portfolio. Don't you?`);
      toast.info(`You really want to enter this portfolio. Don't you?`);
    } else if (level === 6 || level === 7 || level === 8) {
      toast.danger("Do You?");
    } else if (level === 9) {
      toast.info(`Then click on the button s'il vous plait`);
    } else if (level >= 12) {
      toast.success(`Stop playing with it and click on the link`);
    }
  }, [level]);

  function yesButtonClick(e: any) {
    e.preventDefault();
    moveToNextComponent();
  }

  return (
    <S.Container level={level} onClick={() => setLevel((l) => l + 1)}>
      <S.Title level={level}>Enter</S.Title>
      {smallEl.map((el: any, i: number) => (
        <S.SmallEl key={el.key} pos={el.pos} rotation={level * getRandom(1, 5)} level={level} colorHue={el.colorHue}>
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
