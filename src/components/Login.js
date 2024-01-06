import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form style={{ maxWidth: "300px", margin: "auto" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleLogin}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
