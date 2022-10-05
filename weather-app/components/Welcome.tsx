import Dropdown from "./Dropdown";

const Welcome = () => {
  return (
    <>
      <h1>First Price Yr.no</h1>
      <h2>
        Velkommen! Her kan du sjekke været på et veldig lite utvalg av steder.
      </h2>
      <p>
        Ikke stol på info du får herfra, det er bare jeg som har skrevet
        morsomme verdier. API kall får bli neste gang :-&#41;
      </p>
      <Dropdown />
    </>
  );
};
export default Welcome;
