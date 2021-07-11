import React, {useEffect, useState} from 'react';
import romeo_img from '../Assets/romeo_img.svg'
import './Users.css'
import { useStateValue } from '../Context/StateProvider';
import TelegramIcon from '@material-ui/icons/Telegram';
import moment from 'moment';
import { lastLoginDuration } from '../Services/Utils';


export const  Users = () =>{
    const [{usersList}, dispatch] = useStateValue()


    return (
        <div className="users">
            <div className="userWrapper">
                <div className="userGrid">
                    {usersList? usersList.map((user, i)=>{
                        const {picture, personal, location, name, online_status, last_login} = user;
                            let status,lastLogin
                            if (online_status=="ONLINE"){
                                status = "loggedIn"
                            } else if (online_status == "OFFLINE"){
                                status = "loggedOut"
                            } else if (online_status == "DATE") {
                                status = "date"
                            }
                           
                            lastLogin = lastLoginDuration(last_login)
                            // lastLogin = moment().utc().format()
                            // lastLogin = last_login

                             
                    return(
                    <div className="userContainer">
                        <div className="userImage">
                            <div className="userImageWrapper">
                                <img className="userImageBox" src={picture?  picture.url : romeo_img} alt="Image is not available" />
                            </div>
                                <div className="userHeader">
                                    <span className={`userHeaderText ${status}`}> {status=="date"? '♥' : '●'}</span>
                                    <span className="userHeaderText">{last_login? lastLogin:''} </span>
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                        </div>
                        <div className="userDetail">
                            <div className="row">
                                <div className="col colDetail"><span>{personal ? personal.age+"  | "  : ''}{name? name : ''}</span><img/></div>
                            </div>
                            <div className="row">
                                <div className="col colLocation"><span>{location? location.distance : ''} </span><TelegramIcon style={{ fontSize: 10 }} /><span>    {location? location.name : ''} </span></div>
                            </div>
                        </div>
                    </div>
                    )}) :null}
                </div>
            </div>
        </div>
    )
}


