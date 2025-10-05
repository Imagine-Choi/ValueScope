'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, PieChart, DollarSign } from 'lucide-react';

interface PortfolioItem {
    ticker: string;
    name: string;
    price: number;
    weight: number;
}

const suggestedStocks = [
    { ticker: 'AAPL', name: 'Apple Inc.', price: 178.25 },
    { ticker: 'MSFT', name: 'Microsoft Corporation', price: 378.91 },
    { ticker: 'JNJ', name: 'Johnson & Johnson', price: 159.32 },
    { ticker: 'PG', name: 'Procter & Gamble', price: 165.45 },
    { ticker: 'KO', name: 'The Coca-Cola Company', price: 61.78 },
];

export default function PortfolioBuilder() {
    const [budget, setBudget] = useState(1000);
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

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
                weight: equalWeight
            }));
            setPortfolio(updated);
        }
    };

    const handleRemoveStock = (ticker: string) => {
        const updated = portfolio.filter(item => item.ticker !== ticker);
        if (updated.length > 0) {
            const equalWeight = 100 / updated.length;
            setPortfolio(updated.map(item => ({ ...item, weight: equalWeight })));
        } else {
            setPortfolio([]);
        }
    };

    const handleWeightChange = (ticker: string, weight: number) => {
        setPortfolio(portfolio.map(item =>
            item.ticker === ticker ? { ...item, weight } : item
        ));
    };

    const totalWeight = portfolio.reduce((sum, item) => sum + item.weight, 0);
    const isValidPortfolio = Math.abs(totalWeight - 100) < 0.01 && portfolio.length > 0;

    const calculateAllocations = () => {
        return portfolio.map(item => ({
            ...item,
            allocation: (budget * item.weight / 100),
            shares: Math.floor((budget * item.weight / 100) / item.price),
            actualCost: Math.floor((budget * item.weight / 100) / item.price) * item.price
        }));
    };

    const allocations = calculateAllocations();
    const totalInvested = allocations.reduce((sum, item) => sum + item.actualCost, 0);
    const remaining = budget - totalInvested;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Portfolio Builder */}
                <div className="space-y-6">
                    {/* Budget Input */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5" />
                                투자 예산 설정
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-bold text-blue-600">$</span>
                                <Input
                                    type="number"
                                    value={budget}
                                    onChange={(e) => setBudget(Number(e.target.value))}
                                    className="text-xl font-semibold"
                                    min={100}
                                />
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                최소 $100 이상 권장
                            </p>
                        </CardContent>
                    </Card>

                    {/* Add Stocks */}
                    <Card>
                        <CardHeader>
                            <CardTitle>종목 추가</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {suggestedStocks.map((stock) => {
                                    const isAdded = portfolio.find(item => item.ticker === stock.ticker);
                                    return (
                                        <div key={stock.ticker} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                                            <div>
                                                <p className="font-bold">{stock.ticker}</p>
                                                <p className="text-sm text-gray-600">{stock.name}</p>
                                                <p className="text-sm font-semibold text-gray-900">${stock.price}</p>
                                            </div>
                                            <Button
                                                size="sm"
                                                onClick={() => handleAddStock(stock)}
                                                disabled={!!isAdded}
                                            >
                                                {isAdded ? '추가됨' : <><Plus className="w-4 h-4 mr-1" /> 추가</>}
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
                                <CardTitle className="flex items-center gap-2">
                                    <PieChart className="w-5 h-5" />
                                    내 포트폴리오 ({portfolio.length}개 종목)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {portfolio.map((item) => (
                                        <div key={item.ticker} className="p-4 border rounded-lg">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <p className="font-bold text-lg">{item.ticker}</p>
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
                                                <label className="text-sm font-medium">
                                                    비중: {item.weight.toFixed(1)}%
                                                </label>
                                                <Input
                                                    type="number"
                                                    value={item.weight}
                                                    onChange={(e) => handleWeightChange(item.ticker, Number(e.target.value))}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">총 비중</span>
                                        <span className={`font-bold ${isValidPortfolio ? 'text-green-600' : 'text-red-600'}`}>
                                            {totalWeight.toFixed(1)}%
                                        </span>
                                    </div>
                                    {!isValidPortfolio && totalWeight > 0 && (
                                        <p className="text-sm text-red-600 mt-2">
                                            ⚠️ 총 비중이 100%가 되어야 합니다.
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Right: Simulation Results */}
                <div>
                    <Card className="sticky top-20">
                        <CardHeader>
                            <CardTitle>시뮬레이션 결과</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {!isValidPortfolio ? (
                                <div className="text-center py-12 text-gray-500">
                                    <PieChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p>종목을 추가하고 비중을 조정해주세요</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Summary */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">총 예산</p>
                                            <p className="text-2xl font-bold text-blue-600">${budget.toFixed(2)}</p>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">실제 투자금</p>
                                            <p className="text-2xl font-bold text-green-600">${totalInvested.toFixed(2)}</p>
                                        </div>
                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">종목 수</p>
                                            <p className="text-2xl font-bold text-purple-600">{portfolio.length}개</p>
                                        </div>
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">남은 금액</p>
                                            <p className="text-2xl font-bold text-orange-600">${remaining.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    {/* Allocation Details */}
                                    <div>
                                        <h3 className="font-semibold mb-3">종목별 배분</h3>
                                        <div className="space-y-3">
                                            {allocations.map((item) => (
                                                <div key={item.ticker} className="p-3 border rounded-lg">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="font-bold">{item.ticker}</span>
                                                        <Badge>{item.weight.toFixed(1)}%</Badge>
                                                    </div>
                                                    <div className="text-sm space-y-1">
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">주당 가격</span>
                                                            <span className="font-semibold">${item.price}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">매수 수량</span>
                                                            <span className="font-semibold">{item.shares}주</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">투자금액</span>
                                                            <span className="font-semibold text-blue-600">${item.actualCost.toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tips */}
                                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-sm font-semibold text-yellow-900 mb-2">💡 포트폴리오 팁</p>
                                        <ul className="text-sm text-yellow-800 space-y-1">
                                            <li>• 분산도: {portfolio.length >= 5 ? '우수 ✅' : '보통 ⚠️'}</li>
                                            <li>• 남은 금액은 추가 투자나 현금으로 보유하세요</li>
                                            <li>• 정기적으로 리밸런싱을 고려하세요</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
