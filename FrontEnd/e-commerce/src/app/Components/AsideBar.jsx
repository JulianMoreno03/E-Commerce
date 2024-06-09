'use client';
import AsideItem from "./AsideItem";
import { useState, useEffect } from "react";
//Servicio de api
import { obtenerCategorias } from "../Services/api";


export default function AsideBar() {
  
const [categorias, setCategorias] = useState([]);


useEffect(() => {
  async function fetchCategorias() {
    try {
      const categorias = await obtenerCategorias();
      setCategorias(categorias);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  }
  fetchCategorias();
}, []);

  return (
    <div className="flex flex-col justify-center items-start gap-2 ml-3 p-2">
      <h1 className=" flex items-start font-bold text-2xl">Categorias</h1>

      <ul className=" flex flex-col gap-4 w-full">
        {categorias.map((categoria, index) => (
          <AsideItem key={index} url="#" categoria={categoria.categoria}  />
        ))}
      </ul>
    </div>
  );

}