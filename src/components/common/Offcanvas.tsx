"use client";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Offcanvas = ({ handleShow, show }: any) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Anda akan keluar dari akun.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, keluar!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                // Hapus token dari localStorage
                localStorage.removeItem("access_token");
                // Arahkan ke halaman login
                navigate("/login");
                // Tampilkan notifikasi berhasil
                Swal.fire({
                    title: "Berhasil!",
                    text: "Anda telah keluar.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };

    return (
        <>
            <div
                className={`offcanvas offcanvas-start suha-offcanvas-wrap ${
                    show ? "show" : ""
                }`}
                tabIndex={-1}
                id="suhaOffcanvas"
                aria-labelledby="suhaOffcanvasLabel"
            >
                <button
                    onClick={handleShow}
                    className="btn-close btn-close-white"
                    type="button"
                ></button>

                <div className="offcanvas-body">
                    <div className="sidenav-profile">
                        <div className="user-profile">
                            <img src="/assets/img/bg-img/9.jpg" alt="" />
                        </div>
                        <div className="user-info">
                            <h5 className="user-name mb-1 text-white">Suha Sarah</h5>
                            <p className="available-balance text-white">Anggota</p>
                            <p className="text-white">123456789</p>
                        </div>
                    </div>

                    <ul className="sidenav-nav ps-0">
                        <li>
                            <Link to="/home">
                                <i className="ti ti-home"></i>Beranda
                            </Link>
                        </li>
                        <li>
                            <Link to="/msp">
                                <i className="ti ti-briefcase"></i>MSP
                            </Link>
                        </li>
                        <li>
                            <Link to="/buku-tugas">
                                <i className="ti ti-book"></i>Buku Tugas
                            </Link>
                        </li>
                        <li>
                            <Link to="/matrix">
                                <i className="ti ti-layout"></i>Matrix
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="btn btn-link">
                                <i className="ti ti-logout"></i>Keluar
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Offcanvas;
