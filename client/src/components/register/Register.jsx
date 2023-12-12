import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './register.css'

const RegisterKeys = {
  Email: "email",
  Username: "username",
  Password: "password",
  RepeatPassword: "repeat-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterKeys.Email]: "",
    [RegisterKeys.Username]: "",
    [RegisterKeys.Password]: "",
    [RegisterKeys.RepeatPassword]: "",
  });

  const notifyErrorMissingField = () => toast.error("All fields are required!")
  const notifyErrorPasswordsDontMatch = () => toast.error("Passwords do not match!")

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!values[RegisterKeys.Email] || !values[RegisterKeys.Password] || !values[RegisterKeys.Username] || !values[RegisterKeys.RepeatPassword]){
      notifyErrorMissingField();
      return;
    }

    if(values[RegisterKeys.Password] !== values[RegisterKeys.RepeatPassword]) {
      notifyErrorPasswordsDontMatch()
      return
    }

    onSubmit(e);
  };

  return (
    <section id="register-page" className="register-container">
      <form id="register" onSubmit={handleSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            values={values[RegisterKeys.Email]}
          />

          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            onChange={onChange}
            values={values[RegisterKeys.Username]}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            onChange={onChange}
            values={values[RegisterKeys.Password]}
          />

          <label htmlFor="con-pass">Repeat Password:</label>
          <input
            type="password"
            name="repeat-password"
            id="repeat-password"
            onChange={onChange}
            values={values[RegisterKeys.RepeatPassword]}
          />

          <input className="btn submit" type="submit" value="Register" />
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
              Already registered? <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
