import { Box, Typography } from "@mui/material";
import MediaList from "../Component/MediaList";

export default function MediaPage() {
  return (
    <Box sx={{ maxWidth: "1280px", margin: "40px auto 0" }}>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "100px" }}
      >
        Все медиа
      </Typography>
      <MediaList />
    </Box>
  );
}
