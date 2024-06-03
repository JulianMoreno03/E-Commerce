import AsideItem from "./AsideItem";

export default function AsideBar(){
    return(
    <div className="flex flex-col justify-center items-start gap-2 ml-3 p-2">
      <h1 className=" flex items-start font-bold text-2xl">Categorias</h1>

      <ul className=" flex flex-col gap-4 w-full">

      <AsideItem url='#' nombre='Electronico'/>
      <AsideItem url='#' nombre='Hogar'/>
      
      <AsideItem url='#' nombre='Ropa'/>
      </ul>
    </div>
  );
    
}