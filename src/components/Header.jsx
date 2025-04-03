import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-collapse shadow bg-white">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* Logo */}
                <a href="#" className="logo navbar-brand">
                    <img src="IMAGES/Myntra-Emblem-2048x1152.png" alt="Myntra Logo" style={{ width: '80px', height: '53px' }} />
                </a>

                {/* Toggler Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Navigation Links */}
                    <ul className="contents navbar-nav mx-auto d-flex flex-lg-row gap-3">
                        <li className="nav-item"><a className="nav-link text-dark" href="#">MEN</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">WOMEN</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">KIDS</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">HOME</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">BEAUTY</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">GENZ</a></li>
                        <li className="nav-item position-relative">
                            <a className="nav-link text-dark" href="#">STUDIO <span className="text-danger small">NEW</span></a>
                        </li>
                    </ul>
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                <div className="input-group d-none d-md-flex mx-2" style={{ maxWidth: '350px' }}>
                    <span className="input-group-text bg-light border-0">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input type="text" className="form-control bg-light border-0" placeholder="Search for products, brands and more" />
                </div>
                </div>
                

                {/* Icons */}
                <div className="d-flex gap-4">
                    <div className='text-center'>
                        <a href="#" className="text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faUser} />
                            <p className='small mb-0'>Profile</p>
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="#" className="text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faHeart} />
                            <p className='small mb-0'>Wishlist</p>
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href="#" className="text-dark text-decoration-none">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <p className='small mb-0'>Shop</p>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
