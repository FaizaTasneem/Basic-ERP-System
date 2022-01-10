package com.bjit.finalproject.controller;

import com.bjit.finalproject.model.Customer;
import com.bjit.finalproject.model.CustomerContacts;
import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.repository.CustomerContactsRepository;
import com.bjit.finalproject.service.CustomerService;
import com.bjit.finalproject.service.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/fp")
public class CRMController {
    @Autowired
    CustomerService customerService;
//    @Autowired
//    CustomerContactsRepository customerContactsRepository;

    @GetMapping("/customers")
    private List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }


    @GetMapping("/customer/{id}")
    private Customer getCustomer(@PathVariable("id") int id) {
        return customerService.getCustomerById(id);
    }


    @DeleteMapping("/customer/{id}")
    private void deleteCustomer(@PathVariable("id") int id) {
        customerService.delete(id);
    }


    @PostMapping("/customer")
    private int saveCustomer(@RequestBody Customer customer) {
        customerService.saveOrUpdate(customer);
        return customer.getId();
    }


    @PutMapping("/customer/{id}")
    private Customer update(@RequestBody Customer customer,@PathVariable("id") int id) {
        customerService.update(customer,id);
        return customer;
    }


    @PutMapping("/customer")
    private Customer saveorupdate(@RequestBody Customer customer) {
        customerService.saveOrUpdate(customer);
        return customer;
    }


    //create-contacts

//    @GetMapping("/contacts")
//    private List<CustomerContacts> getAllContacts() {
//        return customerService.getAllContacts();
//    }
//    @DeleteMapping("/contact/{id}")
//    private void deleteCustomerContact(@PathVariable("id") int id) {
//        customerService.delete(id);
//    }
//
//
//    @PostMapping("/contact/{id}")
//    private int saveCustomer(@RequestBody CustomerContacts contacts) {
//        customerService.saveOrUpdate(contacts);
//        return contacts.getId();
//    }
//
//
//    @PutMapping("/contact/{id}")
//    private CustomerContacts update(@RequestBody CustomerContacts contacts,@PathVariable("id") int id) {
//        customerService.update(contacts,id);
//        return contacts;
//    }



}
