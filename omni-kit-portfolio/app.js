function buildFrameList(prefix, count) {
  const list = [];
  for (let i = 1; i <= count; i += 1) {
    list.push(`${prefix}/frame_${String(i).padStart(3, "0")}.png`);
  }
  return list;
}

const SCREEN_DATA = {
  tourAll: {
    frames: buildFrameList("./screens-tour/all", 29),
    fps: 2.5,
    titles: {
      ko: "전체 화면 투어",
      en: "Full Screen Tour",
      ja: "全画面ツアー",
    },
    descriptions: {
      ko: "관리자 계정으로 실시간 제어 → 로봇 관리 → 작업 운영 → 웨이포인트 → 작업 이력 → 그리퍼 → 알림 → 회원정보 → 사업장/하드웨어/세션 관리까지, 콘솔 전 페이지를 순회하는 29프레임 화면 투어입니다.",
      en: "A 29-frame walkthrough of every console page under an admin account — real-time control, robots, recipes, waypoints, executions, gripper, alerts, profile, and the site/hardware/session admin screens.",
      ja: "管理者アカウントで実時間制御 → ロボット管理 → 作業運用 → ウェイポイント → 作業履歴 → グリッパー → アラート → 会員情報 → 事業場/ハードウェア/セッション管理まで、コンソール全ページを巡回する29フレームのツアーです。",
    },
    points: {
      ko: [
        "Playwright 데스크톱 뷰포트 E2E가 모든 메뉴를 자동 순회하며 프레임 캡처",
        "사이드바 네비게이션 · 헤더 · 권한별 메뉴 구성을 한 흐름에서 검증",
        "Stop Claude 배너는 데모 환경 안내 (운영 빌드에는 없음)",
      ],
      en: [
        "A Playwright desktop-viewport E2E walks every menu and captures frames",
        "Validates sidebar nav, header, and role-based menu layout in one flow",
        "The 'Stop Claude' banner is a demo-environment hint (absent in prod builds)",
      ],
      ja: [
        "Playwrightのデスクトップビューポート E2E が全メニューを自動巡回しフレームをキャプチャ",
        "サイドバーナビ・ヘッダー・権限別メニュー構成を一連の流れで検証",
        "「Stop Claude」バナーはデモ環境の案内(本番ビルドには存在しません)",
      ],
    },
  },
  tourOverview: {
    frames: buildFrameList("./screens-tour/overview", 11),
    fps: 1.8,
    titles: {
      ko: "페이지 개요 (단축본)",
      en: "Pages Overview (short)",
      ja: "ページ概要(短縮版)",
    },
    descriptions: {
      ko: "전체 투어의 단축본입니다. 11프레임으로 실시간 제어 · 그리퍼 · 세션 관리 등 핵심 페이지만 빠르게 훑습니다. 면접/리뷰 자리에서 30초 안에 콘솔 인상을 전달할 때 사용했습니다.",
      en: "An 11-frame short of the full tour — skims only the key pages (real-time control, gripper, session management). Used to convey the console feel in under 30 seconds during reviews and interviews.",
      ja: "全体ツアーの短縮版。11フレームで実時間制御・グリッパー・セッション管理など主要ページのみを素早く確認。面接/レビューで30秒以内にコンソールの印象を伝える用に使用しました。",
    },
    points: {
      ko: [
        "핵심 11페이지만 추려 빠른 인상 전달용으로 분리",
        "동일한 캡처 파이프라인을 짧은 시나리오로 재실행",
        "프레임 간 간격이 약간 더 길어 각 화면을 읽기 쉬움",
      ],
      en: [
        "Cut down to the 11 most informative pages for a quick first impression",
        "Same capture pipeline, rerun against a shorter scenario",
        "Slightly slower playback so each screen is easier to read",
      ],
      ja: [
        "重要な11ページのみに絞り、印象を素早く伝える用途に分離",
        "同じキャプチャパイプラインを短いシナリオで再実行",
        "フレーム間隔がやや長く、各画面を読み取りやすい",
      ],
    },
  },
  page: {
    src: "../omni-kit-screenshots/ur5-desktop-page.png",
    titles: {
      ko: "실시간 제어 콘솔",
      en: "Real-time Control Console",
      ja: "リアルタイム制御コンソール",
    },
    descriptions: {
      ko: "관리자 권한으로 진입하는 실시간 제어(WS-003) 페이지입니다. 좌측 메뉴는 일반/관리자 권한에 따라 동적으로 구성되며, 메인 영역에 URDF 3D 뷰어 · 로봇 명령 · 정비 모드 · 그리퍼 · 음성 패널이 모여 있습니다.",
      en: "The real-time control page (WS-003) entered with admin permissions. The left menu adapts to general/admin roles; the main area holds the URDF 3D viewer, robot commands, maintenance mode, gripper, and voice panel.",
      ja: "管理者権限で入る実時間制御(WS-003)ページ。左メニューは一般/管理者の権限に応じて構成され、メイン領域にURDF 3Dビューア、ロボット命令、整備モード、グリッパー、音声パネルが集まっています。",
    },
    points: {
      ko: [
        "좌측 메뉴: 대시보드·실시간 제어·로봇 관리·작업 운영·웨이포인트·작업 이력·그리퍼·알림",
        "관리자 메뉴: 사업장 관리(WS-016)·하드웨어 관리(WS-013)·세션 관리(WS-009)",
        "좌측 패널 collapsed 상태는 localStorage 키 omnikit:sidebar-collapsed로 유지",
      ],
      en: [
        "Left nav: dashboard, real-time control, robots, recipes, waypoints, executions, gripper, alerts",
        "Admin nav: site management (WS-016), hardware management (WS-013), session management (WS-009)",
        "Sidebar collapsed state is persisted under localStorage key omnikit:sidebar-collapsed",
      ],
      ja: [
        "左ナビ：ダッシュボード、実時間制御、ロボット、レシピ、ウェイポイント、実行履歴、グリッパー、アラート",
        "管理者ナビ：事業場管理(WS-016)、ハードウェア管理(WS-013)、セッション管理(WS-009)",
        "サイドバー折りたたみ状態は localStorage キー omnikit:sidebar-collapsed に保存",
      ],
    },
  },
  canvas: {
    src: "../omni-kit-screenshots/ur5-desktop-canvas-after.png",
    titles: {
      ko: "URDF 디지털 트윈 뷰어",
      en: "URDF Digital Twin Viewer",
      ja: "URDFデジタルツインビューア",
    },
    descriptions: {
      ko: "@react-three/fiber + urdf-loader 기반의 3D URDF 뷰어입니다. MQTT/WS로 도착한 jointPositions와 tcpPose를 normalizeTcpPose로 흡수해 실제 UR5와 같은 자세로 렌더링합니다.",
      en: "A 3D URDF viewer built on @react-three/fiber + urdf-loader. Joint positions and TCP poses arriving over MQTT/WS are normalized and rendered to match the live UR5 pose.",
      ja: "@react-three/fiber + urdf-loaderベースの3D URDFビューア。MQTT/WSで届くjointPositionsとtcpPoseをnormalizeTcpPoseで吸収し、実UR5と同じ姿勢でレンダリングします。",
    },
    points: {
      ko: [
        "@react-three/drei OrbitControls로 카메라/그리드 조작",
        "tcpPose는 객체형/배열형(posX..rotZ 또는 [x,y,z,rx,ry,rz]) 양쪽 수용",
        "joint_positions 6개 슬롯 기준, 누락 시 DEFAULT_JOINT_POSITIONS로 폴백",
      ],
      en: [
        "OrbitControls (@react-three/drei) drives camera and grid interaction",
        "tcpPose accepts both object (posX..rotZ) and array ([x,y,z,rx,ry,rz]) shapes",
        "Falls back to DEFAULT_JOINT_POSITIONS when joint_positions slots are missing",
      ],
      ja: [
        "@react-three/drei のOrbitControlsでカメラ/グリッド操作",
        "tcpPoseはオブジェクト形(posX..rotZ)/配列形([x,y,z,rx,ry,rz])の両方を吸収",
        "joint_positions の6スロットが欠ける場合はDEFAULT_JOINT_POSITIONSにフォールバック",
      ],
    },
  },
  mini: {
    src: "../omni-kit-screenshots/ur5-min-desktop-page.png",
    titles: {
      ko: "축소 레이아웃 콘솔",
      en: "Compact Layout Console",
      ja: "縮小レイアウトコンソール",
    },
    descriptions: {
      ko: "사이드바를 collapsed 상태로 두고 작은 데스크톱 뷰포트에 맞춘 콘솔 레이아웃입니다. Playwright 데스크톱 뷰포트 E2E로 캡처해 회귀 검증에 사용했습니다.",
      en: "The console with the sidebar collapsed, tuned for narrower desktop viewports. Captured by a Playwright desktop-viewport E2E run and used for regression checks.",
      ja: "サイドバーを折りたたみ、狭めのデスクトップビューポート向けに調整したレイアウト。Playwrightのデスクトップビューポート実行でキャプチャし、リグレッション検証に使用しています。",
    },
    points: {
      ko: [
        "collapsed 토글 상태가 omnikit:sidebar-collapsed에 영속",
        "Playwright (vitest 아닌 E2E)로 데스크톱 페이지를 PNG 캡처",
        "동일 컴포넌트가 일반/축소 레이아웃 양쪽을 담당",
      ],
      en: [
        "Sidebar collapsed toggle persists under omnikit:sidebar-collapsed",
        "Captured as PNG via Playwright desktop-viewport E2E (not unit tests)",
        "Same components drive both regular and compact layouts",
      ],
      ja: [
        "折りたたみトグルは omnikit:sidebar-collapsed に保存",
        "Playwrightのデスクトップビューポートで PNG キャプチャ",
        "同一コンポーネントで通常/縮小レイアウト両方に対応",
      ],
    },
  },
};

const TRANSLATIONS = {
  ko: {
    eyebrow: "Cobot Operations Console",
    "hero-summary": "UR5 협동로봇을 웹에서 모니터링·제어하고 WebAuthn 기반 디바이스 화이트리스트로 보호하는 산업용 운영 콘솔입니다. React 19 + Spring Boot 3 + ROS 2 워크스페이스가 MQTT/WebSocket으로 연결됩니다.",
    "hero-link-screens": "화면 보기",
    "hero-link-role": "담당 역할",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Vite 6 + TS · URDF Viewer",
    "snapshot-back": "JDK 21 · JPA · MQTT",
    "snapshot-auth": "Yubico Server 2.8",
    "snapshot-ros": "Humble · UR Driver 2.12",
    "overview-kicker": "Overview",
    "overview-title": "문제 정의",
    "overview-copy": "기존 산업용 협동로봇은 펜던트 옆에서만 조작·확인이 가능하고, 누가 어떤 단말에서 접근하는지 관리가 어렵습니다. Omni-Kit은 로봇 상태를 웹/모바일로 끌어올리고, 모든 단말을 사이트별 WebAuthn 화이트리스트로 잠그는 운영 콘솔을 만들었습니다.",
    "value-kicker": "Core Value",
    "value-title": "핵심 구현 포인트",
    "value-copy": "React 19 기반 콘솔에서 3D URDF 디지털 트윈으로 실 로봇과 동일한 자세를 확인하고, MQTT/WebSocket으로 명령/상태가 양방향 흐릅니다. Spring Boot 백엔드가 WebAuthn 등록·인증·세션 무효화·디바이스 takeover까지 운영 보안을 책임집니다.",
    "highlights-kicker": "Highlights",
    "highlights-title": "핵심 기능",
    "feature-1-title": "WebAuthn 디바이스 화이트리스트",
    "feature-1-copy": "Yubico WebAuthn 서버 라이브러리로 등록·어설션을 처리하고, 디바이스를 PENDING/APPROVED/BLOCKED로 관리합니다. 첫 admin은 부트스트랩 자동 승인됩니다.",
    "feature-2-title": "3D URDF 디지털 트윈",
    "feature-2-copy": "@react-three/fiber + urdf-loader로 UR5 모델을 렌더링하고, MQTT를 통해 들어오는 관절/TCP pose를 WebSocket으로 받아 화면에 즉시 반영합니다.",
    "feature-3-title": "단일 세션 보안",
    "feature-3-copy": "단일 세션 정책으로 다른 기기에서 takeover되면 30초 폴링과 visibilitychange로 즉시 감지해 로그아웃합니다. AccessTokenDenylist로 토큰도 즉시 무효화됩니다.",
    "feature-4-title": "패스키 분실 복구 흐름",
    "feature-4-copy": "OS keychain 분실로 WebAuthn 어설션이 막혔을 때 자가 reset-credential, 같은 사이트 사용자 takeover-reset, PENDING 승인 재요청까지 흐름을 닫았습니다.",
    "screens-kicker": "Screen Explorer",
    "screens-title": "실제 운영 화면",
    "screens-copy": "관리자 콘솔의 실시간 제어 화면과 디지털 트윈 뷰어 동작을 확인할 수 있습니다.",
    "tab-tourAll": "전체 화면 투어",
    "tab-tourOverview": "페이지 개요",
    "tab-page": "실시간 제어",
    "tab-canvas": "URDF 뷰어",
    "tab-mini": "축소 레이아웃",
    "architecture-kicker": "Architecture",
    "architecture-title": "웹 · 백엔드 · MQTT · ROS 2 워크스페이스 분리",
    "architecture-lead": "React 콘솔과 Spring Boot 백엔드가 REST/STOMP로 통신하고, 백엔드는 Spring Integration MQTT로 로봇 워크스페이스와 명령/상태 메시지를 주고받습니다.",
    "architecture-caption": "STT는 web/sensevoice가 faster-whisper large-v3-turbo로 EC2 CPU(int8)에서 서빙하고, 음성 발화·LLM 응답은 로봇이 진실원천이 되어 evt/conversation MQTT → WS llm.conversation.appended로 콘솔에 도착합니다.",
    "stack-kicker": "Tech Stack",
    "stack-title": "사용 기술",
    "stack-front-title": "Frontend",
    "stack-front-copy": "관리자 콘솔(데스크톱)과 operator 모바일을 같은 모노레포에서 운영합니다. 3D URDF 뷰어는 @react-three/fiber + urdf-loader, WebAuthn 클라이언트는 @simplewebauthn/browser로 처리합니다.",
    "stack-back-title": "Backend",
    "stack-back-copy": "JWT + WebAuthn + 디바이스 가드 3중 보안과, ROS 2 워크스페이스와 통신하는 MQTT 이벤트 라우터를 같은 백엔드에 묶었습니다. JPA + Redis로 세션·쿨다운을 관리합니다.",
    "stack-robot-title": "Robot / Infra",
    "stack-robot-copy": "omni_kit ROS 2 워크스페이스가 UR5 RTDE 드라이버와 OnRobot 2FG7 Modbus 그리퍼를 제어하고, web/sensevoice가 EC2 CPU(int8) Whisper 추론을 서빙합니다.",
    "role-kicker": "My Contribution",
    "role-title": "담당 역할",
    "role-copy": "백엔드 인증·세션·디바이스 가드와 프론트엔드 페이지 구조(콘솔 셸·실시간 제어·관리자 화면·로그인 흐름)를 함께 맡았습니다.",
    "role-1-title": "WebAuthn 등록·인증 서비스",
    "role-1-copy": "Spring Boot의 WebAuthnService에서 Yubico RelyingParty 기반 등록 옵션·검증, 어설션, 첫 admin 부트스트랩 자동 승인까지 구현했습니다. 등록 시 admin에게 PENDING 알림을 발사합니다.",
    "role-2-title": "디바이스 가드 (D8) + 단일 세션",
    "role-2-copy": "AuthSessionGuard 인터셉터에서 WebAuthn credential → 사이트 → APPROVED → 디바이스 타입 순으로 검증하고, AccessTokenDenylist로 강제 만료 시 토큰을 즉시 무효화했습니다.",
    "role-3-title": "하드웨어 관리 콘솔",
    "role-3-copy": "AdminPages의 ClientDevicesPage에서 PENDING/APPROVED/BLOCKED 상태 전환, 알림 링크의 사원번호 prefill, 사이트 멤버/그룹/그리퍼 관리까지 화면을 구현했습니다.",
    "role-4-title": "콘솔 셸 + 라우팅 가드",
    "role-4-copy": "AppShell 사이드바·collapsed 상태·세션 takeover 폴링(30s + visibilitychange), routing.tsx의 PublicOnly/Protected/PendingApproval/DesktopOnly 라우트 가드를 작성했습니다.",
    "trouble-kicker": "Troubleshooting",
    "trouble-title": "기술적 문제 해결 포인트",
    "trouble-1-title": "디바이스 폴링 vs WebAuthn 어설션 race",
    "trouble-1-copy": "PendingApprovalRoute에서 디바이스가 APPROVED로 갱신되자마자 /dashboard로 보내면 WebAuthn 어설션 단계가 trigger되지 않는 race가 있었습니다. 토큰의 webauthnCredentialId 유무까지 함께 확인해 라우트가 한 단계 더 머무르도록 가드를 고쳤습니다.",
    "trouble-2-title": "다른 기기 takeover 즉시 감지",
    "trouble-2-copy": "단일 세션 정책 하에서 다른 기기 로그인 시 기존 탭이 살아 있으면 사용자가 모릅니다. AppShell에서 /auth/me 30초 폴링 + visibilitychange 즉시 호출을 결합해 AUTH_031을 받으면 인터셉터가 /login?takeover=1로 보내도록 닫았습니다.",
    "trouble-3-title": "패스키 분실 복구 cooldown 설계",
    "trouble-3-copy": "자가 reset-credential과 같은 사이트 사용자 takeover-reset이 admin 알림을 스팸으로 만들 수 있어, Redis로 사용자/사이트별 60초 cooldown을 적용했습니다. takeover 시 기존 deviceType·deviceName은 보존해 식별 정보가 사라지지 않도록 처리했습니다.",
    "trouble-4-title": "Linux 데스크톱 시현 우회 게이팅",
    "trouble-4-copy": "시연 환경의 우분투 PC는 OS platform authenticator가 없어 Chrome WebAuthn 흐름이 막힙니다. AuthSessionGuard와 라우트 가드에 User-Agent 기반 우회를 두되, Android의 'Linux' 토큰은 명시적으로 제외해 operator MOBILE 정책이 깨지지 않게 했습니다.",
    "trouble-5-title": "jog 명령 토스트 스팸 차단",
    "trouble-5-copy": "실시간 제어에서 jog 버튼은 80ms 간격으로 연속 발사되는데, 실패 시 매 tick 토스트가 떠 화면이 가려졌습니다. 마지막 에러 토스트 시점을 기록해 3초 이내 재표시를 막고, 성공 시 카운터를 리셋하도록 정리했습니다.",
    "closing-kicker": "Summary",
    "closing-title": "UR5 협동로봇 운영 콘솔 + WebAuthn 보안 통합 플랫폼",
    "closing-copy": "SSAFY 14기 자율 프로젝트(S14P31S303) — React 19 + Spring Boot 3 + ROS 2 워크스페이스를 묶은 협동로봇 운영 콘솔입니다. WebAuthn 디바이스 화이트리스트, 단일 세션 강제, 3D URDF 디지털 트윈을 한 흐름에 연결했습니다.",
  },
  en: {
    eyebrow: "Cobot Operations Console",
    "hero-summary": "An industrial operations console for the UR5 collaborative robot — monitor and control it from the web, with every endpoint locked behind a WebAuthn device whitelist. React 19 + Spring Boot 3 + a ROS 2 workspace are wired together over MQTT and WebSocket.",
    "hero-link-screens": "See Screens",
    "hero-link-role": "My Role",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Vite 6 + TS · URDF Viewer",
    "snapshot-back": "JDK 21 · JPA · MQTT",
    "snapshot-auth": "Yubico Server 2.8",
    "snapshot-ros": "Humble · UR Driver 2.12",
    "overview-kicker": "Overview",
    "overview-title": "The Problem",
    "overview-copy": "Cobots are usually only controllable next to their pendant, and there's no clean way to govern which terminal accesses them. Omni-Kit lifts robot state into a web/mobile console and locks every device behind a per-site WebAuthn whitelist.",
    "value-kicker": "Core Value",
    "value-title": "What we built",
    "value-copy": "The React 19 console shows a 3D URDF digital twin that mirrors the live robot pose, while MQTT/WebSocket carry commands and state both ways. Spring Boot owns WebAuthn registration, assertion, session invalidation, and device takeover.",
    "highlights-kicker": "Highlights",
    "highlights-title": "Key Features",
    "feature-1-title": "WebAuthn Device Whitelist",
    "feature-1-copy": "Yubico's WebAuthn server library handles registration and assertion, and devices are tracked as PENDING/APPROVED/BLOCKED. The first admin device on a site is bootstrap-approved automatically.",
    "feature-2-title": "3D URDF Digital Twin",
    "feature-2-copy": "The UR5 model is rendered with @react-three/fiber + urdf-loader, and joint/TCP poses arriving over MQTT → WebSocket are reflected on screen instantly.",
    "feature-3-title": "Single-Session Security",
    "feature-3-copy": "Under a single-session policy, takeover from another device is detected by 30s polling + visibilitychange, kicking the old tab. AccessTokenDenylist invalidates the access token immediately on force expiry.",
    "feature-4-title": "Passkey Recovery Flow",
    "feature-4-copy": "When an OS keychain wipes the credential, users can self reset-credential, peers in the same site can takeover-reset, and a PENDING device can remind-admin — closing every dead end.",
    "screens-kicker": "Screen Explorer",
    "screens-title": "Live Operations Screens",
    "screens-copy": "Walk through the admin real-time control page and the URDF digital twin viewer.",
    "tab-tourAll": "Full Tour",
    "tab-tourOverview": "Pages Overview",
    "tab-page": "Real-time Control",
    "tab-canvas": "URDF Viewer",
    "tab-mini": "Compact Layout",
    "architecture-kicker": "Architecture",
    "architecture-title": "Web · Backend · MQTT · ROS 2 workspace split",
    "architecture-lead": "The React console talks to Spring Boot over REST/STOMP, and Spring Integration MQTT carries commands and state between the backend and the ROS 2 workspace.",
    "architecture-caption": "STT runs out of web/sensevoice (faster-whisper large-v3-turbo, EC2 CPU int8). Utterances and LLM replies are sourced from the robot and arrive at the console via evt/conversation MQTT → WS llm.conversation.appended.",
    "stack-kicker": "Tech Stack",
    "stack-title": "Technologies",
    "stack-front-title": "Frontend",
    "stack-front-copy": "The desktop admin console and the operator mobile app live in the same monorepo. The 3D URDF viewer uses @react-three/fiber + urdf-loader; WebAuthn is driven through @simplewebauthn/browser.",
    "stack-back-title": "Backend",
    "stack-back-copy": "Triple-layered security — JWT + WebAuthn + a device guard — sits alongside a Spring Integration MQTT event router that talks to the ROS 2 workspace. JPA + Redis manage sessions and cooldowns.",
    "stack-robot-title": "Robot / Infra",
    "stack-robot-copy": "The omni_kit ROS 2 workspace drives UR5 via the RTDE driver and the OnRobot 2FG7 gripper over Modbus, while web/sensevoice serves Whisper inference on EC2 CPU (int8).",
    "role-kicker": "My Contribution",
    "role-title": "What I Owned",
    "role-copy": "Owned the backend auth/session/device guard layer alongside the frontend page structure — app shell, real-time control, admin pages, and the login flow.",
    "role-1-title": "WebAuthn Registration & Authentication",
    "role-1-copy": "Built WebAuthnService on top of Yubico RelyingParty — registration options, attestation verification, assertion, and bootstrap auto-approval for the first admin device. Registration fires a PENDING alert to admins.",
    "role-2-title": "Device Guard (D8) + Single Session",
    "role-2-copy": "The AuthSessionGuard interceptor verifies WebAuthn credential → site → APPROVED → device type, and AccessTokenDenylist invalidates JWTs immediately when admins force-expire sessions.",
    "role-3-title": "Hardware Management Console",
    "role-3-copy": "Built the ClientDevicesPage flows — PENDING/APPROVED/BLOCKED transitions, employee-number prefill from alert links, and site member/group/gripper management screens.",
    "role-4-title": "App Shell + Routing Guards",
    "role-4-copy": "Wrote the AppShell sidebar with persisted collapsed state and the 30s + visibilitychange session-takeover probe, plus the PublicOnly / Protected / PendingApproval / DesktopOnly route guards in routing.tsx.",
    "trouble-kicker": "Troubleshooting",
    "trouble-title": "Technical Hurdles I Solved",
    "trouble-1-title": "Device polling vs WebAuthn assertion race",
    "trouble-1-copy": "PendingApprovalRoute redirected to /dashboard the moment the device flipped to APPROVED, which skipped the WebAuthn assertion step. I added a check on the token's webauthnCredentialId so the route stays one beat longer until assertion finishes.",
    "trouble-2-title": "Detecting takeover from another device",
    "trouble-2-copy": "Under the single-session policy, takeover from another device left old tabs stale. AppShell now combines a 30s /auth/me poll with a visibilitychange probe; on AUTH_031 the http interceptor sends the tab to /login?takeover=1.",
    "trouble-3-title": "Passkey recovery cooldowns",
    "trouble-3-copy": "Self reset-credential and peer takeover-reset could spam admins with alerts, so I added a per-user/site 60-second cooldown in Redis. Takeover preserves the existing deviceType and deviceName so identifying info survives the flow.",
    "trouble-4-title": "Linux desktop demo bypass",
    "trouble-4-copy": "The Ubuntu demo PC has no OS platform authenticator, so Chrome's WebAuthn flow stalls. AuthSessionGuard and the route guards gain a User-Agent bypass, but the Android 'Linux' token is excluded so the operator MOBILE policy isn't broken.",
    "trouble-5-title": "Jog command toast spam",
    "trouble-5-copy": "Jog buttons fire every 80ms, and a failure surfaced a toast on every tick. I record the last error timestamp, suppress repeats within 3 seconds, and reset the counter on the next success.",
    "closing-kicker": "Summary",
    "closing-title": "A UR5 cobot operations console wrapped in WebAuthn security",
    "closing-copy": "SSAFY 14th autonomous project (S14P31S303) — a cobot operations console that ties React 19 + Spring Boot 3 + a ROS 2 workspace together, with WebAuthn device whitelisting, single-session enforcement, and a 3D URDF digital twin in one flow.",
  },
  ja: {
    eyebrow: "Cobot Operations Console",
    "hero-summary": "UR5協働ロボットをWebから監視・制御し、WebAuthnベースのデバイスホワイトリストで保護する産業用運用コンソールです。React 19 + Spring Boot 3 + ROS 2 ワークスペースをMQTT/WebSocketで結合しています。",
    "hero-link-screens": "画面を見る",
    "hero-link-role": "担当役割",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Vite 6 + TS · URDF Viewer",
    "snapshot-back": "JDK 21 · JPA · MQTT",
    "snapshot-auth": "Yubico Server 2.8",
    "snapshot-ros": "Humble · UR Driver 2.12",
    "overview-kicker": "Overview",
    "overview-title": "問題定義",
    "overview-copy": "従来の協働ロボットはペンダント脇でしか操作・確認できず、どの端末からアクセスしているかの管理も難しいです。Omni-KitはロボットステートをWeb/モバイルに引き上げ、全端末をサイト別WebAuthnホワイトリストで施錠する運用コンソールを作りました。",
    "value-kicker": "Core Value",
    "value-title": "主要な実装ポイント",
    "value-copy": "React 19コンソールの3D URDFデジタルツインで実機と同じ姿勢を確認し、MQTT/WebSocketで命令/状態を双方向に流します。Spring BackendがWebAuthn登録・認証・セッション失効・デバイスtakeoverまで運用セキュリティを担います。",
    "highlights-kicker": "Highlights",
    "highlights-title": "主な機能",
    "feature-1-title": "WebAuthn デバイスホワイトリスト",
    "feature-1-copy": "Yubico WebAuthnサーバライブラリで登録・アサーションを処理し、デバイスをPENDING/APPROVED/BLOCKEDで管理。初の管理者デバイスはブートストラップで自動承認します。",
    "feature-2-title": "3D URDF デジタルツイン",
    "feature-2-copy": "@react-three/fiber + urdf-loaderでUR5モデルをレンダリングし、MQTT経由のjoint/TCPポーズをWebSocketで受けて画面に即時反映します。",
    "feature-3-title": "単一セッションセキュリティ",
    "feature-3-copy": "単一セッションポリシーで他端末takeoverを30秒ポーリング+visibilitychangeで即時検知しログアウト。AccessTokenDenylistによりトークンも即座に無効化します。",
    "feature-4-title": "パスキー紛失リカバリ",
    "feature-4-copy": "OS keychain紛失でWebAuthnアサーションが止まったとき、自己reset-credential、同一サイト利用者のtakeover-reset、PENDING承認の再要求まで動線を閉じました。",
    "screens-kicker": "Screen Explorer",
    "screens-title": "実運用画面",
    "screens-copy": "管理者コンソールの実時間制御画面とURDFデジタルツインビューアの挙動を確認できます。",
    "tab-tourAll": "全画面ツアー",
    "tab-tourOverview": "ページ概要",
    "tab-page": "実時間制御",
    "tab-canvas": "URDFビューア",
    "tab-mini": "縮小レイアウト",
    "architecture-kicker": "Architecture",
    "architecture-title": "Web・バックエンド・MQTT・ROS 2ワークスペースの分離",
    "architecture-lead": "ReactコンソールとSpring BootバックエンドがREST/STOMPで通信し、バックエンドはSpring Integration MQTTでROS 2ワークスペースと命令/状態メッセージをやり取りします。",
    "architecture-caption": "STTはweb/sensevoiceがfaster-whisper large-v3-turboでEC2 CPU(int8)でサービングし、発話・LLM応答はロボットを真実源としてevt/conversation MQTT → WS llm.conversation.appendedでコンソールへ届きます。",
    "stack-kicker": "Tech Stack",
    "stack-title": "使用技術",
    "stack-front-title": "Frontend",
    "stack-front-copy": "管理者コンソール(デスクトップ)とoperatorモバイルを同じモノレポで運用。3D URDFビューアは@react-three/fiber + urdf-loader、WebAuthnクライアントは@simplewebauthn/browserで処理しています。",
    "stack-back-title": "Backend",
    "stack-back-copy": "JWT + WebAuthn + デバイスガードの三重セキュリティと、ROS 2 ワークスペースと通信するMQTTイベントルータを同一バックエンドにまとめました。JPA + Redisでセッション・クールダウンを管理しています。",
    "stack-robot-title": "Robot / Infra",
    "stack-robot-copy": "omni_kit ROS 2 ワークスペースがUR5 RTDEドライバとOnRobot 2FG7 Modbusグリッパーを制御し、web/sensevoiceがEC2 CPU(int8) Whisper推論を提供します。",
    "role-kicker": "My Contribution",
    "role-title": "担当役割",
    "role-copy": "バックエンドの認証・セッション・デバイスガードと、フロントエンドのページ構造(コンソールシェル・実時間制御・管理者画面・ログイン動線)を併せて担当しました。",
    "role-1-title": "WebAuthn 登録・認証サービス",
    "role-1-copy": "Spring BootのWebAuthnServiceでYubico RelyingPartyベースの登録オプション/検証、アサーション、初管理者ブートストラップ自動承認まで実装。登録時には管理者へPENDING通知を発します。",
    "role-2-title": "デバイスガード (D8) + 単一セッション",
    "role-2-copy": "AuthSessionGuardインターセプタでWebAuthn credential → サイト → APPROVED → デバイスタイプの順で検証し、AccessTokenDenylistで強制終了時にトークンを即時無効化しました。",
    "role-3-title": "ハードウェア管理コンソール",
    "role-3-copy": "AdminPagesのClientDevicesPageでPENDING/APPROVED/BLOCKED状態遷移、通知リンクからの社員番号prefill、サイトメンバー/グループ/グリッパー管理まで画面を実装しました。",
    "role-4-title": "コンソールシェル + ルーティングガード",
    "role-4-copy": "AppShellサイドバー・collapsed状態・セッションtakeoverポーリング(30s + visibilitychange)、routing.tsxのPublicOnly/Protected/PendingApproval/DesktopOnlyガードを記述しました。",
    "trouble-kicker": "Troubleshooting",
    "trouble-title": "技術的な問題解決ポイント",
    "trouble-1-title": "デバイスポーリング vs WebAuthn アサーション race",
    "trouble-1-copy": "PendingApprovalRouteでデバイスがAPPROVEDになるや否や/dashboardに遷移し、WebAuthnアサーションがトリガされないraceがありました。トークンのwebauthnCredentialId有無も併せて確認し、ルートが一段階長く留まるようガードを修正しました。",
    "trouble-2-title": "他端末takeoverの即時検知",
    "trouble-2-copy": "単一セッションポリシー下では他端末ログイン時に既存タブが残るとユーザが気づきません。AppShellで/auth/meの30秒ポーリング + visibilitychange呼び出しを結合し、AUTH_031を受けたらインターセプタが/login?takeover=1へ送るようにしました。",
    "trouble-3-title": "パスキー紛失リカバリのクールダウン設計",
    "trouble-3-copy": "自己reset-credentialと同サイト利用者のtakeover-resetが管理者通知を過剰にする可能性があり、Redisでユーザ/サイト別の60秒クールダウンを適用。takeover時は既存deviceType・deviceNameを保全して識別情報を維持しました。",
    "trouble-4-title": "Linuxデスクトップ用デモバイパス",
    "trouble-4-copy": "デモ環境のUbuntu PCはOS platform authenticatorが無く、ChromeのWebAuthnフローが止まります。AuthSessionGuardとルートガードにUser-Agentバイパスを入れつつ、Androidの「Linux」トークンは明示的に除外してoperator MOBILEポリシーが崩れないようにしました。",
    "trouble-5-title": "jog命令トーストのスパム抑止",
    "trouble-5-copy": "実時間制御のjogボタンは80ms間隔で連続発火するため、失敗するたびトーストが画面を覆っていました。最終エラー時刻を記録し3秒以内の再表示を抑止、成功時にカウンタをリセットするよう整えました。",
    "closing-kicker": "Summary",
    "closing-title": "UR5協働ロボット運用コンソール + WebAuthnセキュリティ統合プラットフォーム",
    "closing-copy": "SSAFY 14期自律プロジェクト(S14P31S303) — React 19 + Spring Boot 3 + ROS 2ワークスペースを束ねた協働ロボット運用コンソール。WebAuthnデバイスホワイトリスト、単一セッション強制、3D URDFデジタルツインを一つの流れに統合しています。",
  },
};

const TAB_KEY_BY_SCREEN = {
  tourAll: "tab-tourAll",
  tourOverview: "tab-tourOverview",
  page: "tab-page",
  canvas: "tab-canvas",
  mini: "tab-mini",
};

let currentLang = "ko";
let currentScreen = "tourAll";
let playerTimer = null;
let playerFrameIdx = 0;
let playerPaused = false;

function applyTranslations(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  Object.entries(t).forEach(([id, text]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  });
  document.querySelectorAll(".lang-button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  document.querySelectorAll(".screen-tab").forEach((btn) => {
    const key = TAB_KEY_BY_SCREEN[btn.dataset.screen];
    if (key && t[key]) btn.textContent = t[key];
  });
  renderScreen();
}

function stopPlayer() {
  if (playerTimer !== null) {
    clearInterval(playerTimer);
    playerTimer = null;
  }
}

function updatePlayerUi(data) {
  const counter = document.getElementById("screen-player-counter");
  const bar = document.getElementById("screen-player-progress-bar");
  if (counter) counter.textContent = `${playerFrameIdx + 1} / ${data.frames.length}`;
  if (bar) bar.style.width = `${((playerFrameIdx + 1) / data.frames.length) * 100}%`;
}

function startPlayer(data) {
  stopPlayer();
  const interval = Math.max(120, Math.round(1000 / (data.fps || 2)));
  playerTimer = setInterval(() => {
    if (playerPaused) return;
    playerFrameIdx = (playerFrameIdx + 1) % data.frames.length;
    const image = document.getElementById("screen-image");
    if (image) image.src = data.frames[playerFrameIdx];
    updatePlayerUi(data);
  }, interval);
}

function renderScreen() {
  const data = SCREEN_DATA[currentScreen];
  if (!data) return;
  const image = document.getElementById("screen-image");
  const controls = document.getElementById("screen-player-controls");
  const toggle = document.getElementById("screen-player-toggle");
  stopPlayer();

  if (data.frames) {
    playerFrameIdx = 0;
    playerPaused = false;
    if (image) {
      image.src = data.frames[0];
      image.alt = data.titles[currentLang];
    }
    if (controls) controls.hidden = false;
    if (toggle) toggle.textContent = "⏸";
    updatePlayerUi(data);
    startPlayer(data);
  } else {
    if (image) {
      image.src = data.src;
      image.alt = data.titles[currentLang];
    }
    if (controls) controls.hidden = true;
  }

  const title = document.getElementById("screen-title");
  if (title) title.textContent = data.titles[currentLang];
  const desc = document.getElementById("screen-description");
  if (desc) desc.textContent = data.descriptions[currentLang];
  const points = document.getElementById("screen-points");
  if (points) {
    points.innerHTML = "";
    data.points[currentLang].forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      points.appendChild(li);
    });
  }
}

document.getElementById("screen-player-toggle")?.addEventListener("click", () => {
  playerPaused = !playerPaused;
  const toggle = document.getElementById("screen-player-toggle");
  if (toggle) toggle.textContent = playerPaused ? "▶" : "⏸";
});

document.querySelectorAll(".lang-button").forEach((btn) => {
  btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
});

document.querySelectorAll(".screen-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentScreen = btn.dataset.screen;
    document.querySelectorAll(".screen-tab").forEach((node) => {
      node.classList.toggle("is-active", node === btn);
    });
    renderScreen();
  });
});

renderScreen();
