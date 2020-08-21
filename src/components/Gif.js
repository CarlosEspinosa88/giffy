import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
  {
    height: 500px;
    width: 500px
  }
`

export default function Gif({ id, title, url}) {
  return (
    <div className="image" key={id}>
      <h4>{title}</h4>
      <Image src={url} />
    </div>
  )
}
