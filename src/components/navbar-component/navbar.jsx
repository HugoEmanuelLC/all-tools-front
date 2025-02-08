import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
    // START NAVBAR OPEN AND CLOSE
    const navBar = useRef()
    const btn_open = useRef()
    const btn_close = useRef()

    const openAndCloseNavBar = () => {
        navBar.current.classList.toggle('close_nav')
        if (navBar.current.classList.contains('close_nav')) {
            btn_open.current.style.display = 'block'
            btn_close.current.style.display = 'none'
        } else {
            btn_open.current.style.display = 'none'
            btn_close.current.style.display = 'block'
        }
    }
    
    const handleVerifUrl = (url) => {
        let pathname = window.location.pathname
        pathname != url && props.handleLoading()

        // si loading n'st pas en cours
        // pathname != url && navBar.current.classList.toggle('close_nav')
    }
    
    return (
        <>
            <div className="box_btns_navbar" onClick={openAndCloseNavBar}>
                <i ref={btn_open} className='btn_open bx bx-menu-alt-right'></i>
                <i ref={btn_close} className='btn_close bx bx-x'></i>
            </div>

            <nav ref={navBar} className="navbar close_nav">
                {/* navigation */}
                <ul>
                    <li><NavLink onClick={() => handleVerifUrl("/")} to="/">Home</NavLink></li>
                    <li><NavLink onClick={() => handleVerifUrl("/page-1")} to="/page-1">Page-1</NavLink></li>
                    <li><NavLink onClick={() => handleVerifUrl("/verify-link")} to="/verify-link">Verify-link</NavLink></li>

                    {/* authentication */}
                    {props.checkAuth == false && <li><NavLink onClick={() => handleVerifUrl("/login")} to="/login">Login</NavLink></li>}
                    {props.checkAuth == false && <li><NavLink onClick={() => handleVerifUrl("/register")} to="/register">Register</NavLink></li>}
                    {props.checkAuth == false && <li><NavLink onClick={() => handleVerifUrl("/forgot-password")} to="/forgot-password">Forgot Password</NavLink></li>}
                    {props.checkAuth == true && <li><button onClick={props.handleDeleteCookie}>Delete Cookie</button></li>}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;