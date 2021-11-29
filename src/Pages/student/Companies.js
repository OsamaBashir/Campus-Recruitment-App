import React from 'react'
import Header from "../../components/Header";
import Cards from '../../components/Cards';
import { useSelector } from 'react-redux';
const Companies = () => {
    const state = useSelector((state) => state);
    const auth = state.auth;
   
  
    const role = auth?.users?.role;
    return (
        <div className="App">
            <Header />
            <h1>LIST OF COMPANIES HERE</h1>
            <Cards 
            name = {auth.users.name}
            emailAddress = {auth.users.email}
            description = {"description"}
            />
        </div>
    )
}

export default Companies
