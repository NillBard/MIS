import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useSelector } from "react-redux";
import TextItem from "../Component/TextItem";
import s from "../styles/profile.module.css";

export default function UserProfile() {
  const { user } = useSelector((state) => state.user);

  return (
    <Card
      sx={{
        maxWidth: 1000,
        display: "flex",
        flexDirection: "column",
        margin: "100px auto 0",
        padding: "20px",
      }}
    >
      <Typography variant="h3">Профиль</Typography>
      {user ? (
        <Box sx={{ display: "flex", alignItems: "center", paddingTop: "20px" }}>
          <Box
            sx={{
              height: 400,
              width: 400,
              background: 'url("/Avatar.png")',
              backgroundSize: "cover",
            }}
          ></Box>
          <Box sx={{ marginLeft: "40px" }}>
            <TextItem label="Логин:" content={user.data.login} />
            <TextItem label="E-mail:" content={user.data.email} />
            <TextItem label="ФИО:" content={user.data.name} />

            <div className={s.button_wrapper}>
              <Link className={s.button} href={"/SubscriptionPage"}>
                Перейти в подписки
              </Link>
            </div>
          </Box>
        </Box>
      ) : null}
    </Card>
  );
}
