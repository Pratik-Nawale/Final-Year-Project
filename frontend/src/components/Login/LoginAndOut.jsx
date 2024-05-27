// Import necessary dependencies and styles
import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

// Functional component for Login and Signup
const LoginAndOut = () => {
  // State variables (commented out for now)
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [signupEmail, setSignUpEmail] = useState("");
  // const [signupPassword, setSignUpPassword] = useState("");
  // const [signupName, setSignUpName] = useState("");
  // const [signupUserName, setSignUpUserName] = useState("");

  const navigate = useNavigate();

  const [signUpData, setsignUpData] = useState({
    fullName: "",
    username: "",
    email: "",
    role: "",
    password: "",
  });

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setsignUpData({
      ...signUpData,
      [name]: value,
    });
  };
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleloginChange = (event) => {
    const { name, value } = event.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  // Commented out hooks and functions for handling form submissions
  // const navigate = useNavigate();
  const signUpHandler = async (e) => {
    e.preventDefault();
    // console.log(signUpData);
    try {
      const res = await axios.post(`/api/user/signup`, signUpData);
      if (res.data.success) {
        message.success("Register Successfully!");
        // navigate("/login");
        document.querySelector(".Login-wrapper").classList.add("active");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    // console.log(loginData);
    try {
      const res = await axios.post("/api/user/login", loginData);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <div id="Login-box-form">
      <div id="login-body">
        <section className="Login-wrapper">
          <div
            className="Login-form"
            id="signup"
            onClick={() => {
              document
                .querySelector(".Login-wrapper")
                .classList.remove("active");
            }}
          >
            <header
              onClick={() => {
                document
                  .querySelector(".Login-wrapper")
                  .classList.remove("active");
              }}
            >
              Signup
            </header>
            <form onSubmit={signUpHandler}>
              <input
                type="text"
                placeholder="Full name"
                required
                name="fullName"
                value={signUpData.fullName}
                onChange={handleSignUpChange}
                // onChange={(e) => {
                //   setSignUpName(e.target.value);
                // }}
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                name="number"
                value={signUpData.number}
                onChange={handleSignUpChange}
                // value={signupUserName}
                // onChange={(e) => {
                //   setSignUpUserName(e.target.value);
                // }}
              />
              <input
                type="text"
                placeholder="Email address"
                required
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                // value={signupEmail}
                // onChange={(e) => {
                //   setSignUpEmail(e.target.value);
                // }}
              />
              <select  type="text"
                placeholder="-- Select Role --"
                required
                name="role"
                value={signUpData.role}
                onChange={handleSignUpChange}>
                <option value="">-- select role --</option>
                <option value="student">Student</option>
                <option value="coach">Coach</option>
              </select>


              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                // value={signupPassword}
                // onChange={(e) => {
                //   setSignUpPassword(e.target.value);
                // }}
              />
              <input type="submit" value="Signup" />
            </form>
          </div>

          <div
            className="Login-form login"
            onClick={() => {
              document.querySelector(".Login-wrapper").classList.add("active");
            }}
          >
            <header
              onClick={() => {
                document
                  .querySelector(".Login-wrapper")
                  .classList.add("active");
              }}
            >
              Login
            </header>
            <form onSubmit={loginHandler}>
              <input
                type="text"
                placeholder="Email address"
                required
                name="email"
                value={loginData.email}
                onChange={handleloginChange}
                // value={loginEmail}
                // onChange={(e) => {
                //   setLoginEmail(e.target.value);
                // }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={loginData.password}
                onChange={handleloginChange}
                // value={loginPassword}
                // onChange={(e) => {
                //   setLoginPassword(e.target.value);
                // }}
              />

              <input
                type="submit"
                value="Login"
                //    onClick={loginHandler}
              />
            </form>
          </div>

          {/* 
          <script>
            const wrapper = document.querySelector(".wrapper"),
              signupHeader = document.querySelector(".signup header"),
              loginHeader = document.querySelector(".login header");

            loginHeader.addEventListener("click", () => {
              wrapper.classList.add("active");
            });
            signupHeader.addEventListener("click", () => {
              wrapper.classList.remove("active");
            });
          </script>
          */}
        </section>
      </div>

      {/* <div className="image-login">
        <div class="sign-up-class">
        <img class="login-img-class" src="./images/login/loginimg.png" alt="" />
        </div>
      </div> */}
    </div>
  );
};

// Export the LoginAndOut component as the default export
export default LoginAndOut;
