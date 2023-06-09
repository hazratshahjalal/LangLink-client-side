import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import InstructorClasses from "../pages/InstructorClasses/InstructorClasses";


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
]);

export default router;