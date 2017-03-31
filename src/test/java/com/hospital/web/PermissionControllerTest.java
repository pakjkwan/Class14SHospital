package com.hospital.web;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnit44Runner;
import org.mockito.runners.MockitoJUnitRunner;

import com.hospital.web.domain.Enums;
import com.hospital.web.domain.Patient;
import com.hospital.web.mapper.Mapper;
@RunWith(MockitoJUnitRunner.class)
public class PermissionControllerTest {
	@Mock private Mapper mapper;
	@Mock Patient patient;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		
	}

	@Test
	public void testLogin() throws Exception {
		Map<String,Object> map=new HashMap<>();
		Patient p=mock(Patient.class);
		Mapper m=mock(Mapper.class);
		map.put("group", patient.getGroup());
		map.put("key", Enums.PATIENT.val());
		map.put("value", "hong");
		p=m.findPatient(map);
	//	when(mapper.findPatient(map)).thenReturn(patient);
		System.out.println(patient.getName());
		assertTrue("홍길동".equals(patient.getName()));
	}

}
