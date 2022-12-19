package com.pragma.api.business;

import com.pragma.api.domain.GenericPageableResponse;
import com.pragma.api.domain.ResourceDTO;
import com.pragma.api.exception.ScheduleBadRequestException;
import com.pragma.api.model.Resource;
import com.pragma.api.repository.IResourceRepository;
import com.pragma.api.util.PageableUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ResourceServiceImpl implements IResourceService{

    private final ModelMapper modelMapper;

    private final IResourceRepository resourceRepository;

    @Autowired
    public ResourceServiceImpl(IResourceRepository resourceRepository, ModelMapper modelMapper){
        this.resourceRepository = resourceRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public ResourceDTO saveResource(final ResourceDTO save) {
        Resource request = modelMapper.map(save, Resource.class);
        return modelMapper.map(this.resourceRepository.save(request), ResourceDTO.class);
    }

    @Override
    public GenericPageableResponse findAllResource(final Pageable pageable) {
        Page<Resource> resourcesPage = this.resourceRepository.findAll(pageable);
        if(resourcesPage.isEmpty()) throw new ScheduleBadRequestException("bad.request.resource.empty", "");
        return this.validatePageList(resourcesPage);
    }

    @Override
    public ResourceDTO getResourceById(final Integer code)  {
        Optional<Resource> dbResource = this.resourceRepository.findById(code);
        if(dbResource.isEmpty()) throw new ScheduleBadRequestException("bad.request.resource.id", code.toString());
        return modelMapper.map(dbResource, ResourceDTO.class);
    }

    @Override
    public ResourceDTO updateResource(final Integer code, final ResourceDTO update) {
        Optional<Resource> resourceOpt = this.resourceRepository.findById(code);
        if(resourceOpt.isEmpty()) throw new ScheduleBadRequestException("bad.request.resource.id", code.toString());
        Resource db = resourceOpt.get();
        db.setName(update.getName());
        db.setResourceType(update.getResourceType());
        return modelMapper.map(this.resourceRepository.save(db), ResourceDTO.class);
    }

    @Override
    public Boolean deleteResource(final Integer code) {
        Optional<Resource> resourceOpt = this.resourceRepository.findById(code);
        if(resourceOpt.isEmpty()) throw new ScheduleBadRequestException("bad.request.resource.id", code.toString());
        this.resourceRepository.deleteById(code);
        return true;
    }

    private GenericPageableResponse validatePageList(Page<Resource> resourcesPage){
        List<ResourceDTO> resourcesDTOS = resourcesPage.stream().map(x->modelMapper.map(x, ResourceDTO.class)).collect(Collectors.toList());
        return PageableUtils.createPageableResponse(resourcesPage, resourcesDTOS);
    }
}
