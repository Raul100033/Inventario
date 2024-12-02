package ror.inventarios.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import ror.inventarios.modelo.Producto;

public interface ProductoRepositorio extends JpaRepository<Producto, Integer> {

}
