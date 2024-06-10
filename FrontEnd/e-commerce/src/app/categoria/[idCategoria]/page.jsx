"use client";
import { useEffect, useState } from 'react';
import { obtenerProductosPorCategoria } from '../../../Services/api';
export default function CategoriaPage({params}){
    const { idCategoria } = params;
 
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function fetchProductos() {
            try {
                const data = await obtenerProductosPorCategoria({ idCategoria });
                setProductos(data); 
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        }
        fetchProductos();
    }, [idCategoria]);

    return (
        <div>
        <h1 className='text-black'>Productos de la categoría con id: {idCategoria}</h1>
        <ul>
            {productos.map(producto => (
                <li key={producto.idProducto}>{producto.producto}</li> 
            ))}
        </ul>
    </div>
    );
};

