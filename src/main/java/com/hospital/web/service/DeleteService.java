package com.hospital.web.service;

import java.util.Map;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface DeleteService {
	public int execute(Map<?,?>map)throws Exception;
}
