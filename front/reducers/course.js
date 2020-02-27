export const initialState = {
  gettingCourse: false, // 가져오는 중
  gettingCourseError: '', // 가져오기 실패 에러 메세지
  gettedCourse: false, // 가져오기 완료
  course: null, // 가져온 코스

  addingSpot: false,
  addedSpot: false,
  addingSpotError: '',
};

export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILURE = 'GET_COURSE_FAILURE';

export const ADD_SPOT_REQUEST = 'ADD_SPOT_REQUEST'; // 지도 검색
export const ADD_SPOT_SUCCESS = 'ADD_SPOT_SUCCESS';
export const ADD_SPOT_FAILURE = 'ADD_SPOT_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_REQUEST: {
      return {
        ...state,
        gettingCourse: true,
        gettedCourse: false,
        gettingCourseError: '',
      };
    }
    case GET_COURSE_SUCCESS: {
      return {
        ...state,
        gettingCourse: false,
        gettedCourse: true,
        course: action.data,
      };
    }
    case GET_COURSE_FAILURE: {
      return {
        ...state,
        gettingCourse: false,
        gettedCourse: false,
        gettingCourseError: action.error,
      };
    }
    case ADD_SPOT_REQUEST: {
      return {
        ...state,
        addingSpot: true,
        addedSpot: false,
        addingSpotError: '',
      };
    }
    case ADD_SPOT_SUCCESS: {
      return {
        ...state,
        addingSpot: false,
        addedSpot: true,
        // 코스에 해당 지점 추가
        course: action.data,
      };
    }
    case ADD_SPOT_FAILURE: {
      return {
        ...state,
        addingSpot: false,
        addedSpot: false,
        addingSpotError: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
