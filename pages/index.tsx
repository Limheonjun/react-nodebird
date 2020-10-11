import React, { useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST} from '../reducers/user';

const Home = function () {
  const { me } = useSelector(state => state.user)
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(state => state.post)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    }),
    dispatch({
      type: LOAD_POSTS_REQUEST,
    })
  }, [])

  useEffect(() => {
    function onScroll() {
      //보통 스크롤에서 이 세가지 변수를 많이 씀
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight-300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          })
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [hasMorePosts, loadPostsLoading])
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(c => <PostCard key={c.id} post={c}/>)}
    </AppLayout>
  )
}

export default Home