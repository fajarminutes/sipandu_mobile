"use client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [email, setEmail] = useState(""); // State untuk email
    const [password, setPassword] = useState(""); // State untuk password
    const [loading, setLoading] = useState(false); // State untuk loading
    const navigate = useNavigate(); // Hook untuk navigasi

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Mencegah perilaku default form
        setLoading(true); // Set loading to true saat login dimulai
    
        // Validasi input
        if (!email || !password) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Email and password are required!",
            });
            setLoading(false);
            return;
        }
    
        if (!isValidEmail(email)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid email address.",
            });
            setLoading(false);
            return;
        }
    
        try {
            const response = await fetch("https://sipandu.sinarjernihsuksesindo.biz.id/api/employees/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    employees_email: email,
                    employees_password: password,
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(errorData.error || "Login failed");
            }
    
            const data = await response.json();
    
            // Simpan token ke localStorage
            localStorage.setItem("access_token", data.access_token);
    
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
                timer: 1500,
                showConfirmButton: false,
            });
    
            navigate("/home"); // Redirect to home on successful login
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message,
            });
        } finally {
            setLoading(false); // Reset loading state
        }
    };
    

    return (
        <>
            <div className="login-wrapper d-flex align-items-center justify-content-center text-center">
                <div className="background-shape"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-8">
                            <img
                                className="big-logo"
                                src="img/core-img/logo-white.png"
                                alt=""
                            />
                            <img
                                src="https://sipandu3.sinarjernihsuksesindo.id/sw-content/header11pngpng.png"
                                alt=""
                            />

                            <div className="register-form mt-5">
                                <form onSubmit={handleLogin}>
                                    <div className="form-group text-start mb-4">
                                        <span>Email</span>
                                        <label htmlFor="email">
                                            <i className="ti ti-user"></i>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="email"
                                            type="text"
                                            placeholder="info@example.com"
                                            value={email} // Mengikat nilai email
                                            onChange={(e) => setEmail(e.target.value)} // Mengatur state email
                                        />
                                    </div>
                                    <div className="form-group text-start mb-4">
                                        <span>Password</span>
                                        <label htmlFor="password">
                                            <i className="ti ti-key"></i>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={password} // Mengikat nilai password
                                            onChange={(e) => setPassword(e.target.value)} // Mengatur state password
                                        />
                                    </div>
                                    <button
                                        className="btn btn-warning btn-lg w-100"
                                        type="submit"
                                        disabled={loading} // Disable button saat loading
                                    >
                                        {loading ? "Loading..." : "Log In"}
                                    </button>
                                </form>
                            </div>

                            <div className="login-meta-data">
                                <Link
                                    className="forgot-password d-block mt-3 mb-1"
                                    to="/forget-password"
                                >
                                    Forgot Password?
                                </Link>
                                <p className="mb-0">
                                    Didn’t have an account?
                                    <Link className="mx-1" to="/register">
                                        Register Now
                                    </Link>
                                </p>
                            </div>

                            <div className="view-as-guest mt-3">
                                <Link className="btn btn-primary btn-sm" to="/home">
                                    View as guest<i className="ps-2 ti ti-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
