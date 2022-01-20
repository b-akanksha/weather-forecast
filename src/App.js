import React from "react";
import { useSelector } from "react-redux";
import Error from "./components/error";
import Loader from "./components/loading";
import DefaultPage from "./components/defaultPage";
import WeatherApp from "./components/weatherApp";

function App() {
  const { loading, error, data } = useSelector((state) => state.weather);

  return (
    <>
      {loading && <Loader />}
      {!loading && error && <Error />}
      {!loading && !error && !data && <DefaultPage />}
      {!loading && !error && data && <WeatherApp />}
    </>
  );
}

export default App;
