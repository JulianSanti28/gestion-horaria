package com.pragma.api.business;

import com.pragma.api.domain.ScheduleRequestDTO;
import com.pragma.api.domain.ScheduleResponseDTO;
import com.pragma.api.exception.ScheduleBadRequestException;
import com.pragma.api.exception.ScheduleIntegrityException;
import com.pragma.api.model.Course;
import com.pragma.api.model.Environment;
import com.pragma.api.model.Schedule;
import com.pragma.api.model.Teacher;
import com.pragma.api.repository.ICourseRepository;
import com.pragma.api.repository.IEnvironmentRepository;
import com.pragma.api.repository.IScheduleRepository;
import com.pragma.api.repository.ITeacherRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ScheduleServiceImpl implements IScheduleService{


    private final ModelMapper modelMapper;
    private final IEnvironmentRepository environmentRepository;

    private final IScheduleRepository scheduleRepository;

    private final ICourseRepository courseRepository;

    private final ITeacherRepository teacherRepository;

    public ScheduleServiceImpl(ModelMapper modelMapper, IEnvironmentRepository environmentRepository, IScheduleRepository scheduleRepository, ICourseRepository courseRepository, ITeacherRepository teacherRepository) {
        this.modelMapper = modelMapper;
        this.environmentRepository = environmentRepository;
        this.scheduleRepository = scheduleRepository;
        this.courseRepository = courseRepository;
        this.teacherRepository = teacherRepository;
    }


    @Override
    public ScheduleResponseDTO saveSchedule(final ScheduleRequestDTO saveRequest) {
        Optional<Course> courseOptRequest = this.courseRepository.findById(saveRequest.getCourseId());
        if(courseOptRequest.isEmpty()) throw new ScheduleBadRequestException("bad.request.course.id", saveRequest.getCourseId().toString());
        Optional<Environment> environmentOptRequest = this.environmentRepository.findById(saveRequest.getEnvironmentId());
        if(environmentOptRequest.isEmpty()) throw new ScheduleBadRequestException("bad.request.environment.id", saveRequest.getEnvironmentId().toString());
        Schedule requestSchedule = Schedule
                .builder()
                .startingTime(saveRequest.getStartingTime())
                .endingTime(saveRequest.getEndingTime())
                .day(saveRequest.getDay())
                .build();
        requestSchedule.setEnvironment(environmentOptRequest.get());
        requestSchedule.setCourse(courseOptRequest.get());
        return modelMapper.map(this.scheduleRepository.save(requestSchedule), ScheduleResponseDTO.class);
    }

    @Override
    public ScheduleResponseDTO updateSchedule(final Long code, final ScheduleRequestDTO updateRequest) {
        Optional<Schedule> scheduleOptRequest = this.scheduleRepository.findById(code);
        if(scheduleOptRequest.isEmpty()) throw new ScheduleBadRequestException("bad.request.schedule.id", code.toString());
        Optional<Course> courseOptRequest = this.courseRepository.findById(updateRequest.getCourseId());
        if(courseOptRequest.isEmpty()) throw new ScheduleBadRequestException("bad.request.course.id", updateRequest.getCourseId().toString());
        Optional<Environment> environmentOptRequest = this.environmentRepository.findById(updateRequest.getEnvironmentId());
        if(environmentOptRequest.isEmpty()) throw new ScheduleBadRequestException("bad.request.environment.id", updateRequest.getEnvironmentId().toString());
        Schedule scheduleDb = scheduleOptRequest.get();
        scheduleDb.setCourse(courseOptRequest.get());
        scheduleDb.setEnvironment(environmentOptRequest.get());
        scheduleDb.setStartingTime(updateRequest.getStartingTime());
        scheduleDb.setEndingTime(updateRequest.getEndingTime());
        scheduleDb.setDay(updateRequest.getDay());
        return modelMapper.map(this.scheduleRepository.save(scheduleDb), ScheduleResponseDTO.class);
    }

    @Override
    public Boolean deleteSchedule(Long code) {
        try {
            Optional<Schedule> scheduleOptRequest = this.scheduleRepository.findById(code);
            if (scheduleOptRequest.isEmpty())
                throw new ScheduleBadRequestException("bad.request.schedule.id", code.toString());
            this.scheduleRepository.deleteById(code);
            return true;
        }catch (Exception e){
            throw new ScheduleIntegrityException(e.getMessage(),"");
        }
    }

    @Override
    public List<ScheduleResponseDTO> getAllByEnvironment(Integer environmentId) {
        Optional<Environment> environmentRequest = this.environmentRepository.findById(environmentId);
        if(environmentRequest.isEmpty()) throw new ScheduleBadRequestException("bad.request.environment.id", environmentId.toString());
        List<Schedule> schedules = this.scheduleRepository.findAllByEnvironment(environmentRequest.get());
        return schedules.stream().map(x -> this.modelMapper.map(x, ScheduleResponseDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ScheduleResponseDTO> getAllByTeacher(String teacherCode) {
        Optional<Teacher> teacherRequest = this.teacherRepository.findById(teacherCode);
        if(teacherRequest.isEmpty()) throw new ScheduleBadRequestException("bad.request.teacher.id", teacherCode);
        List<Schedule> schedules = this.scheduleRepository.findAllByCourseTeacher(teacherRequest.get());
        return schedules.stream().map(x -> this.modelMapper.map(x, ScheduleResponseDTO.class))
                .collect(Collectors.toList());
    }
}
