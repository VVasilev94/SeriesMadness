import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterKeys = {
  Email: 'email',
  Password: 'password',
  RepeatPassword: 'repeat-password',
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
      [RegisterFormKeys.Email]: '',
      [RegisterFormKeys.Password]: '',
      [RegisterFormKeys.ConfirmPassword]: '',
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
                      placeholder="maria@email.com"
                      onChange={onChange}
                      values={values[RegisterKeys.Email]}
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
                      <span>Already registered? <Link to="/login">Login</Link></span>
                  </p>
              </div>
          </form>
      </section>
  );
}