import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Layout/HomePage/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Main from "../Components/Layout/Main";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'all-toys',
                element: <AllToys/>,
                loader: ()=> fetch('http://localhost:5000/allToys')
            },
            {
                path: '/toy/:id',
                element: <ToyDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
            
        ]
    }
])
export default router