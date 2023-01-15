import { atom } from "recoil";

export const modalState = atom({
  key: "ModalState",
  default: false,
});

export const overlayState = atom({
  key: "overlayState",
  default: false,
});
