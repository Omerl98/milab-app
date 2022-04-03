import "./login.css";
import appleIcon from "./assets/apple.svg";
import googleIcon from "./assets/google.svg";
import fbIcon from "./assets/facebook.svg";




function Login() {


    return (
        <div className="container">
            <img className="logo-img"/>

            <form className="login-form">
                <label>First Name</label>
                <input type="text" name="first-name"/>
                <label>Last Name</label>
                <input type="text" name="last-name"/>
                <label>Email Address</label>
                <input type="text" name="email"/>
                <label>Password</label>
                <input type="text" name="password"/>
                <button class="submit-button" type="submit">Join the hood</button>
            </form>
            <p className="line-text"><span>OR</span></p>
            <div className="social-nav">
                <img src={fbIcon} className="icon fb-icon" />
                <img src={googleIcon} className="icon google-icon" />
                <img src={appleIcon} className="icon apple-icon" />
            </div>
            <p className="sign-in-text">Already have an account? <a href="#">Sign in</a></p>
        </div>
    );
  }
  
  export default Login;