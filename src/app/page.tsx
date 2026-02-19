"use client";

import {
  useState,
  useEffect,
  useRef,
  type FormEvent,
  type ReactNode,
} from "react";

/* ────────────────────────────────────────────
 * Types
 * ──────────────────────────────────────────── */

interface PilotFormData {
  email: string;
  org: string;
  role: string;
}

interface ProblemCard {
  icon: string;
  iconColor: string;
  title: string;
  desc: string;
  urgent: boolean;
}

interface BeforeAfterCard {
  title: string;
  before: string;
  after: string;
}

interface HeroStat {
  icon: string;
  label: string;
}

interface FeatureItem {
  text: string;
  ready: boolean;
}

interface TrustItem {
  text: string;
}

/* ────────────────────────────────────────────
 * SVG Icon System (replaces emojis)
 * ──────────────────────────────────────────── */

const ICON_PATHS: Record<string, string> = {
  chart:
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  search:
    "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  clipboard:
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9h6m-6 4h6",
  clock:
    "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  globe:
    "M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9z",
  alert:
    "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  shield:
    "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  users:
    "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  lock: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  checkCircle:
    "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  sparkles:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
  document:
    "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
};

const Icon = ({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={ICON_PATHS[name] ?? ""}
    />
  </svg>
);

const BADGE_STYLES: Record<string, string> = {
  indigo: "bg-indigo-100 text-indigo-600",
  amber: "bg-amber-100 text-amber-600",
  red: "bg-red-100 text-red-600",
  emerald: "bg-emerald-100 text-emerald-600",
  slate: "bg-slate-100 text-slate-600",
};

const IconBadge = ({
  name,
  color = "indigo",
  size = "md",
}: {
  name: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = { sm: "w-8 h-8 rounded-lg", md: "w-10 h-10 rounded-xl", lg: "w-12 h-12 rounded-xl" };
  const iconSizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };

  return (
    <div
      className={`${sizeClasses[size]} ${BADGE_STYLES[color] ?? BADGE_STYLES.indigo} flex items-center justify-center flex-shrink-0`}
    >
      <Icon name={name} className={iconSizes[size]} />
    </div>
  );
};

/* ────────────────────────────────────────────
 * Data
 * ──────────────────────────────────────────── */

const HERO_STATS: HeroStat[] = [
  { icon: "chart", label: "유학생 현황 통합 조회" },
  { icon: "search", label: "IEQAS 이탈률 실시간 추적" },
  { icon: "clipboard", label: "FIMS 보고 간소화" },
];

const PROBLEM_CARDS: ProblemCard[] = [
  {
    icon: "clipboard",
    iconColor: "slate",
    title: "FIMS 정기보고마다 며칠이 사라집니다",
    desc: "매 분기 엑셀에서 FIMS로 수동 입력. 입력 오류가 나면 처음부터 다시 확인해야 합니다.",
    urgent: false,
  },
  {
    icon: "clock",
    iconColor: "amber",
    title: "변동신고 15일 기한, 놓치면 과태료입니다",
    desc: "자퇴·제적·미등록 변동을 실시간으로 파악할 수 없어 누락이 발생합니다.",
    urgent: false,
  },
  {
    icon: "globe",
    iconColor: "indigo",
    title: "같은 질문을 하루에도 수십 번 반복합니다",
    desc: "비자 연장 절차, 필요 서류 안내. 언어 장벽에 학기초 업무 폭증.",
    urgent: false,
  },
  {
    icon: "alert",
    iconColor: "red",
    title: "44개 대학이 비자 발급 제한을 받았습니다",
    desc: "IEQAS 불법체류율 2% 초과 시 인증 위험. 실시간 모니터링 수단이 없습니다.",
    urgent: true,
  },
];

const DASHBOARD_FEATURES: FeatureItem[] = [
  { text: "신호등 시스템: 초록(정상) → 노랑(주의) → 빨강(위험)", ready: true },
  { text: "IEQAS 불법체류율 실시간 게이지", ready: true },
  { text: "비자 만료 캘린더 + 자동 알림", ready: true },
  { text: "엑셀 대량 업로드 + AI 컬럼 자동 매핑", ready: true },
];

const FIMS_FEATURES_READY: FeatureItem[] = [
  { text: "엑셀/CSV 대량 업로드 + AI 컬럼 매핑", ready: true },
];

const FIMS_FEATURES_COMING: FeatureItem[] = [
  { text: "정기보고: FIMS 호환 엑셀 자동 생성", ready: false },
  { text: "변동신고: 상태 변경 자동 감지 + 15일 카운트다운", ready: false },
];

const CHATBOT_FEATURES: FeatureItem[] = [
  { text: "한국어·영어·중국어·베트남어·우즈베크어·몽골어", ready: false },
  { text: "비자 연장, 서류 안내, 기한 알림 자동 응답", ready: false },
  { text: "복잡한 질문 → 담당자 자동 전달", ready: false },
];

const BEFORE_AFTER_READY: BeforeAfterCard[] = [
  {
    title: "학생 현황 파악",
    before: "엑셀, FIMS, 학사시스템 — 3곳을 따로따로 열어서 확인",
    after: "한 화면에서 전체 학생 상태 + 위험도 즉시 확인",
  },
  {
    title: "IEQAS 이탈률 관리",
    before: "월말에 수작업으로 계산, 누락되면 인증 위험",
    after: "대시보드에서 실시간 게이지로 즉시 확인",
  },
];

const BEFORE_AFTER_COMING: BeforeAfterCard[] = [
  {
    title: "FIMS 정기보고",
    before: "엑셀 → FIMS 수동 입력, 분기마다 며칠 소요",
    after: "대시보드에서 FIMS 호환 파일 바로 생성",
  },
  {
    title: "유학생 상담",
    before: "반복 질문에 수동 응대, 6개 언어 장벽",
    after: "AI 챗봇이 다국어 기본 상담 자동 처리",
  },
];

const PRIVACY_ITEMS: TrustItem[] = [
  { text: "AWS 서울 리전 (국내 데이터 보관)" },
  { text: "여권번호·외국인등록번호 AES-256 암호화 (입력은 선택)" },
  { text: "개인정보 접근 이력 자동 기록" },
];

const RBAC_ITEMS: TrustItem[] = [
  { text: "관리자 / 매니저 / 열람자 3단계 권한" },
  { text: "민감 정보는 권한에 따라 마스킹 처리" },
  { text: "모든 데이터 조회·수정 이력 기록" },
];

/* ────────────────────────────────────────────
 * Hooks
 * ──────────────────────────────────────────── */

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

/* ────────────────────────────────────────────
 * Shared Components
 * ──────────────────────────────────────────── */

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-emerald-500 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ComingSoonBadge = () => (
  <span className="inline-flex items-center bg-amber-50 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full border border-amber-200">
    출시 예정
  </span>
);

const CTAButton = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => (
  <a
    href="#cta"
    className={`inline-flex items-center justify-center bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-0.5 active:bg-indigo-800 active:translate-y-0 transition duration-200 shadow-lg shadow-indigo-200 text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
  >
    {children || "8주 무료 파일럿 신청"}
  </a>
);

/* ────────────────────────────────────────────
 * Mockup Components
 * ──────────────────────────────────────────── */

const DashboardMockup = () => (
  <div className="flex-1 w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm overflow-hidden">
    {/* Window chrome */}
    <div className="flex items-center gap-1.5 mb-3 pb-2.5 border-b border-slate-100">
      <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
      <div className="flex-1 bg-slate-100 rounded h-3.5 ml-3 max-w-[140px]" />
    </div>

    {/* Traffic light status cards */}
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 tabular-nums">
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-center">
        <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 mx-auto mb-1 shadow-sm shadow-emerald-200" />
        <div className="text-[10px] font-bold text-emerald-700">847</div>
        <div className="text-[8px] text-emerald-600">정상</div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">
        <div className="w-3.5 h-3.5 rounded-full bg-amber-400 mx-auto mb-1 shadow-sm shadow-amber-200" />
        <div className="text-[10px] font-bold text-amber-700">52</div>
        <div className="text-[8px] text-amber-600">주의</div>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center">
        <div className="w-3.5 h-3.5 rounded-full bg-red-400 mx-auto mb-1 shadow-sm shadow-red-200" />
        <div className="text-[10px] font-bold text-red-700">12</div>
        <div className="text-[8px] text-red-600">위험</div>
      </div>
    </div>

    {/* IEQAS gauge */}
    <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 mb-3 tabular-nums">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[9px] font-medium text-slate-500">
          IEQAS 이탈률
        </span>
        <span className="text-[10px] font-bold text-emerald-600">0.8%</span>
      </div>
      <div className="relative w-full bg-slate-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full"
          style={{ width: "28%" }}
        />
        <div
          className="absolute top-0 h-2 w-px bg-red-400"
          style={{ left: "70%" }}
        />
      </div>
      <div className="flex justify-between mt-0.5">
        <span className="text-[7px] text-slate-400">0%</span>
        <span className="text-[7px] text-red-400 font-medium">2% 기준선</span>
      </div>
    </div>

    {/* Mini data table */}
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-4 text-[8px] font-semibold text-slate-400 bg-slate-50 px-2 py-1.5 border-b border-slate-100 uppercase tracking-wider">
        <span>이름</span>
        <span>비자</span>
        <span>만료</span>
        <span>상태</span>
      </div>
      <div className="grid grid-cols-4 text-[9px] text-slate-600 px-2 py-1.5 border-b border-slate-50">
        <span className="font-medium">WANG L.</span>
        <span>D-2</span>
        <span>25.08</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-emerald-400" /></span>
      </div>
      <div className="grid grid-cols-4 text-[9px] text-slate-600 px-2 py-1.5 border-b border-slate-50">
        <span className="font-medium">NGUYEN T.</span>
        <span>D-4</span>
        <span>25.04</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-amber-400" /></span>
      </div>
      <div className="grid grid-cols-4 text-[9px] text-slate-600 px-2 py-1.5">
        <span className="font-medium">KHAN A.</span>
        <span>D-2</span>
        <span>25.03</span>
        <span><span className="inline-block w-2 h-2 rounded-full bg-red-400" /></span>
      </div>
    </div>
  </div>
);

const ImportMockup = () => (
  <div className="flex-1 w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm overflow-hidden">
    <div className="flex items-center gap-1.5 mb-3 pb-2.5 border-b border-slate-100">
      <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
      <div className="flex-1 bg-slate-100 rounded h-3.5 ml-3 max-w-[140px]" />
    </div>

    {/* Upload zone */}
    <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-lg p-3 mb-3 text-center">
      <div className="flex justify-center mb-1">
        <Icon name="document" className="w-5 h-5 text-indigo-400" />
      </div>
      <div className="text-[10px] font-medium text-indigo-600">
        학생명부.xlsx 업로드 완료
      </div>
      <div className="text-[8px] text-indigo-400 mt-0.5">
        911명 · 12개 컬럼 감지
      </div>
    </div>

    {/* Column mapping */}
    <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 mb-3">
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-[9px] font-semibold text-slate-500">
          AI 컬럼 매핑
        </span>
        <span className="text-[8px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-medium">
          자동 완료
        </span>
      </div>
      <div className="space-y-1.5">
        {[
          { from: "학생이름", to: "name", conf: "98%" },
          { from: "여권번호", to: "passportNo", conf: "95%" },
          { from: "비자종류", to: "visaType", conf: "97%" },
        ].map((row, i) => (
          <div key={i} className="flex items-center text-[9px]">
            <span className="text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200 flex-1 truncate">
              {row.from}
            </span>
            <span className="mx-1.5 text-indigo-400">→</span>
            <span className="text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200 flex-1 truncate font-mono">
              {row.to}
            </span>
            <span className="ml-1.5 text-emerald-500 font-medium w-7 text-right">
              {row.conf}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-indigo-600 text-white rounded-lg py-2 text-center text-[10px] font-semibold">
      911명 가져오기
    </div>
  </div>
);

const ChatbotMockup = () => (
  <div className="flex-1 w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm overflow-hidden">
    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
          <Icon name="sparkles" className="w-3.5 h-3.5 text-indigo-600" />
        </div>
        <div>
          <div className="text-[10px] font-semibold text-slate-700">
            VisaCampus AI
          </div>
          <div className="text-[8px] text-emerald-500">온라인</div>
        </div>
      </div>
      <div className="flex gap-1">
        {["KO", "EN", "ZH", "VI"].map((lang) => (
          <span
            key={lang}
            className={`text-[7px] px-1.5 py-0.5 rounded font-bold ${
              lang === "VI"
                ? "bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {lang}
          </span>
        ))}
      </div>
    </div>

    <div className="space-y-2.5">
      <div className="flex justify-end">
        <div className="bg-indigo-600 text-white rounded-2xl rounded-br-md px-3 py-2 max-w-[75%]">
          <p className="text-[10px] leading-relaxed">
            Xin chào, tôi muốn gia hạn visa D-2
          </p>
        </div>
      </div>

      <div className="flex justify-start">
        <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%]">
          <p className="text-[10px] leading-relaxed">
            Chào bạn! Để gia hạn visa D-2, bạn cần chuẩn bị:
          </p>
          <div className="mt-1.5 space-y-1">
            {["Hộ chiếu (원본)", "Đơn xin gia hạn", "Chứng nhận tại học"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 text-[9px] text-slate-600"
                >
                  <Icon name="checkCircle" className="w-3 h-3 text-emerald-500" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-start">
        <div className="bg-amber-50 border border-amber-200 text-amber-700 rounded-xl px-3 py-1.5 flex items-center gap-1.5">
          <Icon name="alert" className="w-3 h-3 text-amber-500" />
          <p className="text-[9px] font-medium">
            복잡한 질문 → 김현정 담당자에게 전달됨
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* ────────────────────────────────────────────
 * Section Components
 * ──────────────────────────────────────────── */

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        }`}
        aria-label="메인 내비게이션"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">
                VC
              </span>
            </div>
            <span className="font-bold text-base sm:text-lg text-gray-900">
              VisaCampus
            </span>
          </div>
          {/* Touch target: min-h-[44px] for mobile accessibility */}
          <a
            href="#cta"
            className="inline-flex items-center min-h-[44px] bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium cursor-pointer hover:bg-indigo-700 hover:-translate-y-0.5 active:bg-indigo-800 active:translate-y-0 transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            무료 파일럿 신청
          </a>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-indigo-50 via-white to-white overflow-hidden">
    {/* Background atmosphere */}
    <div className="absolute inset-0 bg-dot-grid" />
    <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-glow-pulse" />
    <div
      className="absolute top-32 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-glow-pulse"
      style={{ animationDelay: "3s" }}
    />

    <div className="relative max-w-4xl mx-auto text-center">
      <h1
        className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-5 tracking-tight text-balance"
        style={{ lineHeight: 1.3 }}
      >
        유학생 비자 관리,
        <br />
        <span className="text-indigo-600">엑셀에서 벗어나세요</span>
      </h1>
      <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
        FIMS 보고부터 비자 만료 관리까지, 한 곳에서.
        <br />
        대학 국제처를 위한 유학생 관리 플랫폼
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
        {HERO_STATS.map((stat, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 px-5 sm:px-6 py-3 sm:py-4 flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition duration-200"
          >
            <IconBadge name={stat.icon} color="indigo" size="sm" />
            <div className="text-sm font-medium text-gray-700">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <CTAButton className="px-8 py-3.5 min-h-[48px] rounded-xl text-base w-full sm:w-auto" />
      <p className="text-xs text-gray-400 mt-3">
        설치 없이 바로 시작 · 8주간 무료
      </p>
    </div>
  </section>
);

const Problem = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 sm:py-20 px-4 sm:px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`font-display text-xl sm:text-3xl font-bold text-center text-balance text-gray-900 mb-8 sm:mb-12 transition duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          이런 고민, 매 학기 반복되고 계시죠?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {PROBLEM_CARDS.map((card, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 cursor-pointer transition duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${
                card.urgent
                  ? "bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 shadow-md relative overflow-hidden"
                  : "bg-white border border-gray-100 hover:shadow-md"
              } ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isInView ? `${i * 100}ms` : "0ms",
              }}
            >
              {/* Static red indicator on urgent card */}
              {card.urgent && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex rounded-full h-3 w-3 bg-red-500 shadow-sm shadow-red-200" />
                </div>
              )}
              <IconBadge name={card.icon} color={card.iconColor} />
              <h3 className="font-semibold text-gray-900 mb-2 mt-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const { ref, isInView } = useInView(0.05);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 sm:py-20 px-4 sm:px-6 relative"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div className="relative max-w-5xl mx-auto">
        <h2
          className={`font-display text-xl sm:text-3xl font-bold text-center text-balance text-gray-900 mb-2 sm:mb-3 transition duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          VisaCampus가 도와드립니다
        </h2>
        <p
          className={`text-center text-gray-500 text-sm sm:text-base mb-10 sm:mb-14 transition duration-700 delay-100 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          국제처 업무에 맞춰 설계된 유학생 관리 플랫폼
        </p>

        <div className="space-y-16 sm:space-y-24">
          {/* Feature 1 — Dashboard */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            <div className="flex-1">
              <div className="mb-2">
                <span className="text-sm font-semibold text-indigo-600">
                  기능 01
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                통합 학생 관리 대시보드
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                한 화면에서 전체 유학생 현황을 파악합니다. 위험 학생을 신호등
                시스템으로 즉시 식별하고, 비자 만료 일정을 놓치지 않도록
                알려드립니다.
              </p>
              <div className="space-y-2">
                {DASHBOARD_FEATURES.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckIcon />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <DashboardMockup />
          </div>

          {/* Feature 2 — FIMS */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-indigo-600">
                  기능 02
                </span>
                <ComingSoonBadge />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                FIMS 보고 간소화
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                정기보고(연 4회)용 FIMS 호환 엑셀을 자동 생성하고, 학생 상태
                변경 시 변동신고 기한을 자동으로 알려드립니다.
              </p>
              <div className="space-y-2">
                {FIMS_FEATURES_READY.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckIcon />
                    <span>{f.text}</span>
                  </div>
                ))}
                {FIMS_FEATURES_COMING.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span className="w-5 h-5 flex-shrink-0" />
                    <span>
                      {f.text}{" "}
                      <span className="text-amber-500 text-xs">
                        (출시 예정)
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <ImportMockup />
          </div>

          {/* Feature 3 — AI Chatbot */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-indigo-600">
                  기능 03
                </span>
                <ComingSoonBadge />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI 다국어 상담봇
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                6개 언어로 비자 절차, 필요 서류, 기한을 자동 안내합니다. 복잡한
                질문은 담당자에게 자동으로 전달됩니다.
              </p>
              <div className="space-y-2">
                {CHATBOT_FEATURES.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span className="w-5 h-5 flex-shrink-0" />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <ChatbotMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const { ref, isInView } = useInView(0.1);

  const ArrowDivider = () => (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200">
        <svg
          className="w-3.5 h-3.5 text-indigo-500 hidden sm:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <svg
          className="w-3.5 h-3.5 text-indigo-500 sm:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
      </div>
    </div>
  );

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 sm:py-20 px-4 sm:px-6 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`font-display text-xl sm:text-3xl font-bold text-center text-balance text-gray-900 mb-8 sm:mb-12 transition duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          이렇게 달라집니다
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {BEFORE_AFTER_READY.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer hover:shadow-lg transition duration-500 relative ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isInView ? `${i * 120}ms` : "0ms" }}
            >
              <div className="flex flex-col sm:flex-row relative">
                <div className="flex-1 p-5 sm:p-6 bg-red-50/70 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wide mb-2">Before</div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.before}</p>
                </div>
                <ArrowDivider />
                <div className="flex-1 p-5 sm:p-6 bg-emerald-50/70">
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-wide mb-2">After</div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-700 font-medium">{card.after}</p>
                </div>
              </div>
            </div>
          ))}

          {BEFORE_AFTER_COMING.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden border border-gray-100 relative transition duration-500 ${
                isInView ? "opacity-80 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isInView ? `${(i + BEFORE_AFTER_READY.length) * 120}ms` : "0ms" }}
            >
              <div className="flex flex-col sm:flex-row relative">
                <div className="flex-1 p-5 sm:p-6 bg-red-50/30 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <div className="text-xs font-bold text-red-300 uppercase tracking-wide mb-2">Before</div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.before}</p>
                </div>
                <ArrowDivider />
                <div className="flex-1 p-5 sm:p-6 bg-emerald-50/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">After</span>
                    <ComingSoonBadge />
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{card.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`font-display text-xl sm:text-3xl font-bold text-center text-balance text-gray-900 mb-2 sm:mb-3 transition duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          개인정보, 안심하세요
        </h2>
        <p
          className={`text-center text-gray-500 text-sm sm:text-base mb-8 sm:mb-12 transition duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          유학생 개인정보를 안전하게 관리합니다
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div
            className={`bg-indigo-50 rounded-xl p-6 border border-indigo-100 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition duration-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "100ms" : "0ms" }}
          >
            <IconBadge name="shield" color="indigo" size="lg" />
            <h3 className="font-bold text-gray-900 mb-4 mt-3">개인정보 보호</h3>
            <div className="space-y-2.5">
              {PRIVACY_ITEMS.map((item, j) => (
                <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckIcon />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`bg-indigo-50 rounded-xl p-6 border border-indigo-100 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition duration-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "200ms" : "0ms" }}
          >
            <IconBadge name="users" color="indigo" size="lg" />
            <h3 className="font-bold text-gray-900 mb-4 mt-3">역할별 접근 권한</h3>
            <div className="space-y-2.5">
              {RBAC_ITEMS.map((item, j) => (
                <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckIcon />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl px-6 py-4 border border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">
                무료 체험이 끝나도 데이터는 언제든 내보낼 수 있습니다.
              </span>
              <br className="sm:hidden" />
              <span className="text-gray-400 sm:ml-2">
                엑셀/CSV 형식으로 전체 데이터 엑스포트를 지원합니다.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAForm = () => {
  const [formData, setFormData] = useState<PilotFormData>({
    email: "",
    org: "",
    role: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClassName =
    "w-full border border-gray-200 bg-gray-50/50 rounded-lg px-4 py-3 text-sm focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 focus-visible:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] outline-none transition duration-200";

  return (
    <section
      id="cta"
      className="relative py-14 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="font-display text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 text-balance">
          8주 무료 파일럿을 시작하세요
        </h2>
        <p className="text-indigo-200 text-sm sm:text-base mb-8 sm:mb-10">
          신청 후 2영업일 이내에 연락드립니다. 설치 없이 바로 시작할 수
          있습니다.
        </p>

        {submitted ? (
          <div
            className="bg-white rounded-2xl p-8 sm:p-10 animate-fade-in-up shadow-2xl"
            role="alert"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                <Icon name="checkCircle" className="w-8 h-8 text-emerald-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              감사합니다!
            </h3>
            <p className="text-gray-600">2영업일 이내에 연락드리겠습니다.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-indigo-900/20"
            aria-label="파일럿 신청 양식"
          >
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">
                  이메일 *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="name@university.ac.kr"
                  className={inputClassName}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="org" className="block text-left text-sm font-medium text-gray-700 mb-1">
                  소속 *
                </label>
                <input
                  id="org"
                  name="org"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="예: 한국대학교…"
                  className={inputClassName}
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-left text-sm font-medium text-gray-700 mb-1">
                  담당 업무 *
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="예: 국제교류팀…"
                  className={inputClassName}
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full min-h-[48px] bg-indigo-600 text-white py-3.5 rounded-xl font-semibold text-sm sm:text-base cursor-pointer hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 active:bg-indigo-800 active:translate-y-0 transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              8주 무료 파일럿 신청하기
            </button>
            <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
              <Icon name="lock" className="w-3.5 h-3.5" />
              <span>입력하신 정보는 파일럿 안내 목적으로만 사용됩니다.</span>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 sm:py-10 px-4 sm:px-6 bg-gray-900 text-center">
    <div className="flex items-center justify-center gap-2 mb-3">
      <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
        <span className="text-white font-bold text-xs">VC</span>
      </div>
      <span className="font-semibold text-white">VisaCampus</span>
    </div>
    <p className="text-gray-400 text-sm mb-2">
      대학 국제처를 위한 유학생 관리 플랫폼
    </p>
    <p className="text-gray-500 text-xs">contact@visacampus.org</p>
  </footer>
);

/* ────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────── */

export default function VisaCampusLanding() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        본문으로 건너뛰기
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <BeforeAfter />
        <Trust />
        <CTAForm />
      </main>
      <Footer />
    </div>
  );
}
