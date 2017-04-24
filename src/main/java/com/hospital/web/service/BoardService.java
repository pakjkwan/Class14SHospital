package com.hospital.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hospital.web.domain.Article;
import com.hospital.web.mapper.Mapper;

@Service
public class BoardService {
	private static final Logger logger = LoggerFactory.getLogger(BoardService.class);
	@Autowired Mapper mapper;
	@Transactional 
	@SuppressWarnings("unchecked")
	public List<Article> boardList(Map<?,?> paramMap)throws Exception{
		logger.info("BoardService-chartList {}","enter");
		IListService service= (map)->mapper.articleList(map); 
		List<Article> list = (List<Article>) service.execute(paramMap);
		return list;
	}
	public Integer getTheNumberOfArticles(Map<?,?> p)throws Exception {
		IGetService s=(m)->mapper.count(m);
		Integer x=(Integer) s.execute(p);
		logger.info("the number of articles is {}",x);
		return x;
	}
}
