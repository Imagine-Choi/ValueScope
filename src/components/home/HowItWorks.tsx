'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, PieChart } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: '1. 종목 스크리닝',
        description: 'P/E, P/B, 배당수익률 등 원하는 조건으로 저평가 우량주를 찾습니다.',
        color: 'bg-blue-500',
    },
    {
        icon: Filter,
        title: '2. 종목 선택',
        description: '상세 분석 페이지에서 재무제표, 차트, 뉴스를 확인하고 관심종목을 선택합니다.',
        color: 'bg-purple-500',
    },
    {
        icon: PieChart,
        title: '3. 포트폴리오 구성',
        description: '소액으로 여러 종목에 분산 투자하여 안정적인 포트폴리오를 만듭니다.',
        color: 'bg-green-500',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-blue-600">3단계</span>로 시작하는 가치투자
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        복잡한 투자 전략, 쉽게 따라하세요.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative">
                                    {/* Connector Line (hidden on mobile) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0" />
                                    )}

                                    <Card className="relative z-10 h-full hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6 text-center">
                                            <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Additional Tips */}
                <div className="mt-12 max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-2 text-blue-900">💡 초보자를 위한 팁</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span><strong>처음에는 작은 금액으로 시작하세요.</strong> 100~500달러면 충분합니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span><strong>최소 5개 이상의 종목에 분산하세요.</strong> 리스크가 크게 줄어듭니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span><strong>장기 투자를 생각하세요.</strong> 가치투자는 인내심이 핵심입니다.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
