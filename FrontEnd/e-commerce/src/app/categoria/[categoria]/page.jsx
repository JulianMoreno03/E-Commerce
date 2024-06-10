"use client";
import { useRouter } from 'next/router';

const CategoriaPage = ({ params }) => {
    const { categoria } = params;

    return (
        <div>
            <h1 className='text-black'>Detalles de la categoría : {categoria}</h1>
           
        </div>
    );
};

export default CategoriaPage;
