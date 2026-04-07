const flowData = {
  home: {
    title: "홈",
    type: "Main Entry",
    file: "home_main_screen.png",
    description: "앱에 로그인한 뒤 가장 먼저 보게 되는 메인 화면으로, 메뉴 열기, 일기 작성 시작, 최근 일기 확인, 캘린더 확인까지 주요 기능으로 진입하는 출발점입니다.",
    points: [
      "실제 홈 스크린샷으로 첫 진입 경험을 보여줍니다.",
      "핵심 이동 포인트만 핫스팟으로 지정해 발표 흐름을 따라가기 쉽습니다.",
      "방 오브젝트 중심 UI 구조를 그대로 확인할 수 있습니다.",
    ],
    actions: [
      { label: "상단 메뉴 열기", target: "menu" },
      { label: "고양이와 대화 시작", target: "write" },
      { label: "최근 일기 확인", target: "read" },
    ],
    hotspots: [
      { label: "메뉴", target: "menu", x: 78.2, y: 4.7, w: 14.1, h: 6.5, shape: "circle" },
      { label: "고양이", target: "write", x: 5.5, y: 52.0, w: 48.0, h: 33.0, shape: "rounded" },
      { label: "일기장", target: "read", x: 43.4, y: 73.5, w: 44.8, h: 9.8, shape: "rounded" },
      { label: "캘린더", target: "calendar", x: 7.3, y: 13.3, w: 85.5, h: 36.8, shape: "frame" },
    ],
  },
  menu: {
    title: "홈 메뉴",
    type: "Navigation Layer",
    file: "home_menu_active_screen.png",
    description: "홈 화면 우상단 메뉴 버튼을 눌렀을 때 열리는 오버레이 화면으로, 프로필, 튜토리얼, 일기 작성, 일기 확인, 캘린더 등 핵심 화면으로 빠르게 이동할 수 있습니다.",
    points: [
      "홈 화면 위에 열리는 실제 메뉴 오버레이 화면입니다.",
      "메뉴 버튼을 눌렀을 때의 분기 흐름을 한 장면에서 설명할 수 있습니다.",
      "홈 경험의 허브 역할을 하는 화면입니다.",
    ],
    actions: [
      { label: "일기 작성 시작", target: "write" },
      { label: "캘린더로 이동", target: "calendar" },
    ],
    hotspots: [
      { label: "프로필", target: "profile", x: 46.7, y: 11.3, w: 45.6, h: 6.6, shape: "rounded" },
      { label: "튜토리얼", target: "tutorial01", x: 46.7, y: 26.4, w: 45.6, h: 6.6, shape: "rounded" },
      { label: "일기 작성", target: "write", x: 46.7, y: 34.0, w: 45.6, h: 6.6, shape: "rounded" },
      { label: "일기 확인", target: "read", x: 46.7, y: 41.5, w: 45.6, h: 6.6, shape: "rounded" },
      { label: "캘린더", target: "calendar", x: 46.7, y: 49.1, w: 45.6, h: 6.6, shape: "rounded" },
      { label: "홈", target: "home", x: 78.2, y: 4.7, w: 14.1, h: 6.5, shape: "circle" },
    ],
  },
  write: {
    title: "일기 작성",
    type: "Diary Write",
    file: "diary_write.png",
    description: "질문형 입력 흐름을 따라 오늘의 감정과 상황을 기록하는 화면으로, 사용자가 답변을 작성한 뒤 완료 버튼을 통해 분석 결과 화면으로 이어지게 됩니다.",
    points: [
      "질문 중심 입력 구조를 스크린샷으로 보여줍니다.",
      "작성 완료 후 결과 화면으로 자연스럽게 이어집니다.",
      "실제 앱 작성 UI의 분위기를 그대로 전달합니다.",
    ],
    actions: [
      { label: "작성 결과 보기", target: "result" },
      { label: "홈으로 이동", target: "home" },
    ],
    hotspots: [
      { label: "뒤로", target: "__back", x: 4.0, y: 4.0, w: 14.5, h: 6.8, shape: "circle" },
      { label: "완료", target: "result", x: 73.1, y: 83.4, w: 15.6, h: 5.7, shape: "rounded" },
    ],
  },
  read: {
    title: "일기 확인",
    type: "Diary Read",
    file: "diary_read_screen.png",
    description: "작성 완료된 일기의 제목과 본문, 추천 활동을 다시 확인하는 화면으로, 하단 액션을 통해 데일리 피드백 팝업이나 캘린더 일정 흐름으로 이어질 수 있습니다.",
    points: [
      "작성 이후 읽기 경험을 실제 화면으로 확인할 수 있습니다.",
      "그래프와 캘린더로 이어지는 하단 액션 구조가 드러납니다.",
      "콘텐츠 중심 화면 구성을 그대로 보여줍니다.",
    ],
    actions: [
      { label: "그래프 팝업 보기", target: "graph" },
      { label: "캘린더로 이동", target: "calendar" },
    ],
    hotspots: [
      { label: "뒤로", target: "home", x: 3.6, y: 4.3, w: 15.4, h: 7.1, shape: "circle" },
      { label: "더보기", target: "read", x: 65.9, y: 4.4, w: 24.1, h: 4.5, shape: "rounded" },
      { label: "그래프", target: "graph", x: 28.2, y: 87.3, w: 18.5, h: 8.5, shape: "circle" },
      { label: "일정 추가", target: "calendar", x: 60.5, y: 87.3, w: 18.5, h: 8.5, shape: "circle" },
    ],
  },
  result: {
    title: "일기 결과",
    type: "Diary Result",
    file: "diary_result.png",
    description: "일기 작성이 끝난 뒤 감정 분석 결과와 본문, 추천 활동을 한 화면에서 확인하는 결과 화면으로, 이후 데일리 피드백 팝업이나 캘린더 등록 흐름으로 연결됩니다.",
    points: [
      "결과 화면의 정보 밀도를 실제 스크린샷으로 보여줍니다.",
      "그래프 팝업과 캘린더 연결이 핵심 후속 액션입니다.",
      "작성 플로우의 도착점 역할을 하는 화면입니다.",
    ],
    actions: [
      { label: "그래프 팝업 열기", target: "graph" },
      { label: "캘린더로 이동", target: "calendar" },
    ],
    hotspots: [
      { label: "그래프", target: "graph", x: 15.9, y: 84.5, w: 17.2, h: 8.7, shape: "circle" },
      { label: "홈", target: "home", x: 38.8, y: 84.5, w: 17.2, h: 8.7, shape: "circle" },
      { label: "캘린더", target: "calendar", x: 61.7, y: 84.5, w: 17.2, h: 8.7, shape: "circle" },
    ],
  },
  graph: {
    title: "데일리 피드백 팝업",
    type: "Insight Popup",
    file: "diary_graph_modal.png",
    description: "일기 결과 화면 위에 오버레이 형태로 열리는 팝업으로, 감정 피드백과 추천 활동을 더 집중해서 확인하고 일정 추가 흐름으로 바로 이어질 수 있는 화면입니다.",
    points: [
      "오버레이 형태의 결과 확장 UI를 바로 확인할 수 있습니다.",
      "결과 화면 맥락을 유지한 채 추가 정보를 제공합니다.",
      "이후 일정 추가나 프로필 흐름으로 연결하기 좋습니다.",
    ],
    actions: [
      { label: "이전 화면으로 돌아가기", target: "__back" },
      { label: "캘린더로 이동", target: "calendar" },
    ],
    hotspots: [
      { label: "닫기", target: "__back", x: 13.8, y: 11.4, w: 10.0, h: 5.0, shape: "circle" },
      { label: "추가", target: "calendar", x: 34.9, y: 81.7, w: 30.8, h: 5.2, shape: "pill" },
    ],
  },
  calendar: {
    title: "캘린더",
    type: "Diary + Device Calendar",
    file: "calendar_event_list.png",
    description: "선택한 날짜의 일정 목록과 일기 확인 버튼을 함께 보여주는 화면으로, 앱 안의 감정 기록과 기기 캘린더 일정을 한 흐름 안에서 관리할 수 있도록 구성했습니다.",
    points: [
      "일정 목록과 일기 연결 구조를 실제 캡처로 보여줍니다.",
      "날짜 선택 이후 상세 일정 관리로 이어집니다.",
      "앱 데이터와 일정 탐색 경험이 만나는 화면입니다.",
    ],
    actions: [
      { label: "일정 수정/추가 팝업 보기", target: "calendarEdit" },
      { label: "프로필 보기", target: "profile" },
    ],
    hotspots: [
      { label: "뒤로", target: "home", x: 3.6, y: 4.3, w: 15.4, h: 7.1, shape: "circle" },
      { label: "일정 추가", target: "calendarEdit", x: 83.3, y: 49.8, w: 10.1, h: 4.9, shape: "circle" },
      { label: "일정 수정", target: "calendarEdit", x: 3.8, y: 56.4, w: 91.0, h: 8.3, shape: "rounded" },
      { label: "일기 확인", target: "read", x: 59.0, y: 85.3, w: 32.1, h: 6.5, shape: "pill" },
    ],
  },
  calendarEdit: {
    title: "일정 수정/추가 팝업",
    type: "Calendar Update/Add Popup",
    file: "calendar_event_edit_popup.png",
    description: "캘린더 화면 위에서 열리는 일정 수정/추가 팝업으로, 제목, 시간, 장소, 알림 정보를 입력하거나 수정한 뒤 저장하여 다시 캘린더 화면으로 복귀하는 구조입니다.",
    points: [
      "캘린더 위에서 수정/추가 팝업이 열리는 구조를 보여줍니다.",
      "일정 입력과 수정 UX를 함께 설명하기 좋습니다.",
      "저장 후 다시 캘린더로 복귀하는 단계를 설명할 수 있습니다.",
    ],
    actions: [
      { label: "캘린더로 돌아가기", target: "calendar" },
      { label: "저장 후 캘린더로", target: "calendar" },
    ],
    hotspots: [
      { label: "취소", target: "calendar", x: 61.0, y: 71.9, w: 10.0, h: 5.0, shape: "rounded" },
      { label: "저장", target: "calendar", x: 73.0, y: 71.3, w: 17.3, h: 5.7, shape: "rounded" },
    ],
  },
  profile: {
    title: "프로필 / 그래프",
    type: "Profile Analytics",
    file: "profile_graph_screen.png",
    description: "사용자의 기본 정보와 함께 주간·월간 감정 그래프를 확인할 수 있는 화면으로, 누적된 기록을 회고하고 프로필 편집 화면으로 이동하는 중심 페이지입니다.",
    points: [
      "프로필과 감정 통계를 한 화면에서 확인할 수 있습니다.",
      "설정과 편집 흐름으로 자연스럽게 이어집니다.",
      "사용자 누적 데이터 관점의 화면이라는 점이 분명합니다.",
    ],
    actions: [
      { label: "프로필 편집 열기", target: "profileEdit" },
      { label: "로그인 보기", target: "login" },
    ],
    hotspots: [
      { label: "뒤로", target: "home", x: 2.7, y: 2.3, w: 16.8, h: 7.8, shape: "circle" },
      { label: "로그아웃", target: "login", x: 80.4, y: 2.2, w: 13.2, h: 5.2, shape: "pill" },
      { label: "편집", target: "profileEdit", x: 79.8, y: 10.2, w: 12.8, h: 6.2, shape: "circle" },
    ],
  },
  profileEdit: {
    title: "프로필 편집 1",
    type: "Profile Edit",
    file: "profile_edit_basic_info.png",
    description: "닉네임, 직업, 지역 등 기본 프로필 정보를 수정하는 첫 번째 편집 화면으로, 저장하거나 다음 버튼을 눌러 세부 설정 페이지로 이어질 수 있습니다.",
    points: [
      "실제 편집 폼 중심 화면을 그대로 보여줍니다.",
      "프로필 조회와 수정이 분리된 구조를 확인할 수 있습니다.",
      "다음 버튼으로 편집 2페이지로 이동합니다.",
    ],
    actions: [
      { label: "프로필로 돌아가기", target: "profile" },
      { label: "편집 2페이지로 이동", target: "profileEditDetail" },
    ],
    hotspots: [
      { label: "뒤로", target: "profile", x: 3.4, y: 2.7, w: 16.2, h: 7.4, shape: "circle" },
      { label: "저장", target: "profile", x: 9.5, y: 91.0, w: 40.5, h: 6.8, shape: "rounded" },
      { label: "다음", target: "profileEditDetail", x: 52.4, y: 91.0, w: 40.5, h: 6.8, shape: "rounded" },
    ],
  },
  profileEditDetail: {
    title: "프로필 편집 2",
    type: "Profile Settings",
    file: "profile_edit_screen.png",
    description: "비밀번호 변경, 관심사, 사용 목적, 알림 설정 등 세부 프로필 항목을 다루는 두 번째 편집 화면으로, 프로필 관리 흐름의 확장 페이지 역할을 합니다.",
    points: [
      "프로필 편집 2페이지의 실제 화면입니다.",
      "비밀번호, 관심사, 사용 목적, 일기 알람을 한 화면에서 다룹니다.",
      "이전 버튼으로 편집 1페이지로 돌아갈 수 있습니다.",
    ],
    actions: [
      { label: "편집 1페이지로 돌아가기", target: "profileEdit" },
      { label: "프로필로 돌아가기", target: "profile" },
    ],
    hotspots: [
      { label: "뒤로", target: "profileEdit", x: 3.4, y: 2.7, w: 16.2, h: 7.4, shape: "circle" },
      { label: "이전", target: "profileEdit", x: 53.0, y: 90.7, w: 40.8, h: 7.0, shape: "rounded" },
      { label: "회원탈퇴", target: "profile", x: 10.0, y: 90.7, w: 40.8, h: 7.0, shape: "rounded" },
    ],
  },
  login: {
    title: "로그인",
    type: "Auth",
    file: "login_screen.png",
    description: "앱 사용을 시작할 때 가장 먼저 진입하는 인증 화면으로, 로그인 실행뿐 아니라 비밀번호 찾기와 회원가입 흐름으로도 분기되는 출발점입니다.",
    points: [
      "인증 화면까지 포함해 전체 사용자 여정을 마무리합니다.",
      "회원 흐름의 시작점과 복귀 지점을 함께 설명할 수 있습니다.",
      "포트폴리오에서 앱 전반의 완결성을 보강하는 화면입니다.",
    ],
    actions: [
      { label: "회원가입으로 이동", target: "signup01" },
      { label: "비밀번호 찾기로 이동", target: "forgotPassword" },
    ],
    hotspots: [
      { label: "로그인", target: "home", x: 65.5, y: 32.9, w: 19.1, h: 6.6, shape: "rounded", z: 3 },
      { label: "비밀번호 찾기", target: "forgotPassword", x: 11.7, y: 40.5, w: 20.5, h: 5.3, shape: "rounded", z: 3 },
      { label: "회원가입", target: "signup01", x: 67.8, y: 40.5, w: 16.8, h: 4.4, shape: "rounded", z: 3 },
    ],
  },
  forgotPassword: {
    title: "비밀번호 찾기",
    type: "Auth Recovery",
    file: "forgot_password_screen.png",
    description: "로그인 화면에서 진입하는 계정 복구 화면으로, 사용자 이메일을 입력해 새 비밀번호를 발송받고 다시 로그인 흐름으로 돌아갈 수 있도록 구성했습니다.",
    points: [
      "로그인 화면에서 바로 이동할 수 있습니다.",
      "계정 복구 흐름을 보여주는 인증 보조 화면입니다.",
      "이메일 입력 후 임시 비밀번호 발송 흐름을 설명할 수 있습니다.",
    ],
    actions: [
      { label: "로그인으로 돌아가기", target: "login" },
      { label: "비밀번호 발송 후 로그인으로 이동", target: "login" },
    ],
    hotspots: [
      { label: "뒤로", target: "login", x: 11.7, y: 9.8, w: 19.0, h: 9.5, shape: "circle" },
      { label: "새 비밀번호 보내기", target: "login", x: 47.0, y: 53.3, w: 41.5, h: 6.3, shape: "rounded" },
    ],
  },
  signup01: {
    title: "회원가입 1",
    type: "Signup Account",
    file: "signup_01_account_info.png",
    description: "회원가입의 첫 단계로, 이메일과 비밀번호 등 기본 계정 정보를 입력하며 전체 가입 흐름을 시작하는 화면입니다.",
    points: [
      "회원가입의 시작 화면입니다.",
      "기본 계정 정보를 입력합니다.",
      "다음 단계로 이어지는 구조를 보여줍니다.",
    ],
    actions: [
      { label: "회원가입 2로 이동", target: "signup02" },
      { label: "로그인으로 돌아가기", target: "login" },
    ],
    hotspots: [
      { label: "이전", target: "login", x: 9.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
      { label: "다음", target: "signup02", x: 62.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
    ],
  },
  signup02: {
    title: "회원가입 2",
    type: "Signup Profile",
    file: "signup_02_profile_info.png",
    description: "회원가입 두 번째 단계로, 닉네임 등 기본 프로필 정보를 입력해 사용자의 초기 프로필 구성을 진행하는 화면입니다.",
    points: [
      "닉네임과 프로필 정보를 설정합니다.",
      "회원가입 흐름의 두 번째 단계입니다.",
      "다음 버튼으로 목적 선택으로 이어집니다.",
    ],
    actions: [
      { label: "회원가입 3으로 이동", target: "signup03" },
      { label: "회원가입 1로 돌아가기", target: "signup01" },
    ],
    hotspots: [
      { label: "이전", target: "signup01", x: 9.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
      { label: "다음", target: "signup03", x: 62.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
    ],
  },
  signup03: {
    title: "회원가입 3",
    type: "Signup Purpose",
    file: "signup_03_purpose_selection.png",
    description: "회원가입 세 번째 단계로, 사용 목적을 선택해 이후 개인화 흐름에 반영할 수 있도록 구성한 선택형 화면입니다.",
    points: [
      "앱을 사용하는 목적을 고르는 단계입니다.",
      "중간 단계 화면으로 다음 관심사 선택으로 이어집니다.",
      "회원가입 흐름을 설명하기 좋은 선택형 화면입니다.",
    ],
    actions: [
      { label: "회원가입 4로 이동", target: "signup04" },
      { label: "회원가입 2로 돌아가기", target: "signup02" },
    ],
    hotspots: [
      { label: "이전", target: "signup02", x: 9.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
      { label: "다음", target: "signup04", x: 62.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
    ],
  },
  signup04: {
    title: "회원가입 4",
    type: "Signup Interests",
    file: "signup_04_interest_selection.png",
    description: "회원가입 네 번째 단계로, 사용자의 관심사를 선택해 추천과 프로필 설정 흐름에 반영하기 위한 화면입니다.",
    points: [
      "관심사 선택 단계입니다.",
      "선택형 UI를 포함한 회원가입 흐름을 보여줍니다.",
      "다음 알림 설정 단계로 이어집니다.",
    ],
    actions: [
      { label: "회원가입 5로 이동", target: "signup05" },
      { label: "회원가입 3으로 돌아가기", target: "signup03" },
    ],
    hotspots: [
      { label: "이전", target: "signup03", x: 9.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
      { label: "다음", target: "signup05", x: 62.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
    ],
  },
  signup05: {
    title: "회원가입 5",
    type: "Signup Notifications",
    file: "signup_05_notification_settings.png",
    description: "회원가입 다섯 번째 단계로, 알림 수신 여부와 관련 설정을 조정해 가입 이후의 사용 경험을 준비하는 화면입니다.",
    points: [
      "알림 관련 설정을 조정하는 단계입니다.",
      "회원가입 후속 사용성을 보여주는 화면입니다.",
      "다음 약관 동의 단계로 이어집니다.",
    ],
    actions: [
      { label: "회원가입 6으로 이동", target: "signup06" },
      { label: "회원가입 4로 돌아가기", target: "signup04" },
    ],
    hotspots: [
      { label: "이전", target: "signup04", x: 9.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
      { label: "다음", target: "signup06", x: 62.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
    ],
  },
  signup06: {
    title: "회원가입 6",
    type: "Signup Terms",
    file: "signup_06_terms_consent.png",
    description: "회원가입 여섯 번째 단계로, 서비스 이용에 필요한 약관 동의를 확인하고 완료 화면으로 넘어가기 전 마지막 입력을 마무리하는 화면입니다.",
    points: [
      "회원가입 마무리 직전 단계입니다.",
      "필수 약관 동의 흐름을 보여줍니다.",
      "완료 화면으로 이동합니다.",
    ],
    actions: [
      { label: "회원가입 완료로 이동", target: "signup07" },
      { label: "회원가입 5로 돌아가기", target: "signup05" },
    ],
    hotspots: [
      { label: "이전", target: "signup05", x: 9.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
      { label: "다음", target: "signup07", x: 62.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
    ],
  },
  signup07: {
    title: "회원가입 완료",
    type: "Signup Complete",
    file: "signup_07_complete_screen.png",
    description: "회원가입이 정상적으로 완료되었음을 보여주는 마지막 화면으로, 이전 단계로 돌아가거나 완료 버튼을 눌러 로그인 화면으로 복귀할 수 있습니다.",
    points: [
      "회원가입 플로우의 마지막 단계입니다.",
      "완료 후 로그인 화면으로 돌아가는 흐름을 설명할 수 있습니다.",
      "발표용 사용자 여정 마무리 화면입니다.",
    ],
    actions: [
      { label: "회원가입 6으로 돌아가기", target: "signup06" },
      { label: "완료 후 로그인으로 이동", target: "login" },
    ],
    hotspots: [
      { label: "이전", target: "signup06", x: 9.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
      { label: "완료", target: "login", x: 62.0, y: 86.3, w: 29.2, h: 6.0, shape: "rounded" },
    ],
  },
  tutorial01: {
    title: "튜토리얼 1",
    type: "Tutorial Intro",
    file: "tutorial_01_intro_cat.png",
    description: "튜토리얼의 시작 화면으로, 캐릭터와 함께 앱의 기본 사용 흐름을 소개하며 이후 튜토리얼 페이지들로 순차적으로 이동할 수 있는 출발점입니다.",
    points: [
      "홈 메뉴의 튜토리얼 버튼에서 진입합니다.",
      "튜토리얼 시작 화면을 실제 캡처로 보여줍니다.",
      "이후 개별 튜토리얼 화면들로 이어질 수 있는 출발점입니다.",
    ],
    actions: [
      { label: "튜토리얼 2로 이동", target: "tutorial02" },
      { label: "홈 메뉴로 돌아가기", target: "menu" },
    ],
    hotspots: [
      { label: "나가기", target: "menu", x: 5.2, y: 4.4, w: 14.5, h: 6.8, shape: "circle" },
      { label: "다음", target: "tutorial02", x: 78.0, y: 41.0, w: 14.0, h: 18.0, shape: "rounded" },
    ],
  },
};

const tutorialStepMeta = [
  ["tutorial02", "튜토리얼 2", "Tutorial Question", "tutorial_02_question_card.png", "질문 카드와 질문 확인 영역이 어떤 방식으로 안내되는지 보여주는 튜토리얼 화면입니다."],
  ["tutorial03", "튜토리얼 3", "Tutorial Answer Start", "tutorial_03_answer_start_button.png", "답변 시작 버튼의 의미와 일기 작성 흐름 진입 방식을 설명하는 튜토리얼 화면입니다."],
  ["tutorial04", "튜토리얼 4", "Tutorial Skip", "tutorial_04_skip_button.png", "스킵 버튼을 통해 현재 단계를 넘기는 방식을 안내하는 튜토리얼 화면입니다."],
  ["tutorial05", "튜토리얼 5", "Tutorial Finish", "tutorial_05_finish_button.png", "완료 버튼을 눌러 결과 화면으로 넘어가는 흐름을 설명하는 튜토리얼 화면입니다."],
  ["tutorial06", "튜토리얼 6", "Tutorial Result Body", "tutorial_06_diary_result_content.png", "일기 결과 화면의 본문 영역과 핵심 정보 구성을 소개하는 튜토리얼 화면입니다."],
  ["tutorial07", "튜토리얼 7", "Tutorial Bottom Actions", "tutorial_07_bottom_actions.png", "결과 화면 하단 액션 버튼들이 어떤 후속 흐름으로 연결되는지 설명하는 튜토리얼 화면입니다."],
  ["tutorial08", "튜토리얼 8", "Tutorial Recent Diary", "tutorial_08_recent_diary_entry.png", "홈 화면에서 최근 일기로 진입하는 방식을 안내하는 튜토리얼 화면입니다."],
  ["tutorial09", "튜토리얼 9", "Tutorial More Menu", "tutorial_09_diary_more_menu.png", "일기 확인 화면의 더보기 메뉴와 추가 선택 흐름을 설명하는 튜토리얼 화면입니다."],
  ["tutorial10", "튜토리얼 10", "Tutorial Diary View", "tutorial_10_diary_navigation.png", "일기 확인 화면에서 내용을 읽고 이동하는 전체 흐름을 설명하는 튜토리얼 화면입니다."],
  ["tutorial11", "튜토리얼 11", "Tutorial Recommendation", "tutorial_11_recommendation_card.png", "추천 활동 카드가 어떤 의미를 가지는지 안내하는 튜토리얼 화면입니다."],
  ["tutorial12", "튜토리얼 12", "Tutorial Graph And Add", "tutorial_12_graph_and_add_actions.png", "그래프 확인과 일정 추가 버튼의 역할을 함께 설명하는 튜토리얼 화면입니다."],
  ["tutorial13", "튜토리얼 13", "Tutorial Calendar Overview", "tutorial_13_calendar_overview.png", "캘린더 화면의 전체 구성과 확인 가능한 정보를 소개하는 튜토리얼 화면입니다."],
  ["tutorial14", "튜토리얼 14", "Tutorial Month Navigation", "tutorial_14_calendar_month_navigation.png", "캘린더 월 이동 헤더와 탐색 방식을 설명하는 튜토리얼 화면입니다."],
  ["tutorial15", "튜토리얼 15", "Tutorial Date Selection", "tutorial_15_calendar_date_selection.png", "캘린더에서 날짜를 선택하고 해당 일정을 확인하는 방식을 안내하는 튜토리얼 화면입니다."],
  ["tutorial16", "튜토리얼 16", "Tutorial Day Panel", "tutorial_16_calendar_day_panel.png", "캘린더 하단 패널을 통해 선택 날짜의 상세 정보를 보는 방식을 설명하는 튜토리얼 화면입니다."],
  ["tutorial17", "튜토리얼 17", "Tutorial Home Menu", "tutorial_17_home_menu.png", "홈 메뉴의 전체 구성과 각 메뉴가 어떤 화면으로 이어지는지 소개하는 튜토리얼 화면입니다."],
];

tutorialStepMeta.forEach(([key, title, type, file, description], index) => {
  const previousKey = index === 0 ? "tutorial01" : tutorialStepMeta[index - 1][0];
  const nextKey = index === tutorialStepMeta.length - 1 ? "menu" : tutorialStepMeta[index + 1][0];
  const actions = [];
  const hotspots = [
    { label: "나가기", target: "menu", x: 5.2, y: 4.4, w: 14.5, h: 6.8, shape: "circle" },
  ];

  if (index >= 0) {
    actions.push({ label: "이전 튜토리얼로 이동", target: previousKey });
    hotspots.push({ label: "이전", target: previousKey, x: 7.0, y: 41.0, w: 14.0, h: 18.0, shape: "rounded" });
  }

  if (index < tutorialStepMeta.length - 1) {
    actions.push({ label: "다음 튜토리얼로 이동", target: nextKey });
    hotspots.push({ label: "다음", target: nextKey, x: 78.0, y: 41.0, w: 14.0, h: 18.0, shape: "rounded" });
  }

  if (index === tutorialStepMeta.length - 1) {
    actions.push({ label: "홈 메뉴로 돌아가기", target: nextKey });
  }

  flowData[key] = {
    title,
    type,
    file,
    description,
    points: [
      `${title}에 해당하는 실제 튜토리얼 스크린샷입니다.`,
      "현재 페이지 번호가 흐름과 breadcrumb에 그대로 반영됩니다.",
      "이전/다음 버튼으로 튜토리얼 전체 흐름을 따라갈 수 있습니다.",
    ],
    actions,
    hotspots,
  };
});

const titleNode = document.getElementById("flow-title");
const typeNode = document.getElementById("flow-type");
const descriptionNode = document.getElementById("flow-description");
const hintNode = document.getElementById("flow-hint");
const pointsNode = document.getElementById("flow-points");
const actionsNode = document.getElementById("flow-actions");
const stageCanvasNode = document.getElementById("flow-stage-canvas");
const flowTitleSequenceNode = document.getElementById("flow-title-sequence");

let currentStep = "login";
let currentPath = ["login"];

const homeFlowSteps = new Set([
  "home",
  "menu",
  "tutorial01",
  "write",
  "result",
  "graph",
  "read",
  "calendar",
  "calendarEdit",
  "profile",
  "profileEdit",
  "profileEditDetail",
]);

const authFlowSteps = new Set([
  "login",
  "forgotPassword",
  "signup01",
  "signup02",
  "signup03",
  "signup04",
  "signup05",
  "signup06",
  "signup07",
]);

const signupSteps = new Set([
  "signup01",
  "signup02",
  "signup03",
  "signup04",
  "signup05",
  "signup06",
  "signup07",
]);

function hotspotClass(shape) {
  if (shape === "circle") return "flow-hotspot-circle";
  if (shape === "pill") return "flow-hotspot-pill";
  if (shape === "frame") return "flow-hotspot-frame";
  return "flow-hotspot-rounded";
}

function stageMarkup(stepKey) {
  const step = flowData[stepKey];
  if (!step) return "";

  const hotspots = [...(step.hotspots || [])]
    .sort((a, b) => (a.z || 1) - (b.z || 1))
    .map((hotspot) => `
      <button
        class="flow-hotspot ${hotspotClass(hotspot.shape)}"
        type="button"
        data-target="${hotspot.target}"
        data-label="${hotspot.label}"
        style="left:${hotspot.x}%; top:${hotspot.y}%; width:${hotspot.w}%; height:${hotspot.h}%; z-index:${hotspot.z || 1};"
        aria-label="${hotspot.label}"
      ></button>
    `)
    .join("");

  return `
    <figure class="flow-stage-figure">
      <img
        class="flow-stage-image"
        src="../dailylog-screenshots/${step.file}"
        alt="${step.title} 화면"
      >
      <div class="flow-hotspots">${hotspots}</div>
    </figure>
  `;
}

function bindStageTargets() {
  stageCanvasNode.querySelectorAll("[data-target]").forEach((node) => {
    node.addEventListener("click", () => {
      const target = node.dataset.target;
      if (target === "__back") {
        const previousStep = currentPath[currentPath.length - 2];
        if (previousStep && flowData[previousStep]) renderStep(previousStep);
        return;
      }
      if (target && flowData[target]) renderStep(target);
    });
  });
}

function computePath(nextStep) {
  if (nextStep === "login") return ["login"];
  if (nextStep === "home") return ["home"];
  if (nextStep === "calendar") return ["home", "calendar"];

  if (currentPath.includes(nextStep)) {
    return currentPath.slice(0, currentPath.indexOf(nextStep) + 1);
  }

  if (authFlowSteps.has(nextStep)) {
    let authPath = currentPath[0] === "login"
      ? currentPath.filter((step) => authFlowSteps.has(step))
      : ["login"];

    if (signupSteps.has(nextStep)) {
      authPath = authPath.filter((step) => !signupSteps.has(step));
    }

    return [...authPath, nextStep];
  }

  if (homeFlowSteps.has(nextStep)) {
    let homePath = currentPath[0] === "home"
      ? currentPath.filter((step) => homeFlowSteps.has(step))
      : ["home"];

    if (nextStep !== "menu") {
      homePath = homePath.filter((step) => step !== "menu");
    }

    return [...homePath, nextStep];
  }

  return [nextStep];
}

function currentPathText() {
  return currentPath
    .map((stepKey) => flowData[stepKey]?.title)
    .filter(Boolean)
    .join(" > ");
}

function renderTitleSequence() {
  flowTitleSequenceNode.innerHTML = "";

  currentPath.forEach((stepKey, index) => {
    const step = flowData[stepKey];
    if (!step) return;

    const item = document.createElement("button");
    item.type = "button";
    item.className = "flow-title-step";
    if (index === currentPath.length - 1) {
      item.classList.add("is-current");
      item.disabled = true;
    } else {
      item.addEventListener("click", () => renderStep(stepKey));
    }

    const labelNode = document.createElement("span");
    labelNode.className = "flow-title-step-label";
    labelNode.textContent = step.title;

    item.appendChild(labelNode);
    flowTitleSequenceNode.appendChild(item);

    if (index < currentPath.length - 1) {
      const separator = document.createElement("span");
      separator.className = "flow-title-separator";
      separator.textContent = ">";
      flowTitleSequenceNode.appendChild(separator);
    }
  });
}

function renderStep(stepKey) {
  const step = flowData[stepKey];
  if (!step) return;

  currentPath = computePath(stepKey);
  currentStep = stepKey;
  titleNode.textContent = currentPathText();
  typeNode.textContent = step.type;
  descriptionNode.textContent = step.description;
  hintNode.textContent = "스크린샷 위 강조 영역을 누르면 다음 화면으로 이동합니다.";

  pointsNode.innerHTML = "";
  step.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    pointsNode.appendChild(item);
  });

  actionsNode.innerHTML = "";
  step.actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "flow-action";
    button.textContent = action.label;
    button.addEventListener("click", () => {
      if (action.target === "__back") {
        const previousStep = currentPath[currentPath.length - 2];
        if (previousStep && flowData[previousStep]) renderStep(previousStep);
        return;
      }
      renderStep(action.target);
    });
    actionsNode.appendChild(button);
  });

  stageCanvasNode.innerHTML = stageMarkup(stepKey);
  bindStageTargets();
  renderTitleSequence();
}

function initStackReasons() {
  document.querySelectorAll(".stack-group").forEach((group) => {
    const buttons = group.querySelectorAll(".stack-chip[data-reason-target]");
    const panels = group.querySelectorAll(".stack-reason-panel");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.reasonTarget;
        if (!targetId) return;

        buttons.forEach((node) => node.classList.remove("is-active"));
        panels.forEach((panel) => panel.classList.remove("is-active"));

        button.classList.add("is-active");
        const targetPanel = group.querySelector(`#${targetId}`);
        if (targetPanel) {
          targetPanel.classList.add("is-active");
        }
      });
    });
  });
}

initStackReasons();
renderStep("login");
