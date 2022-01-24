import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginStatus from "../../Redux/Actions";
import axios from "axios";

const LoginForm = (props) => {
  // const status = props.lStatus;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user={email,password}
    axios.post("http://localhost:8080/login",user)
         .then((res)=>{
          console.log(res);
          navigate("/home");
          props.logStatus("true");
         }).catch(err=>console.log(err))
    // if (email ==="prajwal@gmail.com" && password === "12345") {
    // }
  };

  return (
    <div id="form-div">
      <form id="form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="submit"
          label="button"
          value="Login"
          style={{ margin: "10px" }}
        />
        <p>
          not registered!!<Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    lStatus: state.status
  };
};
const mapDispatchTOProps = (dispatch) => {
  return {
    logStatus: (val) => {
      dispatch(loginStatus(val));
    }
  };
};

export default connect(mapStateToProps, mapDispatchTOProps)(LoginForm);
