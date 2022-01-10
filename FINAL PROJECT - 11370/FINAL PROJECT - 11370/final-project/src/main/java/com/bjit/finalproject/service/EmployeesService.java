package com.bjit.finalproject.service;


import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.model.Jobs;
import com.bjit.finalproject.model.Recruitment;
import com.bjit.finalproject.repository.EmployeesRepository;
import com.bjit.finalproject.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeesService {

    @Autowired
    EmployeesRepository employeesRepository;
    @Autowired
    JobsRepository jobsRepository;

    public List<Employee> getAllEmployees() {
        List<Employee> employees = new ArrayList<Employee>();
        employeesRepository.findAll().forEach(e -> employees.add(e));
        return employees;
    }


    public Employee getEmployeesById(int id) {
        return employeesRepository.findById(id).get();
    }


    public void saveOrUpdate(Employee employee) {
        if(employee.getTitle().equals("Chief Executive Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Executive Officer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);

        }
        else if(employee.getTitle().equals("Chief Technical Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Technical Officer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Consultant") ){
            Jobs jobs = jobsRepository.findByTitle("Consultant");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Experienced Developer") ){
            Jobs jobs = jobsRepository.findByTitle("Experienced Developer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Human Resources Manager")){
            Jobs jobs = jobsRepository.findByTitle("Human Resources Manager");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Marketing and Community Manager")){
            Jobs jobs = jobsRepository.findByTitle("Marketing and Community Manager");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Trainee")){
            Jobs jobs = jobsRepository.findByTitle("Trainee");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        employeesRepository.save(employee);
    }


    public void delete(int id) {
        Employee employee = employeesRepository.findById(id).get();
        if(employee.getTitle().equals("Chief Executive Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Executive Officer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current-1);

        }
        else if(employee.getTitle().equals("Chief Technical Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Technical Officer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current-1);
        }
        else if(employee.getTitle().equals("Consultant") ){
            Jobs jobs = jobsRepository.findByTitle("Consultant");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current-1);
        }
        else if(employee.getTitle().equals("Experienced Developer") ){
            Jobs jobs = jobsRepository.findByTitle("Experienced Developer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current-1);
        }
        else if(employee.getTitle().equals("Human Resources Manager")){
            Jobs jobs = jobsRepository.findByTitle("Human Resources Manager");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current-1);
        }
        else if(employee.getTitle().equals("Marketing and Community Manager")){
            Jobs jobs = jobsRepository.findByTitle("Marketing and Community Manager");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current-1);
        }
        else if(employee.getTitle().equals("Trainee")){
            Jobs jobs = jobsRepository.findByTitle("Trainee");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current-1);
        }
        employeesRepository.deleteById(id);
    }


    public void update(Employee employee, int id) {
        if(employee.getTitle().equals("Chief Executive Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Executive Officer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);

        }
        else if(employee.getTitle().equals("Chief Technical Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Technical Officer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Consultant") ){
            Jobs jobs = jobsRepository.findByTitle("Consultant");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Experienced Developer") ){
            Jobs jobs = jobsRepository.findByTitle("Experienced Developer");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Human Resources Manager")){
            Jobs jobs = jobsRepository.findByTitle("Human Resources Manager");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Marketing and Community Manager")){
            Jobs jobs = jobsRepository.findByTitle("Marketing and Community Manager");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        else if(employee.getTitle().equals("Trainee")){
            Jobs jobs = jobsRepository.findByTitle("Trainee");
            int current = jobs.getCurrentEmployeesNo();
            jobs.setCurrentEmployeesNo(current+1);
        }
        employeesRepository.save(employee);
    }

}
