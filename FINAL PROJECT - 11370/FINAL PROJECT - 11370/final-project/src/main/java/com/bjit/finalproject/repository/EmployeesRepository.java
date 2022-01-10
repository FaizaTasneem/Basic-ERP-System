package com.bjit.finalproject.repository;

import com.bjit.finalproject.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeesRepository extends JpaRepository<Employee, Integer> {
}
