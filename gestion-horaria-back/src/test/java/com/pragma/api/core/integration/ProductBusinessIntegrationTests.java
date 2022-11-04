package com.familia.api.core.integration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.pragma.api.business.ProductBusiness;
import com.pragma.api.domain.ProductDTO;
import com.pragma.api.domain.Response;
import com.pragma.api.model.Product;
import com.pragma.api.repository.ProductRepository;
import com.familia.api.core.unit.ProductBusinessImplTests;

/**
 * Clase que permite ejecutar las pruebas de integracion sobre los metodos de negocio de la clase {@link ProductBusiness}
 * 
 * @author ricardo.ayala@pragma.com.co
 *
 */
@SpringBootTest
public class ProductBusinessIntegrationTests {

    /** Repository de Spring */
    @Autowired
    private ProductRepository productRepository;

    /** Referencia a la clase sobre la cual se realizan las pruebas */
    @Autowired
    private ProductBusiness productBusiness;

    /** Instancia de la entidad Product */
    private Product product;

    /** Instancia del DTO para la entidad Product */
    private ProductDTO productDTO;

    /**
     * Permite crear una instancia de la entidad Product para su registro en BD
     * 
     * @return {@link Product} instancia de la entidad
     */
    public static Product createProduct() {
        Product product = new Product();
        product.setId(1L);
        product.setName(ProductBusinessImplTests.TEST_PRODUCT_NAME);
        product.setCode(ProductBusinessImplTests.TEST_PRODUCT_CODE);
        product.setPrice(ProductBusinessImplTests.TEST_PRODUCT_PRICE);

        return product;
    }

    /**
     * Permite inicializar datos requeridos para las pruebas
     */
    @BeforeEach
    public void initTest() {
        this.productRepository.deleteAll();
        this.product = createProduct();
        this.productDTO = ProductBusinessImplTests.createProductDto();
    }

    /**
     * Prueba de integracion para comprobar el registro exitoso de un producto
     */
    @Test
    public void testCreateProductSuccessful() {
        Response<Void> response = this.productBusiness.createProduct(productDTO);
        assertThat(response.getStatus()).isEqualTo(200);
        assertThat(response.getErrorCode()).isEqualTo("");
    }

    /**
     * Prueba de integracion para comprobar la solicitud de creacion de un producto con datos incorrectos
     */
    @Test
    public void testCreateProductBadRequestError() {
        this.productDTO.setCode("");
        this.productDTO.setPrice(null);
        Response<Void> response = this.productBusiness.createProduct(this.productDTO);
        assertThat(response.getStatus()).isEqualTo(400);
        assertThat(response.getErrorCode()).isEqualTo("0001");
    }

    /**
     * Prueba de integracion para comprobar la solicitud de creacion de un producto, durante la cual se genera un error en el servidor
     */
    @Test
    public void testCreateProductInternalServerError() {
        this.productDTO.setPrice(0D);
        Response<Void> response = this.productBusiness.createProduct(this.productDTO);
        assertThat(response.getStatus()).isEqualTo(500);
        assertThat(response.getErrorCode()).isEqualTo("0001");
    }

    /**
     * Prueba de integracion para comprobar la consulta exitosa de un producto mediante su codigo
     */
    @Test
    public void testGetProductByCodeSuccesful() {
        this.productRepository.save(this.product);
        Response<ProductDTO> response = this.productBusiness.getProductByCode(this.product.getCode());
        ProductDTO testProduct = response.getData();
        assertThat(response.getStatus()).isEqualTo(200);
        assertThat(response.getErrorCode()).isEqualTo("");
        assertThat(testProduct.getCode()).isEqualTo(this.product.getCode());
        assertThat(testProduct.getName()).isEqualTo(product.getName());
        assertThat(testProduct.getPrice()).isEqualTo(product.getPrice());
    }

    /**
     * Prueba de integracion para comprobar la consulta de un producto cuyo codigo no existe en la BD
     */
    @Test
    public void testGetProductByCodeNoResult() {
        productRepository.save(product);
        Response<ProductDTO> response = productBusiness.getProductByCode("A002");
        ProductDTO testProduct = response.getData();
        assertThat(response.getStatus()).isEqualTo(200);
        assertThat(response.getErrorCode()).isEqualTo("");
        assertEquals(null, testProduct.getCode());
        assertEquals(null, testProduct.getName());
        assertEquals(null, testProduct.getPrice());
    }

    /**
     * Prueba de integracion para comprobar la consulta de un producto cuando se envia un codigo nulo o vacio
     */
    @Test
    public void testGetProductByCodeEmptyOrNull() {
        Response<ProductDTO> response = this.productBusiness.getProductByCode("");
        assertThat(response.getStatus()).isEqualTo(400);
        assertThat(response.getErrorCode()).isEqualTo("0001");

        response = this.productBusiness.getProductByCode(null);
        assertThat(response.getStatus()).isEqualTo(400);
        assertThat(response.getErrorCode()).isEqualTo("0001");
    }
}
