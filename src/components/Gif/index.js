import React from 'react'
import styled from 'styled-components';
import { Link } from "wouter";

const Image = styled.img`
  {
    height: 500px;
    width: 500px
  }
`

export default function Gif({ id, title, url}) {
  return (
    <div className="image" key={id}>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <Image Loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}
