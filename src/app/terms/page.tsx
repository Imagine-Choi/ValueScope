import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: '이용약관 | ValueScope',
    description: 'ValueScope 서비스 이용약관',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link href="/">
                    <Button variant="ghost" className="mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        홈으로 돌아가기
                    </Button>
                </Link>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">이용약관</CardTitle>
                        <p className="text-sm text-gray-500 mt-2">최종 업데이트: 2025년 10월 5일</p>
                    </CardHeader>
                    <CardContent className="prose max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold mb-3">제1조 (목적)</h2>
                            <p>
                                본 약관은 ValueScope(이하 &quot;서비스&quot;)가 제공하는 주식 스크리닝 및 포트폴리오 시뮬레이션 서비스의
                                이용조건 및 절차, 이용자와 서비스 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">제2조 (서비스의 제공)</h2>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>
                                    <strong>주식 스크리너</strong>: 미국 주식 시장의 종목을 다양한 지표로 필터링하는 기능
                                </li>
                                <li>
                                    <strong>포트폴리오 시뮬레이터</strong>: 가상의 포트폴리오를 구성하고 시뮬레이션하는 기능
                                </li>
                                <li>
                                    <strong>투자 가이드</strong>: 초보자를 위한 투자 교육 콘텐츠 제공
                                </li>
                                <li>
                                    <strong>뉴스 제공</strong>: 주식 시장 관련 뉴스 및 정보 제공
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">제3조 (면책 조항)</h2>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                                <p className="font-bold text-red-700 mb-2">⚠️ 중요 알림</p>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        1. <strong>투자 권유 금지</strong>: 본 서비스에서 제공하는 모든 정보는 교육 및 정보 제공 목적이며,
                                        투자 권유나 매매 추천이 아닙니다.
                                    </li>
                                    <li>
                                        2. <strong>투자 책임</strong>: 모든 투자 결정의 책임은 전적으로 이용자 본인에게 있으며,
                                        투자로 인한 손실에 대해 서비스는 어떠한 책임도 지지 않습니다.
                                    </li>
                                    <li>
                                        3. <strong>정보의 정확성</strong>: 서비스는 정보의 정확성을 위해 노력하나,
                                        실시간 시장 데이터와 차이가 있을 수 있습니다.
                                    </li>
                                    <li>
                                        4. <strong>전문가 상담 권장</strong>: 실제 투자 전 반드시 전문가와 상담하시기 바랍니다.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">제4조 (이용자의 의무)</h2>
                            <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>타인의 개인정보 도용</li>
                                <li>서비스의 정상적인 운영을 방해하는 행위</li>
                                <li>허위 정보 입력 또는 유포</li>
                                <li>불법적이거나 부적절한 목적으로 서비스 이용</li>
                                <li>서비스의 정보를 무단으로 복제, 배포, 상업적 이용</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">제5조 (서비스의 중단)</h2>
                            <p>
                                서비스는 다음의 경우 서비스 제공을 중단할 수 있습니다:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>시스템 점검, 보수 또는 공사가 필요한 경우</li>
                                <li>천재지변, 국가 비상사태 등 불가항력적 사유가 있는 경우</li>
                                <li>외부 API 제공업체의 서비스 중단</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">제6조 (저작권)</h2>
                            <p>
                                서비스가 작성한 모든 콘텐츠에 대한 저작권은 서비스에 있습니다.
                                이용자는 서비스의 사전 승낙 없이 콘텐츠를 복제, 배포, 전송할 수 없습니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">제7조 (약관의 변경)</h2>
                            <p>
                                서비스는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.
                                약관이 변경되는 경우 서비스는 변경 사항을 사전에 공지합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">제8조 (분쟁 해결)</h2>
                            <p>
                                본 약관과 관련하여 분쟁이 발생한 경우, 양 당사자는 원만한 협의를 통해 해결하도록 노력합니다.
                                협의가 이루어지지 않을 경우 관할 법원은 서비스 본사 소재지 법원으로 합니다.
                            </p>
                        </section>

                        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                            <p className="text-sm text-gray-600">
                                본 약관은 2025년 10월 5일부터 시행됩니다.
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                문의: legal@valuescope.com
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
