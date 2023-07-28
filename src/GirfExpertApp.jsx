import { useState } from "react"
import AddGif from "./components/AddGif"
import ItemGif from "./components/ItemGif"

const GirfExpertApp = () => {

    const [categorias, setCategorias] = useState([])

    const obtenerCategorias = (cat) => {
        const existe = categorias.find(item=> item.toLowerCase() === cat.toLowerCase())
        if(existe){
            alert("ya existe")
        }else{
            setCategorias([cat,...categorias])
        }
    }

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddGif
                obtenerCategorias={obtenerCategorias}
            />


            {categorias.map(categoria => (
                <ItemGif
                    key={categoria}
                    categoria={categoria}
                />
            ))}

        </>
    )
}

export default GirfExpertApp