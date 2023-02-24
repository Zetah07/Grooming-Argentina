import useAuth from "../../../hooks/useAuth";
import React from "react";
import { useState, useEffect } from "react";
import axios from "../../../api/axios";
import {  useNavigate, useLocation } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";


const LOGIN_URL = "/auth/login";

const TestPage = () => {
  const logout = useLogout()
  const { setAuth } = useAuth();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleLogOut = async()=>{
    await logout()
    alert("Log out completed")
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const rol = response?.data?.roles
      setAuth({ user, pwd, accessToken, rol});
      setPwd("");
      setUser("");
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No server response");
      } else if (error.response?.status === 400) {
        setErrMsg("missing username or password");
      } else if (error.response?.status === 402) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
    }
  };
  return (
    <div>
      <h1>Test page</h1>
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          value={user}
          autoComplete="off"
          onChange={(event) => setUser(event.target.value)}
          required
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={pwd}
          onChange={(event) => setPwd(event.target.value)}
          required
        />
        <button>Sign in</button>
      </form>
      <br/>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
};
export default TestPage;
