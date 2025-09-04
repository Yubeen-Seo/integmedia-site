export default function NotFound() {
  return (
    <section className="max-w-screen-md mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold">페이지를 찾을 수 없습니다</h2>
      <p className="mt-3 text-gray-600">주소를 다시 확인해 주세요.</p>
      <a href="/" className="inline-flex mt-6 h-11 px-5 rounded-lg border">홈으로</a>
    </section>
  );
}
