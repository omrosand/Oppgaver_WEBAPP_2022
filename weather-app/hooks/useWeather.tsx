import { useState } from "react";
import WeatherInfoType from "../types/WeatherInfoType";

const weatherInfo: WeatherInfoType[] = [
  {
    id: 1,
    place: "Oslo",
    weather: "Regn",
    temperature: 11,
  },
  {
    id: 2,
    place: "Fredrikstad",
    weather: "Overskyet",
    temperature: 14,
  },
  {
    id: 3,
    place: "Halden",
    weather: "Snø",
    temperature: -3,
  },
  {
    id: 4,
    place: "Averøy",
    weather: "Sol",
    temperature: 37,
  },
];

const useWeather = () => {
  const [place, setPlace] = useState("Velg sted");

  const updatePlace = (e: any) => {
    setPlace(e.target.value);
  };
  return { place, updatePlace, weatherInfo };
};
export default useWeather;
