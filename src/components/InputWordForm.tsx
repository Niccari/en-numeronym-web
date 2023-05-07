import { ChangeEvent } from "react";
import { useNumeronym } from "../numeronym/hooks";

const InputWordForm = () => {
  const { updateNumeronym } = useNumeronym();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateNumeronym(e.target.value);
  };

  return (
    <form>
      <label htmlFor="input_word">Word: </label>
      <input name="input_word" type="text" id="roll" onChange={onChange} placeholder="accessibility" required />
    </form>
  );
};

export default InputWordForm;
