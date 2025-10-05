'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, TrendingUp, PieChart, DollarSign } from 'lucide-react';
import Link from 'next/link';

const educationalContent = [
    {
        icon: BookOpen,
        title: 'P/E 비율이란?',
        description: '주가수익비율(P/E)은 주가를 주당순이익으로 나눈 값으로, 주식이 얼마나 저평가되어 있는지 판단하는 핵심 지표입니다.',
        color: 'bg-blue-500',
        link: '/learn/pe-ratio'
    },
    {
        icon: DollarSign,
        title: '배당 투자 시작하기',
        description: '배당주는 정기적으로 현금을 받을 수 있는 주식입니다. 안정적인 수익을 원한다면 배당수익률 3% 이상 종목을 주목하세요.',
        color: 'bg-green-500',
        link: '/learn/dividends'
    },
    {
        icon: PieChart,
        title: '포트폴리오 분산의 중요성',
        description: '한 종목에 몰빵은 위험해요! 최소 5~10개 종목에 분산투자하여 리스크를 낮추고 안정적인 수익을 추구하세요.',
        color: 'bg-purple-500',
        link: '/learn/diversification'
    },
    {
        icon: TrendingUp,
        title: '가치투자 전략',
        description: '워런 버핏처럼 저평가된 우량기업을 찾아 장기 보유하세요. PER, PBR, FCF를 확인하여 진짜 가치를 발견하세요.',
        color: 'bg-orange-500',
        link: '/learn/value-investing'
    },
];

export default function EducationalBanner() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        미국 주식 <span className="text-blue-600">입문 가이드</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        주식 투자가 처음이신가요? 핵심 개념부터 차근차근 알려드릴게요.
                    </p>
                </div>

                {/* Educational Cards - Horizontal Scroll on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {educationalContent.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link href={item.link} key={index}>
                                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                                    <CardContent className="p-6">
                                        <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA to Learning Center */}
                <div className="text-center mt-8">
                    <Link
                        href="/learn"
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                    >
                        더 많은 가이드 보기
                        <TrendingUp className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
