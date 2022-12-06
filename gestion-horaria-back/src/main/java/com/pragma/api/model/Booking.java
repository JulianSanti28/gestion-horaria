package com.pragma.api.model;

import com.pragma.api.model.Schedule;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "booking")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="id_schedule", nullable=false)
    private Schedule schedule;
    @ManyToOne
    @JoinColumn(name="id_period", nullable=false)
    private Period period;

}
