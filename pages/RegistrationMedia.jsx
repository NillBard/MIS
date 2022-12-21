import { Card, Box } from "@mui/material";
import { useEffect, useState } from "react";
import s from "../styles/authoriztion.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRegisterMutation } from "../store/media/mediaApi";
import { useRouter } from "next/router";

export default function RegistrationMeida() {
  const [regNumber, setRegNumber] = useState();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");

  const [registration, result] = useRegisterMutation();
  const { media } = useSelector((state) => state.media);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password && regNumber && name && email && firstName && lastName) {
      await registration({
        registrationNumber: regNumber,
        password,
        email,
        name,
        editor: { firstName, lastName },
      });
    }
  };

  useEffect(() => {
    media !== null ? router.push("/") : console.log("error");
  });

  return (
    <Card sx={{ padding: "30px" }}>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Регистрация нового СМИ</h1>
          <Box
            className={s.media_input}
            sx={{
              justifyContent: "space-between",
              margin: "20px 0 50px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              type="number"
              placeholder="Enter registration number"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box sx={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Enter redactor's first name "
                value={firstName}
                onChange={(e) => setFirsName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter redactor's last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <button className={s.auth_button} onClick={handleSubmit}>
            Зарегестрироваться
          </button>
          <p>
            Уже зарегестрированы?
            <Link href="/LoginMedia">Войдите</Link>
          </p>
        </Box>
      </form>
    </Card>
  );
}
