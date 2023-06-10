import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import InstructorClasses from "../pages/InstructorClasses/InstructorClasses";
import Dashboard from "../layouts/Dashboard";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManageInstructors from "../pages/Dashboard/ManageInstructors";
import ManageAll from "../pages/Dashboard/ManageAll";
import PrivateRoutes from "./PrivateRoutes";
import AccessDashboard from "../components/AccessDashboard/AccessDashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/allInstructors',
        element: <AllInstructors></AllInstructors>
      },
      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/instructor/:id',
        element: <InstructorClasses></InstructorClasses>
      }

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: '',
        element: <AccessDashboard></AccessDashboard>
      },
      {
        path: 'manageUsers',
        element: <ManageAll></ManageAll>
      },
      {
        path: 'manageClasses',
        element: <ManageClasses></ManageClasses>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'manageInstructors',
        element: <ManageInstructors></ManageInstructors>
      }
    ]
  }
]);

export default router;