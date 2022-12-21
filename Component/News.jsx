import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "../styles/news.module.css";
import NewsList from "./NewsList";
import TodaysNewsList from "./TodaysNewsList";

export default function News() {
  const router = useRouter();
  const { media } = useSelector((state) => state.media);
  useEffect(() => {
    media !== null ? router.push("/MediaNewsPage") : null;
  });
  return (
    <div className={s.container}>
      <NewsList />
      <TodaysNewsList />
    </div>
  );
}
