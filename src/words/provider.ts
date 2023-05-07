let wordLut: { [key: string]: string[] } | null = null;

// eslint-disable-next-line import/prefer-default-export
export const listWords = (numeronym: string): string[] | null => {
  const words = wordLut;
  if (!words) {
    fetch("/wordsLut.json").then((res) => {
      res.json().then((data) => {
        wordLut = data;
      });
    });
    return null;
  }
  return words[numeronym] ?? [];
};
