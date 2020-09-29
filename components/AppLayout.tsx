import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const AppLayout = function ({ children }: Props) {
  return (
    <div>
      <div>
        <Link href="/"><a>노드버드</a></Link>
        <Link href="/profile"><a>프로필</a></Link>
        <Link href="/signup"><a>회원가입</a></Link>
      </div>
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