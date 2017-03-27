package com.hospital.web.mapper;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.hospital.web.domain.PatientDTO;
import com.hospital.web.imapper.IPatientMapper;
@Repository
public class PatientMapper implements IPatientMapper {
	private static final Logger logger = LoggerFactory.getLogger(PatientMapper.class);
	@Autowired
	private SqlSessionTemplate sqlSession;
	String namespace="com.hospital.web.mapper.PatientMapper";
	@Override
	public int insert(PatientDTO member) throws Exception {
		logger.info("PatientMapper - insert() {}", "ENTER");
		return 0;
	}
	@Override
	public PatientDTO selectById(String id) throws Exception {
		logger.info("PatientMapper - selectById() {}", "ENTER");
		System.out.println("진입전 아이디========"+id);
		this.test(id);
		PatientDTO a=sqlSession.selectOne(namespace+".selectById",id);
		System.out.println("결과========"+a.getPatName());
		return a;
	}
	@Override
	public int update(PatientDTO member) throws Exception {
		logger.info("PatientMapper - update() {}", "ENTER");
		return 0;
	}
	@Override
	public int delete(PatientDTO member) throws Exception {
		logger.info("PatientMapper - delete() {}", "ENTER");
		return 0;
	}
	@Override
	public int count() throws Exception {
		logger.info("PatientMapper - count() {}", "ENTER");
		int a=sqlSession.selectOne(namespace+".count");
		
		return a;
	}
	@Override
	public String test(String id) throws Exception {
		logger.info("PatientMapper - test() {}", "ENTER");
		String a=sqlSession.selectOne(namespace+".test",id);
		System.out.println("테스트 DB 다녀옴:"+a);
		return a;
	}
	

}
