/* =====================================================================
   BahkSeHun 포트폴리오 내용 파일
   사이트에 보이는 글과 작품 목록은 전부 이 파일에서 바꿉니다.
   사용법은 README.txt를 보세요.

   ※ 고칠 때 주의
   - 글자는 반드시 "큰따옴표" 안에 쓰기
   - 항목과 항목 사이에는 쉼표(,) 넣기
   - 저장 후 사이트가 하얗게 나오면, 쉼표나 따옴표가 빠진 곳이 없는지 확인
   ===================================================================== */

var SITE = {
  role: "Director of Photography / Photographer",
  email: "vivabsh@naver.com",
  instagram: "bkswnn",         // @ 없이 아이디만
  photo: "images/profile.jpg"  // Info 페이지 프로필 사진. 안 쓰려면 "" 로 두기
};


/* ---------------------------------------------------------------------
   Film / Commercial
   - 목록에는 위에서부터 순서대로 보입니다. 새 작품은 맨 위에 추가하세요.
   - folder : images/ 안의 폴더 이름. 사진은 01.jpg, 02.jpg … 순서로 넣기
   - count  : 사진 장수
   - ratio  : 화면 비율 (16/9, 2.39/1, 4/3 처럼)
   - youtube: 유튜브 주소의 v= 뒤 아이디. 없으면 "" 로 두기
   - note   : 영화제·수상 내역. 한 줄씩 따옴표로. 없으면 [] 로 두기
   --------------------------------------------------------------------- */

var FILM = [
  {
    title: "머물다, 흩어지다", year: 2026,
    director: "Lee Won Jae",
    note: ["Shot on Super 16, Kodak Vision3 250D 7207"],
    ratio: "16/9",
    youtube: "",
    folder: "film/meomulda-heuteojida", count: 9, cover: "thumb.jpg"
  },
  {
    title: "기다리고 있어", year: 2026,
    director: "Jeong Ji Won",
    note: ["제 9회 서울무용영화제 상영"],
    ratio: "1920/804",
    youtube: "",
    folder: "film/gidarigo-isseo", count: 11, cover: "thumb.jpg"
  },
  {
    title: "쏙독새", year: 2025,
    director: "Lee Kwan Hee",
    note: ["제 13회 인천독립영화제 인천 섹션", "제 18회 대단한단편영화제 단편경쟁"],
    ratio: "4/3", fit: "contain",
    youtube: "",
    folder: "film/ssokdoksae", count: 12, cover: "thumb.jpg"
  },
  {
    title: "슈게이징", year: 2025,
    director: "Kyung Je Min",
    note: [],
    ratio: "16/9",
    youtube: "",
    folder: "film/shoegazing", count: 12, cover: "thumb.jpg"
  },
  {
    title: "이리할멈", year: 2024,
    director: "Jo Kyung Min, Jo Jung Min",
    note: ["제 26회 정동진독립영화제 공식상영", "제 24회 전북독립영화제 국내경쟁", "제 16회 대단한단편영화제 단편경쟁", "제 26회 대구단편영화제 '미드나잇'시네마 섹션"],
    ratio: "16/9",
    youtube: "",
    folder: "film/iri-halmeom", count: 12, cover: "thumb.jpg"
  }
];

var COMMERCIAL = [
  {
    title: "우수현 - 일기", year: 2026,
    director: "Jeong Ji Won",
    note: [],
    ratio: "3840/1634",
    youtube: "VGn9ISN1vHw",
    folder: "commercial/woosuhyun-diary", count: 8, cover: "thumb.jpg"
  },
  {
    title: "aiai - Far", year: 2025,
    director: "Choi Ji Eun",
    note: [],
    ratio: "5/3",
    youtube: "8LlYTWel0Ko",
    folder: "commercial/aiai-far", count: 8, cover: "thumb.jpg",
    coverPosition: "center 75%"   // 목록 미리보기에서 보이는 위치 (가로 세로)
  },
  {
    title: "aiiyh(아이) - 영원이라는 건 없지만", year: 2023,
    director: "withgill",
    note: [],
    ratio: "2880/1228",
    youtube: "9DCzh0OA-yc",
    folder: "commercial/aiiyh-forever", count: 7, cover: "thumb.jpg"
  }
];


/* ---------------------------------------------------------------------
   Photography (매거진 시리즈)
   - 목록에 3칸씩 순서대로 보입니다. 새 호는 맨 위에 추가하세요.
   - layout : 상세 페이지 배치. 한 줄에 한 칸씩
       "1"        → 1번 사진 한 장, 전체 폭
       "3 4"      → 3번, 4번 나란히
       "2 오른쪽" → 80% 폭, 오른쪽 정렬
       "8 왼쪽"   → 80% 폭, 왼쪽 정렬
       "9 좁게"   → 좁게 가운데
     layout을 빼면 사진이 한 장씩 순서대로 나옵니다.
   --------------------------------------------------------------------- */

var PHOTO = [
  {
    title: "Tokyo Story",
    folder: "photo/tokyo-story", count: 9, cover: "thumb.jpg",
    coverPosition: "45% center",
    layout: ["1", "2 오른쪽", "3 4", "5", "6 7", "8 왼쪽", "9 좁게"]
  }
];
