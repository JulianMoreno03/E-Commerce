import { useEffect, useState } from 'react';
import { obtenerProductoPorId } from '../../Services/api';
import Image from 'next/image';
export default function Producto({ idProducto }) {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        async function fecthProducto() {
            try {
                const producto = await obtenerProductoPorId({ idProducto });
                setProducto(producto);
            } catch (error) {
                console.error("Error al obtener producto:", error);
            }
        }
        fecthProducto();
    }, []);
    return (
        <section className='grid grid-cols-2 justify-center items-center h-1/2'>
            <div className='w-[400px] bg-indigo-700 flex justify-center items-center rounded-lg'>
                <Image 
                src={producto.imgUrl}
                width={250}
                height={250} 
                className='rounded-lg m-4 h-[250px]'>
                </Image>
            </div>
            <div className='ml-8 flex flex-col justify-evenly h-full border'>
                <div className='flex flex-col justify-evenly h-full' >
                    <p>{producto.producto}</p>
                    <p>{producto.descripcion}</p>
                    <p>${producto.precio}</p>

                </div>
                <div>
                    <button>Comprar</button>
                    <button>Favorito</button>

                </div>
            </div>
        </section>
    )
}