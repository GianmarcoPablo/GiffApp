import { useState } from "react";

const AddCategory = ({ obtenerCategoria }) => {

    const [inputValue, setInputValue] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1)return
        obtenerCategoria(inputValue)
        setInputValue("")
       
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    );
};

export default AddCategory;
