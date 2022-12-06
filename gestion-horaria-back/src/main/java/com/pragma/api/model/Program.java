package com.pragma.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Program")
public class Program {
    @Id
    @Column(name = "program_id",length = 20)
    private String programId;
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "program")
    private Set<Subject> subjects;
}
