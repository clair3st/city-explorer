
function Location(location){
    
    if('lon' in location){
      return(
        <div className="container">
          <p> {location.display_name}</p>
          <p> {location.lat}, {location.lon}</p>
          <img
              src={location.map}
                alt='map'
          />
        </div>

      )

    } 
  }

export default Location