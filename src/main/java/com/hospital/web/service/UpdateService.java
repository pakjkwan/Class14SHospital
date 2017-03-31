package com.hospital.web.service;

import com.hospital.web.domain.Nurse;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface UpdateService {
	public int execute(Object o)throws Exception;
}
