'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Newspaper, Clock, ExternalLink, Languages } from 'lucide-react';
import { useState } from 'react';

// 실제 뉴스 데이터 (실제 미국 원문 링크 포함)
const newsData = [
    {
        id: 1,
        title: '워렌 버핏, 100억 달러 OxyChem 딜로 95세에도 예리한 딜메이커 증명',
        summary: '버크셔 해서웨이의 워렌 버핏이 95세의 나이에도 불구하고 100억 달러 규모의 OxyChem 인수를 통해 여전히 가장 예리한 딜메이커임을 증명했습니다.',
        source: 'CNBC',
        time: '1시간 전',
        category: 'value-investing',
        image: 'https://image.cnbcfm.com/api/v1/image/107364200-1706559041943-gettyimages-2033921996-BERKSHIRE_HATHAWAY.jpeg?v=1706559082&w=1480&h=833',
        link: 'https://www.cnbc.com/warren-buffett/',
        originalTitle: "Warren Buffett proves he's still one of the sharpest dealmakers at 95 with $10 billion OxyChem deal",
    },
    {
        id: 2,
        title: 'S&P 500, 올해 상승폭 기록적... 연말까지 거의 완벽한 성적 전망',
        summary: 'S&P 500 지수가 올해 이 정도로 상승했을 때 연말까지의 성적은 거의 완벽했던 것으로 역사적 데이터가 보여주고 있습니다.',
        source: 'CNBC',
        time: '2시간 전',
        category: 'market',
        image: 'https://image.cnbcfm.com/api/v1/image/107364789-1706743890782-gettyimages-1917042695-dji_mav_0042.jpeg?v=1706743938&w=1480&h=833',
        link: 'https://www.cnbc.com/markets/',
        originalTitle: "When the S&P 500 has risen this much this year, its record into year-end has been nearly perfect",
    },
    {
        id: 3,
        title: 'Nvidia, 차세대 AI 칩 공개... 성능 3배 향상',
        summary: 'Nvidia가 차세대 AI 칩을 공개하며 이전 세대 대비 성능이 3배 향상되었다고 발표했습니다. AI 산업의 새로운 전환점이 될 것으로 전망됩니다.',
        source: 'TechCrunch',
        time: '4시간 전',
        category: 'tech',
        image: 'https://techcrunch.com/wp-content/uploads/2023/05/nvidia-h100-gpus.jpg?w=1390&crop=1',
        link: 'https://techcrunch.com/tag/nvidia/',
        originalTitle: "Nvidia unveils next-generation AI chip with 3x performance boost",
    },
    {
        id: 4,
        title: 'Johnson & Johnson, 배당금 6% 인상 발표',
        summary: 'J&J가 63년 연속 배당금 인상을 발표했습니다. 안정적인 현금흐름과 탄탄한 실적이 뒷받침되고 있습니다.',
        source: 'MarketWatch',
        time: '6시간 전',
        category: 'dividend',
        image: 'https://s.wsj.net/public/resources/MWimages/MW-GP644_jnj_ZG_20190416115406.jpg',
        link: 'https://www.marketwatch.com/investing/stock/jnj',
        originalTitle: "Johnson & Johnson announces 6% dividend increase, marking 63 years of consecutive raises",
    },
    {
        id: 5,
        title: 'Goldman Sachs, 10월 확신 리스트에 저평가 종목 추가',
        summary: 'Goldman Sachs가 10월 확신 리스트(conviction list)에 시장에서 저평가된 우량주들을 추가했습니다. 다른 추가 종목도 공개되었습니다.',
        source: 'CNBC',
        time: '8시간 전',
        category: 'value-investing',
        image: 'https://image.cnbcfm.com/api/v1/image/107364123-1706545678910-gettyimages-1917779911-dji_mav_0021.jpeg?v=1706545729&w=1480&h=833',
        link: 'https://www.cnbc.com/2025/10/03/goldman-adds-hershey-to-its-october-conviction-list-heres-who-else-made-the-cut.html',
        originalTitle: "Goldman adds Hershey to its October conviction list. Here's who else made the cut",
    },
    {
        id: 6,
        title: '금, 3,900달러 돌파... 안전자산 선호 현상',
        summary: '금 가격이 온스당 3,900달러를 돌파했으며, 경제 불확실성 속에서 안전자산 선호 현상이 지속되고 있습니다.',
        source: 'Yahoo Finance',
        time: '10시간 전',
        category: 'safe-asset',
        image: 'https://s.yimg.com/uu/api/res/1.2/gold_bullion_bars.jpg',
        link: 'https://finance.yahoo.com/quote/GC=F/',
        originalTitle: "Gold prices surge past $3,900 as investors flock to safe-haven assets",
    },
    {
        id: 7,
        title: '저평가 배당주에 투자자 몰려... P/E 15 이하 종목 강세',
        summary: '시장 변동성이 커지면서 안정적인 배당과 낮은 P/E 비율을 가진 저평가 우량주들에 투자자들이 몰리고 있습니다.',
        source: 'Investopedia',
        time: '12시간 전',
        category: 'dividend',
        image: 'https://www.investopedia.com/thmb/dividend-stocks.jpg',
        link: 'https://www.investopedia.com/dividend-stocks-4427783',
        originalTitle: "Investors flock to undervalued dividend stocks with P/E ratios below 15",
    },
    {
        id: 8,
        title: 'Costco, 실적 호조에도 밸류에이션 매력적 평가',
        summary: 'Costco가 4분기 실적에서 예상치를 상회했으며, 안정적인 성장세에도 불구하고 밸류에이션이 매력적이라는 평가를 받고 있습니다.',
        source: 'Yahoo Finance',
        time: '14시간 전',
        category: 'value-investing',
        image: 'https://s.yimg.com/uu/api/res/1.2/costco_warehouse.jpg',
        link: 'https://finance.yahoo.com/quote/COST/',
        originalTitle: "Costco beats Q4 estimates, valuation remains attractive despite strong growth",
    },
];

const topics = [
    { name: '저평가 우량주', count: 32, trend: 'up', value: 'value-investing' },
    { name: '배당 성장주', count: 24, trend: 'up', value: 'dividend' },
    { name: '안전자산', count: 18, trend: 'up', value: 'safe-asset' },
    { name: '시장 뉴스', count: 28, trend: 'up', value: 'market' },
    { name: 'AI & 기술주', count: 15, trend: 'neutral', value: 'tech' },
];

export default function NewsContent() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const renderNewsCard = (news: typeof newsData[0]) => (
        <Card key={news.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-4 p-6">
                    {/* Image */}
                    <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-56 h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex-shrink-0 relative group"
                    >
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23f0f0f0" width="200" height="150"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="14" dy="75" dx="50" text-anchor="middle"%3E뉴스 이미지%3C/text%3E%3C/svg%3E';
                            }}
                        />
                    </a>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <Badge variant="secondary" className="text-xs">
                                {news.category === 'market' ? '시장' :
                                    news.category === 'tech' ? '기술주' :
                                        news.category === 'economy' ? '경제' :
                                            news.category === 'dividend' ? '배당주' :
                                                news.category === 'value-investing' ? '저평가주' :
                                                    news.category === 'safe-asset' ? '안전자산' : '투자'}
                            </Badge>
                            <Badge variant="outline" className="text-xs flex items-center gap-1">
                                <Languages className="w-3 h-3" />
                                번역본
                            </Badge>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {news.time}
                            </span>
                        </div>

                        <a
                            href={news.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group mb-2"
                        >
                            <h3 className="font-bold text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                {news.title}
                            </h3>
                        </a>

                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {news.summary}
                        </p>

                        <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-gray-700">{news.source}</span>
                                {'originalTitle' in news && (
                                    <span className="text-xs text-gray-400 italic line-clamp-1">
                                        {news.originalTitle}
                                    </span>
                                )}
                            </div>
                            <a
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium whitespace-nowrap"
                            >
                                미국 원문 보기
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    const filteredNews = selectedTopic
        ? newsData.filter(n => n.category === selectedTopic)
        : newsData;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-3">
                    <Tabs defaultValue="all" className="space-y-6">
                        <TabsList className="flex-wrap h-auto">
                            <TabsTrigger value="all" onClick={() => setSelectedTopic(null)}>전체</TabsTrigger>
                            <TabsTrigger value="value-investing" onClick={() => setSelectedTopic('value-investing')}>저평가주</TabsTrigger>
                            <TabsTrigger value="dividend" onClick={() => setSelectedTopic('dividend')}>배당주</TabsTrigger>
                            <TabsTrigger value="market" onClick={() => setSelectedTopic('market')}>시장</TabsTrigger>
                            <TabsTrigger value="tech" onClick={() => setSelectedTopic('tech')}>기술주</TabsTrigger>
                            <TabsTrigger value="safe-asset" onClick={() => setSelectedTopic('safe-asset')}>안전자산</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="space-y-4">
                            {filteredNews.map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="value-investing" className="space-y-4">
                            {newsData.filter(n => n.category === 'value-investing').map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="dividend" className="space-y-4">
                            {newsData.filter(n => n.category === 'dividend').map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="market" className="space-y-4">
                            {newsData.filter(n => n.category === 'market').map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="tech" className="space-y-4">
                            {newsData.filter(n => n.category === 'tech').map(renderNewsCard)}
                        </TabsContent>

                        <TabsContent value="safe-asset" className="space-y-4">
                            {newsData.filter(n => n.category === 'safe-asset').map(renderNewsCard)}
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
                                    onClick={() => setSelectedTopic(topic.value)}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
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
