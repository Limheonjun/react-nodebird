import React, { useState, useCallback  } from 'react'
import { Button, Card, Popover, Avatar, List, Comment } from 'antd';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent'
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';

const PostCard = function ({ post }) {
  const content: string = post.content;
  const dispatch = useDispatch()
  const { removePostLoading } = useSelector(state => state.post)
  const [linked, setLinked] = useState<boolean>(false)
  const [commentFormOpened, setCommentFormOpened] = useState<boolean>(false)
  const onToggleLike = useCallback(() => {
    setLinked((prev) => !prev)
  }, [])
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev)
  }, [])
  const { me } = useSelector((state) => state.user);
  const id = me && me.id;
  
  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, [])

  return (
    <div style={{ marginBottom: 10 }}>
      <Card
        cover={post.imagesList[0] && <PostImages images={post.imagesList} />}
        actions={[
          <RetweetOutlined key="retweet"/>,
          linked
              ? <HeartTwoTone twoToneColor = "#eb2f96" key = "heart" onClick = { onToggleLike }/>
              : <HeartOutlined key = "heart" onClick = { onToggleLike }/>,
          <MessageOutlined key="comment" onClick={onToggleComment}/>,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.users.id === id
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                  </>
                ) : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined/>
          </Popover>
        ]}
        extra={id && <FollowButton post={post}/>}
      >
        <Card.Meta
          avatar={<Avatar>{post.users.nickname[0]}</Avatar>}
          title={post.users.nickname}
          description={<PostCardContent postData={content} />}  
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post}/>
          <List
            header={`${post.commentsList.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.commentsList}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.users.nickname}
                  avatar={<Avatar>{item.users.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  )
}

export default PostCard