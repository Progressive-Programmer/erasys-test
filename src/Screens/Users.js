import React, {useEffect, useState} from 'react';
import romeo_img from '../Assets/romeo_img.svg'
import './Users.css'
import { useStateValue } from '../Context/StateProvider';
import TelegramIcon from '@material-ui/icons/Telegram';
import moment from 'moment';
import { lastLoginDuration, textCleanser } from '../Services/Utils';
import { Modal } from 'react-bootstrap';


export const  Users = () =>{
    const [{usersList}, dispatch] = useStateValue()
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false)
    const handleModalShow = () => setModalShow(true)
    const [userDetails, setUserDetails] = useState([])
    
    return (
        <div className="users">
            <div className="userWrapper">
                <div className="userGrid">
                    {usersList? usersList.map((user, i)=>{
                        const {picture, personal, location, name, online_status, last_login, headline} = user;
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
                    <div className="userContainer" onClick={()=>{handleModalShow();setUserDetails([user])}}>
                        <div className="userImage">
                            <div className="userImageWrapper">
                                <img className="userImageBox" src={picture?  picture.url : romeo_img} alt="Image is not available" />
                            </div>
                                <div className="userHeader">
                                    <span className={`userHeaderText ${status}`}> {status=="date"? '♥' : '●'}</span>
                                    <span className="userHeaderText userLastLogin">{last_login? lastLogin:''} </span>
                                    <div className="userHeadline" title={headline? headline: ''}>{headline? headline:''}</div>
                                    <div className=""></div>
                                </div>
                        </div>
                        <div className="userDetail">
                            <div className="row">
                                <div className="col colDetail"><span>{personal ? personal.age+"  | "  : ''}{name? name : ''}</span><img/></div>
                            </div>
                            <div className="row">
                                <div className="col colLocation"><span>{location? location.distance+' km' : ''} </span><TelegramIcon style={{ fontSize: 10 }} /><span>    {location? location.name : ''} </span></div>
                            </div>
                        </div>
                    </div>
                    )}) :null}
                </div>
            </div>
{/* User Profile popup  */}
            <Modal 
            className="modal"
            show={modalShow} 
            onHide={handleModalClose}
            >
                <Modal.Body>
                    {userDetails? userDetails.map((user)=>{
                        const {picture, personal, sexual, location, name, online_status, last_login, headline} = user;
                        const {age, body_hair, body_type, ethnicity, eye_color, height, relationship, smoker, weight} = personal
                        const {anal_position, safer_sex, sm} = sexual
                        let status,lastLogin
                        if (online_status=="ONLINE"){
                            status = "loggedIn"
                        } else if (online_status == "OFFLINE"){
                            status = "loggedOut"
                        } else if (online_status == "DATE") {
                            status = "date"
                        }
                        
                        lastLogin = lastLoginDuration(last_login)



                        return(
                        <div className="">
                            <div className="modalLeft">
                                <div className="leftWrapper">
                                    <h2 className="leftHeadline">
                                        {headline? headline :''}
                                    </h2>
                                    <div className="leftImage">
                                        <img className="leftImageBox" src={picture ? picture.url:romeo_img} title={picture? picture.comment:''} alt="Image is not available"/>
                                    </div>
                                    <div className="leftLocation">
                                            <span className={`locationHeaderText ${status}`}> {status=="date"? '♥' : '●'}</span>
                                            <span className="locationHeaderText userLastLogin">{last_login? " "+lastLogin:''}</span>
                                            <div className="">{personal ? personal.age+"  | "  : ''}{name? name:''}</div>
                                            <div className="">{location? location.name+` (${location.distance} km)` :''}</div>
                                            <div className="">{location?  '':''}</div>
                                    </div>
                                    <hr/>
                                    <div className="leftInfoBox">
                                        <div className="infoHeading">Personal</div>
                                    
                                            {body_hair && body_hair !== 'NOENTRY'       ? <div className="personal infoBox">{'Body Hair :  '+textCleanser(body_hair)}</div>:<></>} 
                                            {body_type && body_type !== 'NOENTRY'       ? <div className="personal infoBox">{'Body Type :  '+textCleanser(body_type)}</div>:<></>} 
                                            {ethnicity && ethnicity !== 'NOENTRY'       ? <div className="personal infoBox">{'Ethnicity :  '+textCleanser(ethnicity)}</div>:<></>} 
                                            {eye_color && eye_color !== 'NOENTRY'       ? <div className="personal infoBox">{'Eye Color :  '+textCleanser(eye_color)}</div>:<></>} 
                                            {height    && height   !== 'NOENTRY'        ? <div className="personal infoBox">{'Height :  '   +height.cm+' cm'}</div>:<></>} 
                                            {weight && weight !== 'NOENTRY'             ? <div className="personal infoBox">{'Weight :  '+weight.kg+' kg'}</div>:<></>} 
                                            {smoker && smoker !== 'NOENTRY'             ? <div className="personal infoBox">{'Smoker :  '+textCleanser(smoker)}</div>:<></>} 
                                            {relationship && relationship !== 'NOENTRY' ? <div className="personal infoBox">{'Relationship :  '+textCleanser(relationship)}</div>:<></>} 

                                        <div className="infoHeading">Sexual</div>

                                            {anal_position && anal_position !== 'NOENTRY'   ? <div className="personal infoBox">{'Anal Position :  '+textCleanser(anal_position)}</div>:<></>} 
                                            {safer_sex && safer_sex !== 'NOENTRY'           ? <div className="personal infoBox">{'Safer Sex :  '+textCleanser(safer_sex)}</div>:<></>} 
                                            {anal_position && anal_position !== 'NOENTRY'   ? <div className="personal infoBox">{'Anal Position :  '+textCleanser(anal_position)}</div>:<></>} 
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="modalRight">

                            </div>
                        </div>
                        )
                    })
                    : null}
                </Modal.Body>

            </Modal>
        </div>
    )
}


