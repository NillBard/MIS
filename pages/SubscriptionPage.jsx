import { Box, Typography } from "@mui/material";
import SubscriptionList from "../Component/SubscriptionList";

export default function SubscriptionPage() {
  return (
    <Box sx={{ maxWidth: "1280px", margin: "40px auto 0" }}>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "50px" }}
      >
        Мои подписки
      </Typography>
      <SubscriptionList></SubscriptionList>
    </Box>
  );
}
