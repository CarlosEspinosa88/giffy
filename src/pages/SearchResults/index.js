import React from 'react';
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";
import { CardContainer } from "../../styles/GlobalStyles";

export default function SearchResults({ params }) {
  const { keyword } = params
  const {loading, gifs} = useGifs({ keyword })

  console.log({loading, gifs})
  
  return <CardContainer>
    {loading ? <Spinner /> : <ListOfGifs gifs={gifs} /> }
  </CardContainer>
}