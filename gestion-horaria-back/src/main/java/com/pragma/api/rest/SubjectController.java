package com.pragma.api.rest;

import com.pragma.api.business.ISubjectBusiness;
import com.pragma.api.domain.GenericPageableResponse;
import com.pragma.api.domain.Response;
import com.pragma.api.domain.SubjectDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/subject")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SubjectController {

    @Autowired()
    private ISubjectBusiness subjectBusiness;

    @PostMapping()
    public Response<SubjectDTO> createSubject(@Valid @RequestBody SubjectDTO subjectDTO) {
        return this.subjectBusiness.createSubject(subjectDTO);
    }

    @GetMapping()
    private Response<GenericPageableResponse> findAll(@RequestParam Integer page, @RequestParam Integer size, @RequestParam String sort, @RequestParam String order){
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order),sort));
        return this.subjectBusiness.findAll(pageable);
    }

}
