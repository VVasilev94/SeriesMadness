import { Link } from "react-router-dom";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import './login.css'

const LoginKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginKeys.Email]: '',
        [LoginKeys.Username]: '',
        [LoginKeys.Password]: '',
    });

  return (
    <section id="login-page">
      <form id="login" onSubmit={onSubmit}>
        <div >
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={LoginKeys.Email}
            placeholder="email"
            onChange={onChange}
            value={values[LoginKeys.Email]}
          />

<label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            name={LoginKeys.Username}
            placeholder="username"
            onChange={onChange}
            value={values[LoginKeys.Username]}
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="password"
            name={LoginKeys.Password}
            placeholder="password"
            onChange={onChange}
            value={values[LoginKeys.Password]}
           
          />
          <input type="submit" value="Login" />
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
