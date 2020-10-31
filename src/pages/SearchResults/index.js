import React from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import { CardContainer, Subtitle } from "../../utils/styles";

export default function SearchResults({ params }) {
  const { keyword } = params
  const {loading, gifs} = useGifs({ keyword })

  console.log({loading, gifs})
  
  return <CardContainer>
    {loading ? <Spinner /> :
      <>
        <Subtitle>Los gif's de {decodeURI(keyword)}</Subtitle>  
        <ListOfGifs gifs={gifs} /> 
      </>
    }
  </CardContainer>
}