import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.avif";

//import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllMoviesAction,
  getMovieSearch,
} from "../redux/actions/movieActions";

function NavBar() {
  //const [total_pages, setTotal_pages] = useState(0);
  const onSearch = (word) => {
    search(word);
  };
  const dispatchGetAllMovies = useDispatch();
  //search movies
  const search = async (word) => {
    if (word === undefined || word === "") {
      //getAllMovies();
      dispatchGetAllMovies(getAllMoviesAction());
    } else {
      dispatchGetAllMovies(getMovieSearch(word));
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="logo"
            style={{ height: "120px", width: "120px", borderRadius: "20px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex ">
            <Form.Control
              onChange={(e) => {
                onSearch(e.target.value);
              }}
              type="search"
              placeholder="بحث..."
              className="me-2"
              aria-label="Search"
            />
            <Button className="mr-3" variant="outline-success">
              بحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
