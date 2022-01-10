package com.bjit.finalproject.service;

import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.model.Invoice;
import com.bjit.finalproject.repository.EmployeesRepository;
import com.bjit.finalproject.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InvoiceService {
    @Autowired
    InvoiceRepository invoiceRepository;

    public List<Invoice> getAll() {
        List<Invoice> invoices = new ArrayList<Invoice>();
        invoiceRepository.findAll().forEach(e -> invoices.add(e));
        return invoices;
    }


    public Invoice getInvoiceById(int id) {
        return invoiceRepository.findById(id).get();
    }


    public void saveOrUpdate(Invoice invoice) {
        invoiceRepository.save(invoice);
    }


    public void delete(int id) {
        invoiceRepository.deleteById(id);
    }


    public void update(Invoice invoice, int id) {
        invoiceRepository.save(invoice);
    }

}
