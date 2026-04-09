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
      { label: "메뉴", target: "menu", x: 77.8, y: 1.9, w: 16.0, h: 9.0, shape: "circle" },
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
      { label: "홈", target: "home", x: 77.8, y: 1.9, w: 16.0, h: 9.0, shape: "circle" },
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

const staticTranslations = {
  ko: {
    heroEyebrow: "Emotion Diary Android Project",
    heroSummary: "STT/TTS 기반 일기 작성 어플리케이션 프로젝트입니다.",
    heroPrimary: "화면 보기",
    heroSecondary: "구조 보기",
    heroCardLabel: "Project Snapshot",
    statLabels: ["Jetpack Compose UI", "감정 기록과 결과 화면 구성", "Calendar Provider 유지", "실사용 흐름 기반 화면 구성"],
    introTitles: ["문제 정의", "핵심 구현 포인트"],
    introCopies: [
      "모두가 중요성을 느끼는 하루의 정리를 대화 기반으로 더 간단하게 기록하고, 그 결과를 바탕으로 일정 추천과 일정 관리까지 자연스럽게 이어질 수 있는 경험을 만들고자 했습니다.",
      "Compose 기반 화면 설계, Repository 계층 정리, Room DB 기반 로컬 데이터 저장, 캘린더 프로바이더 연동 유지, 결과 페이지와 프로필 그래프 흐름 검증을 중심으로 작업했습니다.",
    ],
    sectionTitles: ["프로젝트 핵심 기능", "실제 사용 흐름으로 따라가는 화면 구성", "담당 역할", "개발 과정에서 신경 쓴 점", "트러블슈팅", "구조 설계", "사용한 라이브러리/기술", "포트폴리오용 검증 상태"],
    featureTitles: ["일기 작성", "일기 기반 감정 분석", "감정 기반 일정 추천", "캘린더 연동"],
    featureCopies: [
      "질문형 흐름을 따라 하루의 감정과 상황을 기록하고, 결과 화면까지 자연스럽게 이어지도록 구성했습니다.",
      "작성한 일기 내용을 바탕으로 감정 결과를 분석하고, 사용자가 자신의 하루를 돌아볼 수 있도록 피드백을 제공합니다.",
      "분석된 감정 결과를 바탕으로 추천 활동을 제안하고, 이를 일정과 연결해 다음 행동으로 이어질 수 있게 했습니다.",
      "앱 내부 기록과 기기 Calendar Provider 이벤트를 함께 보여주어 감정 기록과 일정 관리를 한 흐름으로 연결합니다.",
    ],
    roleTitles: ["화면 흐름 설계", "Compose 기반 UI 구현", "로컬 데이터 구조 정리", "캘린더 및 프로필 흐름 검증"],
    roleCopies: [
      "로그인, 회원가입, 튜토리얼, 홈, 일기 작성, 결과, 캘린더, 프로필까지 이어지는 주요 사용자 흐름을 설계하고 연결했습니다.",
      "앱의 감성적인 화면 구성을 유지하면서 각 화면의 레이아웃과 상호작용이 자연스럽게 이어지도록 Compose UI를 구현했습니다.",
      "Room DB와 Repository 구조를 통해 일기와 사용자 데이터를 저장하고, 화면 코드와 데이터 계층이 분리되도록 정리했습니다.",
      "Calendar Provider 연동, 일정 수정/추가, 감정 그래프, 프로필 편집까지 실제 사용 흐름 기준으로 화면 동작을 점검했습니다.",
    ],
    processTitles: ["화면 감성 유지", "서버 연동 흐름 검증", "기기 기능 연결", "로컬 데이터 구조 정리"],
    processCopies: [
      "일반적인 앱 레이아웃 대신 방, 다이어리, 종이 질감 같은 오브젝트 중심 인터페이스를 유지했습니다.",
      "서버가 정상적으로 동작하는 환경을 기준으로 일기 작성, 감정 분석 결과, 추천 흐름이 자연스럽게 이어지도록 화면 구성을 점검했습니다.",
      "Calendar Provider는 유지해 실제 기기 일정과 앱 데이터를 함께 확인할 수 있도록 했습니다.",
      "Room DB를 활용해 일기와 사용자 정보를 안정적으로 저장하고, 화면에서 필요한 데이터를 일관된 흐름으로 불러올 수 있도록 구조를 정리했습니다.",
    ],
    troubleTitles: ["리소스 최적화를 통한 성능 개선", "디자인 방향성에 대한 팀 의견 조율", "브랜치 통합 과정의 충돌 해결"],
    troubleCopies: [
      "초기에는 개별 리소스 수가 많고 해상도도 높아 화면 전환 시 앱이 무거워지는 문제가 있었습니다. 이를 해결하기 위해 전체 리소스 해상도를 조정하고, 분산되어 있던 개별 리소스를 통합하는 방식으로 구조를 정리해 렉 유발을 줄이고 보다 안정적인 동작 흐름을 만들었습니다.",
      "초기 디자인을 구체화하는 과정에서 팀원들의 다양한 의견이 나왔고, 타당한 이유가 있는 제안은 적극적으로 수용해 화면에 반영했습니다. 반대로 방향성이 다르다고 판단한 경우에는 제 의견의 근거를 설명해 이해를 맞췄고, 양쪽 의견 모두 애매한 경우에는 팀장의 조율을 통해 기준을 정한 뒤 작업을 진행했습니다.",
      "AI 파트에서 작업한 페이지와 제가 구현한 페이지가 브랜치 통합 과정에서 충돌하면서 일정이 지연되는 이슈가 있었습니다. 변경 범위를 다시 분리해 충돌 지점을 정리하고, 필요한 부분은 재확인 후 병합해 기능 흐름이 끊기지 않도록 통합 작업을 마무리했습니다.",
    ],
    architectureLead: "화면은 UI에 집중하고, 데이터 처리는 ViewModel과 Repository가 분리해 담당하도록 설계했습니다.",
    architectureCaption: "데이터 흐름을 계층별로 분리해 화면 코드가 네트워크와 직접 결합되지 않도록 설계했습니다.",
    stackIntro: "프로젝트에 적용한 주요 기술과 라이브러리를 영역별로 정리했습니다. 핵심 기술은 강조 색상으로 구분했고, 기술명을 누르면 아래에서 사용 이유를 바로 확인할 수 있도록 구성했습니다.",
    stackSummaries: ["UI / Android", "Data / Local Storage", "Network / Security", "Device / Background"],
    closingTitle: "포트폴리오용 검증 상태",
    closingCopy: "현재 이 페이지는 프로젝트 개요와 실제 화면을 한 번에 보여주는 발표용 요약 페이지 역할을 합니다.",
    closingMeta: ["Compose", "Calendar Provider", "Portfolio Ready"],
    flowCategories: {
      auth: "인증",
      home: "홈",
      diary: "일기",
      calendar: "캘린더",
      profile: "프로필",
      tutorial: "튜토리얼",
    },
    flowHint: "스크린샷 위 강조 영역을 누르면 다음 화면으로 이동합니다.",
  },
  en: {
    heroEyebrow: "Emotion Diary Android Project",
    heroSummary: "A diary-writing application project built around STT/TTS-based interaction.",
    heroPrimary: "View Screens",
    heroSecondary: "View Architecture",
    heroCardLabel: "Project Snapshot",
    statLabels: ["Jetpack Compose UI", "Emotion logging and result screens", "Calendar Provider integration", "Real usage flow-centered screens"],
    introTitles: ["Problem", "Implementation Focus"],
    introCopies: [
      "The goal was to make daily reflection easier through conversation-based journaling, then connect the result naturally to activity recommendations and schedule management.",
      "The work focused on Compose-based screen design, repository-layer organization, Room DB-based local storage, keeping Calendar Provider integration, and validating result and profile graph flows.",
    ],
    sectionTitles: ["Core Features", "Screen Flow Through Actual Usage", "My Role", "What I Focused On During Development", "Troubleshooting", "Architecture", "Libraries / Technologies Used", "Portfolio Validation Status"],
    featureTitles: ["Diary Writing", "Emotion Analysis from Diary", "Emotion-Based Recommendations", "Calendar Integration"],
    featureCopies: [
      "The app guides users through a question-based flow so daily emotions and situations can be recorded naturally and connected to the result screen.",
      "It analyzes emotional results from diary content and provides feedback so users can reflect on their day.",
      "It suggests recommended activities based on the analyzed emotional result and connects them to scheduling.",
      "It shows app records together with Calendar Provider events so journaling and schedule management become one connected flow.",
    ],
    roleTitles: ["Flow Design", "Compose UI Implementation", "Local Data Structure", "Calendar and Profile Flow Validation"],
    roleCopies: [
      "Designed and connected the main user flow from login and signup to tutorial, home, diary writing, result, calendar, and profile.",
      "Implemented Compose UI so the app's emotional visual tone and the interaction flow between screens stayed natural.",
      "Organized diary and user data through Room DB and a repository structure so screen code and data layers remained separated.",
      "Checked actual usage flows including Calendar Provider, schedule add/edit, emotion graph, and profile editing.",
    ],
    processTitles: ["Keeping the Visual Mood", "Validating Server Flow", "Connecting Device Features", "Structuring Local Data"],
    processCopies: [
      "Instead of a typical app layout, the interface kept an object-centered style built around a room, diary, and paper-like textures.",
      "Using an environment where the server worked properly, the team verified that diary writing, emotion analysis, and recommendation flows connected naturally.",
      "Calendar Provider was kept so real device schedules and app data could be checked together.",
      "Room DB was used to store diary and user information reliably and to keep screen data flow consistent.",
    ],
    troubleTitles: ["Performance Improvement Through Resource Optimization", "Aligning Team Opinions on Design Direction", "Resolving Conflicts During Branch Integration"],
    troubleCopies: [
      "At first, many individual assets and high resolutions made transitions heavy. To solve this, the overall asset resolution was adjusted and scattered resources were consolidated to reduce lag and improve stability.",
      "During early design refinement, the team had many opinions. Valid suggestions were accepted and reflected, while different directions were discussed with clear reasoning until alignment was reached.",
      "Conflicts between pages from the AI part and pages I implemented delayed integration. The change scope was reorganized and merge points were resolved so the flow could stay intact.",
    ],
    architectureLead: "The screen layer was focused on UI, while data handling was separated into ViewModel and Repository.",
    architectureCaption: "The data flow was separated by layer so screen code would not be directly coupled to networking.",
    stackIntro: "This section organizes the main technologies and libraries used in the project. Core technologies are highlighted, and each item can be clicked to see why it was used.",
    stackSummaries: ["UI / Android", "Data / Local Storage", "Network / Security", "Device / Background"],
    stackReasons: {
      "reason-kotlin": "For a voice-based diary app with ASR and TTS, response speed and device resource control were important. Kotlin made it easier to integrate Android-native audio handling with stable screen performance.",
      "reason-compose": "Used to build object-centered custom UI quickly and manage login, home, diary, calendar, and profile flows consistently as screen state changes.",
      "reason-material3": "Used as a stable component base in Compose while still allowing the interface to be customized to the project's tone.",
      "reason-activity-compose": "Used to connect Compose screens naturally from the Android Activity entry point and keep the app start structure simple.",
      "reason-lifecycle-compose": "Used so lifecycle and state changes could be reflected safely inside Compose screens during navigation and state updates.",
      "reason-room": "Used to store diary and user data locally in a stable way while keeping screen code separated from direct data storage access.",
      "reason-repository": "Applied to separate screens from data sources and reduce coupling by organizing network, local DB, and device features in one layer.",
      "reason-serialization": "Used to serialize app data structures and handle internal state and response values in Kotlin-centered form.",
      "reason-jackson": "Used to map server responses safely into Kotlin objects and structure API response handling with Retrofit.",
      "reason-retrofit": "Used to separate API communication through interfaces and manage response handling in a consistent structure.",
      "reason-okhttp": "Used to process request and response flow reliably and extend communication behavior with interceptors.",
      "reason-logging": "Used to inspect API request and response logs and speed up debugging during server integration.",
      "reason-security": "Used as a security layer for storing sensitive information and authentication-related data more safely.",
      "reason-calendar-provider": "Used to connect emotional records with real device schedules so app records and schedule management could be reviewed together.",
      "reason-workmanager": "Used to process delayed or background work in a stable way suited to Android.",
      "reason-sherpa": "Used as a speech-processing library to support the app's voice-based input flow.",
    },
    closingTitle: "Portfolio Validation Status",
    closingCopy: "This page currently works as a presentation-ready summary page that shows the project overview and actual screens together.",
    closingMeta: ["Compose", "Calendar Provider", "Portfolio Ready"],
    flowCategories: {
      auth: "Auth",
      home: "Home",
      diary: "Diary",
      calendar: "Calendar",
      profile: "Profile",
      tutorial: "Tutorial",
    },
    flowHint: "You can move to the next screen by clicking the highlighted area on the screenshot.",
  },
  ja: {
    heroEyebrow: "Emotion Diary Android Project",
    heroSummary: "STT/TTSベースの対話を中心に構成した日記作成アプリプロジェクトです。",
    heroPrimary: "画面を見る",
    heroSecondary: "構造を見る",
    heroCardLabel: "Project Snapshot",
    statLabels: ["Jetpack Compose UI", "感情記録と結果画面構成", "Calendar Provider連携維持", "実使用フロー中心の画面構成"],
    introTitles: ["課題定義", "実装の焦点"],
    introCopies: [
      "一日の振り返りを対話ベースでより簡単に記録し、その結果をもとにおすすめ活動や予定管理へ自然につなげる体験を目指しました。",
      "Composeベースの画面設計、Repository層の整理、Room DBによるローカル保存、Calendar Provider連携維持、結果画面とプロフィールグラフの流れ検証を中心に進めました。",
    ],
    sectionTitles: ["主要機能", "実際の利用フローで見る画面構成", "担当内容", "開発時に意識した点", "トラブルシューティング", "構造設計", "使用ライブラリ / 技術", "ポートフォリオ確認状態"],
    featureTitles: ["日記作成", "日記ベースの感情分析", "感情ベースのおすすめ提案", "カレンダー連携"],
    featureCopies: [
      "質問型フローに沿って一日の感情や状況を記録し、結果画面へ自然につながるように構成しました。",
      "作成した日記内容をもとに感情結果を分析し、ユーザーが一日を振り返られるようにフィードバックを提供します。",
      "分析された感情結果をもとにおすすめ活動を提案し、それを予定につなげて次の行動へ導きます。",
      "アプリ内記録とCalendar Providerイベントを一緒に見せることで、感情記録と予定管理を一つの流れで扱います。",
    ],
    roleTitles: ["画面フロー設計", "Compose UI実装", "ローカルデータ構造整理", "カレンダー / プロフィール検証"],
    roleCopies: [
      "ログイン、会員登録、チュートリアル、ホーム、日記作成、結果、カレンダー、プロフィールまで続く主要フローを設計して接続しました。",
      "アプリの感性的な画面構成を保ちながら、各画面のレイアウトと相互作用が自然につながるようCompose UIを実装しました。",
      "Room DBとRepository構造を通じて日記とユーザーデータを保存し、画面コードとデータ層が分離されるよう整理しました。",
      "Calendar Provider、予定追加 / 修正、感情グラフ、プロフィール編集まで実使用フロー基準で確認しました。",
    ],
    processTitles: ["画面の感性維持", "サーバーフロー検証", "端末機能連携", "ローカルデータ構造整理"],
    processCopies: [
      "一般的なアプリレイアウトではなく、部屋、日記、紙の質感のようなオブジェクト中心インターフェースを維持しました。",
      "サーバーが正常に動く環境を基準に、日記作成、感情分析結果、おすすめフローが自然につながるように確認しました。",
      "Calendar Providerを維持し、実際の端末予定とアプリデータを一緒に確認できるようにしました。",
      "Room DBを活用して日記とユーザー情報を安定的に保存し、画面で必要なデータを一貫して読み込めるよう整理しました。",
    ],
    troubleTitles: ["リソース最適化による性能改善", "デザイン方向性に対するチーム調整", "ブランチ統合作業の衝突解決"],
    troubleCopies: [
      "初期は個別リソース数と解像度が高く、画面遷移時にアプリが重くなる問題がありました。全体解像度を調整し、散在していたリソースを統合してラグを減らしました。",
      "初期デザインを具体化する過程でさまざまな意見が出ました。妥当な提案は積極的に反映し、方向が異なる場合は根拠を説明して調整しました。",
      "AIパートのページと私が実装したページが統合時に衝突し、日程が遅れる問題がありました。変更範囲を整理し直し、必要部分を再確認して統合作業を終えました。",
    ],
    architectureLead: "画面はUIに集中し、データ処理はViewModelとRepositoryが分離して担当するように設計しました。",
    architectureCaption: "データフローを層別に分け、画面コードがネットワークと直接結合しないようにしました。",
    stackIntro: "このセクションではプロジェクトに適用した主要技術とライブラリを整理しています。重要技術は強調表示し、クリックすると使用理由を確認できます。",
    stackSummaries: ["UI / Android", "Data / Local Storage", "Network / Security", "Device / Background"],
    stackReasons: {
      "reason-kotlin": "ASRとTTSを含む音声ベースの日記アプリでは応答速度と端末資源活用が重要でした。Kotlinを選ぶことでAndroidネイティブ機能へのアクセスと画面性能をより安定して構成できました。",
      "reason-compose": "オブジェクト中心のカスタムUIを素早く構成し、ログイン、ホーム、日記、カレンダー、プロフィールの流れを一貫して管理するために使用しました。",
      "reason-material3": "Compose UIで安定した基本コンポーネントを活用しながら、プロジェクトのトーンに合わせてカスタマイズするために使用しました。",
      "reason-activity-compose": "Android Activityの入口からCompose画面を自然につなぎ、開始構造を簡潔に保つために使用しました。",
      "reason-lifecycle-compose": "ライフサイクルと状態変化をCompose画面内で安定的に反映するために使用しました。",
      "reason-room": "日記とユーザー情報をローカルに安定して保存し、画面コードが保存処理を直接扱わないようにするために使用しました。",
      "reason-repository": "画面とデータソースを分離し、ネットワーク、ローカルDB、端末機能を一つの層で整理するために適用しました。",
      "reason-serialization": "アプリ内部データ構造を直列化し、状態や応答値をKotlin中心で扱うために使用しました。",
      "reason-jackson": "サーバー応答をKotlinオブジェクトへ安定的に変換し、Retrofitと連携するために使用しました。",
      "reason-retrofit": "API通信をインターフェース基盤で分離し、応答処理を一貫した構造で管理するために使用しました。",
      "reason-okhttp": "リクエストとレスポンスの流れを安定して処理し、インターセプターで拡張できるようにするために使用しました。",
      "reason-logging": "API通信ログを確認し、サーバー連携時のデバッグを素早く行うために使用しました。",
      "reason-security": "機密情報と認証関連データをより安全に保存するためのセキュリティ層として活用しました。",
      "reason-calendar-provider": "感情記録と実際の端末予定をつなぎ、一つの流れで確認できるようにするために使用しました。",
      "reason-workmanager": "遅延実行やバックグラウンド作業をAndroid環境で安定的に処理するために使用しました。",
      "reason-sherpa": "音声ベース入力フローを実装するための音声処理ライブラリとして活用しました。",
    },
    closingTitle: "ポートフォリオ確認状態",
    closingCopy: "このページは現在、プロジェクト概要と実際の画面を一度に見せる発表用サマリーページとして機能しています。",
    closingMeta: ["Compose", "Calendar Provider", "Portfolio Ready"],
    flowCategories: {
      auth: "認証",
      home: "ホーム",
      diary: "日記",
      calendar: "カレンダー",
      profile: "プロフィール",
      tutorial: "チュートリアル",
    },
    flowHint: "スクリーンショット上の強調領域を押すと次の画面へ移動できます。",
  },
};

const flowTranslations = {
  en: {
    home: { title: "Home", description: "The first main screen after login. It works as the starting point for opening the menu, starting a diary, checking a recent diary, and opening the calendar.", points: ["Shows the actual first-entry experience through a real screenshot.", "Only the main movement points are highlighted so the presentation flow stays easy to follow.", "Lets viewers understand the object-centered room UI structure."], actions: ["Open Top Menu", "Start Talking with the Cat", "View Recent Diary"], hotspots: ["Menu", "Cat", "Diary", "Calendar"] },
    menu: { title: "Home Menu", description: "An overlay opened from the top-right menu button on the home screen, providing quick entry to profile, tutorial, diary writing, diary review, and calendar.", points: ["Shows the actual menu overlay displayed above the home screen.", "Makes it easy to explain branch flow from the menu button.", "Acts as the hub of the home experience."], actions: ["Start Diary Writing", "Go to Calendar"], hotspots: ["Profile", "Tutorial", "Write", "Diary", "Calendar", "Home"] },
    write: { title: "Diary Writing", description: "A question-based input screen where users record their feelings and situations, then move to the result screen with the complete action.", points: ["Shows the question-centered input structure.", "Naturally continues to the result screen after completion.", "Conveys the actual mood of the writing UI."], actions: ["View Result", "Go Home"], hotspots: ["Back", "Done"] },
    read: { title: "Diary Review", description: "A screen for reviewing a completed diary title, body text, and recommended activity, with bottom actions leading to graph popup or calendar flow.", points: ["Shows the reading experience after writing.", "Reveals the bottom actions that connect to graph and calendar.", "Keeps the content-centered screen composition visible."], actions: ["View Graph Popup", "Go to Calendar"], hotspots: ["Back", "More", "Graph", "Add Schedule"] },
    result: { title: "Diary Result", description: "A result screen that shows emotional analysis, diary content, and recommended activities in one place after writing is finished.", points: ["Shows the information density of the result screen with a real screenshot.", "Graph popup and calendar linkage are the main follow-up actions.", "Acts as the destination of the writing flow."], actions: ["Open Graph Popup", "Go to Calendar"], hotspots: ["Graph", "Home", "Calendar"] },
    graph: { title: "Daily Feedback Popup", description: "An overlay popup opened above the result screen, allowing users to focus on emotional feedback and recommendations and move directly to calendar flow.", points: ["Shows the expanded result UI in overlay form.", "Provides additional information while keeping result-screen context.", "Good for connecting to schedule or profile flow afterward."], actions: ["Go Back", "Go to Calendar"], hotspots: ["Close", "Add"] },
    calendar: { title: "Calendar", description: "A screen that shows schedules for the selected date together with a diary button, so diary records and device calendar events can be managed in one flow.", points: ["Shows schedule list and diary linkage with a real capture.", "Leads from date selection to detailed schedule management.", "Represents the meeting point of app data and calendar browsing."], actions: ["View Edit/Add Popup", "View Profile"], hotspots: ["Back", "Add Schedule", "Edit Schedule", "View Diary"] },
    calendarEdit: { title: "Edit/Add Schedule Popup", description: "A popup opened above the calendar for editing or adding schedules, including title, time, place, and alarm information before returning to the calendar.", points: ["Shows the popup structure opened above the calendar.", "Good for explaining both schedule input and edit UX.", "Makes the return-to-calendar step after saving easy to explain."], actions: ["Back to Calendar", "Save and Return"], hotspots: ["Cancel", "Save"] },
    profile: { title: "Profile / Graph", description: "A page where users can review their profile information together with weekly and monthly emotion graphs, then move to edit flow.", points: ["Shows profile and emotion statistics on one screen.", "Naturally connects to settings and editing.", "Clearly represents a cumulative user-data screen."], actions: ["Open Profile Edit", "View Login"], hotspots: ["Back", "Logout", "Edit"] },
    profileEdit: { title: "Profile Edit 1", description: "The first edit screen for basic profile details such as nickname, job, and region.", points: ["Shows a real form-centered edit screen.", "Makes the separation between profile view and edit clear.", "Moves to the second edit screen with the next button."], actions: ["Back to Profile", "Go to Edit 2"], hotspots: ["Back", "Save", "Next"] },
    profileEditDetail: { title: "Profile Edit 2", description: "The second edit screen for detailed profile items such as password change, interests, purpose, and notification settings.", points: ["Shows the second profile edit page.", "Handles password, interests, purpose, and diary alarms in one screen.", "Allows returning to the first edit page."], actions: ["Back to Edit 1", "Back to Profile"], hotspots: ["Back", "Previous", "Delete Account"] },
    login: { title: "Login", description: "The authentication screen users first see when starting the app, branching to password recovery and signup as well as login.", points: ["Completes the overall user journey by including auth.", "Makes the start and return points of member flow clear.", "Strengthens the completeness of the app in the portfolio."], actions: ["Go to Signup", "Go to Password Recovery"], hotspots: ["Login", "Forgot Password", "Signup"] },
    forgotPassword: { title: "Forgot Password", description: "An account recovery screen entered from login, where users provide email to receive a new password and return to login.", points: ["Directly reachable from the login screen.", "Shows an auxiliary authentication recovery flow.", "Useful for explaining temporary password delivery by email."], actions: ["Back to Login", "Send and Return to Login"], hotspots: ["Back", "Send New Password"] },
    signup01: { title: "Signup 1", description: "The first signup step where users enter basic account information such as email and password.", points: ["The starting screen of the signup flow.", "Collects basic account information.", "Shows the structure leading to the next step."], actions: ["Go to Signup 2", "Back to Login"], hotspots: ["Previous", "Next"] },
    signup02: { title: "Signup 2", description: "The second signup step where users enter basic profile information such as nickname.", points: ["Sets nickname and profile data.", "Second step in the signup flow.", "Continues to purpose selection."], actions: ["Go to Signup 3", "Back to Signup 1"], hotspots: ["Previous", "Next"] },
    signup03: { title: "Signup 3", description: "The third signup step where users select their purpose of use.", points: ["Purpose selection stage.", "A middle step before interest selection.", "Good for explaining choice-based signup flow."], actions: ["Go to Signup 4", "Back to Signup 2"], hotspots: ["Previous", "Next"] },
    signup04: { title: "Signup 4", description: "The fourth signup step where users select their interests.", points: ["Interest selection stage.", "Shows a choice-based screen in the signup flow.", "Leads to notification settings."], actions: ["Go to Signup 5", "Back to Signup 3"], hotspots: ["Previous", "Next"] },
    signup05: { title: "Signup 5", description: "The fifth signup step for notification settings.", points: ["Adjusts notification-related settings.", "Shows post-signup usability preparation.", "Leads to terms consent."], actions: ["Go to Signup 6", "Back to Signup 4"], hotspots: ["Previous", "Next"] },
    signup06: { title: "Signup 6", description: "The sixth signup step where required terms are confirmed before completion.", points: ["The final step before signup completion.", "Shows the required terms-consent flow.", "Moves to the completion screen."], actions: ["Go to Signup Complete", "Back to Signup 5"], hotspots: ["Previous", "Next"] },
    signup07: { title: "Signup Complete", description: "The final screen showing that signup has been completed successfully.", points: ["The last stage of the signup flow.", "Can explain returning to login after completion.", "Works as a closing screen in the user journey."], actions: ["Back to Signup 6", "Complete and Go to Login"], hotspots: ["Previous", "Complete"] },
    tutorial01: { title: "Tutorial 1", description: "The opening tutorial screen that introduces the basic app flow with the character.", points: ["Entered from the tutorial button in the home menu.", "Shows the real tutorial opening screen.", "Acts as the starting point for later tutorial screens."], actions: ["Go to Tutorial 2", "Back to Home Menu"], hotspots: ["Exit", "Next"] },
  },
  ja: {
    home: { title: "ホーム", description: "ログイン後に最初に表示されるメイン画面で、メニュー、日記作成、最近の日記確認、カレンダー確認へ進む出発点です。", points: ["実際のホーム画面で最初の利用体験を見せます。", "主要移動ポイントだけを強調して流れを追いやすくしています。", "部屋オブジェクト中心のUI構造を確認できます。"], actions: ["上部メニューを開く", "猫と会話を始める", "最近の日記を見る"], hotspots: ["メニュー", "猫", "日記帳", "カレンダー"] },
    menu: { title: "ホームメニュー", description: "ホーム画面右上メニューボタンから開くオーバーレイ画面で、プロフィール、チュートリアル、日記作成、日記確認、カレンダーへ素早く移動できます。", points: ["ホーム上に開く実際のメニューオーバーレイです。", "メニューボタンからの分岐フローを説明しやすいです。", "ホーム体験のハブになる画面です。"], actions: ["日記作成を始める", "カレンダーへ移動"], hotspots: ["プロフィール", "チュートリアル", "日記作成", "日記確認", "カレンダー", "ホーム"] },
    write: { title: "日記作成", description: "質問型入力フローに沿って今日の感情と状況を記録し、完了ボタンで結果画面へ進む画面です。", points: ["質問中心の入力構造を見せます。", "完了後に結果画面へ自然につながります。", "実際の作成UIの雰囲気を伝えます。"], actions: ["結果を見る", "ホームへ移動"], hotspots: ["戻る", "完了"] },
    read: { title: "日記確認", description: "作成済みの日記タイトル、本文、おすすめ活動を再確認する画面で、下部アクションからグラフポップアップやカレンダーへ進めます。", points: ["作成後の閲覧体験を実際の画面で確認できます。", "グラフとカレンダーにつながる下部アクションが見えます。", "コンテンツ中心の画面構成をそのまま見せます。"], actions: ["グラフポップアップを見る", "カレンダーへ移動"], hotspots: ["戻る", "もっと見る", "グラフ", "予定追加"] },
    result: { title: "日記結果", description: "日記作成後に感情分析結果、本文、おすすめ活動を一画面で確認できる結果画面です。", points: ["結果画面の情報密度を実際のスクリーンショットで見せます。", "グラフポップアップとカレンダー連携が主要な次アクションです。", "作成フローの到着点になる画面です."] , actions: ["グラフを開く", "カレンダーへ移動"], hotspots: ["グラフ", "ホーム", "カレンダー"] },
    graph: { title: "デイリーフィードバックポップアップ", description: "結果画面上に開くオーバーレイポップアップで、感情フィードバックとおすすめ活動をより集中して確認できます。", points: ["結果拡張UIをオーバーレイ形式で見せます。", "結果画面の文脈を保ったまま追加情報を提供します。", "その後の予定追加やプロフィールフローにつなげやすいです。"], actions: ["前の画面へ戻る", "カレンダーへ移動"], hotspots: ["閉じる", "追加"] },
    calendar: { title: "カレンダー", description: "選択した日の予定一覧と日記確認ボタンを一緒に見せる画面で、感情記録と端末カレンダーを一つの流れで管理できます。", points: ["予定一覧と日記連携構造を実画面で見せます。", "日付選択後に詳細予定管理へ進みます。", "アプリデータと予定探索が出会う画面です。"], actions: ["追加 / 修正ポップアップを見る", "プロフィールを見る"], hotspots: ["戻る", "予定追加", "予定修正", "日記確認"] },
    calendarEdit: { title: "予定修正 / 追加ポップアップ", description: "カレンダー上で開く予定修正・追加ポップアップで、タイトル、時間、場所、通知情報を入力して保存できます。", points: ["カレンダー上で開くポップアップ構造を見せます。", "入力と修正UXを一緒に説明できます。", "保存後にカレンダーへ戻る流れを説明できます。"], actions: ["カレンダーへ戻る", "保存して戻る"], hotspots: ["キャンセル", "保存"] },
    profile: { title: "プロフィール / グラフ", description: "基本情報と週間・月間感情グラフを確認できる画面で、累積記録を振り返りプロフィール編集へ進めます。", points: ["プロフィールと感情統計を一画面で確認できます。", "設定と編集フローへ自然につながります。", "累積データ観点の画面であることが明確です。"], actions: ["プロフィール編集を開く", "ログインを見る"], hotspots: ["戻る", "ログアウト", "編集"] },
    profileEdit: { title: "プロフィール編集 1", description: "ニックネーム、職業、地域など基本プロフィール情報を修正する最初の編集画面です。", points: ["フォーム中心の実際の編集画面です。", "プロフィール閲覧と修正が分離されていることが分かります。", "次ボタンで2ページ目へ移動します。"], actions: ["プロフィールへ戻る", "編集2へ移動"], hotspots: ["戻る", "保存", "次へ"] },
    profileEditDetail: { title: "プロフィール編集 2", description: "パスワード変更、興味、使用目的、通知設定など詳細項目を扱う2ページ目の編集画面です。", points: ["プロフィール編集2ページ目の実画面です。", "複数の詳細設定を一画面で扱います。", "前のページへ戻れます。"], actions: ["編集1へ戻る", "プロフィールへ戻る"], hotspots: ["戻る", "前へ", "退会"] },
    login: { title: "ログイン", description: "アプリ利用開始時に最初に表示される認証画面で、パスワード再設定や会員登録への分岐も提供します。", points: ["認証画面を含めて全体旅程を完成させます。", "会員フローの開始点と復帰点を説明できます。", "アプリ全体の完成度を補強する画面です。"], actions: ["会員登録へ移動", "パスワード再設定へ移動"], hotspots: ["ログイン", "パスワード忘れ", "会員登録"] },
    forgotPassword: { title: "パスワード再設定", description: "ログイン画面から入るアカウント復旧画面で、メール入力後に新しいパスワード送信フローへ進みます。", points: ["ログイン画面からすぐ移動できます。", "認証補助フローを見せます。", "メール入力後の仮パスワード送信を説明できます。"], actions: ["ログインへ戻る", "送信後ログインへ"], hotspots: ["戻る", "新しいパスワード送信"] },
    signup01: { title: "会員登録 1", description: "メールとパスワードなど基本アカウント情報を入力する会員登録最初の画面です。", points: ["会員登録の開始画面です。", "基本アカウント情報を入力します。", "次段階へ進む構造を見せます。"], actions: ["会員登録2へ", "ログインへ戻る"], hotspots: ["前へ", "次へ"] },
    signup02: { title: "会員登録 2", description: "ニックネームなど基本プロフィール情報を入力する二番目の会員登録画面です。", points: ["ニックネームとプロフィールを設定します。", "会員登録フローの2段階目です。", "次は使用目的選択へ続きます。"], actions: ["会員登録3へ", "会員登録1へ戻る"], hotspots: ["前へ", "次へ"] },
    signup03: { title: "会員登録 3", description: "使用目的を選択する三番目の会員登録画面です。", points: ["利用目的を選ぶ段階です。", "関心事選択へ進む中間段階です。", "選択型フローの説明に向いています。"], actions: ["会員登録4へ", "会員登録2へ戻る"], hotspots: ["前へ", "次へ"] },
    signup04: { title: "会員登録 4", description: "関心事を選択する四番目の会員登録画面です。", points: ["関心事選択段階です。", "選択型UIを含む会員登録フローを見せます。", "次は通知設定です。"], actions: ["会員登録5へ", "会員登録3へ戻る"], hotspots: ["前へ", "次へ"] },
    signup05: { title: "会員登録 5", description: "通知受信設定を調整する五番目の会員登録画面です。", points: ["通知関連設定を調整します。", "会員登録後の使用性準備を見せます。", "次は約款同意です。"], actions: ["会員登録6へ", "会員登録4へ戻る"], hotspots: ["前へ", "次へ"] },
    signup06: { title: "会員登録 6", description: "必要な約款同意を確認する六番目の会員登録画面です。", points: ["会員登録完了直前の段階です。", "必須約款同意フローを見せます。", "完了画面へ進みます。"], actions: ["完了画面へ", "会員登録5へ戻る"], hotspots: ["前へ", "次へ"] },
    signup07: { title: "会員登録完了", description: "会員登録が正常に完了したことを示す最後の画面です。", points: ["会員登録フローの最後です。", "完了後ログインへ戻る流れを説明できます。", "ユーザー旅程の締めくくり画面です。"], actions: ["会員登録6へ戻る", "完了してログインへ"], hotspots: ["前へ", "完了"] },
    tutorial01: { title: "チュートリアル 1", description: "キャラクターと一緒にアプリの基本利用フローを紹介するチュートリアル開始画面です。", points: ["ホームメニューのチュートリアルボタンから入ります。", "実際のチュートリアル開始画面を見せます。", "後続のチュートリアル画面への出発点です。"], actions: ["チュートリアル2へ", "ホームメニューへ戻る"], hotspots: ["終了", "次へ"] },
  },
};

function getLocalizedStep(stepKey) {
  const base = flowData[stepKey];
  if (!base || currentLang === "ko") return base;
  const localized = flowTranslations[currentLang]?.[stepKey];
  if (!localized && stepKey.startsWith("tutorial")) {
    const tutorialNumber = stepKey.replace("tutorial", "");
    const title = currentLang === "en" ? `Tutorial ${Number(tutorialNumber)}` : `チュートリアル ${Number(tutorialNumber)}`;
    const description = currentLang === "en"
      ? "A tutorial screen that explains a part of the app flow."
      : "アプリフローの一部を案内するチュートリアル画面です。";
    const points = currentLang === "en"
      ? ["Shows a real tutorial screen.", "Helps explain the guided onboarding flow.", "Can be navigated with previous and next actions."]
      : ["実際のチュートリアル画面を見せます。", "ガイド型オンボーディングフローの説明に役立ちます。", "前後移動で流れを確認できます。"];
    const actions = currentLang === "en" ? ["Previous Tutorial", "Next Tutorial"] : ["前のチュートリアルへ", "次のチュートリアルへ"];
    const hotspots = currentLang === "en" ? ["Exit", "Previous", "Next"] : ["終了", "前へ", "次へ"];
    return {
      ...base,
      title,
      description,
      points,
      actions: base.actions.map((action, index) => ({ ...action, label: actions[index] ?? action.label })),
      hotspots: base.hotspots.map((hotspot, index) => ({ ...hotspot, label: hotspots[index] ?? hotspot.label })),
    };
  }
  if (!localized) return base;
  return {
    ...base,
    title: localized.title ?? base.title,
    description: localized.description ?? base.description,
    points: localized.points ?? base.points,
    actions: base.actions.map((action, index) => ({
      ...action,
      label: localized.actions?.[index] ?? action.label,
    })),
    hotspots: base.hotspots.map((hotspot, index) => ({
      ...hotspot,
      label: localized.hotspots?.[index] ?? hotspot.label,
    })),
  };
}

const titleNode = document.getElementById("flow-title");
const typeNode = document.getElementById("flow-type");
const descriptionNode = document.getElementById("flow-description");
const hintNode = document.getElementById("flow-hint");
const pointsNode = document.getElementById("flow-points");
const actionsNode = document.getElementById("flow-actions");
const stageCanvasNode = document.getElementById("flow-stage-canvas");
const flowTitleSequenceNode = document.getElementById("flow-title-sequence");

let currentLang = "ko";
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
  const step = getLocalizedStep(stepKey);
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
    .map((stepKey) => getLocalizedStep(stepKey)?.title)
    .filter(Boolean)
    .join(" > ");
}

function renderTitleSequence() {
  flowTitleSequenceNode.innerHTML = "";

  currentPath.forEach((stepKey, index) => {
    const step = getLocalizedStep(stepKey);
    if (!step) return;

    const item = document.createElement("button");
    item.type = "button";
    item.className = "flow-title-step";
    if (stepKey === currentStep) {
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
  const step = getLocalizedStep(stepKey);
  if (!step) return;

  currentPath = computePath(stepKey);
  currentStep = stepKey;
  titleNode.textContent = currentPathText();
  typeNode.textContent = step.type;
  descriptionNode.textContent = step.description;
  hintNode.textContent = staticTranslations[currentLang].flowHint;

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

function applyStaticTranslations() {
  const t = staticTranslations[currentLang];
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value !== undefined) node.textContent = value;
  };
  const setByIndex = (selector, values = []) => {
    document.querySelectorAll(selector).forEach((node, index) => {
      if (values[index] !== undefined) node.textContent = values[index];
    });
  };

  setText(".hero .eyebrow", t.heroEyebrow);
  setText(".hero-summary", t.heroSummary);
  setText(".primary-link", t.heroPrimary);
  setText(".secondary-link", t.heroSecondary);
  setText(".hero-card-label", t.heroCardLabel);
  setByIndex(".stat-label", t.statLabels);
  setByIndex(".intro-strip .panel h2", t.introTitles);
  setByIndex(".intro-strip .panel p", t.introCopies);
  setByIndex(".section-heading h2", t.sectionTitles);
  setByIndex("#highlights .feature-card h3", t.featureTitles);
  setByIndex("#highlights .feature-card p", t.featureCopies);
  setByIndex("#role .feature-card h3", t.roleTitles);
  setByIndex("#role .feature-card p", t.roleCopies);
  setByIndex("#process .timeline-item h3", t.processTitles);
  setByIndex("#process .timeline-item p", t.processCopies);
  setByIndex("#troubleshooting .timeline-item h3", t.troubleTitles);
  setByIndex("#troubleshooting .timeline-item p", t.troubleCopies);
  setText(".architecture-lead", t.architectureLead);
  setText(".architecture-caption", t.architectureCaption);
  setText("#stack .section-heading p", t.stackIntro);
  setByIndex(".stack-group > summary", t.stackSummaries);
  Object.entries(t.stackReasons || {}).forEach(([id, value]) => {
    const node = document.querySelector(`#${id} p`);
    if (node) node.textContent = value;
  });
  setText(".closing-card h2", t.closingTitle);
  setText(".closing-card > p:last-of-type", t.closingCopy);
  setByIndex(".closing-meta span", t.closingMeta);
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  applyStaticTranslations();
  renderStep(currentStep);
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

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
applyStaticTranslations();
renderStep("login");
