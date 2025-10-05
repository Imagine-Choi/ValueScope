import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: '배당 투자 완벽 가이드 | ValueScope',
    description: '배당주 투자 전략과 안정적인 현금 흐름 만들기',
};

export default function DividendsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12">
                <div className="container mx-auto px-4">
                    <Link href="/learn">
                        <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            학습 센터로 돌아가기
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="w-10 h-10" />
                        <h1 className="text-4xl font-bold">배당 투자 가이드</h1>
                    </div>
                    <p className="text-xl text-green-100">
                        안정적인 현금 흐름으로 복리 효과 누리기
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">배당이란?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg">
                            배당은 기업이 벌어들인 이익의 일부를 주주들에게 현금으로 돌려주는 것입니다.
                            마치 은행 이자처럼 주식을 보유하고 있으면 정기적으로 돈을 받을 수 있습니다.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <h4 className="font-bold mb-2">배당수익률</h4>
                                <p className="text-sm text-gray-700 mb-2">
                                    연간 배당금 ÷ 주가 × 100
                                </p>
                                <p className="text-xs text-gray-600">
                                    예: 주가 $100, 연배당 $3 → 3%
                                </p>
                            </div>
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h4 className="font-bold mb-2">배당 지급 주기</h4>
                                <p className="text-sm text-gray-700">
                                    미국 주식: 보통 분기(3개월)마다
                                </p>
                                <p className="text-xs text-gray-600">
                                    연 4회 배당금 입금!
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">좋은 배당주 고르는 법</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div className="p-4 border-l-4 border-green-600 bg-gray-50">
                                <h4 className="font-bold mb-2">✅ 배당수익률 3% 이상</h4>
                                <p className="text-sm text-gray-700">
                                    은행 금리보다 높은 수준. 단, 너무 높으면(7% 이상) 위험 신호일 수 있음.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-green-600 bg-gray-50">
                                <h4 className="font-bold mb-2">✅ 배당 성장 기록</h4>
                                <p className="text-sm text-gray-700">
                                    최소 5년 이상 배당을 유지하거나 증가시킨 기업 (Dividend Aristocrats 체크).
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-green-600 bg-gray-50">
                                <h4 className="font-bold mb-2">✅ 배당 성향 40~60%</h4>
                                <p className="text-sm text-gray-700">
                                    순이익의 40~60%를 배당으로 지급하는 게 안정적. 너무 높으면 지속 어려움.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-green-600 bg-gray-50">
                                <h4 className="font-bold mb-2">✅ 안정적인 사업 모델</h4>
                                <p className="text-sm text-gray-700">
                                    생필품, 헬스케어, 유틸리티 등 경기 침체에도 강한 산업.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">추천 배당주 (예시)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {[
                            { ticker: 'JNJ', name: 'Johnson & Johnson', yield: '2.95%', years: '60년+' },
                            { ticker: 'KO', name: 'Coca-Cola', yield: '2.91%', years: '60년+' },
                            { ticker: 'PG', name: 'Procter & Gamble', yield: '2.42%', years: '65년+' },
                        ].map((stock) => (
                            <div key={stock.ticker} className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <h4 className="font-bold">{stock.ticker}</h4>
                                    <p className="text-sm text-gray-600">{stock.name}</p>
                                </div>
                                <div className="text-right">
                                    <Badge className="bg-green-100 text-green-700">{stock.yield}</Badge>
                                    <p className="text-xs text-gray-500 mt-1">연속 배당 {stock.years}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">💡 배당 재투자 전략 (DRIP)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            받은 배당금으로 같은 주식을 다시 사면 복리 효과를 극대화할 수 있습니다.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-bold mb-2">예시: $10,000 투자, 배당률 3%, 30년</h4>
                            <ul className="text-sm space-y-1">
                                <li>• 배당 현금 수령: <strong>$40,568</strong></li>
                                <li>• 배당 재투자 (복리): <strong>$74,297</strong></li>
                                <li className="text-green-700 font-bold">→ 차이: $33,729 (83% 더 많음!)</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-4">
                    <Link href="/screener" className="flex-1">
                        <Button className="w-full" size="lg">
                            배당주 스크리너에서 찾기
                        </Button>
                    </Link>
                    <Link href="/learn/diversification" className="flex-1">
                        <Button variant="outline" className="w-full" size="lg">
                            다음: 포트폴리오 분산
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
