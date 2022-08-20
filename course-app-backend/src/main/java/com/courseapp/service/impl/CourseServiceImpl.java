package com.courseapp.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courseapp.entities.Course;
import com.courseapp.exception.ResourceNotFindException;
import com.courseapp.payload.CourseDto;
import com.courseapp.repository.CourseRepository;
import com.courseapp.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CourseDto addCourse(CourseDto courseDto) {

		Course course = this.modelMapper.map(courseDto, Course.class);
		Course savedCourse = this.courseRepository.save(course);

		return this.modelMapper.map(savedCourse, CourseDto.class);
	}

	@Override
	public CourseDto updateCourse(CourseDto courseDto, Long courseId) {

		Course course = this.courseRepository.findById(courseId)
				.orElseThrow(() -> new ResourceNotFindException("Course", "ID", String.valueOf(courseId)));

		course.setTitle(courseDto.getTitle());
		course.setDescription(courseDto.getDescription());

		Course savedCourse = this.courseRepository.save(course);

		CourseDto savedCourseDto = this.modelMapper.map(savedCourse, CourseDto.class);

		return savedCourseDto;
	}

	@Override
	public CourseDto getOneCourse(Long courseId) {

		Course course = this.courseRepository.findById(courseId)
				.orElseThrow(() -> new ResourceNotFindException("Course", "ID", String.valueOf(courseId)));

		CourseDto courseDto = this.modelMapper.map(course, CourseDto.class);

		return courseDto;
	}

	@Override
	public List<CourseDto> getAllCourses() {

		List<Course> courses = this.courseRepository.findAll();
		
		List<CourseDto> coursesDto = courses.stream().map((course) -> this.modelMapper.map(course, CourseDto.class))
				.collect(Collectors.toList());
		
		return coursesDto;
	}

	@Override
	public void deleteOneCourse(Long courseId) {

		Course course = this.courseRepository.findById(courseId)
				.orElseThrow(() -> new ResourceNotFindException("Course", "ID", String.valueOf(courseId)));

		this.courseRepository.delete(course);

	}

}
