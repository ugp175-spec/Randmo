import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ToolPage from "./pages/ToolPage";
import Saved from "./pages/Saved";
import History from "./pages/History";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
