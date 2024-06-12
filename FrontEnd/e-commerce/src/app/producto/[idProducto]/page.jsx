"use client";

import { useEffect, useState } from 'react';
import { obtenerProductoPorId } from '../../../Services/api';

export default function Page({params}){
    const { idProducto } = params;

const [producto, setProducto] = useState([]);


useEffect(() => {
  async function fecthProducto() {
    try {
      const producto = await obtenerProductoPorId({idProducto});
      setProducto(producto);
    } catch (error) {
      console.error("Error al obtener producto:", error);
    }
  }
  fecthProducto();
}, []);

    return(
        <section>
            <h1>id producto :{producto.idProducto} </h1> 
            
            <h1> nombre Producto :{producto.producto} </h1> 
            
            <h1>descripcion :{producto.descripcion} </h1> 
            <h1>precio :{producto.precio} </h1> 
            
        </section>
    )
}