import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import rootSaga from '../sagas'



//store.sagaTask에러시 해결 방법
import * as Redux from 'redux'
declare module 'redux' {
  export interface Store {
    sagaTask: any
  }
}




const loggerMiddleware = ({ dispath, getState }) => (next) => (action) => {
  console.log(action)
  return next(action)
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: any = [sagaMiddleware, loggerMiddleware]
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer)
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const Wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development'})

export default Wrapper