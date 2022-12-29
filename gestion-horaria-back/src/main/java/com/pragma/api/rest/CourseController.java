package com.pragma.api.rest;

import com.pragma.api.business.ICourseBusiness;
import com.pragma.api.domain.CourseDTO;
import com.pragma.api.domain.GenericPageableResponse;
import com.pragma.api.domain.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {
    @Autowired()
    private ICourseBusiness iCourseBusiness;

    @PostMapping()
    public Response<CourseDTO> createCourse(@Valid @RequestBody CourseDTO courseDTO) {
        return this.iCourseBusiness.createCourse(courseDTO);
    }

    @GetMapping()
    private Response<GenericPageableResponse> findAll(@RequestParam Integer page, @RequestParam Integer size, @RequestParam String sort, @RequestParam String order){
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order),sort));
        return this.iCourseBusiness.findAll(pageable);
    }
}
