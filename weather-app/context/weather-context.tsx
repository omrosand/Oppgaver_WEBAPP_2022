import { createContext } from "react";
import useWeather from "../hooks/useWeather";
import WeatherInfoType from "../types/WeatherInfoType";

const initialState: WeatherInfoType = {
  id: 0,
  place: "Velg sted",
  weather: "",
  temperature: 0,
};

const WeatherContext = createContext(initialState);

export default function WeatherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { place, updatePlace } = useWeather();

  return (
    <WeatherContext.Provider value={initialState}>
      {children}
    </WeatherContext.Provider>
  );
}
