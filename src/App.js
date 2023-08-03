import './App.css';
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./home/home"
import Login from "./login/login"
import PlanWorkout from "./plan/planWorkout"
import Monitor from './monitor/monitor';
import Goals from './goals/goals';

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
      path: "/plan",
      element: <PlanWorkout />
    },
    {
      path: "/monitor",
      element: <Monitor />
    },
    {
      path: "/goals",
      element: <Goals />
    }
  ]);

  return (
   <RouterProvider router={router} />
  );
}

