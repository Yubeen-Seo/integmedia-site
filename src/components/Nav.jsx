import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const base = "text-sm px-1 py-0.5";
  const active = "text-blue-600 font-semibold";
  const normal = "text-gray-700 hover:underline";

  return (
    <header className="border-b">
      <div className="max-w-screen-xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">INTEGMEDIA</Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/about" className={({isActive})=> `${base} ${isActive?active:normal}`}>서비스/회사소개</NavLink>
          <NavLink to="/cases" className={({isActive})=> `${base} ${isActive?active:normal}`}>포트폴리오</NavLink>
          <NavLink to="/contact" className={({isActive})=> `${base} ${isActive?active:normal}`}>문의</NavLink>
        </nav>
      </div>
    </header>
  );
}
