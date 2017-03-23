package com.hospital.web.daoImpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.hospital.web.dao.BoardDAO;
import com.hospital.web.domain.ArticleDTO;
@Repository
public class BoardDAOImpl implements BoardDAO{
	@Override
	public int insert(ArticleDTO param) throws Exception {
		int rs=0;
		String sql=String.format("%s", "");
		
		return rs;
	}

	@Override
	public ArticleDTO selectBySeq(ArticleDTO param) throws Exception {
		ArticleDTO DTO=null;
		
		String sql=String.format("SELECT art_seq,id,title,content,regdate,readCount "
				+ " FROM Article WHERE art_seq='%s'", "");
		
		return DTO;
	}

	@Override
	public List<ArticleDTO> selectByWord(String[] param) throws Exception {
		List<ArticleDTO> list=new ArrayList<>();
		ArticleDTO DTO=null;
		String sql="SELECT art_seq,id,title,content,regdate,readCount "
				+ " FROM Article WHERE "+param[0]+" LIKE '%"+param[1]+"%'";
		
		return list;
	}

	@Override
	public List<ArticleDTO> selectAll(int[] pageArr){
		List<ArticleDTO> list=new ArrayList<>();
		ArticleDTO DTO=null;
		String sql=String.format("SELECT t2.*"
	   +"\tFROM (SELECT ROWNUM seq,t.*" 
       +"\tFROM (SELECT * FROM ARTICLE ORDER BY art_seq DESC) t) t2"
       +"\tWHERE t2.seq BETWEEN %s AND %s", String.valueOf(pageArr[0]),
       String.valueOf(pageArr[1]));
		System.out.println("Board SQL :"+sql);
		Statement stmt;
		
		
		return list;
	}

	@Override
	public int update(ArticleDTO param) throws Exception {
		int rs=0;
		String sql=String.format("%s", "");
		
		return rs;
	}

	@Override
	public int delete(ArticleDTO param) throws Exception {
		int rs=0;
		String sql=String.format("%s", "");
		
		return rs;
	}
	@Override
	public int count()  {
		int count=0;
		String sql="SELECT COUNT(*) AS count FROM Article";
		
		
		return count;
	}
}
