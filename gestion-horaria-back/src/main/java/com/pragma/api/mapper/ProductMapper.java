package com.pragma.api.mapper;

import org.springframework.stereotype.Component;

import com.pragma.api.domain.ProductDTO;
import com.pragma.api.model.Product;

/**
 * Clase que permite mapear los DTOs de producto hacia la entidad y viceversa.
 */
@Component
public class ProductMapper {

    /**
     * Permite convertir un DTO de producto en la entidad correspondiente
     * 
     * @param productDto
     *            objeto con la informacion del producto
     * @return Entidad con la informacion del producto
     */
    public Product fromDtoToEntity(ProductDTO productDto) {
        Product product = new Product();
        product.setId(productDto.getId());
        product.setCode(productDto.getCode());
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());

        return product;
    }

    /**
     * Permite convertir una entidad de producto en el Dto correspondiente
     * 
     * @param product
     *            Entidad con la informacion del producto
     * @return Dto con la informacion del producto
     */
    public ProductDTO fromEntityToDto(Product product) {
        ProductDTO productDto = new ProductDTO();
        productDto.setId(product.getId());
        productDto.setCode(product.getCode());
        productDto.setName(product.getName());
        productDto.setPrice(product.getPrice());

        return productDto;
    }
}