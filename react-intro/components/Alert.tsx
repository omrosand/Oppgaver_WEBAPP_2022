import { useState } from "react";

export default function Alert({ handleClick, handleChange }: any) {
  const [inputValue, setInputValue] = useState("Type here..");
  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        I&apos;m a button!
      </button>
    </form>
  );
}
