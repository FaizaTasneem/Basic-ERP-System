package com.bjit.finalproject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jobs")
public class Jobs {
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    private String title;
    private String dept;
    private int currentEmployeesNo;
    private int expectedEmployeesNo;
    private int forecastedEmployeesNo;
    private int hiredEmployeesNo;
    private String status;

}
