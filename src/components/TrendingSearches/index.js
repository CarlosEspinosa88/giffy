import React, {useState, useEffect, useRef} from "react";
import getTrendingTermsGifs from "../../services/getTrendingTermsGifs";
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
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const elementToIntersected = entries[0]
      if (elementToIntersected.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  })

  return (
    <div ref={elementRef}>
      {show ? <TrendingSearch /> : null}
    </div>

  )
}
