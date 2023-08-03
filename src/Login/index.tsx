/* eslint-disable no-nested-ternary */
import { ChangeEvent, useEffect, useState } from "react";
import {
  ContinueIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  LoginIcon,
  PasswordIcon,
  ResetIcon,
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

  const toggleResetForm = () => {
    setShowResetForm(true);
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
      <div>
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
      </div>
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

          <InputContainer
            className={classNames({
              ["showPasswordInput"]: showPasswordInput,
              ["hidePasswordInput"]: !showPasswordInput,
            })}
          >
            {displayMessage ? message : forms}
          </InputContainer>

          <ButtonContainer>
            {!showResetForm ? (
              <>
                <Button
                  $buttonType={!password ? "disabled" : "primary"}
                  className={classNames({ ["showLogin"]: !showPasswordInput })}
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

                <Button onClick={toggleResetForm}>
                  Reset password
                  <ResetIcon height={14} />
                </Button>
              </>
            ) : !displayMessage ? (
              <Button
                onClick={passwordResetHandler}
                $buttonType={
                  disabledRegexStrTest(resetEmail) ? "disabled" : "primary"
                }
              >
                Continue with password reset
                <ContinueIcon height={10} />
              </Button>
            ) : null}
          </ButtonContainer>
        </LoginFormContainer>
      </LoginFormWrapper>
    </LoginContainer>
  );
};
