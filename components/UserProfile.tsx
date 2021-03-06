import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd'
import { LogInProps } from '../interface/interface';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = function () {
  const dispatch = useDispatch()

  const { me, logOutLoading } = useSelector(state => state.user)

  const onLogOut = useCallback(() => {
    // setIsLoggedIn(false)  
    dispatch(logoutRequestAction())
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{me.postsList.length}</div>,
        <div key="followings">팔로잉<br/>{me.followings.length}</div>,
        <div key="followers">팔로워<br/>{me.followers.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me? me.nickname[0] : ""}</Avatar>}
        title={me? me.nickname[0] : ""}  
      />
      <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile