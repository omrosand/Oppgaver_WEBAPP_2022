import "../styles/globals.scss";
import type { AppProps } from "next/app";
import WeatherProvider from "../context/weather-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  );
}

export default MyApp;
