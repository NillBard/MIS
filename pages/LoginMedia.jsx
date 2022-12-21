import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import s from "../styles/authoriztion.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useLoginMediaMutation } from "../store/media/mediaApi";
import { useRouter } from "next/router";

export default function Login() {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [login, result] = useLoginMediaMutation();
  const { media } = useSelector((state) => state.media);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password && userLogin) {
      await login({ registrationNumber: +userLogin, password });
    }
  };

  useEffect(() => {
    media !== null ? router.push("/") : console.log("error");
  });

  return (
    <Card sx={{ padding: "30px" }}>
      <form className={s.auth_form}>
        <h1>Авторизация</h1>
        <div className={s.input_block}>
          <input
            type="number"
            placeholder="Enter registration number"
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
          Ещё не с нами?
          <Link href="/RegistrationMedia">Зарегестрируйтесь</Link>
        </p>
      </form>
    </Card>
  );
}
