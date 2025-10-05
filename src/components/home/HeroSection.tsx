'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Shield } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                        <TrendingUp className="w-4 h-4" />
                        초보자를 위한 가치투자 플랫폼
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        소액으로 시작하는<br />
                        <span className="text-blue-200">미국 우량주 투자</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        저평가된 우량주를 쉽게 찾고, 스마트하게 분산투자 하세요.
                        초보자도 5분이면 시작할 수 있습니다.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link href="/screener">
                            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg">
                                무료로 시작하기
                            </Button>
                        </Link>
                        <Link href="/learn">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
                                투자 가이드 보기
                            </Button>
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg">
                            <DollarSign className="w-8 h-8 mb-2 text-blue-200" />
                            <h3 className="font-semibold mb-1">소액 투자 가능</h3>
                            <p className="text-sm text-blue-200">100달러부터 시작</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg">
                            <TrendingUp className="w-8 h-8 mb-2 text-blue-200" />
                            <h3 className="font-semibold mb-1">스마트 스크리닝</h3>
                            <p className="text-sm text-blue-200">AI 밸류 분석</p>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg">
                            <Shield className="w-8 h-8 mb-2 text-blue-200" />
                            <h3 className="font-semibold mb-1">초보자 친화</h3>
                            <p className="text-sm text-blue-200">쉬운 가이드 제공</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
