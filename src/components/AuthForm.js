import React, { useState } from "react";
import { authService } from "fbManager";

const AuthFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <div className="loginPage">
        <div className="login">
          <form onSubmit={onSubmit} className="login_form">
            <span className="login_form_span">Login</span>
            <input
              className="login_form_input"
              name="email"
              type="text"
              placeholder="Email-Address"
              required
              value={email}
              onChange={onChange}
            />
            <input
              className="login_form_input"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={onChange}
            />
            <input
              className="login_form_btn"
              type="submit"
              value={newAccount ? "Create Account" : "Login"}
            />
            {error}
          </form>
          <span onClick={toggleAccount} className="login_form_toggle">
            {newAccount ? ">> I want to Login" : ">> I want to Create Account"}
          </span>
        </div>
      </div>
    </>
  );
};

export default AuthFrom;
