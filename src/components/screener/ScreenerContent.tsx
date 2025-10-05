'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Filter, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock data - 실제로는 API에서 가져올 데이터
const mockStocks = [
    { ticker: 'AAPL', name: 'Apple Inc.', price: 178.25, pe: 29.8, pb: 45.2, dividendYield: 0.52, marketCap: '2.8T', score: 92 },
    { ticker: 'MSFT', name: 'Microsoft Corporation', price: 378.91, pe: 35.2, pb: 12.8, dividendYield: 0.78, marketCap: '2.8T', score: 88 },
    { ticker: 'JNJ', name: 'Johnson & Johnson', price: 159.32, pe: 24.1, pb: 5.8, dividendYield: 2.95, marketCap: '395B', score: 86 },
    { ticker: 'PG', name: 'Procter & Gamble', price: 165.45, pe: 26.3, pb: 7.2, dividendYield: 2.42, marketCap: '392B', score: 84 },
    { ticker: 'KO', name: 'The Coca-Cola Company', price: 61.78, pe: 27.5, pb: 10.1, dividendYield: 2.91, marketCap: '267B', score: 82 },
    { ticker: 'PEP', name: 'PepsiCo, Inc.', price: 168.23, pe: 24.8, pb: 11.4, dividendYield: 2.85, marketCap: '232B', score: 80 },
    { ticker: 'WMT', name: 'Walmart Inc.', price: 165.87, pe: 31.2, pb: 5.3, dividendYield: 1.32, marketCap: '528B', score: 78 },
    { ticker: 'V', name: 'Visa Inc.', price: 278.45, pe: 32.1, pb: 13.7, dividendYield: 0.71, marketCap: '577B', score: 76 },
];

export default function ScreenerContent() {
    const [peMax, setPeMax] = useState(35);
    const [divYieldMin, setDivYieldMin] = useState(0);
    const [sortBy, setSortBy] = useState('score');
    const [filteredStocks, setFilteredStocks] = useState(mockStocks);

    const handleFilter = () => {
        const filtered = mockStocks.filter(stock =>
            stock.pe <= peMax && stock.dividendYield >= divYieldMin
        );

        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === 'score') return b.score - a.score;
            if (sortBy === 'pe') return a.pe - b.pe;
            if (sortBy === 'dividend') return b.dividendYield - a.dividendYield;
            return 0;
        });

        setFilteredStocks(sorted);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Filters */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        필터 설정
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* P/E Ratio Filter */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                P/E 비율 (최대): <span className="text-blue-600 font-bold">{peMax}</span>
                            </label>
                            <Slider
                                value={[peMax]}
                                onValueChange={(value) => setPeMax(value[0])}
                                min={10}
                                max={50}
                                step={1}
                            />
                            <p className="text-xs text-gray-500 mt-2">낮을수록 저평가</p>
                        </div>

                        {/* Dividend Yield Filter */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                배당수익률 (최소): <span className="text-blue-600 font-bold">{divYieldMin}%</span>
                            </label>
                            <Slider
                                value={[divYieldMin]}
                                onValueChange={(value) => setDivYieldMin(value[0])}
                                min={0}
                                max={5}
                                step={0.1}
                            />
                            <p className="text-xs text-gray-500 mt-2">높을수록 배당 매력적</p>
                        </div>

                        {/* Sort By */}
                        <div>
                            <label className="block text-sm font-medium mb-2">정렬 기준</label>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger>
                                    <SelectValue placeholder="정렬 선택" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="score">ValueScope 점수</SelectItem>
                                    <SelectItem value="pe">P/E 비율 (낮은순)</SelectItem>
                                    <SelectItem value="dividend">배당수익률 (높은순)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Button onClick={handleFilter} size="lg" className="w-full md:w-auto">
                            <Filter className="w-4 h-4 mr-2" />
                            필터 적용
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Results */}
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>검색 결과 ({filteredStocks.length}개)</CardTitle>
                        <Badge variant="secondary">{filteredStocks.length}개 종목</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>티커</TableHead>
                                    <TableHead>회사명</TableHead>
                                    <TableHead className="text-right">현재가</TableHead>
                                    <TableHead className="text-right">P/E</TableHead>
                                    <TableHead className="text-right">P/B</TableHead>
                                    <TableHead className="text-right">배당률</TableHead>
                                    <TableHead className="text-right">시가총액</TableHead>
                                    <TableHead className="text-right">점수</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredStocks.map((stock) => (
                                    <TableRow key={stock.ticker} className="hover:bg-gray-50">
                                        <TableCell className="font-bold">{stock.ticker}</TableCell>
                                        <TableCell>{stock.name}</TableCell>
                                        <TableCell className="text-right font-semibold">${stock.price.toFixed(2)}</TableCell>
                                        <TableCell className="text-right">{stock.pe}</TableCell>
                                        <TableCell className="text-right">{stock.pb}</TableCell>
                                        <TableCell className="text-right">{stock.dividendYield.toFixed(2)}%</TableCell>
                                        <TableCell className="text-right">{stock.marketCap}</TableCell>
                                        <TableCell className="text-right">
                                            <Badge className="bg-green-100 text-green-700">{stock.score}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={`/stock/${stock.ticker}`}>
                                                <Button variant="ghost" size="sm">
                                                    <ArrowRight className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
