import * as S from "./styles";

export default function RatingModal({ modalOpen, handleModalClose }: any) {
  function handleBackgroundClick(e: any) {
    e.preventDefault();
    handleModalClose();
  }
  return (
    <S.Whole modalOpen={modalOpen}>
      <S.Background onClick={handleBackgroundClick} />
    </S.Whole>
  );
}
