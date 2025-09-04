export default function Contact() {
  return (
    <section className="max-w-screen-sm mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold">문의하기</h2>
      <form className="mt-6 space-y-4">
        <input className="w-full h-11 px-3 rounded-lg border" placeholder="회사명/이름" />
        <input className="w-full h-11 px-3 rounded-lg border" placeholder="이메일" type="email" />
        <input className="w-full h-11 px-3 rounded-lg border" placeholder="월 예산 (예: 1,000만원)" />
        <textarea className="w-full min-h-32 p-3 rounded-lg border" placeholder="광고 현황/목표를 적어주세요" />
        <button className="h-11 px-5 rounded-lg bg-blue-600 text-white font-semibold">제출</button>
      </form>
      <p className="mt-3 text-sm text-gray-500">제출 기능은 데모입니다. 원하면 Formspree/EmailJS 연동해 드릴게요.</p>
    </section>
  );
}
