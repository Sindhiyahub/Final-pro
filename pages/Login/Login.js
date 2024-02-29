import React from "react";
import { useState } from "react";

import { auth, provider } from "../../firebaseconfig";

import "./Login.css";
import logo from "../../assets/logo.png";
import googleLogo from "../../assets/google.png";

import { actionTypes } from "../../store/AuthContext/reducer";
import { useStateValue } from "../../store/AuthContext/authContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const loginButtonHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        navigate("/home", { replace: true });
      })
      .catch((error) => alert(error.message));
  };
  const [animatedClass, setAnimatedClass] = useState('');

  // Event handlers to toggle classes
  const handleSignUpClick = () => {
    setAnimatedClass('animated-signin');
  };

  const handleSignInClick = () => {
    setAnimatedClass('animated-signup');
  };

  return (
    <div>
      <div className={`wrapper ${animatedClass}`}>
      {/* Assuming these elements are elsewhere in your JSX */}
      <div className="link">
        <div class="wrapper">
        <div class="form-container sign-up">
            <form action="#">
                <h2>sign up</h2>
                <div class="form-group">
                    <input type="text" required/>
                    <i class="fas fa-user"></i>
                    <label for="">username</label>
                </div>
                <div class="form-group">
                    <input type="email" required/>
                    <i class="fas fa-at"></i>
                    <label for="">email</label>
                </div>
                <div class="form-group">
                    <input type="password" required/>
                    <i class="fas fa-lock"></i>
                    <label for="">password</label>
                </div>
                <div class="form-group">
                    <input type="password" required/>
                    <i class="fas fa-lock"></i>
                    <label for="">confirm password</label>
                </div>
                <button className="signup-link" onClick={handleSignUpClick}>Sign Up</button>
                <div class="link">
                    <p>You already have an account?<a href="#" class="signin-link"> sign in</a></p>
                </div>
            </form>
        
        <div class="form-container sign-in">
            <form action="#">
                <h2>login</h2>
                <div class="form-group">
                    <input type="text" required/>
                    <i class="fas fa-user"></i>
                    <label for="">username</label>
                </div>
                <div class="form-group">
                    <input type="password" required/>
                    <i class="fas fa-lock"></i>
                    <label for="">password</label>
                </div>
                <div class="forgot-pass">
                    <a href="#">forgot password?</a>
                </div>
                <button onClick={handleSignInClick}className="signin-link" >Sign In</button>
                <div class="link">
                    <p>Don't have an account?<a href="#" class="signup-link"> sign up</a></p>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>
      <div className="login__container">
        <img src={logo} alt="logo" />
        <button onClick={loginButtonHandler}>
          Login with Google
          <span>
            <img
              className="login__googleLogo"
              src={googleLogo}
              alt="Google Logo"
            />
          </span>
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Login;
