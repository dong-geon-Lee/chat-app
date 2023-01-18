import { generateId } from "./../helpers/utils";
import { atom } from "recoil";

export const modalState = atom({
  key: generateId("modalState"),
  default: false,
});

export const overlayState = atom({
  key: generateId("overlayState"),
  default: false,
});
