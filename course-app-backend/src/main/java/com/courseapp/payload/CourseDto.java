package com.courseapp.payload;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseDto {

	private long id;
	
	@NotEmpty(message = "Title should not be empty.")
	private String title;
	
	@Size(min = 10, message = "Description should't be shorter than 10 charachters.")
	private String description;
}
