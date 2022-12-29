package com.familia.api.core.unit;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.pragma.api.util.ValidatorUtil;

/**
 * Clase que realiza las pruebas unitarias sobre los metodos de la clase {@link ValidatorUtil}
 * 
 * @author ricardo.ayala@pragma.com.co
 *
 */
@SpringBootTest
public class ValidatorUtilTests {

    /**
     * Prueba unitaria para comprobar el resultado de la validacion de un objeto nulo.
     */
    @Test
    public void testIsObjectNull() {
        assertTrue(ValidatorUtil.isObjectNull(null));
    }

    /**
     * Prueba unitaria para comprobar el resultado de la validacion de un objeto no nulo
     */
    @Test
    public void testIsObjectNotNull() {
        assertFalse(ValidatorUtil.isObjectNull(new ProductDTO()));
    }

    /**
     * Prueba unitaria para comprobar la validacion de una cadena vacia
     */
    @Test
    public void testIsEmptyString() {
        assertTrue(ValidatorUtil.isNullOrEmpty(""));
    }

    /**
     * Prueba unitaria para comprobar la validacion de una cadena con informacion
     */
    @Test
    public void testIsNotEmptyString() {
        assertFalse(ValidatorUtil.isNullOrEmpty("test"));
    }

    /**
     * Prueba unitaria para comprobar la validacion de una cadena nula
     */
    @Test
    public void testIsNullString() {
        assertTrue(ValidatorUtil.isNullOrEmpty(null));
    }
}
