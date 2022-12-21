import { Box, Divider, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function TodaysNewsItem({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "150px",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography>{title}</Typography>
        <Box>
          <ArrowForwardIcon sx={{ color: "blue" }} />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
