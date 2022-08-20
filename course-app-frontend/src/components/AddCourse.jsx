import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import baseUrl from "../api/ServerAPI";

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});

    // form handle function
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };

    const handleChange = (event, property) => {
        setCourse({ ...course, [property]: event.target.value });
    };

    // creating function to post data on server.
    const postDataToServer = (course) => {
        axios.post(`${baseUrl}/courses/`, course).then(
            (response) => {
                console.log(response);
                toast.success("Data added successfylly.", {
                    position: "bottom-center",
                });
            },
            (error) => {
                console.log(error.response.data);
                if (error.response.data.title) {
                    toast.error(error.response.data.title, {
                        position: "bottom-center",
                    });
                } else if (error.response.data.description) {
                    toast.error(error.response.data.description, {
                        position: "bottom-center",
                    });
                }
                else {
                    toast.error("Server error in adding data.", {
                        position: "bottom-center"
                    })
                }
            }
        );
    };

    return (
        <Fragment>
            <ToastContainer />
            <h1 className="text-center my-3">Fill course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="title"
                        id="title"
                        onChange={(event) => handleChange(event, "title")}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Description</Label>
                    <Input
                        type="textarea"
                        placeholder="Enter here"
                        name="description"
                        id="description"
                        onChange={(event) => handleChange(event, "description")}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" type="submit">
                        Add Course
                    </Button>
                    <Button color="warning" type="reset" className="ms-2">
                        Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;
