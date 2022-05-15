import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUsers = () => {
    
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/users`,{
          method: "GET",
          headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=> {
            
            setUsers(data)})
    },[users])

    

    return (
        <div>
            <h1 className='text-xl text-center'>all users: {users.length}</h1>
            
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Number</th>
        <th>Email</th>
        <th>Options</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=><UserRow key={user._id} user={user} index={index}></UserRow>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;