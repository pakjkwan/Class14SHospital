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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.web.domain.Article;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.BoardService;
import com.hospital.web.service.IListService;
@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired Mapper mapper;
	@Autowired Article article;
	@Autowired BoardService service;

	@RequestMapping("/list/bbs/{pageNo}")
	private @ResponseBody Map<?,?> articleList(
			@PathVariable String pageNo) throws Exception{
		logger.info("It is entered in {} method of BoardController.", "articleList");
		logger.info("Enter the page number is {}.", pageNo);
		Map<String,Object>map=new HashMap<>();
		map.put("start","1");
		map.put("end","5");
		map.put("group", "article");
		List<Article> list = service.boardList(map);
		Integer count=service.getTheNumberOfArticles(map);
		logger.info("articleList is {}", list);
		map.put("list", list);
		map.put("count",count);
		map.put("prevBlock", 0);
		map.put("blockStart", "1");
		map.put("blockEnd", "5");
		map.put("pageNo", 1);
		map.put("nextBlock", 2);
		map.put("pageCount",count/5);
		System.out.println("페이지수:"+count/5);
		return map;
	}
}
