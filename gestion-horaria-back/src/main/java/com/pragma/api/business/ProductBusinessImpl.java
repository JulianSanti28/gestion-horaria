package com.pragma.api.business;

import com.pragma.api.domain.ProductDTO;
import com.pragma.api.domain.Response;
import com.pragma.api.exception.CoreException;
import com.pragma.api.mapper.ProductMapper;
import com.pragma.api.model.Product;
import com.pragma.api.repository.ProductRepository;
import com.pragma.api.util.ValidatorUtil;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Clase encargada de implementar la logica de negocios para las operaciones a realizar sobre el objeto de dominio de tipo Product.
 */
@Service
public class ProductBusinessImpl implements ProductBusiness {

    /** Logger */
    private static final Logger logger = LoggerFactory.getLogger(ProductBusinessImpl.class);

    /** Gson serializer */
    private final Gson gson;

    /** Objeto para realizar operaciones CRUD sobre la entidad Product */
    private ProductRepository productRepository;

    /** Objeto de mapeo para el mapeo de los productos */
    private ProductMapper mapper;

    /**
     * Metodo constructor
     */
    public ProductBusinessImpl(ProductRepository productRepository, ProductMapper mapper) {
        this.productRepository = productRepository;
        this.mapper = mapper;
        this.gson = new Gson();
    }

    /**
     * @see ProductBusiness#createProduct(ProductDTO)
     */
    @Override
    @Transactional
    public Response<Void> createProduct(ProductDTO productDto) {
        logger.debug("Init createProduct Business Product: {}", productDto.toString());
        Response<Void> response = new Response<>();

        try {
            // Ejemplo para errores de tipo BadRequest
            verifyProductInfo(productDto);

            // Ejemplo para errores de tipo InternalServerError
            simulateInternalServerError(productDto);

            Product product = mapper.fromDtoToEntity(productDto);

            productRepository.save(product);

            response.setStatus(200);
            response.setUserMessage("Producto creado");
            response.setDeveloperMessage("Producto creado");
            response.setMoreInfo("http://example.com/more-info/product");
            response.setErrorCode("");
        } catch (CoreException e) {
            logger.error("Error in createProduct Business", e);
            response.setStatus(e.getStatus());
            response.setUserMessage(e.getUserMessage());
            response.setDeveloperMessage(e.getMessage());
            response.setMoreInfo("http://example.com/more-info/product");
            response.setErrorCode("0001");
        } finally {
            JsonObject requestAudit = new JsonObject();
            requestAudit.add("product", gson.toJsonTree(productDto));
        }

        logger.debug("Finish createProduct Business");
        return response;
    }

    /**
     * Metodo que permite verificar la informacion del producto enviada, con el fin de garantizar que existan los valores requeridos antes
     * de crear un registro en BD
     * 
     * @param product
     *            {@link ProductDTO} Objeto con la informacion recibida en la peticion
     * @throws CoreException
     *             En casoco que la informacion no sea correcta
     */
    public void verifyProductInfo(ProductDTO product) throws CoreException {
        if (ValidatorUtil.isObjectNull(product) || ValidatorUtil.isNullOrEmpty(product.getCode())
                || ValidatorUtil.isNullOrEmpty(product.getName()) || ValidatorUtil.isObjectNull(product.getPrice())) {
            throw new CoreException("Los datos recibidos en el body de la peticion son incorrectos",
                    "Los datos del producto son invalidos, por favor verifique", 400);
        }
    }

    /**
     * Suponiendo que se tenga alguna validacion de negocio donde puedan surgir excepciones no chequeadas dentro de las operaciones
     * realizadas por el servidor
     * 
     * @param product
     *            {@link ProductDTO} Objeto con la informacion de entrada para la operación
     * @throws CoreException
     *             En caso de excepcion durante la ejecución
     */
    public void simulateInternalServerError(ProductDTO product) throws CoreException {
        if (product.getPrice() == 0) {
            throw new CoreException("Error durante un calculo en la transaccion",
                    "Error durante la transaccion, por favor intente mas tarde", 500);
        }
    }

    /**
     * @see ProductBusiness#getProductByCode(String)
     */
    @Override
    @Transactional(readOnly = true)
    public Response<ProductDTO> getProductByCode(String code) {
        logger.debug("Init getProductByCode with Code {}", code);
        Response<ProductDTO> response = new Response<>();

        if (ValidatorUtil.isNullOrEmpty(code)) {
            response.setStatus(400);
            response.setUserMessage("El código de consulta es incorrecto");
            response.setDeveloperMessage("Código recibido incorrecto");
            response.setErrorCode("0001");
            response.setMoreInfo("http://example.com");

            return response;
        }

        Optional<Product> searchResult = productRepository.findByCode(code);
        Product product = null;
        ProductDTO productDto = new ProductDTO();

        if (searchResult.isPresent()) {
            product = searchResult.get();
            productDto = mapper.fromEntityToDto(product);
        }

        response.setStatus(200);
        response.setUserMessage("Consulta exitosa");
        response.setDeveloperMessage("Consulta exitosa");
        response.setErrorCode("");
        response.setMoreInfo("http://example.com");
        response.setData(productDto);

        JsonObject requestAudit = new JsonObject();
        requestAudit.addProperty("productCode", code);

        logger.debug("Finish getProductByCode");
        return response;
    }

    /**
     * Permite generar el mensaje en formato JSON para enviar al broker de auditoria
     * 
     * @param request
     *            Json con los datos de la solicitud recibida
     * @param response
     *            Json con los datos de respuesta generados
     * @return Mensaje de auditoria en formato JSON
     */
    private JsonObject createAuditMessage(JsonObject request, Response<?> response) {
        JsonObject auditMessage = new JsonObject();
        auditMessage.add("request", request);
        auditMessage.add("response", gson.toJsonTree(response));

        return auditMessage;
    }
}
