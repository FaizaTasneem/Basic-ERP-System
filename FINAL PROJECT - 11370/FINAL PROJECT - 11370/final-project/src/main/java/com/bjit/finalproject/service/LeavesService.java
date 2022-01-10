package com.bjit.finalproject.service;

import com.bjit.finalproject.model.Employee;
import com.bjit.finalproject.model.Leaves;
import com.bjit.finalproject.repository.EmployeesRepository;
import com.bjit.finalproject.repository.LeavesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class LeavesService {
    @Autowired
    LeavesRepository leavesRepository;

    public List<Leaves> getAll() {
        List<Leaves> leaves = new ArrayList<Leaves>();
//        leavesRepository.findAll().forEach(e -> leaves.add(e));
        leavesRepository.findAll().forEach(e -> {
            int i = e.getNumberOfDays();
            e.setTotalDays(e.getTotalDays() + i);
            leaves.add(e);
        });
        return leaves;
    }

    public Leaves getLeavesById(int id) {
        return leavesRepository.findById(id).get();
    }


    public void saveOrUpdate(Leaves leaves) {
        long diff = leaves.getEndDate().getTime()-leaves.getStartDate().getTime();
        leaves.setNumberOfDays(Math.toIntExact(TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS)));
        if(leaves.getRequestType().equals("Leave Request")){
            leaves.setNumberOfDays(leaves.getNumberOfDays()*(-1));
        }
//        List<Leaves> leavesList = new ArrayList<Leaves>();
//        leavesRepository.findAll().forEach(e -> {
//            int i = e.getNumberOfDays();
//            e.setTotalDays(e.getTotalDays() + i);
////            leavesList.add(e);
//        });
        leavesRepository.save(leaves);
    }


    public void delete(int id) {
        leavesRepository.deleteById(id);
    }


    public void update(Leaves leaves, int id) {
        leavesRepository.save(leaves);
    }
}
