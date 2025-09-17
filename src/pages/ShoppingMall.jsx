import { useState, useEffect } from "react";

// 쇼핑몰 메인 컴포넌트
function ShoppingMall() {
  // 상품 목록 상태
  const [products, setProducts] = useState([]);
  // 로딩 상태 (상품 로딩 중 표시)
  const [isLoading, setIsLoading] = useState(true);
  // 에러 상태 (상품 로딩 실패 시 표시)
  const [error, setError] = useState(null);
  // 검색어 상태 (사용자가 입력한 검색어)
  const [searchKeyword, setSearchKeyword] = useState("");
  // 선택된 카테고리 상태
  const [category, setCategory] = useState("전체보기");
  // 정렬 순서 상태 (이름, 가격, 재고)
  const [sortOrder, setSortOrder] = useState("name");

  // 컴포넌트가 처음 렌더링될 때 상품을 불러오기
  useEffect(() => {
    loadProducts();
  }, []);

  // 상품 불러오기 함수
  const loadProducts = () => {
    setIsLoading(true); // 로딩 시작
    setError(null); // 에러 초기화

    // 서버에서 데이터를 불러오는 것처럼 setTimeout으로 가짜 딜레이
    setTimeout(() => {
      // 실제라면 fetch()나 axios.get()으로 API 호출
      setProducts([
        {
          id: "prod_001",
          name: "무선 키보드",
          category: "전자제품",
          price: 45000,
          originalPrice: 50000,
          stock: 10,
          isNew: true,
          isOnSale: true,
        },
        {
          id: "prod_002",
          name: "게이밍 마우스",
          category: "전자제품",
          price: 30000,
          originalPrice: 30000,
          stock: 0,
          isNew: false,
          isOnSale: false,
        },
        {
          id: "prod_003",
          name: "노트북 스탠드",
          category: "사무용품",
          price: 20000,
          originalPrice: 25000,
          stock: 5,
          isNew: true,
          isOnSale: true,
        },
        {
          id: "prod_004",
          name: "USB-C 허브",
          category: "전자제품",
          price: 35000,
          originalPrice: 40000,
          stock: 15,
          isNew: false,
          isOnSale: true,
        },
        {
          id: "prod_005",
          name: "책상 매트",
          category: "사무용품",
          price: 15000,
          originalPrice: 15000,
          stock: 20,
          isNew: false,
          isOnSale: false,
        },
      ]);
      setIsLoading(false); // 로딩 종료
    }, 200); // 0.2초 딜레이
  };

  // 필터링 + 정렬된 상품 목록을 계산하는 함수
  const getFilteredProducts = () => {
    let filtered = [...products]; // 원본 배열 복사

    // 카테고리 필터
    if (category !== "전체보기") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // 검색어 필터
    if (searchKeyword.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    // 정렬 적용
    filtered.sort((a, b) => {
      if (sortOrder === "name") {
        return a.name.localeCompare(b.name); // 이름순 (가나다)
      } else if (sortOrder === "price") {
        return a.price - b.price; // 가격 낮은 순
      } else if (sortOrder === "stock") {
        return b.stock - a.stock; // 재고 많은 순
      }
      return 0;
    });

    return filtered;
  };

  // 필터링된 상품 목록
  const filteredProducts = getFilteredProducts();

  // 카테고리 목록 (드롭다운에 표시할 옵션)
  const categories = ["전체보기", "전자제품", "사무용품"];

  // 로딩 중일 때 표시
  if (isLoading) {
    return (
      <div>
        <h1>React 쇼핑몰</h1>
        <p>상품을 불러오는 중입니다...</p>
      </div>
    );
  }

  // 에러 발생 시 표시
  if (error) {
    return (
      <div>
        <h1>React 쇼핑몰</h1>
        <p>상품을 불러오는 중에 오류가 발생했습니다: {error}</p>
        <button onClick={loadProducts}>다시 시도</button>
      </div>
    );
  }

  // 메인 화면 렌더링
  return (
    <div>
      <h1>React 쇼핑몰</h1>

      {/* 검색 입력 */}
      <div>
        <input
          type="text"
          placeholder="검색어 입력"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>

      {/* 카테고리 선택 + 정렬 선택 */}
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        &nbsp;
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="name">이름순</option>
          <option value="price">낮은 가격순</option>
          <option value="stock">재고 많은 순</option>
        </select>
      </div>

      {/* 검색 결과 갯수 표시 */}
      {filteredProducts.length > 0 && (
        <div>
          <p>
            {searchKeyword && `"${searchKeyword}"의 검색 결과: `}
            {filteredProducts.length}개 상품
          </p>
        </div>
      )}

      {/* 상품 리스트 렌더링 */}
      {filteredProducts.length === 0 ? (
        <p>조건에 맞는 상품이 없습니다.</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: "20px" }}>
              <h2>
                {product.name} {/* 신상품 표시 */}
                {product.isNew && (
                  <span style={{ color: "green" }}>신상품</span>
                )}{" "}
                {/* 세일 표시 */}
                {product.isOnSale && (
                  <span style={{ color: "red" }}>세일 중</span>
                )}
              </h2>
              <p>카테고리: {product.category}</p>
              <p>
                가격: {product.price.toLocaleString()}원{" "}
                {/* 세일 전 가격 표시 */}
                {product.isOnSale && product.originalPrice > product.price && (
                  <span
                    style={{ textDecoration: "line-through", color: "gray" }}
                  >
                    {product.originalPrice.toLocaleString()}원
                  </span>
                )}
              </p>
              <p>재고: {product.stock > 0 ? `${product.stock}개` : "품절"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// App 컴포넌트에서 ShoppingMall 불러오기
export default ShoppingMall;
