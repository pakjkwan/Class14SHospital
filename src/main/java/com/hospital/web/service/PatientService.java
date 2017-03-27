package com.hospital.web.service;

import org.springframework.stereotype.Component;

import com.hospital.web.domain.PatientDTO;
@Component
public interface PatientService {
	// DAO 값을 토스해 주는 로직
	public int join(PatientDTO member)throws Exception;
	public PatientDTO findById(String id)throws Exception;
	public PatientDTO login(PatientDTO member)throws Exception;
	public boolean logout()throws Exception;
	public int change(PatientDTO member)throws Exception;
	public int remove(PatientDTO member)throws Exception;
	// 추가된 로직
	public String getBirth(String patJumin);
	public PatientDTO getSession();
	public int count()throws Exception;
}
