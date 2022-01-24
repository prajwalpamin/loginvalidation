import { Link } from "react-router-dom";
import loginStatus from "../Redux/Actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    props.logStatus(false);
  };

  return (
    <nav
      className="navbar  navbar-light bg-light"
      style={({ position: "Fixed" }, { width: "100%" })}
    >
      <Link to="/" className="navbar-brand">
        Navbar
      </Link>

      {props.lStatus ? (
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        ""
      )}
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    lStatus: state.status
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logStatus: (payload) => {
      dispatch(loginStatus(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);