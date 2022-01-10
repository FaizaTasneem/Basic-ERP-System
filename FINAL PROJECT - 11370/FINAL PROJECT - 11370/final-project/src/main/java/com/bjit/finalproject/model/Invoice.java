package com.bjit.finalproject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "invoice")
public class Invoice {
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    private String name;
    private String invoiceno;
    private String paymentTerms;
    private String invoiceDate;
    private String dueDate;
    private String saleperson;
    private String status;
    private String product;
    private String description;
    private int quantity;
    private double unitprice;
    private double amount=quantity*unitprice;
}
