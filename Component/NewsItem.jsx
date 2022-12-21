import { Box, Card, Button, Modal, Typography, TextField } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import s from "../styles/news.module.css";
import {
  useToggleFavouritesMutation,
  useUpdateImageMutation,
} from "../store/news/newsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_NEWS_URL } from "../utils/constants";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewsItem({
  description,
  title,
  id,
  favourite,
  isMedia,
}) {
  const [toggleFavourite, { isLoading }] = useToggleFavouritesMutation();
  const [updateImage, { isLoadingUpdate }] = useUpdateImageMutation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleToggle = async (e) => {
    e.preventDefault();
    await toggleFavourite(id);
  };

  const img = `${BASE_NEWS_URL}/${id}/image`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(id);
    await updateImage({ formData, newsId: id });
    handleClose();
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

      {isMedia ? (
        <Button
          sx={{
            position: "absolute",
            zIndex: 5,
            right: "20px",
            bottom: "10px",
          }}
          onClick={handleOpen}
        >
          <BrowserUpdatedIcon sx={{ fontSize: 50 }} />
        </Button>
      ) : (
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
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmit}>
            <Box>
              <Typography variant="h3">Обновить картинку</Typography>

              <TextField sx={{ marginTop: "20px" }} name="file" type="file" />

              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "20px" }}
              >
                Обновить картинку
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Card>
  );
}
