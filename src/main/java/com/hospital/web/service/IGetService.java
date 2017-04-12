package com.hospital.web.service;

import java.util.Map;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface IGetService {
	public Object execute(Map<?,?>map) throws Exception;
}
