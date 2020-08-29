import React from 'react'
import { Link, Container, Title, ImageGif } from './styles'

export default function Gif({ id, title, url}) {
  return (
    <Container key={id}>
      <Link to={`/gif/${id}`}>
        <Title>{title}</Title>
        <ImageGif Loading='lazy' alt={title} src={url} />
      </Link>
    </Container>
  )
}
