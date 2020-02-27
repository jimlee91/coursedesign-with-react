import { dummyCities } from '../dummys';

export const initialState = {
  searchingCities: false, // 도시 검색 요청이 들어왔을 때,
  searchedCities: false, // 검색이 완료됨 ( success )
  countries: dummyCities,

  gettingCity: false, // 가이드페이지 도시 가져오는중,
  gettedCity: false, // 도시 가져오기 완료
  cettingCityError: '', //도시 가져오기 에러
  city: null,
};

// 도시 검색 액션
export const SEARCH_COUNTRIES_REQUEST = 'SEARCH_COUNTRIES_REQUEST';
export const SEARCH_COUNTRIES_SUCCESS = 'SEARCH_COUNTRIES_SUCCESS';
export const SEARCH_COUNTRIES_FAILURE = 'SEARCH_COUNTRIES_FAILURE';
// 해당 도시 가져오는 액션
export const CITY_REQUEST = 'CITY_REQUEST';
export const CITY_SUCCESS = 'CITY_SUCCESS';
export const CITY_FAILURE = 'CITY_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COUNTRIES_REQUEST: {
      return {
        ...state,
        searchingCities: true,
        searchedCities: false,
      };
    }
    case SEARCH_COUNTRIES_SUCCESS: {
      return {
        ...state,
        searchingCities: false,
        searchedCities: true,
      };
    }
    case SEARCH_COUNTRIES_FAILURE: {
      return {
        ...state,
        searchingCities: false,
      };
    }
    case CITY_REQUEST: {
      return {
        ...state,
        cettingCityError: '',
        gettingCity: true,
        gettedCity: false,
      };
    }
    case CITY_SUCCESS: {
      return {
        ...state,
        gettingCity: false,
        gettedCity: true,
        city: action.data,
      };
    }
    case CITY_FAILURE: {
      return {
        ...state,
        gettingCity: false,
        gettedCity: false,
        cettingCityError: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
