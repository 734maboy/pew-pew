import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './Components/Root/Root'
import AnotherPage from './Pages/AnotherPage/AnotherPage'

const router = createBrowserRouter([
  {
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/another-page",
        element: <AnotherPage/>,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
