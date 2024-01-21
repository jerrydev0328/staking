/** @format */
import React, { createContext } from "react";
import "./App.css";
import Header from "pages/Header";
import Main from "pages/Home";
import AboutUs from "pages/Dashboard/AboutUs";
import Dashboard from "pages/Dashboard";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/app/*"
					element={<Home />}
				/>
				<Route
					path="/"
					element={<Dashboard />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
