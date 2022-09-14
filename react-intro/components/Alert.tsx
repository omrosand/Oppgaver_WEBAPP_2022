import { useState } from "react";

export default function Alert({ handleClick, handleChange, inputValue }: any) {
  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        I&apos;m a button!
      </button>
    </form>
  );
}
