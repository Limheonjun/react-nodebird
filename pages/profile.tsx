import React, { useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NickNameEditForm';
import { useSelector } from 'react-redux';
import Router from 'next/dist/client/router';

const Profile = function () {
  const { me } = useSelector(state => state.user)

  //로그인 안한채로 프로필페이지 가지 못하도록
  useEffect(() => {
    if (!me || !me.id) {
      Router.push('/') 
    }
  })

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me?.followings}/>
        <FollowList header="팔로워" data={me?.followers}/>
      </AppLayout>
    </>
  )
}

export default Profile