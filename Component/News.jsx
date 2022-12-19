import s from "../styles/news.module.css";
import NewsList from "./NewsList";

export default function () {
  return (
    <div className={s.container}>
      <NewsList />
    </div>
  );
}
