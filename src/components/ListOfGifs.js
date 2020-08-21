import React, { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';
import styled from 'styled-components';

const Loading = styled.p`
  font-size: 20px;
  color: cyan
`

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const { keyword } = params
  console.log(keyword)

  useEffect(function() {
    setLoading(true)
    console.log('efecto ejecutado')
    getGifs({ keyword })
      .then(giffs => {
        setGifs(giffs)
        setTimeout(() => {
          setLoading(false)
        }, 5000)
      })
  }, [keyword])

  if (loading) {
    return <Loading>Cargando</Loading>
  }

  return (
    <>
      {
        gifs.map(({id, title, url}) => 
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
          />
        )
      }
    </>
  )
}
