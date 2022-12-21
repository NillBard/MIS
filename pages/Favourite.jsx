import { Typography, Box } from "@mui/material";
import FavouriteList from "../Component/FavouritesList";
import s from "../styles/news.module.css";

export default function Favourite() {
  return (
    <Box sx={{ maxWidth: "1280px", margin: "40px auto" }}>
      <Typography
        sx={{ textAlign: "center", maxWidth: "1280px", marginBottom: "50px" }}
        variant="h3"
      >
        Избранные новости
      </Typography>
      <FavouriteList />
    </Box>
  );
}
