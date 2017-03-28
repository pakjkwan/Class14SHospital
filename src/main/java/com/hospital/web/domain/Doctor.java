package com.hospital.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data @Component 
public class Doctor {
	@Getter @Setter
	private String docID,
				   docPass,	
	 			   majorTreat,
	 			   docName,
	 			   docGen,
	 			   docPhone,
	 			   docEmail,
	 			   docPosition;

}
