import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section id="register">
          <div>
            <h2>Register</h2>
            <form id="register">
            <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <label htmlFor="email">Password:</label>
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <label htmlFor="email">Repeat Password:</label>
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p >Already registered? <Link to="/login">Login</Link></p>
            </form>
          </div>
        </section>
    )
}