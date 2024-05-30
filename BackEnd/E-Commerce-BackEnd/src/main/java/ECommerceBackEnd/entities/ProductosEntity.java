package ECommerceBackEnd.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "productos", schema = "e-commerce")
public class ProductosEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "IdProducto", nullable = false)
    private int idProducto;

    @Basic
    @Column(name = "IdCategoria", nullable = false, insertable = false, updatable = false)
    private int idCategoria;

    @Basic
    @Column(name = "ImgUrl", nullable = false, length = -1)
    private String imgUrl;

    @Basic
    @Column(name = "Precio", nullable = false, precision = 0)
    private double precio;

    @Basic
    @Column(name = "IdComentario", nullable = true, insertable = false, updatable = false)
    private Integer idComentario;

    @ManyToOne
    @JoinColumn(name = "IdCategoria", referencedColumnName = "IdCategoria", nullable = false, insertable = false, updatable = false)
    private CategoriaEntity categoriaByIdCategoria;

    @ManyToOne
    @JoinColumn(name = "IdComentario", referencedColumnName = "IdComentarios", nullable = true, insertable = false, updatable = false)
    private ComentariosEntity comentariosByIdComentario;

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public Integer getIdComentario() {
        return idComentario;
    }

    public void setIdComentario(Integer idComentario) {
        this.idComentario = idComentario;
    }

    public CategoriaEntity getCategoriaByIdCategoria() {
        return categoriaByIdCategoria;
    }

    public void setCategoriaByIdCategoria(CategoriaEntity categoriaByIdCategoria) {
        this.categoriaByIdCategoria = categoriaByIdCategoria;
    }

    public ComentariosEntity getComentariosByIdComentario() {
        return comentariosByIdComentario;
    }

    public void setComentariosByIdComentario(ComentariosEntity comentariosByIdComentario) {
        this.comentariosByIdComentario = comentariosByIdComentario;
    }
}
