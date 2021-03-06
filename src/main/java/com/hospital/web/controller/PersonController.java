package com.hospital.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.hospital.web.domain.Admin;
import com.hospital.web.domain.Command;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Enums;
import com.hospital.web.domain.Info;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.IDeleteService;
import com.hospital.web.service.IGetService;
import com.hospital.web.service.IPostService;
import com.hospital.web.service.PersonService;
@RestController
public class PersonController {
	private static final Logger logger = LoggerFactory.getLogger(PersonController.class);
	@Autowired Mapper mapper;
	@Autowired Doctor doctor;
	@Autowired Patient patient;
	@Autowired Nurse nurse;
	@Autowired PersonService personService;
	@RequestMapping(value="/post/patient",
			method=RequestMethod.POST,
			consumes="application/json")
	public @ResponseBody Map<?,?> register(
			@RequestBody Patient p) throws Exception{
		logger.info("PersonController-register() {} !!", "ENTER");
		Map<String,String>map=new HashMap<>();
		
		map.put("name", p.getName());
		return map;
	}
	@RequestMapping(value = "/move/{type}/{dest}")
	public String move(
			@PathVariable("type") String type,
			@PathVariable("dest") String dest) throws Exception {
		logger.info("The page to move is {} !!", type+"/"+dest+".jsp");
		return type+"/"+dest+".jsp";
	}
	@RequestMapping("/get/{group}/{target}")
	public @ResponseBody Object get(
			@PathVariable("group") String group,
			@PathVariable("target") String target) throws Exception{
		logger.info("PersonController-detail() {} !!", "ENTER");
		Map<String, Object> map = new HashMap<>();
		Object o=null;
		switch (group) {
		case "patient":
			logger.info("group.equals({})", group);
			map.put("group", patient.getGroup());
			map.put("key", Enums.PATIENT.val());
			map.put("value", target);
			o=personService.getPatient(map);
			logger.info("환자 조회 결과 이름({})", ((Patient) o).getName());
			break;
		case "doctor":
			logger.info("group.equals({})", group);
			o=personService.getDoctor(map);
			break;
		case "nurse":
			logger.info("group.equals({})", group);
			o=personService.getNurse(map);
			break;
		case "admin":
			logger.info("group.equals({})", group);
			
			break;
		default:
			break;
		}
		return o;
	}
	@RequestMapping(value="/login",
			method=RequestMethod.POST,
			consumes="application/json")
	public @ResponseBody Map<?,?> login(
			@RequestBody Map<String,String>paramMap) throws Exception{
		Map<String,Object>map=new HashMap<>();
		logger.info("PersonController-login() {} !!", "ENTER");
		String id=paramMap.get("id");
		String pass=paramMap.get("pass");
		System.out.println("넘어온 id"+id);
		System.out.println("넘어온 pass"+pass);


		String[] gArr={"Patient/pat_id/"+id,
				"Doctor/doc_id/"+id,
				"Nurse/nur_id/"+id,
				"Admin/nur_id/"+id};
		
		int rss=0;
		String target="";
		for(int i=0;i<gArr.length;i++){
			paramMap.put("group", gArr[i].split("/")[0]);
			paramMap.put("key", gArr[i].split("/")[1]);
			paramMap.put("value", gArr[i].split("/")[2]);
			rss=personService.exist(paramMap);
			if(rss!=0){
				target=gArr[i];
				break;
			}
		}
		if(target.equals("")){
			map.put("result", "fail");
		}else{	
			map.put("result", "success");
			String[] arr=target.split("/");
			switch (arr[0]) {
			case "Patient":
				paramMap.put("group", arr[0]);
				paramMap.put("key", arr[1]);
				paramMap.put("value", arr[2]);
				map.put("patient", personService.getPatient(paramMap));
				break;
			}
		}
		
		/*"id","pass","name","","phone","email","job","jumin","addr","docID","nurID"*/	
	
		return map;
	}
	@RequestMapping(value="/list/{group}",
					method=RequestMethod.POST,
					consumes="application/json")
	public @ResponseBody List<?> list(
			@PathVariable String group,
			@RequestBody Command command) throws Exception{
		logger.info("PersonController-detail() {} !!", "ENTER");
		List<?> list=new ArrayList<>();
		switch (group) {
		case "patient":
			logger.info("group.equals({})", group);
			list=personService.getPatients();
			break;
		case "doctor":
			logger.info("group.equals({})", group);
			list=personService.getDoctors();
			break;
		case "nurse":
			logger.info("group.equals({})", group);
			list=personService.getNurses();
			break;
		case "admin":
			logger.info("group.equals({})", group);
			list=personService.getAdmins();
			break;
		default:
			break;
		}
		return list;
	}

	@RequestMapping(value="/put/{group}/",
					method=RequestMethod.POST,
					consumes="application/json")
	public @ResponseBody Map<?,?>  put( 
			@PathVariable String group,
			@SuppressWarnings("rawtypes") @RequestBody Person target
		     ) throws Exception {
			Map<?,?>map=new HashMap<>();
			switch(group){
			case "patient" : map=personService.putPatient(target);break;
			case "doctor" : map=personService.putDoctor(target);break;
			case "nurse" : map=personService.putNurse(target);break;
			case "admin" : map=personService.putAdmin(target);break;
		}
		return map;
	}
	@RequestMapping(value="/delete/{group}/{target}",
					method = RequestMethod.POST)
	public @ResponseBody Map<?,?> delete(
			@PathVariable("group")String group,
			@PathVariable("target")String target,
			@RequestBody Map<?,?> param) throws Exception{
		Map<?,?>map=new HashMap<>();
		switch(group){
			case "patient" : personService.deletePatient(target);break;
			case "doctor" : personService.deleteDoctor(target);break;
			case "nurse" : personService.deleteNurse(target);break;
			case "admin" : personService.deleteArticle(target);break;
		}
		return map;
	}


	
}
