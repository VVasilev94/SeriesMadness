import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

// import './register.css'

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
    [RegisterKeys.ConfirmPassword]: "",
  });

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
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
