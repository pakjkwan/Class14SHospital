package com.hospital.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.web.domain.Chart;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.ChartService;

@RestController
public class ChartController {
	private static final Logger logger = LoggerFactory.getLogger(ChartController.class);
	@Autowired Mapper mapper;
	@Autowired Doctor doctor;
	@Autowired Patient patient;
	@Autowired Nurse nurse;
	@Autowired ChartService chartService;
	@RequestMapping(value="/get/chart",
			method=RequestMethod.POST,
			consumes="application/json")
	public @ResponseBody Map<?,?> getChart(
			@RequestBody Patient p) throws Exception{
		logger.info("ChartController-getChart() {} !!", "ENTER");
		Map<String,Object>map=new HashMap<>();
		map.put("id", p.getId());
		List<Chart> list=chartService.chartList(map);
		map.clear();
		if(list.isEmpty()){
			map.put("result", "fail");
		}else{
			map.put("result", "success");
			map.put("list", list);
		}
		return map;
	}
}
