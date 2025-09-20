import React from 'react';
import './index.css';
import logo from '../../assets/ReBloom.svg';

function Header() {
    return (
        <>
            <div className="header-container" id='header-container'>
                <div className='logo-image'><img className='logo-svg' src={logo} alt="" /></div>
                <div className='header-menu'>
                    <ul>
                        <li><a href="">취향 발견</a></li>
                        <li><a href="">취향 탐색</a></li>
                        <li><a href="">커뮤니티</a></li>
                        <li><a href="">마이페이지</a></li>
                    </ul>
                </div>
                <div className="login-box">
                    <button className='login-button' id='login-box_button'>Login</button>
                    <button className='signup-button' id='login-box_button'>Sign Up</button>
                    <button className='menu-button' id='login-box_button'>Menu</button>
                </div>
            </div>
        </>
    );
}

export default Header