package com.hospital.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/doctor")
public class DoctorController {
	private static final Logger logger = LoggerFactory.getLogger(DoctorController.class);
	@RequestMapping("/login")
	public String goLogin(){
		logger.info("DoctorController-goLogin() {} !!", "ENTER");
		return "public:common/loginForm";
	}
}
