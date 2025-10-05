import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, TrendingUp, PieChart, DollarSign, Target, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: '투자 가이드 | ValueScope',
    description: '미국 주식 투자 초보자를 위한 학습 자료',
};

const guides = [
    {
        icon: BarChart3,
        title: 'P/E 비율 이해하기',
        description: '주가수익비율(Price-to-Earnings Ratio)은 주식 가치평가의 가장 기본적인 지표입니다.',
        content: [
            'P/E 비율 = 주가 ÷ 주당순이익(EPS)',
            '일반적으로 P/E가 낮을수록 저평가된 것으로 판단',
            '업종별로 평균 P/E가 다르므로 동종업계와 비교 필요',
            '성장주는 높은 P/E, 가치주는 낮은 P/E 경향',
        ],
        example: 'Apple의 P/E가 30이고 업종 평균이 25라면, Apple은 업종 대비 높은 편입니다.',
        link: '/learn/pe-ratio',
        color: 'bg-blue-500',
    },
    {
        icon: DollarSign,
        title: '배당 투자 시작하기',
        description: '배당주는 정기적으로 현금을 지급하는 주식으로, 안정적인 수익을 추구하는 투자자에게 적합합니다.',
        content: [
            '배당수익률 = (연간 배당금 ÷ 주가) × 100',
            '배당수익률 3% 이상이 일반적으로 매력적',
            '배당 지급 히스토리와 안정성 확인 필수',
            '배당귀족주(25년 이상 연속 배당 증가) 주목',
        ],
        example: 'Johnson & Johnson은 60년 이상 배당을 늘려온 대표적인 배당귀족주입니다.',
        link: '/learn/dividends',
        color: 'bg-green-500',
    },
    {
        icon: PieChart,
        title: '포트폴리오 분산의 중요성',
        description: '분산투자는 리스크를 줄이는 가장 효과적인 방법입니다. "계란을 한 바구니에 담지 마라"',
        content: [
            '최소 5~10개 종목에 분산 투자 권장',
            '다양한 업종과 지역에 분산',
            '한 종목에 20% 이상 집중 지양',
            '정기적인 리밸런싱으로 원래 비중 유지',
        ],
        example: '$1,000 예산이라면 5개 종목에 각 $200씩 분산하는 것이 좋습니다.',
        link: '/learn/diversification',
        color: 'bg-purple-500',
    },
    {
        icon: TrendingUp,
        title: '가치투자 전략',
        description: '워런 버핏이 사용하는 전략. 내재가치보다 저평가된 우량기업을 찾아 장기 보유합니다.',
        content: [
            'P/E, P/B, FCF 등 밸류에이션 지표 활용',
            '경쟁우위(moat)를 가진 기업 선호',
            '단기 변동성 무시, 장기 관점 유지',
            '안전마진(Margin of Safety) 확보',
        ],
        example: '코카콜라는 강력한 브랜드 파워(경쟁우위)를 가진 대표적인 가치투자 종목입니다.',
        link: '/learn/value-investing',
        color: 'bg-orange-500',
    },
    {
        icon: Target,
        title: 'P/B 비율과 자산가치',
        description: '주가순자산비율(P/B)은 주가를 순자산(자본)으로 나눈 값으로, 자산 대비 주가를 평가합니다.',
        content: [
            'P/B = 주가 ÷ 주당순자산(BPS)',
            'P/B < 1이면 장부가치보다 저평가',
            '은행, 보험 등 금융주 평가에 유용',
            '자산이 많은 제조업, 부동산 기업에 적합',
        ],
        example: 'P/B가 0.8이라면 시장이 회사 자산을 20% 할인해서 평가하는 것입니다.',
        link: '/learn/pb-ratio',
        color: 'bg-cyan-500',
    },
    {
        icon: BookOpen,
        title: '초보자를 위한 투자 체크리스트',
        description: '처음 투자를 시작할 때 꼭 확인해야 할 사항들입니다.',
        content: [
            '투자 목표와 기간 설정 (단기/장기)',
            '손실 감내 가능 금액만 투자',
            '투자 전 기업 재무제표 확인',
            '감정적 결정 지양, 원칙 준수',
            '정기적인 포트폴리오 점검',
        ],
        example: '비상금을 제외한 여유자금으로 시작하고, 매월 정해진 날에 포트폴리오를 점검하세요.',
        link: '/learn/checklist',
        color: 'bg-pink-500',
    },
];

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="w-8 h-8" />
                            <h1 className="text-4xl font-bold">투자 가이드</h1>
                        </div>
                        <p className="text-xl text-indigo-100">
                            미국 주식 투자의 기초부터 차근차근 배워보세요
                        </p>
                        <p className="text-indigo-200 mt-2">
                            초보자도 쉽게 이해할 수 있도록 핵심만 정리했습니다
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto space-y-8">
                    {guides.map((guide, index) => {
                        const Icon = guide.icon;
                        return (
                            <Card key={index} className="hover:shadow-xl transition-shadow">
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 ${guide.color} rounded-xl flex items-center justify-center`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold mb-3">{guide.title}</h2>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {guide.description}
                                            </p>

                                            {/* Key Points */}
                                            <div className="mb-4">
                                                <h3 className="font-semibold mb-2 text-gray-900">핵심 포인트:</h3>
                                                <ul className="space-y-2">
                                                    {guide.content.map((point, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                                            <span className="text-blue-600 font-bold mt-1">✓</span>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Example */}
                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                                <p className="text-sm font-semibold text-blue-900 mb-1">📌 예시</p>
                                                <p className="text-sm text-blue-800">{guide.example}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-12 max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
                    <h2 className="text-3xl font-bold mb-4">이제 실전에 도전해보세요!</h2>
                    <p className="text-lg mb-6 text-blue-100">
                        배운 내용을 바탕으로 나만의 포트폴리오를 만들어보세요
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/screener">
                            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors">
                                종목 스크리너 시작
                            </button>
                        </Link>
                        <Link href="/portfolio">
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors">
                                포트폴리오 만들기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
