import React, { useState } from 'react';
import { ImagesZoomProps } from '../../interface/interface';
import Slick from 'react-slick'
import { Overlay, Global, CloseBtn, Header, Indicator, ImgWrapper, SlickWrapper } from './styles';


const ImagesZoom = function ({ images, onClose }: ImagesZoomProps) {

  const [currentSlide, setCurrentSlide] = useState<number>(0)

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1}
              {' '}
              /
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
}

export default ImagesZoom