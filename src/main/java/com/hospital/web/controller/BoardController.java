package com.hospital.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@RequestMapping("/list")
	public String goList(){
		logger.info("BoardController-goList() {} !!", "ENTER");
		return "public:board/containerList";
	}
}
