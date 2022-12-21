import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import s from "../styles/authoriztion.module.css";
import Link from "next/link";
import { useRegisterMutation } from "../store/user/userApi";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [registration, result] = useRegisterMutation();

  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password && login && name && email) {
      await registration({
        login,
        password,
        email,
        name,
      });
    }
  };

  useEffect(() => {
    user !== null ? router.push("/") : console.log("error");
  });

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
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
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
          Зарегестрироваться
        </button>
        <p>
          Уже есть аккаунт? <Link href="/Login">Войдите</Link>
        </p>
      </form>
    </Card>
  );
}
