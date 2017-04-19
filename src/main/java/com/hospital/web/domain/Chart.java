package com.hospital.web.domain;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data @Component
public class Chart {
	@Getter @Setter
	private String patientId,doctorId,nurseId,pass,name,gen,jumin,addr,phone,email,job,chartId,treatmentId,chartContents,doctorMajor,doctorName,doctorPosition,nursePosition,treatContents,treatDate;
}
