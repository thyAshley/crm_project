import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { LoginFormAttribute } from "./LoginForm.types";

const LoginForm: React.FC<LoginFormAttribute> = ({
  onChange,
  onSubmit,
  email,
  password,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email..."
                required
                onChange={onChange}
                value={email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password..."
                required
                onChange={onChange}
                value={password}
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!">Forget Password?</a>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
