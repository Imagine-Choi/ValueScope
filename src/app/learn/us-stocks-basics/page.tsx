import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BookOpen, ExternalLink, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: '미국 주식 기초 - ValueScope',
    description: '미국 주식 투자를 시작하기 위한 필수 기초 지식을 학습하세요',
};

export default function USStocksBasics() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4">
                        <BookOpen className="w-4 h-4 mr-2" />
                        미국 주식 기초
                    </Badge>
                    <h1 className="text-4xl font-bold mb-4">미국 주식 투자 A to Z</h1>
                    <p className="text-xl text-gray-600">
                        미국 주식 시장의 기본 개념부터 투자 시작까지 완벽 가이드
                    </p>
                </div>

                {/* 1. 미국 증시란? */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">1. 미국 증시란?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            미국 증시는 세계 최대 규모의 주식 시장으로, 전 세계 시가총액의 약 40%를 차지합니다.
                            한국에서도 해외주식 계좌를 통해 쉽게 투자할 수 있으며, Apple, Microsoft, Tesla 같은
                            글로벌 기업들에 투자할 수 있습니다.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3 text-blue-900">주요 거래소</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <span className="font-semibold">NYSE (뉴욕증권거래소)</span>
                                        <p className="text-sm text-gray-700">전통적인 대형주 중심 (코카콜라, JP모건 등)</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <span className="font-semibold">NASDAQ (나스닥)</span>
                                        <p className="text-sm text-gray-700">기술주 중심 (Apple, Microsoft, Tesla 등)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-700">
                                <strong>💡 Tip:</strong> 미국 증시는 한국 시간 기준 밤 11:30 ~ 새벽 6:00에 개장합니다.
                                (서머타임 적용 시 밤 10:30 ~ 새벽 5:00)
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 2. 왜 미국 주식인가? */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">2. 왜 미국 주식인가?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-5 rounded-lg">
                                <h4 className="font-semibold mb-2 text-green-900">✅ 장점</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• 세계 최고 기업들에 투자 가능</li>
                                    <li>• 높은 유동성과 투명성</li>
                                    <li>• 배당 성장주 풍부</li>
                                    <li>• 달러 자산 분산 효과</li>
                                    <li>• 소액으로 시작 가능 (1주부터)</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-5 rounded-lg">
                                <h4 className="font-semibold mb-2 text-yellow-900">⚠️ 주의사항</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• 환율 변동 리스크</li>
                                    <li>• 배당소득세 15% 원천징수</li>
                                    <li>• 양도소득세 (250만원 초과시 22%)</li>
                                    <li>• 시차로 인한 실시간 대응 어려움</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 3. 계좌 개설하기 */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">3. 해외주식 계좌 개설하기</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-gray-700">
                            한국의 주요 증권사에서 해외주식 계좌를 개설할 수 있습니다. 대부분 비대면으로 10분 이내에 개설 가능합니다.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 text-blue-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">증권사 선택</h4>
                                    <p className="text-sm text-gray-600">
                                        국내 증권사 (키움, 미래에셋, NH투자증권 등) 또는 해외 증권사 (인터랙티브 브로커스 등) 선택
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 text-blue-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">앱 다운로드 및 본인인증</h4>
                                    <p className="text-sm text-gray-600">
                                        증권사 앱을 다운로드하고 신분증으로 본인인증 진행
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 text-blue-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">해외주식 계좌 개설</h4>
                                    <p className="text-sm text-gray-600">
                                        일반 계좌 또는 ISA 계좌 선택 (세금 혜택 비교 필요)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 text-blue-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                    4
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">원화 입금 및 환전</h4>
                                    <p className="text-sm text-gray-600">
                                        원화를 입금한 후 달러로 환전 (환율 우대 확인)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                            <p className="text-sm">
                                <strong>💰 환전 꿀팁:</strong> 환율이 낮을 때 미리 달러로 환전해두면 유리합니다.
                                증권사마다 환전 우대율이 다르니 비교해보세요!
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 4. 주문 방법 */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">4. 주식 주문 방법</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border-2 border-blue-200 p-5 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 text-blue-900">시장가 주문</h4>
                                <p className="text-sm text-gray-700 mb-3">
                                    현재 시장 가격으로 즉시 매수/매도하는 방식
                                </p>
                                <div className="bg-blue-50 p-3 rounded">
                                    <p className="text-xs text-gray-700">
                                        <strong>언제 사용?</strong> 가격보다 매매 체결이 중요할 때
                                    </p>
                                </div>
                            </div>

                            <div className="border-2 border-green-200 p-5 rounded-lg">
                                <h4 className="font-semibold text-lg mb-3 text-green-900">지정가 주문</h4>
                                <p className="text-sm text-gray-700 mb-3">
                                    원하는 가격을 지정하여 주문하는 방식
                                </p>
                                <div className="bg-green-50 p-3 rounded">
                                    <p className="text-xs text-gray-700">
                                        <strong>언제 사용?</strong> 원하는 가격에 사고 싶을 때
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h4 className="font-semibold mb-3">주문 시 확인사항</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span className="text-sm">티커 심볼 확인 (예: AAPL = Apple)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span className="text-sm">주문 수량 및 가격 확인</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span className="text-sm">매수 가능 금액 확인</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span className="text-sm">수수료 포함 총 금액 확인</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* 참고 자료 */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl">📚 참고 자료</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <a
                            href="https://www.investopedia.com/articles/basics/06/invest1000.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border"
                        >
                            <div>
                                <h5 className="font-semibold">Investopedia - 미국 주식 투자 시작 가이드</h5>
                                <p className="text-sm text-gray-600">영문 자료, 기초부터 상세 설명</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-blue-600" />
                        </a>

                        <a
                            href="https://www.youtube.com/results?search_query=미국+주식+초보+투자+시작"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border"
                        >
                            <div>
                                <h5 className="font-semibold">YouTube - 미국 주식 초보 투자 시작</h5>
                                <p className="text-sm text-gray-600">한글 영상 강의 모음</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-red-600" />
                        </a>

                        <a
                            href="https://www.sec.gov/oiea/investor-alerts-and-bulletins"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border"
                        >
                            <div>
                                <h5 className="font-semibold">SEC - 투자자 보호 가이드</h5>
                                <p className="text-sm text-gray-600">미국 증권거래위원회 공식 자료</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-blue-600" />
                        </a>
                    </CardContent>
                </Card>

                {/* Next Steps */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/learn/pe-ratio">
                        <Button size="lg" className="w-full sm:w-auto">
                            다음: P/E 비율 배우기
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/screener">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            종목 스크리너 사용하기
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
