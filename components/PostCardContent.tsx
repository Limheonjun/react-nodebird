import React from 'react'
import { PostCardContentProps } from '../interface/interface';
import Link from 'next/link';

const PostCardContent = function ({ postData }: PostCardContentProps) {
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
}

export default PostCardContent

