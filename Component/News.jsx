import s from "../styles/news.module.css";
import NewsList from "./NewsList";
import TodaysNewsList from "./TodaysNewsList";

export default function News() {
  return (
    <div className={s.container}>
      <NewsList />
      <TodaysNewsList />
    </div>
  );
}
