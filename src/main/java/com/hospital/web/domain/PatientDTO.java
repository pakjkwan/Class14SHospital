package com.hospital.web.domain;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Component @Data
public class PatientDTO {
	@Getter @Setter
	private String patID,patPass,patName,patGen,patPhone,patEmail,patJob,patJumin,patAddr,docID,nurID;
				   
}
