import { useSearchParams } from "react-router-dom";
import CatalogoCard from "../components/CatalogoCard";
import { useState } from "react";
import { useEffect } from "react";


export default function Resultados() {

    const [productos, setProductos] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    useEffect(() => {
        const fetchProductos = async () => {
          try {
            const response = await fetch(`https://idgs901apibalones20231114015214.azurewebsites.net/api/Productos?q=${query}`);
            const data = await response.json();
            setProductos(data);
          }
          catch (error){
            console.log(error);
            setProductos([]);
          }
        }
        fetchProductos();
      }, [query]);

    return (
        <CatalogoCard productos={productos}/>
    )
}
