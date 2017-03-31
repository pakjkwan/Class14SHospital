package com.hospital.web.service;


@org.springframework.stereotype.Service
@FunctionalInterface
public interface CreateService {
	public int execute(Object o)throws Exception;
}
