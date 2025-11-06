import Home from "./pages/home"
import Login from "./pages/login"
import App from "./App";

const routes = [

    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },

]


export default routes;