import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import Input from "../../components/Input";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const state = useSelector((state) => state);
  const history = useHistory();
  const auth = state.auth;

  const role = auth?.users?.role;
  const handleSave = () => {
    history.push("./companies");
  };

  return (
    <div>
      <Header />
      <div className="App Profile">
        <Form>
          <Input
            label="Full name"
            value={auth.users.name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            required={true}
            value={auth.users.email}
            onCange={(e) => setEmail(e.target.value)}
          />
          <label>Brief Profile</label>
          <textarea
            class="form-control"
            rows="4"
            id="Input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            className="Disable"
            placeholder={`Signed in as ${auth?.users?.role} `}
          />

          <Button className="Button" variant="primary" onClick={handleSave}>
            Save changes
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
