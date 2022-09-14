export default function Alert({
  handleClickProp,
  handleChangeProp,
  inputValue,
}: any) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Type here.."
          value={inputValue}
          onChange={handleChangeProp}
        />
        <button type="submit" onClick={handleClickProp}>
          I&apos;m a button!
        </button>
      </form>
    </>
  );
}
