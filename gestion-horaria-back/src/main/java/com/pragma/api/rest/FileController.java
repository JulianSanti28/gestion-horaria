package com.pragma.api.rest;

import com.pragma.api.business.IFileBusiness;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/file")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FileController {

    private final IFileBusiness iFileBusiness;

    @Autowired
    public FileController(IFileBusiness iFileBusiness) {
        this.iFileBusiness = iFileBusiness;
    }

    @PostMapping("/upload")
    ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {

        this.iFileBusiness.uploadFile(file);

        return new ResponseEntity<>("Excel subido con exito", HttpStatus.OK);
    }


}
