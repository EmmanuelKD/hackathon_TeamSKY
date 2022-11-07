import { Navigate, useRoutes } from "react-router";
import AdminDrawer from "../layouts/adminDrawerLayout";
import Map from "../pages/map";

export default function AppRouter() {

    // the whole app is devided into three main section , mainn app , community section and insight
    return useRoutes([

        {
            path: "/",
            element: <AdminDrawer />,
            children: [
                { path: "/", element: <Navigate to="/map" /> },
                { path: "/map", element: <Map /> },

            ]
        }

    ]);
}