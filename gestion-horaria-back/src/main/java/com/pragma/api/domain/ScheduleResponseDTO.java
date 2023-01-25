package com.pragma.api.domain;

import com.pragma.api.model.Course;
import com.pragma.api.model.Environment;
import com.pragma.api.model.enums.DaysEnumeration;
import lombok.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.time.LocalTime;
import java.util.Date;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleResponseDTO {
    private Long id;
    private DaysEnumeration day;
    private LocalTime startingTime;
    private LocalTime endingTime;
    private CourseDTO course;
    private EnvironmentDTO environment;
}
