package com.pragma.api.business;

import com.pragma.api.domain.ProductDTO;
import com.pragma.api.domain.Response;

/**
 * Interface que permite definir las operaciones de negocio a realizar sobre la entidad Product.
 */
public interface ProductBusiness {

    /**
     * Metodo que permite crear un nuevo registro en base de datos, sobre la tabla PRODUCT, insertando la informacion del producto que se
     * recibe mediante el DTO.
     * 
     * @param productDto
     *            {@link ProductDTO} Objeto con la información a insertar, recibido en el cuerpo de la petición al servicio Rest
     * @return {@link Response} Objeto de respuesta para el servicio, el cual contiene la informacion sobre el resultado de la transaccion
     */
    Response<Void> createProduct(ProductDTO productDto);

    /**
     * Método que permite consultar la información de un producto mediante su codigo
     * 
     * @param code
     *            Codigo del producto a consultar
     * @return {@link Response} Objeto de respuesta para el servicio, el cual contiene información sobre el resultado de la consulta,
     *         además de la información del producto consultado
     */
    Response<ProductDTO> getProductByCode(String code);
}
