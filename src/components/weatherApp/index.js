import React from "react";
import { useSelector } from "react-redux";
import Tiles from "../tiles";
import { ReactComponent as ArrowUp } from "../../assets/arrow_up.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow_down.svg";
import { ReactComponent as Explore } from "../../assets/explore.svg";
import wind from "../../assets/wind.png";
import humidity from "../../assets/humidity.png";
import clouds from "../../assets/clouds.png";
import SearchBar from "../searchBar";
import "./index.css";

const WeatherApp = () => {
  const { data } = useSelector((state) => state.weather);

  const getVisibility = (miles) => {
    if (miles <= 2) {
      return "Poor visibility";
    }
    if (miles <= 5) {
      return "Moderate visibility";
    }
    if (miles > 5) {
      return "Good visibility";
    }
  };

  const getHumidity = (humidity) => {
    if (humidity <= 30) {
      return "Low";
    }
    if (humidity > 30 && humidity < 50) {
      return "Good";
    }
    if (humidity >= 50) {
      return "High";
    }
  };

  const getUV = (uv) => {
    if (uv <= 2) {
      return "Low";
    }
    if (uv > 2 && uv < 5) {
      return "Moderate";
    }
    if (uv >= 5) {
      return "High";
    }
  };

  const time = new Date();
  const timeArray = data?.forecast?.forecastday[0]?.hour?.filter(
    (item) => time.toString().split(" ")[4] < String(item.time.split(" ")[1])
  );
  const timeToDisplay =
    timeArray.length > 5 ? timeArray.slice(0, 5) : timeArray;
  return (
    <div className="weather-page">
      <div className="weather-grid container1">
        <p className="title">Today's Highlights</p>
        <div className="grid">
          <Tiles title="Sunrise & Sunset" className="grid__item">
            <div className="content">
              <ArrowUp className="svg__icon" />
              <p className="content__text">
                {data?.forecast?.forecastday[0]?.astro?.sunrise}
              </p>
            </div>
            <div className="content">
              <ArrowDown className="svg__icon" />
              <p className="content__text">
                {data?.forecast?.forecastday[0]?.astro?.sunset}
              </p>
            </div>
          </Tiles>
          <Tiles title="Moonrise & Moonset" className="grid__item">
            <div className="content">
              <ArrowUp className="svg__icon" />
              <p className="content__text">
                {data?.forecast?.forecastday[0]?.astro?.moonrise}
              </p>
            </div>
            <div className="content">
              <ArrowDown className="svg__icon" />
              <p className="content__text">
                {data?.forecast?.forecastday[0]?.astro?.moonset}
              </p>
            </div>
          </Tiles>
          <Tiles title="Wind Status" className="grid__item">
            <p className="content__highlight">
              {data?.forecast?.forecastday[0]?.day?.maxwind_kph}{" "}
              <small>km/h</small>
            </p>
            <div className="content">
              <Explore className="svg__icon" />{" "}
              <p className="content__text text_bold text_color">
                {data?.current?.wind_dir}
              </p>
            </div>
          </Tiles>
          <Tiles title="Visibility" className="grid__item">
            <p className="content__highlight ">
              {data?.forecast?.forecastday[0]?.day?.avgvis_km} <small>km</small>
            </p>
            <div className="content">
              <p className="content__text text_bold text_color">
                {getVisibility(
                  data?.forecast?.forecastday[0]?.day?.avgvis_miles
                )}
              </p>
            </div>
          </Tiles>
          <Tiles title="Humidity" className="grid__item">
            <p className="content__highlight ">
              {data?.forecast?.forecastday[0]?.day?.avghumidity}{" "}
              <small>%</small>
            </p>
            <div className="content">
              <p className="content__text text_bold text_color">
                {getHumidity(data?.forecast?.forecastday[0]?.day?.avghumidity)}
              </p>
            </div>
          </Tiles>
          <Tiles title="UV" className="grid__item">
            <p className="content__highlight ">
              {data?.forecast?.forecastday[0]?.day?.uv}
            </p>
            <div className="content">
              <p className="content__text text_bold text_color">
                {getUV(data?.forecast?.forecastday[0]?.day?.uv)}
              </p>
            </div>
          </Tiles>
        </div>
      </div>
      <div className="weather-grid container2">
        <b>Search</b> <SearchBar />
        <div className="graphic-today place">
          <h2>{data?.location?.name}</h2>
          <small>
            &nbsp;{` (${data?.location?.region}, ${data?.location?.country})`}
          </small>
        </div>
        <p>
          <b>{data?.location?.localtime?.split(" ")[0]}</b>
        </p>
        <div className="today-content">
          <h1 className="today__title">TODAY</h1>
          <div className="graphic-today">
            <img
              src={data?.current?.condition?.icon}
              className="weather-icon"
              alt="weather"
            />
            <div className="graphic-today align_it">
              <h1>{data?.current?.temp_c}`C</h1>
              <small> ({data?.current?.condition?.text})</small>
            </div>
          </div>
          <div className="graphic-today">
            <div className="today-content">
              <div className="tile__small">
                <img src={wind} alt="wind" className="icons__w" />
              </div>
              <p className="tile__text">{data?.current?.wind_kph} km/h</p>
            </div>
            <div className="today-content">
              <div className="tile__small">
                <img src={humidity} alt="humidity" className="icons__w" />
              </div>
              <p className="tile__text">{data?.current?.humidity} %</p>
            </div>
            <div className="today-content">
              <div className="tile__small">
                <img src={clouds} alt="cloud" className="icons__w" />
              </div>
              <p className="tile__text">{data?.current?.cloud} %</p>
            </div>
          </div>
          <div className="graphic-today content-grid">
            {timeToDisplay.map((item, index) => (
              <div className="today-content tile__small" key={index}>
                {item?.time?.split(" ")[1]}
                <img src={item?.condition?.icon} alt="weather" />
                <p>{item?.temp_c}`C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
