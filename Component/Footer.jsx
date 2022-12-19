import { Box } from "@mui/material";
import s from "../styles/footer.module.css";
import Instagram from "../styles/img/inst.png";

export default function Footer() {
  return (
    <Box className={s.footer}>
      <div className={s.footer__content}>
        <div className={s.society}>
          {/* <img src={Instagram} alt="Instagram" /> */}
          <div className={s.inst}></div>
          <div className={s.facebook}></div>
          <div className={s.vk}></div>
        </div>
        <Box className={s.info__block}>
          <div className={s.info__item}>
            <h4>Контактная информация</h4>
            <p>Обратная связь</p>
            <p>О нас</p>
          </div>
          <div className={s.info__item}>
            <h4>Юридическая информация</h4>
            <p>Пользовательское соглашение</p>
            <p>Условия использования и распространения контента</p>
          </div>
        </Box>
      </div>
    </Box>
  );
}
