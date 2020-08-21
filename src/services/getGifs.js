
const apiKey = 'krDzOqoKAv77BiPKtoKAWQW5gH3ezMIT'

export default function getGifs({ keyword = 'morty'} = {} ) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`)
  .then(res => res.json())
  .then(response => {
    const { data } = response
    const giffs = data.map(image => {
      const { title, id, images } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return giffs
  })
}

