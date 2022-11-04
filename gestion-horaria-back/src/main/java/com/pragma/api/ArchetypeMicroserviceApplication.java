package com.pragma.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

/**
 * Clase principal de la aplicacion. Permite ejecutar el proyecto.
 */
@EnableSwagger2
@SpringBootApplication
public class ArchetypeMicroserviceApplication {

    /**
     * Metodo encargado de ejecutar la aplicación Spring boot
     * 
     * @param args
     */
    public static void main(String[] args) {
        SpringApplication.run(ArchetypeMicroserviceApplication.class, args);
    }

    /**
     * Metodo que define un Bean de configuracion para la documentacion de Apis con Swagger
     * 
     * @return Objecto configurado para la documentacion con Swagger
     */
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.any()).paths(PathSelectors.any()).build()
                .useDefaultResponseMessages(false).apiInfo(apiInfo());
    }

    /**
     * Metodo que permite definir la información general que aplica a todas las Apis expuestas en este proyecto
     * 
     * @return Objeto con la informacion de las Apis
     */
    private ApiInfo apiInfo() {
        return new ApiInfo("Core Rest service", "Documentacion de las Apis de ejemplo para los proyectos de Familia", "1.0",
                "Visita https://example.com/terms",
                new Contact("Ricardo Ayala Martínez", "www.pragma.com.co", "ricardo.ayala@pragma.com.co"), "License",
                "www.pragma.com.co/license", Collections.emptyList());
    }
}
