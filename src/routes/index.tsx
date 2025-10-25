import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../routing/ProtectedRoute";
import { MasterLayout } from "../componets";
import NotFound from "../pages/errors/NotFound";
import HomePage from "../pages/home/Home";
import BlogPage from "../pages/blog/Blog";


export const router = createBrowserRouter([

    {
        path: "/",
        element: (
            <ProtectedRoute>
                <MasterLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "/profile_thienbao/", element: <HomePage /> },
            { path: "/profile_thienbao/blog/:slug", element: <BlogPage /> },
        ],
    },
    { path: "/*", element: <NotFound /> },
]);