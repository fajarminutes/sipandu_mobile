"use client";
import { useState } from "react";
import Offcanvas from "../components/common/Offcanvas";
import useTheme from "../hooks/useTheme";

const Header = () => {
    const [show, setShow] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const handleShow = () => setShow(!show);

    return (
        <>
            <div className="header-area" id="headerArea">
                <div className="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
				<div className="logo-wrapper">
                        <a href="/home">
                            <img 
                                src="https://sipandu3.sinarjernihsuksesindo.id/sw-content/header11pngpng.png" 
                                alt="" 
                                style={{ width: "100px", height: "auto" }}
                            />
                        </a>
                    </div>
                    <div className="navbar-logo-container d-flex align-items-center">
                                         

                        <div className="form-check form-switch ms-2">
                            <input
                                className="form-check-input"
                                id="darkSwitch"
                                type="checkbox"
                                checked={theme === "dark"}
                                onChange={toggleTheme}
                            />
                        </div>

						<div className="cart-icon-wrap">
                            <a href="/notifications">
							<i className="ti ti-bell-ringing lni-tada-effect"></i>
							<span>13</span>
                            </a>
                        </div>

                        <div
                            className="suha-navbar-toggler ms-2"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#suhaOffcanvas"
                            aria-controls="suhaOffcanvas"
                        >
                            <div onClick={() => handleShow()}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offcanvas handleShow={handleShow} show={show} />
        </>
    );
};

export default Header;
