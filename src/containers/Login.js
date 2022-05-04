import React, { useState } from 'react';
import { user } from '../data/users';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const { username, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = user.find(u => u.username === username && u.password === password);
    if(userFound){
      navigate("../",{ replace: true });
      const infoUserFound = JSON.stringify(userFound);
      localStorage.setItem('loggedUser',infoUserFound);
    }else {
      alert('Usuario NO existe');
    }
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputusername">User Name</label>
        <input name="username" onChange={handleFormChange} value={username}  type="text" className="form-control" id="exampleInputusername" ariaDescribedby="usernameHelp" placeholder="Enter User Name"/>
          <small id="usernameHelp" className="form-text text-danger">User Name format is not valid</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input name="password" onChange={handleFormChange} value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;