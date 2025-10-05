'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign, BookOpen, LineChart } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        id: 1,
        title: '저평가 스크리너',
        description: 'P/E·PB 낮은 우량주',
        icon: TrendingUp,
        gradient: 'from-blue-500 to-blue-600',
        link: '/screener'
    },
    {
        id: 2,
        title: '배당 성장주',
        description: '안정적 현금흐름',
        icon: DollarSign,
        gradient: 'from-green-500 to-green-600',
        link: '/screener'
    },
    {
        id: 3,
        title: '가치투자 가이드',
        description: '워렌 버핏 전략',
        icon: BookOpen,
        gradient: 'from-purple-500 to-purple-600',
        link: '/learn/value-investing'
    },
    {
        id: 4,
        title: '소액 분산투자',
        description: '100달러부터 시작',
        icon: LineChart,
        gradient: 'from-orange-500 to-orange-600',
        link: '/portfolio'
    }
];

export default function SimpleHero() {
    return (
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Main Heading */}
                <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        🎯 상승확률이 큰 숨겨진 보석 찾기
                    </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    저평가 우량주 스크리닝 플랫폼
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    P/E·배당으로 찾는 숨은 가치주 · 소액 분산투자 시뮬레이션 · 초보자 완벽 가이드
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <Link key={feature.id} href={feature.link}>
                                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-400">
                                    <div className={`bg-gradient-to-r ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/screener">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                            저평가 종목 찾기
                        </button>
                    </Link>
                    <Link href="/learn/value-investing">
                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
                            가치투자 배우기
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
