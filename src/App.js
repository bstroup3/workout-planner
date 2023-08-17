import './App.css';
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./home/home"
import OutHome from "./loggedOut/home/home"
import OutLogin from "./loggedOut/login/login"
import Monitor from './monitor/monitor';
import Goals from './goals/goals';
import OutCreateAccount from "./loggedOut/login/createAccount"
import ViewWorkouts from './workout/viewWorkouts';
import CreateWorkouts from './workout/createWorkouts';
import EnterWorkout from './workout/enterWorkout';
import CreateGoals from './goals/createGoals';
import Test from './test';
import Profile from './profile/profile';
import noPageFound from './noPageFound/noPageFound';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OutHome/>
    },
    {
      path: "/login",
      element: <OutLogin />
    },
    {
      path: "/createaccount",
      element: <OutCreateAccount />
    },
    {
      path: '/:id',
      element: <Home/>
    },
    {
      path: "/monitor/:id",
      element: <Monitor />
    },
    {
      path: "/goals/:id",
      element: <Goals />
    },
    {
      path: "/goals/create/:id",
      element: <CreateGoals />
    },
    {
      path: "/plan/:id",
      element: <ViewWorkouts />
    },
    {
      path: "/plan/create/:id",
      element: <CreateWorkouts />
    },
    {
      path: "/plan/enter/:id",
      element: <EnterWorkout />
    },
    {
      path: "/profile/:id",
      element: <Profile />
    },
    {
      path: '/test/:id',
      element: <Test />
    },
    {
      path: '*',
      element: <noPageFound/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  );
}

