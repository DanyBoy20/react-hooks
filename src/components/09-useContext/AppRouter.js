// <Routes> reemplazo a <Switch>
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>

        <NavBar />

        <Routes>

          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>

      </div>
    </Router>
  );
};

export default AppRouter;
