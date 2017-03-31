package com.hospital.web.controller;

import java.util.Map;
import java.util.function.Function;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hospital.web.domain.Admin;
import com.hospital.web.domain.Command;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Info;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.CreateService;

@Controller
public class PersonController {
	private static final Logger logger = LoggerFactory.getLogger(PersonController.class);
	@Autowired Mapper mapper;
	@RequestMapping(value="/register/{type}",method=RequestMethod.POST)
	public String register(
			@PathVariable String type,
			@RequestBody Map<String,Object>map,
			Command command) throws Exception{
		logger.info("PersonController-register() {} !!", "ENTER");
		logger.info("PersonController-param value check: ID={} !!", map.get("id"));
		if(type.equals("")){type="patient";}
		map.put("type", type);
		Person<?>person=command.process(map).getPersonInfo();
		int result=0;
		switch (type) {
		case "patient":
			result=(Integer)new CreateService() {
				
				@Override
				public int execute(Object o) throws Exception {
					// TODO Auto-generated method stub
					return mapper.registPatient(person);
				}
			}.execute(person);
			CreateService register=(Object o)->{return mapper.registPatient(o);};
			result=(Integer)register.execute(person);
			
		break;
			
			
		case "doctor":
			
			break;
		case "nurse":
			
			break;
		case "admin":
			
			break;
		default:
			break;
		}
		if(result==1){
			return "public:common/loginForm";
		}else{
			return "redirect:/{"+type+"}/registerForm";
		}
		
	}
	@RequestMapping("/detail/{docID}")
	public String detail(@PathVariable String docID){
		logger.info("DoctorController-goLogin() {} !!", "ENTER");
		if(docID.equals("")){return "redirect:/{permission}/login";}
		return "doctor:doctor/containerDetail";
	}
}
