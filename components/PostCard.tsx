import React, { useState } from 'react'
import { Button, Card, Popover, Avatar } from 'antd';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import { useCallback } from 'react';

const PostCard = function ({ post }) {

  const [linked, setLinked] = useState<boolean>(false)
  const [commentFormOpened, setCommentFormOpened] = useState<boolean>(false)
  const onToggleLike = useCallback(() => {
    setLinked((prev) => !prev)
  }, [])
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev)
  }, [])
  const id = useSelector(state => state.userme?.id)

  return (
    <div style={{ marginBottom: 10 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet"/>,
          linked
              ? <HeartTwoTone twoToneColor = "#eb2f96" key = "heart" onClick = { onToggleLike }/>
              : <HeartOutlined key = "heart" onClick = { onToggleLike }/>,
          <MessageOutlined key="comment" onClick={onToggleComment}/>,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined/>
          </Popover>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}  
        />
      </Card>
      {commentFormOpened && (
        <div>
          댓글 부분
        </div>
      )}
      {/* // <CommentForm />
      // <Comments /> */}
    </div>
  )
}

export default PostCard