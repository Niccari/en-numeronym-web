export const isWord = (text: string) => text.match(/^[a-z]{3,}$/) !== null;

export const hasEnoughLength = (text: string) => text.match(/^[a-z]{3,}$/) !== null;

export const toNumeronym = (text: string) => {
  if (!isWord(text)) {
    throw new Error(`${text} is not word`);
  }
  if (!hasEnoughLength(text)) {
    throw new Error(`${text} is too short, should be bigger than 2.`);
  }
  return `${text[0]}${text.length - 2}${text[text.length - 1]}`;
};
