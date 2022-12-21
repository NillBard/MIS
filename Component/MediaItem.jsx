import { Box, Button, Card, Typography } from "@mui/material";
import { useToggleSubscribeMutation } from "../store/media/publicationsApi";

export default function MediaItem({ name, editor, subscriptionCount, id }) {
  const [toggleSubscribe] = useToggleSubscribeMutation();

  const handleToggle = async () => {
    console.log(id);
    await toggleSubscribe(id);
  };
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h5">
          {editor.firstName} {editor.lastName}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "end" }}>
          Подписки {subscriptionCount}
        </Typography>
        <Button
          sx={{ backgroundColor: "blue", color: "white" }}
          onClick={handleToggle}
        >
          Подписаться
        </Button>
      </Box>
    </Card>
  );
}
