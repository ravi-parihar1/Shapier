import { React, useState, useEffect } from 'react'
import '../../css/LoginPage.css'
import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import logo from '../../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://13.232.110.226:5000/api/v1/register",
        {
          username,
          email,
          mobile: phoneNumber,
          password
        }
      );
      const { token } = response.data;
      localStorage.setItem("data", JSON.stringify(response.data));
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      if (response.data.code === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://13.232.110.226:5000/api/v1/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("data", JSON.stringify(response.data));
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      <div className={`login-container ${isSignUp ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <div className="shapier-name">
                <img src={logo} height={"70rem"} width={"70rem"} alt="" />
                <h2 className="title">Sign in</h2>
                {/* <h4 style={{ margin: "5%", fontWeight: "600" }}>SHAPIER</h4> */}
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                {/* <CiUser /> */}
                <input
                  type="email"
                  placeholder='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Login" className="login-btn1 solid" onClick={handleSignIn} />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <BsFacebook />
                </a>

                <a href="#" className="social-icon">
                  <FcGoogle />
                </a>

              </div>
            </form>
            <form action="#" className="sign-up-form">
              <div className="shapier-name">
                <img src={logo} height={"50rem"} width={"50rem"} alt="" />
                <h2 className="title">Sign up</h2>
                {/* <h4 style={{ margin: "5%", fontWeight: "600" }}>SHAPIER</h4> */}
              </div>

              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <input type="submit" className="login-btn1" value="Sign up" onClick={handleSignUp} />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">

                <a href="#" className="social-icon">
                  <FcGoogle />
                </a>
                <a href="#" className="social-icon">
                  <BsFacebook />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">

            <div className="content1">

              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button className="login-btn transparent" onClick={toggleMode}>
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content1">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="login-btn transparent" onClick={toggleMode}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
