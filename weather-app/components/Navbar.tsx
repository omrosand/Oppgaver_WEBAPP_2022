const Navbar = ({ setPage }: any) => {
  const handleClick = (e: any) => {
    if (e.target.innerHTML === "Hjem") {
      setPage(0);
    }
    if (e.target.innerHTML === "Om oss") {
      setPage(1);
    }
    if (e.target.innerHTML === "Kontakt") {
      setPage(2);
    }
  };

  return (
    <ul className="nav">
      <li>
        <p>Gå til:</p>
      </li>
      <li>
        <button type="button" className="navElement" onClick={handleClick}>
          Hjem
        </button>
      </li>
      <li>|</li>
      <li>
        <button type="button" className="navElement" onClick={handleClick}>
          Om oss
        </button>
      </li>
      <li>|</li>
      <li>
        <button type="button" className="navElement" onClick={handleClick}>
          Kontakt
        </button>
      </li>
    </ul>
  );
};
export default Navbar;
