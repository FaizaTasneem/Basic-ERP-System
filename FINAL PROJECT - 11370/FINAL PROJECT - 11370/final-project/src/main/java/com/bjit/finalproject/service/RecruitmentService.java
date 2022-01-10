package com.bjit.finalproject.service;

import com.bjit.finalproject.model.Jobs;
import com.bjit.finalproject.model.Recruitment;
import com.bjit.finalproject.repository.JobsRepository;
import com.bjit.finalproject.repository.RecruitmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecruitmentService {

    @Autowired
    RecruitmentRepository recruitmentRepository;
    @Autowired
    JobsRepository jobsRepository;

    public List<Recruitment> getAllRecruitments() {
        List<Recruitment> recruits = new ArrayList<Recruitment>();
        recruitmentRepository.findAll().forEach(e -> recruits.add(e));
        return recruits;
    }

    public List<Jobs> getAllJobs() {
        List<Jobs> jobs = new ArrayList<Jobs>();
        jobsRepository.findAll().forEach(e -> jobs.add(e));
        return jobs;
    }

    public Recruitment getRecruitmentById(int id) {
        return recruitmentRepository.findById(id).get();
    }


    public void saveOrUpdate(Recruitment recruitment) {
        if(recruitment.getAppliedJob().equals("Chief Executive Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Executive Officer");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);
            }

        }
        else if(recruitment.getAppliedJob().equals("Chief Technical Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Technical Officer");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setHiredEmployeesNo(totalforecasted+1);
            }
        }
        else if(recruitment.getAppliedJob().equals("Consultant") ){
            Jobs jobs = jobsRepository.findByTitle("Consultant");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);
            }
        }
        else if(recruitment.getAppliedJob().equals("Experienced Developer") ){
            Jobs jobs = jobsRepository.findByTitle("Experienced Developer");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);
            }
        }
        else if(recruitment.getAppliedJob().equals("Human Resources Manager")){
            Jobs jobs = jobsRepository.findByTitle("Human Resources Manager");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);

            }
        }
        else if(recruitment.getAppliedJob().equals("Marketing and Community Manager")){
            Jobs jobs = jobsRepository.findByTitle("Marketing and Community Manager");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);

            }
        }
        else if(recruitment.getAppliedJob().equals("Trainee")){
            Jobs jobs = jobsRepository.findByTitle("Trainee");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);

            }
        }
        recruitmentRepository.save(recruitment);
    }


    public void delete(int id) {
        Recruitment recruitment = recruitmentRepository.findById(id).get();
        if(recruitment.getStage().equals("Contract Proposal")){
            String title = recruitment.getAppliedJob();
            Jobs jobs = jobsRepository.findByTitle(title);
            int totalforecasted = jobs.getForecastedEmployeesNo();
            jobs.setForecastedEmployeesNo(totalforecasted-1);
        }
        else if(recruitment.getStage().equals("Contract Signed")){
            String title = recruitment.getAppliedJob();
            Jobs jobs = jobsRepository.findByTitle(title);
            int totalhired = jobs.getHiredEmployeesNo();
            jobs.setHiredEmployeesNo(totalhired-1);
        }
        recruitmentRepository.deleteById(id);
    }


    public void update(Recruitment recruitment) {
        if(recruitment.getAppliedJob().equals("Chief Executive Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Executive Officer");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted-1);
            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);
            }

        }
        else if(recruitment.getAppliedJob().equals("Chief Technical Officer")){
            Jobs jobs = jobsRepository.findByTitle("Chief Technical Officer");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted-1);
            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setHiredEmployeesNo(totalforecasted+1);
            }
        }
        else if(recruitment.getAppliedJob().equals("Consultant") ){
            Jobs jobs = jobsRepository.findByTitle("Consultant");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted-1);
            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);
            }
        }
        else if(recruitment.getAppliedJob().equals("Experienced Developer") ){
            Jobs jobs = jobsRepository.findByTitle("Experienced Developer");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted-1);
            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);
            }
        }
        else if(recruitment.getAppliedJob().equals("Human Resources Manager")){
            Jobs jobs = jobsRepository.findByTitle("Human Resources Manager");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted-1);
            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);

            }
        }
        else if(recruitment.getAppliedJob().equals("Marketing and Community Manager")){
            Jobs jobs = jobsRepository.findByTitle("Marketing and Community Manager");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted-1);
            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);

            }
        }
        else if(recruitment.getAppliedJob().equals("Trainee")){
            Jobs jobs = jobsRepository.findByTitle("Trainee");
            if(recruitment.getStage().equals("Contract Signed")){
                int totalhired = jobs.getHiredEmployeesNo();
                jobs.setHiredEmployeesNo(totalhired+1);

                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted-1);
            }
            else if(recruitment.getStage().equals("Contract Proposal")){
                int totalforecasted = jobs.getForecastedEmployeesNo();
                jobs.setForecastedEmployeesNo(totalforecasted+1);

            }
        }
        recruitmentRepository.save(recruitment);
    }
}
