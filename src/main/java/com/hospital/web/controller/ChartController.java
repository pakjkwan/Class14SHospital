package com.hospital.web.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.hospital.web.domain.Chart;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.ChartService;
import com.hospital.web.service.PersonService;
@SessionAttributes("storage")
@RestController
public class ChartController {
	private static final Logger logger = LoggerFactory.getLogger(ChartController.class);
	@Autowired Mapper mapper;
	@Autowired Doctor doctor;
	@Autowired Patient patient;
	@Autowired Nurse nurse;
	@Autowired Chart chart;
	@Autowired ChartService chartService;
	@Autowired PersonService personService;
	@RequestMapping(value="/get/chart",
			method=RequestMethod.POST,
			consumes="application/json")
	public @ResponseBody Map<?,?> getChart(
			@RequestBody Patient p) throws Exception{
		logger.info("ChartController-getChart() {} !!", "ENTER");
		Map<String,Object>map=new HashMap<>();
		map.put("value", p.getId());
		List<Chart> list=chartService.chartList(map);
		if(list.isEmpty()){
			map.put("result", "fail");
		}else{
			map.put("result", "success");
			map.put("patient", list.get(0));
			map.put("list", list);
		}
		return map;
	}
	@RequestMapping(value="/post/chart/id",
			method=RequestMethod.POST)
	public @ResponseBody Map<?,?> sessionChartId(
			@RequestBody Chart c, HttpSession session){
		logger.info("ChartController-sessionChartId() {} !!", "ENTER");
		Map<String,Object>map=new HashMap<>();
		if(!c.getChartId().equals("")){
			session.setAttribute("storage", c.getChartId());
			logger.info("session value in storage is {}", session.getAttribute("storage"));
			map.put("result", "success");
		}else{
			map.put("result", "fail");
		}
		return map;
	}
	
	@RequestMapping(value="/post/chart/image",
			method=RequestMethod.GET)
	public @ResponseBody Map<?,?> fileUpload(
			MultipartHttpServletRequest request,HttpSession session)throws Exception{
		logger.info("ChartController-fileUpload() {} !!", "ENTER");
		Map<String,Object>map=new HashMap<>();
		Iterator<String> it=request.getFileNames();
		if(it.hasNext()){
			MultipartFile file=request.getFile(it.next());
			logger.info("file upload result:{}", "success");
			logger.info("upload file name:{}", file.getName());
			logger.info("upload file size:{}", file.getSize());
			logger.info("upload file exist:{}", file.isEmpty());
			logger.info("upload file original name:{}", file.getOriginalFilename());
			logger.info("upload file:{}", file.getOriginalFilename());
	        String rootPath = request.getSession().getServletContext().getRealPath("/");  
	        String uploadPath = "resources/img/";
	        String filename = file.getOriginalFilename();
	        chart.setChartContents(filename);
	        chart.setChartId(session.getAttribute("storage").toString());
	        logger.info("chart id:{}", session.getAttribute("storage").toString());
	        session.invalidate();
	        int rs=chartService.registerChartFile(chart);
	        if(rs==1){
	        	logger.info("file upload insert:", "success");
	        	File dest = new File(rootPath + uploadPath + filename);
		        file.transferTo(dest);
				map.put("result", "success");
	        }else{
	        	logger.info("file upload insert:", "fail");
				map.put("result", "fail");
	        }
		}else{
			logger.info("file upload result:", "fail");
			map.put("result", "fail");
		}
		
		return map;
	}
}
