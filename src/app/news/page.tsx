import NewsContent from '@/components/news/NewsContent';

export const metadata = {
    title: '주식 뉴스 & 토픽 | ValueScope',
    description: '최신 미국 주식 시장 뉴스, 토픽, 기사를 한눈에 확인하세요',
};

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">📰 주식 뉴스 & 토픽</h1>
                    <p className="text-xl text-green-100">
                        최신 미국 주식 시장 소식을 빠르게 확인하세요
                    </p>
                </div>
            </div>
            <NewsContent />
        </div>
    );
}
