package com.pragma.api.model;

import com.pragma.api.model.enums.EnvironmentTypeEnumeration;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Environment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 45)
    private String name;
    @Column(length = 60)
    private String location;
    private Integer capacity;
    private EnvironmentTypeEnumeration environmentType;

    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private Faculty faculty;
}
