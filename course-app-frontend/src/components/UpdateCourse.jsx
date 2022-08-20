import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { Form, FormGroup, Input, Label } from "reactstrap";

const UpdateCourse = () => {
    return (
        <Fragment>
            <ToastContainer />
            <Form>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input id="title" name="title" type="text" />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input id="title" name="title" type="textarea" />
                </FormGroup>
            </Form>
        </Fragment>
    )
}

export default UpdateCourse;