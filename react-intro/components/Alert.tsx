export default function Alert({
  handleClickProp,
  handleChangeProp,
  inputValue,
}: any) {
  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChangeProp} />
      <button type="submit" onClick={handleClickProp}>
        I&apos;m a button!
      </button>
    </form>
  );
}
