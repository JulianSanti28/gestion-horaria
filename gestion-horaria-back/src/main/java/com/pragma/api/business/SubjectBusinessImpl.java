package com.pragma.api.business;

import com.pragma.api.domain.Response;
import com.pragma.api.domain.SubjectDTO;
import com.pragma.api.exception.ScheduleBadRequestException;
import com.pragma.api.model.Program;
import com.pragma.api.model.Subject;
import com.pragma.api.repository.ProgramRepository;
import com.pragma.api.repository.SubjectRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SubjectBusinessImpl implements SubjectBusiness {

    /** Logger */
    private static final Logger logger = LoggerFactory.getLogger(SubjectBusinessImpl.class);

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private ProgramRepository programRepository;

    @Override
    @Transactional
    public Response<SubjectDTO> createSubject(SubjectDTO subjectDTO) {
        logger.debug("Init createSubject Business Subject: {}", subjectDTO.toString());
        Response<SubjectDTO> response = new Response<>();

        if(!programRepository.existsById(subjectDTO.getProgramId())){
            throw new ScheduleBadRequestException("bad.request.resource.id_program", subjectDTO.getProgramId());
        }

        Subject subject = modelMapper.map(subjectDTO,Subject.class);

        if(subjectRepository.findById(subject.getSubjectCode()).isPresent()){
            throw new ScheduleBadRequestException("bad.request.resource.id", subject.getSubjectCode());
        }


        SubjectDTO subjectDTO1 = modelMapper.map(subjectRepository.save(subject),SubjectDTO.class);

        response.setStatus(200);
        response.setUserMessage("Subject created");
        response.setDeveloperMessage("Subject created");
        response.setMoreInfo("localhost:8080/api/subject");
        response.setErrorCode("");
        response.setData(subjectDTO1);
        logger.debug("Finish createSubject Business");

        return response;
    }



    @Override
    public Response<SubjectDTO> getSubjectByCode(String code) {
        return null;
    }

    @Override
    public Response<List<SubjectDTO>> findAll() {
        return null;
    }
}
