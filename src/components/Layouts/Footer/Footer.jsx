import React from 'react';
import './Footer.css'

import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className='footer'>
            <Navbar style='navbar-networks'>
                <ItemNavbar style='icons' content={<FaWhatsapp />} />
                <ItemNavbar style='icons' content={<FaInstagram />} />
                <ItemNavbar style='icons' content={<FaLinkedin />} />
            </Navbar>
        </footer>
    )


}