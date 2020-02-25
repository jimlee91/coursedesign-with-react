import { dummyCities } from '../dummys';

export const initialState = {
  searchingCities: false, // 도시 검색 요청이 들어왔을 때,
  searchedCities: false, // 검색이 완료됨 ( success )
  countries: dummyCities,
};

export const SEARCH_COUNTRIES_REQUEST = 'SEARCH_COUNTRIES_REQUEST';
export const SEARCH_COUNTRIES_SUCCESS = 'SEARCH_COUNTRIES_SUCCESS';
export const SEARCH_COUNTRIES_FAILURE = 'SEARCH_COUNTRIES_FAILURE';

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
    default: {
      return {
        ...state,
      };
    }
  }
};
