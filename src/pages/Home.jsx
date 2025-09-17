function Home() {
  return (
    <div className="pt-20">
      {/* 메인 이미지 */}
      <img src="imgs/202301_visual3.jpg" alt="홈 사진" className="" />

      {/* 문구 영역 */}
      <div className="mt-8 space-y-2 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400">
          케이핏 소개
        </h1>
        <p className="text-xl md:text-2xl text-black pt-8 font-bold">
          100% 사전예약제
        </p>
        <p className="text-xl md:text-2xl text-black pt-4 font-bold">
          재활 트레이닝 전문
        </p>
        <p className="text-xl md:text-2xl text-black pt-4 font-bold">
          1:1 PT & 1:1 PILATES
        </p>
        <p className="text-xl md:text-2xl text-black pt-4 font-bold">
          "건강한 변화의 시작 케이핏"
        </p>
      </div>
    </div>
  );
}

export default Home;
