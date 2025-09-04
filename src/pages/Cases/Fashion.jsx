export default function Fashion() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl border p-6 shadow-sm">
        <h3 className="text-xl font-semibold">해외 패션</h3>
        <p className="mt-2 text-gray-700">캠페인 구조 정비 · 키워드 확장 · 소재 고도화 등</p>
        <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
          <li>시장/경쟁 리서치 기반 확장</li>
          <li>퍼널 단계별 캠페인 분리</li>
          <li>성과 지표 개선(예: 전환/ROAS/CPA)</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6 shadow-sm">
        <div className="h-40 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100" />
        <p className="mt-4 text-sm text-gray-500">실제 수치는 보안 처리. 상담 시 상세 공유.</p>
      </div>
    </div>
  );
}
