import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

const AppLayout = function ({ children }): ReactElement<Props> {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  )
}

/**
 * 타입스크립트를 쓰면 없어도 되지만,
 * js기준에서는 props의 값을 검사하기 위해 사용
 */
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default AppLayout


/**
 * 타입스크립트 번외 세팅
 */
interface Props {
  children: React.ReactNode
}