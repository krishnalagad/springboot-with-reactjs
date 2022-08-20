package com.courseapp.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.courseapp.payload.ApiResponse;
import com.courseapp.payload.CourseDto;
import com.courseapp.service.CourseService;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin("*")
public class CourseController {

	@Autowired
	private CourseService courseService;

	@PostMapping("/")
	public ResponseEntity<CourseDto> addCourse(@Valid @RequestBody CourseDto courseDto) {

		CourseDto savedCourseDto = this.courseService.addCourse(courseDto);

		return new ResponseEntity<CourseDto>(savedCourseDto, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<CourseDto> updateCourse(@Valid @RequestBody CourseDto courseDto, @PathVariable Long id) {

		CourseDto updateCourse = this.courseService.updateCourse(courseDto, id);

		return new ResponseEntity<CourseDto>(updateCourse, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<CourseDto> getOneCourse(@PathVariable Long id) {

		CourseDto courseDto = this.courseService.getOneCourse(id);

		return new ResponseEntity<CourseDto>(courseDto, HttpStatus.OK);
	}

	@GetMapping("/")
	public ResponseEntity<List<CourseDto>> getAllCourses() {

		List<CourseDto> courses = this.courseService.getAllCourses();
		
		return new ResponseEntity<List<CourseDto>>(courses, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteOneCourse(@PathVariable Long id) {

		ApiResponse apiResponse = null;
		HttpStatus httpStatus = null;
		try {
			this.courseService.deleteOneCourse(id);
			apiResponse = new ApiResponse("Course deleted successfully...", true);
			httpStatus = HttpStatus.OK;

		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<ApiResponse>(new ApiResponse("Failed to delete course with Id: " + id, false),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<ApiResponse>(apiResponse, httpStatus);
	}

}
