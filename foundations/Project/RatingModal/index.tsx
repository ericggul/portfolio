import { useState } from "react";
import * as S from "./styles";
import Image from "next/image";

export default function RatingModal({ modalOpen, handleModalClose }: any) {
  function handleBackgroundClick(e: any) {
    e.preventDefault();
    handleModalClose();
  }

  const [star, setStar] = useState(-1);

  function handleClick() {
    if (star < 0) {
      alert("Please rate your test!");
      return;
    }

    //action: upload data
    handleModalClose();
  }

  return (
    <S.Whole modalOpen={modalOpen}>
      <S.Background onClick={handleBackgroundClick} />
      <S.ModalBox>
        <S.Cancel onClick={handleBackgroundClick}>X</S.Cancel>
        <h2>Your Rating</h2>

        <S.Stars>
          {[...Array(5)].map((_, i) => (
            <S.Star key={i} onClick={() => setStar(i + 1)}>
              <Image src={`/assets/images/Booking/star${star >= i + 1 ? "-fill" : ""}.svg`} alt="Star" layout="fill" objectFit="cover" />
            </S.Star>
          ))}
        </S.Stars>

        <S.Confirm show={star > 0} onClick={handleClick}>
          Confirm
        </S.Confirm>
      </S.ModalBox>
    </S.Whole>
  );
}
