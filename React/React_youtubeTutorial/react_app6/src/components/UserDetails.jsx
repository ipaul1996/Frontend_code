import React from 'react';
import { useState, useEffect } from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

const UserDetails = () => {
 
    const {userId} = useParams();
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(() => {

        async function getData() {
            const get = await fetch(
            `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
            );
    
            const res = await get.json();
            setData(res[0]);

        }
    
        getData();
    },[])

        return (
            <>
                <h4>Id : {data.id}</h4>
                <h4>Image: <a href={data.imageUrl}>{data.imageUrl}</a>  </h4>
                <h4>First Name: {data.firstName}</h4>
                <h4>LastName : {data.lastName}</h4>
                <h4>Email: {data.email}</h4>
                <h4>Contact: {data.contactNumber}</h4>
                <h4>Age: {data.age}</h4>
                <h4>DOB: {data.dob}</h4>
                <button onClick={() => setSearchParams({filter: "Active"})}>Active User</button>
                <button onClick={() => setSearchParams({})}>Reset Filters</button>
            </>
        )
    
}

export default UserDetails;