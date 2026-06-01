(function () {
  const lang = document.documentElement.dataset.pdfLang || "ko";
  if (lang === "ko") return;

  const dictionaries = {
    en: {
      "PDF로 인쇄": "Print PDF",
      "메인으로 돌아가기": "Back to Main",
      "손지유": "Son Jiyu",
      "AI와 함께 주어진 환경을 빠르게 파악하고,": "A developer who works with AI to quickly understand the environment,",
      "필요한 역할을 수행해 결과로 연결하는 개발자": "take on the needed role, and turn it into results.",
      "조선대학교 첨단에너지공학과 졸업": "B.S. in Advanced Energy Engineering, Chosun University",
      "SSAFY 교육 이수": "Completed SSAFY training",
      "1종보통 운전면허": "Class 1 Normal Driver's License",
      "소방안전관리자 1급": "Fire Safety Manager Level 1",
      "기술 스택": "Tech Stack",
      "전체 요약": "Overall Summary",
      "언어": "Languages",
      "웹 콘솔, 모바일 앱, AIoT 백엔드 구현에 맞춰 프로젝트별 언어를 선택해 사용했습니다.": "Selected languages by project scope for the web console, mobile app, and AIoT backend implementation.",
      "프론트엔드 / 모바일": "Frontend / Mobile",
      "React·Vue 기반 웹 화면과 Android 앱 화면을 실제 사용자 흐름에 맞춰 구성했습니다.": "Built React/Vue web screens and Android app screens around real user flows.",
      "백엔드": "Backend",
      "인증, 운영 API, 실시간 상태 반영, 분석 연동 흐름을 서버 계층에서 연결했습니다.": "Connected authentication, operations APIs, real-time status updates, and analysis integrations in the server layer.",
      "데이터 / 인프라": "Data / Infra",
      "데이터 저장, 세션/캐시, 배포와 실행 환경을 서비스 구조에 맞춰 정리했습니다.": "Organized data storage, session/cache handling, deployment, and runtime environments around the service structure.",
      "에이아이 / 로봇 / 아이오티": "AI / Robot / IoT",
      "로봇 통신, 음성 명령, 3D 제어 화면 흐름을 연결했습니다.": "Connected robot communication, voice commands, and 3D control-screen flows.",
      "프로젝트 내역": "Project History",
      "웹, 모바일, AIoT 프로젝트를 기간과 핵심 기술 기준으로 정리했습니다. 다음 페이지부터는 각 프로젝트 상세 페이지를 사용해 주요 역할, 구현 내용, 트러블슈팅, 아키텍처를 확인할 수 있습니다.": "Web, mobile, and AIoT projects are organized by period and core technology. The following pages summarize each project's role, implementation, troubleshooting, and architecture.",
      "STT 기반 협동 로봇팔 제어와 티치펜던트 대체 웹 콘솔 프로젝트": "STT-based collaborative robot-arm control and web console replacing a teach pendant",
      "대화형 일기 작성, 감정 분석, 캘린더 연동을 제공하는 Android 앱 프로젝트": "Android app for conversational diary writing, emotion analysis, and calendar integration",
      "병해충 감시 자율주행 로봇과 농장 관제 웹 서비스를 연결한 AIoT 프로젝트": "AIoT project connecting an autonomous pest-monitoring robot with a farm-control web service",
      "OnRobot Korea와 함께한 연계 프로젝트로, STT를 이용한 협동 로봇팔 제어와 기존 티치펜던트를 대체할 웹 콘솔 구현을 목표로 했습니다. 웹 내부는 REST/WebSocket으로 구성하고, 로봇과 웹 시스템은 MQTT 토픽으로만 소통합니다.": "A collaboration project with OnRobot Korea. It aimed to control a collaborative robot arm with STT and implement a web console to replace the existing teach pendant. The web system uses REST/WebSocket internally, while robot-web communication is limited to MQTT topics.",
      "Vite 6 + TS · URDF 디지털 트윈": "Vite 6 + TS · URDF digital twin",
      "JDK 21 · JPA · Redis 설계": "JDK 21 · JPA · Redis design",
      "JWT · WebAuthn · 화이트리스트": "JWT · WebAuthn · whitelist",
      "MQTT · UR5/2FG7 연동": "MQTT · UR5/2FG7 integration",
      "문제 정의 · 핵심 기능": "Problem Definition · Core Features",
      "문제 정의": "Problem Definition",
      "핵심 구현 포인트": "Core Implementation Points",
      "기존 협동 로봇팔 제어는 티치펜던트와 현장 PC 중심이라 음성 명령이나 웹 기반 운영 흐름으로 확장하기 어렵습니다. Omni-Kit은 STT 명령, 로봇 상태, 작업 흐름을 웹 콘솔로 끌어올려 더 직관적인 운영 환경을 만드는 프로젝트입니다.": "Existing collaborative robot control depends on teach pendants and on-site PCs, making voice commands and web-based operation hard to extend. Omni-Kit brings STT commands, robot status, and work flows into a web console for a more intuitive operation environment.",
      "React 콘솔은 STT 음성 패널, URDF 3D 모델, 레시피, 웨이포인트, 세션·장치 관리 화면을 제공하고, Spring Boot는 인증·운영 API와 데이터 모델을 담당합니다. 로봇과 웹 시스템 사이의 송수신은 MQTT 토픽으로 처리했습니다.": "The React console provides an STT voice panel, URDF 3D model, recipes, waypoints, sessions, and device management screens. Spring Boot handles authentication, operations APIs, and the data model. Communication between robot and web system is handled through MQTT topics.",
      "웹 콘솔": "Web Console",
      "상태 확인, STT 패널, TCP/조인트 제어, 레시피·웨이포인트·작업 이력을 React 관리자 콘솔로 묶었습니다.": "Combined status checks, STT panel, TCP/joint control, recipes, waypoints, and work history into a React admin console.",
      "웹 파트 설계": "Web Part Design",
      "프론트엔드 화면·라우팅·인증 흐름과 Spring Boot API, 도메인, 배포/인프라 구조를 정리했습니다.": "Structured frontend screens, routing, authentication flow, Spring Boot APIs, domains, deployment, and infrastructure.",
      "Yubico WebAuthn 기반 장치 등록·인증·승인 모델로 승인된 하드웨어만 접근하도록 보호했습니다.": "Protected access with a Yubico WebAuthn-based device registration, authentication, and approval model.",
      "MQTT 연동": "MQTT Integration",
      "로봇 파트의 상태·이벤트 형식에 맞춰 토픽 매핑과 화면 반영을 최소 수정으로 맞췄습니다.": "Aligned topic mapping and screen updates to the robot team's status and event formats with minimal changes.",
      "화면구성": "Screen Composition",
      "관리자 권한으로 진입하는 실시간 제어 화면입니다. 메인 영역에서 URDF 3D 뷰어로 로봇 자세를 확인하고, 오른쪽 패널에서 TCP 기준 제어값을 조정합니다.": "A real-time control screen entered with admin permission. The main area shows the robot pose through a URDF 3D viewer, while the right panel adjusts TCP-based control values.",
      "3D 워크셀 위에서 UR5e 로봇 모델 확인": "Check the UR5e robot model in the 3D workcell",
      "TCP·조인트·빠른 실행 탭을 같은 화면에서 전환": "Switch TCP, joint, and quick execution tabs in one screen",
      "점검 모드, Free Drive, 속도, 실 로봇/시뮬레이션 상태를 상단에서 제어": "Control maintenance mode, Free Drive, speed, and real/simulation state from the top bar",
      "아키텍처": "Architecture",
      "웹 내부는 Nginx, React, Spring Boot, FastAPI, PostgreSQL/Redis로 구성되며, 로봇 시스템과는 Mosquitto MQTT 토픽으로만 상태와 명령을 주고받습니다.": "The web system consists of Nginx, React, Spring Boot, FastAPI, and PostgreSQL/Redis. Status and commands are exchanged with the robot system only through Mosquitto MQTT topics.",
      "웹 · 백엔드 · 인프라 영역": "Web · Backend · Infrastructure",
      "사용자는 Nginx를 통해 React 콘솔에 접근하고, 콘솔은 Spring Boot API/WS와 통신합니다. 백엔드는 인증, 세션, 운영 도메인, DB 모델을 담당합니다.": "Users access the React console through Nginx, and the console communicates with Spring Boot API/WS. The backend handles authentication, sessions, operational domains, and DB models.",
      "경계 분리": "Boundary Separation",
      "로봇과 웹 시스템은 REST나 WebSocket으로 직접 연결되지 않고 MQTT 토픽으로만 소통합니다.": "The robot and web systems do not connect directly through REST or WebSocket, and communicate only through MQTT topics.",
      "프로젝트 수행 정리": "Project Work Summary",
      "역할": "Role",
      "프론트엔드 전체 구현": "Full Frontend Implementation",
      "로그인, 승인 대기, 대시보드, 실시간 제어, 로봇/레시피/웨이포인트/이력, 관리자 화면과 라우팅/인증 가드를 구현했습니다.": "Implemented login, approval wait, dashboard, real-time control, robot/recipe/waypoint/history, admin screens, routing, and auth guards.",
      "WebAuthn 화이트리스트": "WebAuthn Whitelist",
      "Yubico RelyingParty 기반 등록 옵션·검증·어설션과 승인 credential 기반 접근 제어를 구성했습니다.": "Configured registration options, verification, assertions, and access control based on approved credentials with Yubico RelyingParty.",
      "백엔드 · DB 설계": "Backend · DB Design",
      "회원, 사이트, 장치, 세션, 알림, MFA 도메인의 API와 JPA 모델, Redis 기반 challenge 흐름을 정리했습니다.": "Organized APIs, JPA models, and Redis-based challenge flow for member, site, device, session, alert, and MFA domains.",
      "인프라 · MQTT 연동": "Infrastructure · MQTT Integration",
      "웹/백엔드 배포 구조와 환경 변수를 정리하고, 로봇과 웹 사이 통신 범위를 MQTT 중심으로 맞췄습니다.": "Organized web/backend deployment structure and environment variables, and aligned robot-web communication around MQTT.",
      "트러블슈팅": "Troubleshooting",
      "takeover 기반 단일 세션 정책 보정": "Takeover-based Single-session Policy Fix",
      "기존 탭이 계속 살아 있던 문제를 takeover 로그인 시 기존 세션 무효화와 /auth/me 재검증으로 해결했습니다.": "Solved stale tabs by invalidating previous sessions on takeover login and revalidating through /auth/me.",
      "Linux WebAuthn 개발 우회": "Linux WebAuthn Development Bypass",
      "Linux platform authenticator 부재를 고려해 실서비스 접근 제한과 개발용 User-Agent 우회 경로를 분리했습니다.": "Separated production access restrictions and a development User-Agent bypass to handle the lack of Linux platform authenticators.",
      "소프트 삭제 기기 재승인 흐름": "Soft-deleted Device Reapproval Flow",
      "폐기된 기기의 재등록이 막히던 문제를 승인 대기 상태로 되돌려 재검토할 수 있게 수정했습니다.": "Fixed blocked re-registration by returning discarded devices to a pending-approval state for review.",
      "사용기술": "Tech Stack",
      "상태 변화가 많은 운영 UI를 컴포넌트 단위로 나누고 관리하기 위해 사용했습니다.": "Used to split and manage state-heavy operational UI at the component level.",
      "하드웨어 화이트리스트와 credential 기반 접근 제어에 사용했습니다.": "Used for hardware whitelisting and credential-based access control.",
      "로봇과 웹의 경계를 MQTT로 분리하고 운영 관찰 흐름을 배포 구조 안에 연결했습니다.": "Used to separate the robot-web boundary through MQTT and connect operational monitoring into the deployment structure.",
      "동메달 · 3등 수상": "Bronze · 3rd Place",
      "STT/TTS 기반 일기 작성 애플리케이션 프로젝트입니다. 대화 기반으로 하루를 기록하고 감정 결과를 일정 추천과 캘린더 흐름으로 연결하는 Android 앱입니다.": "An STT/TTS-based diary application. It records the day through conversation and connects emotion results to schedule recommendations and calendar flow.",
      "감정 기록과 결과 화면 구성": "Emotion records and result screens",
      "Calendar Provider 유지": "Calendar Provider integration",
      "실사용 흐름 기반 화면 구성": "Screens based on real usage flow",
      "하루의 정리를 대화 기반으로 더 간단하게 기록하고, 그 결과를 바탕으로 일정 추천과 일정 관리까지 자연스럽게 이어질 수 있는 경험을 만들고자 했습니다.": "The goal was to make daily reflection easier through conversation and naturally connect the result to schedule recommendations and calendar management.",
      "Compose 화면 설계, Repository 계층, Room DB, 캘린더 프로바이더 연동, 결과 페이지와 프로필 그래프 흐름 검증을 중심으로 작업했습니다.": "Focused on Compose screen design, repository layer, Room DB, Calendar Provider integration, result pages, and profile graph flow verification.",
      "일기 작성": "Diary Writing",
      "질문형 흐름을 따라 하루의 감정과 상황을 기록하고, 결과 화면까지 자연스럽게 이어지도록 구성했습니다.": "Built a question-based flow to record daily emotions and situations, then connect naturally to the result screen.",
      "일기 기반 감정 분석": "Diary-based Emotion Analysis",
      "작성한 일기 내용을 바탕으로 감정 결과를 분석하고 사용자가 하루를 돌아볼 수 있도록 피드백을 제공합니다.": "Analyzes emotion results from diary content and provides feedback for daily reflection.",
      "감정 기반 일정 추천": "Emotion-based Schedule Recommendation",
      "분석된 감정 결과를 바탕으로 추천 활동을 제안하고 일정과 연결해 다음 행동으로 이어지게 했습니다.": "Suggests recommended activities based on analyzed emotion results and connects them to schedules.",
      "캘린더 연동": "Calendar Integration",
      "앱 내부 기록과 Calendar Provider 이벤트를 함께 보여주어 감정 기록과 일정 관리를 한 흐름으로 연결합니다.": "Shows app records and Calendar Provider events together, connecting emotion records and schedule management.",
      "로그인 후 가장 먼저 진입하는 메인 홈 화면입니다. 오늘의 기록 상태를 확인하고, 고양이와 상호작용하거나 메뉴를 열어 일기 작성, 일기 확인, 캘린더로 이동합니다.": "The main home screen after login. Users can check today's record state, interact with the character, or open the menu to write diaries, view entries, and access the calendar.",
      "홈 화면에서 주요 이동 지점을 한눈에 확인": "See key navigation points at a glance on the home screen",
      "고양이, 다이어리, 캘린더 등 오브젝트 중심 UI 흐름 표현": "Object-centered UI flow with character, diary, and calendar",
      "메뉴 오버레이를 통해 핵심 기능으로 빠르게 이동": "Quickly move to core features through the menu overlay",
      "DailyLog는 Android 앱에서 음성 입력과 화면 흐름을 처리하고, 서버는 API 처리, 데이터 저장, AI 연동, 배포와 모니터링을 분리해 운영할 수 있도록 구성했습니다.": "DailyLog handles voice input and screen flow in the Android app, while the server separates API handling, data storage, AI integration, deployment, and monitoring.",
      "사용자 음성 입력은 온디바이스 ASR로 처리하고, 앱 내부 화면은 Retrofit을 통해 HTTPS API와 연결했습니다.": "User voice input is handled by on-device ASR, and app screens connect to HTTPS APIs through Retrofit.",
      "Spring Boot, PostgreSQL/PGVector, Redis, FastAPI AI 서버와 배포/모니터링 흐름을 분리했습니다.": "Separated Spring Boot, PostgreSQL/PGVector, Redis, FastAPI AI server, and deployment/monitoring flow.",
      "화면 흐름 설계": "Screen Flow Design",
      "로그인, 회원가입, 튜토리얼, 홈, 일기 작성, 결과, 캘린더, 프로필까지 이어지는 주요 흐름을 설계했습니다.": "Designed the main flow from login, signup, tutorial, home, diary writing, result, calendar, and profile.",
      "Compose 기반 UI": "Compose-based UI",
      "오브젝트 중심 인터페이스 감성을 유지하면서 각 화면의 레이아웃과 상호작용을 구현했습니다.": "Implemented layouts and interactions while preserving the object-centered interface mood.",
      "로컬 데이터 구조": "Local Data Structure",
      "Room DB와 Repository 구조를 통해 일기와 사용자 데이터를 안정적으로 저장하고 계층을 분리했습니다.": "Stored diary and user data reliably through Room DB and repository structure while separating layers.",
      "캘린더/프로필 검증": "Calendar/Profile Verification",
      "일기 작성, 감정 분석, 추천, Calendar Provider 연동, 감정 그래프까지 실제 흐름으로 검증했습니다.": "Verified diary writing, emotion analysis, recommendations, Calendar Provider integration, and emotion graphs through real flows.",
      "이미지 리소스 최적화로 렉 감소": "Reduced Lag Through Image Resource Optimization",
      "해상도를 화면에 필요한 수준으로 조절하고 PNG를 WebP로 전환해 과도한 리소스 사용을 줄였습니다.": "Reduced excessive resource use by resizing images to the needed screen resolution and converting PNG files to WebP.",
      "상호작용형 UI 튜토리얼": "Interactive UI Tutorial",
      "오브젝트 기반 화면에서 눌러야 하는 요소와 다음 흐름을 단계별로 보여주어 초기 학습 비용을 낮췄습니다.": "Reduced onboarding cost by showing tappable objects and next steps in sequence for the object-based UI.",
      "센서 데이터, 로봇 순찰, 병해충 탐지, 운영 리포트를 하나의 흐름으로 연결한 스마트팜 통합 관제 웹 서비스입니다. 조회에서 끝나지 않고 상태 확인 이후 원인 파악과 제어 액션까지 이어지도록 구성했습니다.": "A smart-farm integrated control web service connecting sensor data, robot patrols, pest detection, and operation reports. It goes beyond viewing status and supports cause analysis and control actions.",
      "농부가 병해충 여부와 식물 상태를 직접 확인해야 하는 부담을 줄이고, 로봇 순찰과 분석 결과를 짧은 시간 안에 이해할 수 있게 하는 데 초점을 맞췄습니다.": "Focused on reducing the burden of manually checking pests and plant condition, and helping farmers quickly understand robot patrol and analysis results.",
      "대시보드, 농장 상세, 로봇 제어, 이미지 갤러리, 운영 리포트를 하나의 서비스 흐름으로 연결했습니다.": "Connected dashboard, farm details, robot control, image gallery, and operation reports into one service flow.",
      "통합 대시보드": "Integrated Dashboard",
      "전체 농장 보기와 개별 농장 보기를 나누어 온도, 습도, 조도, pH, NPK, 위험도 데이터를 빠르게 비교할 수 있게 했습니다.": "Separated all-farm and individual-farm views to compare temperature, humidity, light, pH, NPK, and risk data quickly.",
      "농장/섹터 관리": "Farm/Sector Management",
      "행, 열, 층수 기반 구조 데이터와 자동화 임계값을 함께 다루고 섹터 상태가 상위 대시보드에 반영되도록 설계했습니다.": "Designed row/column/floor structure data and automation thresholds so sector status is reflected in the upper dashboard.",
      "로봇 제어": "Robot Control",
      "로봇 등록, 상세 조회, 모드 전환, 정지, 복귀, 스케줄 타임라인까지 연결해 관제 기능을 강화했습니다.": "Strengthened monitoring by linking robot registration, detail view, mode switch, stop, return, and schedule timeline.",
      "이미지/리포트 연계": "Image/Report Linkage",
      "병해충 이미지와 리포트를 시간 기준으로 매칭해 어떤 문제가 언제 발생했는지 함께 확인할 수 있게 구성했습니다.": "Matched pest images and reports by time to show what problem occurred and when.",
      "전체 농장 기준으로 셀 상태가 활성화된 대시보드 화면입니다.": "A dashboard screen with active cell status for the entire farm.",
      "전체 농장 단위 모니터링 화면": "Whole-farm monitoring screen",
      "상위 레벨에서 이상 징후를 먼저 파악": "Detect abnormal signs first at a high level",
      "운영 판단의 출발점이 되는 화면": "Starting point for operational decisions",
      "Farm 현장의 라즈베리파이와 로봇에서 발생한 센서/이미지 데이터를 MQTT와 저장소 흐름으로 중앙 서버에 모으고, 사용자는 웹 페이지에서 상태와 리포트를 확인하는 구조입니다.": "Sensor/image data from Raspberry Pi and robots in the farm is collected through MQTT and storage flow into the central server, and users check status and reports on the web.",
      "라즈베리파이, 센서, 카메라, 로봇암, S3, GPU 서버의 YOLO 기반 객체 탐지 및 세그멘테이션 흐름을 웹 관제로 연결했습니다.": "Connected Raspberry Pi, sensors, camera, robot arm, S3, and GPU-server YOLO object detection/segmentation flow to web monitoring.",
      "EC2 중앙 서버에서 Django, DB, MQTT 브로커, React 웹 서버를 운영해 센서 상태와 분석 결과를 반영합니다.": "Runs Django, DB, MQTT broker, and React web server on an EC2 central server to reflect sensor status and analysis results.",
      "API 설계 및 구현": "API Design and Implementation",
      "Django REST Framework 기반 농장, 섹터, 로봇, 리포트 API를 설계했습니다.": "Designed farm, sector, robot, and report APIs based on Django REST Framework.",
      "대시보드/리포트 UI": "Dashboard/Report UI",
      "React 기반 대시보드, 리포트, 갤러리, 로봇 상세 화면을 구현했습니다.": "Implemented React-based dashboard, report, gallery, and robot detail screens.",
      "인증 및 권한 처리": "Authentication and Authorization",
      "JWT 로그인, 회원가입, 사용자 설정과 접근 제어 로직을 적용했습니다.": "Applied JWT login, signup, user settings, and access-control logic.",
      "데이터 연결 구조": "Data Linkage Structure",
      "병해충 이미지, 리포트, 로그를 시간 기준으로 연결했습니다.": "Connected pest images, reports, and logs by time.",
      "배포 환경 파일명 오류 해결": "Deployment Filename Case Fix",
      "Windows 로컬과 Linux 배포 환경의 파일명 대소문자 차이를 확인하고 CSS 파일명과 import 경로를 소문자 기준으로 통일했습니다.": "Fixed filename case differences between Windows local and Linux deployment by standardizing CSS filenames and imports to lowercase.",
      "더미 데이터에서 실제 API로 전환": "Switch from Dummy Data to Real API",
      "farmId/id, createdAt/create_time, NPK 객체 구조 차이를 화면용 공통 포맷으로 정규화했습니다.": "Normalized farmId/id, createdAt/create_time, and NPK object differences into a shared screen format.",
      "클릭 뎁스를 줄인 UI 재설계": "UI Redesign to Reduce Click Depth",
      "대시보드와 상단 메뉴에 농장/로봇 상세 이동, 갤러리 바로가기, 농장 추가 진입점을 배치했습니다.": "Placed farm/robot detail navigation, gallery shortcut, and farm-add entry points in the dashboard and top menu.",
      "손지유 프로필 사진": "Son Jiyu profile photo",
      "Omni-Kit 3D 모델링 실시간 제어 화면": "Omni-Kit real-time control screen with 3D model",
      "Omni-Kit 아키텍처": "Omni-Kit architecture",
      "DailyLog 메인 홈 화면": "DailyLog main home screen",
      "DailyLog 아키텍처": "DailyLog architecture",
      "Meer's Farm 대시보드 화면": "Meer's Farm dashboard screen",
      "Meer's Farm 아키텍처": "Meer's Farm architecture"
    },
    ja: {
      "PDF actions": "PDF操作",
      "Portfolio Profile": "ポートフォリオプロフィール",
      "Portfolio Web": "ポートフォリオWeb",
      "Email": "メール",
      "Phone": "電話",
      "Education": "学歴",
      "Certifications": "資格",
      "Project History": "プロジェクト履歴",
      "Project Overview": "プロジェクト概要",
      "Project Snapshot": "プロジェクト概要",
      "Cobot Operations Console": "協働ロボット運用コンソール",
      "Emotion Diary Android Project": "感情日記Androidプロジェクト",
      "Smart Farm Control Platform": "スマートファーム管制プラットフォーム",
      "Frontend / Console UI": "フロントエンド / コンソールUI",
      "Backend / Auth / DB": "バックエンド / 認証 / DB",
      "Robot Communication / Infra": "ロボット通信 / インフラ",
      "UI / Android": "UI / Android",
      "Data / Storage": "データ / ストレージ",
      "Network / Device": "ネットワーク / デバイス",
      "Frontend / Web UI": "フロントエンド / Web UI",
      "Backend / API / Auth": "バックエンド / API / 認証",
      "Data / Robot / Infra": "データ / ロボット / インフラ",
      "Android App": "Androidアプリ",
      "Backend & AI": "バックエンド & AI",
      "Farm Edge · Robot": "Farm Edge · ロボット",
      "Central Web": "中央Web",
      "PDF로 인쇄": "PDFとして印刷",
      "메인으로 돌아가기": "メインへ戻る",
      "손지유": "ソン・ジユ",
      "AI와 함께 주어진 환경을 빠르게 파악하고,": "AIとともに与えられた環境を素早く把握し、",
      "필요한 역할을 수행해 결과로 연결하는 개발자": "必要な役割を担って成果につなげる開発者",
      "조선대학교 첨단에너지공학과 졸업": "朝鮮大学校 先端エネルギー工学科 卒業",
      "SSAFY 교육 이수": "SSAFY教育 修了",
      "1종보통 운전면허": "第1種普通運転免許",
      "소방안전관리자 1급": "消防安全管理者 1級",
      "기술 스택": "使用技術",
      "전체 요약": "全体要約",
      "언어": "言語",
      "웹 콘솔, 모바일 앱, AIoT 백엔드 구현에 맞춰 프로젝트별 언어를 선택해 사용했습니다.": "Webコンソール、モバイルアプリ、AIoTバックエンドの実装範囲に合わせて言語を選択しました。",
      "프론트엔드 / 모바일": "フロントエンド / モバイル",
      "React·Vue 기반 웹 화면과 Android 앱 화면을 실제 사용자 흐름에 맞춰 구성했습니다.": "React/VueベースのWeb画面とAndroidアプリ画面を、実際のユーザーフローに合わせて構成しました。",
      "백엔드": "バックエンド",
      "인증, 운영 API, 실시간 상태 반영, 분석 연동 흐름을 서버 계층에서 연결했습니다.": "認証、運用API、リアルタイム状態反映、分析連携の流れをサーバー層でつなぎました。",
      "데이터 / 인프라": "データ / インフラ",
      "데이터 저장, 세션/캐시, 배포와 실행 환경을 서비스 구조에 맞춰 정리했습니다.": "データ保存、セッション/キャッシュ、配備と実行環境をサービス構造に合わせて整理しました。",
      "에이아이 / 로봇 / 아이오티": "AI / ロボット / IoT",
      "로봇 통신, 음성 명령, 3D 제어 화면 흐름을 연결했습니다.": "ロボット通信、音声命令、3D制御画面の流れをつなぎました。",
      "프로젝트 내역": "プロジェクト履歴",
      "웹, 모바일, AIoT 프로젝트를 기간과 핵심 기술 기준으로 정리했습니다. 다음 페이지부터는 각 프로젝트 상세 페이지를 사용해 주요 역할, 구현 내용, 트러블슈팅, 아키텍처를 확인할 수 있습니다.": "Web、モバイル、AIoTプロジェクトを期間と主要技術で整理しました。次のページから各プロジェクトの役割、実装内容、トラブルシューティング、アーキテクチャを確認できます。",
      "STT 기반 협동 로봇팔 제어와 티치펜던트 대체 웹 콘솔 프로젝트": "STTベースの協働ロボットアーム制御とティーチペンダント代替Webコンソールプロジェクト",
      "대화형 일기 작성, 감정 분석, 캘린더 연동을 제공하는 Android 앱 프로젝트": "対話型日記作成、感情分析、カレンダー連携を提供するAndroidアプリプロジェクト",
      "병해충 감시 자율주행 로봇과 농장 관제 웹 서비스를 연결한 AIoT 프로젝트": "病害虫監視自律走行ロボットと農場管制WebサービスをつなぐAIoTプロジェクト",
      "OnRobot Korea와 함께한 연계 프로젝트로, STT를 이용한 협동 로봇팔 제어와 기존 티치펜던트를 대체할 웹 콘솔 구현을 목표로 했습니다. 웹 내부는 REST/WebSocket으로 구성하고, 로봇과 웹 시스템은 MQTT 토픽으로만 소통합니다.": "OnRobot Koreaとの連携プロジェクトで、STTを利用した協働ロボットアーム制御と既存ティーチペンダントを代替するWebコンソール実装を目標としました。Web内部はREST/WebSocketで構成し、ロボットとWebシステムはMQTTトピックのみで通信します。",
      "Vite 6 + TS · URDF 디지털 트윈": "Vite 6 + TS · URDFデジタルツイン",
      "JDK 21 · JPA · Redis 설계": "JDK 21 · JPA · Redis設計",
      "JWT · WebAuthn · 화이트리스트": "JWT · WebAuthn · ホワイトリスト",
      "MQTT · UR5/2FG7 연동": "MQTT · UR5/2FG7連携",
      "문제 정의 · 핵심 기능": "課題定義 · 主要機能",
      "문제 정의": "課題定義",
      "핵심 구현 포인트": "主要実装ポイント",
      "기존 협동 로봇팔 제어는 티치펜던트와 현장 PC 중심이라 음성 명령이나 웹 기반 운영 흐름으로 확장하기 어렵습니다. Omni-Kit은 STT 명령, 로봇 상태, 작업 흐름을 웹 콘솔로 끌어올려 더 직관적인 운영 환경을 만드는 프로젝트입니다.": "既存の協働ロボット制御はティーチペンダントと現場PC中心で、音声命令やWebベース運用へ拡張しにくい構造でした。Omni-KitはSTT命令、ロボット状態、作業フローをWebコンソールに集約し、より直感的な運用環境を作るプロジェクトです。",
      "React 콘솔은 STT 음성 패널, URDF 3D 모델, 레시피, 웨이포인트, 세션·장치 관리 화면을 제공하고, Spring Boot는 인증·운영 API와 데이터 모델을 담당합니다. 로봇과 웹 시스템 사이의 송수신은 MQTT 토픽으로 처리했습니다.": "ReactコンソールはSTT音声パネル、URDF 3Dモデル、レシピ、ウェイポイント、セッション・デバイス管理画面を提供し、Spring Bootは認証・運用APIとデータモデルを担当します。ロボットとWeb間の送受信はMQTTトピックで処理しました。",
      "웹 콘솔": "Webコンソール",
      "상태 확인, STT 패널, TCP/조인트 제어, 레시피·웨이포인트·작업 이력을 React 관리자 콘솔로 묶었습니다.": "状態確認、STTパネル、TCP/ジョイント制御、レシピ・ウェイポイント・作業履歴をReact管理コンソールにまとめました。",
      "웹 파트 설계": "Webパート設計",
      "프론트엔드 화면·라우팅·인증 흐름과 Spring Boot API, 도메인, 배포/인프라 구조를 정리했습니다.": "フロントエンド画面・ルーティング・認証フローとSpring Boot API、ドメイン、配備/インフラ構造を整理しました。",
      "Yubico WebAuthn 기반 장치 등록·인증·승인 모델로 승인된 하드웨어만 접근하도록 보호했습니다.": "Yubico WebAuthnベースのデバイス登録・認証・承認モデルで、承認済みハードウェアのみアクセスできるよう保護しました。",
      "MQTT 연동": "MQTT連携",
      "로봇 파트의 상태·이벤트 형식에 맞춰 토픽 매핑과 화면 반영을 최소 수정으로 맞췄습니다.": "ロボット側の状態・イベント形式に合わせ、トピックマッピングと画面反映を最小限の修正で整えました。",
      "화면구성": "画面構成",
      "관리자 권한으로 진입하는 실시간 제어 화면입니다. 메인 영역에서 URDF 3D 뷰어로 로봇 자세를 확인하고, 오른쪽 패널에서 TCP 기준 제어값을 조정합니다.": "管理者権限で入るリアルタイム制御画面です。メイン領域でURDF 3Dビューアによりロボット姿勢を確認し、右パネルでTCP基準の制御値を調整します。",
      "3D 워크셀 위에서 UR5e 로봇 모델 확인": "3Dワークセル上でUR5eロボットモデルを確認",
      "TCP·조인트·빠른 실행 탭을 같은 화면에서 전환": "TCP・ジョイント・クイック実行タブを同じ画面で切り替え",
      "점검 모드, Free Drive, 속도, 실 로봇/시뮬레이션 상태를 상단에서 제어": "点検モード、Free Drive、速度、実機/シミュレーション状態を上部で制御",
      "아키텍처": "アーキテクチャ",
      "웹 내부는 Nginx, React, Spring Boot, FastAPI, PostgreSQL/Redis로 구성되며, 로봇 시스템과는 Mosquitto MQTT 토픽으로만 상태와 명령을 주고받습니다.": "Web内部はNginx、React、Spring Boot、FastAPI、PostgreSQL/Redisで構成され、ロボットシステムとはMosquitto MQTTトピックだけで状態と命令をやり取りします。",
      "웹 · 백엔드 · 인프라 영역": "Web・バックエンド・インフラ領域",
      "사용자는 Nginx를 통해 React 콘솔에 접근하고, 콘솔은 Spring Boot API/WS와 통신합니다. 백엔드는 인증, 세션, 운영 도메인, DB 모델을 담당합니다.": "ユーザーはNginx経由でReactコンソールへアクセスし、コンソールはSpring Boot API/WSと通信します。バックエンドは認証、セッション、運用ドメイン、DBモデルを担当します。",
      "경계 분리": "境界分離",
      "로봇과 웹 시스템은 REST나 WebSocket으로 직접 연결되지 않고 MQTT 토픽으로만 소통합니다.": "ロボットとWebシステムはRESTやWebSocketで直接接続されず、MQTTトピックのみで通信します。",
      "프로젝트 수행 정리": "プロジェクト遂行整理",
      "역할": "役割",
      "프론트엔드 전체 구현": "フロントエンド全体実装",
      "로그인, 승인 대기, 대시보드, 실시간 제어, 로봇/레시피/웨이포인트/이력, 관리자 화면과 라우팅/인증 가드를 구현했습니다.": "ログイン、承認待ち、ダッシュボード、リアルタイム制御、ロボット/レシピ/ウェイポイント/履歴、管理画面とルーティング/認証ガードを実装しました。",
      "WebAuthn 화이트리스트": "WebAuthnホワイトリスト",
      "Yubico RelyingParty 기반 등록 옵션·검증·어설션과 승인 credential 기반 접근 제어를 구성했습니다.": "Yubico RelyingPartyベースの登録オプション、検証、アサーションと承認済みcredentialによるアクセス制御を構成しました。",
      "백엔드 · DB 설계": "バックエンド・DB設計",
      "회원, 사이트, 장치, 세션, 알림, MFA 도메인의 API와 JPA 모델, Redis 기반 challenge 흐름을 정리했습니다.": "会員、サイト、デバイス、セッション、通知、MFAドメインのAPIとJPAモデル、Redisベースのchallengeフローを整理しました。",
      "인프라 · MQTT 연동": "インフラ・MQTT連携",
      "웹/백엔드 배포 구조와 환경 변수를 정리하고, 로봇과 웹 사이 통신 범위를 MQTT 중심으로 맞췄습니다.": "Web/バックエンド配備構造と環境変数を整理し、ロボットとWeb間通信をMQTT中心に合わせました。",
      "트러블슈팅": "トラブルシューティング",
      "takeover 기반 단일 세션 정책 보정": "takeoverベースの単一セッション政策補正",
      "기존 탭이 계속 살아 있던 문제를 takeover 로그인 시 기존 세션 무효화와 /auth/me 재검증으로 해결했습니다.": "既存タブが残る問題を、takeoverログイン時の既存セッション無効化と/auth/me再検証で解決しました。",
      "Linux WebAuthn 개발 우회": "Linux WebAuthn開発用バイパス",
      "Linux platform authenticator 부재를 고려해 실서비스 접근 제한과 개발용 User-Agent 우회 경로를 분리했습니다.": "Linux platform authenticator不在を考慮し、本番アクセス制限と開発用User-Agentバイパス経路を分離しました。",
      "소프트 삭제 기기 재승인 흐름": "soft delete端末の再承認フロー",
      "폐기된 기기의 재등록이 막히던 문제를 승인 대기 상태로 되돌려 재검토할 수 있게 수정했습니다.": "廃棄済みデバイスの再登録が止まる問題を、承認待ち状態へ戻して再確認できるよう修正しました。",
      "사용기술": "使用技術",
      "상태 변화가 많은 운영 UI를 컴포넌트 단위로 나누고 관리하기 위해 사용했습니다.": "状態変化の多い運用UIをコンポーネント単位で分けて管理するために使用しました。",
      "하드웨어 화이트리스트와 credential 기반 접근 제어에 사용했습니다.": "ハードウェアホワイトリストとcredentialベースのアクセス制御に使用しました。",
      "로봇과 웹의 경계를 MQTT로 분리하고 운영 관찰 흐름을 배포 구조 안에 연결했습니다.": "ロボットとWebの境界をMQTTで分離し、運用監視フローを配備構造内へ接続しました。",
      "동메달 · 3등 수상": "銅賞 · 3位受賞",
      "STT/TTS 기반 일기 작성 애플리케이션 프로젝트입니다. 대화 기반으로 하루를 기록하고 감정 결과를 일정 추천과 캘린더 흐름으로 연결하는 Android 앱입니다.": "STT/TTSベースの日記作成アプリケーションです。対話で一日を記録し、感情結果を予定推薦とカレンダーフローへつなげるAndroidアプリです。",
      "감정 기록과 결과 화면 구성": "感情記録と結果画面構成",
      "Calendar Provider 유지": "Calendar Provider連携",
      "실사용 흐름 기반 화면 구성": "実使用フローに基づく画面構成",
      "하루의 정리를 대화 기반으로 더 간단하게 기록하고, 그 결과를 바탕으로 일정 추천과 일정 관리까지 자연스럽게 이어질 수 있는 경험을 만들고자 했습니다.": "一日の整理を対話ベースでより簡単に記録し、その結果を予定推薦と予定管理へ自然につなげる体験を作ろうとしました。",
      "Compose 화면 설계, Repository 계층, Room DB, 캘린더 프로바이더 연동, 결과 페이지와 프로필 그래프 흐름 검증을 중심으로 작업했습니다.": "Compose画面設計、Repository層、Room DB、Calendar Provider連携、結果ページとプロフィールグラフの流れ検証を中心に作業しました。",
      "일기 작성": "日記作成",
      "질문형 흐름을 따라 하루의 감정과 상황을 기록하고, 결과 화면까지 자연스럽게 이어지도록 구성했습니다.": "質問型の流れに沿って一日の感情と状況を記録し、結果画面まで自然につながるよう構成しました。",
      "일기 기반 감정 분석": "日記ベース感情分析",
      "작성한 일기 내용을 바탕으로 감정 결과를 분석하고 사용자가 하루를 돌아볼 수 있도록 피드백을 제공합니다.": "作成した日記内容をもとに感情結果を分析し、ユーザーが一日を振り返れるようフィードバックを提供します。",
      "감정 기반 일정 추천": "感情ベース予定推薦",
      "분석된 감정 결과를 바탕으로 추천 활동을 제안하고 일정과 연결해 다음 행동으로 이어지게 했습니다.": "分析された感情結果をもとに推薦活動を提案し、予定につなげて次の行動へつなげました。",
      "캘린더 연동": "カレンダー連携",
      "앱 내부 기록과 Calendar Provider 이벤트를 함께 보여주어 감정 기록과 일정 관리를 한 흐름으로 연결합니다.": "アプリ内記録とCalendar Providerイベントを一緒に表示し、感情記録と予定管理を一つの流れにつなげます。",
      "로그인 후 가장 먼저 진입하는 메인 홈 화면입니다. 오늘의 기록 상태를 확인하고, 고양이와 상호작용하거나 메뉴를 열어 일기 작성, 일기 확인, 캘린더로 이동합니다.": "ログイン後に最初に入るメインホーム画面です。今日の記録状態を確認し、キャラクターと相互作用したりメニューから日記作成、日記確認、カレンダーへ移動できます。",
      "홈 화면에서 주요 이동 지점을 한눈에 확인": "ホーム画面で主要な移動先を一目で確認",
      "고양이, 다이어리, 캘린더 등 오브젝트 중심 UI 흐름 표현": "猫、日記帳、カレンダーなどオブジェクト中心UIの流れを表現",
      "메뉴 오버레이를 통해 핵심 기능으로 빠르게 이동": "メニューオーバーレイから主要機能へ素早く移動",
      "DailyLog는 Android 앱에서 음성 입력과 화면 흐름을 처리하고, 서버는 API 처리, 데이터 저장, AI 연동, 배포와 모니터링을 분리해 운영할 수 있도록 구성했습니다.": "DailyLogはAndroidアプリで音声入力と画面フローを処理し、サーバー側ではAPI処理、データ保存、AI連携、配備とモニタリングを分離して運用できるよう構成しました。",
      "사용자 음성 입력은 온디바이스 ASR로 처리하고, 앱 내부 화면은 Retrofit을 통해 HTTPS API와 연결했습니다.": "ユーザー音声入力はオンデバイスASRで処理し、アプリ内画面はRetrofitを通じてHTTPS APIと接続しました。",
      "Spring Boot, PostgreSQL/PGVector, Redis, FastAPI AI 서버와 배포/모니터링 흐름을 분리했습니다.": "Spring Boot、PostgreSQL/PGVector、Redis、FastAPI AIサーバーと配備/モニタリングの流れを分離しました。",
      "화면 흐름 설계": "画面フロー設計",
      "로그인, 회원가입, 튜토리얼, 홈, 일기 작성, 결과, 캘린더, 프로필까지 이어지는 주요 흐름을 설계했습니다.": "ログイン、会員登録、チュートリアル、ホーム、日記作成、結果、カレンダー、プロフィールまで続く主要フローを設計しました。",
      "Compose 기반 UI": "ComposeベースUI",
      "오브젝트 중심 인터페이스 감성을 유지하면서 각 화면의 레이아웃과 상호작용을 구현했습니다.": "オブジェクト中心インターフェースの感性を保ちながら、各画面のレイアウトと相互作用を実装しました。",
      "로컬 데이터 구조": "ローカルデータ構造",
      "Room DB와 Repository 구조를 통해 일기와 사용자 데이터를 안정적으로 저장하고 계층을 분리했습니다.": "Room DBとRepository構造により日記とユーザーデータを安定して保存し、層を分離しました。",
      "캘린더/프로필 검증": "カレンダー/プロフィール検証",
      "일기 작성, 감정 분석, 추천, Calendar Provider 연동, 감정 그래프까지 실제 흐름으로 검증했습니다.": "日記作成、感情分析、推薦、Calendar Provider連携、感情グラフまで実際の流れで検証しました。",
      "이미지 리소스 최적화로 렉 감소": "画像リソース最適化によるラグ削減",
      "해상도를 화면에 필요한 수준으로 조절하고 PNG를 WebP로 전환해 과도한 리소스 사용을 줄였습니다.": "解像度を画面に必要な水準へ調整し、PNGをWebPへ変換して過度なリソース使用を削減しました。",
      "상호작용형 UI 튜토리얼": "インタラクティブUIチュートリアル",
      "오브젝트 기반 화면에서 눌러야 하는 요소와 다음 흐름을 단계별로 보여주어 초기 학습 비용을 낮췄습니다.": "オブジェクトベース画面で押すべき要素と次の流れを段階的に示し、初期学習コストを下げました。",
      "센서 데이터, 로봇 순찰, 병해충 탐지, 운영 리포트를 하나의 흐름으로 연결한 스마트팜 통합 관제 웹 서비스입니다. 조회에서 끝나지 않고 상태 확인 이후 원인 파악과 제어 액션까지 이어지도록 구성했습니다.": "センサーデータ、ロボット巡回、病害虫検知、運用レポートを一つの流れでつなぐスマートファーム統合管制Webサービスです。状態確認後に原因把握と制御アクションまで続くよう構成しました。",
      "농부가 병해충 여부와 식물 상태를 직접 확인해야 하는 부담을 줄이고, 로봇 순찰과 분석 결과를 짧은 시간 안에 이해할 수 있게 하는 데 초점을 맞췄습니다.": "農家が病害虫有無と植物状態を直接確認する負担を減らし、ロボット巡回と分析結果を短時間で理解できるようにすることへ焦点を当てました。",
      "대시보드, 농장 상세, 로봇 제어, 이미지 갤러리, 운영 리포트를 하나의 서비스 흐름으로 연결했습니다.": "ダッシュボード、農場詳細、ロボット制御、画像ギャラリー、運用レポートを一つのサービスフローで接続しました。",
      "통합 대시보드": "統合ダッシュボード",
      "전체 농장 보기와 개별 농장 보기를 나누어 온도, 습도, 조도, pH, NPK, 위험도 데이터를 빠르게 비교할 수 있게 했습니다.": "全農場表示と個別農場表示を分け、温度、湿度、照度、pH、NPK、危険度データを素早く比較できるようにしました。",
      "농장/섹터 관리": "農場/セクター管理",
      "행, 열, 층수 기반 구조 데이터와 자동화 임계값을 함께 다루고 섹터 상태가 상위 대시보드에 반영되도록 설계했습니다.": "行、列、階層ベースの構造データと自動化しきい値を扱い、セクター状態が上位ダッシュボードへ反映されるよう設計しました。",
      "로봇 제어": "ロボット制御",
      "로봇 등록, 상세 조회, 모드 전환, 정지, 복귀, 스케줄 타임라인까지 연결해 관제 기능을 강화했습니다.": "ロボット登録、詳細照会、モード切替、停止、復帰、スケジュールタイムラインまで連結し、管制機能を強化しました。",
      "이미지/리포트 연계": "画像/レポート連携",
      "병해충 이미지와 리포트를 시간 기준으로 매칭해 어떤 문제가 언제 발생했는지 함께 확인할 수 있게 구성했습니다.": "病害虫画像とレポートを時間基準で紐づけ、どの問題がいつ発生したか一緒に確認できるよう構成しました。",
      "전체 농장 기준으로 셀 상태가 활성화된 대시보드 화면입니다.": "全農場基準でセル状態が有効化されたダッシュボード画面です。",
      "전체 농장 단위 모니터링 화면": "全農場単位のモニタリング画面",
      "상위 레벨에서 이상 징후를 먼저 파악": "上位レベルで異常兆候を先に把握",
      "운영 판단의 출발점이 되는 화면": "運用判断の出発点となる画面",
      "Farm 현장의 라즈베리파이와 로봇에서 발생한 센서/이미지 데이터를 MQTT와 저장소 흐름으로 중앙 서버에 모으고, 사용자는 웹 페이지에서 상태와 리포트를 확인하는 구조입니다.": "Farm現場のRaspberry Piとロボットで発生したセンサー/画像データをMQTTと保存フローで中央サーバーへ集め、ユーザーはWebページで状態とレポートを確認する構造です。",
      "라즈베리파이, 센서, 카메라, 로봇암, S3, GPU 서버의 YOLO 기반 객체 탐지 및 세그멘테이션 흐름을 웹 관제로 연결했습니다.": "Raspberry Pi、センサー、カメラ、ロボットアーム、S3、GPUサーバーのYOLOベース物体検出・セグメンテーションフローをWeb管制へ接続しました。",
      "EC2 중앙 서버에서 Django, DB, MQTT 브로커, React 웹 서버를 운영해 센서 상태와 분석 결과를 반영합니다.": "EC2中央サーバーでDjango、DB、MQTTブローカー、React Webサーバーを運用し、センサー状態と分析結果を反映します。",
      "API 설계 및 구현": "API設計および実装",
      "Django REST Framework 기반 농장, 섹터, 로봇, 리포트 API를 설계했습니다.": "Django REST Frameworkベースの農場、セクター、ロボット、レポートAPIを設計しました。",
      "대시보드/리포트 UI": "ダッシュボード/レポートUI",
      "React 기반 대시보드, 리포트, 갤러리, 로봇 상세 화면을 구현했습니다.": "Reactベースのダッシュボード、レポート、ギャラリー、ロボット詳細画面を実装しました。",
      "인증 및 권한 처리": "認証および権限処理",
      "JWT 로그인, 회원가입, 사용자 설정과 접근 제어 로직을 적용했습니다.": "JWTログイン、会員登録、ユーザー設定とアクセス制御ロジックを適用しました。",
      "데이터 연결 구조": "データ連結構造",
      "병해충 이미지, 리포트, 로그를 시간 기준으로 연결했습니다.": "病害虫画像、レポート、ログを時間基準で連結しました。",
      "배포 환경 파일명 오류 해결": "配備環境のファイル名エラー解決",
      "Windows 로컬과 Linux 배포 환경의 파일명 대소문자 차이를 확인하고 CSS 파일명과 import 경로를 소문자 기준으로 통일했습니다.": "WindowsローカルとLinux配備環境のファイル名大文字/小文字差を確認し、CSSファイル名とimport経路を小文字基準で統一しました。",
      "더미 데이터에서 실제 API로 전환": "ダミーデータから実APIへの切替",
      "farmId/id, createdAt/create_time, NPK 객체 구조 차이를 화면용 공통 포맷으로 정규화했습니다.": "farmId/id、createdAt/create_time、NPKオブジェクト構造の違いを画面用共通フォーマットへ正規化しました。",
      "클릭 뎁스를 줄인 UI 재설계": "クリック深度を減らすUI再設計",
      "대시보드와 상단 메뉴에 농장/로봇 상세 이동, 갤러리 바로가기, 농장 추가 진입점을 배치했습니다.": "ダッシュボードと上部メニューに農場/ロボット詳細移動、ギャラリーショートカット、農場追加入口を配置しました。",
      "손지유 프로필 사진": "ソン・ジユ プロフィール写真",
      "Omni-Kit 3D 모델링 실시간 제어 화면": "Omni-Kit 3Dモデル付きリアルタイム制御画面",
      "Omni-Kit 아키텍처": "Omni-Kit アーキテクチャ",
      "DailyLog 메인 홈 화면": "DailyLog メインホーム画面",
      "DailyLog 아키텍처": "DailyLog アーキテクチャ",
      "Meer's Farm 대시보드 화면": "Meer's Farm ダッシュボード画面",
      "Meer's Farm 아키텍처": "Meer's Farm アーキテクチャ"
    }
  };

  const dictionary = dictionaries[lang];
  if (!dictionary) return;

  const translateValue = (value) => dictionary[value] || value;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    const trimmed = node.nodeValue.trim();
    const translated = dictionary[trimmed];
    if (translated) node.nodeValue = node.nodeValue.replace(trimmed, translated);
  });

  document.querySelectorAll("[alt], [aria-label], [title]").forEach((node) => {
    ["alt", "aria-label", "title"].forEach((attr) => {
      if (!node.hasAttribute(attr)) return;
      node.setAttribute(attr, translateValue(node.getAttribute(attr)));
    });
  });

  const fitBoxSelector = [
    ".contents-item",
    ".hero-copy",
    ".snapshot",
    ".stat",
    ".feature-slide .card",
    ".screen-copy",
    ".architecture-copy",
    ".role-section .card",
    ".timeline-item",
    ".tech-group",
    ".portfolio-tech-card"
  ].join(",");
  const fitTextSelector = "h1, h2, h3, p, li, span, strong, .chip";
  const fixedTextClasses = new Set(["feature-no", "timeline-index", "contents-num"]);

  function isOverflowing(node) {
    return node.scrollHeight > node.clientHeight + 1 || node.scrollWidth > node.clientWidth + 1;
  }

  function scalableTextNodes(box) {
    return Array.from(box.querySelectorAll(fitTextSelector)).filter((node) => {
      return !Array.from(node.classList).some((className) => fixedTextClasses.has(className));
    });
  }

  function resetTextScale(nodes) {
    nodes.forEach((node) => {
      if (node.dataset.fitBaseFont) {
        node.style.fontSize = node.dataset.fitBaseFont;
      }
    });
  }

  function applyTextScale(nodes, scale) {
    nodes.forEach((node) => {
      if (!node.dataset.fitBaseFont) {
        node.dataset.fitBaseFont = window.getComputedStyle(node).fontSize;
      }
      const baseFont = parseFloat(node.dataset.fitBaseFont);
      if (!Number.isFinite(baseFont)) return;
      node.style.fontSize = `${baseFont * scale}px`;
    });
  }

  function fitTranslatedText() {
    document.querySelectorAll(fitBoxSelector).forEach((box) => {
      if (!box.clientWidth || !box.clientHeight) return;
      const nodes = scalableTextNodes(box);
      resetTextScale(nodes);
      if (!isOverflowing(box)) return;

      for (let scale = 0.96; scale >= 0.68; scale -= 0.04) {
        applyTextScale(nodes, scale);
        if (!isOverflowing(box)) break;
      }
    });
  }

  let fitTimer;
  requestAnimationFrame(() => requestAnimationFrame(fitTranslatedText));
  window.addEventListener("beforeprint", fitTranslatedText);
  window.addEventListener("resize", () => {
    window.clearTimeout(fitTimer);
    fitTimer = window.setTimeout(fitTranslatedText, 80);
  });
})();
