package com.pragma.api.business;

import com.pragma.api.util.FileRow;
import com.pragma.api.util.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class FileBusinessImpl implements IFileBusiness {



    @Override
    public String uploadFile(MultipartFile file) throws IOException {
        List<FileRow> logs = FileUtils.getLogs(file);
        return null;
    }


}
