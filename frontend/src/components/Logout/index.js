import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/actions/authAction";

export default function FunctionalLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ email, password }),
    };
    const url = "http://0.0.0.0:8000/backend/api/auth/token/";
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        dispatch(authAction(data.access));
        localStorage.setItem("token", data.access);
      });
  };

  return (
    <section>
      <h2>Functional Login Example</h2>
      <form>
        <input type="text" value={email} placeholder="email" />
        <input type="password" value={password} placeholder="password" />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </section>
  );
}
