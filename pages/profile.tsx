import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NickNameEditForm';

const Profile = function () {
  const followingList = [{ nickname: 'hj'}, { nickname: 'handsome'}, { nickname: 'awesome'}]
  const followerList = [{ nickname: 'hj'}, { nickname: 'perfect'}, { nickname: 'intelligent'}]

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
      </AppLayout>
    </>
  )
}

export default Profile