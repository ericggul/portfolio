import { useState } from "react";
import * as S from "./styles";
import Image from "next/image";

import { useRouter } from "next/router";

export default function RatingModal({ project, modalOpen, handleModalClose }: any) {
  function handleBackgroundClick(e: any) {
    e.preventDefault();
    handleModalClose();
  }

  const [star, setStar] = useState(-1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleClick() {
    if (star < 0) {
      alert("Please rate your test!");
      return;
    }

    try {
      setLoading(true);
      const body = { star, ratingCount: project.ratingCount, rating: project.rating };
      const res = await fetch(`/api/project/${project.title}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      setLoading(false);
    } catch (e) {
      console.log(e);
    }

    //action: upload data
    router.replace(router.asPath);
    handleModalClose();
  }

  return (
    <S.Whole modalOpen={modalOpen}>
      <S.Background onClick={handleBackgroundClick} />
      <S.ModalBox modalOpen={modalOpen}>
        <S.Cancel onClick={handleBackgroundClick} style={{ top: "-0.5rem", right: "-0.5rem" }}>
          X
        </S.Cancel>
        <S.Cancel onClick={handleBackgroundClick} style={{ bottom: "-0.5rem", right: "-0.5rem" }}>
          X
        </S.Cancel>
        <S.Cancel onClick={handleBackgroundClick} style={{ top: "-0.5rem", left: "-0.5rem" }}>
          X
        </S.Cancel>
        <S.Cancel onClick={handleBackgroundClick} style={{ bottom: "-0.5rem", left: "-0.5rem" }}>
          X
        </S.Cancel>

        <h2>{loading ? "Loading" : "Your Rating"}</h2>

        <S.Stars>
          {[...Array(5)].map((_, i) => (
            <S.Star key={i} onClick={() => setStar(i + 1)}>
              <Image src={`/assets/images/Booking/star${star >= i + 1 ? "-fill" : ""}.svg`} alt="Star" layout="fill" objectFit="cover" />
            </S.Star>
          ))}
        </S.Stars>

        <S.Confirm show={star > 0} onClick={handleClick}>
          {loading ? "Loading" : "Confirm"}
        </S.Confirm>
      </S.ModalBox>
    </S.Whole>
  );
}
