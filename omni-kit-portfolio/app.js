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
    "hero-summary": "OnRobot Korea와 함께한 연계 프로젝트로, STT를 이용한 협동 로봇팔 제어와 기존 티치펜던트를 대체할 웹 콘솔 구현을 목표로 했습니다. 웹 내부는 REST/WebSocket으로 구성하고, 로봇과 웹 시스템은 MQTT 토픽으로만 소통합니다.",
    "theme-day": "주간",
    "theme-night": "야간",
    "theme-theme": "테마",
    "hero-link-screens": "화면 보기",
    "hero-link-role": "역할 정리",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Vite 6 + TS · URDF 디지털 트윈",
    "snapshot-back": "JDK 21 · JPA · Redis 설계",
    "snapshot-auth": "JWT · WebAuthn · 화이트리스트",
    "snapshot-ros": "MQTT · UR5/2FG7 연동",
    "snapshot-period": "진행 기간",
    "overview-kicker": "Overview",
    "overview-title": "문제 정의",
    "overview-copy": "기존 협동 로봇팔 제어는 티치펜던트와 현장 PC 중심이라 음성 명령이나 웹 기반 운영 흐름으로 확장하기 어렵습니다. Omni-Kit은 STT 명령, 로봇 상태, 작업 흐름을 웹 콘솔로 끌어올려 더 직관적인 운영 환경을 만드는 프로젝트입니다.",
    "value-kicker": "Core Value",
    "value-title": "핵심 구현 포인트",
    "value-copy": "React 콘솔은 STT 음성 패널, URDF 3D 모델, 레시피, 웨이포인트, 세션·장치 관리 화면을 제공하고, Spring Boot는 인증·운영 API와 데이터 모델을 담당합니다. 로봇과 웹 시스템 사이의 모든 송수신은 MQTT 토픽으로만 처리되며, 웹 콘솔이 필요한 범위만 최소 수정으로 맞췄습니다.",
    "highlights-kicker": "Highlights",
    "highlights-title": "핵심 기능",
    "feature-1-title": "티치펜던트 대체 웹 콘솔",
    "feature-1-copy": "협동 로봇팔의 상태 확인, STT 음성 패널, TCP/조인트 제어, 레시피·웨이포인트·작업 이력을 React 관리자 콘솔로 묶어 현장 PC에서 운영할 수 있도록 구현했습니다.",
    "feature-2-title": "웹 파트 설계와 구현",
    "feature-2-copy": "프론트엔드 전체 화면·라우팅·인증 흐름을 담당하고, Spring Boot API, JPA/Redis 기반 도메인, 배포/인프라 구조와 DB 설계를 함께 정리했습니다.",
    "feature-3-title": "WebAuthn 하드웨어 화이트리스트",
    "feature-3-copy": "백엔드 하이라이트로 Yubico WebAuthn 2.8.1 기반 장치 등록·인증·승인 모델을 구현하고, 승인된 하드웨어만 제어 API에 접근하도록 보호했습니다.",
    "feature-4-title": "MQTT 토픽 최소 연동",
    "feature-4-copy": "로봇과 웹 시스템은 MQTT 토픽으로만 소통합니다. 로봇 파트에서 보내는 상태·이벤트 형식에 맞춰 필요한 토픽 매핑과 화면 반영만 최소 수정으로 맞췄습니다.",
    "screens-kicker": "Screen Explorer",
    "screens-title": "화면구성",
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
    "architecture-title": "아키텍처",
    "architecture-lead": "다이어그램의 왼쪽은 제가 담당한 웹/백엔드/인프라 영역이고, 오른쪽은 로봇 파트입니다. 웹 내부는 Nginx, React, Spring Boot, FastAPI, PostgreSQL/Redis로 구성되며, 로봇 시스템과는 Mosquitto MQTT 토픽으로만 상태와 명령을 주고받습니다.",
    "architecture-web-title": "웹 · 백엔드 · 인프라 영역",
    "architecture-web-copy": "사용자는 Nginx를 통해 React 콘솔에 접근하고, 콘솔은 Spring Boot API/WS와 통신합니다. 백엔드는 인증, 세션, 운영 도메인, DB 모델을 담당하며 PostgreSQL/PGVector와 Redis를 사용합니다. Jenkins, Docker Compose, Prometheus/Grafana는 배포와 운영 관찰 흐름으로 연결됩니다.",
    "architecture-boundary-title": "로봇과 웹의 유일한 경계",
    "architecture-boundary-copy": "로봇과 웹 시스템은 REST나 WebSocket으로 직접 연결되지 않고 MQTT 토픽으로만 소통합니다. 웹 파트에서는 로봇 파트가 제공한 토픽과 payload 형식에 맞춰 상태 수신, 제어 명령 발행, STT 결과 전달에 필요한 최소 범위만 연동했습니다.",
    "architecture-robot-title": "로봇 파트와 장치 흐름",
    "architecture-robot-copy": "오른쪽 로봇 시스템은 마이크, 카메라, 스피커, STT/LLM/TTS, motion/vision layer, UR5와 OnRobot 2FG7 그리퍼를 포함합니다. 이 영역은 로봇 파트가 담당했고, 웹에서는 해당 시스템과 맞닿는 MQTT 토픽과 STT 컨테이너 호출 지점을 맞췄습니다.",
    "architecture-caption": "핵심은 웹 시스템과 로봇 시스템을 MQTT 경계로 분리한 점입니다. 웹 파트는 사용자 화면, 인증/인가, 데이터 저장, 배포 구조, MQTT 토픽 연동을 담당하고, 로봇 제어와 센서 처리 로직은 로봇 파트에 둔 구조입니다.",
    "stack-kicker": "Tech Stack",
    "stack-title": "사용기술",
    "stack-copy": "프로젝트에 적용한 주요 기술과 라이브러리를 영역별로 정리했습니다. 핵심 기술은 강조 색상으로 구분했고, 기술명을 누르면 아래에서 사용 이유를 확인할 수 있습니다.",
    "stack-summary-front": "Frontend / Console UI",
    "stack-summary-back": "Backend / Auth / DB",
    "stack-summary-robot": "Robot Communication / STT / Infra",
    "stack-reason-react-copy": "관리자 콘솔의 대시보드, 실시간 제어, 장치/세션/알림 관리 화면을 컴포넌트 단위로 나누고 상태 변화가 많은 운영 UI를 일관되게 관리하기 위해 사용했습니다.",
    "stack-reason-vite-ts-copy": "프론트 전체를 담당했기 때문에 빠른 개발 서버와 타입 안정성이 중요했습니다. Vite로 개발 피드백을 빠르게 가져가고 TypeScript로 API 응답과 화면 상태를 명확히 다뤘습니다.",
    "stack-reason-router-query-copy": "로그인, 승인 대기, 관리자 전용 화면을 라우트 가드로 분리하고, 서버 상태는 TanStack Query로 캐싱·갱신해 화면별 API 호출 흐름을 안정적으로 관리했습니다.",
    "stack-reason-three-copy": "티치펜던트를 대체할 웹 콘솔에서 로봇 자세를 시각적으로 확인할 수 있도록 3D 뷰어를 구성하는 데 사용했습니다. 로봇 제어 구현이 아니라 웹 화면 표현 영역으로 적용했습니다.",
    "stack-reason-webauthn-browser-copy": "브라우저에서 패스키 등록과 인증 어설션을 처리하고, 백엔드 WebAuthn 검증 흐름과 연결해 승인된 하드웨어만 위험 기능에 접근하도록 만들기 위해 사용했습니다.",
    "stack-reason-form-ui-copy": "로봇, 레시피, 웨이포인트, 장치 승인 같은 입력 화면이 많아 폼 검증과 에러 표시를 일관되게 처리하고, 관리자 콘솔의 버튼과 상태 표현을 빠르게 구성하기 위해 사용했습니다.",
    "stack-reason-spring-copy": "웹 백엔드의 인증, 운영 API, 세션 관리, 관리자 도메인을 하나의 구조로 묶기 위해 사용했습니다. 컨트롤러, 서비스, 인터셉터 계층을 분리해 웹 파트의 책임을 명확히 했습니다.",
    "stack-reason-yubico-copy": "백엔드 하이라이트인 하드웨어 화이트리스트 구현에 사용했습니다. 등록 옵션 생성, attestation/assertion 검증, 승인된 credential 기반 접근 제어를 구성했습니다.",
    "stack-reason-jwt-copy": "로그인 이후 access/refresh token 흐름과 단일 세션 정책을 처리하고, 강제 만료나 takeover 상황에서 토큰 무효화를 명확히 반영하기 위해 사용했습니다.",
    "stack-reason-jpa-copy": "회원, 사이트, 장치, 세션, 알림, MFA 도메인의 관계를 DB 모델로 정리하고 운영 화면에서 필요한 조회/상태 전환을 안정적으로 처리하기 위해 사용했습니다.",
    "stack-reason-redis-copy": "WebAuthn challenge, 세션 보조 상태, recovery cooldown, access token denylist처럼 만료 시간이 중요한 데이터를 관리하기 위해 사용했습니다.",
    "stack-reason-mfa-copy": "관리자 계정 보호를 강화하기 위해 TOTP MFA 설정, 확인, 복구 코드 갱신 흐름을 구현하는 데 사용했습니다.",
    "stack-reason-mqtt-topics-copy": "로봇과 웹 시스템은 MQTT 토픽으로만 소통합니다. 웹 파트에서는 로봇 파트가 제공한 토픽과 payload 형식에 맞춰 상태 수신과 명령 발행에 필요한 범위만 연결했습니다.",
    "stack-reason-spring-mqtt-copy": "Spring Boot 백엔드에서 MQTT publish/subscribe 흐름을 웹 API와 연결하기 위해 사용했습니다. 웹 내부 통신과 로봇 통신 경계를 분리하는 역할로 두었습니다.",
    "stack-reason-mosquitto-copy": "로봇과 웹 백엔드 사이의 MQTT 브로커로 사용했습니다. 웹에서는 Mosquitto를 기준으로 필요한 토픽 연결과 운영 환경 설정만 맞췄습니다.",
    "stack-reason-stt-copy": "STT 기반 로봇팔 제어 목표를 위해 음성 인식 컨테이너와 웹 콘솔의 호출 지점을 맞추는 데 사용했습니다. 웹 파트에서는 STT 결과를 제어 흐름에 연결하는 화면과 API 연동을 담당했습니다.",
    "stack-reason-docker-copy": "웹, 백엔드, MQTT 브로커, STT 컨테이너를 같은 실행 환경에서 확인할 수 있도록 서비스 구성을 정리하는 데 사용했습니다.",
    "stack-reason-deploy-copy": "웹/백엔드 배포 흐름과 무중단 전환 구조를 정리하기 위해 사용했습니다. 포트폴리오에서는 인프라 설계와 운영 흐름을 담당한 범위로 설명했습니다.",
    "role-kicker": "My Contribution",
    "role-title": "역할 정리",
    "role-copy": "웹 파트를 담당하며 프론트엔드 전체 구현, 백엔드 API와 인증 도메인, 인프라 구조, DB 설계를 주력으로 맡았습니다. 백엔드 하이라이트는 WebAuthn 기반 하드웨어 화이트리스트이고, 로봇과 웹의 통신은 MQTT 토픽만 사용하도록 최소 연동으로 맞췄습니다.",
    "role-1-title": "프론트엔드 전체 구현",
    "role-1-copy": "로그인, 승인 대기, 대시보드, 실시간 제어, 로봇/레시피/웨이포인트/이력, 장치·세션·알림 관리자 화면과 라우팅/인증 가드를 전반적으로 구현했습니다.",
    "role-2-title": "WebAuthn 하드웨어 화이트리스트",
    "role-2-copy": "Yubico RelyingParty 기반 등록 옵션·검증·어설션을 구성하고, 승인된 credential과 장치 상태를 기준으로 위험 제어 API를 막는 AuthSessionGuard를 구현했습니다.",
    "role-3-title": "백엔드 · DB 설계",
    "role-3-copy": "회원, 사이트, 장치, 세션, 알림, MFA 도메인의 API와 JPA 모델을 설계하고, Redis 기반 challenge·토큰 무효화 흐름을 정리했습니다.",
    "role-4-title": "인프라 · MQTT 연동 범위 정리",
    "role-4-copy": "웹/백엔드 배포 구조와 환경 변수를 정리하고, 로봇과 웹 사이의 통신은 MQTT 토픽만 사용하도록 웹 콘솔 표시와 제어 요청 전달에 필요한 최소 범위로 맞췄습니다.",
    "trouble-kicker": "Troubleshooting",
    "trouble-title": "트러블슈팅",
    "trouble-1-title": "takeover 기반 단일 세션 정책 보정",
    "trouble-1-copy": "부분 블루/그린 배포 과정에서 기존 인스턴스의 세션 만료가 즉시 반영되지 않아 이전 탭이 계속 살아 있는 문제가 있었습니다. takeover 로그인 시 기존 세션을 명시적으로 무효화하고, /auth/me 재검증으로 만료 상태를 감지하도록 수정했습니다.",
    "trouble-2-title": "Linux WebAuthn 개발 우회",
    "trouble-2-copy": "Linux 데스크톱 환경에서는 OS platform authenticator가 없어 WebAuthn 흐름이 동작하지 않았습니다. 실서비스에서는 Linux 접근을 차단하는 방향으로 두고, 개발 과정에서는 User-Agent 기반 우회 경로를 두어 로컬 검증이 가능하도록 정리했습니다.",
    "trouble-3-title": "소프트 삭제 기기 재승인 흐름",
    "trouble-3-copy": "승인된 기기를 soft delete로 폐기하면 같은 기기를 다시 등록해도 이전 삭제 상태 때문에 재활성화되지 않는 문제가 있었습니다. 기기 폐기 시 승인 대기 상태로 되돌려 관리자가 다시 검토하고 승인할 수 있는 흐름으로 수정했습니다.",
  },
  en: {
    eyebrow: "Cobot Operations Console",
    "hero-summary": "A collaboration project with OnRobot Korea, built to control a collaborative robot arm through STT and replace the traditional teach pendant with a web console. REST/WebSocket is used inside the web system, while the robot and web system communicate only through MQTT topics.",
    "theme-day": "Day",
    "theme-night": "Night",
    "theme-theme": "Theme",
    "hero-link-screens": "See Screens",
    "hero-link-role": "Role Summary",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Vite 6 + TS · URDF digital twin",
    "snapshot-back": "JDK 21 · JPA · Redis design",
    "snapshot-auth": "JWT · WebAuthn · whitelist",
    "snapshot-ros": "MQTT · UR5/2FG7 integration",
    "snapshot-period": "Project period",
    "overview-kicker": "Overview",
    "overview-title": "The Problem",
    "overview-copy": "Traditional cobot-arm control is centered on teach pendants and shop-floor PCs, which makes it hard to extend into voice commands or web-based operations. Omni-Kit brings STT commands, robot state, and job flow into a web console for a more intuitive operating environment.",
    "value-kicker": "Core Value",
    "value-title": "What we built",
    "value-copy": "The React console provides the STT voice panel, URDF 3D model, recipes, waypoints, sessions, and device administration. Spring Boot owns authentication, operations APIs, and the data model. All communication between the robot and web system goes through MQTT topics, with only the web-console scope adjusted.",
    "highlights-kicker": "Highlights",
    "highlights-title": "Key Features",
    "feature-1-title": "Teach-pendant Replacement Web Console",
    "feature-1-copy": "Implemented a React admin console that brings robot-arm status, the STT voice panel, TCP/joint control, recipes, waypoints, and execution history into one web workflow for shop-floor PCs.",
    "feature-2-title": "Web-part Design and Implementation",
    "feature-2-copy": "Owned the overall frontend screens, routing, and auth flow, while also shaping Spring Boot APIs, JPA/Redis-backed domains, deployment/infrastructure structure, and DB design.",
    "feature-3-title": "WebAuthn Hardware Whitelist",
    "feature-3-copy": "As the backend highlight, implemented device registration, authentication, and approval with Yubico WebAuthn 2.8.1 so only approved hardware can access risky control APIs.",
    "feature-4-title": "Minimal MQTT Topic Integration",
    "feature-4-copy": "The robot and web system communicate only through MQTT topics. I followed the robot team's status and event message format and kept the work scoped to the required topic mapping and UI reflection.",
    "screens-kicker": "Screen Explorer",
    "screens-title": "Screen Composition",
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
    "architecture-title": "Architecture",
    "architecture-lead": "The left side of the diagram is the web/backend/infrastructure area I owned, and the right side is the robot area. The web system is composed of Nginx, React, Spring Boot, FastAPI, PostgreSQL/Redis, and it exchanges robot state and commands only through Mosquitto MQTT topics.",
    "architecture-web-title": "Web, Backend, and Infrastructure",
    "architecture-web-copy": "Users enter through Nginx into the React console, and the console communicates with Spring Boot API/WS. The backend owns authentication, sessions, operations domains, and DB models using PostgreSQL/PGVector and Redis. Jenkins, Docker Compose, and Prometheus/Grafana support deployment and operational monitoring.",
    "architecture-boundary-title": "Only Boundary Between Robot and Web",
    "architecture-boundary-copy": "The robot and web system do not communicate directly through REST or WebSocket; they communicate only through MQTT topics. On the web side, I connected only the required state subscriptions, command publishing, and STT-result delivery around the topic and payload format provided by the robot team.",
    "architecture-robot-title": "Robot-side Device Flow",
    "architecture-robot-copy": "The robot system includes microphone, camera, speaker, STT/LLM/TTS, motion/vision layers, UR5, and the OnRobot 2FG7 gripper. This area was owned by the robot team, while the web side aligned the MQTT topics and STT container call points that touch this system.",
    "architecture-caption": "The key point is the MQTT boundary between the web system and robot system. The web part owns the user-facing console, authentication/authorization, data storage, deployment structure, and MQTT-topic integration, while robot control and sensor-processing logic stay on the robot side.",
    "stack-kicker": "Tech Stack",
    "stack-title": "Tech Stack",
    "stack-copy": "The main technologies and libraries are grouped by area. Core items are highlighted, and clicking each technology shows why it was used.",
    "stack-summary-front": "Frontend / Console UI",
    "stack-summary-back": "Backend / Auth / DB",
    "stack-summary-robot": "Robot Communication / STT / Infra",
    "stack-reason-react-copy": "Used to split the admin console into components across the dashboard, real-time control, device/session/alert administration, and other state-heavy operation screens.",
    "stack-reason-vite-ts-copy": "Because I owned the overall frontend, fast development feedback and type safety mattered. Vite kept iteration fast, while TypeScript made API responses and UI state explicit.",
    "stack-reason-router-query-copy": "Used route guards to separate login, pending approval, and admin-only screens, while TanStack Query handled server-state caching and refresh flows per screen.",
    "stack-reason-three-copy": "Used to render a visual robot posture in the web console that replaces the teach pendant. This was applied as a web visualization layer, not as robot-control implementation.",
    "stack-reason-webauthn-browser-copy": "Used to handle passkey registration and authentication assertions in the browser, then connect them to backend WebAuthn verification so only approved hardware can access risky features.",
    "stack-reason-form-ui-copy": "Used to keep validation and error display consistent across robot, recipe, waypoint, and device-approval forms, and to build admin-console controls quickly.",
    "stack-reason-spring-copy": "Used to organize authentication, operations APIs, session handling, and admin domains in one backend structure, with controller, service, and interceptor responsibilities separated.",
    "stack-reason-yubico-copy": "Used for the backend highlight: the hardware whitelist. It covers registration options, attestation/assertion verification, and approved-credential-based access control.",
    "stack-reason-jwt-copy": "Used to handle access/refresh token flows and the single-session policy, including clear invalidation on force expiry or takeover.",
    "stack-reason-jpa-copy": "Used to model members, sites, devices, sessions, alerts, and MFA relationships, and to support the queries and state transitions needed by the operation screens.",
    "stack-reason-redis-copy": "Used for data with explicit expiry, such as WebAuthn challenges, session support state, recovery cooldowns, and access-token denylists.",
    "stack-reason-mfa-copy": "Used to implement TOTP MFA setup, verification, and recovery-code rotation for stronger admin-account protection.",
    "stack-reason-mqtt-topics-copy": "The robot and web system communicate only through MQTT topics. On the web side, I connected only the state subscription and command publishing needed by the console, following the topic and payload format provided by the robot team.",
    "stack-reason-spring-mqtt-copy": "Used to connect MQTT publish/subscribe flows in the Spring Boot backend to the web APIs, keeping web-internal communication and robot communication clearly separated.",
    "stack-reason-mosquitto-copy": "Used as the MQTT broker between the robot side and web backend. The web work aligned the required topic connections and runtime settings around Mosquitto.",
    "stack-reason-stt-copy": "Used to align the speech-recognition container with the web-console call points for STT-based robot-arm control. The web part handled the screen and API integration for using STT results in the control flow.",
    "stack-reason-docker-copy": "Used to organize the web, backend, MQTT broker, and STT container into a common execution environment for local and deployment checks.",
    "stack-reason-deploy-copy": "Used to organize the web/backend deployment flow and blue-green switching structure. In this portfolio, it is described as part of my infrastructure-design and operation-flow work.",
    "role-kicker": "My Contribution",
    "role-title": "Role Summary",
    "role-copy": "Owned the web part, with the main focus on overall frontend implementation, backend APIs and authentication domains, infrastructure structure, and DB design. The backend highlight was the WebAuthn-based hardware whitelist, and robot-web communication was aligned as a minimal MQTT-topic-only integration.",
    "role-1-title": "Overall Frontend Implementation",
    "role-1-copy": "Implemented the login, pending approval, dashboard, real-time control, robot/recipe/waypoint/history, device/session/alert admin screens, plus routing and authentication guards.",
    "role-2-title": "WebAuthn Hardware Whitelist",
    "role-2-copy": "Built Yubico RelyingParty registration options, verification, and assertion, then implemented AuthSessionGuard to block risky control APIs based on approved credentials and device state.",
    "role-3-title": "Backend and DB Design",
    "role-3-copy": "Designed APIs and JPA models for members, sites, devices, sessions, alerts, and MFA, plus Redis-backed challenge and token invalidation flows.",
    "role-4-title": "Infrastructure and MQTT Scope",
    "role-4-copy": "Organized the web/backend deployment structure and environment variables, and kept robot-web communication limited to the MQTT topics needed for UI display and control-request delivery.",
    "trouble-kicker": "Troubleshooting",
    "trouble-title": "Troubleshooting",
    "trouble-1-title": "Single-session policy through takeover",
    "trouble-1-copy": "During partial blue/green deployment, session expiry did not always propagate immediately from the old instance, leaving previous tabs alive. I explicitly invalidated the prior session during takeover login and added /auth/me revalidation so the stale state is detected.",
    "trouble-2-title": "Linux WebAuthn development bypass",
    "trouble-2-copy": "Linux desktop environments did not provide an OS platform authenticator, so the WebAuthn flow could not run. Production policy blocks Linux access, but during development I added a User-Agent bypass path so local verification could continue.",
    "trouble-3-title": "Soft-deleted device reapproval flow",
    "trouble-3-copy": "When an approved device was retired through soft delete, registering the same device again could not reactivate it because the deleted state remained. I changed device retirement to return the device to pending approval so admins can review and approve it again.",
  },
  ja: {
    eyebrow: "Cobot Operations Console",
    "hero-summary": "OnRobot Koreaとの連携プロジェクトとして、STTで協働ロボットアームを制御し、従来のティーチペンダントをWebコンソールで代替することを目標にしました。Web内部はREST/WebSocketで構成し、ロボットとWebシステムはMQTTトピックだけで通信します。",
    "theme-day": "昼間",
    "theme-night": "夜間",
    "theme-theme": "テーマ",
    "hero-link-screens": "画面を見る",
    "hero-link-role": "役割整理",
    "snapshot-label": "Project Snapshot",
    "snapshot-front": "Vite 6 + TS · URDFデジタルツイン",
    "snapshot-back": "JDK 21 · JPA · Redis設計",
    "snapshot-auth": "JWT · WebAuthn · ホワイトリスト",
    "snapshot-ros": "MQTT · UR5/2FG7連携",
    "snapshot-period": "実施期間",
    "overview-kicker": "Overview",
    "overview-title": "問題定義",
    "overview-copy": "従来の協働ロボットアーム制御はティーチペンダントと現場PC中心で、音声命令やWebベースの運用へ拡張しにくい課題があります。Omni-KitはSTT命令、ロボット状態、作業フローをWebコンソールに集約し、より直感的な運用環境を作るプロジェクトです。",
    "value-kicker": "Core Value",
    "value-title": "主要な実装ポイント",
    "value-copy": "ReactコンソールはSTT音声パネル、URDF 3Dモデル、レシピ、ウェイポイント、セッション、デバイス管理を提供します。Spring Bootは認証・運用APIとデータモデルを担い、ロボットとWebシステム間の全送受信はMQTTトピックだけで処理しました。",
    "highlights-kicker": "Highlights",
    "highlights-title": "主な機能",
    "feature-1-title": "ティーチペンダント代替Webコンソール",
    "feature-1-copy": "協働ロボットアームの状態確認、STT音声パネル、TCP/ジョイント制御、レシピ・ウェイポイント・作業履歴をReact管理コンソールにまとめ、現場PCで運用できるよう実装しました。",
    "feature-2-title": "Webパート設計と実装",
    "feature-2-copy": "フロントエンド全体の画面、ルーティング、認証フローを担当し、Spring Boot API、JPA/Redisベースのドメイン、配備/インフラ構造、DB設計も整理しました。",
    "feature-3-title": "WebAuthnハードウェアホワイトリスト",
    "feature-3-copy": "バックエンドのハイライトとして、Yubico WebAuthn 2.8.1ベースのデバイス登録・認証・承認モデルを実装し、承認済みハードウェアだけが制御APIへアクセスできるよう保護しました。",
    "feature-4-title": "MQTTトピック最小連携",
    "feature-4-copy": "ロボットとWebシステムはMQTTトピックだけで通信します。ロボットパートが送る状態・イベント形式に合わせ、必要なトピックマッピングと画面反映だけを最小修正で合わせました。",
    "screens-kicker": "Screen Explorer",
    "screens-title": "画面構成",
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
    "architecture-title": "アーキテクチャ",
    "architecture-lead": "図の左側は私が担当したWeb/バックエンド/インフラ領域で、右側はロボットパートです。Web内部はNginx、React、Spring Boot、FastAPI、PostgreSQL/Redisで構成され、ロボットシステムとはMosquitto MQTTトピックだけで状態と命令をやり取りします。",
    "architecture-web-title": "Web・バックエンド・インフラ領域",
    "architecture-web-copy": "ユーザーはNginx経由でReactコンソールに入り、コンソールはSpring Boot API/WSと通信します。バックエンドは認証、セッション、運用ドメイン、DBモデルを担当し、PostgreSQL/PGVectorとRedisを使用します。Jenkins、Docker Compose、Prometheus/Grafanaは配備と運用監視の流れにつながります。",
    "architecture-boundary-title": "ロボットとWebの唯一の境界",
    "architecture-boundary-copy": "ロボットとWebシステムはRESTやWebSocketで直接接続せず、MQTTトピックだけで通信します。Webパートではロボットパートが提供したトピックとpayload形式に合わせ、状態受信、制御命令発行、STT結果伝達に必要な最小範囲だけ連携しました。",
    "architecture-robot-title": "ロボットパートとデバイスフロー",
    "architecture-robot-copy": "右側のロボットシステムにはマイク、カメラ、スピーカー、STT/LLM/TTS、motion/vision layer、UR5、OnRobot 2FG7グリッパーが含まれます。この領域はロボットパートが担当し、Webではそのシステムと接するMQTTトピックとSTTコンテナ呼び出し点を合わせました。",
    "architecture-caption": "核心はWebシステムとロボットシステムをMQTT境界で分離した点です。Webパートはユーザー画面、認証/認可、データ保存、配備構造、MQTTトピック連携を担当し、ロボット制御とセンサー処理ロジックはロボットパート側に置いた構造です。",
    "stack-kicker": "Tech Stack",
    "stack-title": "使用技術",
    "stack-copy": "プロジェクトに適用した主要技術とライブラリを領域別に整理しました。中核技術は強調し、技術名を押すと使用理由を確認できます。",
    "stack-summary-front": "Frontend / Console UI",
    "stack-summary-back": "Backend / Auth / DB",
    "stack-summary-robot": "Robot Communication / STT / Infra",
    "stack-reason-react-copy": "管理者コンソールのダッシュボード、実時間制御、デバイス/セッション/通知管理画面をコンポーネント単位で分け、状態変化の多い運用UIを一貫して管理するために使用しました。",
    "stack-reason-vite-ts-copy": "フロント全体を担当したため、速い開発フィードバックと型安全性が重要でした。Viteで反復を速くし、TypeScriptでAPI応答と画面状態を明確に扱いました。",
    "stack-reason-router-query-copy": "ログイン、承認待ち、管理者専用画面をルートガードで分離し、サーバー状態はTanStack Queryでキャッシュ/更新して画面ごとのAPI呼び出しを安定させました。",
    "stack-reason-three-copy": "ティーチペンダントを代替するWebコンソールでロボット姿勢を視覚的に確認できるよう、3Dビューア構成に使用しました。ロボット制御実装ではなくWeb画面表現の領域として適用しました。",
    "stack-reason-webauthn-browser-copy": "ブラウザでパスキー登録と認証アサーションを処理し、バックエンドWebAuthn検証と接続して、承認済みハードウェアだけが危険機能にアクセスできるようにするため使用しました。",
    "stack-reason-form-ui-copy": "ロボット、レシピ、ウェイポイント、デバイス承認など入力画面が多いため、フォーム検証とエラー表示を一貫して処理し、管理者コンソールの操作部品を素早く構成するため使用しました。",
    "stack-reason-spring-copy": "Webバックエンドの認証、運用API、セッション管理、管理者ドメインを一つの構造にまとめるため使用しました。Controller、Service、Interceptorの責任を分離しました。",
    "stack-reason-yubico-copy": "バックエンドのハイライトであるハードウェアホワイトリスト実装に使用しました。登録オプション生成、attestation/assertion検証、承認済みcredentialベースのアクセス制御を構成しました。",
    "stack-reason-jwt-copy": "ログイン後のaccess/refresh tokenフローと単一セッションポリシーを処理し、強制失効やtakeover時のトークン無効化を明確に反映するため使用しました。",
    "stack-reason-jpa-copy": "会員、サイト、デバイス、セッション、通知、MFAドメインの関係をDBモデルとして整理し、運用画面で必要な照会と状態変更を安定して処理するため使用しました。",
    "stack-reason-redis-copy": "WebAuthn challenge、セッション補助状態、recovery cooldown、access token denylistのように有効期限が重要なデータを管理するため使用しました。",
    "stack-reason-mfa-copy": "管理者アカウント保護を強化するため、TOTP MFA設定、確認、復旧コード更新フローの実装に使用しました。",
    "stack-reason-mqtt-topics-copy": "ロボットとWebシステムはMQTTトピックだけで通信します。Webパートではロボットパートが提供したトピックとpayload形式に合わせ、状態受信と命令発行に必要な範囲だけ接続しました。",
    "stack-reason-spring-mqtt-copy": "Spring BootバックエンドでMQTT publish/subscribeフローをWeb APIに接続するため使用しました。Web内部通信とロボット通信の境界を分離する役割です。",
    "stack-reason-mosquitto-copy": "ロボット側とWebバックエンドの間のMQTTブローカーとして使用しました。WebではMosquittoを基準に必要なトピック接続と運用環境設定を合わせました。",
    "stack-reason-stt-copy": "STTベースのロボットアーム制御目標のため、音声認識コンテナとWebコンソールの呼び出し点を合わせる目的で使用しました。WebパートではSTT結果を制御フローへつなぐ画面とAPI連携を担当しました。",
    "stack-reason-docker-copy": "Web、バックエンド、MQTTブローカー、STTコンテナを同じ実行環境で確認できるようサービス構成を整理するため使用しました。",
    "stack-reason-deploy-copy": "Web/バックエンドの配備フローとBlue/Green切り替え構造を整理するため使用しました。ポートフォリオではインフラ設計と運用フローを担当した範囲として説明しています。",
    "role-kicker": "My Contribution",
    "role-title": "役割整理",
    "role-copy": "Webパートを担当し、フロントエンド全体実装、バックエンドAPIと認証ドメイン、インフラ構造、DB設計を主に担当しました。バックエンドのハイライトはWebAuthnベースのハードウェアホワイトリストで、ロボットとWebの通信はMQTTトピックだけを使う最小連携として進めました。",
    "role-1-title": "フロントエンド全体実装",
    "role-1-copy": "ログイン、承認待ち、ダッシュボード、実時間制御、ロボット/レシピ/ウェイポイント/履歴、デバイス・セッション・通知管理画面とルーティング/認証ガードを全般的に実装しました。",
    "role-2-title": "WebAuthnハードウェアホワイトリスト",
    "role-2-copy": "Yubico RelyingPartyベースの登録オプション、検証、アサーションを構成し、承認済みcredentialとデバイス状態を基準に危険な制御APIを防ぐAuthSessionGuardを実装しました。",
    "role-3-title": "バックエンド・DB設計",
    "role-3-copy": "会員、サイト、デバイス、セッション、通知、MFAドメインのAPIとJPAモデルを設計し、Redisベースのchallengeとトークン無効化フローを整理しました。",
    "role-4-title": "インフラ・MQTT連携範囲整理",
    "role-4-copy": "Web/バックエンド配備構造と環境変数を整理し、ロボットとWeb間の通信はMQTTトピックだけを使う形で、Webコンソール表示と制御要求伝達に必要な最小範囲を合わせました。",
    "trouble-kicker": "Troubleshooting",
    "trouble-title": "トラブルシューティング",
    "trouble-1-title": "takeoverによる単一セッションポリシー補正",
    "trouble-1-copy": "部分的なBlue/Green配備の過程で旧インスタンスのセッション失効が即時反映されず、既存タブが残る問題がありました。takeoverログイン時に既存セッションを明示的に無効化し、/auth/me再検証で失効状態を検知するよう修正しました。",
    "trouble-2-title": "Linux WebAuthn開発用バイパス",
    "trouble-2-copy": "Linuxデスクトップ環境ではOS platform authenticatorがなく、WebAuthnフローが動作しませんでした。実サービスではLinuxアクセスを遮断する方針とし、開発時のみUser-Agentベースのバイパス経路を置いてローカル検証を可能にしました。",
    "trouble-3-title": "soft delete端末の再承認フロー",
    "trouble-3-copy": "承認済み端末をsoft deleteで廃棄すると、同じ端末を再登録しても削除状態が残って再有効化できない問題がありました。端末廃棄時は承認待ち状態へ戻し、管理者が再確認して承認できる流れに修正しました。",
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
let currentCategory = "auth";

const SCREEN_CATEGORY_ORDER = Object.keys(TAB_KEY_BY_SCREEN);
const SCREEN_FRAMES = SCREEN_CATEGORY_ORDER.flatMap((category) => {
  const data = SCREEN_DATA[category];
  const frames = data?.frames || [];
  return frames.map((src, index) => ({
    key: `${category}-${index + 1}`,
    category,
    data,
    src,
    index,
    total: frames.length,
  }));
});

let currentScreenKey = SCREEN_FRAMES[0]?.key || "";

function getCategoryLabel(category) {
  const tabKey = TAB_KEY_BY_SCREEN[category];
  return TRANSLATIONS[currentLang]?.[tabKey] || SCREEN_DATA[category]?.titles?.[currentLang] || category;
}

function getScreenTitle(screen) {
  const title = screen.data.titles[currentLang] || screen.data.titles.ko;
  if (screen.total <= 1) return title;
  return `${title} ${String(screen.index + 1).padStart(2, "0")}`;
}

function getVisibleScreens() {
  return SCREEN_FRAMES.filter((screen) => screen.category === currentCategory);
}

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
  updateThemeToggle(document.body.dataset.theme || "day");
  renderFilters();
  renderList();
  renderScreen();
}

const themeStorageKey = "portfolio-theme";
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
  if (persist) {
    localStorage.setItem(themeStorageKey, nextTheme);
  }
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

  const data = screen.data;
  const titleText = getScreenTitle(screen);
  const image = document.getElementById("screen-image");
  if (image) {
    image.src = screen.src;
    image.alt = `Omni-Kit ${titleText}`;
  }

  const desc = document.getElementById("screen-description");
  if (desc) desc.textContent = data.descriptions[currentLang] || data.descriptions.ko;
  const points = document.getElementById("screen-points");
  if (points) {
    points.replaceChildren();
    (data.points[currentLang] || data.points.ko).forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      points.appendChild(li);
    });
  }
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
      if (targetPanel) {
        targetPanel.classList.add("is-active");
      }
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
          if (activeButton) {
            activateReason(activeButton);
          } else {
            activateGroup(group);
          }
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
