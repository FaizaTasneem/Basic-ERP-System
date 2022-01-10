package com.bjit.finalproject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "leaves")
public class Leaves {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    public int employeeId;
    public String employeeName;
    public String dept;
    public String requestType;
    public String description;
    public int numberOfDays;
    public int totalDays;
    public Date startDate;
    public Date endDate;
    public String leaveType;
    public String status;




}
