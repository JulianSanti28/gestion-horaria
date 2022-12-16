package com.pragma.api.business;

import com.pragma.api.domain.ResourceDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IResourceService{
    ResourceDTO saveResource(ResourceDTO save);
    GenericPageableResponse findAllResource(Pageable pageable);
    ResourceDTO getResourceById(Integer code);
    ResourceDTO updateResource(Integer code, ResourceDTO update);
    Boolean deleteResource(Integer code);
}
