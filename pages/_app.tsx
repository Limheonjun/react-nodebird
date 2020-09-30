import React, { ReactNode } from 'react'
import 'antd/dist/antd.css'
// import PropTypes from 'prop-types';
import type { AppProps } from 'next/app'
import Head from 'next/head'

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

export default NodeBird



/**
 * 타입스크립트
 */
// interface Props {
//   Component: React.ReactNode
// }