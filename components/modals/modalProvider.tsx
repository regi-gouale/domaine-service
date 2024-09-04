"use client";

import { use, useEffect, useState } from "react";
import { ResultModal } from "@/components/modals/resultModal";
import { QuitQuizModal } from "@/components/modals/quitQuizModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ResultModal />
      <QuitQuizModal />
    </>
  );
};
