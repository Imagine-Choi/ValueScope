import StockDetail from '@/components/stock/StockDetail';

interface PageProps {
    params: Promise<{
        ticker: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { ticker } = await params;
    return {
        title: `${ticker} - 종목 상세 | ValueScope`,
        description: `${ticker} 주식의 상세 정보, 차트, 재무제표를 확인하세요.`,
    };
}

export default async function StockPage({ params }: PageProps) {
    const { ticker } = await params;

    return (
        <div className="min-h-screen bg-gray-50">
            <StockDetail ticker={ticker.toUpperCase()} />
        </div>
    );
}
