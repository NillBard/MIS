import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetAllMediaQuery } from "../store/media/publicationsApi";
import MediaItem from "./MediaItem";

export default function MediaList() {
  const { data, isLoading, error } = useGetAllMediaQuery();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        "loading"
      ) : data.data?.items?.length > 0 ? (
        data.data?.items?.map((subscription) => (
          <MediaItem
            key={subscription.id}
            id={subscription.id}
            name={subscription.name}
            editor={subscription.editor}
            subscriptionCount={subscription.subscriptionCount}
          />
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4"> Empty media</Typography>
        </Box>
      )}
    </Box>
  );
}
