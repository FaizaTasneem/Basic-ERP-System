package com.bjit.finalproject.controller;

import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.model.Invoice;
import com.bjit.finalproject.service.EmployeesService;
import com.bjit.finalproject.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/fp")
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;


    @GetMapping("/invoices")
    private List<Invoice> getAllInvoices() {
        return invoiceService.getAll();
    }


    @GetMapping("/invoice/{id}")
    private Invoice getInvoice(@PathVariable("id") int id) {
        return invoiceService.getInvoiceById(id);
    }


    @DeleteMapping("/invoice/{id}")
    private void deleteInvoice(@PathVariable("id") int id) {
        invoiceService.delete(id);
    }


    @PostMapping("/invoice")
    private int saveInvoice(@RequestBody Invoice invoice) {
        invoiceService.saveOrUpdate(invoice);
        return invoice.getId();
    }


    @PutMapping("/invoice/{id}")
    private Invoice update(@RequestBody Invoice invoice,@PathVariable("id") int id) {
        invoiceService.update(invoice,id);
        return invoice;
    }


    @PutMapping("/invoice")
    private Invoice saveorupdate(@RequestBody Invoice invoice) {
        invoiceService.saveOrUpdate(invoice);
        return invoice;
    }
}
