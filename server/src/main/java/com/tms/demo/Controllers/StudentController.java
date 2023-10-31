package com.tms.demo.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tms.demo.Pojos.StudentView;
import com.tms.demo.Services.StudentService;

@RestController
public class StudentController {
    
    private final StudentService studentService;

    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @RequestMapping(value = "/getStudent", method = RequestMethod.GET)
    public List<Map<String, Object>> getStudent() {
        List<Map<String, Object>> response = studentService.getStudent();
        return response;
    }
    
    @RequestMapping(value = "/insertStudent", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> insertStudent(@RequestBody StudentView studentView){
        Map<String,Object> response = (Map<String,Object>) studentService.insertStudent(studentView);
        System.out.println(response);
        if ("success".equals(response.get("status"))) {
            return ResponseEntity.ok(response);
        } else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @RequestMapping(value = "/updateStudent/{rollno}", method = RequestMethod.PUT)
    public ResponseEntity<Map<String, Object>> updateStudent(@PathVariable int rollno, @RequestBody StudentView studentView){
        Map<String, Object> response = (Map<String, Object>) studentService.updateStudent(rollno, studentView);
        System.out.println(response);
        if ("success".equals(response.get("status"))) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @RequestMapping(value = "/deleteStudent/{rollno}", method = RequestMethod.DELETE)
    public ResponseEntity<Map<String, Object>> deleteStudent(@PathVariable int rollno) {
        Map<String, Object> response = (Map<String, Object>) studentService.deleteStudent(rollno);
        System.out.println(response);
        if ("success".equals(response.get("status"))) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
