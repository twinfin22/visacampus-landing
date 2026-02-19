import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "회사 소개 - VisaCampus | 대학 국제처를 위한 유학생 관리 플랫폼",
  description:
    "VisaCampus는 대학 국제처를 위한 유학생 비자 관리 플랫폼입니다. FIMS 정기보고 간소화, IEQAS 이탈률 실시간 모니터링, 비자 만료 관리, AI 다국어 상담까지 한 곳에서 제공합니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          홈으로 돌아가기
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          VisaCampus 소개
        </h1>

        <div className="text-sm text-gray-600 space-y-8 leading-relaxed">
          <section>
            <p>
              VisaCampus는 대학 국제처를 위한 유학생 비자 관리 플랫폼입니다.
              엑셀과 수작업에 의존하던 유학생 관리 업무를 하나의 대시보드로
              통합하여, 국제처 직원들이 본연의 업무에 집중할 수 있도록
              도와드립니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              왜 VisaCampus를 만들었나요?
            </h2>
            <p className="mb-3">
              한국의 대학 국제처는 수백에서 수천 명의 유학생 비자 현황을 관리해야
              합니다. 매 학기 FIMS 정기보고를 작성하고, 변동신고 기한을 놓치지
              않아야 하며, IEQAS 불법체류율이 2%를 넘지 않도록 실시간으로
              모니터링해야 합니다.
            </p>
            <p>
              하지만 대부분의 대학은 여전히 엑셀, FIMS 시스템, 학사 시스템 세
              곳을 따로따로 확인하며 업무를 처리하고 있습니다. 2024년 기준 44개
              대학이 IEQAS 기준 미달로 비자 발급 제한을 받았습니다. VisaCampus는
              이런 문제를 해결하기 위해 만들어졌습니다.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  통합 학생 관리 대시보드
                </h3>
                <p>
                  전체 유학생 현황을 한 화면에서 파악합니다. 신호등 시스템(초록 →
                  노랑 → 빨강)으로 위험 학생을 즉시 식별하고, 비자 만료 캘린더로
                  일정을 놓치지 않습니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  IEQAS 이탈률 실시간 모니터링
                </h3>
                <p>
                  대시보드에서 실시간 게이지로 불법체류율을 확인합니다. 2% 기준선
                  초과 위험이 감지되면 즉시 알림을 보내드립니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  FIMS 보고 간소화 (출시 예정)
                </h3>
                <p>
                  정기보고(연 4회)용 FIMS 호환 엑셀을 자동 생성합니다. 학생 상태
                  변경 시 변동신고 기한(15일)을 자동으로 추적하여 누락을
                  방지합니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  엑셀 대량 업로드 + AI 컬럼 매핑
                </h3>
                <p>
                  기존 엑셀 파일을 업로드하면 AI가 자동으로 컬럼을 매핑합니다.
                  수백 건의 학생 데이터를 한 번에 가져올 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  AI 다국어 상담봇 (출시 예정)
                </h3>
                <p>
                  한국어, 영어, 중국어, 베트남어, 우즈베크어, 몽골어 6개 언어로
                  비자 절차, 필요 서류, 기한을 자동 안내합니다. 복잡한 질문은
                  담당자에게 자동으로 전달됩니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              보안 및 개인정보 보호
            </h2>
            <p>
              유학생 개인정보는 AWS 서울 리전에서 국내에 보관되며, 여권번호와
              외국인등록번호 등 민감정보는 AES-256으로 암호화합니다. 3단계 역할
              기반 접근 제어와 감사 로그를 통해 모든 데이터 접근을 기록합니다.
              자세한 내용은{" "}
              <Link
                href="/privacy"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                개인정보 처리방침
              </Link>
              을 참고하세요.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-3">문의</h2>
            <p>
              8주 무료 파일럿 신청 및 서비스 관련 문의는{" "}
              <a
                href="mailto:contact@visacampus.org"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                contact@visacampus.org
              </a>
              로 연락해주세요. 신청 후 2영업일 이내에 연락드립니다.
            </p>
          </section>
        </div>
      </main>

      <footer className="py-8 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">VC</span>
            </div>
            <span className="text-sm font-semibold text-white">VisaCampus</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              홈
            </Link>
            <Link
              href="/about"
              className="text-white font-medium"
              aria-current="page"
            >
              회사 소개
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              개인정보 처리방침
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
