package com.bjit.finalproject.repository;

import com.bjit.finalproject.model.CustomerContacts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerContactsRepository extends JpaRepository<CustomerContacts,Integer> {
}
