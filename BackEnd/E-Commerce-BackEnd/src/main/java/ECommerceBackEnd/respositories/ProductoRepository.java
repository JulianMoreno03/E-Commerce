package ECommerceBackEnd.respositories;

import ECommerceBackEnd.entities.ProductosEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ProductoRepository extends CrudRepository<ProductosEntity, Integer > {
    ProductosEntity findById(int id);
    ArrayList<ProductosEntity> findByIdCategoria(int idCategoria);
}
