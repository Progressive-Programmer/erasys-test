import React, { useState } from 'react';
import './NavBar.css';
import romeo_logo from '../Assets/romeo_logo2.svg'
import { apiService } from '../Services/ApiService';

export const NavBar =()=> {
    const [length, setLength] = useState(39);
    const [users, setUsers] = useState([])

    const handleSearch = (e) => {
        const name = e.target.name;
    }

    return (
        <div className="topbar">
            <header className="header">
                <div className="banner">
                    <ul>
                        <li className="navbarList">                     
                            <a className="navbarOptions" ><img src={romeo_logo} alt="ROMEO" className="logo"/></a>
                        </li>
                        <li>                     
                            <a className="navbarOptions" >Distance</a>
                        </li>
                        <li>                     
                            <a className="navbarOptions" >Activity</a>
                        </li>
                    </ul>
                </div>
            </header>
        <div className="navbar">
                  
            <div className="navbarBig">
                <ul>
                    <li className="navbarList">                     
                        <a className="navbarOptions" name="discover" onClick={handleSearch} >Discover</a>
                    </li>
                    <li>                     
                        <a className="navbarOptions" name="distance" onClick={handleSearch}  >Distance</a>
                    </li>
                    <li>                     
                        <a className="navbarOptions" name="activity" onClick={handleSearch} >Activity</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>

    )
}


