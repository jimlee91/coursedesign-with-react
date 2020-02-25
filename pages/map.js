import React, { useState, useCallback } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
  OverlayView,
} from 'react-google-maps';
import produce from 'immer';
import styled from 'styled-components';
import MapHeader from '../components/MapHeader';
import StandaloneSearchBox from '../components/StandaloneSearchBox';

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
        state: 'active',
        title: 'Bondi Beach',
        lat: -33.80010128657071,
        lng: 151.28747820854187,
        labelShow: false,
      },
      {
        id: 2,
        state: 'active',
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
        state: 'active',
        title: 'Maroubra Beach',
        lat: -34.028249,
        lng: 151.157507,
        labelShow: false,
      },
      {
        id: 4,
        state: 'active',
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
                  icon={
                    spot.state === 'active'
                      ? `/icon/pin.png` // 내 코스 핀
                      : spot.state === 'find'
                      ? `` // 검색 후 나오는 핀
                      : `/icon/pin-uncheck.png` // 북마크 핀
                  }
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
      <StandaloneSearchBox />
      <MapBox>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvjhx3gLu4kw_KctzkFLCv4oMe-jh5sp4&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `calc(100vh - 90px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapBox>
      {/* 
      <div className="mapInfobox" id="first">
        <div className="mapInfobox__scroll">
          <button onclick="$(this).add('.tab-view').toggleClassName('active');">
            <img src="./assets/images/icon/arrow-bottom.png" alt="" />
          </button>
        </div>
        <div className="tab tab--map js-act1">
          <button className="js-active" id="btn-Course" data-tab="1">
            내 코스
          </button>
          <button id="btn-Point" data-tab="2">
            추천 포인트
          </button>
          <button id="btn-Bookmark" data-tab="3">
            북마크 코스
          </button>
        </div>

        <div className="tab-view">
          <div className="tab__view view1">
            <ul className="guide__guide-list" id="changeList">
              <li className="guide__guide-item hasload">
                <a href="" className="wrap">
                  <div className="guide__item-thumbnail">
                    <span className="hasCourse active"></span>
                  </div>
                  <div className="guide__item-info guide__item-info--default">
                    <span>치앙마이, 태국</span>
                    <h2>치앙마이 대표 명소 모음</h2>
                    <p>치앙마이에 왔다면 이곳만은 꼭 가봐야지!</p>
                    <div className="guide__item-etc">
                      <div className="guide__item-heart active">10</div>
                      <div className="guide__item-star">
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img src="./assets/images/icon/star.png" alt="" />
                        <span>4.0 (32)</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393&query_place_id=ChIJKxjxuaNqkFQR3CK6O1HNNqY"
                  className="goLoad"
                ></a>
              </li>
            </ul>
            <div className="myCourse-detail">
              <div className="wrap">
                <ul className="course__list">
                  <li className="course__section">
                    <div className="couse__day">
                      <button>1 Day</button>
                    </div>
                    <ul className="course__detail">
                      <li className="course__detail-item">
                        <div className="course__detail-info">
                          <h3 className="course__detail-title">
                            살라 란나 치앙마이
                          </h3>
                        </div>
                      </li>
                      <li className="course__detail-item">
                        <div className="course__detail-info">
                          <h3 className="course__detail-title">님만 해변</h3>
                        </div>
                      </li>
                      <li className="course__detail-item">
                        <div className="course__detail-info">
                          <h3 className="course__detail-title">
                            도이수텝 사원
                          </h3>
                        </div>
                      </li>
                      <li className="course__detail-item">
                        <div className="course__detail-info">
                          <h3 className="course__detail-title">
                            더 아이론 카페
                          </h3>
                        </div>
                      </li>
                      <li className="course__detail-item">
                        <div className="course__detail-info">
                          <h3 className="course__detail-title">빠이 캐년</h3>
                        </div>
                      </li>
                      <li className="course__detail-item">
                        <div className="course__detail-info">
                          <h3 className="course__detail-title">
                            나이트 사파리
                          </h3>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab__view view2">
            <div className="recommendList">
              <div className="recommendList__item trip">
                <button className="active"></button>
                관광
              </div>
              <div className="recommendList__item food">
                <button></button>
                맛집
              </div>
              <div className="recommendList__item home">
                <button></button>
                숙소
              </div>
              <div className="recommendList__item like">
                <button></button>찜 목록
              </div>
            </div>
            <ul className="guide__guide-list">
              <li className="guide__guide-item">
                <a href="" className="wrap">
                  <div className="guide__item-thumbnail">
                    <span className="hasCourse active"></span>
                  </div>
                  <div className="guide__item-info guide__item-info--default">
                    <span>치앙마이, 태국</span>
                    <h2>치앙마이 대표 명소 모음</h2>
                    <p>치앙마이에 왔다면 이곳만은 꼭 가봐야지!</p>
                    <div className="guide__item-etc">
                      <div className="guide__item-heart active">10</div>
                      <div className="guide__item-star">
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img src="./assets/images/icon/star.png" alt="" />
                        <span>4.0 (32)</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab__view view3">
            <ul className="guide__guide-list">
              <li className="guide__guide-item hasload">
                <a href="" className="wrap">
                  <div className="guide__item-info guide__item-info--default pl0">
                    <span className="id">@Hongildong</span>
                    <h2>치앙마이 대표 명소 모음</h2>
                    <div className="status">
                      <span className="like-active">20</span>
                      <span className="download">12</span>
                    </div>
                    <div className="hashtagBox">
                      <span>#해쉬태그</span>
                      <span>#해쉬태그</span>
                      <span>#해쉬태그</span>
                      <span>#해쉬태그</span>
                    </div>
                  </div>
                </a>
                <button className="goMap"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mapInfobox" id="second">
        <div className="mapInfobox__scroll">
          <button onclick="$(this).add('.tab-view').toggleClassName('active');">
            <img src="./assets/images/icon/arrow-bottom.png" alt="" />
          </button>
        </div>
        <div className="tab-view h333">
          <div className="tab__view view1">
            <ul className="guide__guide-list">
              <li className="guide__guide-item hasload">
                <a href="#//" className="wrap">
                  <div className="guide__item-thumbnail">
                    <span className="hasCourse active"></span>
                  </div>
                  <div className="guide__item-info guide__item-info--default">
                    <span>치앙마이, 태국</span>
                    <h2>치앙마이 대표 명소 모음</h2>
                    <p>치앙마이에 왔다면 이곳만은 꼭 가봐야지!</p>
                    <div className="guide__item-etc">
                      <div className="guide__item-heart active">10</div>
                      <div className="guide__item-star">
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img
                          src="./assets/images/icon/star-active.png"
                          alt=""
                        />
                        <img src="./assets/images/icon/star.png" alt="" />
                        <span>4.0 (32)</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393&query_place_id=ChIJKxjxuaNqkFQR3CK6O1HNNqY"
                  className="goLoad"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
       */}
    </>
  );
};

const MapBox = styled.div`
  padding-top: 90px;
  height: calc(100vh - 90px);
`;

export default map;
