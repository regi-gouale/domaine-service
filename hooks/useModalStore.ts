import { create } from "zustand";

export type modalType =
  | "showResults"
  | "quitQuiz"
  | "showAnswer"
  | "showExplanation"
  | "showFeedback"
  | "showFeedbackForm"
  | "showFeedbackSuccess"
  | "showFeedbackError"
  | "showFeedbackLoading"
  | "showFeedbackFormError"
  | "showFeedbackFormLoading";

interface AdditionalData {
  score?: number;
  limit?: number;
}

interface modalStore {
  modal: modalType | null;
  isOpen: boolean;
  additionalData: AdditionalData;
  onOpen: (type: modalType, data?: AdditionalData) => void;
  onClose: () => void;
}

const useModalStore = create<modalStore>((set) => ({
    modal: null,
    isOpen: false,
    additionalData: {},
    onOpen: (type, data) => {
        set((state) => ({
        modal: type,
        isOpen: true,
        additionalData: data || state.additionalData,
        }));
    },
    onClose: () => {
        set((state) => ({
        modal: null,
        isOpen: false,
        additionalData: state.additionalData,
        }));
    },
}));

export default useModalStore;
