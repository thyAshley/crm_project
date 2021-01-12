import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginForm, PasswordReset } from "../../containers";

import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggleLogin, setToggleLogin] = useState<boolean>(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="loginPage bg-info">
      <Jumbotron className="loginPage__form">
        {toggleLogin ? (
          <LoginForm
            onSubmit={onSubmitHandler}
            onChange={onChangeHandler}
            email={email}
            password={password}
            forgotPassword={setToggleLogin}
          />
        ) : (
          <PasswordReset forgotPassword={setToggleLogin} />
        )}
      </Jumbotron>
    </div>
  );
};

export default Login;
