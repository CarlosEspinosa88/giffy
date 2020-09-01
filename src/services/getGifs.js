import {API_KEY, API_URL} from "./settings"

function responseApi(response) {
  const { data = [] } = response
  if (Array.isArray(data)) {
    const gif = data.map(image => {
      const { title, id, images } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gif
  }
  return []
}

export default async function getGifs({ keyword = 'morty', limit = 25} = {} ) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`
  const data = await fetch(apiUrl)
    .then(res => res.json())
    .then(responseApi)
  
    return data
}

