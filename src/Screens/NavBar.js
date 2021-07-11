import React, { useEffect, useState } from 'react';
import './NavBar.css';
import romeo_logo2 from '../Assets/romeo_logo2.svg';
import romeo_logo from '../Assets/romeo_logo.svg';
import romeo_img from '../Assets/romeo_img.svg'
import { useStateValue } from '../Context/StateProvider';
import { ApiService } from '../Services/ApiService';
import { actionType } from '../Context/Reducer';



export const NavBar =()=> {
    const [state, dispatch] = useStateValue();
    const [length, setLength] = useState(100);
    const [skelton, setSkleton] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [userIdList, setUserIdList] = useState([]);
    const {SET_USERS_LIST} = actionType

    useEffect(()=>{
        // window.addEventListener('scroll', infiniteScroll)
        showSkeleton(length)
        getUsers({length:length})
    },[])

    // showing skeleton while loading
    const showSkeleton = ()=>{
        let count = length
        let userList = []
        while(userList.length < usersList.length || count >0){
            let data = {picture:{url:romeo_img }}
            userList.push(data)
            count--
        }
        dispatch({type: SET_USERS_LIST, payload: userList})
    }

    const handleSearch = (e) => {
        showSkeleton()
        const name = e.target.name;
        let data = {
            name: name,
            length: length,
        }
        getUsers(data)
    }

    //  get user list by length
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
                    //  calling getUserDetails to fetch user detials bu their Ids
                    setUserIdList(userIds)
                    setUsersList(users)
                    getUserDetails(users, userIds)                          
                }
            } else {
                console.log(response.statusText)
            }       
        }catch(err){
            console.log(err)
        }
    }

    //  get User details based on their ids 
    const getUserDetails = async(usersList, arr) => {
        try{
            let apiString = arr.join('&ids=')
            const response = await ApiService.getProfilesById(apiString)

            if(response?.status == 200){
                console.log(response)
                if (response.data){
                    let res = response.data
                    let newUserList = [...usersList]
                    //  combining user details 
                    newUserList.map((user, i)=>{
                        let index = res.findIndex((usr)=>{
                            if(usr.id == user.id){
                                return usr
                            }
                        })
                        //  checking if the user exists
                        if (index > -1 ){
                            newUserList[i] = {...newUserList[i], ...res[index]}
                        }
                    })
                    setUsersList(newUserList)
                    dispatch({type: SET_USERS_LIST, payload: newUserList}) 
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
                        <li>                     
                            <a className="navbarOptions" ><img src={romeo_logo2} className="logo"/></a>
                        </li>
                        <li>                     
                            <a className="navbarOptions" ></a>
                        </li>
                        <li>                     
                            <a className="navbarOptions" ></a>
                        </li>
                    </ul>
                </div>
            </header>
        <div className="navbar">
                  
            <div className="navbarBig">
                <ul>
                    <li className="navbarList">                     
                            <a className="navbarOptions" ><img src={romeo_logo} className="logoMobile"/></a>
                    </li>
                    <li >                     
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


