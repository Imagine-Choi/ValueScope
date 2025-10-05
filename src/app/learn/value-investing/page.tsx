import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: '가치투자 전략 | ValueScope',
    description: '워런 버핏처럼 저평가된 우량 기업을 찾아 장기 투자하기',
};

export default function ValueInvestingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-12">
                <div className="container mx-auto px-4">
                    <Link href="/learn">
                        <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            학습 센터로 돌아가기
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-10 h-10" />
                        <h1 className="text-4xl font-bold">가치투자 전략</h1>
                    </div>
                    <p className="text-xl text-orange-100">
                        워런 버핏의 투자 철학으로 장기 부를 쌓기
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">가치투자란?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg">
                            <strong>가치투자(Value Investing)</strong>는 시장에서 저평가된 우량 기업의 주식을 싸게 사서
                            장기 보유하는 투자 전략입니다. 단기 시세 차익이 아닌, 기업의 본질 가치에 집중합니다.
                        </p>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                            <h3 className="font-bold text-xl mb-3">워런 버핏의 명언</h3>
                            <blockquote className="italic text-gray-700 border-l-4 border-orange-600 pl-4">
                                &quot;가격은 당신이 지불하는 것이고, 가치는 당신이 얻는 것이다.&quot;
                                <br />
                                &quot;좋은 회사를 합리적인 가격에 사는 것이, 평범한 회사를 싸게 사는 것보다 낫다.&quot;
                            </blockquote>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">가치투자 5대 원칙</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-4">
                            <div className="p-4 border-l-4 border-orange-600 bg-gray-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-orange-600">1</Badge>
                                    <h4 className="font-bold">본질 가치 분석</h4>
                                </div>
                                <p className="text-sm text-gray-700">
                                    주가가 아닌 기업의 실제 가치(재무제표, 사업 모델, 경쟁력)를 분석하세요.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-orange-600 bg-gray-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-orange-600">2</Badge>
                                    <h4 className="font-bold">안전마진 확보</h4>
                                </div>
                                <p className="text-sm text-gray-700">
                                    본질 가치보다 20~30% 이상 저렴한 가격에 매수. 예측 오류에 대한 버퍼.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-orange-600 bg-gray-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-orange-600">3</Badge>
                                    <h4 className="font-bold">장기 투자</h4>
                                </div>
                                <p className="text-sm text-gray-700">
                                    최소 3~5년 이상 보유. 복리 효과와 기업 가치 실현 시간 필요.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-orange-600 bg-gray-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-orange-600">4</Badge>
                                    <h4 className="font-bold">경제적 해자</h4>
                                </div>
                                <p className="text-sm text-gray-700">
                                    경쟁 우위가 있는 기업 선택 (브랜드, 특허, 네트워크 효과 등).
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-orange-600 bg-gray-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-orange-600">5</Badge>
                                    <h4 className="font-bold">감정 배제</h4>
                                </div>
                                <p className="text-sm text-gray-700">
                                    시장 공포와 탐욕에 휘둘리지 말고 냉정하게 판단.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">저평가 종목 찾는 체크리스트</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">P/E 비율이 업종 평균보다 낮은가?</p>
                                    <p className="text-sm text-gray-600">저평가 신호. 단, 적자 기업 제외.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">P/B 비율이 1.5 이하인가?</p>
                                    <p className="text-sm text-gray-600">자산 대비 저렴. 특히 1 이하면 저평가 가능성 높음.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">배당수익률이 3% 이상인가?</p>
                                    <p className="text-sm text-gray-600">안정적 현금 흐름 + 주주 환원 의지.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">5년간 실적이 안정적인가?</p>
                                    <p className="text-sm text-gray-600">일시적 문제가 아닌 구조적 경쟁력.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">부채비율이 낮은가?</p>
                                    <p className="text-sm text-gray-600">재무 안정성. 업종별 차이 있지만 100% 이하 권장.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">이해할 수 있는 사업 모델인가?</p>
                                    <p className="text-sm text-gray-600">버핏: &quot;이해하지 못하면 투자하지 마라&quot;</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">실전 예시: Apple (AAPL)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">P/E 비율</p>
                                <p className="text-2xl font-bold text-green-700">29.8 ✅</p>
                                <p className="text-xs text-gray-600">기술주 평균 대비 적정</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">배당수익률</p>
                                <p className="text-2xl font-bold text-green-700">0.52% ⚠️</p>
                                <p className="text-xs text-gray-600">낮지만 자사주 매입 활발</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">경제적 해자</p>
                                <p className="text-xl font-bold text-green-700">매우 강함 ✅</p>
                                <p className="text-xs text-gray-600">브랜드, 생태계, 고객 충성도</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">재무 안정성</p>
                                <p className="text-xl font-bold text-green-700">우수 ✅</p>
                                <p className="text-xs text-gray-600">막대한 현금, 낮은 부채</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 italic">
                            → 가치투자 관점에서 장기 보유 적합 종목
                        </p>
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Link href="/screener" className="flex-1">
                        <Button className="w-full" size="lg">
                            가치주 스크리너 사용하기
                        </Button>
                    </Link>
                    <Link href="/learn" className="flex-1">
                        <Button variant="outline" className="w-full" size="lg">
                            학습 센터 홈
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
