import React from "react";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assests/images/logo.png";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/Input";
import fetchUsersSuccess from "../Actions";
import { useDispatch } from "react-redux";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    if (email && password && role) {
      e.preventDefault();

      const user = { email, password, role };

      dispatch(fetchUsersSuccess(user));
      history.push("/vacancies");
    }
  };

  return (
    <div className="App App-header">
      <div className="wrapper">
        <img className="img" src={logo} alt="" />
        <Form>
          <div className="textinput">
            <Input
              label="Email"
              type="email"
              placeholder="enter email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Form.Check
            inline
            label="Student"
            name="group1"
            type="radio"
            id={`inline1`}
            value="student"
            onClick={() => setRole("student")}
          />
          <Form.Check
            inline
            label="Company"
            name="group1"
            type="radio"
            id={`inline2`}
            value="company"
            onClick={() => setRole("company")}
          />
          <div className="login">
            <Button className="btn-primary" onClick={handleLogin}>
              Login
            </Button>
            <Link className="link" to="/signup">
              Don't have an account ?{" "}
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Loginpage;
