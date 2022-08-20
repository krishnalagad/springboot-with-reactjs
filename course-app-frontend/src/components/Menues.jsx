import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Menues=()=>{
    return (
        <ListGroup>
            <ListGroupItem tag={NavLink} to="/" action>Home</ListGroupItem>
            <ListGroupItem tag={NavLink} to="/add-course">Add Course</ListGroupItem>
            <ListGroupItem tag={NavLink} to="/all-courses">View Courses</ListGroupItem>
            <ListGroupItem tag="a" to="#">About Us</ListGroupItem>
            <ListGroupItem tag="a" to="#">Contact</ListGroupItem>
        </ListGroup>
    );
}

export default Menues;