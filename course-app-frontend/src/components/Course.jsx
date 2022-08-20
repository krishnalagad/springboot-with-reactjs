import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { NavLink as link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import baseUrl from "../api/ServerAPI";

const Course = ({ course, update }) => {

  const deleteCourse = (id) => {
    axios.delete(`${baseUrl}/courses/${id}`).then(
      (response) => {
        console.log(response);
        toast.success(response.data.message, {
          position: 'bottom-center'
        });
        update(id);
      },
      (err) => {
        toast.error(err.data.message);
        console.log('Failed to delete.');
      }
    );
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <Row>
          {/* <Col> */}
          <Card className="text-center mb-1">
            <CardBody>
              <CardSubtitle style={{ fontWeight: 'bold' }}>{course.title}</CardSubtitle>
              <CardText>{course.description}</CardText>
              <Container className="text-center">
                <Button color="warning" tag={link} to="/update-course">Update</Button>
                <Button className="ms-2" color="danger" onClick={() => { deleteCourse(course.id) }}>Delete</Button>
              </Container>
            </CardBody>
          </Card>
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Course;