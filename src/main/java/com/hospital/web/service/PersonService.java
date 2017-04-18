package com.hospital.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.web.controller.PersonController;
import com.hospital.web.domain.Admin;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Enums;
import com.hospital.web.domain.Info;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.Mapper;

@Service
public class PersonService {
	private static final Logger logger = LoggerFactory.getLogger(PersonService.class);
	@Autowired Mapper mapper;
	public Map<?,?> postPatient(Object target) throws Exception{
		Map<String,String>map=new HashMap<>();
		IPostService service=(patient)->mapper.registPatient(patient);
		map.put("result", (service.execute(target)==1)?"success":"fail");
		return map;
	}
	public Map<?,?> postDoctor(Object target) throws Exception{
		Map<String,String>map=new HashMap<>();
		IPostService service=(doctor)->mapper.registPatient(doctor);
		map.put("result", (service.execute(target)==1)?"success":"fail");
		return map;
	}
	public Map<?,?> postNurse(Object target)throws Exception{
		Map<String,String>map=new HashMap<>();
		IPostService service=(nurse)->mapper.registPatient(nurse);
		map.put("result", (service.execute(target)==1)?"success":"fail");
		return map;
	}
	public Map<?,?> postAdmin(Object target)throws Exception{
		Map<String,String>map=new HashMap<>();
		IPostService service=(admin)->mapper.registPatient(admin);
		map.put("result", (service.execute(target)==1)?"success":"fail");
		return map;
	}
	public Patient getPatient(Map<?,?> paramMap)throws Exception{
		IGetService service= (map)->mapper.findPatient(map); 
		return (Patient) service.execute(paramMap);
	}

	public Doctor getDoctor(Map<?,?> paramMap)throws Exception{
		IGetService service= (map)->mapper.findDoctor(map); 
		return (Doctor) service.execute(paramMap);
	}
	public Nurse getNurse(Map<?,?> paramMap)throws Exception{
		IGetService service= (map)->mapper.findNurse(map); 
		return (Nurse) service.execute(paramMap);
	}
	
	public List<?> getAdmins() {
		// TODO Auto-generated method stub
		return null;
	}
	public List<?> getNurses() {
		// TODO Auto-generated method stub
		return null;
	}
	public List<?> getDoctors() {
		// TODO Auto-generated method stub
		return null;
	}
	public List<?> getPatients() {
		// TODO Auto-generated method stub
		return null;
	}
	public int exist(Map<?,?> map) throws Exception{
		
		return mapper.exist(map);
		
	}
	public Object login(Map<?,?> map){
		
		return 0;
		
	}
	public Map<?,?> putPatient(Object target){
		Map<?,?>map=new HashMap<>();
		Person<?> person=new Person<Info>(new Patient());
	      Patient patient=(Patient) person.getInfo();
	      patient.getId();
	      logger.info("PermissionController() {}", patient.getId() + "===pat_id!!!!!!진입===");
	      patient.getGen();
	      patient.setJob("환자");
	      patient.getJumin();
	      patient.getName();
	      logger.info("PermissionController() {}", patient + "===update진입===");
		return map;
	}
	public Map<?,?> putDoctor(Object target){
		Map<?,?>map=new HashMap<>();
		return map;
	}
	public Map<?,?> putNurse(Object target){
		Map<?,?>map=new HashMap<>();
		return map;
	}
	public Map<?,?> putAdmin(Object target){
		Map<?,?>map=new HashMap<>();
		return map;
	}
	public Map<?,?> deletePatient(String target) throws Exception{
		Person<?> person = new Person<Info>(new Patient());
		Patient patient = (Patient) person.getInfo();
	    String temp = patient.getId();
	    logger.info("PermissionController() {}",  "===temp값 : "+temp+ "Delete진입===");
		logger.info("PermissionController() {}", patient + "===delete DB가기 직전===");
		Map<String, Object> map = new HashMap<>();
		map.put("group", patient.getGroup());
		map.put("key", Enums.PATIENT.val());
		map.put("value", "");
		IDeleteService deletePatient= (paramMap)->mapper.delete(paramMap); 
		int result = deletePatient.execute(map);
		// map put result
		return map;
	}
	public Map<?,?> deleteDoctor(String target){
		Map<?,?>map=new HashMap<>();
		return map;
	}
	public Map<?,?> deleteNurse(String target){
		Map<?,?>map=new HashMap<>();
		return map;
	}
	public Map<?,?> deleteArticle(String target){
		Map<?,?>map=new HashMap<>();
		return map;
	}
}
