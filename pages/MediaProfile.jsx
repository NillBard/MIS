import {
  Card,
  Typography,
  Modal,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextItem from "../Component/TextItem";
import s from "../styles/profile.module.css";
import { createNews, updateImage } from "./api/newsAdminApi";

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

export default function MediaProfile() {
  const { media } = useSelector((state) => state.media);
  const router = useRouter();

  const [check, setCheck] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const text = formData.get("text");

    formData.delete("title");
    formData.delete("text");

    const news = await createNews({ title, text });

    if (check) {
      createNews({ title, text }).then((data) => {
        updateImage(formData, data.id);
      });
      console.log("news", news);
    } else {
      await createNews({ title, text });
    }
  };

  useEffect(() => {
    media === null ? router.push("/") : null;
  });

  return (
    <Card
      sx={{
        maxWidth: 1000,
        display: "flex",
        flexDirection: "column",
        margin: "100px auto 0",
        padding: "20px",
      }}
    >
      <Typography variant="h3">Профиль</Typography>
      {media ? (
        <Box sx={{ display: "flex", alignItems: "center", paddingTop: "20px" }}>
          <Box
            sx={{
              height: 400,
              width: 400,
              background: 'url("/Avatar.png")',
              backgroundSize: "cover",
            }}
          ></Box>
          <Box sx={{ marginLeft: "40px" }}>
            <TextItem label="Название:" content={media.data.name} />
            <TextItem
              label="Регистрационный номер:"
              content={media.data.registrationNumber}
            />
            <TextItem label="E-mail:" content={media.data.email} />
            <Box sx={{ display: "flex" }}>
              <Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Editor:
                </Typography>
                {media.data.editor.firstName} {media.data.editor.lastName}
              </Typography>
            </Box>
            <div className={s.button_wrapper}>
              <Link className={s.button} href={"/MediaNewsPage"}>
                Перейти на страницу новостей издания
              </Link>
            </div>
            <Button
              variant="blue"
              sx={{ marginTop: "20px" }}
              onClick={handleOpen}
            >
              Создать новость
            </Button>
          </Box>
        </Box>
      ) : null}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmit}>
            <Box>
              <Typography variant="h3">Создать новость</Typography>

              <TextField
                sx={{ marginTop: "20px" }}
                type="title"
                placeholder="Enter news title"
                name="title"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)
                // }
              />
              <TextField
                sx={{ marginTop: "20px" }}
                type="text"
                placeholder="Enter news text"
                name="text"
                // value={text}
                // onChange={(e) => setText(e.target.value) }
              />
              <Box>
                <FormControlLabel
                  label="Добавить картинку"
                  control={
                    <Checkbox
                      checked={check}
                      onChange={() => setCheck(!check)}
                    />
                  }
                />
              </Box>
              {check ? (
                <TextField sx={{ marginTop: "20px" }} name="file" type="file" />
              ) : null}
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "20px" }}
              >
                Создать новость
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Card>
  );
}
