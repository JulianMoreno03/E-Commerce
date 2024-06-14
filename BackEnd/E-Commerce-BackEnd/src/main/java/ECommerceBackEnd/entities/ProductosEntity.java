package ECommerceBackEnd.entities;

import jakarta.persistence.*;

import java.util.List;

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
    @Column(name = "producto", nullable = false)
    private String producto;

    @Basic
    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Basic
    @Column(name = "marca", nullable = false)
    private String marca;
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
    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    public CategoriaEntity getCategoriaByIdCategoria() {
        return categoriaByIdCategoria;
    }

    public ComentariosEntity getComentarioByIdComentarios() {
        return comentariosByIdComentario;
    }




}
