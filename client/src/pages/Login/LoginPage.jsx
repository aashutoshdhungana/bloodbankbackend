// src/pages/LoginPage/LoginPage.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData, logIn } from "../../store/slices/UserSlice";
import axios from "axios";
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isLoggedIn, user } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        try {
            event.preventDefault();
            await axios.get("/sanctum/csrf-cookie");
            let apiResult = await axios.post("/api/auth/login", {
                email,
                password,
            });
            if (apiResult.status === 200) {
                dispatch(updateUserData(apiResult.data?.user));
                dispatch(logIn());
                localStorage.setItem(
                    "userState",
                    JSON.stringify(apiResult.data?.user)
                );
            } else {
              alert("Check your credentials and try again")
            }
        } catch {
            alert("Faild to login.")
           
        }
    };

    useEffect(() => {
        if (isLoggedIn && user.isAdmin == 0) {
            // Navigate to the home page after successful login
            navigate("/");
        }

        if (isLoggedIn && user.isAdmin == 1) {
            // Navigate to the home page after successful login
            navigate("/adminDashboard");
        }
    }, [isLoggedIn, navigate, user]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Login
                    </button>
                    <div className="flex mt-4 space-x-2   justify-center">
                        <p>Don't Have Account? </p>
                        <button
                            type="button"
                            className="text-blue-500 hover:underline"
                            onClick={() => navigate("/registration-page")}
                        >
                            Register Here
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
