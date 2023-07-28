import { useState } from "react"

const AddGif = ({obtenerCategorias}) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length < 1){
            alert("agrega algo")
        }else{
            obtenerCategorias(inputValue)
        }
        setInputValue("")   
    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
        </form>
    )
}

export default AddGif