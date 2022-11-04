package com.pragma.api.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

/**
 * Clase que define una entidad para el mapeo O/R de la tabla PRODUCT.
 */
@Entity
@Getter
@Setter
public class Product {

    /** Id del producto */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    /** Nombre del producto */
    private String name;
    /** Codigo del producto */
    @Column(unique = true, nullable = false, length = 10)
    @Size(min = 5, max = 10)
    private String code;
    /** Precio del producto */
    private Double price;

    @Override
    public String toString() {
        return "Product [name=" + name + ", code=" + code + ", price=" + price + "]";
    }
}