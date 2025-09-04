import { NavLink, Outlet } from "react-router-dom";

export default function Cases() {
  const tab = "px-3 h-9 rounded-lg border text-sm flex items-center";
  const on = "bg-blue-600 text-white border-blue-600";
  const off = "bg-white hover:bg-gray-50";

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">포트폴리오</h2>
      <div className="mt-6 flex gap-2">
        <NavLink to="fashion" className={({isActive}) => `${tab} ${isActive?on:off}`}>해외 패션</NavLink>
        <NavLink to="living" className={({isActive}) => `${tab} ${isActive?on:off}`}>리빙&인테리어</NavLink>
        <NavLink to="furniture" className={({isActive}) => `${tab} ${isActive?on:off}`}>가구&인테리어</NavLink>
        <NavLink to="health" className={({isActive}) => `${tab} ${isActive?on:off}`}>건강기능식품</NavLink>
      </div>
      <div className="mt-8">
        <Outlet />
      </div>
    </section>
  );
}
