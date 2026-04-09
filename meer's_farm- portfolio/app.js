const screens = [
  ["dashboard_all_cell_active", "dashboard", "전체 농장 셀 활성", "전체 농장 기준으로 셀 상태가 활성화된 대시보드 화면입니다.", ["전체 농장 단위 모니터링 화면입니다.", "상위 레벨에서 이상 징후를 먼저 파악하기 좋습니다.", "운영 판단의 출발점이 되는 화면입니다."]],
  ["dashboard_all_cell_inactive", "dashboard", "전체 농장 셀 비활성", "전체 농장 보기에서 셀 상태가 비활성화된 버전입니다.", ["활성/비활성 상태 표현 차이를 보여줍니다.", "동일 구조에서 상태 변화 비교가 가능합니다.", "기본 레이아웃 확인에 적합합니다."]],
  ["dashboard_farm_cell_active", "dashboard", "개별 농장 셀 활성", "특정 농장 기준으로 셀 상태가 활성화된 대시보드입니다.", ["개별 농장 단위 상세 모니터링입니다.", "섹터 상태와 농장 로그 흐름을 함께 파악할 수 있습니다.", "전체 보기에서 개별 보기로 이어집니다."]],
  ["dashboard_farm_cell_inactive", "dashboard", "개별 농장 셀 비활성", "개별 농장 보기에서 셀 상태 비활성 표현을 담은 화면입니다.", ["상태별 UI 대응을 확인할 수 있습니다.", "농장 중심 정보 배치를 보여줍니다.", "비활성 셀 표현 흐름을 설명하기 좋습니다."]],
  ["dashboard_farm_cell_inactive_week", "dashboard", "주간 기준 개별 농장", "개별 농장 대시보드에 주간 관점이 포함된 화면입니다.", ["주간 데이터 확인 흐름을 보여줍니다.", "기간 기준 탐색 구조를 보여줍니다.", "운영 추세 판단에 필요한 시점 비교 화면입니다."]],
  ["dashboard_add_farm_popup", "dashboard", "대시보드 농장 추가 팝업", "대시보드 안에서 농장 추가 팝업을 여는 화면입니다.", ["대시보드 컨텍스트를 유지한 채 추가 작업을 수행합니다.", "생성 흐름이 팝업으로 이어집니다.", "운영 흐름을 끊지 않는 설계 포인트입니다."]],
  ["farm_add_page", "farm", "농장 추가 페이지", "농장 생성 화면으로, 구조 정보와 설정값을 입력해 새로운 농장 데이터를 등록합니다.", ["농장 생성 입력 구조를 확인할 수 있습니다.", "행, 열, 층수 기반 관리 흐름을 보여줍니다.", "대시보드와 연결되는 시작 데이터 입력 화면입니다."]],
  ["farm_dashboard_cell_active", "farm", "농장 관리 셀 활성 화면", "농장 관리 문맥에서 활성 셀 상태를 보여주는 화면입니다.", ["농장 구조와 상태를 같이 보는 화면입니다.", "셀 활성 상태가 명확하게 드러납니다.", "관리와 모니터링이 결합된 레이아웃입니다."]],
  ["farm_dashboard_cell_inactive", "farm", "농장 관리 셀 비활성 화면", "농장 셀 상태가 비활성으로 표현된 버전입니다.", ["공간 구조 중심 UI를 설명하기 좋습니다.", "비활성 상태 피드백을 보여줍니다.", "농장 상태 변화에 따른 시각적 차이를 확인할 수 있습니다."]],
  ["farm_detail_page_1", "farm", "농장 상세 페이지 1", "농장 상세 정보 첫 화면입니다.", ["개별 농장 데이터 심화 조회에 적합합니다.", "상위 대시보드에서 상세로 내려가는 흐름입니다.", "농장 중심 상세 레이아웃을 확인할 수 있습니다."]],
  ["farm_detail_page_2", "farm", "농장 상세 페이지 2", "농장 상세의 다른 상태 또는 추가 정보 버전입니다.", ["상세 페이지의 확장 정보 확인용 화면입니다.", "세부 설정 또는 상태 변화 설명에 적합합니다.", "상세 페이지 내부 구성을 보완합니다."]],
  ["robot_main_page", "robot", "로봇 메인", "로봇 관리의 메인 화면으로, 등록된 로봇 상태와 주요 액션으로 진입하는 출발점입니다.", ["로봇 관제의 메인 허브 화면입니다.", "상태 확인과 액션 선택이 한 화면에서 가능합니다.", "로봇 관리 플로우의 중심 화면입니다."]],
  ["robot_add_page", "robot", "로봇 추가", "새 로봇을 등록하는 화면입니다.", ["로봇 등록 흐름을 보여줍니다.", "농장과 로봇 관계 설정을 설명하기 좋습니다.", "운영 대상 확장 화면입니다."]],
  ["robot_detail_page", "robot", "로봇 상세", "특정 로봇의 상세 정보와 상태를 조회하는 화면입니다.", ["개별 로봇 상태 심화 조회가 가능합니다.", "상세 화면 기준 액션 분기를 설명하기 좋습니다.", "메인 화면에서 세부 관리로 이어집니다."]],
  ["robot_mode_switch", "robot", "로봇 모드 전환", "로봇의 자동/수동 모드를 전환하는 액션 화면입니다.", ["단순 조회를 넘어 제어 기능이 포함됩니다.", "로봇 운영 방식 변경 흐름을 설명하기 좋습니다.", "관제 서비스의 액션 중심 화면입니다."]],
  ["robot_mode_switch_selection", "robot", "로봇 모드 전환 대상", "모드 전환 전 대상 로봇을 선택하는 화면입니다.", ["다중 로봇 환경의 액션 대상 지정 흐름입니다.", "선택과 제어가 분리된 UX입니다.", "대상 선택 단계를 보완해 줍니다."]],
  ["robot_stop", "robot", "로봇 정지", "로봇 정지 명령을 수행하는 액션 화면입니다.", ["운영 중 제어 액션을 직접 보여줍니다.", "긴급 대응 흐름 설명에 적합합니다.", "상태 변화와 연계 설명이 가능합니다."]],
  ["robot_stop_selection", "robot", "로봇 정지 대상", "정지할 로봇을 선택하는 화면입니다.", ["정지 전 대상 선택 단계입니다.", "다중 로봇 액션 처리 구조를 설명합니다.", "실행 전 확인 단계로 활용됩니다."]],
  ["robot_return", "robot", "로봇 복귀", "로봇 복귀 명령을 수행하는 화면입니다.", ["작업 종료 후 원위치 복귀 흐름입니다.", "정지/모드 전환과 함께 제어 세트를 이룹니다.", "복귀 액션 제어를 보여줍니다."]],
  ["robot_return_selection", "robot", "로봇 복귀 대상", "복귀 대상 로봇 선택 화면입니다.", ["복귀 전 대상 선택 단계입니다.", "다중 로봇 환경을 고려한 화면입니다.", "행동 이전의 확인 흐름을 보여줍니다."]],
  ["farm_gallery", "gallery", "농장 갤러리", "농장 단위 이미지 갤러리로, 병해충 이미지와 분석 결과를 시간 흐름에 따라 확인합니다.", ["농장 전체 이미지 이력을 확인할 수 있습니다.", "시각적 근거를 빠르게 찾기 좋습니다.", "리포트와 연결되는 핵심 데이터 화면입니다."]],
  ["sector_gallery", "gallery", "섹터 갤러리", "섹터 단위 병해충 이미지 갤러리입니다.", ["섹터 기준 상세 이미지 탐색이 가능합니다.", "원본/분석 이미지 관리 흐름 설명에 적합합니다.", "필터링과 조회 구조를 보여주기 좋습니다."]],
  ["report_page", "report", "리포트 페이지", "농장별 리포트 목록과 날짜 흐름을 확인하는 메인 리포트 화면입니다.", ["일자 단위 운영 리포트 탐색 화면입니다.", "목록형 확인 흐름을 설명하기 좋습니다.", "로그와 이미지의 진입점 역할을 합니다."]],
  ["report_detail_page", "report", "리포트 상세 페이지", "현재 상황, 권장 조치, 요약 보고서, 위험도 점수를 담는 리포트 상세 화면입니다.", ["리포트의 실제 내용 구조를 확인할 수 있습니다.", "운영 판단을 위한 핵심 정보가 응축된 화면입니다.", "이미지와 로그를 함께 설명하기 좋은 페이지입니다."]],
  ["faq_page", "faq", "FAQ 페이지", "사용자 문의와 도움말 진입을 위한 FAQ 메인 화면입니다.", ["서비스 보조 기능 화면입니다.", "운영자의 도움말 탐색 흐름을 보여줍니다.", "서비스 완성도를 보강하는 섹션입니다."]],
  ["faq_category_selection", "faq", "FAQ 카테고리 선택", "FAQ 카테고리를 선택해 필요한 도움말 영역으로 진입하는 화면입니다.", ["문의 탐색 UX를 분류형으로 구성했습니다.", "도움말 접근 동선을 줄입니다.", "질문 성격별 분기를 설명하기 좋습니다."]],
  ["faq_chat_session_selection", "faq", "FAQ 채팅 세션 선택", "기존 상담 또는 채팅 세션을 선택하는 화면입니다.", ["대화 이력 기반 지원 흐름입니다.", "사용자 문의 맥락 유지에 적합합니다.", "FAQ와 챗봇 경험이 연결됩니다."]],
  ["faq_chatbot", "faq", "FAQ 챗봇", "FAQ 챗봇 화면으로, 질문을 입력하고 즉시 안내를 받는 보조 기능 화면입니다.", ["질의응답 중심 지원 화면입니다.", "정적 FAQ보다 빠른 안내가 가능합니다.", "서비스 보조 인터랙션을 보여줍니다."]],
  ["account_settings_page", "settings", "계정 설정 페이지", "계정 및 운영 환경 관련 설정을 조정하는 화면입니다.", ["설정과 사용자 환경 제어 화면입니다.", "권한 및 개인화 영역과 연결됩니다.", "서비스 운영 편의성을 높이는 기능입니다."]],
  ["profile_edit_page", "settings", "프로필 수정 페이지", "사용자 프로필 정보를 수정하는 화면입니다.", ["프로필 수정 UX를 보여줍니다.", "사용자 데이터 관리 기능을 설명하기 좋습니다.", "설정 화면과 연결되는 대표 화면입니다."]],
  ["topbar_profile_expanded", "settings", "상단 프로필 메뉴 확장", "상단 프로필 메뉴를 확장한 상태의 화면입니다.", ["상단바 기반 빠른 탐색 구조입니다.", "프로필 관련 액션 접근성을 보여줍니다.", "서비스 상단 내비게이션의 일부입니다."]],
  ["topbar_settings_expanded", "settings", "상단 설정 메뉴 확장", "상단 설정 메뉴를 펼친 화면입니다.", ["상단바의 설정 진입 UX입니다.", "빠른 메뉴 확장 구조를 확인할 수 있습니다.", "관리형 웹서비스 분위기를 강화합니다."]],
].map(([key, category, title, description, points]) => ({
  key,
  category,
  title,
  file: `${key}.png`,
  description,
  points,
}));

const translations = {
  ko: {
    heroSummary: "센서 데이터, 로봇 순찰, 병해충 탐지, 운영 리포트를 하나의 흐름으로 연결한 스마트팜 통합 관제 웹 서비스입니다.",
    heroLinkScreens: "화면 둘러보기",
    heroLinkStack: "기술 스택",
    snapshotLabel: "Project Snapshot",
    snapshotReact: "SPA UI Flow",
    snapshotDjango: "REST API",
    snapshotMqtt: "Sensor Update",
    snapshotReport: "Image + Log Linkage",
    overviewKicker: "Overview",
    overviewTitle: "문제 정의",
    overviewCopy: "일반 농부는 병해충 여부와 식물 상태를 직접 눈으로 확인해야 해 많은 시간이 들고, 판단 또한 개인 경험에 크게 의존하는 경우가 많았습니다. Meer's Farm은 자율주행 로봇이 농장을 순찰하며 상태를 자동으로 파악하고, 이를 사용자가 짧은 시간 안에 이해할 수 있도록 수치 데이터와 레포트 형태로 보여주는 흐름을 만드는 데 초점을 맞췄습니다.",
    valueKicker: "Core Value",
    valueTitle: "핵심 구현 포인트",
    valueCopy: "전체 대시보드, 농장 상세, 로봇 제어, 이미지 갤러리, 운영 리포트를 하나의 서비스 흐름으로 연결했습니다. 조회에서 끝나지 않고 상태 확인 이후 원인 파악과 제어 액션까지 자연스럽게 이어지도록 설계한 점이 핵심입니다.",
    highlightsKicker: "Highlights",
    highlightsTitle: "핵심 기능",
    featureTitles: ["통합 대시보드", "농장/섹터 관리", "로봇 제어", "이미지/리포트 연계"],
    featureCopies: [
      "전체 농장 보기와 개별 농장 보기를 나누어 온도, 습도, 조도, pH, NPK, 위험도 데이터를 빠르게 비교할 수 있게 했습니다.",
      "행, 열, 층수 기반 구조 데이터와 자동화 임계값을 함께 다루고, 섹터 단위 상태가 상위 대시보드에 반영되도록 설계했습니다.",
      "로봇 등록, 상세 조회, 모드 전환, 정지, 복귀, 스케줄 타임라인까지 연결해 관제 기능을 강화했습니다.",
      "병해충 이미지와 리포트를 시간 기준으로 매칭해 어떤 문제가 언제 발생했는지 함께 확인할 수 있게 구성했습니다.",
    ],
    screensKicker: "Screen Explorer",
    screensTitle: "스크린샷으로 보는 실제 화면 구성",
    screensCopy: "대시보드, 농장 관리, 로봇, 갤러리, 리포트, FAQ, 설정 흐름을 카테고리별로 확인할 수 있습니다.",
    architectureKicker: "Architecture",
    architectureTitle: "데이터가 상위 관제 화면으로 모이도록 도메인을 분리했습니다.",
    architectureLead: "`accounts`, `farms`, `robots`, `reports`, `faqs` 앱으로 역할을 나누고, 센서 데이터와 외부 JSON 이미지 분석 결과가 최종적으로 대시보드와 리포트에 반영되도록 구성했습니다.",
    architectureCaption: "화면은 React 라우팅 기준으로 분리하고, 백엔드는 도메인별 API와 인증을 분리해 데이터 흐름과 화면 흐름이 명확하게 이어지도록 했습니다.",
    stackKicker: "Tech Stack",
    stackTitle: "사용 기술",
    stackFrontTitle: "Frontend",
    stackFrontCopy: "대시보드, 농장, 로봇, 갤러리, 리포트, 설정 화면을 라우팅 기준으로 분리하고 전용 UI를 구성했습니다.",
    stackBackTitle: "Backend",
    stackBackCopy: "JWT 인증, 농장/섹터/로봇/리포트 모델 분리, 권한 제어, 운영 로그 저장 흐름을 구현했습니다.",
    stackDataTitle: "Data / Infra",
    stackDataCopy: "센서 수신 데이터와 병해충 이미지 정보를 반영해 섹터 상태를 갱신하고, 완료 이력을 로그로 남기도록 구성했습니다.",
    roleKicker: "Contribution",
    roleTitle: "포트폴리오용 역할 정리",
    roleTitles: ["API 설계 및 구현", "대시보드/리포트 UI", "인증 및 권한 처리", "데이터 연결 구조 설계"],
    roleCopies: [
      "Django REST Framework 기반의 농장, 섹터, 로봇, 리포트 API를 설계하고 구현했습니다.",
      "React 기반 대시보드, 리포트, 갤러리, 로봇 상세 화면을 구현하고 화면 흐름을 정리했습니다.",
      "JWT 로그인, 회원가입, 사용자 설정 기능과 관리자/일반 사용자 접근 제어 로직을 적용했습니다.",
      "병해충 이미지, 리포트, 로그를 시간 기준으로 연결해 문제 원인과 대응 방향을 함께 볼 수 있게 했습니다.",
    ],
    troubleKicker: "Troubleshooting",
    troubleTitle: "기술적 문제 해결 포인트",
    troubleTitles: ["응답 형식 정규화", "리포트와 이미지의 시간 매칭", "순찰 완료 상태 관리", "권한 분리와 접근 제어"],
    troubleCopies: [
      "농장, 리포트, 이미지 데이터 응답 형식 차이를 프론트엔드 정규화 로직으로 흡수해 화면 안정성을 높였습니다.",
      "단순 이미지 조회가 아니라 분석 근거 확인이 가능하도록 동일 시점 리포트와 이미지를 연결하는 구조를 설계했습니다.",
      "모든 섹터 데이터 갱신이 끝났을 때 순찰 완료 로그가 남도록 순찰 세션 흐름을 설계했습니다.",
      "사용자 권한에 따라 본인 소유 농장과 로봇만 접근 가능하도록 백엔드 접근 제어 로직을 적용했습니다.",
    ],
    closingKicker: "Summary",
    closingTitle: "스마트팜 운영 데이터를 하나의 관제 흐름으로 묶은 웹 플랫폼",
    closingCopy: "실시간 센서 데이터, 병해충 이미지, 로봇 순찰 로그, 운영 리포트를 연결해 운영자가 상태를 빠르게 파악하고 다음 조치까지 이어갈 수 있도록 만든 프로젝트입니다.",
    categories: { all: "전체", dashboard: "대시보드", farm: "농장", robot: "로봇", gallery: "갤러리", report: "리포트", faq: "FAQ", settings: "설정" },
  },
  en: {
    heroSummary: "An integrated smart farm control web service that connects sensor data, robot patrols, pest detection, and operation reports in one flow.",
    heroLinkScreens: "Browse Screens",
    heroLinkStack: "Tech Stack",
    snapshotLabel: "Project Snapshot",
    snapshotReact: "SPA UI Flow",
    snapshotDjango: "REST API",
    snapshotMqtt: "Sensor Update",
    snapshotReport: "Image + Log Linkage",
    overviewKicker: "Overview",
    overviewTitle: "Problem Definition",
    overviewCopy: "Farmers often spend significant time checking plant condition and pest presence by direct inspection, and those judgments tend to rely heavily on personal experience. Meer's Farm focuses on a flow where an autonomous robot patrols the farm, detects conditions automatically, and presents the results to the user as clear numerical data and report-style summaries that can be understood quickly.",
    valueKicker: "Core Value",
    valueTitle: "Key Implementation Points",
    valueCopy: "The platform connects the overall dashboard, farm detail, robot control, image gallery, and operation reports into one service flow. The key implementation goal was to move naturally from status monitoring to cause analysis and control actions without breaking context.",
    highlightsKicker: "Highlights",
    highlightsTitle: "Core Features",
    featureTitles: ["Integrated Dashboard", "Farm / Sector Management", "Robot Control", "Image / Report Linkage"],
    featureCopies: [
      "Provides all-farm and single-farm views for quick comparison of temperature, humidity, light, pH, NPK, and risk data.",
      "Handles farm structure data and automation thresholds while reflecting sector-level status back to the top dashboard.",
      "Connects robot registration, detail lookup, mode switching, stop, return, and scheduling into one control flow.",
      "Matches pest images and reports by time so operators can review what happened and when it happened together.",
    ],
    screensKicker: "Screen Explorer",
    screensTitle: "Actual UI Through Screenshots",
    screensCopy: "Browse dashboard, farm management, robot, gallery, report, FAQ, and settings flows by category.",
    architectureKicker: "Architecture",
    architectureTitle: "Domains were separated so data gathers into the top control screens.",
    architectureLead: "Responsibilities were divided into `accounts`, `farms`, `robots`, `reports`, and `faqs`, and sensor data plus external JSON image analysis results were routed into the dashboard and reports.",
    architectureCaption: "The frontend was separated by React routes, and the backend by domain APIs and authentication, so data flow and screen flow remain clear.",
    stackKicker: "Tech Stack",
    stackTitle: "Stack",
    stackFrontTitle: "Frontend",
    stackFrontCopy: "Dashboard, farm, robot, gallery, report, and settings pages were split by routing and implemented with dedicated UI components.",
    stackBackTitle: "Backend",
    stackBackCopy: "Implements JWT authentication, separated farm/sector/robot/report models, permission control, and operation log storage.",
    stackDataTitle: "Data / Infra",
    stackDataCopy: "Sensor updates and pest image data are reflected into sector status, and completion history is stored as logs.",
    roleKicker: "Contribution",
    roleTitle: "Role Summary",
    roleTitles: ["API Design and Implementation", "Dashboard / Report UI", "Authentication and Permissions", "Data Linkage Design"],
    roleCopies: [
      "Designed and implemented farm, sector, robot, and report APIs with Django REST Framework.",
      "Built React-based dashboard, report, gallery, and robot detail screens and organized their flow.",
      "Applied JWT login, signup, user settings, and staff/user access control logic.",
      "Connected pest images, reports, and logs by time so causes and responses could be reviewed together.",
    ],
    troubleKicker: "Troubleshooting",
    troubleTitle: "Technical Problem-Solving Points",
    troubleTitles: ["Response Normalization", "Time Matching Between Reports and Images", "Patrol Completion State Management", "Permission Split and Access Control"],
    troubleCopies: [
      "Differences in farm, report, and image response shapes were absorbed with frontend normalization logic for more stable screens.",
      "Reports and images were matched by the same time window so users can verify evidence, not just browse images.",
      "A patrol session flow was designed so a completion log is recorded after all sector updates finish.",
      "Backend access control was applied so users can access only the farms and robots they own.",
    ],
    closingKicker: "Summary",
    closingTitle: "A web platform that unifies smart farm operation data into one control flow",
    closingCopy: "The project connects real-time sensor data, pest images, robot patrol logs, and operation reports so operators can understand status quickly and move to the next action.",
    categories: { all: "All", dashboard: "Dashboard", farm: "Farm", robot: "Robot", gallery: "Gallery", report: "Report", faq: "FAQ", settings: "Settings" },
  },
  ja: {
    heroSummary: "センサーデータ、ロボット巡回、病害虫検知、運用レポートを一つの流れでつなぐスマートファーム統合管制Webサービスです。",
    heroLinkScreens: "画面を見る",
    heroLinkStack: "技術スタック",
    snapshotLabel: "Project Snapshot",
    snapshotReact: "SPA UI Flow",
    snapshotDjango: "REST API",
    snapshotMqtt: "Sensor Update",
    snapshotReport: "Image + Log Linkage",
    overviewKicker: "Overview",
    overviewTitle: "問題定義",
    overviewCopy: "一般の農家は病害虫の有無や植物の状態を直接目で確認する必要があり、多くの時間がかかるうえ、判断も個人の経験に大きく依存しがちでした。Meer's Farmは自律走行ロボットが農場を巡回して状態を自動で把握し、その結果を短時間で理解できる数値データとレポート形式で利用者に見せる流れを重視しています。",
    valueKicker: "Core Value",
    valueTitle: "主要実装ポイント",
    valueCopy: "全体ダッシュボード、農場詳細、ロボット制御、画像ギャラリー、運用レポートを一つのサービスフローとして接続しました。状態確認のあとに原因把握と制御アクションまで自然につながるよう設計した点が核心です。",
    highlightsKicker: "Highlights",
    highlightsTitle: "主要機能",
    featureTitles: ["統合ダッシュボード", "農場 / セクター管理", "ロボット制御", "画像 / レポート連携"],
    featureCopies: [
      "全農場表示と個別農場表示を分け、温度、湿度、照度、pH、NPK、リスクデータをすばやく比較できるようにしました。",
      "構造データと自動化しきい値を扱い、セクター状態が上位ダッシュボードに反映されるように設計しました。",
      "ロボット登録、詳細確認、モード切替、停止、復帰、スケジュールまで一つの流れにまとめました。",
      "病害虫画像とレポートを時刻基準で結び、何がいつ発生したかを同じ文脈で確認できるようにしました。",
    ],
    screensKicker: "Screen Explorer",
    screensTitle: "スクリーンショットで見る実際の画面構成",
    screensCopy: "ダッシュボード、農場管理、ロボット、ギャラリー、レポート、FAQ、設定フローをカテゴリ別に確認できます。",
    architectureKicker: "Architecture",
    architectureTitle: "データが上位管制画面に集まるようにドメインを分離しました。",
    architectureLead: "`accounts`、`farms`、`robots`、`reports`、`faqs` に役割を分け、センサーデータと外部JSON画像解析結果が最終的にダッシュボードとレポートに反映されるように構成しました。",
    architectureCaption: "フロントエンドはReactルーティング基準で分離し、バックエンドはドメイン別APIと認証で整理してデータの流れと画面の流れを明確にしました。",
    stackKicker: "Tech Stack",
    stackTitle: "使用技術",
    stackFrontTitle: "Frontend",
    stackFrontCopy: "ダッシュボード、農場、ロボット、ギャラリー、レポート、設定画面をルーティング基準で分け、専用UIを構成しました。",
    stackBackTitle: "Backend",
    stackBackCopy: "JWT認証、農場 / セクター / ロボット / レポートモデルの分離、権限制御、運用ログ保存を実装しました。",
    stackDataTitle: "Data / Infra",
    stackDataCopy: "センサー更新データと病害虫画像情報をセクター状態に反映し、完了履歴をログとして残すようにしました。",
    roleKicker: "Contribution",
    roleTitle: "担当内容",
    roleTitles: ["API設計と実装", "ダッシュボード / レポートUI", "認証と権限処理", "データ連携構造の設計"],
    roleCopies: [
      "Django REST Frameworkベースで農場、セクター、ロボット、レポートAPIを設計・実装しました。",
      "Reactベースのダッシュボード、レポート、ギャラリー、ロボット詳細画面を実装し、画面フローを整理しました。",
      "JWTログイン、会員登録、ユーザー設定、管理者 / 一般ユーザーのアクセス制御を適用しました。",
      "病害虫画像、レポート、ログを時刻基準でつなぎ、原因と対応を一緒に見られるようにしました。",
    ],
    troubleKicker: "Troubleshooting",
    troubleTitle: "技術的な解決ポイント",
    troubleTitles: ["レスポンス形式の正規化", "レポートと画像の時刻マッチング", "巡回完了状態の管理", "権限分離とアクセス制御"],
    troubleCopies: [
      "農場、レポート、画像データの応答形式の差をフロントエンド正規化ロジックで吸収し、画面の安定性を高めました。",
      "単なる画像閲覧ではなく、根拠確認ができるように同じ時点のレポートと画像を結びました。",
      "すべてのセクター更新が終わった後に巡回完了ログが残るよう、巡回セッションフローを設計しました。",
      "ユーザーが自分の農場とロボットだけにアクセスできるようバックエンド制御を適用しました。",
    ],
    closingKicker: "Summary",
    closingTitle: "スマートファーム運営データを一つの管制フローにまとめたWebプラットフォーム",
    closingCopy: "リアルタイムのセンサーデータ、病害虫画像、ロボット巡回ログ、運用レポートをつなぎ、運営者が状態を素早く把握して次の対応まで進めるようにしたプロジェクトです。",
    categories: { all: "全体", dashboard: "ダッシュボード", farm: "農場", robot: "ロボット", gallery: "ギャラリー", report: "レポート", faq: "FAQ", settings: "設定" },
  },
};

const screenTranslations = {
  en: {
    dashboard_all_cell_active: ["All Farm Cell Active", "An all-farm dashboard view with active cells.", ["Shows monitoring at the full-farm level.", "Good for spotting anomalies from the top level first.", "Works as the starting point for operation decisions."]],
    dashboard_all_cell_inactive: ["All Farm Cell Inactive", "An all-farm dashboard view with inactive cells.", ["Useful for comparing active and inactive visual states.", "Shows state changes within the same layout.", "Good for explaining the base dashboard structure."]],
    dashboard_farm_cell_active: ["Farm Cell Active", "A single-farm dashboard with active cells.", ["Focused on one farm at a time.", "Helps review sector status and logs together.", "Connects the global view to the detailed farm view."]],
    dashboard_farm_cell_inactive: ["Farm Cell Inactive", "A single-farm dashboard with inactive cell status.", ["Shows UI feedback by state.", "Highlights farm-centered information layout.", "Useful for explaining inactive cell handling."]],
    dashboard_farm_cell_inactive_week: ["Farm Cell Inactive Week", "A farm dashboard that includes a weekly view.", ["Shows time-based data flow.", "Useful for period-based exploration.", "Supports trend-based operational review."]],
    dashboard_add_farm_popup: ["Dashboard Add Farm Popup", "A popup for adding a farm directly from the dashboard.", ["Keeps the dashboard context during creation.", "Uses a popup instead of forcing page navigation.", "Helps preserve operation flow."]],
    farm_add_page: ["Farm Add Page", "A page for creating a new farm and entering structure settings.", ["Shows the farm creation flow.", "Includes row, column, and floor-based structure input.", "Acts as the starting screen for farm registration."]],
    farm_dashboard_cell_active: ["Farm Dashboard Cell Active", "A farm management view with active cells.", ["Shows farm structure and status together.", "Makes active cell status easy to read.", "Combines management and monitoring in one layout."]],
    farm_dashboard_cell_inactive: ["Farm Dashboard Cell Inactive", "A farm management view with inactive cells.", ["Useful for explaining structure-based UI.", "Shows inactive-state feedback clearly.", "Highlights visual changes caused by farm state."]],
    farm_detail_page_1: ["Farm Detail Page 1", "The first farm detail screen.", ["Good for deeper farm-level lookup.", "Follows the dashboard-to-detail flow.", "Shows the detail-oriented layout clearly."]],
    farm_detail_page_2: ["Farm Detail Page 2", "An extended farm detail screen.", ["Useful for explaining extended detail information.", "Helps show settings or state variations.", "Complements the farm detail structure."]],
    robot_main_page: ["Robot Main", "The main screen for robot management.", ["Acts as the robot control hub.", "Shows status and actions together.", "Sits at the center of the robot flow."]],
    robot_add_page: ["Robot Add", "A screen for registering a new robot.", ["Shows the robot registration process.", "Useful for explaining farm-robot relationships.", "Extends the set of managed assets."]],
    robot_detail_page: ["Robot Detail", "A detail screen for an individual robot.", ["Supports deeper robot inspection.", "Useful for explaining action branching.", "Connects the main list to detailed control."]],
    robot_mode_switch: ["Robot Mode Switch", "A screen for switching robot mode.", ["Shows direct control actions.", "Useful for explaining auto/manual changes.", "Represents an action-oriented control screen."]],
    robot_mode_switch_selection: ["Robot Mode Switch Target", "A selection screen before switching mode.", ["Shows target selection in multi-robot environments.", "Separates selection from execution.", "Clarifies the step before action."]],
    robot_stop: ["Robot Stop", "A screen for sending a stop command to a robot.", ["Shows direct stop control.", "Useful for emergency response explanation.", "Can be described together with robot state changes."]],
    robot_stop_selection: ["Robot Stop Target", "A selection screen before stopping a robot.", ["Shows the target-selection step.", "Useful for explaining multi-robot handling.", "Acts as a confirmation step before execution."]],
    robot_return: ["Robot Return", "A screen for sending a return command to a robot.", ["Shows the return-to-base flow.", "Pairs well with stop and mode switching.", "Represents return control action."]],
    robot_return_selection: ["Robot Return Target", "A selection screen before returning a robot.", ["Shows pre-action target selection.", "Considers multi-robot environments.", "Useful as a confirmation flow."]],
    farm_gallery: ["Farm Gallery", "A farm-level gallery for pest images and analysis results.", ["Lets users review image history across the farm.", "Helps operators find visual evidence quickly.", "Closely linked with the report flow."]],
    sector_gallery: ["Sector Gallery", "A sector-level pest image gallery.", ["Supports more detailed location-based browsing.", "Useful for explaining original and analyzed image flow.", "Shows filtering and lookup structure clearly."]],
    report_page: ["Report Page", "The main report page for browsing farm reports by date.", ["Used for date-based report review.", "Good for explaining list-based report flow.", "Works as an entry point to logs and images."]],
    report_detail_page: ["Report Detail Page", "A detailed report screen with situation, guidance, and risk score.", ["Shows the actual structure of a report.", "Concentrates information needed for decisions.", "Good for presenting logs and images together."]],
    faq_page: ["FAQ Page", "The main FAQ and support entry page.", ["A support-oriented service screen.", "Shows the help navigation flow.", "Improves the overall completeness of the service."]],
    faq_category_selection: ["FAQ Category Selection", "A screen for choosing an FAQ category.", ["Uses categorized help navigation.", "Shortens the path to support content.", "Useful for explaining branching by question type."]],
    faq_chat_session_selection: ["FAQ Chat Session Selection", "A screen for selecting an FAQ chat session.", ["Shows session-based support flow.", "Keeps the user's inquiry context.", "Connects FAQ and chatbot experience."]],
    faq_chatbot: ["FAQ Chatbot", "A chatbot support screen for FAQ questions.", ["Focused on conversational support.", "Provides faster help than static FAQ.", "Shows an interactive support experience."]],
    account_settings_page: ["Account Settings Page", "A screen for account and environment settings.", ["Handles settings and personalization.", "Connected to permissions and user preferences.", "Improves operational convenience."]],
    profile_edit_page: ["Profile Edit Page", "A screen for editing user profile information.", ["Shows profile editing UX.", "Useful for explaining user data management.", "Represents the settings-related profile flow."]],
    topbar_profile_expanded: ["Topbar Profile Expanded", "An expanded topbar profile menu.", ["Shows quick topbar navigation.", "Highlights access to profile actions.", "Part of the upper navigation flow."]],
    topbar_settings_expanded: ["Topbar Settings Expanded", "An expanded topbar settings menu.", ["Shows quick access from the topbar.", "Makes the expanded menu structure clear.", "Strengthens the managed-service feel."]],
  },
  ja: {
    dashboard_all_cell_active: ["全農場セル有効", "全農場基準でセル状態が有効なダッシュボード画面です。", ["全体農場レベルの監視画面です。", "上位レベルで異常兆候を確認しやすいです。", "運用判断の出発点になる画面です。"]],
    dashboard_all_cell_inactive: ["全農場セル無効", "全農場表示でセル状態が無効なバージョンです。", ["有効 / 無効状態の違いを見せます。", "同じ構造の中で状態変化を比較できます。", "基本ダッシュボード構造の説明に向いています。"]],
    dashboard_farm_cell_active: ["個別農場セル有効", "特定農場基準でセル状態が有効なダッシュボードです。", ["個別農場に集中した監視画面です。", "セクター状態とログを一緒に確認できます。", "全体表示から詳細表示へつながります。"]],
    dashboard_farm_cell_inactive: ["個別農場セル無効", "個別農場表示でセル状態が無効な画面です。", ["状態別UI対応を確認できます。", "農場中心の情報配置を見せます。", "無効セル処理の説明に向いています。"]],
    dashboard_farm_cell_inactive_week: ["週間基準個別農場", "週間観点が含まれた農場ダッシュボード画面です。", ["時系列データの流れを見せます。", "期間基準の探索に向いています。", "傾向把握に役立つ画面です。"]],
    dashboard_add_farm_popup: ["Dashboard Add Farm Popup", "ダッシュボード内で農場追加ポップアップを開く画面です。", ["ダッシュボード文脈を維持したまま追加できます。", "ページ移動ではなくポップアップで進みます。", "運用フローを切らない設計です。"]],
    farm_add_page: ["Farm Add Page", "新しい農場を登録する生成画面です。", ["農場生成フローを見せます。", "行・列・段数ベースの構造入力を含みます。", "農場登録の開始画面として機能します。"]],
    farm_dashboard_cell_active: ["Farm Dashboard Cell Active", "農場管理文脈で有効セル状態を見せる画面です。", ["農場構造と状態を一緒に見せます。", "有効セル状態が明確です。", "管理と監視を一つの画面で扱います。"]],
    farm_dashboard_cell_inactive: ["Farm Dashboard Cell Inactive", "農場セル状態が無効に表現されたバージョンです。", ["構造中心UIの説明に向いています。", "無効状態フィードバックを見せます。", "農場状態による視覚変化を確認できます。"]],
    farm_detail_page_1: ["Farm Detail Page 1", "農場詳細情報の最初の画面です。", ["農場単位の深い確認に向いています。", "ダッシュボードから詳細へ下りる流れです。", "詳細レイアウトを確認できます。"]],
    farm_detail_page_2: ["Farm Detail Page 2", "農場詳細の拡張情報画面です。", ["拡張された詳細情報を見せます。", "設定や状態変化の説明に適しています。", "詳細ページ構成を補完します。"]],
    robot_main_page: ["ロボットメイン", "ロボット管理のメイン画面です。", ["ロボット管制のハブです。", "状態確認と操作選択が同時にできます。", "ロボット管理フローの中心です。"]],
    robot_add_page: ["ロボット追加", "新しいロボットを登録する画面です。", ["ロボット登録フローを見せます。", "農場とロボットの関係説明に向いています。", "管理対象拡張画面です。"]],
    robot_detail_page: ["ロボット詳細", "個別ロボットの詳細画面です。", ["ロボット状態を深く確認できます。", "詳細画面からの操作分岐説明に適しています。", "メイン画面から詳細管理へつながります。"]],
    robot_mode_switch: ["Robot Mode Switch", "ロボットのモードを切り替える画面です。", ["直接制御機能を含みます。", "自動 / 手動切替説明に向いています。", "操作中心の管制画面です。"]],
    robot_mode_switch_selection: ["ロボットモード切替対象", "モード切替前に対象を選ぶ画面です。", ["複数ロボット環境で対象選択を見せます。", "選択と実行を分離したUXです。", "操作前段階を明確にします。"]],
    robot_stop: ["Robot Stop", "ロボット停止命令を実行する画面です。", ["停止制御を直接見せます。", "緊急対応説明に向いています。", "状態変化と一緒に説明できます。"]],
    robot_stop_selection: ["ロボット停止対象", "停止対象ロボットを選ぶ画面です。", ["停止前の対象選択段階です。", "複数ロボット処理の説明に使えます。", "実行前確認として機能します。"]],
    robot_return: ["Robot Return", "ロボット復帰命令を実行する画面です。", ["復帰フローを見せます。", "停止やモード切替と合わせて説明できます。", "復帰制御アクション画面です。"]],
    robot_return_selection: ["ロボット復帰対象", "復帰対象ロボットを選ぶ画面です。", ["復帰前の対象選択段階です。", "複数ロボット環境を考慮しています。", "確認フローとして使えます。"]],
    farm_gallery: ["Farm Gallery", "農場単位の病害虫画像ギャラリーです。", ["農場全体の画像履歴を確認できます。", "視覚的根拠をすばやく探せます。", "レポートと密接につながる画面です。"]],
    sector_gallery: ["Sector Gallery", "セクター単位の病害虫画像ギャラリーです。", ["より細かい位置基準で探索できます。", "原本 / 解析画像フロー説明に向いています。", "フィルタと閲覧構造を見せやすいです。"]],
    report_page: ["Report Page", "日付基準で農場レポートを確認するメイン画面です。", ["日付基準のレポート確認に使います。", "一覧型フロー説明に向いています。", "ログと画像への入口になります。"]],
    report_detail_page: ["Report Detail Page", "状況、対応案内、危険度を含む詳細レポート画面です。", ["実際のレポート構造を確認できます。", "運用判断に必要な情報が集約されています。", "画像とログを一緒に説明しやすい画面です。"]],
    faq_page: ["FAQ Page", "FAQとサポートのメイン画面です。", ["サポート中心の画面です。", "ヘルプ探索フローを見せます。", "サービス完成度を高めます。"]],
    faq_category_selection: ["FAQ Category Selection", "FAQカテゴリを選ぶ画面です。", ["カテゴリ型サポート探索です。", "ヘルプ到達までの距離を短くします。", "質問分岐説明に向いています。"]],
    faq_chat_session_selection: ["FAQ Chat Session Selection", "FAQ相談のチャットセッション選択画面です。", ["セッションベースの支援フローです。", "問い合わせ文脈を維持できます。", "FAQとチャットボット体験をつなぎます。"]],
    faq_chatbot: ["FAQ Chatbot", "FAQチャットボット支援画面です。", ["会話型サポート画面です。", "静的FAQより速い案内が可能です。", "インタラクティブな支援体験を見せます。"]],
    account_settings_page: ["Account Settings Page", "アカウントと環境設定画面です。", ["設定と個人化を扱います。", "権限とユーザー設定につながります。", "運用利便性を高めます。"]],
    profile_edit_page: ["Profile Edit Page", "ユーザープロフィール編集画面です。", ["プロフィール編集UXを見せます。", "ユーザーデータ管理説明に向いています。", "設定関連フローの代表画面です。"]],
    topbar_profile_expanded: ["Topbar Profile Expanded", "上部プロフィールメニュー拡張画面です。", ["上部バー基準の高速探索構造です。", "プロフィール関連操作へのアクセスを見せます。", "上部ナビゲーションの一部です。"]],
    topbar_settings_expanded: ["Topbar Settings Expanded", "上部設定メニュー拡張画面です。", ["上部バーからの高速アクセスを見せます。", "拡張メニュー構造を明確にします。", "管理型サービスの雰囲気を強めます。"]],
  },
};

const categoryKeys = ["dashboard", "farm", "robot", "gallery", "report", "faq", "settings"];
const screenFilterGroup = document.getElementById("screen-filter-group");
const screenList = document.getElementById("screen-list");
const screenCategoryLabel = document.getElementById("screen-category-label");
const screenTitle = document.getElementById("screen-title");
const screenImage = document.getElementById("screen-image");
const screenDescription = document.getElementById("screen-description");
const screenPoints = document.getElementById("screen-points");
const langButtons = document.querySelectorAll(".lang-button");

let currentLang = "ko";
let currentCategory = "dashboard";
let currentScreenKey = screens.find((screen) => screen.category === currentCategory)?.key ?? screens[0].key;

function applyStaticTranslations() {
  const t = translations[currentLang];
  const textMap = {
    "hero-summary": t.heroSummary,
    "hero-link-screens": t.heroLinkScreens,
    "hero-link-stack": t.heroLinkStack,
    "snapshot-label": t.snapshotLabel,
    "snapshot-react": t.snapshotReact,
    "snapshot-django": t.snapshotDjango,
    "snapshot-mqtt": t.snapshotMqtt,
    "snapshot-report": t.snapshotReport,
    "overview-kicker": t.overviewKicker,
    "overview-title": t.overviewTitle,
    "overview-copy": t.overviewCopy,
    "value-kicker": t.valueKicker,
    "value-title": t.valueTitle,
    "value-copy": t.valueCopy,
    "highlights-kicker": t.highlightsKicker,
    "highlights-title": t.highlightsTitle,
    "screens-kicker": t.screensKicker,
    "screens-title": t.screensTitle,
    "screens-copy": t.screensCopy,
    "architecture-kicker": t.architectureKicker,
    "architecture-title": t.architectureTitle,
    "architecture-lead": t.architectureLead,
    "architecture-caption": t.architectureCaption,
    "stack-kicker": t.stackKicker,
    "stack-title": t.stackTitle,
    "stack-front-title": t.stackFrontTitle,
    "stack-front-copy": t.stackFrontCopy,
    "stack-back-title": t.stackBackTitle,
    "stack-back-copy": t.stackBackCopy,
    "stack-data-title": t.stackDataTitle,
    "stack-data-copy": t.stackDataCopy,
    "role-kicker": t.roleKicker,
    "role-title": t.roleTitle,
    "trouble-kicker": t.troubleKicker,
    "trouble-title": t.troubleTitle,
    "closing-kicker": t.closingKicker,
    "closing-title": t.closingTitle,
    "closing-copy": t.closingCopy,
  };

  Object.entries(textMap).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  });

  t.featureTitles.forEach((value, index) => {
    document.getElementById(`feature-${index + 1}-title`).textContent = value;
    document.getElementById(`feature-${index + 1}-copy`).textContent = t.featureCopies[index];
    document.getElementById(`role-${index + 1}-title`).textContent = t.roleTitles[index];
    document.getElementById(`role-${index + 1}-copy`).textContent = t.roleCopies[index];
    document.getElementById(`trouble-${index + 1}-title`).textContent = t.troubleTitles[index];
    document.getElementById(`trouble-${index + 1}-copy`).textContent = t.troubleCopies[index];
  });
}

function getVisibleScreens() {
  return screens.filter((screen) => screen.category === currentCategory);
}

function renderFilters() {
  screenFilterGroup.innerHTML = "";
  categoryKeys.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "screen-filter";
    if (category === currentCategory) button.classList.add("is-active");
    button.textContent = translations[currentLang].categories[category];
    button.addEventListener("click", () => {
      currentCategory = category;
      const visible = getVisibleScreens();
      if (!visible.find((screen) => screen.key === currentScreenKey)) {
        currentScreenKey = visible[0].key;
      }
      renderFilters();
      renderList();
      renderPreview();
    });
    screenFilterGroup.appendChild(button);
  });
}

function renderList() {
  screenList.innerHTML = "";
  getVisibleScreens().forEach((screen) => {
    const localized = screenTranslations[currentLang]?.[screen.key];
    const title = localized?.[0] ?? screen.title;
    const item = document.createElement("button");
    item.type = "button";
    item.className = "screen-item";
    if (screen.key === currentScreenKey) item.classList.add("is-active");
    item.innerHTML = `<strong>${title}</strong>`;
    item.addEventListener("click", () => {
      currentScreenKey = screen.key;
      renderList();
      renderPreview();
    });
    screenList.appendChild(item);
  });
}

function renderPreview() {
  const screen = screens.find((item) => item.key === currentScreenKey);
  if (!screen) return;
  const localized = screenTranslations[currentLang]?.[screen.key];
  const title = localized?.[0] ?? screen.title;
  const description = localized?.[1] ?? screen.description;
  const points = localized?.[2] ?? screen.points;
  if (screenCategoryLabel) {
    screenCategoryLabel.textContent = translations[currentLang].categories[screen.category];
  }
  if (screenTitle) {
    screenTitle.textContent = title;
  }
  screenImage.src = `../meer's_farm-screenshots/${screen.file}`;
  screenImage.alt = `${title} screenshot`;
  screenDescription.textContent = description;
  screenPoints.innerHTML = "";
  points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    screenPoints.appendChild(item);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  applyStaticTranslations();
  renderFilters();
  renderList();
  renderPreview();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage("ko");
