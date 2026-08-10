import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";
import ScrollToTop from "./components/layout/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}
