export default function Alert({ handleClickProp, handleChangeProp }: any) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Type here.."
          onChange={handleChangeProp}
        />
        <button type="submit" className="btn" onClick={handleClickProp}>
          I&apos;m a button!
        </button>
      </form>
    </>
  );
}
