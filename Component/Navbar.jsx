import Box from "@mui/material/Box";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import s from "../styles/navbar.module.css";
import { useLogoutMutation } from "../store/user/userApi";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logout] = useLogoutMutation();
  const { user } = useSelector((state) => state.user);
  const media = null;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkUserRole = user ? "UserProfile" : media ? "MediaProfile" : null;

  return (
    <>
      <Box
        sx={{
          background: "blue",
          height: 70,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1280,
            margin: "0 auto",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Link className={s.link} href="/">
            <ArticleIcon sx={{ fontSize: 50, color: "white" }}></ArticleIcon>
          </Link>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ul className={s.list}>
              <li>
                <Link className={s.link} href="/">
                  Новости
                </Link>
              </li>
              <li>
                <Link className={s.link} href="/">
                  О нас
                </Link>
              </li>

              <li>
                <Link className={s.link} href="/">
                  Контакты
                </Link>
              </li>
            </ul>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SearchOutlinedIcon className={s.search} />
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <AccountCircleIcon
                  sx={{ width: 32, height: 32, color: "white" }}
                ></AccountCircleIcon>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {checkUserRole === null ? (
          <>
            <MenuItem>
              <Avatar />{" "}
              <Link href="/Login"> Авторизоваться как пользователь</Link>
            </MenuItem>
            <MenuItem>
              <Avatar />{" "}
              <Link href="/LoginMedia"> Авторизоваться как медиа</Link>
            </MenuItem>
          </>
        ) : null}

        {checkUserRole !== null ? (
          <MenuItem>
            <Avatar /> <Link href={`/${checkUserRole}`}> Профиль</Link>
          </MenuItem>
        ) : null}
        {checkUserRole === "UserProfile" ? (
          <MenuItem>
            <ArticleIcon sx={{ marginRight: "10px" }} />{" "}
            <Link href={`/Favourite`}> Избранные новости</Link>
          </MenuItem>
        ) : null}
        {checkUserRole !== null ? (
          <>
            <Divider />
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        ) : null}
      </Menu>
    </>
  );
}
