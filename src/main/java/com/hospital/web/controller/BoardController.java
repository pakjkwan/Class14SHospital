package com.hospital.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.web.domain.Article;
import com.hospital.web.domain.Command;
import com.hospital.web.domain.Command.Pagination;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.BoardService;
@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired Mapper mapper;
	@Autowired Article article;
	@Autowired BoardService service;

	@RequestMapping("/get/articles/{pageNumber}")
	private @ResponseBody Map<?,?> articleList(
			@PathVariable String pageNumber) throws Exception{
		logger.info("It is entered in {} method of BoardController.", "articleList");
		logger.info("Enter the page number is {}.", pageNumber);
		Map<String,Object>map=new HashMap<>();
		map.put("group", "Article");
		int theNumberOfRows=service.getTheNumberOfArticles(map);
		map.put("theNumberOfRows",theNumberOfRows);
		map.put("pageNumber",pageNumber);
		Command command=new Command();
		Pagination p=command.process(map).getPageInfo();
		logger.info("startRow is {}", p.getStartRow());
		int startRow=p.getStartRow();
		int endRow=p.getEndRow();
		map.put("startRow",startRow);
		map.put("endRow", endRow);
		List<Article> articlesOnPage = service.boardList(map);
		logger.info("articlesOnPage is {}", articlesOnPage);
		map.put("articlesOnPage", articlesOnPage);
		map.put("theNumberOfPages",p.getTheNumberOfPages());
		map.put("prevBlock", p.getPrevBlock());
		map.put("startPage", p.getStartPage());
		map.put("endPage", p.getEndPage());
		map.put("pageNumber", p.getPageNumber());
		map.put("nextBlock", p.getNextBlock());
		map.put("pageSize", p.getPageSize());
		map.put("blockSize", p.getBlockSize());
		logger.info("the Number of Pages is {}", p.getTheNumberOfPages());
		return map;
	}
}
