import React from 'react'
import { PostCardContentProps } from '../interface/interface';
import Link from 'next/link';

const PostCardContent = function ({ postData }: { postData: string }) {
  console.log("postData : " + postData)
  if (postData.split != null) {
    return (
      <div>
        {postData.split(/(#[^\s#]+)/g).map((v, i) => {
          if (v.match(/(#[^\s#]+)/g)) {
            return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
          }
          return v
        })}
      </div>
    )
  } else {
    return <div>데이터가 존재하지 않습니다</div>
  }
}

export default PostCardContent

