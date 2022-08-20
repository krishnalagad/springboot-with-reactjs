import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    document.title = "Home || Course App"
  }, []);

  return (
    <div>
      <div
        className="text-center"
        style={{
          padding: "2rem 1rem",
          marginBottom: "2rem",
          backgroundColor: "#e9ecef",
          borderRadius: ".3rem",
        }}
      >
        <h1 className="display-3">Krishna Dilip Lagad</h1>
        <p>
          This Single page app is developed by Krishna Lagad for learning
          purpose. Backend is developed in the spring boot and frontend is
          developed in the React JS.
        </p>
        <Container>
          <Button color="primary" outline tag={NavLink} to="/add-course">
            Start Using
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
