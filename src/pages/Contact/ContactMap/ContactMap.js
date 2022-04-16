import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 51.507351,
    lng: -0.127758
  };


const ContactMap = ({ google  = [] }) => {
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyAcZJEZfeMDkI90hpra6P-LcSyUXuZLzSE"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
};

export default ContactMap;