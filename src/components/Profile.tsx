import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Profile = () => {
    return (
        <>
            <Header />

            <div className="page-content-wrapper">
                <div className="container">
                    <div className="profile-wrapper-area py-3">
                        <div className="card user-info-card">
                            <div className="card-body p-4 d-flex align-items-center">
                                <div className="user-profile me-3">
                                    <img src="/assets/img/bg-img/9.jpg" alt="" />
                                </div>
                                <div className="user-info">
                                    <p className="mb-0 text-white">Anggota</p>
                                    <h5 className="mb-0 text-white">Suha Jannat</h5>
                                </div>
                            </div>
                        </div>

                        <div className="card user-data-card">
                            <div className="card-body">
                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center">
                                        <i className="ti ti-id-badge"></i>
                                        <span>NIK</span>
                                    </div>
                                    <div className="data-content">123456789</div>
                                </div>
                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center">
                                        <i className="ti ti-location-pin"></i>
                                        <span>Lokasi Penempatan</span>
                                    </div>
                                    <div className="data-content">Jakarta</div>
                                </div>
                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center">
                                        <i className="ti ti-calendar"></i>
                                        <span>Jam Kerja</span>
                                    </div>
                                    <div className="data-content">08:00 - 17:00</div>
                                </div>
                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center">
                                        <i className="ti ti-phone"></i>
                                        <span>Nomor Handphone</span>
                                    </div>
                                    <div className="data-content">+62 812 3456 7890</div>
                                </div>
                                <div className="single-profile-data d-flex align-items-center justify-content-between">
                                    <div className="title d-flex align-items-center">
                                        <i className="ti ti-mail"></i>
                                        <span>Email</span>
                                    </div>
                                    <div className="data-content">care@example.com</div>
                                </div>
                                <div className="edit-profile-btn mt-3">
                                    <Link
                                        className="btn btn-primary btn-lg w-100"
                                        to="/edit-profile"
                                    >
                                        <i className="ti ti-pencil me-2"></i>Edit Profile
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* New Card: Skill Matrix */}
                        <div className="card skill-matrix-card mt-4">
                            <div className="card-header">
                                <h5 className="mb-0">Skill Matrix</h5>
                            </div>
                            <div className="card-body">
                                <p>Skill Matrix content goes here...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="internet-connection-status" id="internetStatus"></div>

            <Footer />
        </>
    );
};

export default Profile;
