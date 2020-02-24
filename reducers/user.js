import { dummyMe } from '../dummys';

export const initialState = {
  isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 데이터 통신중
  isLoggingIn: false, // 로그인 데이터 통신 중
  logInErrorReason: '', // 로그인 에러 이유
  signedUp: false, // 회원가입 완료 여부
  isSigningUp: false, // 회원가입 데이터 통신 중
  signUpErrorReason: '', // 회원가입 에러 이유
  me: dummyMe, // 내 정보
};

// 액션
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 로그인
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 회원가입
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 로그아웃
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signedUp: false,
        isSigningUp: true,
        me: null,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signedUp: true,
        isSigningUp: false,
        me: action.data,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        me: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
