import React, { useState } from "react";
import "./styles.css";
import register from "../../icons/register.svg";
import { useHistory } from "react-router-dom";

const Register = ({ setToken, token }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  let history = useHistory();

  const redirectFunction = () => {
    return history.push("/login3");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password, name: name }),
    };
    const requestLogin = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch("http://localhost:3002/api/user/register", requestOptions).then(
      () => {
        return fetch("http://localhost:3002/api/user/login", requestLogin)
          .then((res) => res.text())
          .then((responsetoken) => setToken(responsetoken))
          .then(() => {
            if (token) {
              return redirectFunction();
            }
          });
      }
    );
  };

  return (
    <section className="register-section">
      <h1 className="register-title">Register a new account!</h1>
      <img src={register} alt="register" className="register-icon" />
      <section className="form-section">
        <form onSubmit={submitHandler}>
          <input
            className="register-input"
            value={name}
            placeholder="Type name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="register-input"
            value={email}
            placeholder="Type email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="register-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type password"
          />

          <button className="register-button" type="submit">
            Submit and register
          </button>
        </form>
      </section>
    </section>
  );
};

export default Register;
