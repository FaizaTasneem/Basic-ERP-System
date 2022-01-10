package com.bjit.finalproject.controller;

import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.model.Jobs;
import com.bjit.finalproject.model.Recruitment;
import com.bjit.finalproject.service.EmployeesService;
import com.bjit.finalproject.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/fp")
public class RecruitmentController {

    @Autowired
    RecruitmentService recruitmentService;


    @GetMapping("/recruitments")
    private List<Recruitment> getAllRecruitments() {
        return recruitmentService.getAllRecruitments();
    }


    @GetMapping("/recruitment/{recruitmentid}")
    private Recruitment getRecruimentById(@PathVariable("recruitmentid") int id) {
        return recruitmentService.getRecruitmentById(id);
    }


    @DeleteMapping("/recruitment/{recruitmentid}")
    private void deleteEmployee(@PathVariable("recruitmentid") int id) {
        recruitmentService.delete(id);
    }


    @PostMapping("/recruitment")
    private void saveEmployee(@RequestBody Recruitment rec) {
        recruitmentService.saveOrUpdate(rec);
    }


    @PutMapping("/recruitment/{recruitmentid}")
    private Recruitment update(@RequestBody Recruitment rec) {
        recruitmentService.update(rec);
        return rec;
    }


    @PutMapping("/recruitment")
    private Recruitment saveorupdate(@RequestBody Recruitment rec) {
        recruitmentService.saveOrUpdate(rec);
        return rec;
    }

    @GetMapping("/jobs")
    private List<Jobs> getAllJobs() {
        return recruitmentService.getAllJobs();
    }

}
