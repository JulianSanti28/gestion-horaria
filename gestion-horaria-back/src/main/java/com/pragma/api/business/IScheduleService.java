package com.pragma.api.business;

import com.pragma.api.domain.ScheduleRequestDTO;
import com.pragma.api.domain.ScheduleResponseDTO;

public interface IScheduleService {
    ScheduleResponseDTO saveSchedule(ScheduleRequestDTO save);
    ScheduleResponseDTO updateSchedule(Long code, ScheduleRequestDTO update);
    Boolean deleteSchedule(Long code);

}
