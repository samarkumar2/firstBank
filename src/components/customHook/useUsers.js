import React, { useEffect, useState } from "react";

export default function useUsers(url) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
   const fetchUsers = async()=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
 
   }
       fetchUsers() 
  },[url])
  return {users,loading,error};

}
