package com.hospital.web.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.web.dao.BoardDAO;
import com.hospital.web.domain.ArticleDTO;
import com.hospital.web.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService{
	@Autowired BoardDAO dao;
	@Autowired ArticleDTO art;
	@Override
	public int add(ArticleDTO param)throws Exception {
		int rs=0;
		rs=dao.insert(param);
		return rs;
	}

	@Override
	public ArticleDTO findOne(ArticleDTO param)throws Exception {
		ArticleDTO article=new ArticleDTO();
		article=dao.selectBySeq(param);
		return article;
	}

	@Override
	public List<ArticleDTO> findSome(String[] param)throws Exception {
		List<ArticleDTO> list=new ArrayList<ArticleDTO>();
		System.out.println("서비스에 넘어간 파라미터1:"+param[0]);
		System.out.println("서비스에 넘어간 파라미터2:"+param[1]);
		list=dao.selectByWord(param);
		System.out.println("서비스에서 본 리스트 결과:"+list);
		return list;
	}

	@Override
	public List<ArticleDTO> list(int[] pageArr) {
		List<ArticleDTO> list=new ArrayList<>();
		list=dao.selectAll(pageArr);
		System.out.println("=== 게시판 서비스 리스트==="+list);
		return list;
	}

	@Override
	public int update(ArticleDTO param) throws Exception{
		int rs=0;
		rs=dao.update(param);
		return rs;
	}

	@Override
	public int delete(ArticleDTO param)throws Exception {
		int rs=0;
		rs=dao.delete(param);
		return rs;
		
	}
	@Override
	public int count() {
		int count=0;
		try {
			count = dao.count();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}

}
