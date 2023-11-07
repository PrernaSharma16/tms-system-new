package com.tms.demo.Services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.tms.demo.Pojos.StudentView;

@Service
public class StudentService {
    
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentService(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<Map<String, Object>> getStudent() {
        String sql = "select * from student";
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql);
        Map<String, String> response = new HashMap<>();

        if(result.isEmpty()) {
            response.put("status", "error");
            response.put("message", "no students found");
        } else{
            response.put("status", "success");
            response.put("message", "all students displayed");
        }
        System.out.println(response);
        return result;
        
    }

    public Map<String, Object> insertStudent(StudentView studentView){
        String sql = "insert into student values(?,?,?,?,?,?)";
        int result = jdbcTemplate.update(sql,
        studentView.getFirstname(),
        studentView.getLastname(),
        studentView.getRollno(),
        studentView.getGender(),
        studentView.getDob(),
        studentView.getLocation());

        System.out.println(result);
        Map<String, Object> response = new HashMap<>();

        if(result > 0){
            response.put("status", "success");
            response.put("message", "student inserted successfuly");
        }else{
            response.put("status", "error");
            response.put("message", "Failed to insert student");
        }
        return response;
    }

    public Map<String, Object> updateStudent(int rollno, StudentView studentView){
        String checkStudent = "select * from student where rollno = ?";
        List<Map<String,Object>> resultant = jdbcTemplate.queryForList(checkStudent, rollno);
        if(!resultant.isEmpty()){
            String sql = "Update student set firstname = ?, lastname = ?, gender = ?, dob = ?, location = ? where rollno = ?";
            int result = jdbcTemplate.update(sql,
            studentView.getFirstname(),
            studentView.getLastname(),
            studentView.getGender(),
            studentView.getDob(),
            studentView.getLocation(),
            rollno);

            System.out.println(result);
            Map<String, Object> response = new HashMap<>();

            if (result > 0){
                response.put("status", "success");
                response.put("message", "student data updated successfully");
            }else{
                response.put("status", "error");
                response.put("message", "Error while Updating student data.");
            }
            return response;
        } else{
            Map<String, Object> resultant_response = new HashMap<>();
            resultant_response.put("status", "error");
            resultant_response.put("message", "Student data Not Present In the Database");
            return resultant_response;
        }
    }

    public Map<String, Object> deleteStudent(int rollno) {
        String sql = "Delete from student where rollno = ?";
        int rows_deleted = jdbcTemplate.update(sql, rollno);
        Map<String, Object> response = new HashMap<>();
        if (rows_deleted > 0){
            response.put("status", "success");
            response.put("message", "Student data deleted successfuly");
        }else {
            response.put("status", "error");
            response.put("message", "Error while deleting student data");
        }
        return response;
    }

}
