import React from "react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import App from "./App";
import Admin from "./components/Admin";
import VideoPage from "./components/VideoPage";
import StorylinePage from "./components/StorylinePage";
import PPTPage from "./components/PPTPage";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ErrorPage from './components/ErrorPage';


const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Routes>
  <Route
    {...rest}
    element={
      isAuthenticated ? (
        <Component />
      ) : (
        <Navigate to="/Main" state={{ from: rest.path }} replace />
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
    element: (
      <ProtectedRoute
        isAuthenticated={true}
        component={Portfolio}
        errorComponent={ErrorPage}
        errorPath="/error"
      />
    ),
  },
  {
    path: "/About",
    element: <About />,
  },
];

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      {routerConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
);

// const Root = () => (
//   <Router>
//     <Routes>
//       {routerConfig.map((route, index) => (
//         <Route key={index} path={route.path} element={route.element} />
//       ))}
//     </Routes>
//   </Router>
// );

//createRoot(document.getElementById("root")).render(<Root />);

reportWebVitals();

export default ProtectedRoute;


// import React from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider, Navigate, Route, Routes, Switch } from "react-router-dom";

// import "./styles/index.css";
// import App from "./App";
// import Admin from "./components/Admin";
// import VideoPage from "./components/VideoPage";
// import StorylinePage from "./components/StorylinePage";
// import PPTPage from "./components/PPTPage";
// import Blog from "./components/Blog";
// import Portfolio from "./components/Portfolio";
// import About from "./components/About";

// const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     element={isAuthenticated ? <Component /> : <Navigate to="/Main" />}
//   />
// );

// const routerConfig = [
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/Admin",
//     element: <Admin />,
//   },
//   {
//     path: "/VideoPage",
//     element: <VideoPage />,
//   },
//   {
//     path: "/StorylinePage",
//     element: <StorylinePage />,
//   },
//   {
//     path: "/PPTPage",
//     element: <PPTPage />,
//   },
//   {
//     path: "/Blog",
//     element: <Blog />,
//   },
//   {
//     path: "/Portfolio",
//     element: <ProtectedRoute isAuthenticated={{}} component={Portfolio} />,
//   },
//   {
//     path: "/About",
//     element: <About />,
//   },
// ];

// const router = createBrowserRouter(
//   <Routes>
//     {routerConfig.map((route, index) => (
//       <Route key={index} path={route.path} element={route.element} />
//     ))}
//   </Routes>
// );


// ////////////////////////////////////////////////////////////////////////////////////////////////


// const router = createBrowserRouter(
//   <Routes>
//     <Route path="/" element={<App />} />
//     <Route path="Admin" element={<Admin />} />
//     <Route path="VideoPage" element={<VideoPage />} />
//     <Route path="StorylinePage" element={<StorylinePage />} />
//     <Route path="PPTPage" element={<PPTPage />} />
//     <Route path="Blog" element={<Blog />} />
//     <Route path="Portfolio" element={<ProtectedRoute isAuthenticated={{}} component={Portfolio} />} />
//     <Route path="About" element={<About />} />
//   </Routes>
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "Admin",
//     element: <Admin />,
//   },
//   {
//     path: "VideoPage",
//     element: <VideoPage />,
//   },
//   {
//     path: "StorylinePage",
//     element: <StorylinePage />,
//   },
//   {
//     path: "PPTPage",
//     element: <PPTPage />,
//   },
//   {
//     path: "Blog",
//     element: <Blog />,
//   },
//   {
//     path: "Portfolio",
//     element: <ProtectedRoute
//               isAuthenticated={{}} 
//               component={Portfolio}
//              />,
//   },
//   {
//     path: "About",
//     element: <About />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <RouterProvider router={router}>
//     <React.StrictMode></React.StrictMode>
//   </RouterProvider>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// export default ProtectedRoute;