import Card from 'react-bootstrap/Card';

function Weather(props) {
		if(props.weather.length) {
			console.log(props.weather)
		return(
				<div className='mt-4'>
				<h2> Weather Forecast </h2>
				<div className="d-flex justify-content-around mt-3">
          		{ props.weather.map((f, idx) =>{
          			var imgStyle = {
          				width: '100px',
          				background: `url(${f.image})`,
          				height: '100px'
          			}
          			 return (
          			 	<Card className="d-flex align-items-center flex-row" key={idx} style={{ width: '15rem' }}>
          			 		
          			 		<div className="weather-img" style={ imgStyle }></div>
							<Card.Body>
							 	<Card.Text className="h6">{f.date}</Card.Text>
							 	
							 		<Card.Text className="d-flex align-items-center justify-content-around">
							 			<span className="maxTemp">{f.max_temp}</span>
							 			<span className="minTemp text-muted h6 mb-0">{f.min_temp}</span>
							 		</Card.Text>
							 		 
							 	
				          		<Card.Text className="h6">{f.description}</Card.Text>
				          	</Card.Body>
				       	</Card>)
          		})}
          		</div>
          		</div>

			
		)
	}
	
}
export default Weather;