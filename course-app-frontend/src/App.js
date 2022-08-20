import "./App.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import Menues from "./components/Menues";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import UpdateCourse from "./components/UpdateCourse";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const btnHandle = () => {
    toast("First Toast Message !!", {
      position: "bottom-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={3}>
              <Menues />
            </Col>

            <Col md={9}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/all-courses" element={<AllCourses />} exact />
                <Route path="/update-course" element={<UpdateCourse />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
