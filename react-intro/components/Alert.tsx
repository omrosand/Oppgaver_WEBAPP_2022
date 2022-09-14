export default function Alert({
  handleClickProp,
  handleChangeProp,
  inputValue,
}: any) {
  return (
    <form>
      <input
        type="text"
        placeholder="Type here.."
        onChange={handleChangeProp}
        value={inputValue}
      />
      <button type="submit" className="btn" onClick={handleClickProp}>
        I&apos;m a button!
      </button>
    </form>
  );
}
