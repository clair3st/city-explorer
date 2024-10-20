import Card from 'react-bootstrap/Card';

function Weather(props) {
		console.log(props)
		if(props.weather.length) {

		return(
				<div className='mt-4'>
				<h2> Weather Forecast </h2>
				<div className="d-flex justify-content-around mt-3">
          		{ props.weather.map(f =>{
          			 return (
          			 	<Card style={{ width: '15rem' }}>
							<Card.Body>
							 	<Card.Title>{f.date}</Card.Title>
				          		<Card.Text>		{f.description}</Card.Text>
				          	</Card.Body>
				       	</Card>)
          		})}
          		</div>
          		</div>

			
		)
	}
	
}
export default Weather;