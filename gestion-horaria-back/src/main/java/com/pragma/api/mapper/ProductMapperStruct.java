package com.pragma.api.mapper;

import com.pragma.api.domain.ProductDTO;
import com.pragma.api.model.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring") //Reconoce la interfaz como un componente (bean) que se puede inyectar
public interface ProductMapperStruct {
    ProductDTO productToProductDto(Product product);
}
