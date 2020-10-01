import { PlusOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';

const PostImages = function ({ images }) {

  const [showImagesZoom, setShowImagesZoom] = useState<boolean>(false)

  const onZoom = useCallback(() => {
    setShowImagesZoom(true)
  }, [])

  if(images.length === 1){
    return (
      <>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
      </>
    )
  }

  if(images.length === 2){
    return (
      <>
        <img role="presentation" style={{ width: '50%', display: 'inline-block' }} width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{ width: '50%', display: 'inline-block' }} width="50%" src={images[1].src} alt={images[1].src} onClick={onZoom}/>
      </>
    )
  }
  
  return (
    <div>
      <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
      <div
        role="presentation"
        style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더 보기
      </div>
    </div>
  )
}

export default PostImages