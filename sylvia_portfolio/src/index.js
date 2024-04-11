import React from "react";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AuthProvider, useAuth } from "./authContext";

import "./styles/index.css";
import App from "./App";
import Admin from "./components/Admin";
import Login from "./components/Login";
import VideoPage from "./components/VideoPage";
import StorylinePage from "./components/StorylinePage";
import PPTPage from "./components/PPTPage";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume";
import AdminLogin from "./components/AdminLogin";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { isAuthenticated, isAdminAuthenticated } = useAuth();
  const auth =
    redirectTo === "/AdminLogin" ? isAdminAuthenticated : isAuthenticated;
  return auth ? children : <Navigate to={redirectTo} />;
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Admin" element={
            <ProtectedRoute redirectTo="/AdminLogin">
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/VideoPage" element={<VideoPage />} />
          <Route path="/StorylinePage" element={<StorylinePage />} />
          <Route path="/PPTPage" element={<PPTPage />} />
          
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
