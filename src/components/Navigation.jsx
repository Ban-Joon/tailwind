import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-black md:px-100 py-2 flex flex-col md:flex-row justify-between items-center text-lg font-bold gap-4 fixed top-0 left-0 w-full z-50 shadow-md">
      {/* 로고 클릭 시 홈으로 이동 */}
      <Link to="/" className="shrink-0">
        <img
          src="imgs/kfit.jpg"
          alt="logo"
          className="h-20 md:h-16 object-contain cursor-pointer"
        />
      </Link>

      {/* 오른쪽 메뉴 */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <Link to="/write">
          <button
            className="bg-black px-2 py-2 text-yellow-400 text-xl font-bold rounded-xl 
            hover:scale-103 hover:bg-yellow-400 hover:shadow-2xl hover:text-black cursor-pointer transition-all duration-300"
          >
            프로그램
          </button>
        </Link>
        <Link to="/detail">
          <button
            className="bg-black px-2 py-2 text-yellow-400 text-xl font-bold rounded-xl 
            hover:scale-103 hover:bg-yellow-400 hover:shadow-2xl hover:text-black cursor-pointer transition-all duration-300"
          >
            운동정보
          </button>
        </Link>
        <a href="https://booking.naver.com/booking/6/bizes/1438133">
          <button
            className="bg-black px-2 py-2 text-yellow-400 text-xl font-bold rounded-xl 
            hover:scale-103 hover:bg-yellow-400 hover:shadow-2xl hover:text-black cursor-pointer transition-all duration-300"
          >
            온라인예약
          </button>
        </a>
        <a href="https://blog.naver.com/klfit7700">
          <button
            className="bg-black px-2 py-2 text-yellow-400 text-xl font-bold rounded-xl 
            hover:scale-103 hover:bg-yellow-400 hover:shadow-2xl hover:text-black cursor-pointer transition-all duration-300"
          >
            블로그
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
