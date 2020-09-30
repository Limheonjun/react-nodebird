import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'

const AppLayout = function ({ children }: Props) {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
        </Menu.Item>
        <Menu.Item>  
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/Limheonjun/react-nodebird/commits/master" target="_blank" rel="noreferrer noopener">Made By HJ</a>
        </Col>
      </Row>
    </div>
  )
}

/**
 * 타입스크립트를 쓰면 없어도 되지만,
 * js기준에서는 props의 값을 검사하기 위해 사용
 */
// AppLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// }


export default AppLayout


/**
 * 타입스크립트 번외 세팅
 */
interface Props {
  children: React.ReactNode
}