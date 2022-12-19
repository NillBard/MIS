import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main style={{ width: 1280, margin: "0 auto" }}>{children}</main>
      <Footer></Footer>
    </>
  );
}
