import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>LifeOS</h1>
        <p>Your Student Life Companion</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <p className="forgot-password">
  Forgot Password?
</p>
      <div className="remember-me">
  <input type="checkbox" id="remember" />
  <label htmlFor="remember">Remember Me</label>
</div>

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
