package com.bjit.finalproject.service;

import com.bjit.finalproject.model.Customer;
import com.bjit.finalproject.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

//    @Autowired
//    CustomerRepository customerRepository;

//    @Autowired
//    CustomerContactsRepository customerContactsRepository;

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public List<Customer> getAllCustomers() {
//        List<Customer> customers = new ArrayList<Customer>();
//        customerRepository.findAll().forEach(e -> customers.add(e));
//        return customers;
        return customerRepository.findAll();
    }


    public Customer getCustomerById(int id) {
        return customerRepository.findById(id).get();
    }


    public void saveOrUpdate(Customer customer) {
        customerRepository.save(customer);
    }


    public void delete(int id) {
        customerRepository.deleteById(id);
    }


    public void update(Customer customer, int id) {
        customerRepository.save(customer);
    }

    //create-contacts
//    public List<CustomerContacts> getAllContacts() {
//        List<CustomerContacts> contacts = new ArrayList<CustomerContacts>();
//        customerContactsRepository.findAll().forEach(e -> contacts.add(e));
//        return contacts;
//    }
//    public void saveOrUpdate(CustomerContacts contacts) {
//        customerContactsRepository.save(contacts);
//    }
//
//
//    public void delete1(int id) {
//        customerContactsRepository.deleteById(id);
//    }
//
//
//    public void update(CustomerContacts contacts, int id) {
//        customerContactsRepository.save(contacts);
//    }


}
