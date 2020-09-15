import React, {useState, useEffect} from "react";
import getTrendingTermsGifs from "../../services/getTrendingTermsGifs";
import useNearScreen from "../../hooks/useNearScreen"
import Category from "../Category";

function TrendingSearch() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsGifs()
      .then(setTrends)
  }, [])

 return (
   <Category trends={trends} />
 )
}

export default function LazyTrending () {
  const {isNearScreen, fromRef} = useNearScreen({ distance: '200px'})

  return (
    <div ref={fromRef}>
      {isNearScreen ? <TrendingSearch /> : null}
    </div>

  )
}
