import ScreenerContent from '@/components/screener/ScreenerContent';

export const metadata = {
    title: '종목 스크리너 | ValueScope',
    description: '미국 저평가 우량주를 찾아보세요. P/E, P/B, 배당수익률 등 다양한 필터로 스크리닝.',
};

export default function ScreenerPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">종목 스크리너</h1>
                    <p className="text-xl text-blue-100">
                        원하는 조건으로 저평가 우량주를 찾아보세요
                    </p>
                </div>
            </div>
            <ScreenerContent />
        </div>
    );
}
