import React, { useEffect, useState } from 'react';
import './NavBar.css';
import romeo_logo from '../Assets/romeo_logo2.svg'
import { useStateValue } from '../Context/StateProvider';
import { ApiService } from '../Services/ApiService';
import { actionType } from '../Context/Reducer';



export const NavBar =()=> {
    const [state, dispatch] = useStateValue();
    const [length, setLength] = useState(100);
    const [usersList, setUsersList] = useState([])
    const [userIdList, setUserIdList] = useState([])
    const {SET_USERS_LIST} = actionType

    useEffect(()=>{
        // window.addEventListener('scroll', infiniteScroll)
        getUsers({length:length})
    },[])

    const handleSearch = (e) => {
        const name = e.target.name;
        let data = {
            name: name,
            length: length,
        }
        getUsers(data)
    }


    const getUsers = async (data)=>{
        try{           
            let response
            if (data?.name == 'distance' || data?.name =='activity' ) {
                let sortType
                if (data?.name == 'distance') {sortType = 'DISTANCE'}
                if (data?.name == 'activity') {sortType = 'ACTIVITY'}               
                response = await ApiService.searchUserWithSorting(data?.length,sortType)
            } else {
                response = await ApiService.searchUsers(data?.length);
            }
            console.log(response)
            if(response?.status == 200){
                if (response.data.items){           
                    let users = [ ...response.data.items]
                    let userIds = []
                    users.forEach((user,i)=>{
                        userIds.push(user.id)
                    })
                    getUserDetails(userIds)
                    setUserIdList(userIds)
                    setUsersList(users)                   
                    dispatch({type: SET_USERS_LIST, payload: users})           
                }
            } else {
                console.log(response.statusText)
            }       
        }catch(err){
            console.log(err)
        }
    }

    const getUserDetails = async(arr) => {
        try{
            let apiString = arr.join('&ids=')
            const response = await ApiService.getProfilesById(apiString)
            console.log(response)
            if(response?.status == 200){
                if (response.data){           
                    
                }
            } else {
                console.log(response.statusText)
            } 

        }catch(err){
            throw err
        }
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


