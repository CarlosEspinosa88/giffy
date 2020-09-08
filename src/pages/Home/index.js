import React, { useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import { CardContainer, Subtitle } from "../../utils/styles";
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches";

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()
  
  console.log(path)
  console.log(loading)


  function handleSubmit(e) {
    e.preventDefault()
    // aqui se pone la ruta a navegar
    pushLocation(`/search/${keyword}`)
  }

  function handleChange(e) {
    setKeyword(e.target.value)
  }

  return (
    <CardContainer>
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
      <TrendingSearches/>
    </CardContainer>
  )
}
