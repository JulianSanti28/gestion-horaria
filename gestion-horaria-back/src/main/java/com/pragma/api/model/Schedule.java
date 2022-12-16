package com.pragma.api.model;

import com.pragma.api.model.enums.DaysEnumeration;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;
import java.time.LocalTime;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "schedule")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private DaysEnumeration day;
    @Column(name = "starting_time")
    @Temporal(TemporalType.TIME)
    private Date startingTime;
    @Column(name = "ending_time")
    @Temporal(TemporalType.TIME)
    private Date endingTime;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;


}
