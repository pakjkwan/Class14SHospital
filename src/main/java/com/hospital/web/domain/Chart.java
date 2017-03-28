package com.hospital.web.domain;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data @Component
public class Chart {
	@Getter @Setter
	private String charID,
				   treatID,
				   docID,
				   patID,
				   nurID,
				   chartContents;
}
