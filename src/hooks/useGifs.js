import {useEffect, useState} from 'react';
import getGifs from '../services/getGifs';

export function useGifs({keyword} = { keyword: '' }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  
  useEffect(function() {
    setLoading(true)
    const keywordDefault = keyword || localStorage.getItem('lastKeyword') || "random"
    console.log('efecto ejecutado')

    getGifs({ keyword: keywordDefault })
      .then(giffs => {
        setGifs(giffs)
        localStorage.setItem('lastKeyword', keyword)
        setTimeout(() => {  
          setLoading(false)
        }, 3000)
      })
  }, [keyword]) 

  return {loading, gifs}
}