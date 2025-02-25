import React from 'react'

function LocationData({placename, address, description, typeofplace, latitude, longitude}) {

    const distance = () => {

    }; // calculate distance
    
    return (
        <div>
            <h2>{placename}</h2>
            <p>{address}</p>
            <p>{description}</p>
            <p>Type of location: {typeofplace}</p>
            <p>Distance from campus: {distance}</p>
            <iframe 
                src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=12&amp;&output=embed`}
                width="500" 
                height="200" 
                scrolling="yes"
                title={placename} 
                >
            </iframe>
            
        </div>
    )
}

export default LocationData