import type { Metadata } from "next";
import LegalLayout from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "이용약관 - VisaCampus",
  description:
    "VisaCampus 서비스 이용약관. 대학 국제처를 위한 유학생 비자 관리 SaaS 대시보드 툴의 이용 조건을 안내합니다.",
};

export default function TosPage() {
  return (
    <LegalLayout currentPath="/tos">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        이용약관
      </h1>
      <p className="text-sm text-gray-500 mb-8">시행일: 2026-02-20</p>

      <div className="text-sm text-gray-600 space-y-8 leading-relaxed">
        {/* 제1조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제1조 (목적)
          </h2>
          <p>
            본 VisaCampus 서비스 이용약관(이하 &ldquo;본 약관&rdquo;)은
            불편함(이하 &ldquo;회사&rdquo;)이 운영하는 인터넷 사이트
            https://www.visacampus.org 및 https://app.visacampus.org(이하
            &ldquo;사이트&rdquo;)를 통해 회사가 제공하는 유학생 비자 관리 SaaS
            서비스(이하 &ldquo;본 서비스&rdquo;)의 이용 조건 및 절차, 회원과
            회사의 권리·의무 등 제반사항을 정함에 그 목적이 있습니다.
          </p>
        </section>

        {/* 제2조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제2조 (용어의 정의)
          </h2>
          <p className="mb-3">
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 본 약관에서
            정의되지 않은 용어는 관련 법령 및 일반 거래 관행에 따라 정의된 의미를
            가집니다.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>본 서비스</strong>란, 회사가 회원에게 본 약관 및
              정책에서 정하는 기간 단위로 제공하는 유학생 비자 관리 SaaS
              대시보드 툴을 의미합니다.
            </li>
            <li>
              <strong>회원</strong>이란, 본 약관에 동의하고 이용 신청 및
              이용료 결제 절차를 거쳐 본 서비스에 가입한 대학교, 교육기관,
              또는 그에 준하는 조직 및 소속 담당자를 의미합니다.
            </li>
            <li>
              <strong>이용료</strong>란, 본 서비스를 이용하고자 하는 회원이
              회사에 지불하는 구독 요금을 의미합니다.
            </li>
            <li>
              <strong>유학생 데이터</strong>란, 회원이 본 서비스에 입력하거나
              임포트하는 유학생의 개인정보, 비자정보, 학적정보 등 일체의 데이터를
              의미합니다.
            </li>
          </ol>
        </section>

        {/* 제3조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제3조 (약관의 효력)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사는 본 약관에 규정되지 않은 세부적인 내용에 대해 개별
              정책(이하 &ldquo;정책&rdquo;)을 제정하여 운영할 수 있으며, 해당
              내용을 사이트를 통하여 게시합니다. 정책은 본 약관과 더불어 이용
              계약의 일부를 구성합니다.
            </li>
            <li>
              본 약관 및 정책의 번역본과 원본의 내용이 상이할 경우, 한국어
              이용약관이 우선합니다.
            </li>
          </ol>
        </section>

        {/* 제4조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제4조 (약관의 게시 및 개정)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 사이트에 게시합니다.
            </li>
            <li>
              회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관
              및 정책을 개정할 수 있으며, 개정 내용과 적용일자를 명시하여
              사이트를 통해 적용일 7일 전부터 공지합니다. 회원에게 불리한 변경의
              경우 적용일 30일 전부터 공지합니다.
            </li>
            <li>
              회원이 개정약관에 동의하지 않는 경우 적용일 이전에 거부 의사를
              표시하고 이용 계약을 해지할 수 있습니다.
            </li>
            <li>
              회사가 제2항에 따라 공지하면서 적용일 전까지 의사표시가 없으면
              동의한 것으로 본다는 뜻을 명확하게 고지하였음에도 회원이 명시적으로
              거부 의사를 표명하지 아니한 경우, 개정약관에 동의한 것으로 봅니다.
            </li>
          </ol>
        </section>

        {/* 제5조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제5조 (이용 계약의 성립 및 효력)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              이용 계약은 회원이 본 약관에 동의한 뒤 결제 수단을 선택하고
              결제 정보를 입력하는 등 이용 신청 절차를 완료하고, 회사가 이를
              승낙함으로써 성립합니다.
            </li>
            <li>
              회사는 이용 신청이 다음 각 호에 해당하는 경우 승낙하지 아니하거나
              유보할 수 있으며, 승낙 이후에도 해당 사유가 확인된 경우 이용 계약을
              해제할 수 있습니다.
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>허위 정보를 기재하여 이용 신청을 한 경우</li>
                <li>본 약관을 위반하여 이용 신청을 한 경우</li>
                <li>
                  이전에 본 약관 위반으로 이용 제한 조치를 받은 자가 재신청한
                  경우
                </li>
                <li>
                  기타 이용 신청을 승낙하지 아니할 합리적인 사유가 있다고 회사가
                  판단하는 경우
                </li>
              </ul>
            </li>
            <li>
              이용 계약은 회원이 신청 시 선택한 구독 기간이 만료되는 날까지
              유효합니다. 구독 기간 만료 전 별도 해지 의사가 없으면 동일 조건으로
              자동 갱신됩니다.
            </li>
          </ol>
        </section>

        {/* 제6조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제6조 (서비스 및 이용료)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사는 이용료를 결제한 회원에게 본 서비스를 제공합니다.
              서비스의 구체적인 내용, 제공 방법, 이용료 등은 사이트를 통해
              공지합니다.
            </li>
            <li>
              이용료는 회원이 등록한 유학생 수를 기준으로 산정되며, 구체적인
              요금 체계는 별도 가격 정책에 따릅니다.
            </li>
            <li>
              회사는 필요한 경우 이용료를 변경할 수 있으며, 변경 시 사전에
              통지하고 회원의 동의를 받아야 합니다.
            </li>
          </ol>
        </section>

        {/* 제7조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제7조 (결제 수단 및 결제일자 등)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회원은 이용 신청 시 결제 수단 및 결제 정보를 입력해야 합니다.
              세금계산서 발행을 통한 결제도 가능합니다.
            </li>
            <li>
              회사는 결제가 이루어지면 회원에게 결제 내용을 이메일 등
              전자적 방법으로 통지합니다.
            </li>
            <li>
              등록한 결제 정보에 따른 결제가 정상적으로 이루어지지 아니하는 경우,
              회사는 회원에게 통지한 후 일정 기간 내 재결제를 요청할 수
              있으며, 재결제가 이루어지지 않으면 이용 계약이 효력을 상실할 수
              있습니다.
            </li>
          </ol>
        </section>

        {/* 제8조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제8조 (해지 신청 및 환불)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회원은 이메일(contact@visacampus.org) 또는 대시보드 내 설정
              메뉴를 통해 이용 계약의 해지를 신청할 수 있습니다.
            </li>
            <li>
              환불은 별도의{" "}
              <a
                href="/refund"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                환불규정
              </a>
              에 따라 처리됩니다.
            </li>
            <li>
              해지 시에도 계약 기간 종료 시까지 서비스 이용이 가능하며, 기간
              종료 후 30일간 데이터 내보내기가 가능합니다.
            </li>
          </ol>
        </section>

        {/* 제9조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제9조 (데이터 소유권 및 관리)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회원이 본 서비스에 입력하거나 임포트한 유학생 데이터의
              소유권은 해당 회원에 귀속됩니다. 회사는 서비스 제공 목적
              외에 해당 데이터를 이용하지 않습니다.
            </li>
            <li>
              회원은 언제든지 엑셀(xlsx) 또는 CSV 형식으로 전체 데이터를
              내보낼 수 있습니다.
            </li>
            <li>
              회사는 회원의 유학생 데이터를 개인정보보호법에 따라
              안전하게 처리하며, 구체적인 사항은{" "}
              <a
                href="/policy/privacy"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                개인정보 처리방침
              </a>
              에 따릅니다.
            </li>
            <li>
              이용 계약 종료 후 30일이 경과하면 회원의 유학생 데이터는
              복구할 수 없는 방법으로 완전히 삭제됩니다. 삭제 완료 후 기관
              회원에게 삭제 확인서를 제공합니다.
            </li>
          </ol>
        </section>

        {/* 제10조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제10조 (금지행위 및 이용 제한 등)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사는 회원이 다음 각호의 행위를 한 경우, 사전
              통지 없이 이용 계약을 해제 또는 해지하거나 서비스 이용을 제한할 수
              있습니다.
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  본 약관에 따른 권리 또는 의무의 전부 또는 일부를 제3자에게
                  양도하는 행위
                </li>
                <li>
                  제3자의 명의 또는 결제 정보를 사용하여 서비스를 이용하는 행위
                </li>
                <li>
                  본 서비스의 정상적인 운영을 방해하거나, 다른 회원의 서비스
                  이용을 방해하는 행위
                </li>
                <li>
                  본 서비스를 불법 또는 부당한 목적으로 활용하는 행위
                </li>
                <li>
                  서비스를 통해 취득한 타 기관의 정보를 무단으로 수집, 이용,
                  공개하는 행위
                </li>
              </ul>
            </li>
            <li>
              회사의 해제·해지 및 이용 제한에 대하여 회원은 회사가 정한
              절차에 따라 이의 신청을 할 수 있으며, 정당하다고 인정되는 경우
              서비스 이용을 재개합니다.
            </li>
          </ol>
        </section>

        {/* 제11조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제11조 (회사의 권리와 의무)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사는 본 약관에 따라 서비스를 안정적으로 제공하기 위하여 최선을
              다합니다.
            </li>
            <li>
              회사는 운영상·기술상의 필요 또는 기타 상당한 이유가 있는 경우
              서비스의 전부 또는 일부를 변경할 수 있으며, 변경 전 사이트에 관련
              사항을 게시합니다. 회원에게 불리한 변경의 경우 별도로 통지합니다.
            </li>
            <li>
              회사는 회원으로부터 제기되는 불편사항 및 문제점에 대해
              정당하다고 판단될 경우 적극적으로 해결하기 위하여 노력합니다.
              신속한 해결이 어려운 경우 사유와 처리 일정을 통지합니다.
            </li>
            <li>
              회사는 서비스 이용 과정에서 생성된 통계 데이터(특정 기관 또는
              개인을 식별할 수 없는 형태)를 서비스 개선 등의 목적으로 활용할 수
              있습니다.
            </li>
          </ol>
        </section>

        {/* 제12조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제12조 (회원의 권리와 의무)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회원은 본 약관 및 관련 법령을 준수하며 서비스를 이용할 수 있는
              권리를 가집니다.
            </li>
            <li>
              회원은 소속 담당자의 계정 관리에 대한 책임을 부담하며,
              계정의 부정 사용이 발견된 경우 즉시 회사에 통보하여야 합니다.
            </li>
            <li>
              회원은 본 서비스를 통해 관리하는 유학생 개인정보의 처리에 대한
              법적 책임을 부담합니다. 회사는 개인정보 처리의 수탁자로서
              개인정보보호법에 따른 안전 관리 의무를 이행합니다.
            </li>
            <li>
              회원은 유학생 데이터를 본 서비스에 입력하기 전에 해당
              정보주체로부터 필요한 동의를 취득하여야 합니다.
            </li>
          </ol>
        </section>

        {/* 제13조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제13조 (서비스의 중단 및 면책)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사는 다음 각호의 경우 서비스를 일시 중단할 수 있으며, 이로 인한
              책임이 면제됩니다.
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>회사가 통제할 수 없는 기술적 장애</li>
                <li>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
                <li>
                  정전, 설비 장애, 이용량 폭주 등으로 정상적인 서비스 이용에
                  지장이 있는 경우
                </li>
                <li>
                  천재지변, 전염병의 창궐 또는 이에 준하는 불가항력에 의한 경우
                </li>
              </ul>
            </li>
            <li>
              회사는 회원의 귀책사유로 인한 서비스 이용 장애에 대하여
              책임지지 않습니다.
            </li>
            <li>
              회사의 귀책사유로 회원에게 발생한 손해는 해당 회원이
              결제한 직전 1개월 이용료를 한도로 합니다.
            </li>
          </ol>
        </section>

        {/* 제14조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제14조 (서비스 종료)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사가 본 서비스를 종료하고자 할 경우 종료일 90일 전에 사이트에
              게시하고 회원에게 통지합니다.
            </li>
            <li>
              서비스 종료 시 회원에게 전체 데이터 내보내기를 위한 충분한
              기간(최소 30일)을 제공합니다.
            </li>
          </ol>
        </section>

        {/* 제15조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제15조 (통지)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              회사가 회원에 대한 통지를 하는 경우, 회원이 등록한
              이메일 주소 또는 사이트 내 공지를 통해 할 수 있습니다.
            </li>
            <li>
              전체 회원에 대한 통지의 경우 7일 이상 사이트에 게시함으로써
              개별 통지에 갈음할 수 있습니다.
            </li>
            <li>
              회원은 실제로 연락이 가능한 이메일 주소 등의 정보를 최신으로
              유지하여야 하며, 이를 소홀히 하여 발생한 불이익에 대해서는
              보호받지 못합니다.
            </li>
          </ol>
        </section>

        {/* 제16조 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            제16조 (준거법 등)
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>이용 계약의 준거법은 대한민국 법률로 합니다.</li>
            <li>
              이용 계약과 관련하여 회사와 회원 간에 발생하는 모든 분쟁은
              민사소송법상의 관할 법원에서 해결합니다.
            </li>
          </ol>
        </section>

        {/* 부칙 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">부칙</h2>
          <p>본 약관은 2026년 2월 20일부터 시행됩니다.</p>
          <p className="mt-2 font-medium">변경 이력</p>
          <ul className="list-disc pl-5 mt-1">
            <li>2026-02-20: 최초 시행</li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
