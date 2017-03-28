package com.hospital.web.domain;

public class Person<T extends Info> {
	public T info;
	public Person(T info){ 
        this.info=info;
    }

}
