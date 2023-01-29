package com.pragma.api.util;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class FileUtils {

    public static List<FileRow> getLogs(MultipartFile file) throws IOException {

        InputStream fileExcel = file.getInputStream();

        XSSFWorkbook book = new XSSFWorkbook(fileExcel);

        XSSFSheet sheet = book.getSheetAt(0);

        System.out.println("Number of rows: " + sheet.getLastRowNum());
        Row row = sheet.getRow(0);
        System.out.println("Number of columns: " + row.getLastCellNum());

        return null;
    }

}
