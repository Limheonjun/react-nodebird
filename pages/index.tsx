import React from 'react'
import AppLayout from '../components/AppLayout'
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = function () {
  const { me } = useSelector(state => state.user)
  const { mainPosts } = useSelector(state => state.post)
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(c => <PostCard key={c.id} post={c}/>)}
    </AppLayout>
  )
}

export default Home