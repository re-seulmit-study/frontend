import { TopArea } from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useCallback, useEffect, useRef, useState } from "react";
import { sCon } from "../pages/sCon";
import { useNavigate } from "react-router-dom";
import CartList from "../modules/CartList";
///////import area///////////////////////////////////

export default function Layout() {

  ///[상태관리변수]///////////////////////////////////////////
  //1. 인트로 상태관리 변수
  const [introSts, setIntroSts] = useState(true);

  // console.log("로그인?", loginSts);
  //최근 검색어 상태관리
  const [recentSearches, setRecentSearches] = useState([]);

  //검색어 데이터 상태변수
  const [localSearch, setLocalSearch] = useState(
    localStorage.getItem("searchLog")
  );

  //////////cart/////////////////////////////////////////////
  // 로컬스 카트 존재여부변수
  let cartTemp = false;

  // [ 로컬스 카트 데이터 상태변수 ] ///
  const [localsCart, setLocalsCart] = useState(
    JSON.parse(localStorage.getItem("cart-data") || "[]") // 빈 문자열일 경우 빈 배열 사용
  );
  // 카트리스트 사용여부: true일때 사용
  const [cartSts, setCartSts] = useState(false);

  //카트리스트 추가옵션값 저장 상태변수
  const[selectedOpt, setSelectedOpt] = useState([]);

  // 로컬스 카트 데이터 존재여부에 따라 상태값 변경
  if (localsCart) {
    // 데이터가 있으면 cartTemp값 true로 변경
    // 데이터 개수가 0이 아니어야함!
    let localsCart = localStorage.getItem("cart-data") || "[]"; // 빈 문자열일 경우 빈 배열 사용
    let cartCnt = JSON.parse(localsCart).length;
    // console.log("카트 데이터수:", cartCnt);
    if (cartCnt > 0) cartTemp = true;
  } //////////// 카트존재여부 if ////////

 
  const searchLog = useRef(
    JSON.parse(localStorage.getItem("search-log") || "[]")
  );

  ////[공통함수 영역]///////////////////////////////////////
  //1. 라우팅 이동함수: 라우터 이동후크 useNavigate는 다른 useCallback로 처리가능
  const goNave = useNavigate();
  const goPage = useCallback((pm1, pm2) => {
    goNave(pm1, pm2);
  }, []);

  //selCat = 선택된 카테고리
  const [selCat, setSelCat] = useState("face");

  //화면 랜더링 구역/////////////////////////////////////////////////////



  // 코드리턴구역 ///////////////
  return (
    <sCon.Provider
      value={{
        setIntroSts,
        selCat,
        setSelCat,
        goPage,
        recentSearches,
        setRecentSearches,
        searchLog,
        setCartSts,
        setLocalsCart,
        localsCart,
        selectedOpt,
        setSelectedOpt,
      }}
    >
      <TopArea
        goPage={goPage}
        setRecentSearches={setRecentSearches}
        recentSearches={recentSearches}
        localSearch={localSearch}
        setLocalSearch={setLocalSearch}
        
      />
      {/* 카트리스트 : 카트상태값 true 출력 */}
      {cartSts && <CartList />}
      <MainArea />
      <FooterArea 
      ival={introSts} 
      />
    </sCon.Provider>
  ); /////return
} //////layout
