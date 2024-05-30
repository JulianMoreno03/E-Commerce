package ECommerceBackEnd.entities;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "comentarios", schema = "e-commerce", catalog = "")
public class ComentariosEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "IdComentarios", nullable = false)
    private int idComentarios;
    @Basic
    @Column(name = "IdProducto", nullable = false)
    private int idProducto;
    @OneToMany(mappedBy = "comentariosByIdComentario")
    private Collection<ProductosEntity> productosByIdComentarios;

    public int getIdComentarios() {
        return idComentarios;
    }

    public void setIdComentarios(int idComentarios) {
        this.idComentarios = idComentarios;
    }

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public Collection<ProductosEntity> getProductosByIdComentarios() {
        return productosByIdComentarios;
    }

    public void setProductosByIdComentarios(Collection<ProductosEntity> productosByIdComentarios) {
        this.productosByIdComentarios = productosByIdComentarios;
    }
}
