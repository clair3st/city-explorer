import Card from 'react-bootstrap/Card';

function Movies(props) {
	console.log(props)
		if(props.movies.length) {
			console.log(props.movies)
		return(
				<div className='mt-4'>
				<h2> Movies</h2>
				<div >
          		{ props.movies.map((m, idx) =>{
          			var imgStyle = {
          				'min-width': '150px',
          				background: `no-repeat center url(${m.image_url})`,
          				'background-size': 'contain',
          				height: '180px'
          			}
          			 return (
          			 	<Card className="d-flex align-items-center flex-row mb-4" key={idx}>
          			 		
          			 		<div className="movies-img" style={ imgStyle }></div>
							<Card.Body>
							 	<Card.Text className="h6 text-muted">{m.released_on}</Card.Text>
							 	<Card.Text className="h3">{m.title}</Card.Text>
							 	<Card.Text className="h5">{m.overview}</Card.Text>
				          		<Card.Text className="h6">{m.average_votes} /10 <span className="text-muted">({m.total_votes})</span></Card.Text>
				          	</Card.Body>
				       	</Card>)
          		})}
          		</div>
          		</div>

			
		)
	}
	
}
export default Movies;