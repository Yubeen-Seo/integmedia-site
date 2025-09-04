export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Integrity Media Partner, <span className="text-blue-600">INTEGMEDIA</span>
          </h1>
          <p className="mt-4 text-gray-600">
            투명하고 진실한(Integrity) 파트너십으로
            트래픽과 매출 볼륨을 키우는 운영을 지향합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="inline-flex items-center justify-center px-5 h-11 rounded-lg bg-blue-600 text-white font-semibold hover:opacity-90">지금 상담하기</a>
            <a href="/cases" className="inline-flex items-center justify-center px-5 h-11 rounded-lg border font-semibold">포트폴리오 보기</a>
          </div>
          <p className="mt-6 text-sm text-gray-500">대행권 이관 후 <span className="font-semibold">1개월 안정화</span>를 목표로 신속 진단 & 개선.</p>
        </div>
        <div className="rounded-2xl border p-6 shadow-sm">
          <div className="h-40 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100" />
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li>대규모 키워드 셋업 · 해외 매체 운영 전문성</li>
            <li>트래픽 및 매출 볼륨 확대 + 효율 관리</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
