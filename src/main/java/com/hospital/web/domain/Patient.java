package com.hospital.web.domain;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data 
public class Patient extends Info{
	private String job,jumin,addr,docId,nurId;
	@Override
	public void setGroup() {
		super.group="Patient";
	}
}
