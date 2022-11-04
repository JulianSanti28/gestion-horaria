package com.familia.api.core.unit;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.pragma.api.business.ProductBusinessImpl;
import com.pragma.api.domain.ProductDTO;
import com.pragma.api.exception.CoreException;
import com.pragma.api.repository.ProductRepository;

/**
 * Clase que permite ejecutar las pruebas unitarias sobre los metodos auxiliares de la clase {@link ProductBusinessImpl}
 * 
 * @author ricardo.ayala@pragma.com.co
 *
 */
@SpringBootTest
public class ProductBusinessImplTests {

    /** Datos para la ejecucion de pruebas */
    public static final String TEST_PRODUCT_NAME = "Shoes";
    public static final String TEST_PRODUCT_CODE = "A0001";
    public static final double TEST_PRODUCT_PRICE = 2000;
    /** Repository de Spring */
    @Autowired
    private ProductRepository productRepository;
    /** Referencia a la clase sobre la cual se realizan las pruebas */
    @Autowired
    private ProductBusinessImpl productBusiness;
    /** Instancia del DTO de la entidad Product */
    private ProductDTO productDto;

    /**
     * Permite crear un objeto de tipo ProductDTO
     * 
     * @return objeto con la informacion del producto
     */
    public static ProductDTO createProductDto() {
        ProductDTO productDto = new ProductDTO();
        productDto.setId(1L);
        productDto.setName(TEST_PRODUCT_NAME);
        productDto.setCode(TEST_PRODUCT_CODE);
        productDto.setPrice(TEST_PRODUCT_PRICE);

        return productDto;
    }

    /**
     * Permite inicializar los datos requeridos para pruebas
     */
    @BeforeEach
    public void initTest() {
        productRepository.deleteAll();
        productDto = createProductDto();
    }

    /**
     * Prueba unitaria para comprobar la correcta verificacion de la informacion de un producto, donde se lanza una excepcion cuando la info
     * no sea la esperada
     * 
     * @throws CoreException
     *             En caso de que la info sea incorrecta
     */
    @Test
    public void testVerifyProductInfoIncomplete() throws CoreException {
        Assertions.assertThrows(CoreException.class, () -> {
            productDto.setCode("");
            productBusiness.verifyProductInfo(productDto);
        });
    }

    /**
     * Prueba unitaria para comprobar la correcta verificacion de la informacion de un producto, donde se envia la infEn caso de que surja
     * un error interno en la transacciono completa
     * 
     * @throws CoreException
     *             En caso de que la info sea incorrecta
     */
    @Test
    public void testVerifyProductInfoComplete() throws CoreException {
        productBusiness.verifyProductInfo(productDto);
    }

    /**
     * Prueba unitaria para comprobar el ejemplo de error en el servidor
     * 
     * @throws CoreException
     *             En caso de que surja un error interno en la transaccion
     */
    @Test
    public void testInternalServerErrorOccurrs() {
        Assertions.assertThrows(CoreException.class, () -> {
            productDto.setPrice(0D);
            productBusiness.simulateInternalServerError(productDto);
        });
    }

    /**
     * Prueba unitaria para comprobar el ejemplo de error en el servidor, en este caso no se esperar que hayan errores internos
     * 
     * @throws CoreException
     *             En caso de que surja un error interno en la transaccion
     */
    @Test
    public void testInternalServerErrorDontOcurrs() throws CoreException {
        productBusiness.simulateInternalServerError(productDto);
    }
}
