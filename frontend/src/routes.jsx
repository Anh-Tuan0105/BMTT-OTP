import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPages";
import Verify2FA from "./pages/Verify2FA";
import SetUp2FA from "./pages/SetUp2FA";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path:"/login",
        element: <LoginPage/>,
        errorelement: <Error/>,
    },
      
    {
        element:<ProtectedRoute/>,
        children: [
            {
        path:"/",
        element: <HomePage/>,
        errorelement: <Error/>,
            },

      
            {
        path:"/setup-2fa",
        element: <SetUp2FA/>,
        errorelement: <Error/>,
            },

      
            {
        path:"/Verify-2fa",
        element: <Verify2FA/>,
        errorelement: <Error/>,
    
            },


        ],

    },
    
   
]);
export default router