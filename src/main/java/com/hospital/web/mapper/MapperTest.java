package com.hospital.web.mapper;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.hospital.web.domain.PatientDTO;

public class MapperTest {
	public static void main(String[] args) {
//		마이바티스 환경설정 파일 경로
		String namespace="com.hospital.web.mapper.PatientMapper";
			String res = "/META-INF/mybatis-context.xml";

			try {

				//	mybatis 환경설정 파일을 읽어오기 위한 스트림 객체

				InputStream is = Resources.getResourceAsStream(res);

				//	SqlSessionFactory객체 얻어오기

				SqlSessionFactory factory = 

						new SqlSessionFactoryBuilder().build(is);

				//	Sql명령어를 실행하기 위한 SqlSession 객체 얻어오기

				SqlSession session = factory.openSession();

				String id = "hong";

				PatientDTO dto = 

						(PatientDTO)session.selectOne("com.hospital.web.mapper.PatientMapper.selectById",id);

				

				System.out.println("=================한건의 정보=================");

				System.out.println("아이디 : "+dto.getPatPass());

				

				System.out.println("========================================");

				session.close();	//	세션닫기	

			} catch (IOException e) {

				System.out.println(e.getMessage());

			}



	}
}
