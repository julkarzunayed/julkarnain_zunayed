import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layouts/RootLayout";
import Home from "../page/Home";
import Message from "../page/Message";
import Error from "../components/Error";







export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: '/message',
        Component: Message
    },
    {
        path: '/error',
        Component: Error
    }

]);