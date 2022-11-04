package com.pragma.api.domain;

import java.io.Serializable;

/**
 * Clase que define un DTO para la transmision de la informacion de los productos.
 */
public class ProductDTO implements Serializable {

    /** Serializes */
    private static final long serialVersionUID = -4911762629965132125L;

    /** Id del producto */
    private Long id;

    /** Nombre del producto */
    private String name;

    /** Codigo del producto */
    private String code;

    /** Precio del producto */
    private Double price;

    /**
     * @return the productId
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id
     *            the productId to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the productName
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     *            the productName to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the productCode
     */
    public String getCode() {
        return code;
    }

    /**
     * @param code
     *            the productCode to set
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * @return the productPrice
     */
    public Double getPrice() {
        return price;
    }

    /**
     * @param productPrice
     *            the productPrice to set
     */
    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "ProductDTO [productId=" + id + ", productName=" + name + ", productCode=" + code + ", productPrice="
                + price + "]";
    }
}
