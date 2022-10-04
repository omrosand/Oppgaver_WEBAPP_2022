const Dropdown = ({ weatherInfo, place, setPlace }: any) => {
  const updatePlace = (e: any) => {
    setPlace(e.target.value);
  };

  return (
    <>
      <select value={place} onChange={updatePlace}>
        <option className="disabled" disabled>
          Velg sted
        </option>
        {weatherInfo.map((place: any) => (
          <option key={place.id}>{place.place}</option>
        ))}
      </select>
    </>
  );
};
export default Dropdown;
