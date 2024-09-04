"use client";

import useModalStore from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const QuitQuizModal = () => {
  const { isOpen, onClose, modal } = useModalStore();
  const open = isOpen && modal === "quitQuiz";
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Êtes-vous sûr de vouloir quitter le questionnaire ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Vous ne pourrez pas revenir en arrière et votre progression sera
            perdue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={() => router.push("/")}>
            Confirmer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
