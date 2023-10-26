package com.tms.demo.Pojos;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CourseView {
    
    @Id
    @Column(name = "course_id")
    private int course_id;

    @Column(name = "course_name")
    private String course_name;

    @Column(name = "course_desc")
    private String course_desc;

    @Column(name = "trainer_name")
    private String trainer_name;

    @Column(name = "software_req")
    private String software_req;

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "end_date")
    private Date end_date;

    public CourseView(){

    }

    public CourseView(int course_id, String course_name, String course_desc, String trainer_name, String software_req,
            Date start_date, Date end_date) {
        this.course_id = course_id;
        this.course_name = course_name;
        this.course_desc = course_desc;
        this.trainer_name = trainer_name;
        this.software_req = software_req;
        this.start_date = start_date;
        this.end_date = end_date;
    }

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int course_id) {
        this.course_id = course_id;
    }

    public String getCourse_name() {
        return course_name;
    }

    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }

    public String getCourse_desc() {
        return course_desc;
    }

    public void setCourse_desc(String course_desc) {
        this.course_desc = course_desc;
    }

    public String getTrainer_name() {
        return trainer_name;
    }

    public void setTrainer_name(String trainer_name) {
        this.trainer_name = trainer_name;
    }

    public String getSoftware_req() {
        return software_req;
    }

    public void setSoftware_req(String software_req) {
        this.software_req = software_req;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }
    

}
