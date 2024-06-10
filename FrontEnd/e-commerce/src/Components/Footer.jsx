'use client';

//Servicio de api
import { obtenerCategorias } from "../Services/api";
import { useState, useEffect } from "react";
import FooterItem from "./FooterItem";

export default function Footer({img, categoria}){
    
const [categorias, setCategorias] = useState([]);

useEffect(() => {
    async function fetchCategorias() {
      try {
        const categorias = await obtenerCategorias();
        //Delimitamos obtener unicamente 4 para no desbordar nuestra pagina
        const LimitCategorias = categorias.slice(0,4);
        setCategorias(LimitCategorias);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    }
    fetchCategorias();
  }, []);

    return(
       <section className="w-full h-full flex flex-col justify-center mt-4 p-2 border-t-2" >

        <div className=" flex justify-between w-full">
            <p className="font-bold text-lg ml-4">Categorias mas populares</p>

            <a href="" className="border px-2 py-1 mr-1 bg-zinc-300 rounded-lg font-bold "> Ver todo</a>
        </div>

        <article className="grid grid-cols-4 ">  

        {categorias.map((categoria, index) => (
          <FooterItem key={index} url="#" categoria={categoria.categoria} img={categoria.imgUrl} />
        ))}
           
        </article>
       </section>
    )
}