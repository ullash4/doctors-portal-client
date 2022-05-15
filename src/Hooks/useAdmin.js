import { useEffect, useState } from "react";


const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const {email} = user;
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/admin/${email}`,{
                method: "GET",
                headers:{
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data=>{
                setAdmin(data.admin)
            })
        }
    },[user])
    return [admin]
};

export default useAdmin;