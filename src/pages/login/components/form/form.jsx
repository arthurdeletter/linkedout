import { useCallback, useEffect, useState } from "react";
import { Button, TextInput } from "../../../../ui";
import "./form.css";
import { form } from "../../form-types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  SignInUser,
  signUpUser,
} from "../../../../features/user/user-slice";
import { useNavigate } from "react-router-dom";

export const Form = ({ type, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setregisterData] = useState({
    username: "",
    email: "",
    picture: "",
    password: "",
  });

  useEffect(() => {
    if (user !== null && !loading) {
      navigate("/");
    }
  }, [navigate, user, loading]);

  const handleLogin = useCallback(
    (e) => {
      setLoading(true);
      e.preventDefault();
      dispatch(SignInUser(loginData));
      setLoading(false);
    },
    [loginData, dispatch]
  );

  const handleRegister = useCallback(
    (e) => {
      setLoading(true);
      e.preventDefault();
      dispatch(signUpUser(registerData));
      setLoading(false);
    },
    [registerData, dispatch]
  );

  if (type === form.LOGIN) {
    return (
      <form className="form" onSubmit={handleLogin}>
        <h1>{title}</h1>
        <TextInput
          label="Email"
          name="email"
          id="email"
          value={loginData.email}
          required
          onChange={(e) =>
            setLoginData((current) => ({ ...current, email: e.target.value }))
          }
        />
        <TextInput
          label="Password"
          name="password"
          id="password"
          type="password"
          value={loginData.password}
          required
          onChange={(e) =>
            setLoginData((current) => ({
              ...current,
              password: e.target.value,
            }))
          }
        />
        <Button text="Log in" variant="primary" type="submit" />
      </form>
    );
  }

  return (
    <form className="form" onSubmit={handleRegister}>
      <h1>{title}</h1>
      <TextInput
        label="Username"
        name="username"
        id="username"
        value={registerData.username}
        required
        onChange={(e) =>
          setregisterData((current) => ({
            ...current,
            username: e.target.value,
          }))
        }
      />
      <TextInput
        label="Email"
        name="email"
        id="email"
        value={registerData.email}
        required
        onChange={(e) =>
          setregisterData((current) => ({ ...current, email: e.target.value }))
        }
      />
      <TextInput
        label="Profile picture URL"
        name="pictureUrl"
        id="pictureUrl"
        value={registerData.picture}
        onChange={(e) =>
          setregisterData((current) => ({
            ...current,
            picture: e.target.value,
          }))
        }
      />
      <TextInput
        label="Password"
        name="password"
        id="password"
        type="password"
        value={registerData.password}
        required
        onChange={(e) =>
          setregisterData((current) => ({
            ...current,
            password: e.target.value,
          }))
        }
      />
      <Button text="Create account" variant="primary" type="submit" />
    </form>
  );
};
