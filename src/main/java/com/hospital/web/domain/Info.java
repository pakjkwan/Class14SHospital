package com.hospital.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data @Component
public abstract class Info {
	@Getter @Setter
	protected String id,pass,name,gen,phone,email,group;
	public abstract void setGroup();
}
