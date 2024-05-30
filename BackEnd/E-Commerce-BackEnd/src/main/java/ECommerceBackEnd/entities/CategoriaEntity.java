package ECommerceBackEnd.entities;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "categoria", schema = "e-commerce", catalog = "")
public class CategoriaEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "IdCategoria", nullable = false)
    private int idCategoria;

    @Basic
    @Column(name = "categoria", nullable = false)
    private String categoria;
    @OneToMany(mappedBy = "categoriaByIdCategoria")
    private Collection<ProductosEntity> productosByIdCategoria;

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
