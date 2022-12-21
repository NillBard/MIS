import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Box sx={{ height: "100vh" }}>
      <Navbar></Navbar>
      <main style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</main>
      <Footer></Footer>
    </Box>
  );
}
