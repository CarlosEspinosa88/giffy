import {useContext, useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import GifsContext from "../context/GifsContext"

export function useGifs({keyword} = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)

  
  useEffect(function() {
    setLoading(true)
    const keywordDefault = keyword || localStorage.getItem('lastKeyword') || "random"
    console.log('efecto ejecutado')

    getGifs({ keyword: keywordDefault })
      .then(gifsKeyword => {
        setGifs(gifsKeyword)
        localStorage.setItem('lastKeyword', keyword)
        setTimeout(() => {  
          setLoading(false)
        }, 3000)
      })
  }, [keyword, setGifs]) 

  return {loading, gifs}
}