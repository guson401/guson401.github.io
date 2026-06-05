function screenPath(filename) {
  return `../medicare-screenshots/${filename}`;
}

const SCREEN_DATA = {
  symptom: {
    category: "flow",
    image: screenPath("main.png"),
    titles: {
      ko: "증상 입력과 AI 분석",
      en: "Symptom Input and AI Analysis",
      ja: "症状入力とAI分析",
    },
    descriptions: {
      ko: "사용자가 자연어로 증상을 입력하면 길이에 따라 즉시 AI 분석 또는 설문 보완 흐름으로 분기합니다.",
      en: "When a user enters symptoms in natural language, the flow branches into immediate AI analysis or a supplementary survey depending on input length.",
      ja: "ユーザーが自然言語で症状を入力すると、入力の長さに応じて即時AI分析または補足アンケートの流れに分岐します。",
    },
    points: {
      ko: [
        "10자 이상 입력은 AI 추천 API로 바로 전달",
        "짧은 입력은 공통 질문과 카테고리별 설문으로 보완",
        "AI 응답에서 추천 진료과를 파싱해 다음 검색 기준으로 사용",
      ],
      en: [
        "Inputs of 10 or more characters are sent directly to the AI recommendation API",
        "Short inputs are expanded through common and category-specific survey questions",
        "The recommended department is parsed from the AI response and used as the next search criterion",
      ],
      ja: [
        "10文字以上の入力はAI推薦APIへ直接送信",
        "短い入力は共通質問とカテゴリ別アンケートで補足",
        "AI応答から推薦診療科を抽出し、次の検索条件として使用",
      ],
    },
  },
  surveyStart: {
    category: "flow",
    image: screenPath("survey1.png"),
    titles: {
      ko: "증상 상세 설문 시작",
      en: "Detailed Symptom Survey Start",
      ja: "症状詳細アンケート開始",
    },
    descriptions: {
      ko: "짧은 증상 입력은 공통 설문으로 보완해 증상의 시작 시점, 진행 양상, 통증 성격을 수집합니다.",
      en: "Short symptom input is expanded through a common survey that collects onset, progression, and pain characteristics.",
      ja: "短い症状入力は共通アンケートで補足し、発症時期、進行状況、痛みの性質を収集します。",
    },
    points: {
      ko: [
        "증상 설명이 부족한 경우 설문 화면으로 자연스럽게 전환",
        "라디오 선택형 문항으로 사용자의 입력 부담 축소",
        "선택 결과를 AI 분석 요청의 추가 컨텍스트로 활용",
      ],
      en: [
        "Moves naturally to the survey screen when symptom detail is insufficient",
        "Reduces input effort through radio-style questions",
        "Uses selected answers as additional context for AI analysis",
      ],
      ja: [
        "症状説明が不足している場合、アンケート画面へ自然に遷移",
        "ラジオ選択式の設問で入力負担を軽減",
        "選択結果をAI分析リクエストの追加コンテキストとして活用",
      ],
    },
  },
  surveyBody: {
    category: "flow",
    image: screenPath("survey2.png"),
    titles: {
      ko: "부위와 동반 증상 확인",
      en: "Affected Area and Accompanying Symptoms",
      ja: "部位と随伴症状の確認",
    },
    descriptions: {
      ko: "증상이 나타나는 부위와 함께 동반되는 증상을 단계적으로 받아 추천 진료과 판단에 필요한 정보를 보강합니다.",
      en: "The flow gathers affected area and accompanying symptoms step by step to strengthen department recommendation accuracy.",
      ja: "症状が出る部位と随伴症状を段階的に収集し、診療科推薦に必要な情報を補強します。",
    },
    points: {
      ko: [
        "부위, 발열, 소화불량, 기침 등 진료과 분기에 필요한 답변 확보",
        "긴 설문을 한 화면 흐름으로 유지해 맥락 이탈 감소",
        "선택하지 않은 문항이 있으면 분석 버튼을 비활성화",
      ],
      en: [
        "Collects answers needed for department branching, such as area, fever, digestion, and cough",
        "Keeps the longer survey in one continuous screen to reduce context switching",
        "Disables analysis until required questions are answered",
      ],
      ja: [
        "部位、発熱、消化不良、咳など診療科分岐に必要な回答を確保",
        "長いアンケートを一つの流れに保ち、文脈離脱を低減",
        "必須設問が未回答の場合は分析ボタンを無効化",
      ],
    },
  },
  surveySubmit: {
    category: "flow",
    image: screenPath("survey3.png"),
    titles: {
      ko: "AI 분석 요청",
      en: "AI Analysis Request",
      ja: "AI分析リクエスト",
    },
    descriptions: {
      ko: "설문 답변이 모두 채워지면 AI 결과 분석 버튼을 활성화하고, 증상 설명과 설문 응답을 함께 추천 요청으로 전달합니다.",
      en: "After all survey answers are filled, the analysis button is enabled and symptom text plus survey answers are sent together.",
      ja: "すべての回答が埋まると分析ボタンを有効化し、症状説明とアンケート回答をまとめて推薦リクエストへ送信します。",
    },
    points: {
      ko: [
        "필수 응답 완료 여부를 버튼 상태로 명확히 표시",
        "자연어 입력과 구조화된 답변을 결합해 AI 추천 정확도 보완",
        "분석 이후 추천 진료과 기반 병원 탐색으로 흐름 연결",
      ],
      en: [
        "Clearly shows completion state through the analysis button",
        "Combines natural-language input and structured answers to improve recommendation context",
        "Continues into hospital search based on the recommended department",
      ],
      ja: [
        "必須回答の完了状態をボタンで明確に表示",
        "自然言語入力と構造化された回答を組み合わせて推薦文脈を補強",
        "分析後は推薦診療科ベースの病院探索へ接続",
      ],
    },
  },
  recommend: {
    category: "hospital",
    image: screenPath("map.png"),
    titles: {
      ko: "진료과 기반 병원 추천",
      en: "Department-based Hospital Recommendation",
      ja: "診療科ベースの病院推薦",
    },
    descriptions: {
      ko: "추천 진료과와 사용자 기본 위치를 기준으로 병원을 필터링하고 가까운 순서로 정렬합니다.",
      en: "Hospitals are filtered by the recommended department and the user's default location, then sorted by proximity.",
      ja: "推薦診療科とユーザーの基本位置を基準に病院を絞り込み、近い順に並べます。",
    },
    points: {
      ko: [
        "병원과 진료과 테이블을 연결해 해당 진료 가능한 병원만 조회",
        "사용자 저장 위치와 병원 좌표 간 거리를 하버사인 공식으로 계산",
        "지도 마커와 목록을 함께 제공해 탐색과 비교 흐름 연결",
      ],
      en: [
        "Hospital and department tables are joined to query only hospitals that provide the selected department",
        "Distance between saved user location and hospital coordinates is calculated with the Haversine formula",
        "Map markers and lists are shown together for search and comparison",
      ],
      ja: [
        "病院と診療科テーブルを結び、該当診療が可能な病院だけを照会",
        "ユーザー保存位置と病院座標の距離をHaversine公式で計算",
        "地図マーカーとリストを一緒に提供して探索と比較を接続",
      ],
    },
  },
  hospitalSearch: {
    category: "hospital",
    image: screenPath("search.png"),
    titles: {
      ko: "병원 검색과 필터",
      en: "Hospital Search and Filters",
      ja: "病院検索とフィルター",
    },
    descriptions: {
      ko: "키워드, 진료과, 즐겨찾기 여부와 정렬 조건을 조합해 병원을 검색하고 결과 수를 즉시 확인합니다.",
      en: "Users can combine keyword, department, favorite status, and sorting options while checking result counts immediately.",
      ja: "キーワード、診療科、お気に入り状態、並び替え条件を組み合わせて病院を検索し、結果数をすぐ確認します。",
    },
    points: {
      ko: [
        "병원명과 주소 키워드 기반 검색 지원",
        "진료과 선택, 즐겨찾기 필터, 거리/평점 정렬을 같은 화면에 배치",
        "내 위치 사용 버튼으로 위치 기반 검색 진입점을 제공",
      ],
      en: [
        "Supports keyword search by hospital name and address",
        "Places department selection, favorite filtering, and distance/rating sorting in one screen",
        "Provides a location-based search entry through the Use My Location button",
      ],
      ja: [
        "病院名と住所キーワードによる検索をサポート",
        "診療科選択、お気に入りフィルター、距離/評価順の並び替えを同一画面に配置",
        "現在地利用ボタンで位置情報ベース検索への入口を提供",
      ],
    },
  },
  locationSave: {
    category: "profile",
    image: screenPath("Profile_map.png"),
    titles: {
      ko: "내 위치 저장",
      en: "Saved Location Registration",
      ja: "現在地保存",
    },
    descriptions: {
      ko: "프로필에서 지도와 장소 검색을 통해 자주 방문하는 위치를 저장하고 기본 위치로 지정할 수 있습니다.",
      en: "From the profile flow, users can search places on the map, save frequent locations, and set a default location.",
      ja: "プロフィールの流れから地図と場所検索でよく使う位置を保存し、基本位置として指定できます。",
    },
    points: {
      ko: [
        "Kakao Map 기반 장소 검색과 지도 미리보기 제공",
        "장소 이름과 기본 위치 여부를 함께 저장",
        "저장된 위치를 병원 추천 거리 계산에 재사용",
      ],
      en: [
        "Provides Kakao Map place search and map preview",
        "Saves place name together with default-location status",
        "Reuses saved location for hospital recommendation distance calculation",
      ],
      ja: [
        "Kakao Mapベースの場所検索と地図プレビューを提供",
        "場所名と基本位置の指定を一緒に保存",
        "保存位置を病院推薦の距離計算に再利用",
      ],
    },
  },
  locationList: {
    category: "profile",
    image: screenPath("Profile_map_list.png"),
    titles: {
      ko: "내 위치 목록",
      en: "Saved Location List",
      ja: "保存位置一覧",
    },
    descriptions: {
      ko: "저장된 위치가 없을 때의 빈 상태와 위치 추가 진입점을 분리해 사용자가 다음 행동을 바로 알 수 있게 했습니다.",
      en: "The empty state and add-location entry are separated so users can immediately identify the next action.",
      ja: "保存位置がない場合の空状態と追加導線を分け、次の操作をすぐ把握できるようにしました。",
    },
    points: {
      ko: [
        "위치 목록 화면에서 저장 상태를 즉시 확인",
        "오른쪽 상단 위치 추가 버튼으로 등록 흐름 연결",
        "프로필과 병원 탐색에서 같은 위치 데이터를 공유",
      ],
      en: [
        "Shows saved-location state immediately in the list screen",
        "Connects to registration through the add-location button",
        "Shares the same location data across profile and hospital search",
      ],
      ja: [
        "位置一覧画面で保存状態をすぐ確認",
        "右上の位置追加ボタンから登録フローへ接続",
        "プロフィールと病院探索で同じ位置データを共有",
      ],
    },
  },
  profile: {
    category: "profile",
    image: screenPath("Profile.png"),
    titles: {
      ko: "프로필과 기록 관리",
      en: "Profile and Record Management",
      ja: "プロフィールと記録管理",
    },
    descriptions: {
      ko: "사용자가 저장한 병원, 방문 이력, 내가 남긴 병원 댓글을 프로필 화면에서 다시 확인할 수 있게 구성했습니다.",
      en: "Users can revisit saved hospitals, visit history, and their hospital comments from the profile screen.",
      ja: "保存した病院、訪問履歴、自分が残した病院コメントをプロフィール画面で再確認できるよう構成しました。",
    },
    points: {
      ko: [
        "즐겨찾기한 병원 목록과 병원 상세 이동 제공",
        "방문 이력에서 병원 이름, 기록 상세, 재방문 흐름 확인",
        "내가 남긴 병원 댓글을 한 곳에서 추적",
      ],
      en: [
        "Saved hospitals are listed with navigation to hospital details",
        "Visit history shows hospital names, record details, and revisit flow",
        "User-created hospital comments are tracked in one place",
      ],
      ja: [
        "お気に入り病院一覧と病院詳細への移動を提供",
        "訪問履歴で病院名、記録詳細、再訪問フローを確認",
        "自分が残した病院コメントを一か所で追跡",
      ],
    },
  },
  community: {
    category: "community",
    image: screenPath("Community.png"),
    titles: {
      ko: "커뮤니티와 피드백",
      en: "Community and Feedback",
      ja: "コミュニティとフィードバック",
    },
    descriptions: {
      ko: "게시글, 댓글, 대댓글, 좋아요 기능으로 병원과 진료 경험을 공유할 수 있게 했습니다.",
      en: "Posts, comments, replies, and likes support sharing hospital and medical-care experiences.",
      ja: "投稿、コメント、返信、いいね機能により病院と診療経験を共有できるようにしました。",
    },
    points: {
      ko: [
        "게시글 CRUD와 댓글 구조를 분리해 확장 가능한 커뮤니티 모델 구성",
        "병원 댓글과 일반 게시판 댓글을 도메인별로 분리",
        "인증 상태는 Pinia Store와 토큰 기반 API 요청으로 유지",
      ],
      en: [
        "Post CRUD and comments are separated into an extensible community model",
        "Hospital comments and board comments are separated by domain",
        "Authentication state is maintained through Pinia Store and token-based API requests",
      ],
      ja: [
        "投稿CRUDとコメント構造を分け、拡張可能なコミュニティモデルを構成",
        "病院コメントと一般掲示板コメントをドメイン別に分離",
        "認証状態はPinia StoreとトークンベースAPIリクエストで維持",
      ],
    },
  },
  communityWrite: {
    category: "community",
    image: screenPath("Community_write.png"),
    titles: {
      ko: "게시글 작성",
      en: "Community Post Writing",
      ja: "投稿作成",
    },
    descriptions: {
      ko: "제목과 본문을 입력해 게시글을 등록하는 화면을 구성하고, 로그인 상태에서 커뮤니티 작성 흐름을 제공합니다.",
      en: "Users can write a title and body to register a post, supporting the authenticated community-writing flow.",
      ja: "タイトルと本文を入力して投稿を登録し、ログイン状態でコミュニティ作成フローを提供します。",
    },
    points: {
      ko: [
        "제목과 본문 입력 영역을 명확히 분리",
        "글자 수 안내와 등록/초기화 버튼으로 작성 상태 제어",
        "등록 후 게시글 목록으로 돌아가는 후속 흐름 제공",
      ],
      en: [
        "Separates title and body input areas clearly",
        "Controls writing state with character-count guidance and submit/reset buttons",
        "Provides a follow-up path back to the post list after registration",
      ],
      ja: [
        "タイトルと本文の入力領域を明確に分離",
        "文字数案内と登録/初期化ボタンで作成状態を制御",
        "登録後に投稿一覧へ戻る後続フローを提供",
      ],
    },
  },
  erd: {
    category: "architecture",
    image: screenPath("erd.png"),
    titles: {
      ko: "ERD와 데이터 관계",
      en: "ERD and Data Relationships",
      ja: "ERDとデータ関係",
    },
    descriptions: {
      ko: "사용자, 병원, 진료과, 저장 위치, 즐겨찾기, 댓글, 방문 기록, 커뮤니티 모델을 분리해 추천과 기록 흐름을 유지했습니다.",
      en: "Users, hospitals, departments, saved locations, favorites, comments, visit records, and community models are separated to preserve recommendation and record flows.",
      ja: "ユーザー、病院、診療科、保存位置、お気に入り、コメント、訪問記録、コミュニティモデルを分離し、推薦と記録の流れを維持しました。",
    },
    points: {
      ko: [
        "Hospital과 HospitalDepartment 관계로 진료과 기반 검색 구성",
        "HospitalVisit, HospitalComment, HospitalFavorite로 개인 기록과 병원 피드백 분리",
        "UserPlace를 통해 사용자 기본 위치와 거리순 추천 흐름 연결",
      ],
      en: [
        "Department-based search is built through the Hospital and HospitalDepartment relationship",
        "HospitalVisit, HospitalComment, and HospitalFavorite separate personal records and hospital feedback",
        "UserPlace connects default user location to distance-based recommendation",
      ],
      ja: [
        "HospitalとHospitalDepartment関係で診療科ベース検索を構成",
        "HospitalVisit、HospitalComment、HospitalFavoriteで個人記録と病院フィードバックを分離",
        "UserPlaceでユーザー基本位置と距離順推薦フローを接続",
      ],
    },
  },
};

const SCREEN_CATEGORY_ORDER = ["flow", "hospital", "profile", "community", "architecture"];
const SCREEN_CATEGORY_LABELS = {
  ko: {
    flow: "추천 흐름",
    hospital: "병원/기록",
    profile: "프로필/위치",
    community: "커뮤니티",
    architecture: "구조",
  },
  en: {
    flow: "Recommendation",
    hospital: "Hospital/Records",
    profile: "Profile/Location",
    community: "Community",
    architecture: "Architecture",
  },
  ja: {
    flow: "推薦フロー",
    hospital: "病院/記録",
    profile: "プロフィール/位置",
    community: "コミュニティ",
    architecture: "構造",
  },
};

const SCREEN_FRAMES = Object.entries(SCREEN_DATA).map(([key, data]) => ({
  key,
  category: data.category,
  src: data.image,
  data,
}));

const TRANSLATIONS = {
  ko: {
    eyebrow: "AI Hospital Recommendation Platform",
    "hero-summary": "사용자의 증상을 자연어로 입력받아 생성형 AI로 적절한 진료과를 추천하고, 위치 기반으로 실제 방문 가능한 병원을 안내하는 풀스택 헬스케어 플랫폼입니다.",
    "hero-link-screens": "화면 보기",
    "hero-link-role": "역할 정리",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Composition API · Router · Pinia",
    "snapshot-back": "DRF · dj-rest-auth · Token Auth",
    "snapshot-ai": "증상 분석 · 진료과 추출",
    "snapshot-map": "Kakao Map · 거리순 병원 추천",
    "snapshot-period": "풀스택 웹 프로젝트",
    "overview-title": "문제 정의",
    "overview-copy": "사용자가 “어디가 아픈지”는 설명할 수 있어도 어떤 진료과를 찾아야 하는지 바로 판단하기는 어렵습니다. medicare는 증상 입력, AI 진료과 추천, 거리 기반 병원 탐색, 방문 기록까지 하나의 의사결정 흐름으로 묶었습니다.",
    "value-title": "핵심 구현 포인트",
    "value-copy": "병원 공공 데이터를 정리해 진료과별 검색이 가능하도록 모델링하고, 즐겨찾기, 댓글, 방문 이력, 저장 위치를 Django REST API로 구성했습니다. Vue 화면은 Pinia 상태와 Axios API 호출을 기반으로 로그인 이후의 실제 사용 흐름을 처리합니다.",
    "highlights-title": "핵심 기능",
    "feature-1-title": "AI 진료과 추천",
    "feature-1-copy": "자연어 증상이 충분히 길면 즉시 AI 분석을 수행하고, 짧은 입력은 추가 설문으로 보완해 추천 진료과를 도출했습니다.",
    "feature-2-title": "위치 기반 병원 탐색",
    "feature-2-copy": "추천 진료과와 사용자 기본 위치를 기준으로 병원을 필터링하고, 하버사인 거리 계산으로 가까운 병원을 정렬했습니다.",
    "feature-3-title": "방문 기록 관리",
    "feature-3-copy": "방문일, 증상, 진단, 대기시간, 평점과 메모를 남겨 개인 병원 이용 기록처럼 관리할 수 있게 했습니다.",
    "feature-4-title": "커뮤니티와 피드백",
    "feature-4-copy": "게시글, 댓글, 좋아요, 병원 댓글, 즐겨찾기를 연결해 병원 경험을 공유하고 다시 찾아볼 수 있도록 구성했습니다.",
    "screens-title": "화면구성",
    "architecture-title": "아키텍처",
    "architecture-lead": "accounts, hospitals, articles 도메인을 분리하고 병원 데이터, 진료과, 즐겨찾기, 댓글, 방문 기록, 사용자 저장 위치를 연결했습니다. 추천 결과는 사용자 위치와 병원 좌표를 함께 사용해 거리순으로 정렬됩니다.",
    "architecture-front-title": "프론트엔드 흐름",
    "architecture-front-copy": "Vue Router와 Pinia를 사용해 로그인 상태, 증상 입력, 추천 결과, 병원 검색, 프로필 화면 흐름을 관리했습니다.",
    "architecture-back-title": "백엔드 API",
    "architecture-back-copy": "Django REST Framework로 병원 검색, AI 추천, 방문 기록, 댓글, 즐겨찾기 API를 구성했습니다.",
    "architecture-data-title": "데이터 모델",
    "architecture-data-copy": "병원, 진료과, 사용자 위치, 병원 댓글, 방문 기록, 커뮤니티 모델을 분리해 검색과 기록 흐름을 유지했습니다.",
    "architecture-caption": "핵심은 증상 분석 결과를 단순 텍스트로 끝내지 않고 진료과 검색, 병원 상세, 개인 기록으로 이어지게 만든 점입니다.",
    "role-title": "역할 정리",
    "role-1-title": "병원 데이터 전처리",
    "role-1-copy": "공공 병원 데이터와 진료과 정보를 병합하고, 검색과 추천에 필요한 필드 중심으로 정리했습니다.",
    "role-2-title": "DB 모델링과 API 구현",
    "role-2-copy": "병원, 진료과, 방문 기록, 즐겨찾기, 댓글, 사용자 저장 위치 모델을 설계하고 REST API로 연결했습니다.",
    "role-3-title": "추천 결과 화면 흐름",
    "role-3-copy": "증상 입력 결과가 추천 진료과와 병원 목록으로 이어지도록 라우팅, 쿼리 처리, 검색 UI를 구성했습니다.",
    "role-4-title": "프로필/기록 화면",
    "role-4-copy": "즐겨찾기, 방문 이력, 내가 남긴 병원 댓글을 사용자 화면에서 확인할 수 있게 했습니다.",
    "trouble-title": "트러블슈팅",
    "trouble-1-title": "AI 응답 파싱 안정화",
    "trouble-1-copy": "AI 응답에서 추천 진료과 문구가 매번 같은 형식으로 오지 않을 수 있어 정규표현식으로 핵심 진료과를 추출하고 실패 케이스를 예외 처리했습니다.",
    "trouble-2-title": "거리 기반 정렬",
    "trouble-2-copy": "사용자 기본 위치와 병원 좌표를 하버사인 공식으로 계산해 추천 병원 목록이 실제 방문 가능성에 맞춰 가까운 순서로 정렬되도록 했습니다.",
    "trouble-3-title": "병원 데이터 구조화",
    "trouble-3-copy": "엑셀 기반 병원 데이터와 진료과 데이터를 모델 관계에 맞게 정리하고 fixture로 로딩해 검색과 상세 조회가 같은 데이터 구조를 사용하도록 맞췄습니다.",
    "stack-title": "사용기술",
    "stack-summary-front": "Frontend / Web UI",
    "stack-summary-back": "Backend / API / Auth",
    "stack-summary-external": "Data / External API",
    "stack-reason-vue-copy": "증상 입력, 추천 결과, 병원 검색, 프로필처럼 상태가 이어지는 화면을 컴포넌트 단위로 구성하기 위해 사용했습니다.",
    "stack-reason-router-copy": "메인, 추천, 검색, 병원 상세, 방문 기록, 프로필 화면을 라우팅 기준으로 분리했습니다.",
    "stack-reason-pinia-copy": "로그인 상태와 토큰, 사용자 정보를 전역으로 유지해 API 요청과 화면 접근 흐름에 사용했습니다.",
    "stack-reason-axios-copy": "Django REST API와 통신하는 요청 흐름을 정리하고 추천, 검색, 댓글, 방문 기록 데이터를 화면으로 가져왔습니다.",
    "stack-reason-django-copy": "accounts, hospitals, articles 앱을 나누고 병원 검색과 사용자 기록 도메인을 관리하기 위해 사용했습니다.",
    "stack-reason-drf-copy": "프론트엔드에서 필요한 병원 목록, 상세, 추천, 방문 기록, 댓글 데이터를 REST API로 제공했습니다.",
    "stack-reason-auth-copy": "회원가입, 로그인, 토큰 기반 인증 흐름을 빠르게 구성하고 보호된 API 접근에 적용했습니다.",
    "stack-reason-sqlite-copy": "프로젝트 개발 단계에서 병원 데이터와 사용자 기록을 빠르게 저장하고 검증하기 위한 데이터베이스로 사용했습니다.",
    "stack-reason-gpt-copy": "사용자 증상과 설문 응답을 분석해 추천 진료과를 도출하는 서비스 로직에 사용했습니다.",
    "stack-reason-kakao-copy": "병원 위치 검색, 지도 마커, 장소 탐색 흐름을 웹 화면에 연결하기 위해 사용했습니다.",
    "stack-reason-pandas-copy": "엑셀 기반 병원 원천 데이터를 병합하고 정리하는 전처리 과정에 사용했습니다.",
    "stack-reason-fixture-copy": "정리된 병원, 진료과, 설문 데이터를 Django 모델에 반복 로딩하기 위해 fixture 형태로 구성했습니다.",
    "aria-screen-category": "화면 카테고리",
    "aria-screen-list": "화면 목록",
    "theme-day": "테마: 주간",
    "theme-night": "테마: 야간",
    "theme-theme": "테마: 의료",
    "alt-architecture": "medicare ERD",
  },
  en: {
    eyebrow: "AI Hospital Recommendation Platform",
    "hero-summary": "A full-stack healthcare platform that receives symptoms in natural language, recommends a department with generative AI, and guides users to visitable hospitals based on location.",
    "hero-link-screens": "View Screens",
    "hero-link-role": "View Role",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Composition API · Router · Pinia",
    "snapshot-back": "DRF · dj-rest-auth · Token Auth",
    "snapshot-ai": "Symptom analysis · Department extraction",
    "snapshot-map": "Kakao Map · Distance-based recommendations",
    "snapshot-period": "Full-stack web project",
    "overview-title": "Problem Definition",
    "overview-copy": "Users can describe where they feel pain, but it is hard to decide which department to visit. medicare connects symptom input, AI department recommendation, distance-based hospital search, and visit records into one decision flow.",
    "value-title": "Core Implementation Points",
    "value-copy": "Public hospital data was organized for department-based search, while favorites, comments, visit history, and saved locations were implemented through Django REST APIs. Vue screens handle real post-login user flows through Pinia state and Axios API calls.",
    "highlights-title": "Core Features",
    "feature-1-title": "AI Department Recommendation",
    "feature-1-copy": "Long enough symptom text is analyzed immediately, while short input is supplemented through surveys to derive a recommended department.",
    "feature-2-title": "Location-based Hospital Search",
    "feature-2-copy": "Hospitals are filtered by recommended department and the user's default location, then sorted by proximity using Haversine distance.",
    "feature-3-title": "Visit Record Management",
    "feature-3-copy": "Visit date, symptoms, diagnosis, wait time, rating, and memo can be saved as personal hospital-use history.",
    "feature-4-title": "Community and Feedback",
    "feature-4-copy": "Posts, comments, likes, hospital comments, and favorites are connected so hospital experiences can be shared and revisited.",
    "screens-title": "Screen Composition",
    "architecture-title": "Architecture",
    "architecture-lead": "The accounts, hospitals, and articles domains are separated while hospital data, departments, favorites, comments, visit records, and saved user locations are connected. Recommendation results are sorted by distance using both user location and hospital coordinates.",
    "architecture-front-title": "Frontend Flow",
    "architecture-front-copy": "Vue Router and Pinia manage login state, symptom input, recommendation results, hospital search, and profile-screen flow.",
    "architecture-back-title": "Backend API",
    "architecture-back-copy": "Django REST Framework provides APIs for hospital search, AI recommendation, visit records, comments, and favorites.",
    "architecture-data-title": "Data Model",
    "architecture-data-copy": "Hospitals, departments, user locations, hospital comments, visit records, and community models are separated to maintain search and record flows.",
    "architecture-caption": "The key point is that AI symptom analysis does not stop as text; it continues into department search, hospital details, and personal records.",
    "role-title": "Role Summary",
    "role-1-title": "Hospital Data Preprocessing",
    "role-1-copy": "Merged public hospital data and department information, then organized fields needed for search and recommendation.",
    "role-2-title": "DB Modeling and API Implementation",
    "role-2-copy": "Designed hospital, department, visit record, favorite, comment, and saved-location models and connected them through REST APIs.",
    "role-3-title": "Recommendation Result Flow",
    "role-3-copy": "Built routing, query handling, and search UI so symptom results lead into recommended departments and hospital lists.",
    "role-4-title": "Profile/Record Screens",
    "role-4-copy": "Favorites, visit history, and hospital comments written by the user are visible from the user screen.",
    "trouble-title": "Troubleshooting",
    "trouble-1-title": "Stabilized AI Response Parsing",
    "trouble-1-copy": "AI responses may not always use the same wording, so a regular expression extracts the core department and failure cases are handled.",
    "trouble-2-title": "Distance-based Sorting",
    "trouble-2-copy": "Distance between the user's default location and hospital coordinates is calculated with the Haversine formula so recommendations are sorted by actual visit feasibility.",
    "trouble-3-title": "Hospital Data Structuring",
    "trouble-3-copy": "Excel-based hospital and department data was organized around model relationships and loaded as fixtures so search and detail pages share the same data structure.",
    "stack-title": "Tech Stack",
    "stack-summary-front": "Frontend / Web UI",
    "stack-summary-back": "Backend / API / Auth",
    "stack-summary-external": "Data / External API",
    "stack-reason-vue-copy": "Used to build connected-state screens such as symptom input, recommendation results, hospital search, and profile in components.",
    "stack-reason-router-copy": "Separated main, recommendation, search, hospital detail, visit record, and profile screens by routes.",
    "stack-reason-pinia-copy": "Maintained login state, tokens, and user data globally for API requests and screen access.",
    "stack-reason-axios-copy": "Organized requests to the Django REST API and loaded recommendation, search, comment, and visit-record data into screens.",
    "stack-reason-django-copy": "Used to separate accounts, hospitals, and articles apps and manage hospital search plus user records.",
    "stack-reason-drf-copy": "Provided hospital lists, details, recommendations, visit records, and comments as REST APIs for the frontend.",
    "stack-reason-auth-copy": "Used to quickly build signup, login, and token authentication flows and apply them to protected APIs.",
    "stack-reason-sqlite-copy": "Used during development to quickly store and verify hospital data and user records.",
    "stack-reason-gpt-copy": "Used in service logic to analyze symptoms and survey answers and derive a recommended department.",
    "stack-reason-kakao-copy": "Used to connect hospital location search, map markers, and place exploration into the web screen.",
    "stack-reason-pandas-copy": "Used in preprocessing to merge and clean Excel-based hospital source data.",
    "stack-reason-fixture-copy": "Prepared cleaned hospital, department, and survey data as fixtures for repeated loading into Django models.",
    "aria-screen-category": "Screen category",
    "aria-screen-list": "Screen list",
    "theme-day": "Theme: Day",
    "theme-night": "Theme: Night",
    "theme-theme": "Theme: Medical",
    "alt-architecture": "medicare ERD",
  },
  ja: {
    eyebrow: "AI病院推薦プラットフォーム",
    "hero-summary": "ユーザーの症状を自然言語で受け取り、生成AIで適切な診療科を推薦し、位置情報を基に訪問可能な病院を案内するフルスタックヘルスケアプラットフォームです。",
    "hero-link-screens": "画面を見る",
    "hero-link-role": "役割整理",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Composition API · Router · Pinia",
    "snapshot-back": "DRF · dj-rest-auth · Token Auth",
    "snapshot-ai": "症状分析 · 診療科抽出",
    "snapshot-map": "Kakao Map · 距離順病院推薦",
    "snapshot-period": "フルスタックWebプロジェクト",
    "overview-title": "問題定義",
    "overview-copy": "ユーザーは「どこが痛いか」は説明できても、どの診療科に行くべきかすぐ判断するのは難しいです。medicareは症状入力、AI診療科推薦、距離ベース病院探索、訪問記録までを一つの意思決定フローとして結びました。",
    "value-title": "核心実装ポイント",
    "value-copy": "公共病院データを整理して診療科別検索が可能なようにモデル化し、お気に入り、コメント、訪問履歴、保存位置をDjango REST APIで構成しました。Vue画面はPinia状態とAxios API呼び出しを基にログイン後の実使用フローを処理します。",
    "highlights-title": "主な機能",
    "feature-1-title": "AI診療科推薦",
    "feature-1-copy": "十分な長さの自然言語症状は即時AI分析を行い、短い入力は追加アンケートで補完して推薦診療科を導きました。",
    "feature-2-title": "位置情報ベース病院探索",
    "feature-2-copy": "推薦診療科とユーザー基本位置を基準に病院を絞り込み、Haversine距離計算で近い病院を並べました。",
    "feature-3-title": "訪問記録管理",
    "feature-3-copy": "訪問日、症状、診断、待ち時間、評価、メモを残し、個人の病院利用記録として管理できるようにしました。",
    "feature-4-title": "コミュニティとフィードバック",
    "feature-4-copy": "投稿、コメント、いいね、病院コメント、お気に入りを接続し、病院経験を共有して再確認できるよう構成しました。",
    "screens-title": "画面構成",
    "architecture-title": "アーキテクチャ",
    "architecture-lead": "accounts、hospitals、articlesドメインを分離し、病院データ、診療科、お気に入り、コメント、訪問記録、ユーザー保存位置を接続しました。推薦結果はユーザー位置と病院座標を一緒に使用して距離順に並べます。",
    "architecture-front-title": "フロントエンドフロー",
    "architecture-front-copy": "Vue RouterとPiniaを使用し、ログイン状態、症状入力、推薦結果、病院検索、プロフィール画面フローを管理しました。",
    "architecture-back-title": "バックエンドAPI",
    "architecture-back-copy": "Django REST Frameworkで病院検索、AI推薦、訪問記録、コメント、お気に入りAPIを構成しました。",
    "architecture-data-title": "データモデル",
    "architecture-data-copy": "病院、診療科、ユーザー位置、病院コメント、訪問記録、コミュニティモデルを分離し、検索と記録の流れを維持しました。",
    "architecture-caption": "核心は症状分析結果を単なるテキストで終わらせず、診療科検索、病院詳細、個人記録へ続けた点です。",
    "role-title": "役割整理",
    "role-1-title": "病院データ前処理",
    "role-1-copy": "公共病院データと診療科情報を統合し、検索と推薦に必要なフィールド中心に整理しました。",
    "role-2-title": "DBモデリングとAPI実装",
    "role-2-copy": "病院、診療科、訪問記録、お気に入り、コメント、ユーザー保存位置モデルを設計しREST APIで接続しました。",
    "role-3-title": "推薦結果画面フロー",
    "role-3-copy": "症状入力結果が推薦診療科と病院リストへ続くよう、ルーティング、クエリ処理、検索UIを構成しました。",
    "role-4-title": "プロフィール/記録画面",
    "role-4-copy": "お気に入り、訪問履歴、自分が残した病院コメントをユーザー画面で確認できるようにしました。",
    "trouble-title": "トラブルシューティング",
    "trouble-1-title": "AI応答パース安定化",
    "trouble-1-copy": "AI応答の推薦診療科文言が毎回同じ形式とは限らないため、正規表現で核心診療科を抽出し失敗ケースを例外処理しました。",
    "trouble-2-title": "距離ベース整列",
    "trouble-2-copy": "ユーザー基本位置と病院座標をHaversine公式で計算し、推薦病院リストを実際の訪問可能性に合わせて近い順に並べました。",
    "trouble-3-title": "病院データ構造化",
    "trouble-3-copy": "Excelベースの病院データと診療科データをモデル関係に合わせて整理し、fixtureとして読み込んで検索と詳細照会が同じデータ構造を使うようにしました。",
    "stack-title": "使用技術",
    "stack-summary-front": "Frontend / Web UI",
    "stack-summary-back": "Backend / API / Auth",
    "stack-summary-external": "Data / External API",
    "stack-reason-vue-copy": "症状入力、推薦結果、病院検索、プロフィールのように状態が続く画面をコンポーネント単位で構成するために使用しました。",
    "stack-reason-router-copy": "メイン、推薦、検索、病院詳細、訪問記録、プロフィール画面をルーティング基準で分離しました。",
    "stack-reason-pinia-copy": "ログイン状態、トークン、ユーザー情報をグローバルに維持し、APIリクエストと画面アクセスフローに使用しました。",
    "stack-reason-axios-copy": "Django REST APIとの通信フローを整理し、推薦、検索、コメント、訪問記録データを画面に取得しました。",
    "stack-reason-django-copy": "accounts、hospitals、articlesアプリを分け、病院検索とユーザー記録ドメインを管理するために使用しました。",
    "stack-reason-drf-copy": "フロントエンドで必要な病院リスト、詳細、推薦、訪問記録、コメントデータをREST APIで提供しました。",
    "stack-reason-auth-copy": "会員登録、ログイン、トークンベース認証フローを素早く構成し、保護されたAPIアクセスに適用しました。",
    "stack-reason-sqlite-copy": "開発段階で病院データとユーザー記録を素早く保存し検証するデータベースとして使用しました。",
    "stack-reason-gpt-copy": "ユーザー症状とアンケート回答を分析し、推薦診療科を導くサービスロジックに使用しました。",
    "stack-reason-kakao-copy": "病院位置検索、地図マーカー、場所探索フローをWeb画面へ接続するために使用しました。",
    "stack-reason-pandas-copy": "Excelベースの病院原本データを統合して整理する前処理に使用しました。",
    "stack-reason-fixture-copy": "整理済みの病院、診療科、アンケートデータをDjangoモデルへ繰り返し読み込むためfixture形式で構成しました。",
    "aria-screen-category": "画面カテゴリ",
    "aria-screen-list": "画面一覧",
    "theme-day": "テーマ: 昼間",
    "theme-night": "テーマ: 夜間",
    "theme-theme": "テーマ: 医療",
    "alt-architecture": "medicare ERD",
  },
};

let currentLang = "ko";
let currentCategory = "flow";
let currentScreenKey = "symptom";

function getCategoryLabel(category) {
  return SCREEN_CATEGORY_LABELS[currentLang][category] || category;
}

function getVisibleScreens() {
  return SCREEN_FRAMES.filter((screen) => screen.category === currentCategory);
}

function getScreenTitle(screen) {
  return screen.data.titles[currentLang] || screen.data.titles.ko;
}

function renderFilters() {
  const group = document.getElementById("screen-filter-group");
  if (!group) return;

  group.replaceChildren();
  SCREEN_CATEGORY_ORDER.forEach((category) => {
    const button = document.createElement("button");
    button.className = "screen-filter";
    button.type = "button";
    button.textContent = getCategoryLabel(category);
    button.classList.toggle("is-active", category === currentCategory);
    button.setAttribute("aria-pressed", String(category === currentCategory));
    button.addEventListener("click", () => {
      currentCategory = category;
      currentScreenKey = getVisibleScreens()[0]?.key || currentScreenKey;
      renderFilters();
      renderList();
      renderScreen();
    });
    group.appendChild(button);
  });
}

function renderList() {
  const list = document.getElementById("screen-list");
  if (!list) return;

  const visibleScreens = getVisibleScreens();
  if (!visibleScreens.some((screen) => screen.key === currentScreenKey)) {
    currentScreenKey = visibleScreens[0]?.key || SCREEN_FRAMES[0]?.key || "";
  }

  list.replaceChildren();
  visibleScreens.forEach((screen) => {
    const button = document.createElement("button");
    const isActive = screen.key === currentScreenKey;
    button.className = "screen-item";
    button.type = "button";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", String(isActive));

    const label = document.createElement("strong");
    label.textContent = getScreenTitle(screen);

    button.append(label);
    button.addEventListener("click", () => {
      currentScreenKey = screen.key;
      renderList();
      renderScreen();
    });
    list.appendChild(button);
  });
}

function renderScreen() {
  const screen = SCREEN_FRAMES.find((item) => item.key === currentScreenKey) || SCREEN_FRAMES[0];
  if (!screen) return;

  const image = document.getElementById("screen-image");
  if (image) {
    image.src = screen.src;
    image.alt = `medicare ${getScreenTitle(screen)}`;
  }

  const desc = document.getElementById("screen-description");
  if (desc) desc.textContent = screen.data.descriptions[currentLang] || screen.data.descriptions.ko;

  const points = document.getElementById("screen-points");
  if (points) {
    points.replaceChildren();
    (screen.data.points[currentLang] || screen.data.points.ko).forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      points.appendChild(li);
    });
  }
}

function applyTranslations(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  Object.entries(t).forEach(([id, text]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  });
  document.getElementById("screen-filter-group")?.setAttribute("aria-label", t["aria-screen-category"]);
  document.getElementById("screen-list")?.setAttribute("aria-label", t["aria-screen-list"]);
  document.querySelector("#architecture img")?.setAttribute("alt", t["alt-architecture"]);
  document.querySelectorAll(".lang-button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  updateThemeToggle(document.body.dataset.theme || "day");
  renderFilters();
  renderList();
  renderScreen();
}

const themeStorageKey = "medicare-theme";
const themeOptions = ["day", "night", "theme"];
const themeToggle = document.querySelector(".theme-toggle");
const themeIcons = {
  day: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>',
  night: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
  theme: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0 0 3.5H16a1.5 1.5 0 0 1 0 3z"></path><circle cx="7.5" cy="10.5" r=".5"></circle><circle cx="12" cy="7.5" r=".5"></circle><circle cx="16.5" cy="10.5" r=".5"></circle></svg>',
};

function updateThemeToggle(theme) {
  if (!themeToggle) return;
  const label = TRANSLATIONS[currentLang][`theme-${theme}`] || theme;
  themeToggle.innerHTML = themeIcons[theme] || themeIcons.day;
  themeToggle.dataset.theme = theme;
  themeToggle.classList.add("is-active");
  themeToggle.setAttribute("aria-label", label);
}

function setTheme(theme, persist = true) {
  const nextTheme = themeOptions.includes(theme) ? theme : "day";
  document.body.dataset.theme = nextTheme;
  updateThemeToggle(nextTheme);
  if (persist) localStorage.setItem(themeStorageKey, nextTheme);
}

function initStackReasons() {
  document.querySelectorAll(".stack-shell").forEach((shell) => {
    const groups = shell.querySelectorAll(".stack-group");
    const buttons = shell.querySelectorAll(".stack-chip[data-reason-target]");
    const panels = shell.querySelectorAll(".stack-reason-panel");
    let syncingStack = false;

    const syncOpenGroup = (activeGroup) => {
      if (!activeGroup) return;
      syncingStack = true;
      groups.forEach((group) => {
        if (group === activeGroup) {
          group.setAttribute("open", "");
        } else {
          group.removeAttribute("open");
        }
      });
      syncingStack = false;
    };

    const activateReason = (button) => {
      const targetId = button.dataset.reasonTarget;
      if (!targetId) return;

      buttons.forEach((node) => node.classList.remove("is-active"));
      panels.forEach((panel) => panel.classList.remove("is-active"));

      button.classList.add("is-active");
      syncOpenGroup(button.closest(".stack-group"));

      const targetPanel = shell.querySelector(`#${targetId}`);
      if (targetPanel) targetPanel.classList.add("is-active");
    };

    const activateGroup = (group) => {
      const selectedButton = group.querySelector(".stack-chip.is-active[data-reason-target]");
      const fallbackButton = group.querySelector(".stack-chip[data-reason-target]");
      if (selectedButton || fallbackButton) {
        activateReason(selectedButton || fallbackButton);
      } else {
        syncOpenGroup(group);
      }
    };

    const defaultButton = shell.querySelector(".stack-chip.is-active[data-reason-target]") || buttons[0];
    if (defaultButton) activateReason(defaultButton);

    buttons.forEach((button) => {
      button.addEventListener("click", () => activateReason(button));
    });

    groups.forEach((group) => {
      group.addEventListener("toggle", () => {
        if (syncingStack) return;
        if (group.open) {
          activateGroup(group);
          return;
        }
        const hasOpenGroup = Array.from(groups).some((item) => item.open);
        if (!hasOpenGroup) {
          const activeButton = shell.querySelector(".stack-chip.is-active[data-reason-target]");
          if (activeButton) activateReason(activeButton);
        }
      });
    });
  });
}

document.querySelectorAll(".lang-button").forEach((btn) => {
  btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
});

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.body.dataset.theme || "day";
  const currentIndex = themeOptions.indexOf(currentTheme);
  const nextTheme = themeOptions[(currentIndex + 1) % themeOptions.length];
  setTheme(nextTheme);
});

initStackReasons();
setTheme(localStorage.getItem(themeStorageKey) || "day", false);
applyTranslations(currentLang);
