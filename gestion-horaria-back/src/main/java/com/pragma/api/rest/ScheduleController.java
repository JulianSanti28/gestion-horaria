package com.pragma.api.rest;

import com.pragma.api.business.IScheduleService;
import com.pragma.api.domain.Response;
import com.pragma.api.domain.ScheduleRequestDTO;
import com.pragma.api.domain.ScheduleResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/schedule")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ScheduleController {

    private final IScheduleService scheduleService;

    public ScheduleController(IScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }
    @PostMapping
    public ResponseEntity<ScheduleResponseDTO> saveSchedule(@Valid @RequestBody ScheduleRequestDTO scheduleRequest) {
        return ResponseEntity.ok(this.scheduleService.saveSchedule(scheduleRequest));
    }

    @PutMapping
    public ResponseEntity<ScheduleResponseDTO> updateSchedule(@RequestParam Long scheduleId, @Valid @RequestBody ScheduleRequestDTO scheduleRequest) {
        return ResponseEntity.ok(this.scheduleService.updateSchedule(scheduleId, scheduleRequest));
    }

    @DeleteMapping
    public ResponseEntity<String> deleteSchedule(@RequestParam Long scheduleId) {
        this.scheduleService.deleteSchedule(scheduleId);
        return ResponseEntity.ok("Schedule was deleted successful!");
    }

}
