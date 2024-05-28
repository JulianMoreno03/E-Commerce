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
    @Column(name = "IdCategoria", nullable = false)
    private int idCategoria;
    @Basic
    @Column(name = "Producto", nullable = false, length = -1)
    private String producto;
    @Basic
    @Column(name = "Descripcion", nullable = false, length = -1)
    private String descripcion;
    @Basic
    @Column(name = "Marca", nullable = false, length = -1)
    private String marca;
    @Basic
    @Column(name = "ImgUrl", nullable = false, length = -1)
    private String imgUrl;
    @Basic
    @Column(name = "Precio", nullable = false, precision = 0)
    private double precio;
    @Basic
    @Column(name = "IdComentario", nullable = true)
    private Integer idComentario;
    @ManyToOne
    @JoinColumn(name = "IdCategoria", referencedColumnName = "IdCategoria", nullable = false)
    private CategoriaEntity categoriaByIdCategoria;
    @ManyToOne
    @JoinColumn(name = "IdComentario", referencedColumnName = "IdComentarios")
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
