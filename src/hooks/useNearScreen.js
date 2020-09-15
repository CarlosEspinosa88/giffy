import {useState, useEffect, useRef} from "react";

export default function useNearScreen({distance = '200px'} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const elementToIntersected = entries[0]
      if (elementToIntersected.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }
  
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })
  
    observer.observe(fromRef.current)
  
    return () => observer.disconnect()
  })

  return {isNearScreen, fromRef}
}
