package com.hospital.web.service;

import org.springframework.stereotype.Component;

@Component
public interface CRUD {
	public abstract interface ExistService{public abstract int exist(Object o)throws Exception;}
	
}
