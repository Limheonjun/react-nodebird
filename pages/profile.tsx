import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NickNameEditForm';
import { useSelector } from 'react-redux';

const Profile = function () {
  const { me } = useSelector(state => state.user)

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