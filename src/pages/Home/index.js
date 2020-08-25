import React, { useState } from 'react';
import { useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs"
import { Subtitle, ContainerHome } from "./styles.js"
import ListOfGifs from '../../components/ListOfGifs';

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()
  
  console.log(path)
  console.log(loading)


  function handleSubmit(e) {
    e.preventDefault()
    // aqui se pone la ruta a navegar
    pushLocation(`/gif/${keyword}`)
  }

  function handleChange(e) {
    setKeyword(e.target.value)
  }

  return (
    <ContainerHome>
      <form onSubmit={handleSubmit}>
        <input
          value={keyword}
          onChange={handleChange}
          placeholder="Enter" 
        />
        <button>Buscar</button>
      </form>
      <Subtitle>Los gif's mas populares</Subtitle>
      <ListOfGifs gifs={gifs} />
    </ContainerHome>
  )
}
