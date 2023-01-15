import { atom } from "recoil";

export const promptState = atom({
  key: "promptState",
  default: false,
});

export const promptOverlayState = atom({
  key: "promptOverlayState",
  default: false,
});
