import React, {useEffect, useState} from 'react';
import romeo_img from '../Assets/romeo_img.svg'
import './Users.css'
import { useStateValue } from '../Context/StateProvider';
import TelegramIcon from '@material-ui/icons/Telegram';


export const  Users = () =>{
    const [{usersList}, dispatch] = useStateValue()


    return (
        <div className="users">
            <div className="userWrapper">
                <div className="userGrid">
                    {usersList? usersList.map((user, i)=>{
                        const {picture, personal, location, name, online_status} = user;
                    return(
                    <div className="userContainer">
                        <div className="userImage">
                            <img src={picture?  picture.url : romeo_img} alt="Image is not available"/>
                        </div>
                        <div className="userDetail">
                            <div className="row">
                                <div className="col colDetail"><span>{personal ? personal.age+"  | "  : ''}{name? name : ''}</span><img/></div>
                            </div>
                            <div className="row">
                                <div className="col colLocation"><span>{location? location.distance : ''} </span><TelegramIcon style={{ fontSize: 10 }} /></div>
                            </div>
                        </div>
                    </div>
                    )}) :null}
                </div>
            </div>
        </div>
    )
}


