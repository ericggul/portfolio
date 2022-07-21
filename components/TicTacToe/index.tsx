import { useEffect, useState, useCallback, useRef } from "react";
import * as S from "./styles";
import { ToastContainer, toast } from "react-toastify";

const TIMEOUT = 3000;

export default function TicTacToe() {
  let TICTACTOE_SIZE = 5;

  //state:
  //0: empty
  //1: computer
  //2: player
  const [buttonState, setButtonState] = useState(new Array(TICTACTOE_SIZE ** 2).fill(0));
  const [playState, setPlayState] = useState(0);

  const [shine, setShine] = useState(false);
  const [computerShouldPlay, setComputerShouldPlay] = useState(false);

  //shine: visual effect
  let shineTimeoutRef = useRef<any>(null);
  useEffect(() => {
    if (shine) {
      shineTimeoutRef.current = setTimeout(() => {
        setShine(false);
      }, TIMEOUT);
      return () => clearTimeout(shineTimeoutRef.current);
    }
  }, [shine]);

  //tic tac toe logic
  const handleButtonClick = useCallback(
    (idx: number) => {
      if (playState === 0) {
        if (buttonState[idx] !== 0) {
          return;
        }
        setButtonState((prevState: any) => {
          const newState = [...prevState];
          newState[idx] = 2;
          return newState;
        });
        setShine(true);
        setComputerShouldPlay(true);
      }
    },
    [playState, buttonState]
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

  function checkGameStatus() {
    if (checkWin()) {
      if (checkWin() === 1) {
        toast("You lose!");
        setPlayState(1);
        return "end";
      } else {
        toast("You win!");
        setPlayState(2);
        return "end";
      }
    } else if (checkDraw()) {
      toast("Draw!");
      setPlayState(3);
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
    <S.Container shine={shine}>
      <S.TicTacToe>
        {buttonState.map((state: any, i: number) => (
          <S.Button key={i} onClick={() => handleButtonClick(i)} evenIdx={i % 2 === 0}>
            {state === 1 && "X"}
            {state === 2 && "O"}
          </S.Button>
        ))}
      </S.TicTacToe>
      <ToastContainer />
    </S.Container>
  );
}
