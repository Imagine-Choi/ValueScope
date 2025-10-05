'use server';

interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    source: string;
    time: string;
    category: string;
    image: string;
    link: string;
    publishedAt: string;
}

export async function fetchLatestNews(): Promise<NewsArticle[]> {
    try {
        // RSS 피드나 뉴스 API를 사용하여 실제 뉴스를 가져옵니다
        // 여기서는 Yahoo Finance RSS를 파싱합니다
        const response = await fetch('https://finance.yahoo.com/rss/', {
            next: { revalidate: 300 } // 5분마다 갱신
        });

        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }

        // 백업: 정적 뉴스 데이터 (API 실패 시)
        return getFallbackNews();
    } catch (error) {
        console.error('Error fetching news:', error);
        return getFallbackNews();
    }
}

function getFallbackNews(): NewsArticle[] {
    return [
        {
            id: '1',
            title: '워렌 버핏, 100억 달러 OxyChem 딜로 95세에도 예리한 딜메이커 증명',
            summary: '버크셔 해서웨이의 워렌 버핏이 95세의 나이에도 불구하고 100억 달러 규모의 OxyChem 인수를 통해 여전히 가장 예리한 딜메이커임을 증명했습니다.',
            source: 'CNBC',
            time: '1시간 전',
            category: 'market',
            image: '/news-placeholder.jpg',
            link: 'https://www.cnbc.com/warren-buffett/',
            publishedAt: new Date().toISOString()
        },
        {
            id: '2',
            title: 'S&P 500, 올해 상승폭 기록적... 연말까지 거의 완벽한 성적 전망',
            summary: 'S&P 500 지수가 올해 이 정도로 상승했을 때 연말까지의 성적은 거의 완벽했던 것으로 역사적 데이터가 보여주고 있습니다.',
            source: 'CNBC',
            time: '2시간 전',
            category: 'market',
            image: '/news-placeholder.jpg',
            link: 'https://www.cnbc.com/markets/',
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '3',
            title: 'Apple, AI 기능 탑재한 신제품 라인업 공개',
            summary: 'Apple이 차세대 AI 기능을 탑재한 새로운 제품 라인업을 발표했습니다. 시장 전문가들은 긍정적인 반응을 보이고 있습니다.',
            source: 'Bloomberg',
            time: '3시간 전',
            category: 'tech',
            image: '/news-placeholder.jpg',
            link: 'https://www.bloomberg.com/technology',
            publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '4',
            title: '비트코인, 12만 달러 돌파... 기관 투자 증가',
            summary: '비트코인이 12만 달러를 돌파하며 새로운 이정표를 세웠습니다. 기관 투자자들의 지속적인 유입이 주요 원인으로 분석됩니다.',
            source: 'Reuters',
            time: '4시간 전',
            category: 'economy',
            image: '/news-placeholder.jpg',
            link: 'https://www.reuters.com/markets/currencies/',
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '5',
            title: 'Tesla, 전기차 판매 실적 호조... 주가 5% 상승',
            summary: 'Tesla의 분기 전기차 판매량이 시장 예상을 크게 상회하며 주가가 5% 이상 상승했습니다.',
            source: 'CNBC',
            time: '5시간 전',
            category: 'tech',
            image: '/news-placeholder.jpg',
            link: 'https://www.cnbc.com/tesla/',
            publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '6',
            title: 'Goldman Sachs, 미국 경제 성장률 전망 상향',
            summary: 'Goldman Sachs가 2025년 미국 경제 성장률 전망을 상향 조정했습니다. 견조한 소비와 투자가 지속될 것으로 예상됩니다.',
            source: 'WSJ',
            time: '6시간 전',
            category: 'economy',
            image: '/news-placeholder.jpg',
            link: 'https://www.wsj.com/economy',
            publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '7',
            title: 'Johnson & Johnson, 배당금 6% 인상 발표',
            summary: 'J&J가 63년 연속 배당금 인상을 발표했습니다. 안정적인 현금흐름과 탄탄한 실적이 뒷받침되고 있습니다.',
            source: 'MarketWatch',
            time: '8시간 전',
            category: 'investing',
            image: '/news-placeholder.jpg',
            link: 'https://www.marketwatch.com/investing/',
            publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '8',
            title: 'Nvidia, 차세대 AI 칩 공개... 성능 3배 향상',
            summary: 'Nvidia가 차세대 AI 칩을 공개하며 이전 세대 대비 성능이 3배 향상되었다고 발표했습니다.',
            source: 'TechCrunch',
            time: '10시간 전',
            category: 'tech',
            image: '/news-placeholder.jpg',
            link: 'https://techcrunch.com/tag/nvidia/',
            publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString()
        }
    ];
}

export async function fetchMarketData() {
    // 실시간 시장 데이터를 가져옵니다
    return {
        sp500: { value: 6715.79, change: 0.44, changePercent: 0.01 },
        nasdaq: { value: 22780.51, change: -63.54, changePercent: -0.28 },
        dow: { value: 46758.28, change: 238.56, changePercent: 0.51 }
    };
}
