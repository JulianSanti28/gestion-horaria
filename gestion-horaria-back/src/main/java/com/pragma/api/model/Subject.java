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
public class Subject {
    @Id
    @Column(name = "subject_code",length = 20)
    private String subjectCode;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false,name = "weekly_overload")
    private Integer weeklyOverload;
    @Column(nullable = false,name = "time_block")
    private Boolean timeBlock;
    @Column(nullable = false)
    private String semester;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "program_id")
    private Program program;

    @OneToMany(mappedBy = "subject")
    private Set<Course> courses;
}
