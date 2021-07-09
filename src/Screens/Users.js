import React, {useEffect, useState} from 'react';
import { apiService } from '../Services/ApiService';
import romeo_img from '../Assets/romeo_img.svg'
import './Users.css'

export const  Users = () =>{
    const [length, setLength] = useState(39);
    const [users, setUsers] =useState([])

    useEffect(()=>{
        getUsers(length)
    },[])

    const getUsers = async(length)=>{
        try{
            const response = await apiService.searchUsers(length);
            console.log(response)
            if(response.status == 200){
                if (response.data.items){
                    let users = response.data.items
                    setUsers(users)
                }
            } else {
                console.log(response.statusText)
            }
        
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="users">
            <div className="userWrapper">
                <div className="userGrid">
                    {users? users.map((user, i)=>{return(

                    <div className="userContainer">
                        <div className="userImage">
                            <img src={user.picture?  user.picture.url : romeo_img} alt="Image is not available"/>
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


