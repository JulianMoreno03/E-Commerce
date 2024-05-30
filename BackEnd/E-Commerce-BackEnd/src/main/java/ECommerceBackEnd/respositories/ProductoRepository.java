package ECommerceBackEnd.respositories;

import ECommerceBackEnd.entities.ProductosEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends CrudRepository<ProductosEntity, Integer > {
}
