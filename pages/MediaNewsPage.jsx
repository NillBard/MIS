import { Typography, Box } from "@mui/material";
import MediaNewsList from "../Component/MediaNewsList";

export default function MediaNewsPage() {
  return (
    <Box sx={{ maxWidth: "1280px", margin: "40px auto" }}>
      <Typography
        sx={{ textAlign: "center", maxWidth: "1280px", marginBottom: "50px" }}
        variant="h3"
      >
        Новости нашего издания
      </Typography>
      <MediaNewsList />
    </Box>
  );
}
