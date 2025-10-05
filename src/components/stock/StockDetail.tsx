'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, ArrowLeft, Plus } from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 주식 데이터 타입 정의
interface StockInfo {
    name: string;
    price: number;
    change: number;
    changePercent: number;
    pe: number;
    pb: number;
    dividendYield: number;
    marketCap: string;
    volume: string;
    high52w: number;
    low52w: number;
    eps: number;
    description: string;
}

// Mock 데이터
const stockData: Record<string, StockInfo> = {
    AAPL: {
        name: 'Apple Inc.',
        price: 178.25,
        change: 2.35,
        changePercent: 1.34,
        pe: 29.8,
        pb: 45.2,
        dividendYield: 0.52,
        marketCap: '2.8T',
        volume: '52.3M',
        high52w: 199.62,
        low52w: 164.08,
        eps: 5.98,
        description: 'Apple은 iPhone, iPad, Mac, Apple Watch 등을 제작하는 글로벌 기술 기업입니다.',
    },
    MSFT: {
        name: 'Microsoft Corporation',
        price: 378.91,
        change: -1.24,
        changePercent: -0.33,
        pe: 35.2,
        pb: 12.8,
        dividendYield: 0.78,
        marketCap: '2.8T',
        volume: '23.1M',
        high52w: 420.82,
        low52w: 309.45,
        eps: 10.76,
        description: 'Microsoft는 Windows, Office, Azure 클라우드 서비스를 제공하는 소프트웨어 기업입니다.',
    },
    // 기타 종목들 추가 가능
};

const chartData = [
    { date: '10/01', price: 175.2 },
    { date: '10/02', price: 176.8 },
    { date: '10/03', price: 177.5 },
    { date: '10/04', price: 175.9 },
    { date: '10/05', price: 178.25 },
];

interface StockDetailProps {
    ticker: string;
}

export default function StockDetail({ ticker }: StockDetailProps) {
    const stock = stockData[ticker] || {
        name: `${ticker} Inc.`,
        price: 100.0,
        change: 0,
        changePercent: 0,
        pe: 25.0,
        pb: 5.0,
        dividendYield: 2.0,
        marketCap: 'N/A',
        volume: 'N/A',
        high52w: 120.0,
        low52w: 80.0,
        eps: 4.0,
        description: '종목 정보를 불러오는 중입니다.',
    };

    const isPositive = stock.change >= 0;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Back Button */}
            <Link href="/screener">
                <Button variant="ghost" className="mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    스크리너로 돌아가기
                </Button>
            </Link>

            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-4xl font-bold">{ticker}</h1>
                            <Badge variant="secondary">{stock.marketCap}</Badge>
                        </div>
                        <p className="text-xl text-gray-600">{stock.name}</p>
                    </div>
                    <div className="text-left md:text-right">
                        <div className="text-4xl font-bold mb-1">${stock.price.toFixed(2)}</div>
                        <div className={`flex items-center gap-2 text-lg ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                            {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>주가 차트 (5일)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Tabs: About, Financials, News */}
                    <Tabs defaultValue="about">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="about">회사 소개</TabsTrigger>
                            <TabsTrigger value="financials">재무 정보</TabsTrigger>
                            <TabsTrigger value="news">뉴스</TabsTrigger>
                        </TabsList>

                        <TabsContent value="about">
                            <Card>
                                <CardHeader>
                                    <CardTitle>회사 개요</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 leading-relaxed">{stock.description}</p>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="financials">
                            <Card>
                                <CardHeader>
                                    <CardTitle>주요 재무 지표</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">EPS (주당순이익)</p>
                                            <p className="text-2xl font-bold">${stock.eps.toFixed(2)}</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">P/E 비율</p>
                                            <p className="text-2xl font-bold">{stock.pe}</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">P/B 비율</p>
                                            <p className="text-2xl font-bold">{stock.pb}</p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">배당수익률</p>
                                            <p className="text-2xl font-bold">{stock.dividendYield.toFixed(2)}%</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="news">
                            <Card>
                                <CardHeader>
                                    <CardTitle>최근 뉴스</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                            <h4 className="font-semibold mb-2">{ticker} 주가 상승, 실적 기대감</h4>
                                            <p className="text-sm text-gray-600">최근 발표된 실적이 시장 예상을 상회하며...</p>
                                            <p className="text-xs text-gray-500 mt-2">2일 전 • Reuters</p>
                                        </div>
                                        <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                            <h4 className="font-semibold mb-2">애널리스트 목표가 상향 조정</h4>
                                            <p className="text-sm text-gray-600">주요 증권사들이 목표가를 일제히 상향...</p>
                                            <p className="text-xs text-gray-500 mt-2">4일 전 • Bloomberg</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <Link href="/news">
                                            <Button variant="outline">더 많은 뉴스 보기</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Key Stats */}
                    <Card>
                        <CardHeader>
                            <CardTitle>주요 지표</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">거래량</span>
                                <span className="font-semibold">{stock.volume}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">52주 최고</span>
                                <span className="font-semibold">${stock.high52w}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">52주 최저</span>
                                <span className="font-semibold">${stock.low52w}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">시가총액</span>
                                <span className="font-semibold">{stock.marketCap}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>포트폴리오에 추가</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Link href="/portfolio">
                                <Button className="w-full" size="lg">
                                    <Plus className="w-5 h-5 mr-2" />
                                    포트폴리오에 추가
                                </Button>
                            </Link>
                            <p className="text-sm text-gray-500 mt-3 text-center">
                                시뮬레이션으로 투자 효과를 미리 확인하세요
                            </p>
                        </CardContent>
                    </Card>

                    {/* Value Score */}
                    <Card>
                        <CardHeader>
                            <CardTitle>ValueScope 점수</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-blue-600 mb-2">
                                    {ticker === 'AAPL' ? 92 : ticker === 'MSFT' ? 88 : 85}
                                </div>
                                <Badge className="bg-green-100 text-green-700">우수</Badge>
                                <p className="text-sm text-gray-600 mt-3">
                                    가치투자 관점에서 추천 종목입니다
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
