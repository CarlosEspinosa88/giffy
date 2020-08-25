import React from 'react'
import ListOfGifs from "../../components/ListOfGifs"
import { useGifs } from "../../hooks/useGifs"
import styled from 'styled-components';

const Loading = styled.p`
  font-size: 20px;
  color: cyan
`

export default function SearchResults({ params }) {
  const { keyword } = params
  const {loading, gifs} = useGifs({ keyword })

  console.log({loading, gifs})

  if (loading) {
    return <Loading>Cargando</Loading>
  }

  return (
    <ListOfGifs gifs={gifs} />
  )
}