package ECommerceBackEnd.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "categoria", schema = "e-commerce")
public class CategoriaEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "IdCategoria", nullable = false)
    private int idCategoria;
    @Basic
    @Column(name = "Categoria", nullable = false, length = -1)
    private String categoria;

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
