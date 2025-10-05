'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock data - 실제로는 API에서 가져올 데이터
const topStocks = [
    {
        ticker: 'AAPL',
        name: 'Apple Inc.',
        price: 178.25,
        change: 2.35,
        changePercent: 1.34,
        pe: 29.8,
        dividendYield: 0.52,
        score: 92,
    },
    {
        ticker: 'MSFT',
        name: 'Microsoft Corporation',
        price: 378.91,
        change: -1.24,
        changePercent: -0.33,
        pe: 35.2,
        dividendYield: 0.78,
        score: 88,
    },
    {
        ticker: 'JNJ',
        name: 'Johnson & Johnson',
        price: 159.32,
        change: 0.87,
        changePercent: 0.55,
        pe: 24.1,
        dividendYield: 2.95,
        score: 86,
    },
    {
        ticker: 'PG',
        name: 'Procter & Gamble',
        price: 165.45,
        change: 1.12,
        changePercent: 0.68,
        pe: 26.3,
        dividendYield: 2.42,
        score: 84,
    },
    {
        ticker: 'KO',
        name: 'The Coca-Cola Company',
        price: 61.78,
        change: 0.45,
        changePercent: 0.73,
        pe: 27.5,
        dividendYield: 2.91,
        score: 82,
    },
];

export default function TopStocks() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        오늘의 <span className="text-blue-600">저평가 우량주</span> TOP 5
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        AI 밸류 분석으로 선별한 투자 가치가 높은 종목들입니다.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        * 매일 자동 업데이트 | 마지막 업데이트: 2025년 10월 5일
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-4">
                    {topStocks.map((stock, index) => (
                        <Card key={stock.ticker} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    {/* Left: Rank & Stock Info */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-xl">{stock.ticker}</h3>
                                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                                    점수 {stock.score}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-gray-600">{stock.name}</p>
                                        </div>
                                    </div>

                                    {/* Middle: Metrics */}
                                    <div className="grid grid-cols-3 gap-4 flex-1">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">현재가</p>
                                            <p className="font-semibold">${stock.price.toFixed(2)}</p>
                                            <p className={`text-xs flex items-center ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {stock.changePercent >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                                {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">P/E 비율</p>
                                            <p className="font-semibold">{stock.pe}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">배당수익률</p>
                                            <p className="font-semibold">{stock.dividendYield.toFixed(2)}%</p>
                                        </div>
                                    </div>

                                    {/* Right: Action */}
                                    <div className="flex-shrink-0">
                                        <Link href={`/stock/${stock.ticker}`}>
                                            <Button variant="outline" size="sm">
                                                상세보기
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link href="/screener">
                        <Button size="lg">
                            전체 스크리너에서 더 찾아보기
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
