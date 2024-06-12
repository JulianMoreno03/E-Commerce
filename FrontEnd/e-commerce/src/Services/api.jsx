export async function obtenerCategorias() {
    try {
      const res = await fetch('http://localhost:8080/categorias');
      
      if (!res.ok) {
        throw new Error(`Error de datos: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      throw error;
    }
  }

  export async function obtenerProductosPorCategoria({idCategoria}){
    try{
      const res = await fetch(`http://localhost:8080/categorias/${idCategoria}/productos`);

      if (!res.ok) {
        throw new Error(`Error de datos: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    }
    catch (error) {
      console.error("Error al obtener categorías:", error);
      throw error;
    }
  }


  export async function obtenerProductoPorId({idProducto}){
    try{
      const res = await fetch(`http://localhost:8080/productos/${idProducto}`);

      if (!res.ok) {
        throw new Error(`Error de datos: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    }
    catch (error) {
      console.error("Error al obtener producto:", error);
      throw error;
    }
  }
  