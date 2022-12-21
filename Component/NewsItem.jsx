import { Box, Card, Button } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import s from "../styles/news.module.css";
import {
  useGetFavouriteQuery,
  useToggleFavouritesMutation,
} from "../store/news/newsApi";
import CircularProgress from "@mui/material/CircularProgress";

export default function NewsItem({ img, description, title, id, favourite }) {
  const [toggleFavourite, { isLoading }] = useToggleFavouritesMutation();

  const handleToggle = async (e) => {
    e.preventDefault();
    await toggleFavourite(id);
  };

  return (
    <Card className={s.news__item}>
      <Box>
        <img className={s.wrapper} src={img} />
        <div className={s.news__info}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </Box>

      <Button
        sx={{
          position: "absolute",
          zIndex: 5,
          right: "20px",
          bottom: "10px",
          color: favourite ? "red" : "blue",
        }}
        onClick={handleToggle}
      >
        {isLoading ? <CircularProgress /> : <ThumbUpOffAltIcon />}
      </Button>
    </Card>
  );
}
