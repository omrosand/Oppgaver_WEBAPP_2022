const Dropdown = ({ weatherInfo, place, setPlace }: any) => {
  const handleChange = (e: any) => {
    setPlace(e.target.value);
  };

  return (
    <>
      <select value={place} onChange={handleChange}>
        <option className="disabled" disabled selected>
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
