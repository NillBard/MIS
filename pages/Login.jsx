import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import s from "../styles/authoriztion.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../store/user/userApi";
import { useRouter } from "next/router";

export default function Login() {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [login, result] = useLoginMutation();
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password && userLogin) {
      await login({ login: userLogin, password });
    }
  };

  useEffect(() => {
    user !== null ? router.push("/") : console.log("error");
  });

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
