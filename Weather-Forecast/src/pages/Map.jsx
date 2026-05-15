import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import markerElement from '../services/marker.js';
import { useWeather } from '../contexts/Context.js';

function Map() {
  const mapRef = useRef()
  const mapContainerRef = useRef()
  const {long,lat,icon} = useWeather();

  useEffect(() => {
    mapboxgl.accessToken = `${import.meta.env.VITE_MAP_ACCESS_TOKEN}`
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [long, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 10 // starting zoom
    });
      const marker = markerElement(icon);
        // add marker to map
        new mapboxgl.Marker(marker)
          .setLngLat([long, lat])
          .addTo(mapRef.current)
        
    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
      <div id='map-container' 
      ref={mapContainerRef}
      className='h-full w-full'
      />
    </>
  )
}

export default Map;