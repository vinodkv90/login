import { PAGE_ROUTES } from "./constants/pageRoutes";
import Root from "./components/Root";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
import Home from "./pages/Home";
import { DASHBOARD_ROUTES } from "./constants/dashboardRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const routes = [
    {
        path: PAGE_ROUTES.login,
        element: <Login />,
        errorElement: <NotFound />
    },
    {
        path: PAGE_ROUTES.register,
        element: <Register />,
        errorElement: <NotFound />
    },
    {
        path: PAGE_ROUTES.dashboard,
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
        errorElement: <NotFound />,
        children: [
            {
                path: DASHBOARD_ROUTES.home,
                element: <Home />
            },
        ]
    }
]