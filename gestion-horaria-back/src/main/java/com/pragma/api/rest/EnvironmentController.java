package com.pragma.api.rest;

<<<<<<< Updated upstream
import com.pragma.api.business.IEnvironmentService;
import com.pragma.api.domain.EnvironmentDTO;
import com.pragma.api.domain.GenericPageableResponse;
import com.pragma.api.domain.Response;
import com.pragma.api.domain.SubjectDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/environment")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EnvironmentController {
    @Autowired()
    private IEnvironmentService environmentService;

    @PostMapping()
    public Response<EnvironmentDTO> createSubject(@Valid @RequestBody EnvironmentDTO environmentDTO) {
        System.out.println(environmentDTO);
        return this.environmentService.createEnvironment(environmentDTO);
    }

    @PostMapping("/addResource")
    public Response<Boolean> addResource(@RequestParam Integer resourceId, @RequestParam Integer environmentId) {
        return this.environmentService.addResourceToEnvironment(resourceId, environmentId);
    }

    @GetMapping()
    private Response<GenericPageableResponse> findAll(@RequestParam Integer page, @RequestParam Integer size, @RequestParam String sort, @RequestParam String order){
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order),sort));
        return this.environmentService.findAll(pageable);
    }
=======
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/resource")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EnvironmentController {
    /*TODO*/
    //Todos los ambientes a los que está asociado unun recurso
    //Todos los ambientes filtrados por tipo.
    //Ambientes por facultad
>>>>>>> Stashed changes
}
