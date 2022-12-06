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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private PeriodStateEnumeration state;
    @OneToMany(mappedBy = "period", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Booking> bookings;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="teacher_period",
            joinColumns={@JoinColumn(name="period_id")},
            inverseJoinColumns={@JoinColumn(name="teacher_id")})
    private Set<Teacher> teachers;
}
