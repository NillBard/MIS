import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMediaNewsQuery } from "../store/news/newsApi";
import NewsItem from "./NewsItem";

export default function MediaNewsList() {
  const { media } = useSelector((state) => state.media);
  const { data, isLoading, error } = useGetMediaNewsQuery(media?.data?.id);

  return (
    <Box sx={{ maxWidth: "1280px" }}>
      {data && data.data?.items?.length > 0 ? (
        data.data?.items?.map((el) => (
          <NewsItem
            key={el.id}
            id={el.id}
            description={el.text}
            title={el.title}
            img={el.img || ""}
            favourite={el.isFavorite}
            isMedia={true}
          />
        ))
      ) : (
        <Typography
          variant="h5"
          sx={{ textAlign: "center", maxWidth: "1280px" }}
        >
          Empty list
        </Typography>
      )}
    </Box>
  );
}
