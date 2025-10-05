import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PieChart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: '포트폴리오 분산 가이드 | ValueScope',
    description: '리스크를 줄이고 안정적인 수익을 만드는 분산투자 전략',
};

export default function DiversificationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12">
                <div className="container mx-auto px-4">
                    <Link href="/learn">
                        <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            학습 센터로 돌아가기
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <PieChart className="w-10 h-10" />
                        <h1 className="text-4xl font-bold">포트폴리오 분산 가이드</h1>
                    </div>
                    <p className="text-xl text-purple-100">
                        &quot;계란을 한 바구니에 담지 마라&quot; - 리스크 관리의 기본
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">왜 분산투자를 해야 할까?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg">
                            한 종목에 모든 돈을 투자하면 그 회사가 망하면 모든 돈을 잃을 수 있습니다.
                            하지만 여러 종목에 나눠 투자하면 일부가 손실을 봐도 전체 포트폴리오는 안정적입니다.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                                <h4 className="font-bold text-red-700 mb-3">❌ 집중 투자 (위험)</h4>
                                <p className="text-sm mb-2">1개 종목에 $10,000 전부 투자</p>
                                <p className="text-xs text-gray-600">
                                    → 그 회사 -50% 하락 = 내 자산 -50% ($5,000 손실)
                                </p>
                            </div>

                            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                                <h4 className="font-bold text-green-700 mb-3">✅ 분산 투자 (안전)</h4>
                                <p className="text-sm mb-2">10개 종목에 각 $1,000씩 투자</p>
                                <p className="text-xs text-gray-600">
                                    → 1개 회사 -50% = 내 자산 -5% ($500 손실)
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">올바른 분산 전략</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-4">
                            <div className="p-4 border-l-4 border-purple-600 bg-gray-50">
                                <h4 className="font-bold mb-2">1. 종목 수: 최소 5~10개</h4>
                                <p className="text-sm text-gray-700">
                                    3개 이하는 위험, 15개 이상은 관리 어려움. 초보자는 5~10개가 적정.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-purple-600 bg-gray-50">
                                <h4 className="font-bold mb-2">2. 산업 분산</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    같은 업종에 몰빵하지 마세요. 다양한 산업에 투자하세요.
                                </p>
                                <p className="text-xs text-gray-600">
                                    예: 기술 30% + 헬스케어 25% + 소비재 20% + 금융 15% + 에너지 10%
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-purple-600 bg-gray-50">
                                <h4 className="font-bold mb-2">3. 자산 클래스 분산</h4>
                                <p className="text-sm text-gray-700">
                                    주식만이 아닌 채권, ETF, 현금도 섞으세요.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-purple-600 bg-gray-50">
                                <h4 className="font-bold mb-2">4. 정기적인 리밸런싱</h4>
                                <p className="text-sm text-gray-700">
                                    분기마다 비중을 재조정하여 목표 비율 유지.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">추천 포트폴리오 (예시)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-bold mb-3">💼 균형 포트폴리오 ($10,000)</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>기술주 (AAPL, MSFT)</span>
                                        <span className="font-semibold">$3,000 (30%)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>헬스케어 (JNJ)</span>
                                        <span className="font-semibold">$2,500 (25%)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>소비재 (PG, KO)</span>
                                        <span className="font-semibold">$2,000 (20%)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>금융 (V)</span>
                                        <span className="font-semibold">$1,500 (15%)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>ETF (S&P 500)</span>
                                        <span className="font-semibold">$1,000 (10%)</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600">
                                💡 이는 예시일 뿐이며, 본인의 위험 성향과 목표에 맞게 조정하세요.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Link href="/portfolio" className="flex-1">
                        <Button className="w-full" size="lg">
                            내 포트폴리오 만들기
                        </Button>
                    </Link>
                    <Link href="/learn/value-investing" className="flex-1">
                        <Button variant="outline" className="w-full" size="lg">
                            다음: 가치투자 전략
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
