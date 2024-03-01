import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
//screens
import HomeScreen from "../screens/auth/HomeScreen";
import CharacterDetailsScreen from "../screens/auth/CharacterDetailsScreen";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route
            path="characterdetails/:name/:id"
            element={<CharacterDetailsScreen />}
          />
        </Route>
        <Route path="*" element={<h1>404 Component</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
