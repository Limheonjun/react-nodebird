import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'
import styled from 'styled-components'
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import { ChildProps } from '../interface/interface';
import { useSelector } from 'react-redux'

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = function ({ children }: ChildProps) {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

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
          <SearchInput enterButton/>
        </Menu.Item>
        <Menu.Item>  
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
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