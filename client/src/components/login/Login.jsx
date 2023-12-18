import { Link } from "react-router-dom";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./login.css";

const LoginKeys = {
  Email: "email",
  Username: 'username',
  Password: "password",

};

export default function Login() {
  
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginKeys.Email]: "",
    [LoginKeys.Username]: "",
    [LoginKeys.Password]: "",
  });

  const notifyError = () => toast.error("All fields are required!")

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!values[LoginKeys.Email] || !values[LoginKeys.Password] || !values[LoginKeys.Username]) {
      notifyError();
      return;
    }

    onSubmit(e);
  };

  return (
    <section id="login-page">
      <form id="login" onSubmit={handleSubmit}>
        <div>
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            onChange={onChange}
            value={values[LoginKeys.Email]}
          />

          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="username"
            onChange={onChange}
            value={values[LoginKeys.Username]}
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={onChange}
            value={values[LoginKeys.Password]}
          />
          <input type="submit"  value="Login" />
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <p className="field">
            <span>
              If you don't have profile click <Link to="/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
