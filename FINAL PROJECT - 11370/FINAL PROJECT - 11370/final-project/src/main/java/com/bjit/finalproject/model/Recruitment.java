package com.bjit.finalproject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "recruitment")
public class Recruitment {

//    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    private String subject;
    private String name;
    private String email;
    private String phone;
    private String mobile;
    private String degree;

    private String appliedJob;
    private String department;
    private String responsible;
//    private String nextAction;
    private String appreciation;
    private String source;
    private String stage;
    private double expectedSalary;
    private double proposedSalary;



}
