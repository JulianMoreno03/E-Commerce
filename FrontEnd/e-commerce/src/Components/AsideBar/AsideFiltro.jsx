export default function AsideFiltro() {
    return (

        <div className="flex flex-col justify-center items-start gap-2 ml-3 p-2">
            <p>Categoria </p>
            <h1 className=" font-bold text-3xl " >Filtros</h1>

            <ul className=" flex flex-col gap-4 w-full">
                <form className="flex flex-col gap-5 mt-5">

                    <span className="font-bold text-2xl">Precio</span>
                    
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4" />
                        <span>$10 - $20</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4" />
                        <span>$21 - $50</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4" />
                        <span>$51 - $200</span>
                    </label>
                </form>

                <form className="flex flex-col gap-5">

                    <span>Marcas</span>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4" />
                        <span>Samsung</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4" />
                        <span>Apple</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4" />
                        <span>Lenovo</span>
                    </label>

                    <div>
                        <button className="px-4 py-2 bg-indigo-600 rounded-lg text-white font-bold"> BORRAR FILTOS</button>
                    </div>
                </form>
            </ul>
        </div>
    )
}