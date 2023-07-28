import { useEffect,useState } from "react"
import { getGif } from "../helpers"

const useFecht = (categoria) => {

    const [gifs,setGifs] = useState()       

    const getAllGif =  async() =>{
        const data = await getGif(categoria)
        setGifs(data)
    }

    useEffect(()=>{ 
        getAllGif()
    },[])   

    return{
        gifs
    }
}

export default useFecht