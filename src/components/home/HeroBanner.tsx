'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, PieChart, BookOpen } from 'lucide-react';
import Link from 'next/link';

const banners = [
    {
        id: 1,
        title: '🎯 소액으로 시작하는 미국 주식',
        description: '100달러부터 시작 가능! 분산투자로 리스크를 줄이세요',
        gradient: 'from-blue-500 to-purple-600',
        icon: DollarSign,
        link: '/portfolio',
        buttonText: '포트폴리오 시작하기'
    },
    {
        id: 2,
        title: '📊 가치투자 종목 스크리너',
        description: 'P/E, 배당수익률로 저평가 우량주를 찾아보세요',
        gradient: 'from-green-500 to-teal-600',
        icon: TrendingUp,
        link: '/screener',
        buttonText: '종목 검색하기'
    },
    {
        id: 3,
        title: '🎓 초보자를 위한 투자 가이드',
        description: 'P/E 비율부터 배당투자까지, 쉽게 배우는 가치투자',
        gradient: 'from-orange-500 to-red-600',
        icon: BookOpen,
        link: '/learn',
        buttonText: '학습 시작하기'
    },
    {
        id: 4,
        title: '💎 배당 성장주 찾기',
        description: '매년 배당금이 늘어나는 안정적인 기업을 발견하세요',
        gradient: 'from-pink-500 to-rose-600',
        icon: PieChart,
        link: '/screener',
        buttonText: '배당주 보기'
    }
];

export default function HeroBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const currentBanner = banners[currentIndex];
    const Icon = currentBanner.icon;

    return (
        <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* 메인 배너 */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Link href={currentBanner.link}>
                        <div className={`bg-gradient-to-r ${currentBanner.gradient} p-12 md:p-16 text-white cursor-pointer hover:scale-[1.02] transition-transform duration-300`}>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Icon className="w-12 h-12" />
                                        <h2 className="text-4xl md:text-5xl font-bold">
                                            {currentBanner.title}
                                        </h2>
                                    </div>
                                    <p className="text-xl md:text-2xl mb-6 text-white/90">
                                        {currentBanner.description}
                                    </p>
                                    <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        {currentBanner.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* 네비게이션 버튼 */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* 인디케이터 */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {banners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-white w-8'
                                        : 'bg-white/50 hover:bg-white/75'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* 썸네일 배너들 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {banners.map((banner, index) => {
                        const BannerIcon = banner.icon;
                        return (
                            <Link key={banner.id} href={banner.link}>
                                <Card
                                    className={`p-4 cursor-pointer hover:shadow-lg transition-all ${index === currentIndex ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <div className={`bg-gradient-to-r ${banner.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                                        <BannerIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                                        {banner.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 line-clamp-2">
                                        {banner.description}
                                    </p>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
