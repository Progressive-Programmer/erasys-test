import React, {useState} from 'react';
import './Users.css'

export const  Users = () =>{
    const [users, setUsers] =useState([
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
        {name:"Bab",age:"30", img_src:"https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg"},
    ])
    return (
        <div className="users">
            <div className="userWrapper">
                <div className="userGrid">
                    {users? users.map((user, i)=>{return(

                    <div className="userContainer">
                        <div className="userImage">
                            <img src="https://www.planetromeo.com/img/usr/squarish/424x424/2873f9bb8c0d3a6d495cd5e88f.jpg" alt="Image is not available"/>
                        </div>
                        <div className="userDetail">
                            <div className="row">
                                <div className="col colDetail"><span>{user.age} | {user.name}</span><img/></div>
                            </div>
                            <div className="row">
                                <div className="col colLocation"><span>100 m</span><img/></div>
                            </div>
                        </div>
                    </div>
                    )}) :null}
                </div>
            </div>
        </div>
    )
}


