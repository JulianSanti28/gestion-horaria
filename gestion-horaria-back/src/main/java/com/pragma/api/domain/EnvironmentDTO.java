package com.pragma.api.domain;

import com.pragma.api.model.Faculty;
import com.pragma.api.model.Resource;
import com.pragma.api.model.enums.EnvironmentTypeEnumeration;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnvironmentDTO {

    private Integer id;
    private String name;
    private String location;
    private Integer capacity;
    private EnvironmentTypeEnumeration environmentType;
    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private Faculty faculty;

    @ManyToMany
    @JoinTable(
            name = "available_resources",
            joinColumns = @JoinColumn(name = "environment_id"),
            inverseJoinColumns = @JoinColumn(name = "resource_id"))
    private Set<Resource> availableResources;
}
