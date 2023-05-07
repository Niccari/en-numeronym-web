import { atom } from "recoil";

export const inputTextAtom = atom({
  key: "inputText",
  default: "",
});

export const numeronymAtom = atom<string | null>({
  key: "numeronym",
  default: null,
});

export const basedTextsAtom = atom({
  key: "basedTextsAtom",
  default: [],
});

export const isValidAtom = atom({
  key: "isValidAtom",
  default: true,
});

export const listedWordsAtom = atom<string[] | null>({
  key: "listedWordsAtom",
  default: [],
});
