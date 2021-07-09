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
                    {usersList? usersList.map((user, i)=>{return(

                    <div className="userContainer">
                        <div className="userImage">
                            <img src={user.picture?  user.picture.url : romeo_img} alt="Image is not available"/>
                        </div>
                        <div className="userDetail">
                            <div className="row">
                                <div className="col colDetail"><span>{user.age} | {user.name}</span><img/></div>
                            </div>
                            <div className="row">
                                <div className="col colLocation"><span>100 </span><TelegramIcon style={{ fontSize: 10 }} /></div>
                            </div>
                        </div>
                    </div>
                    )}) :null}
                </div>
            </div>
        </div>
    )
}


