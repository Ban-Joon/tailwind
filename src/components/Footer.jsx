function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* 왼쪽 - 브랜드명 */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-yellow-400">K-FIT</h2>
          <p className="text-sm text-gray-400 mt-1">
            1:1 PT · 필라테스 전문 스튜디오
          </p>
        </div>

        {/* 가운데 - 네비게이션 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
          <a href="/" className="hover:text-yellow-400">
            홈
          </a>
          <a href="/write" className="hover:text-yellow-400">
            프로그램
          </a>
          <a href="/detail" className="hover:text-yellow-400">
            운동정보
          </a>
          <a
            href="https://booking.naver.com/booking/6/bizes/1438133"
            target="_blank"
            className="hover:text-yellow-400"
          >
            온라인예약
          </a>
          <a
            href="https://blog.naver.com/klfit7700"
            target="_blank"
            className="hover:text-yellow-400"
          >
            블로그
          </a>
        </div>

        {/* 오른쪽 - 저작권 */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} K-FIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
