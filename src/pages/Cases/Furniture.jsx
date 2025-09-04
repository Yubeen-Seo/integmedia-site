export default function Furniture() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl border p-6 shadow-sm">
        <h3 className="text-xl font-semibold">가구 & 인테리어</h3>
        <p className="mt-2 text-gray-700">
          카테고리 구조화, 퍼널별 캠페인 분리, 소재/키워드 고도화 등 운영 사례를 요약합니다.
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
          <li>브랜드/비브랜드 키워드 병행</li>
          <li>리마케팅 · 유사타겟 확장</li>
          <li>성과지표(전환/ROAS/CPA) 개선</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 shadow-sm">
        <div className="h-40 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100" />
        <p className="mt-4 text-sm text-gray-500">실제 수치는 보안 처리. 상담 시 상세 공유.</p>
      </div>
    </div>
  );
}
