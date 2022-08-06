import { useEffect, useState } from "react";

export default function useModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return {
    modalOpen,
    handleModalOpen: () => setModalOpen(true),
    handleModalClose: () => setModalOpen(false),
  };
}

export function useModalWithType() {
  const [modalType, setModalType] = useState<any>(null);

  return {
    modalType,
    handleModalOpen: (type: any) => setModalType(type),
    handleModalClose: () => setModalType(null),
  };
}
