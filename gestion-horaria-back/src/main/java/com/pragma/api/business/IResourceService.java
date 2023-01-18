package com.pragma.api.business;

import com.pragma.api.domain.GenericPageableResponse;
import com.pragma.api.domain.ResourceDTO;
import org.springframework.data.domain.Pageable;

public interface IResourceService{
    ResourceDTO saveResource(ResourceDTO save);
    GenericPageableResponse findAllResource(Pageable pageable);
    GenericPageableResponse findAllResourceByEnvironment(Integer environmentId, Pageable pageable);

    ResourceDTO getResourceById(Integer code);
    ResourceDTO updateResource(Integer code, ResourceDTO update);
    Boolean deleteResource(Integer code);

    GenericPageableResponse findAllResourceByResourceType(String resourceType, Pageable pageable);
}
