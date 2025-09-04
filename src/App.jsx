import Nav from "./components/Nav.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cases from "./pages/Cases.jsx";
import Fashion from "./pages/Cases/Fashion.jsx";
import Living from "./pages/Cases/Living.jsx";
import Furniture from "./pages/Cases/Furniture.jsx";
import Health from "./pages/Cases/Health.jsx";
import Process from "./pages/Process.jsx";
import Contract from "./pages/Contract.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Cases: 탭 + 서브라우팅 */}
          <Route path="/cases" element={<Cases />}>
            <Route index element={<Navigate to="fashion" replace />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="living" element={<Living />} />
            <Route path="furniture" element={<Furniture />} />
            <Route path="health" element={<Health />} />
          </Route>

          <Route path="/process" element={<Process />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} INTEGMEDIA</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">개인정보 처리방침</a>
            <a href="#" className="hover:underline">이용약관</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
