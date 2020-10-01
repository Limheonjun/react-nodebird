import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import user from './user'
import post from './post'


// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  // 서버사이드 렌더링을 위해서 index부분 추가
  index: (state:Object  = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action)
        return { ...state, ...action.payload }

      default:
        return state
    }
  },
  user,
  post,  
})

export default rootReducer