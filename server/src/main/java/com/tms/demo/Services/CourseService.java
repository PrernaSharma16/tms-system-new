package com.tms.demo.Services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.tms.demo.Pojos.CourseView;

@Service
public class CourseService {

    private final JdbcTemplate jdbcTemplate;

    public CourseService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<Map<String, Object>> getCourse() {
        String sql = "select * from course";
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql);
        Map<String, String> response = new HashMap<>();

        if(result.isEmpty()) {
            response.put("status", "error");
            response.put("message", "no courses found");
        } else {
            response.put("status", "success");
            response.put("message", "All courses displayed");
        }
        System.out.println(response);
        return result;
    }

    public Map<String, Object> insertCourse(CourseView courseView) {
        String sql = "insert into course values(?,?,?,?,?,?,?)";
        int result = jdbcTemplate.update(sql,
        courseView.getCourse_id(),
        courseView.getCourse_name(),
        courseView.getCourse_desc(),
        courseView.getTrainer_name(),
        courseView.getSoftware_req(),
        courseView.getStart_date(),
        courseView.getEnd_date());

        System.out.println(result);
        Map<String, Object> response = new HashMap<>();

        if(result > 0){
            response.put("status", "success");
            response.put("message", "Course inserted successfuly");
        }else{
            response.put("status", "error");
            response.put("message", "Failed to insert course");
        }
        return response;
    }

    public Map<String, Object> updateCourse(int course_id, CourseView courseView) {
        String checkcourse = "select * from course where course_id = ?";
        List<Map<String, Object>> resultant = jdbcTemplate.queryForList(checkcourse, course_id);
        if (!resultant.isEmpty()){
        String sql = "Update course set course_name = ?, course_desc = ?, trainer_name = ?, software_req = ?, start_date = ?, end_date = ? where course_id = ?";
        int result = jdbcTemplate.update(sql,  
        courseView.getCourse_name(),
        courseView.getCourse_desc(),
        courseView.getTrainer_name(),
        courseView.getSoftware_req(),
        courseView.getStart_date(),
        courseView.getEnd_date(),
        course_id);

        System.out.println(result);
        Map<String, Object> response = new HashMap<>();

        if (result > 0){
            response.put("status", "success");
            response.put("message", "course updated successfully");
        }else{
            response.put("status", "error");
            response.put("message", "Error while Updating Courses.");
        }
        return response;

    } else{
        Map<String, Object> resultant_response = new HashMap<>();
            resultant_response.put("status", "error");
            resultant_response.put("message", "Course Not Present In the Database");
            return resultant_response;
        }
    }

    public Map<String, Object> deleteCourse(int course_id) {
        String sql = "Delete from course where course_id = ?";
        int rows_deleted = jdbcTemplate.update(sql,course_id);
        Map<String, Object> response = new HashMap<>();
        if (rows_deleted > 0) {
            response.put("status", "success");
            response.put("message", "Course deleted successfully");
        } else {
            response.put("status", "error");
            response.put("message", "Error while Deleting Courses.");
        }
        return response;
    }
}
