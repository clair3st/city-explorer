import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMessage from './errors.jsx'
import { useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_LOCATIONIQ_KEY;

function Main() {
	const [searchInput, setSearchInput] = useState('');
	const [location, setLocation] = useState({})
	const [err, setErr] = useState({})


	function handleSubmit(e) {
		e.preventDefault();

		axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchInput}&format=json`)
			.then(response =>{

				console.log('success ', response.data)
				if ('data' in response){
					setLocation({lat: response.data[0].lat, lon: response.data[0].lon, display_name: response.data[0].display_name})				
				}


			})
			.catch(function (error) {
			    if (error.response) {
			      // The request was made and the server responded with a status code that falls out of the range of 2xx

			      setErr({code: error.response.status, message: error.response.data})
			    } else if (error.request) {
			      // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
			      console.log(error.request);
			    } else {
			      // Something happened in setting up the request that triggered an Error
			    	setErr({code: 0, message: error.message})
			    }

			  })


	}

	function Location(location){
		
		if('lon' in location){
			
			return(
				<div>
				<p> {location.display_name}</p>
				<p> {location.lat}, {location.lon}</p>
				<img
            		src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=12&size=600x400&format=jpg&maptype=streets`}
           			 alt='map'
          		/>
				</div>

			)

		} 
	}



	return(
		<div>
			<Form className="search-form" onSubmit={handleSubmit}>
				<Form.Control type="text" placeholder="Enter a City" onChange={(e) => setSearchInput(e.target.value)}/>
				<Button variant="primary" type="submit">
		        	Explore!
		      	</Button>
			</Form>
			<Location {...location} />
			<ErrorMessage {...err} />

		</div>
	)
}

export default Main;