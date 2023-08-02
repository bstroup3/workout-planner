import './App.css';
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./home/home"
import Login from "./login/login"
import PlanWorkout from "./plan/planWorkout"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/planworkout",
      element: <PlanWorkout />
    }
  ]);

  return (
   <RouterProvider router={router} />
  );
}

