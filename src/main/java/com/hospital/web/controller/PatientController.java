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

import com.github.mustachejava.codes.ExtendCode;
import com.hospital.web.domain.Info;
import com.hospital.web.domain.Patient;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.Mapper;
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
	@Autowired Mapper mapper;
	@RequestMapping("/join")
	public String join(){
		logger.info("PatientController - goJoin() {}", "ENTER");
		return "public:patient/registerForm";
	}
	
	@RequestMapping("/doctor/{docID}")
	public String getDoctorInfo(@PathVariable String docID){
		logger.info("PatientController - getDoctorInfo() {}", "ENTER");
		logger.info("PatientController - docID={}", docID);
		return "patient:patient/doctorInfo";
	}
}
