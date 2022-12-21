import { Box, Typography } from "@mui/material";
import { useGetTodayNewsQuery } from "../store/news/todaysNewsApi";
import TodaysNewsItem from "./TodaysNewsItem";

export default function TodaysNewsList() {
  const { data, isLoading, error } = useGetTodayNewsQuery();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        minWidth: "200px",
        border: "5px solid",
        borderRadius: "20px",
        marginLeft: "30px",
        borderColor: "blue",
      }}
    >
      {data && data.data?.items?.length > 0 ? (
        data.data?.items?.map((el) => <TodaysNewsItem title={el.title} />)
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Свежих новостей нет
        </Typography>
      )}
    </Box>
  );
}
