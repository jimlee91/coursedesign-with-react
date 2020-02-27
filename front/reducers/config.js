export const initialState = {
  terms: '',
  privacy: '',
};

export const CONFIG_REQUEST = 'CONFIG_REQUEST';
export const CONFIG_SUCCESS = 'CONFIG_SUCCESS';
export const CONFIG_FAILURE = 'CONFIG_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_REQUEST: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
