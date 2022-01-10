package com.bjit.finalproject.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {
//    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    //public infos
    private String name;
    private String work_address;
    private String work_phone;
    private String work_mobile;
    private String work_email;
    private String dept;
    private String title;
    private String manager;
    private String coach;

    //private infos
    private String gender;
    private String marital_status;
    private String nationality;
    private String id_no;
    private String passport_no;
    private String bank_ac;
    private String home_address;
    private String birthdate;


//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }



}
