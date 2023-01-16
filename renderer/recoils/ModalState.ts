import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const overlayState = atom({
  key: "overlayState",
  default: false,
});
