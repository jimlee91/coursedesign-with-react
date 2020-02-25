import React, { useState, useCallback } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  OverlayView,
} from 'react-google-maps';
const {
  StandaloneSearchBox,
} = require('react-google-maps/lib/components/places/StandaloneSearchBox');
import produce from 'immer';
import styled from 'styled-components';
import MapHeader from '../components/MapHeader';

const Select = ({ spot }) => {
  return (
    <>
      <OverlayView
        position={{ lat: spot.lat, lng: spot.lng }}
        mapPaneName={OverlayView.OVERLAY_LAYER}
      >
        <div>
          <h1>OverlayView</h1>
          <button type="button">Click me</button>
        </div>
      </OverlayView>
    </>
  );
};

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => {
    const [selectedSpot, setSelectedSpot] = useState(null); // 선택한 지점
    const [secondSelectedSpot, setSecondSelectedSpot] = useState(null); // 두번째 선택 지점
    const [spots, setSpots] = useState([
      {
        id: 1,
        title: 'Bondi Beach',
        lat: -33.80010128657071,
        lng: 151.28747820854187,
        labelShow: false,
      },
      {
        id: 2,
        title: 'Coogee Beach',
        lat: -33.923036,
        lng: 151.259052,
        nextPosition: {
          lat: -34.028249,
          lng: 151.157507,
        },
        labelShow: false,
      },
      {
        id: 3,
        title: 'Maroubra Beach',
        lat: -34.028249,
        lng: 151.157507,
        labelShow: false,
      },
      {
        id: 4,
        title: 'Cronulla Beach',
        lat: -33.890542,
        lng: 151.274856,
        nextPosition: {
          lat: -33.923036,
          lng: 151.259052,
        },
        labelShow: false,
      },
    ]);
    const onSelectMarker = useCallback(
      (spot, e) => {
        // label index 찾아서 토글
        const index = spots.findIndex(v => v.id === spot.id);
        const newSpot = spots[index];
        const newSpotState = { ...newSpot, labelShow: !newSpot.labelShow };
        const newSpots = [...spots];
        newSpots[index] = { ...newSpotState };
        setSpots(newSpots);
        setSelectedSpot(prevState => {
          // 이전에 선택한 스팟과 지금 선택한 스팟이 같지 않고, 이전에 선택한 스팟에서 다음 목적지가 없을때,
          if (prevState && prevState !== spot && prevState.nextPosition) {
          }
          return spot;
        });
      },
      [selectedSpot],
    );

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -33.80010128657071, lng: 151.28747820854187 }}
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false,
        }}
        disableDefaultUI
      >
        {spots &&
          spots.map((spot, index) => {
            const onLoad = polyline => {
              console.log('polyline: ', polyline);
            };
            const path = [
              {
                lat: spot.lat,
                lng: spot.lng,
              },
            ];
            // 연결된 포지션이 있으면,
            if (spot.nextPosition && spot.nextPosition.lat) {
              path.push({
                lat: spot.nextPosition.lat,
                lng: spot.nextPosition.lng,
              });
            }
            const options = {
              strokeColor: '#4e8df5',
              strokeOpacity: 0.7,
              strokeWeight: 5,
              fillColor: '#4e8df5',
              fillOpacity: 0.7,
              clickable: true,
              draggable: false,
              editable: false,
              visible: true,
              radius: 30000,
              zIndex: 1,
              paths: path,
            };

            return (
              <React.Fragment key={spot.id}>
                <Marker // 마커
                  position={{ lat: spot.lat, lng: spot.lng }}
                  icon={`/icon/pin.png`}
                  onClick={e => onSelectMarker(spot, e)}
                ></Marker>
                {spot.labelShow && <Select spot={spot} />}
                <Polyline // 연결 선
                  onLoad={onLoad}
                  path={path}
                  options={options}
                  onClick={e => {
                    console.log(e.latLng.lat());
                    console.log(e.latLng.lng());
                  }}
                />
              </React.Fragment>
            );
          })}
      </GoogleMap>
    );
  }),
);

const map = () => {
  return (
    <>
      <MapHeader />
      <div className="searchLink">
        <div>
          <input type="text" placeholder="검색어를 입력해주세요." />
        </div>
      </div>
      <MapBox>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvjhx3gLu4kw_KctzkFLCv4oMe-jh5sp4&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapBox>
    </>
  );
};

const MapBox = styled.div`
  padding-top: 90px;
`;

export default map;
