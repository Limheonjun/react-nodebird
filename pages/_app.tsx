import React, { ReactNode } from 'react'
import 'antd/dist/antd.css'
// import PropTypes from 'prop-types';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga'

const NodeBird = function ({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
}

// NodeBird.PropTypes = {
//   Component: PropTypes.elementType.isRequired
// }

export default Wrapper.withRedux(withReduxSaga(NodeBird))



/**
 * 타입스크립트
 */
// interface Props {
//   Component: React.ReactNode
// }