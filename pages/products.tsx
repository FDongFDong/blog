import ImageGallery from 'react-image-gallery'
// import stylesheet if you're not already using CSS @import
import 'react-image-gallery/styles/css/image-gallery.css'
import Carousel from 'nuka-carousel'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1016/1000/600/',
    thumbnail: 'https://picsum.photos/id/1016/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1013/1000/600/',
    thumbnail: 'https://picsum.photos/id/1013/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1012/1000/600/',
    thumbnail: 'https://picsum.photos/id/1012/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1011/1000/600/',
    thumbnail: 'https://picsum.photos/id/1011/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1010/1000/600/',
    thumbnail: 'https://picsum.photos/id/1010/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1009/1000/600/',
    thumbnail: 'https://picsum.photos/id/1009/250/150/',
  },
]

export default function Products() {
  const [index, setIndex] = useState(0)
  // return <ImageGallery items={images} />
  return (
    <>
      <Carousel
        animation="zoom"
        autoplay
        withoutControls={true}
        wrapAround
        speed={10}
        slideIndex={index}
      >
        {images.map((item) => (
          <Image
            key={item.original}
            src={item.original}
            alt="image"
            width={1000}
            height={600}
            layout="responsive"
          />
        ))}
      </Carousel>
      <div style={{ display: 'flex' }}>
        {images.map((item, idx) => (
          <div key={idx} onClick={() => setIndex(idx)}>
            <Image src={item.original} alt="image" width={100} height={60} />
          </div>
        ))}
      </div>
    </>
  )
}
