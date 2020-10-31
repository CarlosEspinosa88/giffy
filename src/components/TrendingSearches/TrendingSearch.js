import React, {useState, useEffect} from "react";
import getTrendingTermsGifs from "services/getTrendingTermsGifs";
import Category from "components/Category";

export default function TrendingSearch() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsGifs()
      .then(setTrends)
  }, [])

 return (
   <Category trends={trends} />
 )
}