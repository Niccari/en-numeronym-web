import InputWordForm from "./InputWordForm";
import { useNumeronym } from "../numeronym/hooks";

const TopPage = () => {
  const { isValid, numeronym, listedWords } = useNumeronym();

  return (
    <>
      <InputWordForm />

      {!isValid && <span>Invalid english word.</span>}
      {isValid && (
        <>
          <span>{numeronym}</span>
          <div>
            {listedWords === null && <span>Loading word list...</span>}
            {listedWords?.length === 0 && <span>No word found.</span>}
            {listedWords && (
              <ul>
                {listedWords.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TopPage;
