import './App.css';
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./home/home"
import Login from "./login/login"
import Monitor from './monitor/monitor';
import Goals from './goals/goals';
import CreateAccount from "./login/createAccount"
import ViewWorkouts from './workout/viewWorkouts';
import CreateWorkouts from './workout/createWorkouts';
import EnterWorkout from './workout/enterWorkout';
import CreateGoals from './goals/createGoals';

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
      path: "/monitor",
      element: <Monitor />
    },
    {
      path: "/goals",
      element: <Goals />
    },
    {
      path: "/goals/create",
      element: <CreateGoals />
    },
    {
      path: "/createaccount",
      element: <CreateAccount />
    },
    {
      path: "/plan",
      element: <ViewWorkouts />
    },
    {
      path: "/plan/create",
      element: <CreateWorkouts />
    },
    {
      path: "/plan/enter",
      element: <EnterWorkout />
    }
  ]);

  return (
   <RouterProvider router={router} />
  );
}

