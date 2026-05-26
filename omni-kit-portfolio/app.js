function screenList(...filenames) {
  return filenames.map((filename) => `../omni-kit-screenshots/${filename}`);
}

const SCREEN_DATA = {
  auth: {
    frames: screenList(
      "00_auth_01_login-form.png",
      "00_auth_02_passkey-selection.png",
      "00_auth_03_admin-approval-error.png",
    ),
    fps: 0.55,
    titles: {
      ko: "로그인과 관리자 승인",
      en: "Login and Admin Approval",
      ja: "ログインと管理者承認",
    },
    descriptions: {
      ko: "사이트 코드와 사번으로 로그인한 뒤 저장된 패스키를 선택하고, WebAuthn 디바이스 승인 상태를 확인하는 진입 흐름입니다.",
      en: "The entry flow: sign in with site code and employee ID, choose the saved passkey, then verify WebAuthn device approval state.",
      ja: "サイトコードと社員番号でログインし、保存済みパスキーを選択してWebAuthnデバイス承認状態を確認する導線です。",
    },
    points: {
      ko: [
        "PC 관리자는 패스키 기반 인증을 통과해야 콘솔에 진입",
        "승인 대기 화면에서 등록 장치 정보와 현재 브라우저 fingerprint를 대조",
        "승인 후 세션 갱신 실패 같은 예외도 같은 화면에서 복구 동선 제공",
      ],
      en: [
        "Desktop managers must pass passkey authentication before entering the console",
        "Pending approval compares registered device data with the current browser fingerprint",
        "Recovery actions are exposed in place for edge cases like session refresh failure after approval",
      ],
      ja: [
        "PC管理者はパスキー認証を通過してからコンソールへ進入",
        "承認待ち画面で登録デバイス情報と現在ブラウザのfingerprintを照合",
        "承認後のセッション更新失敗なども同じ画面で復旧導線を提示",
      ],
    },
  },
  dashboard: {
    frames: screenList("10_dashboard_01_robot-status-cards.png"),
    titles: {
      ko: "운영 대시보드",
      en: "Operations Dashboard",
      ja: "運用ダッシュボード",
    },
    descriptions: {
      ko: "사이트 내 로봇 상태와 미확인 알림을 한 화면에서 보는 초기 화면입니다. 운영자는 카드 상태를 보고 바로 로봇 상세나 알림 상세로 이동합니다.",
      en: "The landing dashboard combines robot health cards and unread alerts. Operators can jump directly into robot details or alert details from the overview.",
      ja: "サイト内ロボット状態と未確認通知を一画面で確認する初期画面です。カードからロボット詳細や通知詳細へ直接移動できます。",
    },
    points: {
      ko: [
        "전체·정상·오류·고장·오프라인 상태를 칩으로 요약",
        "로봇 카드마다 점검 모드와 작업 상태를 즉시 확인",
        "오른쪽 알림 패널에서 하드웨어 인증 요청과 로봇 이벤트를 함께 노출",
      ],
      en: [
        "Summarizes all, healthy, error, fault, and offline counts as status chips",
        "Each robot card surfaces maintenance mode and current operating state",
        "The alert panel combines device-registration requests and robot events",
      ],
      ja: [
        "全体・正常・エラー・故障・オフライン件数をチップで要約",
        "各ロボットカードで点検モードと稼働状態を即時確認",
        "右側通知パネルでデバイス認証要求とロボットイベントを併せて表示",
      ],
    },
  },
  realtime: {
    frames: screenList(
      "20_realtime-control_01_tcp-control.png",
      "20_realtime-control_02_llm-chat-compact.png",
      "20_realtime-control_03_llm-chat-expanded.png",
      "20_realtime-control_04_joint-control.png",
      "20_realtime-control_05_quick-execution.png",
    ),
    fps: 0.55,
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
        "TCP·조인트·빠른 실행 탭을 같은 3D 워크셀 위에서 전환",
        "점검 모드, Free Drive, 속도, 실 로봇/시뮬레이션 상태를 상단에서 제어",
        "LLM 대화 패널은 크기 조절 가능한 오버레이로 로봇 제어 문맥을 보조",
      ],
      en: [
        "Switch TCP, joint, and quick-execution controls over the same 3D workcell",
        "Maintenance mode, Free Drive, speed, real/simulation state are handled in the top control row",
        "The resizable LLM overlay assists robot-control conversations in context",
      ],
      ja: [
        "同じ3Dワークセル上でTCP・ジョイント・クイック実行を切り替え",
        "点検モード、Free Drive、速度、実機/シミュレーション状態を上部で制御",
        "LLM会話パネルはサイズ調整可能なオーバーレイで制御文脈を補助",
      ],
    },
  },
  robots: {
    frames: screenList(
      "30_robot-management_01_registered-robots.png",
      "30_robot-management_02_robot-detail.png",
      "30_robot-management_03_add-robot-modal.png",
    ),
    fps: 0.5,
    titles: {
      ko: "로봇 관리",
      en: "Robot Management",
      ja: "ロボット管理",
    },
    descriptions: {
      ko: "등록된 UR5 로봇의 연결 모드, 운영 상태, MQTT 상태, 그리퍼 매핑을 확인하고 실 로봇을 추가하는 관리 화면입니다.",
      en: "Manage registered UR5 robots, including connection mode, operating state, MQTT state, gripper mapping, and real-robot registration.",
      ja: "登録済みUR5ロボットの接続モード、稼働状態、MQTT状態、グリッパー連携を確認し、実機を追加する管理画面です。",
    },
    points: {
      ko: [
        "카드 목록과 상세 패널을 모두 제공해 빠른 탐색과 세부 수정 분리",
        "그룹·운영 상태·연결 모드·마지막 업데이트를 로봇별로 확인",
        "실 로봇 등록 모달에서 이름, 시리얼, 그룹, 모델을 한 번에 입력",
      ],
      en: [
        "Card list and detail panel separate quick scanning from detailed edits",
        "Group, operation state, connection mode, and last update are visible per robot",
        "The add-real-robot modal captures name, serial, group, and model in one flow",
      ],
      ja: [
        "カード一覧と詳細パネルで素早い確認と細かな編集を分離",
        "グループ・稼働状態・接続モード・最終更新をロボット単位で確認",
        "実ロボット追加モーダルで名前、シリアル、グループ、モデルを一括入力",
      ],
    },
  },
  operations: {
    frames: screenList(
      "40_work-operation_01_saved-recipes.png",
      "40_work-operation_02_recipe-type-modal.png",
      "40_work-operation_03_picknplace-recipe-detail.png",
      "40_work-operation_04_move-recipe-detail.png",
    ),
    fps: 0.5,
    titles: {
      ko: "작업 운영",
      en: "Recipe Operations",
      ja: "作業運用",
    },
    descriptions: {
      ko: "저장된 레시피를 선택하고 move/pickNplace 타입별 파라미터를 편집·실행하는 작업 작성 화면입니다.",
      en: "Create and run saved recipes, editing parameters separately for move and pickNplace recipe types.",
      ja: "保存済みレシピを選択し、move/pickNplaceタイプ別パラメータを編集・実行する作業作成画面です。",
    },
    points: {
      ko: [
        "작업 목록, 필터, 새 작업 생성 모달을 한 화면에서 제공",
        "pickNplace는 여유 높이·폭·힘·위치 파라미터를 명시적으로 편집",
        "move는 이동 방식과 목표 waypoint를 단순하게 지정",
      ],
      en: [
        "Recipe list, filters, and creation modal are available in one workspace",
        "pickNplace exposes clearance, width, force, and waypoint parameters explicitly",
        "move keeps the flow focused on movement type and destination waypoint",
      ],
      ja: [
        "作業一覧、フィルタ、新規作業作成モーダルを一画面で提供",
        "pickNplaceは高さ・幅・力・位置パラメータを明示的に編集",
        "moveは移動方式と目標waypoint指定に集中",
      ],
    },
  },
  waypoints: {
    frames: screenList(
      "50_waypoint_01_waypoint-list.png",
      "50_waypoint_02_name-waypoint-modal.png",
      "50_waypoint_03_waypoint-detail.png",
    ),
    fps: 0.5,
    titles: {
      ko: "웨이포인트",
      en: "Waypoints",
      ja: "ウェイポイント",
    },
    descriptions: {
      ko: "로봇 위치를 저장하고 이름을 부여한 뒤 X/Y/Z/RX/RY/RZ 값을 직접 검토·수정하는 위치 관리 화면입니다.",
      en: "Capture robot positions, name them, and inspect or edit X/Y/Z/RX/RY/RZ values directly.",
      ja: "ロボット位置を保存して名前を付け、X/Y/Z/RX/RY/RZ値を直接確認・編集する位置管理画面です。",
    },
    points: {
      ko: [
        "등록 위치 목록에서 좌표와 회전값을 함께 스캔",
        "현재 로봇 위치를 저장할 때 별도 이름 지정 모달 제공",
        "상세 패널에서 생성자와 생성 시각까지 함께 추적",
      ],
      en: [
        "Scan coordinates and rotation values together in the waypoint list",
        "A naming modal appears when saving the current robot pose",
        "The detail panel tracks creator and creation time with the pose values",
      ],
      ja: [
        "登録位置一覧で座標と回転値を同時に確認",
        "現在ロボット位置を保存する際は名前指定モーダルを表示",
        "詳細パネルで作成者と作成時刻も併せて追跡",
      ],
    },
  },
  history: {
    frames: screenList(
      "60_execution-history_01_history-list.png",
      "60_execution-history_02_history-detail.png",
    ),
    fps: 0.45,
    titles: {
      ko: "작업 이력",
      en: "Execution History",
      ja: "作業履歴",
    },
    descriptions: {
      ko: "실행 기록을 필터링하고 선택한 작업의 상태 이벤트 타임라인을 상세 패널에서 확인하는 이력 추적 화면입니다.",
      en: "Filter execution records and inspect the selected job's status-event timeline in the detail panel.",
      ja: "実行記録を絞り込み、選択した作業の状態イベントタイムラインを詳細パネルで確認する履歴画面です。",
    },
    points: {
      ko: [
        "기간·그룹·로봇·상태·작업명 필터를 조합",
        "성공/실패/진행 중 상태를 테이블에서 빠르게 판별",
        "선택한 실행은 STARTED/RUNNING/FAILED 같은 단계별 이벤트로 추적",
      ],
      en: [
        "Combine date, group, robot, status, and job-name filters",
        "Success, failure, and running states are scannable from the table",
        "Selected runs are traced through step events such as STARTED/RUNNING/FAILED",
      ],
      ja: [
        "期間・グループ・ロボット・状態・作業名フィルタを組み合わせ",
        "成功/失敗/進行中状態をテーブルで素早く判別",
        "選択した実行はSTARTED/RUNNING/FAILEDなど段階別イベントで追跡",
      ],
    },
  },
  gripper: {
    frames: screenList(
      "70_gripper_01_gripper-settings.png",
      "70_gripper_02_add-gripper-modal.png",
    ),
    fps: 0.45,
    titles: {
      ko: "그리퍼 관리",
      en: "Gripper Management",
      ja: "グリッパー管理",
    },
    descriptions: {
      ko: "2FG7 그리퍼의 TCP, payload, CoG 설정을 관리하고 시뮬레이션 그리퍼를 추가하는 관리자 화면입니다.",
      en: "Manage 2FG7 gripper TCP, payload, and CoG settings, and add simulation grippers from the admin console.",
      ja: "2FG7グリッパーのTCP、payload、CoG設定を管理し、シミュレーショングリッパーを追加する管理画面です。",
    },
    points: {
      ko: [
        "온라인 상태와 모델/시리얼을 목록에서 바로 확인",
        "TCP offset, payload, CoG 값을 폼으로 편집하고 저장",
        "시뮬레이션 장비 추가 시 외부 그립과 핑거 방향 옵션까지 지정",
      ],
      en: [
        "Online state, model, and serial are visible directly in the list",
        "TCP offset, payload, and CoG values are edited and saved from a form",
        "Simulation registration includes external-grip and finger-direction options",
      ],
      ja: [
        "オンライン状態とモデル/シリアルを一覧で直接確認",
        "TCP offset、payload、CoG値をフォームで編集・保存",
        "シミュレーション機器追加時に外部グリップとフィンガー方向も指定",
      ],
    },
  },
  alerts: {
    frames: screenList(
      "80_alerts_01_alert-list-detail.png",
      "80_alerts_02_notice-all-site-modal.png",
      "80_alerts_03_notice-group-modal.png",
      "80_alerts_04_notice-personal-modal.png",
      "80_alerts_05_notice-from-alert-modal.png",
    ),
    fps: 0.5,
    titles: {
      ko: "알림과 공지 발송",
      en: "Alerts and Notices",
      ja: "通知とお知らせ送信",
    },
    descriptions: {
      ko: "하드웨어 인증 요청과 로봇 이벤트를 확인하고, 전체 사이트·그룹·개인 대상 공지를 발송하는 알림 운영 화면입니다.",
      en: "Review device-registration requests and robot events, then send notices to the whole site, selected groups, or individual users.",
      ja: "ハードウェア認証要求とロボットイベントを確認し、サイト全体・グループ・個人へお知らせを送信する通知運用画面です。",
    },
    points: {
      ko: [
        "심각도, 유형, 확인 여부 필터로 50건 알림을 페이지 단위 관리",
        "선택 알림의 근거를 기반으로 공지 제목과 내용을 자동 구성",
        "전체 사이트·그룹·개인 대상 발송 범위를 같은 모달에서 전환",
      ],
      en: [
        "Manage paged alerts with severity, type, and acknowledgement filters",
        "Generate notice title and body from the selected source alert",
        "Switch audience scope among whole site, group, and individual in one modal",
      ],
      ja: [
        "重大度、タイプ、確認有無フィルタで50件通知をページ管理",
        "選択通知の根拠からお知らせタイトルと本文を自動構成",
        "サイト全体・グループ・個人の送信範囲を同じモーダルで切替",
      ],
    },
  },
  admin: {
    frames: screenList(
      "90_profile_01_my-info.png",
      "91_site-management_01_site-admin.png",
      "92_hardware-management_01_registered-devices.png",
      "93_session-management_01_session-list.png",
      "93_session-management_02_session-detail.png",
    ),
    fps: 0.5,
    titles: {
      ko: "회원·사이트·보안 관리",
      en: "Member, Site, and Security Admin",
      ja: "会員・サイト・セキュリティ管理",
    },
    descriptions: {
      ko: "내 정보, 사업장 멤버/그룹, 등록 디바이스, 세션 만료까지 관리자 권한으로 운영 보안을 다루는 화면 묶음입니다.",
      en: "Admin screens for profile, site members/groups, registered devices, and session expiry controls.",
      ja: "プロフィール、事業場メンバー/グループ、登録デバイス、セッション失効まで管理者権限で運用セキュリティを扱う画面群です。",
    },
    points: {
      ko: [
        "사업장 멤버 역할, 그룹 배정, 활성 상태를 한 테이블에서 관리",
        "등록 디바이스의 승인/차단/폐기 상태와 heartbeat를 확인",
        "세션 상세에서 권한과 마지막 사용 시각을 확인하고 강제 만료 처리",
      ],
      en: [
        "Manage member roles, group assignment, and active state from one table",
        "Review registered devices by approval/block/revocation state and heartbeat",
        "Inspect session permissions and last-use time, then force-expire when needed",
      ],
      ja: [
        "事業場メンバーの役割、グループ割当、アクティブ状態を一つの表で管理",
        "登録デバイスの承認/ブロック/廃棄状態とheartbeatを確認",
        "セッション詳細で権限と最終使用時刻を確認し、強制失効を実行",
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
    "screens-copy": "새로 정리한 스크린샷을 실제 탭 흐름 기준으로 묶어, 인증부터 실시간 제어와 관리자 보안 화면까지 확인할 수 있습니다.",
    "tab-auth": "인증",
    "tab-dashboard": "대시보드",
    "tab-realtime": "실시간 제어",
    "tab-robots": "로봇 관리",
    "tab-operations": "작업 운영",
    "tab-waypoints": "웨이포인트",
    "tab-history": "작업 이력",
    "tab-gripper": "그리퍼",
    "tab-alerts": "알림",
    "tab-admin": "관리자",
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
    "screens-copy": "The refreshed screenshots are grouped by the actual console tabs, from authentication through real-time control and admin security screens.",
    "tab-auth": "Auth",
    "tab-dashboard": "Dashboard",
    "tab-realtime": "Real-time Control",
    "tab-robots": "Robots",
    "tab-operations": "Recipes",
    "tab-waypoints": "Waypoints",
    "tab-history": "History",
    "tab-gripper": "Gripper",
    "tab-alerts": "Alerts",
    "tab-admin": "Admin",
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
    "screens-copy": "新しく整理したスクリーンショットを実際のタブ導線ごとにまとめ、認証から実時間制御、管理者セキュリティ画面まで確認できます。",
    "tab-auth": "認証",
    "tab-dashboard": "ダッシュボード",
    "tab-realtime": "実時間制御",
    "tab-robots": "ロボット管理",
    "tab-operations": "作業運用",
    "tab-waypoints": "ウェイポイント",
    "tab-history": "作業履歴",
    "tab-gripper": "グリッパー",
    "tab-alerts": "通知",
    "tab-admin": "管理者",
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
  auth: "tab-auth",
  dashboard: "tab-dashboard",
  realtime: "tab-realtime",
  robots: "tab-robots",
  operations: "tab-operations",
  waypoints: "tab-waypoints",
  history: "tab-history",
  gripper: "tab-gripper",
  alerts: "tab-alerts",
  admin: "tab-admin",
};

let currentLang = "ko";
let currentScreen = "auth";
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
  const frames = data.frames || (data.src ? [data.src] : []);
  const shouldPlay = frames.length > 1;
  const image = document.getElementById("screen-image");
  const controls = document.getElementById("screen-player-controls");
  const toggle = document.getElementById("screen-player-toggle");
  stopPlayer();

  playerFrameIdx = 0;
  playerPaused = false;
  if (image && frames.length > 0) {
    image.src = frames[0];
    image.alt = data.titles[currentLang];
  }

  if (shouldPlay) {
    if (controls) controls.hidden = false;
    if (toggle) toggle.textContent = "⏸";
    updatePlayerUi(data);
    startPlayer(data);
  } else {
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
