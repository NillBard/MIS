import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetAllSubscriptionQuery } from "../store/media/publicationsApi";
import MediaItem from "./MediaItem";
import Link from "next/link";
import s from "../styles/profile.module.css";

export default function SubscriptionList() {
  const { user } = useSelector((state) => state.user);

  const { data, isLoading, error } = useGetAllSubscriptionQuery(user?.data.id);

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
          <Typography variant="h4"> Empty subscriptions</Typography>
          <div className={s.button_wrapper}>
            <Link className={s.button} href={"/MediaPage"}>
              Перейти на страницу СМИ
            </Link>
          </div>
        </Box>
      )}
    </Box>
  );
}
