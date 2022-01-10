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
@Table(name = "customers")
public class Customer {
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    private String name;
    private String phone;
    private String mobile;
    private String email;
    private String address;
    private String website;
    private String tags;
    private String language;

    private String cname;
    private String ctitle;
    private String cposition;
    private String cemail;
    private String cphone;
    private String cmobile;

}
