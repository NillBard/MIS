import { Card } from "@mui/material";
import { useState } from "react";
import s from "../styles/authoriztion.module.css";
import Link from "next/link";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name, login);
  };
  return (
    <Card sx={{ padding: "30px" }}>
      <form className={s.reg_form}>
        <h1>Регистрация</h1>
        <div className={s.reg_input_block}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
          Уже есть аккаунт? <Link href="/Login">Войдите</Link>
        </p>
      </form>
    </Card>
  );
}
