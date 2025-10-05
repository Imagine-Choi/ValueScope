'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Newspaper, Clock, ExternalLink } from 'lucide-react';

// Mock 뉴스 데이터
const newsData = [
    {
        id: 1,
        title: 'S&P 500, 사상 최고치 경신... 기술주 강세 지속',
        summary: 'S&P 500 지수가 사상 최고치를 경신하며 강세장이 이어지고 있습니다. 특히 AI 관련 기술주들의 실적 호조가 시장을 이끌고 있습니다.',
        source: 'Reuters',
        time: '2시간 전',
        category: 'market',
        image: '/news-placeholder.jpg',
        link: '#',
    },
    {
        id: 2,
        title: 'Apple, 신제품 발표회 예고... 주가 3% 상승',
        summary: 'Apple이 다음 주 신제품 발표회를 예고하면서 투자자들의 기대감이 높아지고 있습니다. 시장에서는 새로운 Mac 라인업 출시를 전망하고 있습니다.',
        source: 'Bloomberg',
        time: '4시간 전',
        category: 'tech',
        image: '/news-placeholder.jpg',
        link: '#',
    },
    {
        id: 3,
        title: 'Fed, 금리 동결 시사... 주식 시장 긍정 반응',
        summary: '연방준비제도가 다음 회의에서 금리를 동결할 가능성을 시사하면서 주식 시장이 긍정적으로 반응했습니다.',
        source: 'CNBC',
        time: '6시간 전',
        category: 'economy',
        image: '/news-placeholder.jpg',
        link: '#',
    },
    {
        id: 4,
        title: 'Microsoft, 클라우드 사업 성장세... 목표가 상향',
        summary: 'Microsoft의 Azure 클라우드 사업이 예상을 뛰어넘는 성장세를 보이면서 주요 증권사들이 목표가를 일제히 상향 조정했습니다.',
        source: 'Wall Street Journal',
        time: '8시간 전',
        category: 'tech',
        image: '/news-placeholder.jpg',
        link: '#',
    },
    {
        id: 5,
        title: '배당주 재조명... 안정적 수익 추구 투자자 증가',
        summary: '금리 불확실성 속에서 안정적인 배당 수익을 제공하는 배당주들이 재조명받고 있습니다. P&G, KO 등 전통 배당주 강세.',
        source: 'MarketWatch',
        time: '10시간 전',
        category: 'investing',
        image: '/news-placeholder.jpg',
        link: '#',
    },
    {
        id: 6,
        title: 'Tesla 3분기 실적 발표 앞두고 주가 변동성 확대',
        summary: 'Tesla의 3분기 실적 발표를 앞두고 시장의 관심이 집중되고 있습니다. 애널리스트들은 배터리 기술 발표 여부에 주목하고 있습니다.',
        source: 'Financial Times',
        time: '12시간 전',
        category: 'tech',
        image: '/news-placeholder.jpg',
        link: '#',
    },
];

const topics = [
    { name: 'AI & 기술', count: 24, trend: 'up' },
    { name: '금리 정책', count: 18, trend: 'neutral' },
    { name: '배당주', count: 12, trend: 'up' },
    { name: '실적 발표', count: 31, trend: 'up' },
    { name: '반도체', count: 15, trend: 'down' },
];

export default function NewsContent() {
    const renderNewsCard = (news: typeof newsData[0]) => (
        <Card key={news.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-4 p-6">
                    {/* Image */}
                    <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Newspaper className="w-12 h-12 text-gray-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-bold text-lg leading-tight hover:text-blue-600 cursor-pointer">
                                {news.title}
                            </h3>
                            <Badge variant="secondary" className="flex-shrink-0">
                                {news.category}
                            </Badge>
                        </div>

                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {news.summary}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                                <span className="font-medium">{news.source}</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {news.time}
                                </span>
                            </div>
                            <a
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                            >
                                원문 보기
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-3">
                    <Tabs defaultValue="all" className="space-y-6">
                        <TabsList>
                            <TabsTrigger value="all">전체</TabsTrigger>
                            <TabsTrigger value="market">시장</TabsTrigger>
                            <TabsTrigger value="tech">기술주</TabsTrigger>
                            <TabsTrigger value="economy">경제</TabsTrigger>
                            <TabsTrigger value="investing">투자전략</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="space-y-4">
                            {newsData.map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="market" className="space-y-4">
                            {newsData.filter(n => n.category === 'market').map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="tech" className="space-y-4">
                            {newsData.filter(n => n.category === 'tech').map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="economy" className="space-y-4">
                            {newsData.filter(n => n.category === 'economy').map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="investing" className="space-y-4">
                            {newsData.filter(n => n.category === 'investing').map(renderNewsCard)}
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Trending Topics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" />
                                인기 토픽
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {topics.map((topic, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                                >
                                    <div>
                                        <p className="font-semibold">{topic.name}</p>
                                        <p className="text-xs text-gray-500">{topic.count}개 기사</p>
                                    </div>
                                    <div>
                                        {topic.trend === 'up' && <TrendingUp className="w-5 h-5 text-green-600" />}
                                        {topic.trend === 'down' && <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Quick Links */}
                    <Card>
                        <CardHeader>
                            <CardTitle>주요 소식통</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <a href="https://www.bloomberg.com" target="_blank" rel="noopener noreferrer"
                                className="block p-2 hover:bg-gray-50 rounded transition-colors">
                                <p className="font-medium">Bloomberg</p>
                                <p className="text-xs text-gray-500">금융 뉴스</p>
                            </a>
                            <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer"
                                className="block p-2 hover:bg-gray-50 rounded transition-colors">
                                <p className="font-medium">Reuters</p>
                                <p className="text-xs text-gray-500">세계 뉴스</p>
                            </a>
                            <a href="https://www.cnbc.com" target="_blank" rel="noopener noreferrer"
                                className="block p-2 hover:bg-gray-50 rounded transition-colors">
                                <p className="font-medium">CNBC</p>
                                <p className="text-xs text-gray-500">비즈니스 뉴스</p>
                            </a>
                            <a href="https://www.wsj.com" target="_blank" rel="noopener noreferrer"
                                className="block p-2 hover:bg-gray-50 rounded transition-colors">
                                <p className="font-medium">WSJ</p>
                                <p className="text-xs text-gray-500">월스트리트 저널</p>
                            </a>
                        </CardContent>
                    </Card>

                    {/* Market Summary */}
                    <Card>
                        <CardHeader>
                            <CardTitle>시장 현황</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">S&P 500</span>
                                <span className="font-bold text-green-600">+0.8%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">NASDAQ</span>
                                <span className="font-bold text-green-600">+1.2%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">DOW</span>
                                <span className="font-bold text-red-600">-0.3%</span>
                            </div>
                            <p className="text-xs text-gray-500 pt-2 border-t">
                                마지막 업데이트: 2시간 전
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
