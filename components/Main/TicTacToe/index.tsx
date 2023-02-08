import { useEffect, useState, useCallback, useRef } from "react";
import * as S from "./styles";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { getRandom } from "utils/functions/getRandom";

const TIMEOUT = 500;

function TicTacToe({ handleShine, shine, handleWin }: any) {
  let TICTACTOE_SIZE = 5;

  //state:
  //0: empty
  //1: computer
  //2: player
  const [buttonState, setButtonState] = useState(new Array(TICTACTOE_SIZE ** 2).fill(0));
  const [playState, setPlayState] = useState(0);

  const [computerShouldPlay, setComputerShouldPlay] = useState(false);

  //tic tac toe logic
  const handleButtonClick = useCallback(
    (idx: number) => {
      if (playState === 0 && shine === "#f3f3f3") {
        if (buttonState[idx] !== 0) {
          return;
        }
        setButtonState((prevState: any) => {
          const newState = [...prevState];
          newState[idx] = 2;
          return newState;
        });
        handleShine("black");
        setComputerShouldPlay(true);
      }
    },
    [playState, buttonState, shine]
  );

  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    let status = checkGameStatus();
    if (status === "continue" && computerShouldPlay) {
      timeoutRef.current = setTimeout(() => {
        playComputer();
        setComputerShouldPlay(false);
      }, TIMEOUT);

      return () => clearTimeout(timeoutRef.current);
    }
  }, [buttonState, computerShouldPlay]);

  const playComputer = useCallback(async () => {
    const emptyIndexes = buttonState.reduce((acc: any, cur: any, idx: number) => {
      if (cur === 0) {
        acc.push(idx);
      }
      return acc;
    }, []);

    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    setButtonState((prevState: any) => {
      const newState = [...prevState];
      newState[randomIndex] = 1;
      return newState;
    });
  }, [buttonState]);

  const router = useRouter();

  function checkGameStatus() {
    if (checkWin()) {
      if (checkWin() === 1) {
        toast("You lose! Your specie's intelligence is weaker than Computer haha!!", {
          autoClose: 1500,
        });
        setPlayState(1);
        setTimeout(() => {
          router.back();
        }, 2000);

        return "end";
      } else {
        sessionStorage.setItem("tictactoePlayed", "played");
        toast("You won! What a great intelligence..", {
          autoClose: 1500,
        });
        handleWin();
        setPlayState(2);
        return "end";
      }
    } else if (checkDraw()) {
      toast("Draw! How shame is that for human species.", {
        autoClose: 1500,
      });
      setPlayState(3);
      setTimeout(() => {
        router.back();
      }, 2000);
      return "end";
    } else {
      return "continue";
    }
  }

  const checkWin = useCallback(() => {
    //windindexes for 5 by 5 tic tac toe
    const winIndexes = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];
    for (let i = 0; i < winIndexes.length; i++) {
      const [a, b, c, d, e] = winIndexes[i];
      if (buttonState[a] !== 0 && buttonState[a] === buttonState[b] && buttonState[a] === buttonState[c] && buttonState[a] === buttonState[d] && buttonState[a] === buttonState[e]) {
        return buttonState[a];
      }
    }
    return 0;
  }, [buttonState]);

  const checkDraw = useCallback(() => {
    return buttonState.filter((cur: any) => cur === 0).length === 0;
  }, [buttonState]);

  return (
    <S.TicTacToe>
      {buttonState.map((state: any, i: number) => (
        <S.Button key={i} onClick={() => handleButtonClick(i)} evenIdx={i % 2 === 0} delay={getRandom(0, 1)}>
          {state === 1 && <S.Img src={"/assets/images/TicTacToe/brain-icon.svg"} />}
          {state === 2 && "O"}
        </S.Button>
      ))}
    </S.TicTacToe>
  );
}

export default function TicTacToePage({ moveToNextComponent, currentComponent }: any) {
  const [shine, setShine] = useState<any>("#f3f3f3");
  const [colorIdx, setColorIdx] = useState(0);

  //shine: visual effect
  let shineTimeoutRef = useRef<any>(null);
  useEffect(() => {
    if (shine !== "#f3f3f3") {
      shineTimeoutRef.current = setTimeout(() => {
        setShine("#f3f3f3");
      }, TIMEOUT);
      return () => clearTimeout(shineTimeoutRef.current);
    }
  }, [shine]);

  function handleWin() {
    let interval = setInterval(() => {
      setColorIdx((idx) => idx + 1);
    }, 50);

    setTimeout(() => {
      moveToNextComponent();
    }, 1500);
    setTimeout(() => {
      clearInterval(interval);
    }, 2500);
  }

  const COLOR_ARRAY = ["#f3f3f3", "black"];

  useEffect(() => {
    setShine(COLOR_ARRAY[colorIdx % COLOR_ARRAY.length]);
  }, [colorIdx]);

  return (
    <S.MovementContainer currentComponent={currentComponent}>
      <S.Container shine={shine}>
        <S.Text delay={1.5}>{`If you'd like to view portfolio`}</S.Text>
        <TicTacToe handleShine={(color: any) => setShine(color)} shine={shine} handleWin={handleWin} />
        <S.Text delay={2}>Win Tic Tac Toe against modern intelligence</S.Text>
        <ToastContainer />
      </S.Container>
    </S.MovementContainer>
  );
}
