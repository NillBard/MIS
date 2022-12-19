import { Card } from "@mui/material";
import s from "../styles/news.module.css";

export default function NewsItem({ img, description, title }) {
  return (
    <Card className={s.news__item}>
      <img className={s.wrapper} src={img} />
      <div className={s.news__info}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Card>
  );
}
