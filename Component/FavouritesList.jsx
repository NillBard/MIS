import { Typography, Box } from "@mui/material";
import { useGetFavouriteQuery } from "../store/news/newsApi";
import NewsItem from "./NewsItem";

export default function FavouriteList() {
  const { data, isLoading, error } = useGetFavouriteQuery();

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
