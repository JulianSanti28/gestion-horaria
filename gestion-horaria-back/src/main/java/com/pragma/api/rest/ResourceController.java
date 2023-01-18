package com.pragma.api.rest;

import com.pragma.api.domain.GenericPageableResponse;
import com.pragma.api.business.IResourceService;
import com.pragma.api.domain.ResourceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

import javax.validation.Valid;

@RestController
@RequestMapping("/resource")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ResourceController {

    private final IResourceService resourceService;

    @Autowired
    public ResourceController(IResourceService resourceService){
        this.resourceService = resourceService;
    }

    @PostMapping
    public ResponseEntity<ResourceDTO> saveResource(@Valid @RequestBody ResourceDTO request) {
        ResourceDTO saved = this.resourceService.saveResource(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
    /*TODO*/
    //findAllByEnvironment: Recibe el id del ambiente, paginado

    /*TODO*/
    @GetMapping
    public ResponseEntity<GenericPageableResponse> getAllByEnvironment(@RequestParam Integer environmentId, @RequestParam Integer page, @RequestParam Integer size, @RequestParam String sort, @RequestParam String order){
        return null;
    }

    @GetMapping
    public ResponseEntity<GenericPageableResponse> getAllResource(@RequestParam Integer page, @RequestParam Integer size, @RequestParam String sort, @RequestParam String order) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order),sort));
        return ResponseEntity.status(HttpStatus.FOUND).body(this.resourceService.findAllResource(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResourceDTO> getResourceById(@PathVariable Integer id) {
        ResourceDTO resourceDTO = this.resourceService.getResourceById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(resourceDTO);
    }

    @PutMapping
    public ResponseEntity<ResourceDTO> updateResourceById(@RequestParam("id") Integer id, @Valid @RequestBody ResourceDTO update) {
        ResourceDTO resource = this.resourceService.updateResource(id, update);
        return ResponseEntity.status(HttpStatus.OK).body(resource);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteResourceById(@RequestParam("id") Integer id) {
        this.resourceService.deleteResource(id);
        return ResponseEntity.status(HttpStatus.OK).body("Resource deleted successful");
    }
}
