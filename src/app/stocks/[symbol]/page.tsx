'use client';

import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, BarChart3, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 모든 종목 데이터 (undervalued 페이지와 동일)
const allStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 178.50, pe: 29.5, dividend: 0.5, roe: 147.2, category: 'profitable', change: 2.3, marketCap: '2.8T', pb: 45.2, debtRatio: 170, description: '세계 최대 기술 기업. iPhone, Mac, iPad, 서비스 등 다양한 제품군 보유' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.91, pe: 36.8, dividend: 0.8, roe: 43.7, category: 'profitable', change: 1.8, marketCap: '2.8T', pb: 12.8, debtRatio: 45, description: 'Windows, Office, Azure 클라우드 서비스 선도 기업' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 141.80, pe: 24.3, dividend: 0.0, roe: 29.2, category: 'profitable', change: 3.1, marketCap: '1.8T', pb: 6.5, debtRatio: 12, description: '구글 검색, YouTube, 안드로이드, 클라우드 사업' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 495.22, pe: 65.3, dividend: 0.04, roe: 115.1, category: 'profitable', change: 5.2, marketCap: '1.2T', pb: 55.2, debtRatio: 32, description: 'AI 칩 시장 선도 기업. GPU와 데이터센터 솔루션' },
    { symbol: 'META', name: 'Meta Platforms', price: 521.00, pe: 28.1, dividend: 0.0, roe: 35.6, category: 'profitable', change: 2.7, marketCap: '1.3T', pb: 7.8, debtRatio: 18, description: 'Facebook, Instagram, WhatsApp 소유. 메타버스 투자' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: 162.50, pe: 15.8, dividend: 3.0, roe: 25.4, category: 'safe', change: 0.5, marketCap: '390B', pb: 5.8, debtRatio: 55, description: '헬스케어 대기업. 63년 연속 배당 인상 Dividend Aristocrat' },
    { symbol: 'PG', name: 'Procter & Gamble', price: 168.90, pe: 26.3, dividend: 2.4, roe: 32.1, category: 'safe', change: 0.3, marketCap: '400B', pb: 7.2, debtRatio: 65, description: '생활용품 1위 기업. Tide, Gillette, Pampers 등 브랜드 보유' },
    { symbol: 'KO', name: 'Coca-Cola Co.', price: 61.25, pe: 23.4, dividend: 3.0, roe: 40.2, category: 'safe', change: -0.2, marketCap: '265B', pb: 10.1, debtRatio: 192, description: '세계 1위 음료 기업. 60년 이상 배당 지급 역사' },
    // 더 많은 종목들...
    { symbol: 'V', name: 'Visa Inc.', price: 272.45, pe: 32.1, dividend: 0.9, roe: 45.3, category: 'profitable', change: 1.5, marketCap: '570B', pb: 13.7, debtRatio: 65, description: '글로벌 결제 네트워크. 높은 진입장벽과 안정적 수익' },
    { symbol: 'MA', name: 'Mastercard Inc.', price: 465.50, pe: 35.7, dividend: 0.6, roe: 153.2, category: 'profitable', change: 2.1, marketCap: '440B', pb: 58.3, debtRatio: 82, description: '결제 네트워크 2위. 높은 수익성과 성장성' },
    { symbol: 'JPM', name: 'JPMorgan Chase', price: 198.23, pe: 11.2, dividend: 2.5, roe: 17.8, category: 'profitable', change: -0.5, marketCap: '570B', pb: 1.8, debtRatio: 125, description: '미국 최대 은행. 안정적 배당과 실적' },
];

// 차트 데이터 생성 (6개월)
const generateChartData = (currentPrice: number, change: number) => {
    const data = [];
    const months = ['5개월 전', '4개월 전', '3개월 전', '2개월 전', '1개월 전', '현재'];
    let price = currentPrice * 0.85;

    for (let i = 0; i < 6; i++) {
        const randomChange = (Math.random() - 0.5) * 10;
        price = price * (1 + randomChange / 100);
        data.push({
            name: months[i],
            price: parseFloat(price.toFixed(2))
        });
    }

    data[5].price = currentPrice; // 마지막은 현재가
    return data;
};

export default function StockDetailPage() {
    const params = useParams();
    const symbol = params.symbol as string;

    const stock = allStocks.find(s => s.symbol === symbol);

    if (!stock) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Card className="max-w-md">
                    <CardContent className="p-8 text-center">
                        <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">종목을 찾을 수 없습니다</h2>
                        <p className="text-gray-600 mb-4">
                            {symbol} 종목 정보가 없습니다.
                        </p>
                        <Link href="/stocks/undervalued">
                            <Button>종목 리스트로 돌아가기</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const chartData = generateChartData(stock.price, stock.change);

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'profitable': return 'bg-green-100 text-green-800';
            case 'safe': return 'bg-blue-100 text-blue-800';
            case 'consistent': return 'bg-purple-100 text-purple-800';
            case 'dividend': return 'bg-orange-100 text-orange-800';
            case 'undervalued': return 'bg-indigo-100 text-indigo-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryName = (category: string) => {
        switch (category) {
            case 'profitable': return '수익성 높은';
            case 'safe': return '안전한';
            case 'consistent': return '꾸준한';
            case 'dividend': return '고배당';
            case 'undervalued': return '저평가';
            default: return category;
        }
    };

    const getValuationStatus = (pe: number) => {
        if (pe < 15) return { text: '저평가', color: 'text-green-600' };
        if (pe < 25) return { text: '적정가', color: 'text-blue-600' };
        return { text: '고평가', color: 'text-orange-600' };
    };

    const valuationStatus = getValuationStatus(stock.pe);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link href="/stocks/undervalued">
                    <Button variant="ghost" className="mb-6 gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        종목 리스트로 돌아가기
                    </Button>
                </Link>

                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-4xl font-bold">{stock.symbol}</h1>
                                <Badge className={getCategoryColor(stock.category)}>
                                    {getCategoryName(stock.category)}
                                </Badge>
                            </div>
                            <h2 className="text-xl text-gray-600 mb-4">{stock.name}</h2>
                            <p className="text-gray-700 max-w-2xl">{stock.description}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">현재가</p>
                            <p className="text-4xl font-bold">${stock.price.toFixed(2)}</p>
                            <div className={`flex items-center justify-end gap-1 mt-2 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {stock.change >= 0 ? (
                                    <TrendingUp className="w-5 h-5" />
                                ) : (
                                    <TrendingDown className="w-5 h-5" />
                                )}
                                <span className="text-xl font-semibold">
                                    {stock.change >= 0 ? '+' : ''}{stock.change}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Chart */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Price Chart */}
                        <Card>
                            <CardHeader>
                                <CardTitle>6개월 가격 추이</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line
                                            type="monotone"
                                            dataKey="price"
                                            stroke="#2563eb"
                                            strokeWidth={2}
                                            dot={{ fill: '#2563eb', r: 4 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Key Metrics */}
                        <Card>
                            <CardHeader>
                                <CardTitle>핵심 지표</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600 mb-1">P/E 비율</p>
                                        <p className="text-2xl font-bold">{stock.pe}</p>
                                        <p className={`text-sm font-semibold mt-1 ${valuationStatus.color}`}>
                                            {valuationStatus.text}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600 mb-1">P/B 비율</p>
                                        <p className="text-2xl font-bold">{stock.pb}</p>
                                        <p className={`text-sm ${stock.pb < 3 ? 'text-green-600' : 'text-orange-600'}`}>
                                            {stock.pb < 3 ? '적정' : '높음'}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600 mb-1">ROE</p>
                                        <p className="text-2xl font-bold">{stock.roe.toFixed(1)}%</p>
                                        <p className={`text-sm ${stock.roe >= 15 ? 'text-green-600' : 'text-orange-600'}`}>
                                            {stock.roe >= 15 ? '우수' : '보통'}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600 mb-1">부채비율</p>
                                        <p className="text-2xl font-bold">{stock.debtRatio}%</p>
                                        <p className={`text-sm ${stock.debtRatio < 100 ? 'text-green-600' : stock.debtRatio < 200 ? 'text-yellow-600' : 'text-red-600'}`}>
                                            {stock.debtRatio < 100 ? '안전' : stock.debtRatio < 200 ? '주의' : '위험'}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Analysis */}
                        <Card>
                            <CardHeader>
                                <CardTitle>투자 포인트</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {stock.pe < 15 && (
                                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-green-900">저평가 구간</p>
                                            <p className="text-sm text-gray-700">P/E 비율이 15 미만으로 시장 평균 대비 저평가되어 있습니다.</p>
                                        </div>
                                    </div>
                                )}
                                {stock.dividend >= 3 && (
                                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                        <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-blue-900">우수한 배당</p>
                                            <p className="text-sm text-gray-700">배당수익률 {stock.dividend}%로 안정적인 현금흐름을 제공합니다.</p>
                                        </div>
                                    </div>
                                )}
                                {stock.roe >= 20 && (
                                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                                        <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-purple-900">높은 수익성</p>
                                            <p className="text-sm text-gray-700">ROE {stock.roe.toFixed(1)}%로 자본을 매우 효율적으로 사용하고 있습니다.</p>
                                        </div>
                                    </div>
                                )}
                                {stock.debtRatio < 100 && (
                                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-green-900">안정적 재무구조</p>
                                            <p className="text-sm text-gray-700">부채비율 {stock.debtRatio}%로 재무 건전성이 우수합니다.</p>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Summary */}
                    <div className="space-y-6">
                        {/* Quick Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle>기업 정보</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">시가총액</span>
                                    <span className="font-semibold">${stock.marketCap}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">배당수익률</span>
                                    <span className="font-semibold">{stock.dividend}%</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600">카테고리</span>
                                    <Badge className={getCategoryColor(stock.category)}>
                                        {getCategoryName(stock.category)}
                                    </Badge>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600">최근 변동</span>
                                    <span className={`font-semibold ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Investment Grade */}
                        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                            <CardHeader>
                                <CardTitle>종합 평가</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center mb-4">
                                    <p className="text-sm text-gray-600 mb-2">ValueScope 점수</p>
                                    <p className="text-5xl font-bold text-blue-600">
                                        {Math.min(100, Math.round(
                                            (stock.pe < 15 ? 25 : stock.pe < 25 ? 15 : 5) +
                                            (stock.dividend >= 3 ? 25 : stock.dividend >= 1 ? 15 : 5) +
                                            (stock.roe >= 20 ? 25 : stock.roe >= 15 ? 15 : 5) +
                                            (stock.debtRatio < 100 ? 25 : stock.debtRatio < 200 ? 15 : 5)
                                        ))}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        {Math.round(
                                            (stock.pe < 15 ? 25 : stock.pe < 25 ? 15 : 5) +
                                            (stock.dividend >= 3 ? 25 : stock.dividend >= 1 ? 15 : 5) +
                                            (stock.roe >= 20 ? 25 : stock.roe >= 15 ? 15 : 5) +
                                            (stock.debtRatio < 100 ? 25 : stock.debtRatio < 200 ? 15 : 5)
                                        ) >= 80 ? '투자 추천' :
                                            Math.round(
                                                (stock.pe < 15 ? 25 : stock.pe < 25 ? 15 : 5) +
                                                (stock.dividend >= 3 ? 25 : stock.dividend >= 1 ? 15 : 5) +
                                                (stock.roe >= 20 ? 25 : stock.roe >= 15 ? 15 : 5) +
                                                (stock.debtRatio < 100 ? 25 : stock.debtRatio < 200 ? 15 : 5)
                                            ) >= 60 ? '관심 종목' : '신중 검토'}
                                    </p>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center justify-between">
                                        <span>저평가 지표</span>
                                        <span className={stock.pe < 15 ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                                            {stock.pe < 15 ? '✓ 우수' : stock.pe < 25 ? '○ 보통' : '△ 주의'}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>배당 매력도</span>
                                        <span className={stock.dividend >= 3 ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                                            {stock.dividend >= 3 ? '✓ 우수' : stock.dividend >= 1 ? '○ 보통' : '△ 낮음'}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>수익성</span>
                                        <span className={stock.roe >= 20 ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                                            {stock.roe >= 20 ? '✓ 우수' : stock.roe >= 15 ? '○ 보통' : '△ 주의'}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>재무 건전성</span>
                                        <span className={stock.debtRatio < 100 ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                                            {stock.debtRatio < 100 ? '✓ 안전' : stock.debtRatio < 200 ? '○ 보통' : '△ 위험'}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* CTA */}
                        <Card>
                            <CardContent className="p-6">
                                <Link href="/portfolio">
                                    <Button className="w-full mb-3">
                                        포트폴리오에 추가
                                    </Button>
                                </Link>
                                <Link href="/learn/find-undervalued">
                                    <Button variant="outline" className="w-full">
                                        투자 가이드 보기
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
