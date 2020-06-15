import React from 'react';
import './styles.css'

const Footer = () => {
    return (
        <div className="footer">
            <span className="footer-author">
                Made by &nbsp; 
                <a href="https://hamza1220.github.io" target="_blank" rel="noopener noreferrer"> 
                    Syed Hamza Ahmad 
                </a>
            </span>
            <span className="footer-credit">
                Powered by 
                <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt={"TMDB"}/>
                </a>
            </span>     
        </div>
    )
}

export default Footer;