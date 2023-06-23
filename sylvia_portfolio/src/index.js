import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Navigate, Route, Switch } from "react-router-dom";

import "./styles/index.css";
import App from "./App";
import Admin from "./components/Admin";
import VideoPage from "./components/VideoPage";
import StorylinePage from "./components/StorylinePage";
import PPTPage from "./components/PPTPage";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated ? <Component /> : <Navigate to="/Main" />}
  />
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Admin",
    element: <Admin />,
  },
  {
    path: "VideoPage",
    element: <VideoPage />,
  },
  {
    path: "StorylinePage",
    element: <StorylinePage />,
  },
  {
    path: "PPTPage",
    element: <PPTPage />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "Portfolio",
    element: <ProtectedRoute
              isAuthenticated={{}} 
              component={Portfolio}
             />,
  },
  {
    path: "About",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <React.StrictMode></React.StrictMode>
  </RouterProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default ProtectedRoute;