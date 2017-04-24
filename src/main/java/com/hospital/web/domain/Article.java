package com.hospital.web.domain;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data @Component
public class Article {
	
	private String seq,
	 				writerId,
	 				name,
	 				title,
	 				content,
	 				regDate,
	 				readCount;
}
