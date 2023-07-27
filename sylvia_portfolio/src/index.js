import React from "react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { createRoot } from "react-dom/client";

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

const isAuthenticated = false;

const ProtectedRoute = ({ component: Component, isAuthenticated: auth, ...rest }) => (

  <Routes>
    <Route
      {...rest}
      element={
        auth ? (
          <Component />
        ) : (
          <Navigate to="/Portfolio/*" state={{ from: rest.path }} replace />
        )
      }
    />
  </Routes>
);

const routerConfig = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/Login",
    element: <Login setIsAuthenticated={ProtectedRoute} />,
  },
  {
    path: "/VideoPage",
    element: <VideoPage />,
  },
  {
    path: "/StorylinePage",
    element: <StorylinePage />,
  },
  {
    path: "/PPTPage",
    element: <PPTPage />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Portfolio/*",
    element: <Portfolio />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Resume",
    element: <Resume />,
  },
];

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      {routerConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            route.element.props.path === "/Portfolio/*" ? (
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                component={route.element.props.children.props.component}
                errorComponent={route.element.props.children.props.errorComponent}
                errorPath={route.element.props.children.props.errorPath}
              />
            ) : (
              route.element
            )
          }
        />
      ))}
    </Routes>
  </Router>
);
reportWebVitals();
export default ProtectedRoute;


