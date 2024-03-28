import React, { useState } from "react";
import { Input } from "@/ui/input";
import { login, getUserData } from "@/services/apiFunctions";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/user/actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await login(username, password);
    loginUser(dispatch, userData);
    await getUserData();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={(e) => handleSubmit(e)} method="post">
        <Input
          type="text"
          placeholder="user name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
