export const getGif = async (categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dRIw1cx2KhZFCmYOik2mFL2xHnnVmcA5&q=${categoria}&limit=10`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()
    const objApi = data.map(gif=>({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }))
    return objApi
}