import { Box, Button, Typography } from "@mui/material";
import { useGetNewsQuery } from "../store/news/newsApi";
import s from "../styles/news.module.css";
import NewsItem from "./NewsItem";
import Link from "next/link";

export default function NewsList() {
  const { data, isLoading, error } = useGetNewsQuery("");

  return (
    <div className={s.listNews}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4"> Список новостей пуст</Typography>
          <div className={s.button_wrapper}>
            <Link className={s.button} href={"/MediaPage"}>
              Перейти на страницу СМИ
            </Link>
          </div>
        </Box>
      )}
    </div>
  );
}
