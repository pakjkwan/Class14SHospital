package com.hospital.web.service;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface UpdateService {
	public int execute(Object o)throws Exception;
}
