import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../pages/DashBoard/MyAppointment/MyAppointment";
import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddEmployee from "../../pages/DashBoard/AddEmployee/AddEmployee";
import ManageEmployees from "../../pages/DashBoard/ManageEmployees/ManageEmployees";
import Payment from "../../pages/DashBoard/Payment/Payment";
import DisplayError from "../../pages/Home/Shared/DisplayError/DisplayError";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addemployee',
                element: <AdminRoute> <AddEmployee></AddEmployee> </AdminRoute>
            },
            {
                path: '/dashboard/manageemployee',
                element: <AdminRoute> <ManageEmployees></ManageEmployees> </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({params}) => fetch(`https://jerins-parlour-server-eta.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default router;