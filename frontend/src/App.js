import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LandPage from "./pages/LandPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "./redux/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Posts from "./pages/Posts";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(currentUser());
        }
    }, [dispatch]);
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<LandPage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route
                    path="profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route path="posts" element={<Posts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer position="top-left" autoClose={3000} />
        </div>
    );
}

export default App;
