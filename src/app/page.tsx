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
 * Data
 * ──────────────────────────────────────────── */

const HERO_STATS: HeroStat[] = [
  { icon: "📊", label: "유학생 현황 통합 조회" },
  { icon: "🔍", label: "IEQAS 이탈률 실시간 추적" },
  { icon: "📋", label: "FIMS 보고 간소화" },
];

const PROBLEM_CARDS: ProblemCard[] = [
  {
    icon: "📋",
    title: "FIMS 정기보고마다 며칠이 사라집니다",
    desc: "매 분기 엑셀에서 FIMS로 수동 입력. 입력 오류가 나면 처음부터 다시 확인해야 합니다.",
    urgent: false,
  },
  {
    icon: "⏰",
    title: "변동신고 15일 기한, 놓치면 과태료입니다",
    desc: "자퇴·제적·미등록 변동을 실시간으로 파악할 수 없어 누락이 발생합니다.",
    urgent: false,
  },
  {
    icon: "🌏",
    title: "같은 질문을 하루에도 수십 번 반복합니다",
    desc: "비자 연장 절차, 필요 서류 안내. 언어 장벽에 학기초 업무 폭증.",
    urgent: false,
  },
  {
    icon: "🚨",
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
    className={`inline-block bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-0.5 active:bg-indigo-800 active:translate-y-0 transition-all duration-200 shadow-lg shadow-indigo-200 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
  >
    {children || "8주 무료 파일럿 신청"}
  </a>
);

/* ────────────────────────────────────────────
 * Mockup Components (replace screenshot placeholders)
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
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
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
    <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 mb-3">
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
        <span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
        </span>
      </div>
      <div className="grid grid-cols-4 text-[9px] text-slate-600 px-2 py-1.5 border-b border-slate-50">
        <span className="font-medium">NGUYEN T.</span>
        <span>D-4</span>
        <span>25.04</span>
        <span>
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
        </span>
      </div>
      <div className="grid grid-cols-4 text-[9px] text-slate-600 px-2 py-1.5">
        <span className="font-medium">KHAN A.</span>
        <span>D-2</span>
        <span>25.03</span>
        <span>
          <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
        </span>
      </div>
    </div>
  </div>
);

const ImportMockup = () => (
  <div className="flex-1 w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm overflow-hidden">
    {/* Window chrome */}
    <div className="flex items-center gap-1.5 mb-3 pb-2.5 border-b border-slate-100">
      <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
      <div className="flex-1 bg-slate-100 rounded h-3.5 ml-3 max-w-[140px]" />
    </div>

    {/* Upload zone */}
    <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-lg p-3 mb-3 text-center">
      <div className="text-lg mb-1">📄</div>
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

    {/* Import button */}
    <div className="bg-indigo-600 text-white rounded-lg py-2 text-center text-[10px] font-semibold">
      911명 가져오기
    </div>
  </div>
);

const ChatbotMockup = () => (
  <div className="flex-1 w-full bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-sm overflow-hidden">
    {/* Chat header */}
    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
          <span className="text-[10px]">🤖</span>
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

    {/* Chat bubbles */}
    <div className="space-y-2.5">
      {/* User message */}
      <div className="flex justify-end">
        <div className="bg-indigo-600 text-white rounded-2xl rounded-br-md px-3 py-2 max-w-[75%]">
          <p className="text-[10px] leading-relaxed">
            Xin chào, tôi muốn gia hạn visa D-2
          </p>
        </div>
      </div>

      {/* Bot response */}
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
                  <span className="text-emerald-500 text-[8px]">✓</span>
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Escalation indicator */}
      <div className="flex justify-start">
        <div className="bg-amber-50 border border-amber-200 text-amber-700 rounded-xl px-3 py-1.5">
          <p className="text-[9px] font-medium">
            💬 복잡한 질문 → 김현정 담당자에게 전달됨
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* ────────────────────────────────────────────
 * Section Components
 * ──────────────────────────────────────────── */

/* 10. Nav — scroll shadow transition */
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
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
          <a
            href="#cta"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-indigo-700 hover:-translate-y-0.5 active:bg-indigo-800 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            무료 파일럿 신청
          </a>
        </div>
      </nav>
    </header>
  );
};

/* 2,3. Hero — serif display font, bigger type, dot grid, gradient blobs, floating stats */
const Hero = () => (
  <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-indigo-50 via-white to-white overflow-hidden">
    {/* Background atmosphere */}
    <div className="absolute inset-0 bg-dot-grid" />
    <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-glow-pulse" />
    <div className="absolute top-32 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />

    <div className="relative max-w-4xl mx-auto text-center">
      <h1
        className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-5 tracking-tight"
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
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 px-5 sm:px-6 py-3 sm:py-4 flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 hover:shadow-md transition-shadow duration-300 animate-float"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            <div className="text-xl sm:text-2xl sm:mb-1">{stat.icon}</div>
            <div className="text-sm font-medium text-gray-700">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <CTAButton className="px-8 py-3.5 rounded-xl text-base w-full sm:w-auto" />
      <p className="text-xs text-gray-400 mt-3">
        설치 없이 바로 시작 · 8주간 무료
      </p>
    </div>
  </section>
);

/* 2,5. Problem — staggered cards, urgent card with pulse indicator */
const Problem = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 sm:py-20 px-4 sm:px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`font-display text-xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 transition-all duration-700 ${
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
              className={`rounded-xl p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${
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
              {/* Pulsing indicator on urgent card */}
              {card.urgent && (
                <div className="absolute top-4 right-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                  </span>
                </div>
              )}
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">
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

/* 1,6. Solution — CSS mockups replace placeholders, display font */
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
          className={`font-display text-xl sm:text-3xl font-bold text-center text-gray-900 mb-2 sm:mb-3 transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          VisaCampus가 도와드립니다
        </h2>
        <p
          className={`text-center text-gray-500 text-sm sm:text-base mb-10 sm:mb-14 transition-all duration-700 delay-100 ${
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

/* 7. BeforeAfter — stronger colors, center arrow, staggered entrance */
const BeforeAfter = () => {
  const { ref, isInView } = useInView(0.1);

  const ArrowIcon = () => (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200">
        {/* Right arrow (desktop) */}
        <svg
          className="w-3.5 h-3.5 text-indigo-500 hidden sm:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
        {/* Down arrow (mobile) */}
        <svg
          className="w-3.5 h-3.5 text-indigo-500 sm:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M7 11l5 5m0 0l5-5m-5 5V6"
          />
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
          className={`font-display text-xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          이렇게 달라집니다
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {/* Ready items */}
          {BEFORE_AFTER_READY.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 relative ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isInView ? `${i * 120}ms` : "0ms",
              }}
            >
              <div className="flex flex-col sm:flex-row relative">
                <div className="flex-1 p-5 sm:p-6 bg-red-50/70 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wide mb-2">
                    Before
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500">{card.before}</p>
                </div>
                <ArrowIcon />
                <div className="flex-1 p-5 sm:p-6 bg-emerald-50/70">
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-wide mb-2">
                    After
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700 font-medium">
                    {card.after}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon items */}
          {BEFORE_AFTER_COMING.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden border border-gray-100 opacity-80 transition-all duration-500 relative ${
                isInView
                  ? "opacity-80 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isInView
                  ? `${(i + BEFORE_AFTER_READY.length) * 120}ms`
                  : "0ms",
              }}
            >
              <div className="flex flex-col sm:flex-row relative">
                <div className="flex-1 p-5 sm:p-6 bg-red-50/30 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <div className="text-xs font-bold text-red-300 uppercase tracking-wide mb-2">
                    Before
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400">{card.before}</p>
                </div>
                <ArrowIcon />
                <div className="flex-1 p-5 sm:p-6 bg-emerald-50/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      After
                    </span>
                    <ComingSoonBadge />
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {card.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Trust — display font, card hover polish */
const Trust = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`font-display text-xl sm:text-3xl font-bold text-center text-gray-900 mb-2 sm:mb-3 transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          개인정보, 안심하세요
        </h2>
        <p
          className={`text-center text-gray-500 text-sm sm:text-base mb-8 sm:mb-12 transition-all duration-700 delay-100 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          유학생 개인정보를 안전하게 관리합니다
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div
            className={`bg-indigo-50 rounded-xl p-6 border border-indigo-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "100ms" : "0ms" }}
          >
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-4">개인정보 보호</h3>
            <div className="space-y-2.5">
              {PRIVACY_ITEMS.map((item, j) => (
                <div
                  key={j}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckIcon />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`bg-indigo-50 rounded-xl p-6 border border-indigo-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "200ms" : "0ms" }}
          >
            <div className="text-3xl mb-3">👤</div>
            <h3 className="font-bold text-gray-900 mb-4">역할별 접근 권한</h3>
            <div className="space-y-2.5">
              {RBAC_ITEMS.map((item, j) => (
                <div
                  key={j}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckIcon />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data export guarantee */}
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

/* 8,9. CTAForm — rich gradient bg, dot grid, form glow, button polish */
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
    "w-full border border-gray-200 bg-gray-50/50 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] outline-none transition-all duration-200";

  return (
    <section
      id="cta"
      className="relative py-14 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="font-display text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
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
            <div className="text-4xl mb-4">✅</div>
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
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium text-gray-700 mb-1"
                >
                  이메일 *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@university.ac.kr"
                  className={inputClassName}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="org"
                  className="block text-left text-sm font-medium text-gray-700 mb-1"
                >
                  소속 *
                </label>
                <input
                  id="org"
                  type="text"
                  required
                  placeholder="예: 한국대학교"
                  className={inputClassName}
                  value={formData.org}
                  onChange={(e) =>
                    setFormData({ ...formData, org: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-left text-sm font-medium text-gray-700 mb-1"
                >
                  담당 업무 *
                </label>
                <input
                  id="role"
                  type="text"
                  required
                  placeholder="예: 국제교류팀"
                  className={inputClassName}
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 active:bg-indigo-800 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              8주 무료 파일럿 신청하기
            </button>
            <p className="text-xs text-gray-400 mt-4">
              🔒 입력하신 정보는 파일럿 안내 목적으로만 사용됩니다.
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
      <Nav />
      <main>
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
