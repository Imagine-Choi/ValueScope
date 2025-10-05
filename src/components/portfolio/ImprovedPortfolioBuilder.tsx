'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Trash2,
    Plus,
    PieChart,
    DollarSign,
    TrendingUp,
    HelpCircle,
    AlertCircle,
    CheckCircle2,
    BarChart3,
    Info
} from 'lucide-react';

interface PortfolioItem {
    ticker: string;
    name: string;
    price: number;
    weight: number;
    category: string;
    pe: number;
    dividend: number;
}

const suggestedStocks = [
    { ticker: 'AAPL', name: 'Apple Inc.', price: 178.25, category: '기술주', pe: 29.5, dividend: 0.5 },
    { ticker: 'MSFT', name: 'Microsoft', price: 378.91, category: '기술주', pe: 36.8, dividend: 0.8 },
    { ticker: 'JNJ', name: 'Johnson & Johnson', price: 162.50, category: '안전주', pe: 15.8, dividend: 3.0 },
    { ticker: 'PG', name: 'Procter & Gamble', price: 168.90, category: '안전주', pe: 26.3, dividend: 2.4 },
    { ticker: 'KO', name: 'Coca-Cola', price: 61.25, category: '배당주', pe: 23.4, dividend: 3.0 },
    { ticker: 'JPM', name: 'JPMorgan Chase', price: 198.23, category: '금융주', pe: 11.2, dividend: 2.5 },
    { ticker: 'V', name: 'Visa Inc.', price: 272.45, category: '성장주', pe: 32.1, dividend: 0.9 },
    { ticker: 'WMT', name: 'Walmart', price: 167.80, category: '안전주', pe: 29.5, dividend: 1.4 },
    { ticker: 'CVX', name: 'Chevron', price: 158.30, category: '에너지', pe: 11.3, dividend: 3.5 },
    { ticker: 'MO', name: 'Altria Group', price: 48.50, category: '고배당', pe: 9.3, dividend: 8.5 },
];

export default function ImprovedPortfolioBuilder() {
    const [budget, setBudget] = useState(1000);
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
    const [showHelp, setShowHelp] = useState(false);

    const handleAddStock = (stock: typeof suggestedStocks[0]) => {
        if (portfolio.find(item => item.ticker === stock.ticker)) {
            alert('이미 포트폴리오에 추가된 종목입니다.');
            return;
        }

        const newWeight = portfolio.length === 0 ? 100 : 0;
        setPortfolio([...portfolio, { ...stock, weight: newWeight }]);

        // 균등 분배
        if (portfolio.length > 0) {
            const equalWeight = 100 / (portfolio.length + 1);
            const updated = [...portfolio, { ...stock, weight: 0 }].map(item => ({
                ...item,
                weight: parseFloat(equalWeight.toFixed(2))
            }));
            setPortfolio(updated);
        }
    };

    const handleRemoveStock = (ticker: string) => {
        const updated = portfolio.filter(item => item.ticker !== ticker);
        if (updated.length > 0) {
            const equalWeight = 100 / updated.length;
            setPortfolio(updated.map(item => ({ ...item, weight: parseFloat(equalWeight.toFixed(2)) })));
        } else {
            setPortfolio([]);
        }
    };

    const handleWeightChange = (ticker: string, weight: number) => {
        setPortfolio(portfolio.map(item =>
            item.ticker === ticker ? { ...item, weight: Math.min(100, Math.max(0, weight)) } : item
        ));
    };

    const handleEqualDistribution = () => {
        if (portfolio.length === 0) return;
        const equalWeight = 100 / portfolio.length;
        setPortfolio(portfolio.map(item => ({ ...item, weight: parseFloat(equalWeight.toFixed(2)) })));
    };

    const totalWeight = portfolio.reduce((sum, item) => sum + item.weight, 0);
    const isValidPortfolio = Math.abs(totalWeight - 100) < 0.1 && portfolio.length > 0;

    const calculateAllocations = () => {
        return portfolio.map(item => {
            const allocation = (budget * item.weight / 100);
            const shares = Math.floor(allocation / item.price);
            const actualCost = shares * item.price;
            return {
                ...item,
                allocation,
                shares,
                actualCost,
                remainder: allocation - actualCost
            };
        });
    };

    const allocations = calculateAllocations();
    const totalInvested = allocations.reduce((sum, item) => sum + item.actualCost, 0);
    const totalRemainder = allocations.reduce((sum, item) => sum + item.remainder, 0);
    const remaining = budget - totalInvested;

    // 포트폴리오 분석
    const avgPE = portfolio.length > 0
        ? portfolio.reduce((sum, item) => sum + (item.pe * item.weight / 100), 0)
        : 0;
    const avgDividend = portfolio.length > 0
        ? portfolio.reduce((sum, item) => sum + (item.dividend * item.weight / 100), 0)
        : 0;
    const diversityScore = portfolio.length >= 5 ? '우수' : portfolio.length >= 3 ? '양호' : portfolio.length >= 1 ? '부족' : '없음';

    return (
        <div className="container mx-auto px-4 py-8">
            {/* 헬프 섹션 */}
            {showHelp && (
                <Card className="mb-6 bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-3">포트폴리오 빌더 사용법</h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p><strong>1단계:</strong> 투자 예산을 입력하세요 (최소 $100 권장)</p>
                                    <p><strong>2단계:</strong> 아래 추천 종목 중 원하는 종목을 추가하세요 (3-10개 권장)</p>
                                    <p><strong>3단계:</strong> 각 종목의 투자 비중을 조절하세요 (총합 100%)</p>
                                    <p><strong>4단계:</strong> 오른쪽 시뮬레이션 결과를 확인하세요</p>
                                    <p className="mt-3 pt-3 border-t border-blue-300">
                                        💡 <strong>팁:</strong> 분산투자를 위해 서로 다른 카테고리의 종목을 선택하세요.
                                        안전주와 성장주를 적절히 섞으면 리스크를 줄일 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Portfolio Builder */}
                <div className="space-y-6">
                    {/* Budget Input */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5" />
                                    1단계: 투자 예산 설정
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowHelp(!showHelp)}
                                    className="gap-2"
                                >
                                    <HelpCircle className="w-4 h-4" />
                                    {showHelp ? '도움말 숨기기' : '도움말 보기'}
                                </Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-3xl font-bold text-blue-600">$</span>
                                <Input
                                    type="number"
                                    value={budget}
                                    onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                                    className="text-2xl font-semibold"
                                    min={0}
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <Button size="sm" variant="outline" onClick={() => setBudget(100)}>$100</Button>
                                <Button size="sm" variant="outline" onClick={() => setBudget(500)}>$500</Button>
                                <Button size="sm" variant="outline" onClick={() => setBudget(1000)}>$1,000</Button>
                                <Button size="sm" variant="outline" onClick={() => setBudget(5000)}>$5,000</Button>
                            </div>
                            <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                소액투자는 최소 $100 이상 권장 (분산투자 가능)
                            </p>
                        </CardContent>
                    </Card>

                    {/* Add Stocks */}
                    <Card>
                        <CardHeader>
                            <CardTitle>2단계: 종목 선택 및 추가</CardTitle>
                            <p className="text-sm text-gray-600 mt-2">
                                아래 추천 종목 중 3-10개를 선택하여 분산투자 포트폴리오를 구성하세요
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {suggestedStocks.map((stock) => {
                                    const isAdded = portfolio.find(item => item.ticker === stock.ticker);
                                    return (
                                        <div key={stock.ticker} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <p className="font-bold text-lg">{stock.ticker}</p>
                                                    <Badge variant="secondary" className="text-xs">
                                                        {stock.category}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-2">{stock.name}</p>
                                                <div className="flex gap-4 text-xs text-gray-500">
                                                    <span>가격: <strong className="text-gray-900">${stock.price}</strong></span>
                                                    <span>P/E: <strong className={stock.pe < 15 ? 'text-green-600' : 'text-gray-900'}>{stock.pe}</strong></span>
                                                    <span>배당: <strong className={stock.dividend >= 3 ? 'text-green-600' : 'text-gray-900'}>{stock.dividend}%</strong></span>
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                onClick={() => handleAddStock(stock)}
                                                disabled={!!isAdded}
                                                variant={isAdded ? 'secondary' : 'default'}
                                            >
                                                {isAdded ? (
                                                    <><CheckCircle2 className="w-4 h-4 mr-1" /> 추가됨</>
                                                ) : (
                                                    <><Plus className="w-4 h-4 mr-1" /> 추가</>
                                                )}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Portfolio Items */}
                    {portfolio.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <PieChart className="w-5 h-5" />
                                        3단계: 투자 비중 조절 ({portfolio.length}개 종목)
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={handleEqualDistribution}
                                    >
                                        균등 분배
                                    </Button>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {portfolio.map((item) => (
                                        <div key={item.ticker} className="p-4 border rounded-lg bg-gray-50">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <p className="font-bold text-lg">{item.ticker}</p>
                                                        <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{item.name}</p>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleRemoveStock(item.ticker)}
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <label className="text-sm font-medium">
                                                        투자 비중
                                                    </label>
                                                    <span className="text-lg font-bold text-blue-600">
                                                        {item.weight.toFixed(1)}%
                                                    </span>
                                                </div>
                                                <Input
                                                    type="range"
                                                    value={item.weight}
                                                    onChange={(e) => handleWeightChange(item.ticker, Number(e.target.value))}
                                                    min={0}
                                                    max={100}
                                                    step={0.1}
                                                    className="w-full"
                                                />
                                                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                                                    <div>예상 투자금: <strong className="text-gray-900">${(budget * item.weight / 100).toFixed(2)}</strong></div>
                                                    <div>예상 주식 수: <strong className="text-gray-900">{Math.floor((budget * item.weight / 100) / item.price)}주</strong></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 p-4 bg-white border-2 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold">총 투자 비중</span>
                                        <span className={`text-2xl font-bold ${isValidPortfolio ? 'text-green-600' : 'text-red-600'}`}>
                                            {totalWeight.toFixed(1)}%
                                        </span>
                                    </div>
                                    {isValidPortfolio ? (
                                        <div className="flex items-center gap-2 text-green-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span>포트폴리오가 완성되었습니다!</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-red-600 text-sm">
                                            <AlertCircle className="w-4 h-4" />
                                            <span>총 비중이 100%가 되도록 조절해주세요 (현재: {(100 - totalWeight).toFixed(1)}% {totalWeight < 100 ? '부족' : '초과'})</span>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Right: Results & Analysis */}
                <div className="space-y-6">
                    {/* Portfolio Summary */}
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="w-5 h-5" />
                                포트폴리오 요약
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-1">총 예산</p>
                                    <p className="text-2xl font-bold text-gray-900">${budget.toFixed(2)}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-1">실제 투자금</p>
                                    <p className="text-2xl font-bold text-blue-600">${totalInvested.toFixed(2)}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-1">잔액</p>
                                    <p className="text-2xl font-bold text-green-600">${remaining.toFixed(2)}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-1">종목 수</p>
                                    <p className="text-2xl font-bold text-purple-600">{portfolio.length}개</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Allocation Details */}
                    {portfolio.length > 0 && isValidPortfolio && (
                        <Card>
                            <CardHeader>
                                <CardTitle>4단계: 시뮬레이션 결과</CardTitle>
                                <p className="text-sm text-gray-600 mt-2">
                                    실제로 구매할 주식 수와 투자 금액을 확인하세요
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {allocations.map((item) => (
                                        <div key={item.ticker} className="p-4 bg-gray-50 rounded-lg">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <p className="font-bold text-lg">{item.ticker}</p>
                                                        <Badge variant="outline" className="text-xs">{item.weight.toFixed(1)}%</Badge>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{item.name}</p>
                                                </div>
                                                <p className="text-sm text-gray-600">@${item.price}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3 text-sm">
                                                <div>
                                                    <p className="text-gray-600">목표 투자금</p>
                                                    <p className="font-semibold text-gray-900">${item.allocation.toFixed(2)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">구매 주식 수</p>
                                                    <p className="font-bold text-blue-600">{item.shares}주</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">실제 투자금</p>
                                                    <p className="font-semibold text-green-600">${item.actualCost.toFixed(2)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">단수 미투자금</p>
                                                    <p className="text-sm text-gray-500">${item.remainder.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div className="text-sm text-gray-700">
                                            <p className="font-semibold mb-1">단수 미투자금이란?</p>
                                            <p>주식은 정수(1주, 2주...)로만 구매 가능하기 때문에, 목표 투자금에서 실제 구매 금액을 뺀 나머지 금액입니다.
                                                이 금액은 계좌 잔액으로 남게 되며, 다른 종목 구매나 추가 투자에 사용할 수 있습니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Portfolio Analysis */}
                    {portfolio.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    포트폴리오 분석
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">평균 P/E 비율</span>
                                            <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                                <HelpCircle className="w-4 h-4 text-gray-400" />
                                            </Button>
                                        </div>
                                        <span className={`font-bold ${avgPE < 15 ? 'text-green-600' : avgPE < 25 ? 'text-blue-600' : 'text-orange-600'}`}>
                                            {avgPE.toFixed(1)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">평균 배당수익률</span>
                                            <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                                <HelpCircle className="w-4 h-4 text-gray-400" />
                                            </Button>
                                        </div>
                                        <span className={`font-bold ${avgDividend >= 3 ? 'text-green-600' : 'text-blue-600'}`}>
                                            {avgDividend.toFixed(2)}%
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">분산투자 점수</span>
                                            <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                                <HelpCircle className="w-4 h-4 text-gray-400" />
                                            </Button>
                                        </div>
                                        <Badge variant={
                                            diversityScore === '우수' ? 'default' :
                                                diversityScore === '양호' ? 'secondary' :
                                                    'outline'
                                        }>
                                            {diversityScore}
                                        </Badge>
                                    </div>

                                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <div className="text-sm text-gray-700">
                                                <p className="font-semibold mb-2">투자 조언</p>
                                                {portfolio.length < 3 && (
                                                    <p className="mb-1">• 분산투자를 위해 최소 3-5개 종목을 추천합니다</p>
                                                )}
                                                {avgPE > 25 && (
                                                    <p className="mb-1">• 평균 P/E가 높습니다. 저평가 종목을 추가로 고려해보세요</p>
                                                )}
                                                {avgDividend < 2 && (
                                                    <p className="mb-1">• 배당수익률이 낮습니다. 안정적 현금흐름을 원한다면 고배당주를 추가하세요</p>
                                                )}
                                                <p className="mt-2 text-xs text-gray-600">
                                                    ※ 이 분석은 참고용이며, 투자 결정은 개인의 판단과 책임하에 이루어져야 합니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {portfolio.length === 0 && (
                        <Card className="bg-gray-50">
                            <CardContent className="p-12 text-center">
                                <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-lg font-semibold text-gray-600 mb-2">
                                    포트폴리오가 비어있습니다
                                </p>
                                <p className="text-sm text-gray-500">
                                    왼쪽에서 종목을 추가하여 포트폴리오를 구성해보세요
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
