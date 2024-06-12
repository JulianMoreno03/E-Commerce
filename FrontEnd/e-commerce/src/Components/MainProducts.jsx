"use client";
import { useEffect, useState } from 'react'; 
import { obtenerProductosPorCategoria } from '../Services/api';
import Producto from '../Components/producto';
export default function MainProducts({ idCategoria }) {

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
        <article>
            <div>
                <h1 className='text-black mt-2 text-2xl font-bold'>Productos Disponibles </h1>
               
                <section className='grid grid-cols-2 justify-center items-center '>

                {/*Hacemos un map que recorrera mi componente producto y le pasara las props segun la
                cantidad de productos que hay en la api */}
                {productos.map(producto => (
                        <Producto 
                        key={producto.idProducto}
                        idProducto={producto.idProducto} 
                        producto={producto.producto}
                        marca={producto.marca}
                        precio={producto.precio}
                        imgUrl={producto.imgUrl}
                        />
                    ))}

                </section>

            </div>
        </article>
    )
}