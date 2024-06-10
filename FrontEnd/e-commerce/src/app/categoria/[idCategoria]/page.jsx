"use client";
import { useEffect, useState } from 'react';
import { obtenerProductosPorCategoria } from '../../../Services/api';
import Header from '../../../Components/Header/Header';
import AsideFiltro from '../../../Components/AsideBar/AsideFiltro';
import MainProducts from '../../../Components/MainProducts';
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
        <main>
            <header>
            <Header />
            </header>
      
      <section>
            <aside>
            <AsideFiltro></AsideFiltro>
            </aside>

            <article>
                <MainProducts></MainProducts>
            </article>
      </section>

        <div>
        <h1 className='text-black'>Productos de la categoría con id: {idCategoria}</h1>
        <ul>
            {productos.map(producto => (
                <li key={producto.idProducto}>{producto.producto}</li> 
            ))}
        </ul>
    </div>
    </main>
    );
};

