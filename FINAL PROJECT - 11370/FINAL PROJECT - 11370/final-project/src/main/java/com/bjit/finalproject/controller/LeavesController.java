package com.bjit.finalproject.controller;

import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.model.Leaves;
import com.bjit.finalproject.service.EmployeesService;
import com.bjit.finalproject.service.LeavesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/fp")
public class LeavesController {

    @Autowired
    LeavesService leavesService;

    @GetMapping("/leaves")
    private List<Leaves> getAll() {
        return leavesService.getAll();
    }

    @GetMapping("/leave/{id}")
    private Leaves getLeavesById(@PathVariable("id") int id) {
        return leavesService.getLeavesById(id);

    }
    @DeleteMapping("/leave/{id}")
    private void deleteLeaves(@PathVariable("id") int id) {
        leavesService.delete(id);
    }


    @PostMapping("/leave")
    private void saveLeaves(@RequestBody Leaves leaves) {
        leavesService.saveOrUpdate(leaves);
    }


    @PutMapping("/leave/{id}")
    private Leaves update(@RequestBody Leaves leaves,@PathVariable("id") int id) {
        leavesService.update(leaves,id);
        return leaves;
    }


//    @GetMapping("/leavesByEmpId/{employeeid}")
//    private Leaves getLeavesByEmpId(@PathVariable("employeeid") int id) {
//        return leavesService.getLeavesById(id);
//
//    }

//    @PutMapping("/leave")
//    private Leaves saveorupdate(@RequestBody Leaves leaves) {
//        leavesService.saveOrUpdate(leaves);
//        return leaves;
//    }
}
