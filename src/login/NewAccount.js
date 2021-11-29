import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assests/images/logo.png";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import fetchUsersSuccess from "../Actions";

const NewAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    if (name && email && password && role) {
      e.preventDefault();

      const user = { name, email, password, role };

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
              label="Full name"
              type={name}
              placeholder="enter full name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              type={email}
              placeholder="enter email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="textinput">
            <Input
              label="Password"
              type={password}
              placeholder="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirm Password"
              type={password}
              placeholder="Confirm password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="btn-primary" onClick={handleLogin}>
            Signin
          </Button>
          <Link className="link" to="/signin">
            Already have an account ?{" "}
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default NewAccount;
