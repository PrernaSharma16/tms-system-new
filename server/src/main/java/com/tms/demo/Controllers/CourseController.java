package com.tms.demo.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tms.demo.Pojos.CourseView;
import com.tms.demo.Services.CourseService;

@RestController
public class CourseController {
    
    private final CourseService courseService;

    public CourseController(CourseService courseService){
        this.courseService = courseService;
    }

    @RequestMapping(value = "/getCourse", method = RequestMethod.GET)
    public List<Map<String, Object>> getCourse() {
        List<Map<String, Object>> courses = courseService.getCourse();
        Map<String, Object> response = new HashMap<>();
        if (courses.isEmpty()) {
            response.put("status", "error");
            response.put("message", "no courses found");
        } else {
            response.put("status", "success");
            response.put("message", "All courses displayed");
            response.put("data", courses); // Add the courses data to the response
        }
        // return ResponseEntity.ok(response);
        return courses;
    }

    @RequestMapping(value = "/insertCourse", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> insertCourse(@RequestBody CourseView courseView){
        Map<String, Object> response = (Map<String, Object>) courseService.insertCourse(courseView);
        System.out.println(response);
        if ("success".equals(response.get("status"))) {
            return ResponseEntity.ok(response);
        } else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
    
    @RequestMapping(value = "/updateCourse/{course_id}", method = RequestMethod.PUT)
    public ResponseEntity<Map<String, Object>> updateCourse(@PathVariable int course_id, @RequestBody CourseView courseView) {
        Map<String, Object> response = (Map<String, Object>) courseService.updateCourse(course_id, courseView);
        System.out.println(response);
        if ("success".equals(response.get("status"))) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @RequestMapping(value = "/deleteCourse/{course_id}", method = RequestMethod.DELETE)
    public ResponseEntity<Map<String, Object>> deleteCourse(@PathVariable int course_id) {
        Map<String, Object> response = (Map<String, Object>) courseService.deleteCourse(course_id);
        System.out.println(response);
        if ("success".equals(response.get("status"))) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
    
}
