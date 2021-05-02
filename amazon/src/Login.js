import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (event) => {
    event.preventDefault(); //Stop the refresh!
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault(); //Stop the refresh!
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("./");
        //create a user and log in
        // return authUser.user.updateProfile({
        //   displayName: username,
        // });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      {" "}
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
