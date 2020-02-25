export const initialState = {
  gettingCourse: false, // 가져오는 중
  gettingCourseError: '', // 가져오기 실패 에러 메세지
  gettedCourse: false, // 가져오기 완료
  course: null, // 가져온 코스
};

export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILURE = 'GET_COURSE_FAILURE';

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
    default: {
      return {
        ...state,
      };
    }
  }
};
