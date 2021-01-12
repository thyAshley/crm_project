import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { PasswordResetAttribute } from "./PasswordReset.types";

const PasswordReset: React.FC<PasswordResetAttribute> = ({
  forgotPassword,
}) => {
  const [email, setEmail] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => forgotPassword((prev) => !prev)}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordReset;
