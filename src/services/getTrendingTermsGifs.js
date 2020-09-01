import {API_KEY, API_URL} from "./settings"

function responseApi(response) {
  const { data } = response
  return data
}

export default async function getTrendingTermsGifs() {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
  const data = await fetch(apiUrl)
    .then(res => res.json())
    .then(responseApi)
  
  return data
}