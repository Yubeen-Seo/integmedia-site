export default function About() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-12 space-y-10">
      <header>
        <h2 className="text-3xl font-bold">회사 소개</h2>
        <p className="mt-2 text-gray-600">대표 마케터 서유빈의 인사와 회사 철학</p>
      </header>

      <article className="space-y-3">
        <h3 className="text-xl font-semibold">문제의식</h3>
        <p className="text-gray-700">
          제로섬 구조에서 신규 유치에만 집중하고 기존 광고주 관리는 소홀해지는 업계 구조를 비판적으로 바라봅니다.
        </p>
      </article>

      <article className="space-y-3">
        <h3 className="text-xl font-semibold">우리의 약속(Integrity)</h3>
        <p className="text-gray-700">
          매체사·대행사 협약에 따른 투명 운영, 과소진/이슈 은폐 없이 데이터 기반 소통을 약속합니다.
        </p>
      </article>

      <article className="space-y-3">
        <h3 className="text-xl font-semibold">강점</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>해외 플랫폼(구글 애즈/메타 등) 실전 운영 경험</li>
          <li>볼륨 확대와 효율 동시 관리</li>
          <li>이관 후 1개월 안정화 로드맵</li>
        </ul>
      </article>
    </section>
  );
}
