'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, PlayCircle, FileText, TrendingUp, DollarSign, PieChart, BarChart3, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const guideCategories = [
    {
        id: 'basics',
        title: '저평가 주식 찾기',
        icon: BookOpen,
        color: 'bg-blue-500',
        items: [
            { title: '저평가란 무엇인가?', description: 'P/E·P/B로 가치 판단하기', link: '/learn/find-undervalued' },
            { title: '5가지 핵심 지표', description: 'ROE·배당·부채 체크리스트', link: '/learn/find-undervalued' },
            { title: '실전 스크리닝', description: '저평가 종목 직접 찾기', link: '/screener' }
        ]
    },
    {
        id: 'terms',
        title: '투자 용어 사전',
        icon: FileText,
        color: 'bg-green-500',
        items: [
            { title: 'P/E 비율', description: '주가수익비율 완벽 이해', link: '/learn/pe-ratio' },
            { title: '배당수익률', description: '배당금과 수익률 계산법', link: '/learn/dividends' },
            { title: 'P/B·ROE·부채비율', description: '재무 건전성 지표', link: '/learn/find-undervalued' }
        ]
    },
    {
        id: 'strategy',
        title: '가치투자 전략',
        icon: TrendingUp,
        color: 'bg-purple-500',
        items: [
            { title: '워렌 버핏 투자법', description: '가치투자의 전설', link: '/learn/value-investing' },
            { title: '포트폴리오 분산', description: '리스크를 줄이는 법', link: '/learn/diversification' },
            { title: '배당 성장주 전략', description: '꾸준한 수익 만들기', link: '/learn/dividends' }
        ]
    },
    {
        id: 'practice',
        title: '실전 투자',
        icon: DollarSign,
        color: 'bg-orange-500',
        items: [
            { title: '소액 투자 시작하기', description: '100달러로 시작하는 법', link: '/portfolio' },
            { title: '저평가 종목 발굴', description: '스크리너 사용법', link: '/screener' },
            { title: '미국 주식 기초', description: '계좌 개설부터 주문까지', link: '/learn/us-stocks-basics' }
        ]
    }
];

const videoTutorials = [
    {
        id: 1,
        title: '미국 주식 투자 완전 정복 (초보편)',
        channel: '삼프로TV',
        duration: '25:30',
        thumbnail: '📺',
        url: 'https://www.youtube.com/results?search_query=미국+주식+초보+투자'
    },
    {
        id: 2,
        title: 'P/E 비율로 저평가 종목 찾기',
        channel: '신사임당',
        duration: '18:45',
        thumbnail: '📊',
        url: 'https://www.youtube.com/results?search_query=PE+비율+주식'
    },
    {
        id: 3,
        title: '배당주 투자 전략 완벽 가이드',
        channel: '슈카월드',
        duration: '32:15',
        thumbnail: '💰',
        url: 'https://www.youtube.com/results?search_query=배당주+투자+전략'
    },
    {
        id: 4,
        title: '포트폴리오 분산투자 A to Z',
        channel: '경제의 신과 함께',
        duration: '22:50',
        thumbnail: '🎯',
        url: 'https://www.youtube.com/results?search_query=포트폴리오+분산투자'
    }
];

const quickTips = [
    { icon: Lightbulb, text: '장기투자가 단기투자보다 안전합니다', color: 'text-yellow-600' },
    { icon: PieChart, text: '한 종목에 몰빵하지 마세요 (분산투자)', color: 'text-blue-600' },
    { icon: BarChart3, text: 'P/E 비율이 낮을수록 저평가 가능성', color: 'text-green-600' },
    { icon: DollarSign, text: '배당주는 꾸준한 현금흐름 제공', color: 'text-purple-600' }
];

export default function BeginnerGuide() {
    return (
        <div className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* 헤더 */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 text-sm px-4 py-2">
                        <BookOpen className="w-4 h-4 mr-2" />
                        저평가 우량주가 처음이라면
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4">
                        가치투자 A to Z
                    </h2>
                    <p className="text-xl text-gray-600">
                        숨겨진 보석 찾기부터 실전 투자까지, 초보자를 위한 완벽 가이드
                    </p>
                </div>

                {/* 카테고리별 가이드 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {guideCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Card key={category.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {category.items.map((item, index) => (
                                        <Link key={index} href={item.link}>
                                            <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                                                <p className="text-xs text-gray-600">{item.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* 유튜브 강의 섹션 */}
                <Card className="mb-12 bg-gradient-to-br from-red-50 to-pink-50">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center">
                                <PlayCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">📹 추천 유튜브 강의</CardTitle>
                                <p className="text-sm text-gray-600">영상으로 쉽게 배우는 미국 주식 투자</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                            {videoTutorials.map((video) => (
                                <a
                                    key={video.id}
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="bg-white p-4 rounded-lg hover:shadow-md transition-all cursor-pointer border border-gray-200">
                                        <div className="flex gap-4">
                                            <div className="text-4xl">{video.thumbnail}</div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1 hover:text-blue-600">
                                                    {video.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                                    <span>{video.channel}</span>
                                                    <span>•</span>
                                                    <span>{video.duration}</span>
                                                </div>
                                            </div>
                                            <PlayCircle className="w-8 h-8 text-red-500" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* 퀵 팁 */}
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                    <CardHeader>
                        <CardTitle className="text-xl">💡 초보자를 위한 핵심 팁</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                            {quickTips.map((tip, index) => {
                                const Icon = tip.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                                        <Icon className={`w-6 h-6 ${tip.color}`} />
                                        <p className="font-medium text-sm">{tip.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
