import { useEffect, useState } from 'react';
import { obtenerComentariosPorProducto } from '../../Services/api';

export default function FooterProducto({idProducto}){
    const [comentarios, setComentario] = useState([]);

    useEffect(() => {
        async function fecthProducto() {
            try {
                const comentarios = await obtenerComentariosPorProducto({ idProducto });
                setComentario(comentarios);
            } catch (error) {
                console.error("Error al obtener comentarios:", error);
            }
        }
        fecthProducto();
    }, []);

    return(
        <section className='grid grid-cols-2 gap-10 w-1/2 h-full'>
            <div>
                <h1 className='text-2xl font-bold'>Comentarios</h1>
                <section>
                    {comentarios.length > 0 ? (
                        comentarios.map((comentario, index) => (
                            <article key={index} className='mt-2 mb-2 flex flex-col border p-4 rounded-lg bg-zinc-400 w-full font-bold'>
                                {comentario.comentario}
                            </article>
                        ))
                    ) : (
                        <article>No hay comentarios para este producto</article>
                    )}
                </section>
            </div>
            <div >
              <p className='font-bold text-xl'>Producto Similares</p>  
            </div>
        </section>
    );
    
}