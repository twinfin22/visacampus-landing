import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 - VisaCampus",
  description:
    "VisaCampus 개인정보 처리방침. 유학생 개인정보를 안전하게 보호합니다.",
};

export default function PrivacyPage() {
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

        <div className="prose prose-gray text-sm text-gray-600 space-y-4">
          <p>
            VisaCampus는 대학 국제처의 유학생 개인정보 보호를 최우선으로
            생각합니다. 다음 원칙에 따라 개인정보를 처리합니다:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>AWS 서울 리전에서 국내 데이터 보관</li>
            <li>여권번호, 외국인등록번호 등 민감정보 AES-256 암호화</li>
            <li>관리자/매니저/열람자 3단계 접근 권한 관리</li>
            <li>모든 개인정보 접근 이력 자동 기록</li>
            <li>서비스 종료 시 전체 데이터 엑스포트 지원</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
