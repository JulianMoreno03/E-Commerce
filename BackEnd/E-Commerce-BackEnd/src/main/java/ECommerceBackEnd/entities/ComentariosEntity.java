package ECommerceBackEnd.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "comentarios", schema = "e-commerce")
public class ComentariosEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "IdComentarios", nullable = false)
    private int idComentarios;
    @Basic
    @Column(name = "IdProducto", nullable = false)
    private int idProducto;
    @Basic
    @Column(name = "Comentario", nullable = false, length = -1)
    private String comentario;

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

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}
