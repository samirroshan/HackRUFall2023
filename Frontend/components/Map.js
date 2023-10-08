import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const loadGoogleMapsApi = () => {
      const apiKey = AIzaSyB30g5c3hPRifabUOA-CVFHZy-zhMpXq0U; 
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            const map = new window.google.maps.Map(document.getElementById('map'), {
              center: userLocation,
              zoom: 14 // Adjust the zoom level as needed
            });

            const placesService = new window.google.maps.places.PlacesService(map);

            const request = {
              location: userLocation,
              radius: 5000,
              types: ['shelter', 'organization', 'charity']
            };

            placesService.nearbySearch(request, function (results, status) {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                  createMarker(results[i]);
                }
              }
            });

            function createMarker(place) {
              const marker = new window.google.maps.Marker({
                map: map,
                position: place.geometry.location
              });

              // Customize markers or add additional info windows as needed
            }
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      };
    };

    // Load Google Maps API asynchronously
    loadGoogleMapsApi();

    // Clean up the script when the component unmounts
    return () => {
      const googleMapsScript = document.querySelector('[src^="https://maps.googleapis.com/maps/api/js"]');
      if (googleMapsScript) {
        googleMapsScript.remove();
      }
    };
  }, []); // Empty dependency array ensures this effect runs once after the first render

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}></div>
  );
};

export default MapComponent;