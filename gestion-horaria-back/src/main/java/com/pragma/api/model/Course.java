package com.pragma.api.model;

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
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private Integer courseId;
    // Pendiente relacionar Periodo
    //@Column(nullable = false, length = 20)
    //private String period;
    @Column(nullable = false, length = 20,name = "course_group")
    private String courseGroup;
    @Column(nullable = false, name = "course_capacity")
    private Integer courseCapacity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "subject_code")
    private Subject subject;
}
