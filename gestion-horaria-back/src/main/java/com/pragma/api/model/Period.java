package com.pragma.api.model;

import com.pragma.api.model.enums.PeriodStateEnumeration;
import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "period")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Period {
    @Id
    @Column(length = 40)
    private String id;
    @Enumerated(EnumType.STRING)
    private PeriodStateEnumeration state;

    @OneToMany(mappedBy = "period")
    private Set<Course> courses;
}
