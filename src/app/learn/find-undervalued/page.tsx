import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SearchCheck, TrendingDown, Target, ArrowRight, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: '저평가 주식 찾는 법 - ValueScope',
    description: '상승 확률이 큰 숨겨진 우량주를 찾는 5가지 핵심 지표와 실전 전략',
};

export default function FindUndervaluedStocks() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-blue-600">
                        <SearchCheck className="w-4 h-4 mr-2" />
                        저평가 주식 발굴 가이드
                    </Badge>
                    <h1 className="text-4xl font-bold mb-4">
                        상승확률이 큰 숨겨진 우량주 찾는 법
                    </h1>
                    <p className="text-xl text-gray-600">
                        시장이 아직 발견하지 못한 가치주를 찾아내는 5가지 핵심 전략
                    </p>
                </div>

                {/* 저평가란? */}
                <Card className="mb-8 border-2 border-blue-100">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <TrendingDown className="w-6 h-6 text-blue-600" />
                            저평가 주식이란?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                        <p className="text-lg leading-relaxed">
                            <strong className="text-blue-600">저평가 주식</strong>은 기업의 <strong>진짜 가치(내재가치)</strong>보다
                            <strong className="text-red-600"> 주가가 낮게</strong> 거래되는 주식입니다.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-lg mb-3 text-blue-900">💡 쉬운 예시</h4>
                            <p className="text-gray-700 mb-3">
                                1만원짜리 상품권이 할인마트에서 8,000원에 팔리고 있다면?
                                → <strong>2,000원의 이익</strong>을 얻을 수 있죠!
                            </p>
                            <p className="text-gray-700">
                                저평가 주식도 마찬가지입니다. <strong>10만원의 가치가 있는 기업</strong>이
                                주식시장에서 <strong>8만원에</strong> 거래되고 있다면,
                                <strong className="text-blue-600"> 미래에 10만원으로 오를 가능성</strong>이 큽니다!
                            </p>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                            <div className="flex gap-2">
                                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-700">
                                    <strong>주의:</strong> 주가가 낮다고 모두 저평가는 아닙니다!
                                    진짜로 가치 없는 기업은 싸게 거래되는 게 당연합니다.
                                    <strong className="text-blue-600"> &ldquo;좋은 기업&rdquo;이 &ldquo;싸게&rdquo;</strong> 거래될 때가 기회입니다.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 5가지 핵심 지표 */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Target className="w-6 h-6 text-purple-600" />
                            저평가 주식 찾는 5가지 핵심 지표
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-2">
                            아래 지표 중 3개 이상 충족하면 저평가 가능성이 높습니다
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* 1. P/E 비율 */}
                        <div className="border-l-4 border-blue-500 pl-6 py-2">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-blue-100 text-blue-600 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                    1
                                </div>
                                <h3 className="text-xl font-bold">P/E 비율 (주가수익비율)</h3>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <p className="font-mono text-lg mb-2">
                                    P/E = 주가 ÷ 주당순이익(EPS)
                                </p>
                                <p className="text-sm text-gray-600">
                                    &ldquo;주가가 1주당 이익의 몇 배로 거래되는가?&rdquo;
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-3 mb-3">
                                <div className="bg-green-50 p-3 rounded border border-green-200">
                                    <p className="font-semibold text-green-800 mb-1">✅ 저평가</p>
                                    <p className="text-2xl font-bold text-green-600">P/E &lt; 15</p>
                                    <p className="text-xs text-gray-600 mt-1">매수 검토</p>
                                </div>
                                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                    <p className="font-semibold text-yellow-800 mb-1">⚠️ 적정</p>
                                    <p className="text-2xl font-bold text-yellow-600">15 ≤ P/E ≤ 25</p>
                                    <p className="text-xs text-gray-600 mt-1">신중 검토</p>
                                </div>
                                <div className="bg-red-50 p-3 rounded border border-red-200">
                                    <p className="font-semibold text-red-800 mb-1">❌ 고평가</p>
                                    <p className="text-2xl font-bold text-red-600">P/E &gt; 25</p>
                                    <p className="text-xs text-gray-600 mt-1">위험 신호</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded">
                                <p className="text-sm font-semibold mb-2">📊 실제 예시</p>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    <li>• <strong>Johnson & Johnson (JNJ)</strong>: P/E 15.8 → 적정~저평가</li>
                                    <li>• <strong>Coca-Cola (KO)</strong>: P/E 23.4 → 적정 가격</li>
                                    <li>• <strong>Tesla (TSLA)</strong>: P/E 78.5 → 고평가 (성장 기대 반영)</li>
                                </ul>
                            </div>
                        </div>

                        <Separator />

                        {/* 2. P/B 비율 */}
                        <div className="border-l-4 border-green-500 pl-6 py-2">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-green-100 text-green-600 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                    2
                                </div>
                                <h3 className="text-xl font-bold">P/B 비율 (주가순자산비율)</h3>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <p className="font-mono text-lg mb-2">
                                    P/B = 주가 ÷ 주당순자산(BPS)
                                </p>
                                <p className="text-sm text-gray-600">
                                    &ldquo;기업이 망해도 남는 자산 대비 주가는?&rdquo;
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">P/B &lt; 1: 초저평가</p>
                                        <p className="text-sm text-gray-600">
                                            회사를 청산해도 이익! 하지만 망할 위기인지 확인 필요
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">P/B 1~3: 적정~저평가</p>
                                        <p className="text-sm text-gray-600">
                                            안정적인 제조업, 금융주에 좋은 범위
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">P/B &gt; 5: 고평가</p>
                                        <p className="text-sm text-gray-600">
                                            기술주는 예외 (무형자산 많음)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* 3. 배당수익률 */}
                        <div className="border-l-4 border-purple-500 pl-6 py-2">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-purple-100 text-purple-600 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                    3
                                </div>
                                <h3 className="text-xl font-bold">배당수익률</h3>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <p className="font-mono text-lg mb-2">
                                    배당수익률 = (연간 배당금 ÷ 주가) × 100
                                </p>
                                <p className="text-sm text-gray-600">
                                    &ldquo;주식을 사면 1년에 몇 % 배당금을 받을 수 있나?&rdquo;
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded mb-3">
                                <p className="font-semibold mb-2">💰 배당으로 저평가 찾기</p>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        <span><strong>배당수익률 3% 이상</strong> = 안정적인 우량주</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        <span><strong>배당 성장 연속 5년 이상</strong> = 믿을 수 있는 기업</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        <span><strong>배당성향 40~60%</strong> = 지속 가능한 배당</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-3 rounded">
                                <p className="text-sm font-semibold mb-2">🏆 배당 귀족주 (Dividend Aristocrats)</p>
                                <p className="text-sm text-gray-700 mb-2">
                                    25년 연속 배당 인상 기업 - 초저평가 기회 잘 옴!
                                </p>
                                <p className="text-xs text-gray-600">
                                    예: Johnson & Johnson, Coca-Cola, Procter & Gamble, McDonald&apos;s
                                </p>
                            </div>
                        </div>

                        <Separator />

                        {/* 4. ROE */}
                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-orange-100 text-orange-600 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                    4
                                </div>
                                <h3 className="text-xl font-bold">ROE (자기자본이익률)</h3>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <p className="font-mono text-lg mb-2">
                                    ROE = (순이익 ÷ 자기자본) × 100
                                </p>
                                <p className="text-sm text-gray-600">
                                    &ldquo;회사가 자본을 얼마나 효율적으로 사용하는가?&rdquo;
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="bg-green-50 p-4 rounded">
                                    <p className="font-semibold text-green-800 mb-2">✅ 우량 기업</p>
                                    <p className="text-2xl font-bold text-green-600 mb-2">ROE ≥ 15%</p>
                                    <p className="text-xs text-gray-600">
                                        자본을 효율적으로 사용하는 기업
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded">
                                    <p className="font-semibold text-blue-800 mb-2">🏆 초우량 기업</p>
                                    <p className="text-2xl font-bold text-blue-600 mb-2">ROE ≥ 20%</p>
                                    <p className="text-xs text-gray-600">
                                        워렌 버핏이 선호하는 수준
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* 5. 부채비율 */}
                        <div className="border-l-4 border-red-500 pl-6 py-2">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-red-100 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                                    5
                                </div>
                                <h3 className="text-xl font-bold">부채비율</h3>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <p className="font-mono text-lg mb-2">
                                    부채비율 = (부채 ÷ 자기자본) × 100
                                </p>
                                <p className="text-sm text-gray-600">
                                    &ldquo;빌린 돈이 얼마나 많은가?&rdquo;
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-green-50 p-3 rounded border border-green-200">
                                    <p className="font-semibold text-green-800">✅ 안전: 부채비율 &lt; 100%</p>
                                    <p className="text-sm text-gray-600">자기자본보다 빚이 적음 → 안정적</p>
                                </div>
                                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                    <p className="font-semibold text-yellow-800">⚠️ 주의: 100% ≤ 부채비율 ≤ 200%</p>
                                    <p className="text-sm text-gray-600">업종마다 다름 - 산업 평균 확인 필요</p>
                                </div>
                                <div className="bg-red-50 p-3 rounded border border-red-200">
                                    <p className="font-semibold text-red-800">❌ 위험: 부채비율 &gt; 200%</p>
                                    <p className="text-sm text-gray-600">빚이 너무 많음 → 위험 신호</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 실전 체크리스트 */}
                <Card className="mb-8 border-2 border-purple-200">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-purple-600" />
                            저평가 주식 찾기 체크리스트
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-white rounded border hover:border-purple-300 transition-colors">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">1. P/E 비율이 15 이하인가?</p>
                                    <p className="text-sm text-gray-600">시장 평균(15~20)보다 낮으면 저평가 가능성</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-white rounded border hover:border-purple-300 transition-colors">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">2. 배당수익률이 3% 이상인가?</p>
                                    <p className="text-sm text-gray-600">안정적인 현금흐름 = 우량 기업</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-white rounded border hover:border-purple-300 transition-colors">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">3. ROE가 15% 이상인가?</p>
                                    <p className="text-sm text-gray-600">자본을 효율적으로 사용하는 기업</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-white rounded border hover:border-purple-300 transition-colors">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">4. 부채비율이 100% 이하인가?</p>
                                    <p className="text-sm text-gray-600">재무 안정성 확보</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-white rounded border hover:border-purple-300 transition-colors">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">5. 5년간 매출/이익이 성장하고 있는가?</p>
                                    <p className="text-sm text-gray-600">일시적 저평가가 아닌 진짜 가치주 확인</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 bg-white rounded border hover:border-purple-300 transition-colors">
                                <input type="checkbox" className="mt-1" />
                                <div>
                                    <p className="font-semibold">6. 해당 산업이 성장 또는 안정 산업인가?</p>
                                    <p className="text-sm text-gray-600">사양 산업은 피하기</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <p className="font-semibold text-lg mb-2">🎯 최종 판단 기준</p>
                            <ul className="space-y-1 text-sm">
                                <li>✅ <strong>6개 모두 체크</strong>: 매우 좋은 투자 기회!</li>
                                <li>✅ <strong>4~5개 체크</strong>: 좋은 저평가 종목</li>
                                <li>⚠️ <strong>2~3개 체크</strong>: 신중히 검토 필요</li>
                                <li>❌ <strong>1개 이하</strong>: 투자 보류 권장</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* 참고 자료 */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">📚 더 배우기</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <a
                            href="https://www.investopedia.com/terms/u/undervalued.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border transition-colors"
                        >
                            <div>
                                <h5 className="font-semibold">Investopedia - 저평가 주식이란?</h5>
                                <p className="text-sm text-gray-600">영문 자료, 저평가 개념 상세 설명</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-blue-600" />
                        </a>

                        <Link href="/learn/pe-ratio">
                            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border transition-colors cursor-pointer">
                                <div>
                                    <h5 className="font-semibold">P/E 비율 완벽 가이드</h5>
                                    <p className="text-sm text-gray-600">주가수익비율 심화 학습</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-blue-600" />
                            </div>
                        </Link>

                        <Link href="/screener">
                            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border transition-colors cursor-pointer">
                                <div>
                                    <h5 className="font-semibold">종목 스크리너 사용하기</h5>
                                    <p className="text-sm text-gray-600">실제로 저평가 종목 찾아보기</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-blue-600" />
                            </div>
                        </Link>
                    </CardContent>
                </Card>

                {/* Next Steps */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/screener">
                        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600">
                            저평가 종목 찾으러 가기
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/learn/value-investing">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            가치투자 전략 배우기
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
