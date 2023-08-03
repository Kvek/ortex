import { ChangeEvent, useEffect, useState } from "react";
import {
  ContinueIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  LoginIcon,
  PasswordIcon,
  UserIcon,
} from "../Icons";
import { Input } from "../Input";
import { Logo } from "../Logo";

import {
  LoginContainer,
  LoginFormContainer,
  ButtonContainer,
  InputContainer,
  LogoContainer,
  LoginFormWrapper,
  Button,
} from "./Login.styles";
import classNames from "classnames";

export const Login = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [showPasswordInput, setshowPasswordInput] = useState(false);
  const [credentials, serCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;
  const disabled = !/^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/.test(email);

  const togglePasswordIcon = passwordHidden ? (
    <EyeCloseIcon width={16} onClick={() => setPasswordHidden((p) => !p)} />
  ) : (
    <EyeOpenIcon width={16} onClick={() => setPasswordHidden((p) => !p)} />
  );

  const updateCredentialHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = e;

    serCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const updateShowPasswordInputHanlder = () => {
    setshowPasswordInput(!!email);
  };

  useEffect(() => {
    if (email) {
      /**
       * resetting password on email change
       */
      if (password) {
        serCredentials((prev) => ({ ...prev, password: "" }));
      }
    } else {
      /**
       * hide password field on email deletion
       */
      setshowPasswordInput(!!email);
    }
  }, [email]);

  return (
    <LoginContainer>
      <LoginFormWrapper>
        <LoginFormContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <InputContainer
            className={classNames({
              ["showPasswordInput"]: showPasswordInput,
              ["hidePasswordInput"]: !showPasswordInput,
            })}
          >
            <form onSubmit={console.log}>
              <Input
                name="email"
                value={email}
                placeholder="Enter Email"
                id="email"
                type="email"
                label="email"
                iconBefore={<UserIcon height={16} />}
                onChange={updateCredentialHandler}
              />

              <div
                className={classNames({
                  ["showPasswordInput"]: showPasswordInput,
                  ["hidePasswordInput"]: !showPasswordInput,
                })}
              >
                <Input
                  focus={showPasswordInput}
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  label="password"
                  id="password"
                  type={passwordHidden ? "password" : "text"}
                  iconBefore={<PasswordIcon height={16} />}
                  iconAfter={password && togglePasswordIcon}
                  onChange={updateCredentialHandler}
                />
              </div>
            </form>
          </InputContainer>

          <ButtonContainer>
            <Button
              disabled={!password}
              className={classNames({ ["showLogin"]: !showPasswordInput })}
            >
              Login
              <LoginIcon height={14} />
            </Button>

            {!showPasswordInput && (
              <Button
                $buttonType={disabled ? "disabled" : "primary"}
                onClick={updateShowPasswordInputHanlder}
                className={"continue"}
              >
                Continue
                <ContinueIcon height={10} />
              </Button>
            )}
          </ButtonContainer>
        </LoginFormContainer>
      </LoginFormWrapper>
    </LoginContainer>
  );
};
