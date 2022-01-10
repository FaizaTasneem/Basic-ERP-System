package com.bjit.finalproject.controller;

import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.service.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/fp")
public class EmployeesController {
    @Autowired
    EmployeesService employeesService;


    @GetMapping("/employees")
    private List<Employee> getAllEmployees() {
        return employeesService.getAllEmployees();
    }


    @GetMapping("/employee/{employeeid}")
    private Employee getEmployees(@PathVariable("employeeid") int id) {
        return employeesService.getEmployeesById(id);
    }


    @DeleteMapping("/employee/{employeeid}")
    private void deleteEmployee(@PathVariable("employeeid") int id) {
        employeesService.delete(id);
    }


    @PostMapping("/employee")
    private int saveEmployee(@RequestBody Employee employee) {
        employeesService.saveOrUpdate(employee);
        return employee.getId();
    }


    @PutMapping("/employee/{employeeid}")
    private Employee update(@RequestBody Employee employee,@PathVariable("employeeid") int id) {
        employeesService.update(employee,id);
        return employee;
    }


    @PutMapping("/employee")
    private Employee saveorupdate(@RequestBody Employee employee) {
        employeesService.saveOrUpdate(employee);
        return employee;
    }
}
