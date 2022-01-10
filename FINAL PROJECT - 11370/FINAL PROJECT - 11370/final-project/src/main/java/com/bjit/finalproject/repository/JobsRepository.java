package com.bjit.finalproject.repository;

import com.bjit.finalproject.model.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JobsRepository extends JpaRepository<Jobs,Integer> {


    Jobs findByTitle(String title);

    Jobs findByDept(String dept);
}
