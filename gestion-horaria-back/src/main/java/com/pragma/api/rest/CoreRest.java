package com.pragma.api.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pragma.api.business.ProductBusiness;
import com.pragma.api.domain.ProductDTO;
import com.pragma.api.domain.Response;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@SwaggerDefinition(tags = { @Tag(name = "general", description = "RestController para el arquetipo") })
public class CoreRest {

    private final ProductBusiness productBusiness;

    @Autowired
    public CoreRest(ProductBusiness productBusiness) {
        super();
        this.productBusiness = productBusiness;
    }

    @ApiOperation(value = "Permite crear un producto en el sistema", notes = "Crea un nuevo registro en la base de datos"
            + " sobre la tabla PRODUCT, con base en el JSON recibido", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiParam(name = "product", value = "JSON con la informacion del producto", required = true, type = "ProductDTO")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "El producto fue creado exitosamente", response = Response.class),
            @ApiResponse(code = 400, message = "Error en la creacion del producto, debido a un error en los datos de la peticion recibida", response = Response.class),
            @ApiResponse(code = 500, message = "Error en la creacion del producto, generado por un error en el servidor", response = Response.class) })
    @PostMapping(value = "/product", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response<Void> createProduct(@RequestBody ProductDTO product) {
        return this.productBusiness.createProduct(product);
    }

    @ApiOperation(value = "Permite consultar un producto por su codigo", notes = "Consulta la informacion de un producto en base de datos, con base en el codigo recibido como parametro", produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiParam(name = "code", value = "Codigo del producto a consultar", required = true, type = "String")
    @ApiResponses(value = { @ApiResponse(code = 200, message = "La consulta es realizada correctamente", response = Response.class), })
    @GetMapping(value = "/product", produces = MediaType.APPLICATION_JSON_VALUE)
    public Response<ProductDTO> getProductByCode(@RequestParam("code") String code) {
        return this.productBusiness.getProductByCode(code);
    }
}
