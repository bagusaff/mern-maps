import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL , { Marker, Popup } from 'react-map-gl';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { listHomeAddress } from './API';
import HomeAddressForm from './HomeAddressForm';
const App = () => {
  const [homeAddress, setHomeAddress] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addHomeLocation, setAddHomeLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: -7.7915842,
    longitude: 110.339104,
    zoom: 10
  });
  
  const getAddress = async() =>{
    const homeAddress = await listHomeAddress();
    setHomeAddress(homeAddress);
  }

  useEffect(()=>{
    getAddress();      
  },[]);

  const showAddMarkerPopup = (event)=>{
    const [longitude, latitude] = event.lngLat;
    setAddHomeLocation({
      latitude,
      longitude
    })
  };


  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/bagusamrullah/ckfgrpsh52apl19p8iq4zqhcb"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      onDblClick={showAddMarkerPopup}
      >
      {
        homeAddress.map(entry=>(
          <React.Fragment key={entry._id}>
            <Marker 
              latitude={entry.latitude} 
              longitude={entry.longitude} 
            >
              <div onClick={()=> setShowPopup({
                [entry._id]:true,
              })}
              >              
                <svg
                    className="marker yellow"
                    style={{
                      height: `${2 * viewport.zoom}px`,
                      width: `${2 * viewport.zoom}px`,
                    }}
                    version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                    <g>
                      <g>
                        <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                          c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                          c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                      </g>
                    </g>                    
                  </svg>
              <p className="number">{entry.absen}</p>  
              </div>
            </Marker>
            {
              showPopup[entry._id] ? (
                <Popup
                    latitude={entry.latitude}
                    longitude={entry.longitude}
                    closeButton={false}
                    closeOnClick={false}
                    dynamicPosition={true}
                    onClose={() => setShowPopup({})}
                    anchor="top" >
                    <div>                      
                      <Card style={{ width: '18rem' }}>
                      <button className="mapboxgl-popup-close-button" type="button">×</button>
                      {entry.image && <Card.Img variant="top" src={entry.image} alt={entry.absen} />}
                        <Card.Body>
                          <Card.Title><b>{entry.absen}</b></Card.Title>
                          <Card.Text>
                            {entry.description}
                          </Card.Text>
                          <Button variant="primary" target="_blank" href={"https://maps.google.com?q="+entry.latitude+","+entry.longitude}>Open Google Maps</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <p className="credit">Made by bagus amrullah with<span role="img" aria-label="love">❤️</span></p>
                </Popup>
              ) : null
            }
          </React.Fragment>
        ))
      }
      {
        addHomeLocation ? (
          <>
          <Marker 
              latitude={addHomeLocation.latitude} 
              longitude={addHomeLocation.longitude} 
            >
              <div>
                <svg
                    className="marker red"
                    style={{
                      height: `${3 * viewport.zoom}px`,
                      width: `${3 * viewport.zoom}px`,
                    }}
                    version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                    <g>
                      <g>
                        <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                          c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                          c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                      </g>
                    </g>
                  </svg>
              </div>
            </Marker>
            <Popup
                      latitude={addHomeLocation.latitude}
                      longitude={addHomeLocation.longitude}
                      closeButton={true}
                      closeOnClick={false}
                      dynamicPosition={true}
                      onClose={() => setAddHomeLocation(null)}
                      anchor="top" >
                      <div className="popup">
                        <HomeAddressForm onClose={()=>{
                          setAddHomeLocation(null);
                          getAddress();
                        }} location={addHomeLocation}/>
                      </div>
              </Popup>
          </>
        ) : null
      }
    </ReactMapGL>
  );
}

export default App;