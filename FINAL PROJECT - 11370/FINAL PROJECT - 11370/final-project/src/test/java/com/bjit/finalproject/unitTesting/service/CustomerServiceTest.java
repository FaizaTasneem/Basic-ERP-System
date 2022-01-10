package com.bjit.finalproject.unitTesting.service;

import com.bjit.finalproject.model.Customer;
import com.bjit.finalproject.repository.CustomerRepository;
import com.bjit.finalproject.service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class CustomerServiceTest {


    @Mock
    CustomerRepository customerRepository;

    @BeforeEach
    void setUp(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllCustomersTest(){
        CustomerService customerService = new CustomerService(customerRepository);
        List<Customer> customers =new ArrayList<>();
        customers.add(new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766"));

        customers.add(new Customer(2, "JosephCo..", "998877", "88997766","joseph@gmail.com", "34, st.Peter street, NY, USA.",
                "www.joseph.com", "Company Contact", "German", "Joseph", "Mister", "Director", "joseph@gmail.com", "998877", "88997766"));


        Mockito.when(customerRepository.findAll()).thenReturn(customers);
        List<Customer> testCustomerList = customerService.getAllCustomers();

        assertNotNull(testCustomerList);
        assertEquals(customers, testCustomerList);

    }

    @Test
    void getCustomerByIdTest(){
        CustomerService customerService = new CustomerService(customerRepository);
        Customer customer =new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766");

        Mockito.when(customerRepository.findById(any())).thenReturn(java.util.Optional.of(customer));
        Customer customer1 = customerService.getCustomerById(1);
        assertNotNull(customer1);
        assertEquals(customer, customer1);

    }

    @Test
    void saveOrUpdateTest() {

        Customer customer =new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                    "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766");

        CustomerService customerService = mock(CustomerService.class);
        doNothing().when(customerService).saveOrUpdate(isA(Customer.class));
        customerService.saveOrUpdate(customer);

        verify(customerService, times(1)).saveOrUpdate(customer);
    }

    @Test
    void deleteTest() {

        Customer customer =new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766");

        CustomerService customerService = mock(CustomerService.class);

        doNothing().when(customerService).delete(1);
        customerService.delete(1);

        verify(customerService, times(1)).delete(1);
    }

    @Test
    void updateTest() {

        Customer customer =new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766");

        CustomerService customerService = mock(CustomerService.class);
        doNothing().when(customerService).update(customer,1);
        customerService.update(customer,1);

        verify(customerService, times(1)).update(customer,1);
    }
}

