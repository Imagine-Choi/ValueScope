import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: '개인정보처리방침 | ValueScope',
    description: 'ValueScope의 개인정보 수집 및 처리 방침',
};

export default function PrivacyPage() {
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
                        <CardTitle className="text-3xl">개인정보처리방침</CardTitle>
                        <p className="text-sm text-gray-500 mt-2">최종 업데이트: 2025년 10월 5일</p>
                    </CardHeader>
                    <CardContent className="prose max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold mb-3">1. 개인정보 수집 항목</h2>
                            <p>ValueScope는 현재 다음과 같은 정보를 수집할 수 있습니다:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li><strong>필수 항목</strong>: 없음 (현재 회원가입 미지원)</li>
                                <li><strong>자동 수집 항목</strong>: IP 주소, 쿠키, 방문 기록, 기기 정보</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">2. 개인정보의 수집 및 이용 목적</h2>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>서비스 제공 및 개선</li>
                                <li>통계 분석 및 이용 패턴 파악</li>
                                <li>맞춤형 콘텐츠 제공</li>
                                <li>서비스 안정성 유지</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">3. 개인정보의 보유 및 이용 기간</h2>
                            <p>
                                수집된 정보는 서비스 제공 기간 동안 보유되며, 이용 목적 달성 후 즉시 파기됩니다.
                                단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">4. 개인정보의 제3자 제공</h2>
                            <p>
                                ValueScope는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
                                다만, 다음의 경우 예외로 합니다:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>이용자가 사전에 동의한 경우</li>
                                <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 요구된 경우</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">5. 쿠키 사용</h2>
                            <p>
                                ValueScope는 서비스 개선을 위해 쿠키를 사용할 수 있습니다.
                                쿠키는 브라우저 설정을 통해 거부할 수 있으나, 일부 서비스 이용에 제한이 있을 수 있습니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">6. 이용자의 권리</h2>
                            <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>개인정보 열람 요구</li>
                                <li>개인정보 정정 및 삭제 요구</li>
                                <li>개인정보 처리 정지 요구</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3">7. 문의</h2>
                            <p>
                                개인정보 관련 문의사항이 있으시면 아래로 연락주시기 바랍니다:
                            </p>
                            <p className="font-semibold">
                                이메일: privacy@valuescope.com
                            </p>
                        </section>

                        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                            <p className="text-sm text-gray-600">
                                본 방침은 2025년 10월 5일부터 시행됩니다.
                                개인정보처리방침은 관련 법령 및 지침의 변경이나 서비스 정책 변경에 따라 수정될 수 있습니다.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
