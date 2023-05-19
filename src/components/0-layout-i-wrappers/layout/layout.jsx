import Navbar from "../navbar/navbar";
import Footer from "../../0-layout-i-wrappers/footer/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
