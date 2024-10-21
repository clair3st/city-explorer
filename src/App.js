import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMessage from './components/ErrorMessage.jsx'
import Location from './components/Location.jsx'
import Weather from './components/Weather.jsx'
import Movies from './components/Movies.jsx'
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [location, setLocation] = useState({})
  const [err, setErr] = useState({})
  const [weather, setWeather] = useState([])
  const [movies, setMovies] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    setErr({})
    const API_KEY = process.env.REACT_APP_LOCATIONIQ_KEY;
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchInput}&format=json`)
      .then(response =>{

        console.log('success ', response.data)
        if ('data' in response){
          setLocation({
            lat: response.data[0].lat, 
            lon: response.data[0].lon, 
            display_name: response.data[0].display_name,
            map: `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=12&size=600x400&format=jpg&maptype=streets`
          })
          getWeather(response.data[0].lat, response.data[0].lon)
          getMovies(searchInput)
        }


      })
      .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.log(error.response)
            setErr({code: error.response.status, message: error.response.data.error})
          } else if (error.request) {
            // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            setErr({code: 0, message: error.message})
          }

        })

  }

  async function getWeather(lat, lon){
    await axios.get(`https://city-explorer-api-pe3n.onrender.com/weather?lat=${lat}&lon=${lon}`)
    .then(response=>{
      setWeather(response.data)
    })  
    .catch(e => {
      if(e.response){
        console.log(e.response)
      }
    })  
  }

  async function getMovies(city){
    await axios.get(`https://city-explorer-api-pe3n.onrender.com/movies?city=${city}`)
    .then(response=>{
      setMovies(response.data)
    })  
    .catch(e => {
      if(e.response){
        console.log(e.response)
      }
    })  
  }



  return (
    <div className="content">
      <header>
        <h1>City Explorer</h1>
      </header>
       <div className="container">
      <div >
        <Form className="search-form" onSubmit={handleSubmit}>
          <Form.Control type="text" placeholder="Enter a City" onChange={(e) => setSearchInput(e.target.value)}/>
          <Button variant="primary" type="submit">
                Explore!
              </Button>
        </Form>
      </div>
      <ErrorMessage {...err} />
      <Location {...location} />
      <Weather weather={weather} />
      <Movies movies={movies} />

    </div>
    </div>
  );
}

export default App;
