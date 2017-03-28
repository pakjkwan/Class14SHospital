package com.hospital.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.hospital.web.domain.Patient;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.PatientMapper;
import com.hospital.web.service.CRUD;
/**
 * ========================================
 * @fileName: Patient Controller
 * @date: 2017-03-28
 * @author: Pakjkwan@gmail.com
 * @story:
 * @method:
 * join()
 * login()
 * ========================================
 * */
@Controller
@RequestMapping("/patient")
public class PatientController {
	private static final Logger logger = LoggerFactory.getLogger(PatientController.class);
	@Autowired Patient patient;
	@Autowired PatientMapper mapper;
	@RequestMapping("/join")
	public String join(){
		logger.info("PatientController - goJoin() {}", "ENTER");
		return "public:patient/registerForm";
	}
	@RequestMapping("/login")
	public String login(){
		logger.info("PatientController - goLogin() {}", "ENTER");
		return "public:common/loginForm";
	}
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String login(@RequestParam("id") String id,
			@RequestParam("password") String password,
			Model model) throws Exception{
		logger.info("PatientController - goLogin() {}", "POST");
		logger.info("PatientController - id, pw: {}", id+","+password);
		patient.setId(id);
		patient.setPass(password);
		String group=patient.getGroup();
		Person<Patient> p=new Person<Patient>(patient);
		
		
		CRUD.Service ex=new CRUD.Service() {
			
			@Override
			public Object execute(Object o) throws Exception {
				logger.info("======ID ? {} ======", o);
				return mapper.exist(id);
			}
		};
		Integer count=(Integer)ex.execute(id);
		logger.info("ID exist ? {}", count);
		String movePosition="";
		if(count==0){
			logger.info("DB RESULT: {}", "ID not exist");
			movePosition="public:common/loginForm";
		}else{
			CRUD.Service service=new CRUD.Service() {
				@Override
				public Object execute(Object o) throws Exception {
					return mapper.selectById(id);
				}
			};
			patient=(Patient) service.execute(patient);
			
			if(patient.getPass().equals(password)){
				logger.info("DB RESULT: {}", "success");
				model.addAttribute("patient", patient);
				movePosition="patient:patient/containerDetail";
			}else{
				logger.info("DB RESULT: {}", "password not match");
				movePosition="public:common/loginForm";
			}
			
		}
		return movePosition;
		
		
	}
	@RequestMapping("/doctor/{docID}")
	public String getDoctorInfo(@PathVariable String docID){
		logger.info("PatientController - getDoctorInfo() {}", "ENTER");
		logger.info("PatientController - docID={}", docID);
		return "patient:patient/doctorInfo";
	}
}
