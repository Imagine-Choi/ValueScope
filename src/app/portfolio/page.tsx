import PortfolioBuilder from '@/components/portfolio/PortfolioBuilder';

export const metadata = {
    title: '포트폴리오 빌더 | ValueScope',
    description: '소액으로 분산 투자 포트폴리오를 만들어보세요',
};

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">포트폴리오 빌더</h1>
                    <p className="text-xl text-purple-100">
                        소액으로 분산 투자 포트폴리오를 만들어보세요
                    </p>
                </div>
            </div>
            <PortfolioBuilder />
        </div>
    );
}
