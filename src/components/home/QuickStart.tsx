'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function QuickStart() {
    const [budget, setBudget] = useState(1000);
    const [numStocks, setNumStocks] = useState(5);

    const perStock = budget / numStocks;
    const estimatedDiversification = numStocks >= 5 ? '우수' : numStocks >= 3 ? '보통' : '낮음';

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-4">
                            <Calculator className="w-4 h-4" />
                            빠른 시작
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            내 예산으로 <span className="text-blue-600">어떻게 투자할까?</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            간단한 시뮬레이션으로 나만의 포트폴리오를 미리 확인해보세요.
                        </p>
                    </div>

                    <Card className="shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl">포트폴리오 시뮬레이터</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Budget Input */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    투자 예산 (USD)
                                </label>
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold text-blue-600">$</span>
                                    <Input
                                        type="number"
                                        value={budget}
                                        onChange={(e) => setBudget(Number(e.target.value))}
                                        className="text-xl font-semibold"
                                        min={100}
                                        max={100000}
                                    />
                                </div>
                            </div>

                            {/* Number of Stocks Slider */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    분산할 종목 수: <span className="text-blue-600 font-bold">{numStocks}개</span>
                                </label>
                                <Slider
                                    value={[numStocks]}
                                    onValueChange={(value) => setNumStocks(value[0])}
                                    min={3}
                                    max={15}
                                    step={1}
                                    className="mt-4"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>3개 (집중)</span>
                                    <span>15개 (고분산)</span>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="bg-blue-50 rounded-lg p-6 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">종목당 투자금액</span>
                                    <span className="text-2xl font-bold text-blue-600">
                                        ${perStock.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">포트폴리오 분산도</span>
                                    <span className={`font-bold ${estimatedDiversification === '우수' ? 'text-green-600' :
                                            estimatedDiversification === '보통' ? 'text-yellow-600' :
                                                'text-red-600'
                                        }`}>
                                        {estimatedDiversification}
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/portfolio" className="flex-1">
                                    <Button size="lg" className="w-full">
                                        포트폴리오 만들기
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                <Link href="/screener" className="flex-1">
                                    <Button size="lg" variant="outline" className="w-full">
                                        종목 스크리너 보기
                                    </Button>
                                </Link>
                            </div>

                            {/* Tip */}
                            <p className="text-sm text-gray-500 text-center">
                                💡 <strong>초보자 팁:</strong> 최소 5개 이상의 종목에 분산 투자하면 리스크가 크게 줄어듭니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
