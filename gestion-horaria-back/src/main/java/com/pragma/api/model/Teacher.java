package com.pragma.api.model;

import com.pragma.api.model.enums.TeacherTypeEnumeration;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "teacher")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 35)
    private String name;
    @Column(length = 35)
    private String lastName;
    @Column(length = 35)
    private String teacherCode;
    private TeacherTypeEnumeration type;
}
