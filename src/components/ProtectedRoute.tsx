"use client";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const isAuthenticated = () => {
    const token = localStorage.getItem("access_token");
    return !!token; // Cek keberadaan token
};

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        // Tampilkan notifikasi SweetAlert2
        Swal.fire({
            icon: "warning",
            title: "Akses Ditolak",
            text: "Anda harus login terlebih dahulu untuk mengakses halaman ini.",
            timer: 2000, // Waktu dalam milidetik
            showConfirmButton: false,
        });

        // Arahkan ke halaman login
        return <Navigate to="/login" replace />;
    }

    // Jika login, tampilkan komponen anak
    return children;
};

export default ProtectedRoute;
