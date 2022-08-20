import React, { useState, useEffect } from "react";
import Course from "./Course";
import baseUrl from "../api/ServerAPI";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AllCourses = () => {

    useEffect(() => {
        document.title = "All Courses";
        // getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    }

    // function to call server API to get all courses.
    const getAllCoursesFromServer = () => {
        axios.get(`${baseUrl}` + "/courses/").then(
            (response) => {
                setCourses(response.data);
                console.log(response.data);
                toast.success("Data loaded successfully.", {
                    position: "bottom-left"
                })
            },
            (error) => {
                console.log(error);
                toast.error("Error while loading data.", {
                    position: "bottom-center"
                });
            }
        )
    }

    // calling load courses function to get all courses
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    return (
        <div>
            <ToastContainer />
            <div className="text-center">
                <h1>All Courses</h1>
                <p>List of courses</p>
            </div>

            {
                courses.length > 0
                    ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
                    : "NO COURSES"
            }
        </div>
    );
};

export default AllCourses;
