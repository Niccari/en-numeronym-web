import { useRecoilState } from "recoil";
import { inputTextAtom, isValidAtom, listedWordsAtom, numeronymAtom } from "../store/store";
import { hasEnoughLength, isWord } from "./provider";
import { listWords } from "../words/provider";

// eslint-disable-next-line import/prefer-default-export
export const useNumeronym = () => {
  const [, setInputText] = useRecoilState(inputTextAtom);
  const [numeronym, setNumeronym] = useRecoilState(numeronymAtom);
  const [isValid, setIsValid] = useRecoilState(isValidAtom);
  const [listedWords, setListedWords] = useRecoilState(listedWordsAtom);

  const updateNumeronym = (rawText: string) => {
    const text = rawText.toLowerCase();

    if (!isWord(text) || !hasEnoughLength(text)) {
      setInputText(text);
      setNumeronym(null);
      setListedWords([]);
      setIsValid(false);
      return;
    }

    const newNumeronym = `${text[0]}${text.length - 2}${text[text.length - 1]}`;
    const sameNumeronymWords = listWords(newNumeronym);
    setInputText(text);
    setNumeronym(newNumeronym);
    setIsValid(true);
    setListedWords(sameNumeronymWords);
  };

  return {
    numeronym,
    isValid,
    listedWords,
    updateNumeronym,
  };
};
