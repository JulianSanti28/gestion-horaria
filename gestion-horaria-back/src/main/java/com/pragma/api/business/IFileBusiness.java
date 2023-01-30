package com.pragma.api.business;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface IFileBusiness {

    String uploadFile(MultipartFile file) throws IOException;

}
