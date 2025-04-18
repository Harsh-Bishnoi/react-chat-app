import React, { useState, useEffect } from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav className='bg-color-blue pb-100'>
            <div className="container max-w-1160">
                <div className="d-flex justify-content-between align-items-center py-20">
                    <a className='font-family-primary text-white fw-semibold fs-26 lh-115 text-decoration-none' href="#">chat<span className='fw-275'>app</span></a>
                    <div onClick={toggleNavbar} className='z-5 d-lg-none'>
                        <span className={`menu-lines ${menuOpen ? "rotate-42" : ""}`}></span>
                        <span className={`menu-lines ${menuOpen ? "bg-transparent" : ""}`}></span>
                        <span className={`menu-lines ${menuOpen ? "rotate-43" : ""}`}></span>
                    </div>
                    <ul id='nav-name' className={`list-unstyled d-flex justify-content-center align-items-center nav-link gap-30 mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                        <li><a className='font-family-second nav-links fw-medium fs-14 lh-100 text-white text-decoration-none' href="">Product</a></li>
                        <li><a className='font-family-second nav-links fw-medium fs-14 lh-100 text-white text-decoration-none' href="">Services</a></li>
                        <li><a className='font-family-second nav-links fw-medium fs-14 lh-100 text-white text-decoration-none' href="">Contact</a></li>
                        <li><a className='font-family-second nav-links fw-medium fs-14 lh-100 text-white text-decoration-none' href="">Log In</a></li>
                        <li><button className='nav-btn font-family-second fw-medium fs-14 lh-100 text-white text-center border-0'>Try It Free</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
