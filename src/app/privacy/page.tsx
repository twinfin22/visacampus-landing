import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "개인정보 처리방침 - VisaCampus | 유학생 개인정보 보호 정책",
  description:
    "VisaCampus 개인정보 처리방침. AWS 서울 리전 국내 데이터 보관, AES-256 암호화, 3단계 접근 권한 관리로 유학생 개인정보를 안전하게 보호합니다. 모든 접근 이력을 자동 기록합니다.",
};

export default function PrivacyPage() {
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
          개인정보 처리방침
        </h1>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8">
          <p className="text-sm text-indigo-700">
            개인정보 처리방침을 준비 중입니다. 정식 서비스 출시 전 공개될
            예정입니다. 문의사항이 있으시면{" "}
            <a
              href="mailto:contact@visacampus.org"
              className="font-semibold underline"
            >
              contact@visacampus.org
            </a>
            로 연락해주세요.
          </p>
        </div>

        <div className="text-sm text-gray-600 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              개인정보 보호 원칙
            </h2>
            <p className="mb-3">
              VisaCampus는 대학 국제처가 관리하는 유학생 개인정보 보호를
              최우선으로 생각합니다. 개인정보보호법 및 관련 법령을 준수하며,
              다음의 원칙에 따라 개인정보를 처리합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              데이터 보관 및 암호화
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                모든 데이터는 AWS 서울 리전(ap-northeast-2)에 보관되며, 국내
                데이터 거주 요건을 충족합니다.
              </li>
              <li>
                여권번호, 외국인등록번호 등 민감한 개인식별정보는 AES-256-GCM
                방식으로 암호화하여 저장합니다. 이러한 정보의 입력은 선택
                사항입니다.
              </li>
              <li>
                데이터 전송 시 TLS 1.2 이상의 프로토콜을 사용하여 전송 구간
                암호화를 적용합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              접근 권한 관리
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                관리자(Admin), 매니저(Manager), 열람자(Viewer) 3단계 역할 기반
                접근 제어(RBAC)를 적용합니다.
              </li>
              <li>
                민감한 개인정보는 권한 수준에 따라 마스킹 처리되며, 인가된
                사용자만 원본 정보에 접근할 수 있습니다.
              </li>
              <li>
                모든 개인정보 조회, 수정, 삭제 이력은 감사 로그(Audit Log)에
                자동으로 기록됩니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              AI 서비스와 개인정보
            </h2>
            <p>
              AI 다국어 상담봇 등 AI 기능 사용 시, 원본 개인정보(여권번호,
              외국인등록번호 등)는 절대 외부 AI API로 전송되지 않습니다. 반드시
              마스킹 처리 후 필요한 최소한의 정보만 전달합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              데이터 이관 및 삭제
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                서비스 이용 기간 중 언제든지 엑셀/CSV 형식으로 전체 데이터를
                내보낼 수 있습니다.
              </li>
              <li>
                서비스 해지 시 모든 데이터는 요청에 따라 완전히 삭제되며, 삭제
                확인서를 제공합니다.
              </li>
              <li>
                서비스 내 데이터 삭제는 소프트 삭제(논리 삭제) 방식으로 처리되어,
                필요 시 일정 기간 내 복구가 가능합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">문의</h2>
            <p>
              개인정보 처리방침에 대한 문의사항은{" "}
              <a
                href="mailto:contact@visacampus.org"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                contact@visacampus.org
              </a>
              로 연락해주세요.
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
            <Link href="/about" className="hover:text-white transition-colors">
              회사 소개
            </Link>
            <Link
              href="/privacy"
              className="text-white font-medium"
              aria-current="page"
            >
              개인정보 처리방침
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
