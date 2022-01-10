package com.bjit.finalproject.integrationTesting;

import com.bjit.finalproject.model.Customer;
import com.bjit.finalproject.repository.CustomerRepository;
import com.bjit.finalproject.service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CustomerControllerTest {

    @Autowired
    TestRestTemplate testRestTemplate;

    @Mock
    CustomerService customerService;

    @LocalServerPort
    int randomPort;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllCustomersTest() throws URISyntaxException {

        final String baseUrl = "http://localhost:" + randomPort + "/fp/customers";
        URI uri = new URI(baseUrl);

        List<Customer> customers =new ArrayList<>();
        customers.add(new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766"));

        customers.add(new Customer(2, "JosephCo..", "998877", "88997766","joseph@gmail.com", "34, st.Peter street, NY, USA.",
                "www.joseph.com", "Company Contact", "German", "Joseph", "Mister", "Director", "joseph@gmail.com", "998877", "88997766"));


        Mockito.when(customerService.getAllCustomers()).thenReturn(customers);

        ResponseEntity<List> response = testRestTemplate.getForEntity(uri,List.class);
        assertNotNull(response);



    }

    @Test
    void getCustomerTest() throws URISyntaxException {

        final String baseUrl = "http://localhost:" + randomPort + "/fp/customer/";
        URI uri = new URI(baseUrl);

        Customer customer =new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766");


        Mockito.when(customerService.getCustomerById(2)).thenReturn(customer);

        ResponseEntity<Customer> response = testRestTemplate.getForEntity(uri,Customer.class);

        assertNotNull(response);

    }

    @Test
    void deleteCustomerTest() throws URISyntaxException {

        final String baseUrl = "http://localhost:" + randomPort + "/fp/customer/";
        URI uri = new URI(baseUrl);

        doNothing().when(customerService).delete(1);

        ResponseEntity<Void> response = testRestTemplate.exchange(uri, HttpMethod.DELETE, HttpEntity.EMPTY, Void.class);

        verify(customerService, times(0)).delete(1);

    }

    @Test
    void saveCustomerTest() throws URISyntaxException {

        final String baseUrl = "http://localhost:" + randomPort + "/fp/customer/";
        URI uri = new URI(baseUrl);

        Customer customer =new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766");

        doNothing().when(customerService).saveOrUpdate(customer);
        customerService.saveOrUpdate(customer);
        ResponseEntity<Void> response = testRestTemplate.exchange(uri, HttpMethod.POST, HttpEntity.EMPTY, Void.class);

        verify(customerService, times(1)).saveOrUpdate(customer);

    }

    @Test
    void updateTest() throws URISyntaxException {

        final String baseUrl = "http://localhost:" + randomPort + "/fp/customer/";
        URI uri = new URI(baseUrl);

        Customer customer =new Customer(1, "AdamCo.", "998877", "88997766","adam@gmail.com", "34, st.Peter street, NY, USA.",
                "www.adam.com", "Company Contact", "English", "Adam", "Mister", "Director", "adam@gmail.com", "998877", "88997766");

        doNothing().when(customerService).update(customer,1);
        customerService.update(customer,1);
        customerService.update(customer,1);
        ResponseEntity<Void> response = testRestTemplate.exchange(uri, HttpMethod.PUT, HttpEntity.EMPTY, Void.class);

        verify(customerService, times(2)).update(customer,1);

    }
}
