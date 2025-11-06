import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup";
import App from "./App";

const routes = [

    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },

]


export default routes;