import type { Metadata } from "next";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "환불규정 - VisaCampus | 유학생 비자 관리 SaaS 환불 안내",
  description:
    "VisaCampus 환불규정 안내. 7일 이내 전액 환불, 연간 구독 30일 이내 일할 환불 등 전자상거래법을 준수하는 SaaS 구독 서비스 환불 기준과 결제 수단별 처리 방식을 확인하세요. 문의: contact@visacampus.org",
};

export default function RefundPage() {
  return (
    <LegalLayout currentPath="/refund">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        환불규정
      </h1>
      <p className="text-sm text-gray-500 mb-8">시행일: 2026-02-20</p>

      <div className="text-sm text-gray-600 space-y-8 leading-relaxed">
        {/* 전문 */}
        <p>
          불편함(이하 &lsquo;회사&rsquo;)이 운영하는
          &lsquo;VisaCampus&rsquo; 서비스는 「전자상거래 등에서의 소비자 보호에
          관한 법률」을 준수하여 다음과 같이 환불규정을 운영합니다.
        </p>
        <p>
          본 환불 정책의 번역본과 한국어 원본의 내용이 다를 경우, 한국어판을
          우선으로 합니다.
        </p>

        {/* 제1조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제1조 (환불 기준)
          </h2>
          <p className="mb-3">
            VisaCampus는 월 또는 연 단위 구독형 서비스(SaaS)이며, 환불은 다음
            기준에 따라 처리됩니다.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>무료 파일럿 기간</strong>: 무료 파일럿(시범 운영) 기간
              중에는 별도 결제가 발생하지 않으므로, 파일럿 종료 후 유료 전환을
              원하지 않으시면 별도 조치 없이 종료됩니다.
            </li>
            <li>
              <strong>유료 구독 개시 후 7일 이내</strong>: 유료 구독 결제일로부터
              7일 이내에 해지를 요청하시면 전액 환불합니다. 다만, 해당 기간 내
              FIMS 내보내기 또는 데이터 일괄 임포트 기능을 실행한 이력이 있는
              경우에는 해당 기능 사용분을 공제한 후 환불합니다.
            </li>
            <li>
              <strong>유료 구독 개시 후 7일 초과</strong>: 구독 해지를 요청하시면
              다음 결제 주기부터 과금이 중단됩니다. 이미 결제된 잔여 기간에 대한
              일할 환불은 제공하지 않으며, 해당 기간 종료 시까지 서비스를 계속
              이용하실 수 있습니다.
            </li>
            <li>
              <strong>연간 구독</strong>: 연간 구독 결제 후 30일 이내 해지
              요청 시, 이용일수에 해당하는 월 정가 기준 금액을 공제한 나머지를
              환불합니다. 30일 초과 시에는 환불이 제공되지 않습니다.
            </li>
          </ol>
        </section>

        {/* 제2조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제2조 (주요 환불 사유별 처리 기준)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="환불 사유별 처리 기준">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold w-8">
                    NO.
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    사유
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    환불규정
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">1</td>
                  <td className="border border-gray-200 px-3 py-2">
                    기관(대학)의 사정으로 인한 구독 해지
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    제1조의 환불 기준에 따라 처리
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">2</td>
                  <td className="border border-gray-200 px-3 py-2">
                    중복 결제가 발생한 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    중복 결제 금액 전액 환불
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">3</td>
                  <td className="border border-gray-200 px-3 py-2">
                    결제 금액이 청구 금액과 상이한 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    차액 전액 환불 또는 추가 결제로 정산
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">4</td>
                  <td className="border border-gray-200 px-3 py-2">
                    회사 귀책 사유로 서비스를 정상 제공하지 못한 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    장애 기간에 해당하는 이용료를 일할 계산하여 환불 또는 이용
                    기간 연장
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">5</td>
                  <td className="border border-gray-200 px-3 py-2">
                    구독 플랜 변경(상위 → 하위) 시 차액
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    다음 결제 주기부터 변경된 플랜 요금 적용. 이미 결제한 기간의
                    차액 환불은 제공하지 않음
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 제3조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제3조 (환불 요청 방법)
          </h2>
          <p>환불 요청은 다음 방법으로 진행하실 수 있습니다.</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              이메일:{" "}
              <a
                href="mailto:contact@visacampus.org"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                contact@visacampus.org
              </a>
            </li>
            <li>VisaCampus 대시보드 내: 설정 → 구독 관리 → 해지 요청</li>
          </ul>
        </section>

        {/* 제4조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제4조 (환불 처리 기한)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              환불 요청 접수 후 <strong>영업일 기준 3일 이내</strong>에
              처리됩니다(「전자상거래 등에서의 소비자 보호에 관한 법률」
              제18조에 따름).
            </li>
            <li>
              회사가 정당한 사유 없이 환불을 지연하는 경우, 지연 기간에 대해
              연 15%의 지연배상금을 가산하여 환불합니다(동법 제18조 제2항).
            </li>
            <li>
              3영업일 이후에도 환불이 완료되지 않은 경우{" "}
              <a
                href="mailto:contact@visacampus.org"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                contact@visacampus.org
              </a>
              로 문의해주세요.
            </li>
          </ol>
        </section>

        {/* 제5조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제5조 (결제 수단별 환불 방식)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="결제 수단별 환불 방식">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    결제 수단
                  </th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                    환불 방식
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    카드/간편결제
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    결제하신 수단으로 자동 환불
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    무통장입금/계좌이체
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    환불 신청인 명의의 한국 은행 계좌 정보 제출 후 입금 처리
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2">
                    세금계산서 결제
                  </td>
                  <td className="border border-gray-200 px-3 py-2">
                    수정 세금계산서 발행 후, 기관 지정 계좌로 환불 처리
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            카드사 정책에 따라 승인 취소 후 최대 7영업일이 소요될 수 있습니다.
          </p>
        </section>

        {/* 제6조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제6조 (기타 유의사항)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              구독 해지 시에도 계약 기간 종료 시까지 데이터 접근 및 내보내기가
              가능합니다. 계약 기간 종료 후 30일간 데이터를 보관하며, 이후 완전히
              삭제됩니다.
            </li>
            <li>
              결제 방식에 따라 발생하는 PG사 환불 수수료는 본인 부담이 될 수
              있습니다.
            </li>
            <li>
              본 환불 정책은 「전자상거래 등에서의 소비자 보호에 관한 법률」을
              준수합니다.
            </li>
            <li>
              환불 정책은 사전 고지 후 변경될 수 있으며, 홈페이지 또는 이메일로
              안내드립니다.
            </li>
          </ul>
        </section>

        {/* 제7조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제7조 (변경 이력)
          </h2>
          <p>
            환불규정은 시행일로부터 적용되며, 관련 법령 및 방침에 따른
            변경내용의 추가, 삭제 및 정정이 있는 경우에는 지체 없이 홈페이지를
            통하여 고지합니다.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>2026-02-20: 최초 시행</li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
