import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SPOT_REQUEST } from '../reducers/course';
import { StandaloneSearchBox, useLoadScript } from '@react-google-maps/api';

const SearchBox = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDvjhx3gLu4kw_KctzkFLCv4oMe-jh5sp4',
    libraries: ['places'],
  });

  const [value, setValue] = useState('');
  const handleChangeInput = e => {
    setValue(e.target.value);
  };
  const handleClickSearchBox = () => {};

  return (
    <>
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={ref => console.log(ref)}
          onPlacesChanged={() => handleClickSearchBox()}
        >
          <div className="searchLink">
            <input
              type="text"
              value={value}
              onChange={handleChangeInput}
              placeholder="검색어를 입력해주세요."
            />
          </div>
        </StandaloneSearchBox>
      )}
    </>
  );
};

export default SearchBox;
