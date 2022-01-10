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
@Table(name = "customer-contacts")
public class CustomerContacts {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String contactname;
    private String title;
    private String position;
    private String email;
    private String phone;
    private String mobile;

}
