import React from 'react';
import './sidebar.style.css';

export const Sidebar = () => (
    <div className='sidebar-left'>
        <div className="sidebar-inner">
            <a href="#one"><div className="link">Home</div></a>
            <a href="#two"><div className="link">Products</div></a>
            <a href="#third"><div className="link">Web Application</div></a>
            <a href="#footer"><div className="link">Android Application</div></a>
        </div>
        <div className="social">
            <a href="https://github.com/javaBeans-VIT"><div className="link">GitHub</div></a>
        </div>
    </div>
)