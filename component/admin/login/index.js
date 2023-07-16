import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { setCookie } from "../../../libs/cookie.lib";
import LoginStyles from "../../admin/login/Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/login", {
        username,
        password,
      })
      .then((response) => {
        const data = response.data;
        if (data.message === "Login success" && data.user.token) {
          Swal.fire(
            "Login Success!",
            "Login Success Redirected in 3 seconds!",
            "success"
          );
          setCookie("token", data.user.token, 1);
          router.push("/admin/admin");
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setError(error.response.data.error);
        } else if (error.response && error.response.status === 500) {
          setError("Internal Server Error");
        } else {
          setError("An error occurred. Please try again later.");
        }
        setLoading(false);
      });
  };

  return (
    <div className={LoginStyles.formsignin}>
      <main className="text-center mt-5">
        <div
          className={`alert alert-${
            error.includes("successfully") ? "success" : "danger"
          } alert-dismissible fade ${error === "" ? "" : "show"}`}
          role="alert"
        >
          {error}
        </div>
        <form onSubmit={handleLogin}>
          <img
            src="/rs.png"
            alt="logo"
            srcSet=""
            className={LoginStyles.image}
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
