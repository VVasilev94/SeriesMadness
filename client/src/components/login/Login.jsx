import { Link } from "react-router-dom";



export default function Login() {
  return (
    <section id="login-page">
      <form id="login">
        <div >
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
           
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
