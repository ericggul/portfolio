import { useEffect, useState, useCallback } from "react";
import * as S from "./styles";
import { ToastContainer, toast } from "react-toastify";


export default function TicTacToe() {
  let TICTACTOE_SIZE = 3;

  //state:
  //0: empty
  //1: computer
  //2: player
  const [buttonState, setButtonState] = useState(new Array(TICTACTOE_SIZE ** 2).fill(0));
  const [playState, setPlayState] = useState(0);

  const [computerShouldPlay, setComputerShouldPlay] = useState(false);

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
        setComputerShouldPlay(true);
      }
    },
    [playState, buttonState]
  );

  useEffect(() => {
    let status = checkGameStatus();
    if (status === "continue" && computerShouldPlay) {
      playComputer();
      setComputerShouldPlay(false);
    }
  }, [buttonState, computerShouldPlay]);

  const playComputer = useCallback(() => {
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
    const winIndexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winIndexes.length; i++) {
      const [a, b, c] = winIndexes[i];
      if (buttonState[a] !== 0 && buttonState[a] === buttonState[b] && buttonState[a] === buttonState[c]) {
        return buttonState[a];
      }
    }
    return 0;
  }, [buttonState]);

  const checkDraw = useCallback(() => {
    return buttonState.filter((cur: any) => cur === 0).length === 0;
  }, [buttonState]);

  return (
    <S.Container>
      <S.TicTacToe>
        {buttonState.map((state: any, i: number) => (
          <S.Button key={i} onClick={() => handleButtonClick(i)}>
            {state === 1 && "X"}
            {state === 2 && "O"}
          </S.Button>
        ))}
      </S.TicTacToe>
      <ToastContainer />
    </S.Container>
  );
}
