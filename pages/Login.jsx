import { Card } from "@mui/material";
import { useState } from "react";
import s from "../styles/authoriztion.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../store/user/userApi";

export default function Login() {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [login, result] = useLoginMutation();
  const { user } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user", userLogin, password);
    await login({ login: userLogin, password });
    console.log(user);
  };

  return (
    <Card sx={{ padding: "30px" }}>
      <form className={s.auth_form}>
        <h1>Авторизация</h1>
        <div className={s.input_block}>
          <input
            type="text"
            placeholder="Enter login"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={s.auth_button} onClick={handleSubmit}>
          Войти
        </button>
        <p>
          Ещё не с нами? <Link href="/Registration">Зарегестрируйтесь</Link>
        </p>
      </form>
    </Card>
  );
}
