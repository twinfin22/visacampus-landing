import type { Metadata } from "next";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title:
    "개인정보 처리방침 - VisaCampus | 유학생 개인정보 보호 정책",
  description:
    "VisaCampus 개인정보 처리방침. AES-256-GCM 암호화, 3단계 역할 기반 접근 제어, 감사 로그 기록으로 유학생 개인정보를 안전하게 보호합니다. AWS 서울 리전 국내 데이터 보관.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout currentPath="/policy/privacy">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        개인정보 처리방침
      </h1>
      <p className="text-sm text-gray-500 mb-8">시행일: 2026-02-20</p>

      <div className="text-sm text-gray-600 space-y-8 leading-relaxed">
        {/* 전문 */}
        <p>
          불편함(이하 &lsquo;회사&rsquo;)이 운영하는
          &lsquo;VisaCampus&rsquo;는 개인정보보호법 제30조에 따라 이용자의
          개인정보와 권익을 보호하고, 관련 고충을 신속하게 처리하기 위해 다음과
          같이 개인정보 처리방침을 수립하여 운영하고 있습니다. 회사는 관계 법령이
          규정하는 책임과 의무를 준수하기 위해 최선을 다하고 있습니다.
        </p>
        <p>
          본 방침의 번역본과 한국어 원본의 내용이 다를 경우, 한국어판을
          우선으로 합니다.
        </p>

        {/* 제1조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제1조 (개인정보의 수집 및 이용에 관한 안내)
          </h2>
          <p className="mb-3">
            회사는 서비스 이용에 필요한 최소한의 개인정보를 수집하고 있습니다.
          </p>

          <h3 className="font-bold text-gray-800 mb-2 mt-4">
            1. 회원 가입 및 서비스 이용
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="회원 가입 및 서비스 이용 수집 항목">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    수집 목적
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    필수 항목
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    보유·이용 기간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    서비스 제공을 위한 회원(담당자) 식별 및 관리
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    성명, 대학 이메일, 비밀번호, 소속(대학교, 부서)
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    회원 탈퇴 시까지
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    서비스 결제 및 환불
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    이메일, 결제 정보
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    전자상거래 등에서의 소비자보호에 관한 법률에 따른 기간까지
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-gray-800 mb-2 mt-4">
            2. 회원이 입력하는 유학생 개인정보 (위탁 처리)
          </h3>
          <p className="mb-2">
            회원(대학 국제교류처)이 서비스에 입력하는 유학생 개인정보에
            대해, 회사는 개인정보 처리의 <strong>수탁자</strong>로서 기관
            회원의 지시에 따라 처리합니다. 해당 정보의 수집·이용에 대한 법적
            책임은 회원(위탁자)에 있습니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="유학생 개인정보 위탁 처리 항목">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    처리 목적
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    항목
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    보관 기간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    유학생 비자·체류 관리 대시보드 제공, FIMS 호환 내보내기
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    성명(한/영), 국적, 비자유형, 비자만료일, 학적상태, 출석률,
                    보험상태 등
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    회원의 이용 계약 종료 후 30일까지
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-gray-800 mb-2 mt-4">
            3. 고유식별정보
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="고유식별정보 처리 항목">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    처리 목적
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    항목
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    보관 기간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    유학생 식별, FIMS 변동신고·정기보고 지원
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    여권번호, 외국인등록번호
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    회원의 이용 계약 종료 후 30일까지
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            ※ 여권번호 및 외국인등록번호는 AES-256-GCM 방식으로 암호화하여
            저장하며, 입력은 선택 사항입니다.
          </p>

          <h3 className="font-bold text-gray-800 mb-2 mt-4">
            4. 비회원 (파일럿 신청)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="비회원 파일럿 신청 수집 항목">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    수집 목적
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    필수 항목
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    보유 기간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    무료 파일럿 신청 접수 및 안내
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    이메일, 소속 기관명, 직책
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    수집일로부터 6개월
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 제2조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제2조 (민감정보의 처리에 관한 사항)
          </h2>
          <p>
            회사는 이용자의 민감한 개인정보(사상, 신념, 건강정보 등)를 수집하지
            않습니다.
          </p>
        </section>

        {/* 제3조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제3조 (만 14세 미만 아동의 개인정보 처리에 관한 사항)
          </h2>
          <p>
            회사는 만 14세 미만 아동에게 서비스를 제공하지 않으며 이와 관련한
            개인정보를 수집하지 않습니다.
          </p>
        </section>

        {/* 제4조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제4조 (개인정보 자동수집 장치의 설치·운영 및 거부에 관한 사항)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를
              저장하고 수시로 불러오는 &lsquo;쿠키(cookie)&rsquo;를 사용합니다.
            </li>
            <li>
              쿠키는 웹사이트를 운영하는 서버가 이용자의 브라우저에 보내는
              소량의 정보이며, 이용자의 하드디스크에 저장되기도 합니다.
            </li>
            <li>
              이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저의
              설정을 통해 쿠키 허용, 차단 또는 삭제할 수 있습니다. 다만 쿠키를
              차단하면 서비스 이용에 제한이 발생할 수 있습니다.
            </li>
          </ol>

          <h3 className="font-bold text-gray-800 mb-2 mt-4">
            자동수집 정보 및 분석 도구
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="자동수집 정보 및 분석 도구">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    도구명
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    목적
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    보유 기간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    Vercel Analytics
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    서비스 이용 현황 분석 및 개선
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    수집일로부터 12개월
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 제5조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제5조 (개인정보의 보유·이용기간 및 파기)
          </h2>
          <p className="mb-3">
            회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회원 정보: 회원 탈퇴 시 지체 없이 파기합니다.
            </li>
            <li>
              유학생 데이터: 회원의 이용 계약 종료 후 30일간 보관(데이터
              내보내기 기간) 후 완전히 파기합니다.
            </li>
            <li>
              비회원(파일럿 신청) 정보: 수집일로부터 6개월 경과 시 파기합니다.
            </li>
          </ol>
          <h3 className="font-bold text-gray-800 mb-2 mt-4">파기 절차 및 방법</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              회사는 파기 사유가 발생한 개인정보를 선정하고, 개인정보
              보호책임자의 승인을 받아 파기합니다.
            </li>
            <li>
              전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없도록
              기술적 방법을 사용하여 파기합니다.
            </li>
          </ul>
          <h3 className="font-bold text-gray-800 mb-2 mt-4">
            관련 법령에 따른 의무 보존 기간
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="관련 법령에 따른 의무 보존 기간">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    보존 목적
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    근거 법령
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    기간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    계약 또는 청약철회 등에 관한 기록
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    전자상거래법
                  </td>
                  <td className="border border-gray-200 px-3 py-2">5년</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    대금결제 및 재화 등의 공급에 관한 기록
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    전자상거래법
                  </td>
                  <td className="border border-gray-200 px-3 py-2">5년</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    소비자의 불만 또는 분쟁처리에 관한 기록
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    전자상거래법
                  </td>
                  <td className="border border-gray-200 px-3 py-2">3년</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    접속에 관한 기록 보존
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    통신비밀보호법
                  </td>
                  <td className="border border-gray-200 px-3 py-2">3개월</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 제6조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제6조 (개인정보 처리 위탁)
          </h2>
          <p className="mb-3">
            회사는 원활한 개인정보 업무처리를 위하여 일부 개인정보 처리 업무를
            위탁하고 있으며, 위탁 계약 체결 시 관련 법령에 따라 수탁자가
            개인정보를 안전하게 처리하는지를 감독하고 있습니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="개인정보 처리 위탁 현황">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    수탁자
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    위탁 업무
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    Vercel Inc.
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    웹 애플리케이션 호스팅 및 서비스 제공
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    Supabase Inc. (AWS 서울 리전)
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    데이터베이스 보관 및 관리
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 제7조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제7조 (개인정보의 제3자 제공)
          </h2>
          <p>
            회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만
            처리하며, 이용자의 별도 사전 동의 또는 관련 법령의 특별한 요구가
            발생하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
          <p className="mt-2">
            관계법령에 의거 사전 동의 없이 제3자에게 제공되는 경우:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-1">
            <li>
              통계작성, 학술연구 또는 시장조사를 위해 특정 개인을 식별할 수 없는
              형태로 제공하는 경우
            </li>
            <li>
              관계법령에 의하여 국가기관으로부터 요구받은 경우
            </li>
            <li>범죄에 대한 수사상의 목적이 있는 경우</li>
            <li>기타 관계법령에서 정한 절차에 따른 요청이 있는 경우</li>
          </ul>
        </section>

        {/* 제8조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제8조 (개인정보의 국외 이전)
          </h2>
          <p>
            회사는 이용자의 개인정보를 국외로 이전하지 않습니다. 모든
            개인정보는 국내 서버(AWS 서울 리전, ap-northeast-2)에서만
            저장·처리되며, 국내 데이터 거주 요건을 충족합니다.
          </p>
        </section>

        {/* 제9조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제9조 (개인정보의 안전성 확보조치)
          </h2>
          <p className="mb-3">
            회사는 이용자의 개인정보를 안전하게 관리하여 분실, 도난, 유출, 변조
            또는 훼손되지 않도록 다음과 같은 조치를 하고 있습니다.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>고유식별정보 암호화</strong>: 여권번호, 외국인등록번호는
              AES-256-GCM 방식으로 암호화하여 저장합니다.
            </li>
            <li>
              <strong>전송 구간 암호화</strong>: 모든 데이터 전송 시 TLS 1.2
              이상의 프로토콜을 사용합니다.
            </li>
            <li>
              <strong>접근 권한 관리</strong>: 관리자(Admin), 매니저(Manager),
              열람자(Viewer) 3단계 역할 기반 접근 제어(RBAC)를 적용합니다.
              열람자 등급은 고유식별정보가 마스킹된 형태로만 표시됩니다.
            </li>
            <li>
              <strong>감사 로그</strong>: 모든 개인정보 조회, 수정, 삭제,
              내보내기 이력은 감사 로그(Audit Log)에 자동으로 기록됩니다.
            </li>
            <li>
              <strong>접속기록 보관</strong>: 개인정보 처리시스템에 접속한
              기록(로그)을 최소 1년 이상 보관·관리합니다.
            </li>
            <li>
              <strong>소프트 삭제</strong>: 서비스 내 데이터 삭제는 논리 삭제
              방식으로 처리되어, 실수로 인한 데이터 유실을 방지합니다.
            </li>
          </ul>
        </section>

        {/* 제10조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제10조 (자동화된 의사결정에 관한 사항)
          </h2>
          <p>
            현재 회사는 이용자에게 법적 효과 또는 중대한 영향을 미치는
            자동화된 의사결정 시스템을 운영하지 않습니다. 향후 이러한 시스템을
            도입하는 경우, 그 존재와 로직, 이용자의 거부·설명 요구 권리를 본
            방침에 사전 고지합니다.
          </p>
        </section>

        {/* 제11조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제11조 (이용자 및 법정대리인의 권리와 그 행사 방법)
          </h2>
          <h3 className="font-bold text-gray-800 mb-2">
            이용자의 권리 및 행사 방법
          </h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              열람/수정: VisaCampus 대시보드 → 설정
            </li>
            <li>
              회원 탈퇴: 이메일(contact@visacampus.org)로 요청
            </li>
            <li>
              그 밖에 서면, 전자우편 등을 통하여 개인정보의 처리 정지 및 삭제를
              요구할 수 있습니다.
            </li>
            <li>
              <strong>개인정보 전송요구권</strong>: 이용자는 개인정보보호법
              제35조의2에 따라 본인의 개인정보를 본인 또는 제3자에게 전송하도록
              요구할 수 있습니다. 전송 요청은 이메일
              (contact@visacampus.org)로 접수하며, 접수일로부터 10영업일
              이내에 구조화된 형식(CSV 또는 JSON)으로 제공합니다.
            </li>
            <li>
              회사는 정정, 삭제 또는 전송 요청을 받은 경우, 처리를 완료하기
              전까지 해당 개인정보를 이용하거나 제공하지 않습니다.
            </li>
          </ol>
        </section>

        {/* 제12조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제12조 (개인정보 보호책임자 및 권익침해 구제방법)
          </h2>
          <p className="mb-3">
            회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 이용자의
            불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를
            지정하고 있습니다.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-bold text-gray-800">개인정보 보호책임자</p>
            <ul className="mt-2 space-y-1">
              <li>성명: 이승은</li>
              <li>직책: 대표</li>
              <li>
                연락처:{" "}
                <a
                  href="mailto:contact@visacampus.org"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  contact@visacampus.org
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-2">
            이용자의 권익침해 관련 자세한 도움이 필요하시면 아래 기관에 문의하여
            주시기 바랍니다.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              개인정보 침해신고센터 (한국인터넷진흥원 운영) — 전화: (국번없이)
              118 | privacy.kisa.or.kr
            </li>
            <li>
              개인정보 분쟁조정위원회 — 전화: (국번없이) 1833-6972 |
              www.kopico.go.kr
            </li>
            <li>
              대검찰청 사이버범죄수사단 — 전화: (국번없이) 1301 | www.spo.go.kr
            </li>
            <li>
              경찰청 사이버안전국 — 전화: 182 | ecrm.police.go.kr
            </li>
          </ul>
        </section>

        {/* 제13조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제13조 (개인정보 처리방침 변경에 관한 사항)
          </h2>
          <p>
            개인정보 처리방침은 시행일로부터 적용되며, 관련 법령 및 방침에 따른
            변경내용의 추가, 삭제 및 정정이 있는 경우에는 지체 없이 홈페이지를
            통하여 고지합니다.
          </p>
          <p className="mt-2 font-medium">변경 이력</p>
          <ul className="list-disc pl-5 mt-1">
            <li>2026-02-20: 최초 시행</li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
