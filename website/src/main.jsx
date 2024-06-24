import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import User from './assets/components/User/User.jsx';
import Github, { githubInfoLoader } from './assets/components/Github/Github.jsx';
import './index.css';

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "user/:userid",
      element: <User />
    },
    {
      path: "github",
      element: <Github />,
      loader: githubInfoLoader
    },
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
