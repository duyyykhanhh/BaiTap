import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      const resp = await axios.get('http://localhost:3002/users');
      const {data} = resp;
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
    // console.log(_users)
  } 
  return (
    <div className="App">
      Danh sach nguoi dung goi tu backend:
      {
        users.map(({fullName, gender}) => {
          return <p>Ho va ten: {fullName} - Gioi tinh: {gender}</p>
        })
      }
    </div>
  );
}

export default App;
