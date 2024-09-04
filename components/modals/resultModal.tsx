"use client";

import useModalStore from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const ResultModal = () => {
  const { isOpen, onClose, modal, additionalData } = useModalStore();
  const open = isOpen && modal === "showResults";
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl">
            Résultats
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="flex flex-col items-center py-4 md:py-6">
          <p className="text-lg md:text-xl text-primary font-semibold tracking-wide">
            Vous avez obtenu {additionalData.score} / {additionalData.limit}
          </p>
          <Button
            className="btn-primary mt-4 md:mt-6"
            onClick={() => {
              router.push("/");
              onClose();
            }}
          >
            Refaire le questionnaire
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
