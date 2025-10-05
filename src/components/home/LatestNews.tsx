'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Newspaper, Clock, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const latestNews = [
    {
        id: 1,
        title: '워렌 버핏, 100억 달러 OxyChem 딜로 95세에도 예리한 딜메이커 증명',
        summary: '버크셔 해서웨이의 워렌 버핏이 95세의 나이에도 불구하고 100억 달러 규모의 OxyChem 인수를 통해 여전히 가장 예리한 딜메이커임을 증명했습니다.',
        source: 'CNBC',
        time: '1시간 전',
        category: '가치투자',
        image: 'https://image.cnbcfm.com/api/v1/image/107364200-1706559041943-gettyimages-2033921996-BERKSHIRE_HATHAWAY.jpeg?v=1706559082&w=1480&h=833',
        link: 'https://www.cnbc.com/warren-buffett/',
    },
    {
        id: 2,
        title: 'Goldman Sachs, 10월 확신 리스트에 저평가 종목 추가',
        summary: 'Goldman Sachs가 10월 확신 리스트에 시장에서 저평가된 우량주들을 추가했습니다.',
        source: 'CNBC',
        time: '3시간 전',
        category: '저평가주',
        image: 'https://image.cnbcfm.com/api/v1/image/107364123-1706545678910-gettyimages-1917779911-dji_mav_0021.jpeg?v=1706545729&w=1480&h=833',
        link: 'https://www.cnbc.com/2025/10/03/goldman-adds-hershey-to-its-october-conviction-list-heres-who-else-made-the-cut.html',
    },
    {
        id: 3,
        title: 'Johnson & Johnson, 배당금 6% 인상 발표',
        summary: 'J&J가 63년 연속 배당금 인상을 발표했습니다. 안정적인 현금흐름과 탄탄한 실적이 뒷받침되고 있습니다.',
        source: 'MarketWatch',
        time: '5시간 전',
        category: '배당주',
        image: 'https://s.wsj.net/public/resources/MWimages/MW-GP644_jnj_ZG_20190416115406.jpg',
        link: 'https://www.marketwatch.com/investing/stock/jnj',
    },
    {
        id: 4,
        title: 'S&P 500, 올해 상승폭 기록적... 연말까지 거의 완벽한 성적 전망',
        summary: 'S&P 500 지수가 올해 이 정도로 상승했을 때 연말까지의 성적은 거의 완벽했던 것으로 역사적 데이터가 보여주고 있습니다.',
        source: 'CNBC',
        time: '7시간 전',
        category: '시장',
        image: 'https://image.cnbcfm.com/api/v1/image/107364789-1706743890782-gettyimages-1917042695-dji_mav_0042.jpeg?v=1706743938&w=1480&h=833',
        link: 'https://www.cnbc.com/markets/',
    },
    {
        id: 5,
        title: '저평가 배당주에 투자자 몰려... P/E 15 이하 종목 강세',
        summary: '시장 변동성이 커지면서 안정적인 배당과 낮은 P/E 비율을 가진 저평가 우량주들에 투자자들이 몰리고 있습니다.',
        source: 'Investopedia',
        time: '9시간 전',
        category: '투자전략',
        image: 'https://www.investopedia.com/thmb/dividend-stocks.jpg',
        link: 'https://www.investopedia.com/dividend-stocks-4427783',
    },
];

export default function LatestNews() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <Badge className="mb-3">
                        <Newspaper className="w-4 h-4 mr-2" />
                        실시간 업데이트
                    </Badge>
                    <h2 className="text-3xl font-bold">최신 핫토픽 뉴스</h2>
                    <p className="text-gray-600 mt-2">
                        가치투자와 저평가 우량주 관련 최신 소식을 확인하세요
                    </p>
                </div>
                <Link href="/news">
                    <Button variant="outline" className="gap-2">
                        전체 뉴스
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestNews.map((news) => (
                    <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                        <a
                            href={news.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="150" dx="130" text-anchor="middle"%3E뉴스 이미지%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                                <div className="absolute top-3 left-3">
                                    <Badge className="bg-blue-600 text-white">
                                        {news.category}
                                    </Badge>
                                </div>
                            </div>

                            {/* Content */}
                            <CardContent className="p-5">
                                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                                    <span className="font-medium">{news.source}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {news.time}
                                    </span>
                                </div>

                                <h3 className="font-bold text-base leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {news.title}
                                </h3>

                                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                                    {news.summary}
                                </p>

                                <div className="flex items-center text-blue-600 text-sm font-medium">
                                    원문 보기
                                    <ExternalLink className="w-4 h-4 ml-1" />
                                </div>
                            </CardContent>
                        </a>
                    </Card>
                ))}
            </div>
        </section>
    );
}
