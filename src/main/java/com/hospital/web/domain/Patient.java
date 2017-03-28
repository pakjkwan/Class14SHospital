package com.hospital.web.domain;
import org.apache.ibatis.type.Alias;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Component @Data 
public class Patient {
	@Getter @Setter
	private String patID,patPass,patName,patGen,patPhone,patEmail,patJob,patJumin,patAddr,docID,nurID;
				   
}
