import { atom } from "recoil";
import { generateId } from "../helpers/utils";

export const promptState = atom({
  key: generateId("promptState"),
  default: false,
});

export const promptOverlayState = atom({
  key: generateId("promptOverlayState"),
  default: false,
});
