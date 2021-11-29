import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  label,
  className,
  type,
  placeholder,
  value,
  name,
  onChange,
  required,
  errorMessage,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        label={label}
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
      <Form.Text className="text-muted">{errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;
