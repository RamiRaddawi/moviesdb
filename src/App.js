import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
//import { useState } from "react";
//import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
//import { useDispatch, useSelector } from "react-redux";
//import { getAllMoviesAction } from "./redux/actions/movieActions";

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />}></Route>
            <Route path="/movie/:id" element={<MovieDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
