import { useEffect, useState } from "react";

export default function useModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return {
    modalOpen,
    handleModalOpen: () => setModalOpen(true),
    handleModalClose: () => setModalOpen(false),
  };
}
