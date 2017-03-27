package com.hospital.web.mapper;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class SqlMapSessionFactory {
public static SqlSessionFactory ssf;

    

    static{
    	System.out.println("1");
        

        String resource = "classpath:/META-INF/mybatis-context.xml";

        InputStream inputStream = null;

        

        try {

            inputStream = Resources.getResourceAsStream(resource);

        } catch (IOException e) {

            e.printStackTrace();

        }

        

        ssf = new SqlSessionFactoryBuilder().build(inputStream);

    }

    

    

    public static SqlSessionFactory getSqlSessionFactory(){
System.out.println("4");
        return ssf;

    }

}
