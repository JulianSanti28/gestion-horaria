package com.pragma.api.business;

import com.pragma.api.domain.*;
import org.springframework.data.domain.Pageable;

public interface IEnvironmentService {
    /**
     * Metodo que permite crear un nuevo registro en base de datos, sobre la tabla Environment, insertando la informacion del ambiente que se
     * recibe mediante el DTO.
     *
     * @param environmentDTO
     *            {@link EnvironmentDTO} Objeto con la información a insertar, recibido en el cuerpo de la petición al servicio Rest
     * @return {@link Response} Objeto de respuesta para el servicio, el cual contiene la informacion sobre el resultado de la transaccion
     */
    public Response<EnvironmentDTO> createEnvironment(EnvironmentDTO environmentDTO);

    /**
     * Método que permite consultar la información de una materia mediante su codigo
     *
     * @param code
     *            Codigo de la materia a consultar
     * @return {@link Response} Objeto de respuesta para el servicio, el cual contiene información sobre el resultado de la consulta,
     *         además de la información de la materia consultada
     */
    Response<EnvironmentDTO> getEnvironmentByCode(Integer code);

    /**
     * Método que permite consultar la información de todas las materias existentes
     *
     * @return {@link Response} Objeto de respuesta para el servicio, el cual contiene información sobre el resultado de la consulta,
     *         además de la información de las materias consultadas
     */
    Response<GenericPageableResponse> findAll(final Pageable pageable);

    /**
     * Método que permite agregar un recurso a un ambiente
     *
     * @return {@link Response} Objeto de respuesta para el servicio, el cual contiene información sobre el resultado de la consulta,
     *         además de la información de las materias consultadas
     */
    Response<Boolean> addResourceToEnvironment(Integer resourceId, Integer environmentId);
}
