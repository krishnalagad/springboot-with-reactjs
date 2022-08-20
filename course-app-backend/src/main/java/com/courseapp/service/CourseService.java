package com.courseapp.service;

import java.util.List;

import com.courseapp.payload.CourseDto;

public interface CourseService {

	public CourseDto addCourse(CourseDto courseDto);
	
	public CourseDto updateCourse(CourseDto courseDto, Long courseId);
	
	public CourseDto getOneCourse(Long courseId);
	
	public List<CourseDto> getAllCourses();
	
	public void deleteOneCourse(Long courseId);
}
