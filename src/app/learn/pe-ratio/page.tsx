import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, Calculator } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'P/E 비율 완벽 가이드 | ValueScope',
    description: '주가수익비율(P/E Ratio)의 의미와 활용법을 초보자도 이해하기 쉽게 설명합니다',
};

export default function PERatioPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
                <div className="container mx-auto px-4">
                    <Link href="/learn">
                        <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            학습 센터로 돌아가기
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-10 h-10" />
                        <h1 className="text-4xl font-bold">P/E 비율 완벽 가이드</h1>
                    </div>
                    <p className="text-xl text-blue-100">
                        주가수익비율(Price-to-Earnings Ratio) 이해하고 활용하기
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Introduction */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">P/E 비율이란?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg leading-relaxed">
                            <strong>P/E 비율(Price-to-Earnings Ratio)</strong>은 주가를 주당순이익(EPS)으로 나눈 값입니다.
                            쉽게 말해, 회사가 1년 동안 버는 돈 대비 주가가 얼마나 비싼지를 보여주는 지표입니다.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-blue-600" />
                                계산 공식
                            </h3>
                            <div className="text-center py-4">
                                <p className="text-3xl font-bold text-blue-700 mb-2">
                                    P/E 비율 = 주가 ÷ 주당순이익(EPS)
                                </p>
                                <p className="text-gray-600">
                                    예) 주가 $100, EPS $5 → P/E = 20
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* How to Interpret */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">P/E 비율 해석 방법</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <Badge className="bg-green-600 mb-2">저평가</Badge>
                                <h4 className="font-bold mb-2">P/E &lt; 15</h4>
                                <p className="text-sm text-gray-700">
                                    수익 대비 주가가 저렴. 가치투자 후보
                                </p>
                            </div>
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <Badge className="bg-yellow-600 mb-2">적정</Badge>
                                <h4 className="font-bold mb-2">P/E 15~25</h4>
                                <p className="text-sm text-gray-700">
                                    시장 평균 수준. 안정적인 기업
                                </p>
                            </div>
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <Badge className="bg-red-600 mb-2">고평가</Badge>
                                <h4 className="font-bold mb-2">P/E &gt; 25</h4>
                                <p className="text-sm text-gray-700">
                                    성장 기대가 높거나 과열된 상태
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h4 className="font-bold mb-2">⚠️ 주의사항</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• 산업별로 평균 P/E가 다름 (기술주는 높고, 전통 산업은 낮음)</li>
                                <li>• 적자 기업은 P/E를 계산할 수 없음</li>
                                <li>• 다른 지표(P/B, PEG 등)와 함께 봐야 함</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Real Examples */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">실전 예시</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="font-bold text-lg">Apple (AAPL)</h4>
                                <Badge>P/E: 29.8</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">
                                <strong>분석:</strong> 기술주 치고는 적정 수준. 안정적인 실적과 브랜드 파워를 감안하면 매력적.
                            </p>
                            <p className="text-sm text-gray-600">
                                주가 $178.25 ÷ EPS $5.98 = P/E 29.8
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="font-bold text-lg">Johnson & Johnson (JNJ)</h4>
                                <Badge className="bg-green-100 text-green-700">P/E: 24.1</Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">
                                <strong>분석:</strong> 헬스케어 업종 평균 이하. 안정적인 배당과 함께 가치투자 매력.
                            </p>
                            <p className="text-sm text-gray-600">
                                주가 $159.32 ÷ EPS $6.61 = P/E 24.1
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Tips */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">💡 활용 팁</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">같은 업종끼리 비교하세요</h4>
                                <p className="text-sm text-gray-600">
                                    기술주는 P/E 30 이상도 정상, 은행주는 P/E 15가 높을 수 있습니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">과거 P/E와 비교하세요</h4>
                                <p className="text-sm text-gray-600">
                                    현재 P/E가 과거 5년 평균보다 낮으면 저평가 신호일 수 있습니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">성장률도 함께 고려하세요</h4>
                                <p className="text-sm text-gray-600">
                                    높은 P/E라도 실적 성장률이 높다면 정당화될 수 있습니다 (PEG 비율 활용).
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Next Steps */}
                <div className="mt-8 flex gap-4">
                    <Link href="/screener" className="flex-1">
                        <Button className="w-full" size="lg">
                            스크리너에서 저 P/E 종목 찾기
                        </Button>
                    </Link>
                    <Link href="/learn/dividends" className="flex-1">
                        <Button variant="outline" className="w-full" size="lg">
                            다음: 배당 투자 가이드
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
