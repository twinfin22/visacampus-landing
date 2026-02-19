import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "회사 소개 - VisaCampus",
  description:
    "VisaCampus는 대학 국제처를 위한 유학생 비자 관리 플랫폼입니다. FIMS 보고 간소화, IEQAS 이탈률 모니터링, AI 다국어 상담을 제공합니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
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

        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
          <p>
            VisaCampus는 대학 국제처를 위한 유학생 비자 관리 플랫폼입니다.
            엑셀과 수작업에 의존하던 유학생 관리 업무를 하나의 대시보드로
            통합합니다.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              해결하는 문제
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  FIMS 정기보고(연 4회) 수작업 입력에 소요되는 시간 절감
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  변동신고 15일 기한 누락으로 인한 과태료 위험 방지
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  IEQAS 불법체류율 실시간 모니터링으로 인증 위험 사전 감지
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span>
                  반복되는 비자 상담을 AI 다국어 챗봇으로 자동화 (출시 예정)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-3">문의</h2>
            <p>
              파일럿 신청 및 서비스 관련 문의:{" "}
              <a
                href="mailto:contact@visacampus.org"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                contact@visacampus.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
