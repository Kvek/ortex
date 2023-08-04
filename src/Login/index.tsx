/* eslint-disable no-nested-ternary */
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
  MessageContainer,
  Header3,
} from "./Login.styles";
import classNames from "classnames";

const disabledRegexStrTest = (str: string) =>
  !/^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/.test(str);

export const Login = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [displayMessage, setDisplayMessage] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [showPasswordInput, setshowPasswordInput] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [resetEmail, setResetEmail] = useState("");

  const { email, password } = credentials;

  const togglePasswordIcon = passwordHidden ? (
    <EyeCloseIcon width={16} onClick={() => setPasswordHidden((p) => !p)} />
  ) : (
    <EyeOpenIcon width={16} onClick={() => setPasswordHidden((p) => !p)} />
  );

  const updateCredentialHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = e;

    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const updateShowPasswordInputHanlder = () => {
    setshowPasswordInput(!!email);
  };

  const passwordResetHandler = () => {
    setDisplayMessage("Reset email sent. Please check your inbox.");
  };

  const toggleResetForm = (status: boolean) => {
    setShowResetForm(status);
  };

  useEffect(() => {
    if (email) {
      /**
       * resetting password on email change
       */
      if (password) {
        setCredentials((prev) => ({ ...prev, password: "" }));
      }
    } else {
      /**
       * hide password field on email deletion
       */
      setshowPasswordInput(!!email);
    }
  }, [email]);

  const resetForm = (
    <div>
      <Input
        name="resetEmail"
        value={resetEmail}
        placeholder="Email"
        id="resetEmail"
        type="email"
        label="Enter the Email associated with your account"
        iconBefore={<UserIcon height={16} />}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          setResetEmail(value)
        }
      />
    </div>
  );

  const forms = showResetForm ? (
    resetForm
  ) : (
    <>
      <form>
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
    </>
  );

  const message = <MessageContainer>{displayMessage}</MessageContainer>;

  return (
    <LoginContainer>
      <LoginFormWrapper>
        <LoginFormContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Header3>{showResetForm ? "Reset Password" : "Log in"}</Header3>

          <InputContainer
            className={classNames({
              ["showPasswordInput"]: showPasswordInput,
              ["hidePasswordInput"]: !showPasswordInput,
            })}
          >
            {displayMessage ? message : forms}
          </InputContainer>

          <ButtonContainer>
            {!displayMessage &&
              (!showResetForm ? (
                <>
                  <Button
                    $buttonType={!password ? "disabled" : "primary"}
                    className={classNames({
                      ["showLogin"]: !showPasswordInput,
                    })}
                    onClick={() => setDisplayMessage("Successfully logged in!")}
                  >
                    Login
                    <LoginIcon height={14} />
                  </Button>

                  {!showPasswordInput && (
                    <Button
                      $buttonType={
                        disabledRegexStrTest(email) ? "disabled" : "primary"
                      }
                      onClick={updateShowPasswordInputHanlder}
                      className={"continue"}
                    >
                      Continue
                      <ContinueIcon height={10} />
                    </Button>
                  )}

                  <Button
                    onClick={() => toggleResetForm(true)}
                    $buttonType={"primary-outlined"}
                  >
                    Forgot password
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={passwordResetHandler}
                    $buttonType={
                      disabledRegexStrTest(resetEmail) ? "disabled" : "primary"
                    }
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={() => toggleResetForm(false)}
                    $buttonType={"error"}
                  >
                    Cancel
                  </Button>
                </>
              ))}
          </ButtonContainer>
        </LoginFormContainer>
      </LoginFormWrapper>
    </LoginContainer>
  );
};
