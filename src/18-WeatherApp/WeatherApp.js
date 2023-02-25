import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { Data, TableWeather } from './components/TableWeather';
import { Col, Container, Form, Row } from 'react-bootstrap';
import moment from 'moment-timezone';
import "./WeatherApp.scss"

// carpeta services
import { API } from './apiKeys';

export const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [bg, setBg] = useState("clear");
    const [selectedDay, setSelectedDay] = useState(0);

    const handleSubmit = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},es&appid=${API.key}&limit=10`)
                .then((res) => setWeather(res.data))
                .catch((err) => console.log(err))
    }

    const selectDay = (i) => {setSelectedDay(i)}
    
    useEffect(() => {
      if(weather){
        switch (weather.list[selectedDay].weather[0].icon) {
          case "01d":
              setBg("clear")
            break;
          case "02d":
              setBg("clear")
            break;
          case "03d":
              setBg("cloud")
            break;
          case "04d":
              setBg("cloud")
            break;
          case "03n":
              setBg("cloud")
            break;
          case "04n":
              setBg("cloud")
            break;
          case "09d":
              setBg("rain")
            break;
          case "10d":
              setBg("rain")
            break;
          case "09n":
              setBg("rain")
            break;
          case "10n":
              setBg("rain")
            break;
          case  "11d":
              setBg("storm")
            break;
          case "11n":
              setBg("storm")
            break;
          case "13d":
              setBg("snow")
            break;
          case "13n":
              setBg("snow")
            break;
          case "50d":
              setBg("snow")
            break;
          case "50n":
              setBg("snow")
            break;
          case "01n":
              setBg("night")
            break;
          case "02n":
              setBg("night")
            break;
        }
      }
    }, [weather, selectedDay]);

  return (
    <Container fluid className={`allWApp ${bg}`}>
        <Row className="searcher">
          <Col xs={12}><h1 className='title'>WeatherApp</h1></Col>
          <Col>
            <Form.Group className='form'>
              <Form.Label htmlFor="city">Busca tu ciudad:</Form.Label>  
              <Form.Control type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder="City" id="city" />
              <button onClick={handleSubmit}>Aceptar</button>
            </Form.Group>
          </Col>
        </Row>
        <Row className="response">
          {weather &&
            <Col xs={12} className="weatherDays">
              <Col xs={12} className="today">
                <h2>El tiempo en {weather.city.name}, {weather.city.country}</h2>
                <p className='temperature'>{parseInt(weather.list[selectedDay].temp.day - 273.15) + "ºC"}</p>
                <img src={`http://openweathermap.org/img/wn/${weather.list[selectedDay].weather[0].icon}.png`} alt="" />
                <p>{`${moment(weather.list[selectedDay].dt * 1000).tz("Europe/Madrid").format("dddd YYYY-MM-DD HH:mm a")}`}</p>
              </Col>
              <Row xs={12} className="weatherList">
                {weather.list.map((day, index) => {
                  if(index >= 1){
                    return(
                      <Col sm={2} md={3} xl={6} className="weekWeather" key={index} onClick={() => selectDay(index)}>
                        <p className='tempWeek'>{ parseInt(day.temp.day - 273.15) + "ºC" }</p>
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="" />
                        <p>{`${moment(day.dt * 1000).tz("Europe/Madrid").format("dddd YYYY-MM-DD HH:mm a")}`}</p>
                      </Col>
                      )
                  }
                })}
              </Row>
            </Col>
          }
          {weather &&
            <Row className="graphicAndMore">
              <Col xs = {12} md = {6} className="graphic">
                <TableWeather weather = {weather} />
              </Col>
              <Col className="other">
                <div className="humidity">
                  <img src="/images/weather/humidity.png" alt="" />
                  <p>Humedad: {weather.list[selectedDay].humidity} %</p>
                </div>
                <div className="clouds">
                  <img src="/images/weather/clouds.png" alt="" />
                  <p>Nubes: {weather.list[selectedDay].clouds} %</p>
                </div>
                <div className="wind">
                  <img src="/images/weather/wind.png" alt="" />
                  <p>Velocidad del viento: {weather.list[selectedDay].speed} m/s</p>
                </div>
                
                {weather.list[selectedDay].rain &&
                  <div className="rainPercentage">
                    <img src="/images/weather/rain.png" alt="" />
                    <p>Lluvia: {weather.list[selectedDay].rain} l/m2</p>
                  </div>
                }
                {weather.list[selectedDay].snow &&  
                  <div className="snowPercentage">
                    <img src="/images/weather/snow.png" alt="" />
                    <p>Nieve: {weather.list[selectedDay].snow} cm</p>
                  </div>
                }
                <div className="sunrise">
                  <img src="/images/weather/sunset(1).png" alt="" />
                  <p>Salida del sol: {moment(weather.list[selectedDay].sunrise * 1000).tz("Europe/Madrid").format("HH:mm a")}</p>
                </div>
                <div className="sunset">
                  <img src="/images/weather/sunset.png" alt="" />
                  <p>Puesta del sol: {moment(weather.list[selectedDay].sunset * 1000).tz("Europe/Madrid").format("HH:mm a")}</p>
                </div>
              </Col>
            </Row>
          }
        </Row>
    </Container>
  )
}
