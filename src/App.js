import { useState } from 'react'

function App() {
  const [city, setCity] = useState("")

  const [weatherForecast, setWeatherForecast] = useState(null)

  const searchForecastWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`)
  .then((response) =>{
    if(response.status === 200){
      return response.json()
    }

  }).then((data) => {
    setWeatherForecast(data)
  })
  
  
  };


  const handleCityChange = (event) => {
    setCity(event.target.value)
  }
  return (
    <>
      <div>

        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="#search">
            React Weather
          </a>
        </nav>
        <main className="container" id="search">
          <div className="jumbotron">
            <h1>Verifique agora a previsão do tempo na sua cidade.</h1>
            <p>
              Digite a sua cidade no campo abaixo e em seguida clique em pesquisar.
            </p>
          </div>
          <div className="mb-4">
            <div>
              <input type="text" className="form-control" value={city} onChange={handleCityChange} />
            </div>
          </div>
          <button className="btn btn-lg btn-primary" onClick={searchForecastWeather}>Pesquisar.</button>
          {
            weatherForecast ? (
              <div className="mt-4 d-flex align-items-center" >
                <div className="col-sm-1 ">
                  <img src={weatherForecast.current.condition.icon} alt="Weather Icon"/>
                </div>
              <div>
                <h3>Hoje o tempo em {city} está: {weatherForecast.current.condition.text}</h3>
                <p className="lead">
                  Temperatura {weatherForecast.current.temp_c}°C
                </p>
              </div>
              </div>
            ) : null
          }
        </main>
      </div>
    </>
  );
}

export default App;
