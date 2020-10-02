export const initalState = {
  isLoggingIn: false, //로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, //로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {}
}

// action creator
export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

// Saga가 put을 통해 알아서 호출
// export const loginSuccessAction = (data) => {
//   return {
//     type: 'LOG_IN_SUCCESS',
//     data,
//   }
// }

// export const loginFailureAction = (data) => {
//   return {
//     type: 'LOG_IN_FAILURE',
//     data,
//   }
// }

export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST',
  }
}

export const logoutSuccessAction = () => {
  return {
    type: 'LOG_OUT_SUCCESS',
  }
}

export const logoutFailureAction = () => {
  return {
    type: 'LOG_OUT_FAILURE',
  }
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLoggingIn: true,
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'zerocho' },
      }
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      }
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
        me: null,
      }
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
    }
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      }
    default:
      return state
  }
}

export default reducer