import type { NextPage } from "next";
import { useState } from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
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

const Home: NextPage = () => {
  const [page, setPage] = useState(0);
  const [place, setPlace] = useState("");

  return (
    <>
      <div className="wrapper">
        <main>
          {page === 0 ? (
            <>
              <Welcome
                weatherInfo={weatherInfo}
                place={place}
                setPlace={setPlace}
              />
            </>
          ) : page === 1 ? (
            <>
              <About
                weatherInfo={weatherInfo}
                place={place}
                setPlace={setPlace}
              />
            </>
          ) : page === 2 ? (
            <>
              <Contact />
            </>
          ) : null}
          <p>{place}</p>
        </main>
        <Navbar setPage={setPage} />
      </div>
    </>
  );
};

export default Home;
