'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    TrendingUp,
    TrendingDown,
    Shield,
    DollarSign,
    Star,
    Search,
    ArrowUpRight,
    ArrowDownRight,
    ChevronRight,
    HelpCircle
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

// 저평가 우량주 데이터 (100개)
const undervaluedStocks = [
    // 수익성 높은 종목 (High Profitability)
    { symbol: 'AAPL', name: 'Apple Inc.', price: 178.50, pe: 29.5, dividend: 0.5, roe: 147.2, category: 'profitable', change: 2.3, marketCap: '2.8T' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.91, pe: 36.8, dividend: 0.8, roe: 43.7, category: 'profitable', change: 1.8, marketCap: '2.8T' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 141.80, pe: 24.3, dividend: 0.0, roe: 29.2, category: 'profitable', change: 3.1, marketCap: '1.8T' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 495.22, pe: 65.3, dividend: 0.04, roe: 115.1, category: 'profitable', change: 5.2, marketCap: '1.2T' },
    { symbol: 'META', name: 'Meta Platforms', price: 521.00, pe: 28.1, dividend: 0.0, roe: 35.6, category: 'profitable', change: 2.7, marketCap: '1.3T' },
    { symbol: 'V', name: 'Visa Inc.', price: 272.45, pe: 32.1, dividend: 0.9, roe: 45.3, category: 'profitable', change: 1.5, marketCap: '570B' },
    { symbol: 'MA', name: 'Mastercard Inc.', price: 465.50, pe: 35.7, dividend: 0.6, roe: 153.2, category: 'profitable', change: 2.1, marketCap: '440B' },
    { symbol: 'JPM', name: 'JPMorgan Chase', price: 198.23, pe: 11.2, dividend: 2.5, roe: 17.8, category: 'profitable', change: -0.5, marketCap: '570B' },
    { symbol: 'UNH', name: 'UnitedHealth Group', price: 541.20, pe: 24.5, dividend: 1.5, roe: 27.3, category: 'profitable', change: 1.9, marketCap: '500B' },
    { symbol: 'BAC', name: 'Bank of America', price: 37.82, pe: 10.8, dividend: 2.4, roe: 11.2, category: 'profitable', change: -1.2, marketCap: '290B' },
    { symbol: 'HD', name: 'Home Depot Inc.', price: 365.40, pe: 24.2, dividend: 2.3, roe: 1023.5, category: 'profitable', change: 0.8, marketCap: '370B' },
    { symbol: 'AVGO', name: 'Broadcom Inc.', price: 1645.00, pe: 35.2, dividend: 2.1, roe: 47.8, category: 'profitable', change: 3.5, marketCap: '770B' },
    { symbol: 'ORCL', name: 'Oracle Corp.', price: 128.35, pe: 31.4, dividend: 1.3, roe: 135.7, category: 'profitable', change: 2.4, marketCap: '350B' },
    { symbol: 'ASML', name: 'ASML Holding', price: 925.00, pe: 44.6, dividend: 0.9, roe: 74.2, category: 'profitable', change: 4.1, marketCap: '380B' },
    { symbol: 'ADBE', name: 'Adobe Inc.', price: 548.20, pe: 45.1, dividend: 0.0, roe: 36.4, category: 'profitable', change: 1.7, marketCap: '245B' },
    { symbol: 'CRM', name: 'Salesforce Inc.', price: 285.60, pe: 41.3, dividend: 0.0, roe: 6.2, category: 'profitable', change: 2.9, marketCap: '280B' },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: 625.50, pe: 42.8, dividend: 0.0, roe: 30.5, category: 'profitable', change: 3.8, marketCap: '270B' },
    { symbol: 'AMD', name: 'Advanced Micro Devices', price: 155.80, pe: 52.1, dividend: 0.0, roe: 2.3, category: 'profitable', change: 5.5, marketCap: '252B' },
    { symbol: 'QCOM', name: 'Qualcomm Inc.', price: 172.45, pe: 17.8, dividend: 2.1, roe: 32.7, category: 'profitable', change: 2.2, marketCap: '190B' },
    { symbol: 'INTU', name: 'Intuit Inc.', price: 625.30, pe: 65.2, dividend: 0.7, roe: 19.3, category: 'profitable', change: 1.4, marketCap: '175B' },

    // 안전한 종목 (Safe & Stable)
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: 162.50, pe: 15.8, dividend: 3.0, roe: 25.4, category: 'safe', change: 0.5, marketCap: '390B' },
    { symbol: 'PG', name: 'Procter & Gamble', price: 168.90, pe: 26.3, dividend: 2.4, roe: 32.1, category: 'safe', change: 0.3, marketCap: '400B' },
    { symbol: 'KO', name: 'Coca-Cola Co.', price: 61.25, pe: 23.4, dividend: 3.0, roe: 40.2, category: 'safe', change: -0.2, marketCap: '265B' },
    { symbol: 'PEP', name: 'PepsiCo Inc.', price: 179.50, pe: 25.1, dividend: 2.6, roe: 49.8, category: 'safe', change: 0.7, marketCap: '245B' },
    { symbol: 'WMT', name: 'Walmart Inc.', price: 167.80, pe: 29.5, dividend: 1.4, roe: 19.6, category: 'safe', change: 1.2, marketCap: '455B' },
    { symbol: 'COST', name: 'Costco Wholesale', price: 745.20, pe: 46.8, dividend: 0.6, roe: 30.1, category: 'safe', change: 1.5, marketCap: '330B' },
    { symbol: 'MCD', name: "McDonald's Corp.", price: 295.60, pe: 24.7, dividend: 2.2, roe: -91.2, category: 'safe', change: 0.9, marketCap: '210B' },
    { symbol: 'NKE', name: 'Nike Inc.', price: 95.80, pe: 27.9, dividend: 1.6, roe: 33.7, category: 'safe', change: -1.5, marketCap: '145B' },
    { symbol: 'DIS', name: 'Walt Disney Co.', price: 98.40, pe: 45.2, dividend: 0.0, roe: 2.4, category: 'safe', change: 2.3, marketCap: '180B' },
    { symbol: 'VZ', name: 'Verizon Communications', price: 42.15, pe: 9.2, dividend: 6.3, roe: 20.1, category: 'safe', change: -0.8, marketCap: '177B' },
    { symbol: 'T', name: 'AT&T Inc.', price: 21.50, pe: 8.5, dividend: 5.8, roe: 7.4, category: 'safe', change: -0.5, marketCap: '154B' },
    { symbol: 'CVX', name: 'Chevron Corp.', price: 158.30, pe: 11.3, dividend: 3.5, roe: 14.2, category: 'safe', change: 1.8, marketCap: '295B' },
    { symbol: 'XOM', name: 'Exxon Mobil Corp.', price: 112.45, pe: 12.1, dividend: 3.2, roe: 17.8, category: 'safe', change: 2.1, marketCap: '460B' },
    { symbol: 'ABT', name: 'Abbott Laboratories', price: 115.60, pe: 31.2, dividend: 1.8, roe: 14.5, category: 'safe', change: 0.6, marketCap: '200B' },
    { symbol: 'TMO', name: 'Thermo Fisher Scientific', price: 565.80, pe: 35.4, dividend: 0.3, roe: 13.7, category: 'safe', change: 1.4, marketCap: '220B' },
    { symbol: 'DHR', name: 'Danaher Corp.', price: 255.90, pe: 38.6, dividend: 0.4, roe: 10.2, category: 'safe', change: 1.1, marketCap: '185B' },
    { symbol: 'NEE', name: 'NextEra Energy', price: 78.20, pe: 22.5, dividend: 2.4, roe: 9.8, category: 'safe', change: 0.5, marketCap: '158B' },
    { symbol: 'DUK', name: 'Duke Energy', price: 105.30, pe: 19.7, dividend: 3.8, roe: 8.9, category: 'safe', change: -0.3, marketCap: '81B' },
    { symbol: 'SO', name: 'Southern Company', price: 82.40, pe: 18.3, dividend: 3.5, roe: 11.2, category: 'safe', change: 0.2, marketCap: '87B' },
    { symbol: 'MMM', name: '3M Company', price: 98.50, pe: 13.5, dividend: 6.1, roe: 25.3, category: 'safe', change: -0.7, marketCap: '55B' },

    // 꾸준한 성장 종목 (Consistent Growth)
    { symbol: 'WM', name: 'Waste Management', price: 198.70, pe: 32.1, dividend: 1.5, roe: 25.7, category: 'consistent', change: 0.9, marketCap: '81B' },
    { symbol: 'LOW', name: "Lowe's Companies", price: 245.80, pe: 22.4, dividend: 1.9, roe: 1015.3, category: 'consistent', change: 1.3, marketCap: '145B' },
    { symbol: 'TGT', name: 'Target Corp.', price: 155.20, pe: 18.7, dividend: 2.8, roe: 33.5, category: 'consistent', change: 2.1, marketCap: '72B' },
    { symbol: 'SBUX', name: 'Starbucks Corp.', price: 98.30, pe: 25.6, dividend: 2.3, roe: -39.4, category: 'consistent', change: 1.7, marketCap: '112B' },
    { symbol: 'CAT', name: 'Caterpillar Inc.', price: 325.40, pe: 16.8, dividend: 2.1, roe: 45.2, category: 'consistent', change: 2.5, marketCap: '165B' },
    { symbol: 'DE', name: 'Deere & Company', price: 405.60, pe: 14.2, dividend: 1.3, roe: 37.8, category: 'consistent', change: 1.9, marketCap: '115B' },
    { symbol: 'UNP', name: 'Union Pacific Corp.', price: 245.30, pe: 21.5, dividend: 2.2, roe: 43.6, category: 'consistent', change: 1.1, marketCap: '150B' },
    { symbol: 'UPS', name: 'United Parcel Service', price: 148.90, pe: 17.3, dividend: 3.5, roe: 67.2, category: 'consistent', change: 0.8, marketCap: '128B' },
    { symbol: 'HON', name: 'Honeywell International', price: 208.50, pe: 23.9, dividend: 2.1, roe: 29.8, category: 'consistent', change: 1.4, marketCap: '137B' },
    { symbol: 'MMC', name: 'Marsh & McLennan', price: 205.70, pe: 27.4, dividend: 1.6, roe: 28.5, category: 'consistent', change: 0.6, marketCap: '101B' },
    { symbol: 'ADP', name: 'Automatic Data Processing', price: 265.30, pe: 30.1, dividend: 2.0, roe: 89.7, category: 'consistent', change: 1.0, marketCap: '108B' },
    { symbol: 'PAYX', name: 'Paychex Inc.', price: 128.40, pe: 28.5, dividend: 2.9, roe: 42.3, category: 'consistent', change: 0.5, marketCap: '46B' },
    { symbol: 'ECL', name: 'Ecolab Inc.', price: 225.60, pe: 45.2, dividend: 1.1, roe: 19.6, category: 'consistent', change: 1.2, marketCap: '64B' },
    { symbol: 'SYK', name: 'Stryker Corp.', price: 335.80, pe: 38.7, dividend: 1.0, roe: 15.2, category: 'consistent', change: 1.5, marketCap: '127B' },
    { symbol: 'ZTS', name: 'Zoetis Inc.', price: 185.90, pe: 36.4, dividend: 0.7, roe: 48.3, category: 'consistent', change: 0.9, marketCap: '85B' },
    { symbol: 'BDX', name: 'Becton Dickinson', price: 242.70, pe: 34.8, dividend: 1.3, roe: 5.8, category: 'consistent', change: 0.7, marketCap: '69B' },
    { symbol: 'MDT', name: 'Medtronic plc', price: 88.50, pe: 25.1, dividend: 3.2, roe: 7.9, category: 'consistent', change: -0.4, marketCap: '115B' },
    { symbol: 'CI', name: 'Cigna Group', price: 335.20, pe: 13.8, dividend: 1.6, roe: 14.7, category: 'consistent', change: 1.8, marketCap: '100B' },
    { symbol: 'CVS', name: 'CVS Health Corp.', price: 72.40, pe: 10.5, dividend: 3.4, roe: 10.2, category: 'consistent', change: -1.1, marketCap: '92B' },
    { symbol: 'WBA', name: 'Walgreens Boots Alliance', price: 25.60, pe: 6.8, dividend: 6.5, roe: -11.3, category: 'consistent', change: -2.3, marketCap: '22B' },

    // 고배당 종목 (High Dividend)
    { symbol: 'MO', name: 'Altria Group', price: 48.50, pe: 9.3, dividend: 8.5, roe: 224.1, category: 'dividend', change: -0.5, marketCap: '85B' },
    { symbol: 'BTI', name: 'British American Tobacco', price: 35.80, pe: 8.1, dividend: 8.9, roe: 19.3, category: 'dividend', change: -0.8, marketCap: '77B' },
    { symbol: 'PM', name: 'Philip Morris International', price: 115.30, pe: 17.2, dividend: 4.8, roe: -39.2, category: 'dividend', change: 0.6, marketCap: '179B' },
    { symbol: 'IBM', name: 'IBM Corp.', price: 186.40, pe: 22.1, dividend: 3.8, roe: 29.7, category: 'dividend', change: 1.4, marketCap: '171B' },
    { symbol: 'DOW', name: 'Dow Inc.', price: 52.30, pe: 11.4, dividend: 5.2, roe: 12.8, category: 'dividend', change: 0.9, marketCap: '36B' },
    { symbol: 'OXY', name: 'Occidental Petroleum', price: 58.70, pe: 10.2, dividend: 1.3, roe: 18.5, category: 'dividend', change: 2.8, marketCap: '52B' },
    { symbol: 'ET', name: 'Energy Transfer LP', price: 15.80, pe: 9.7, dividend: 7.4, roe: 18.2, category: 'dividend', change: 1.2, marketCap: '51B' },
    { symbol: 'EPD', name: 'Enterprise Products Partners', price: 28.90, pe: 11.3, dividend: 7.1, roe: 15.8, category: 'dividend', change: 0.8, marketCap: '63B' },
    { symbol: 'AGNC', name: 'AGNC Investment Corp.', price: 10.20, pe: 7.8, dividend: 14.5, roe: 8.7, category: 'dividend', change: -0.3, marketCap: '7.5B' },
    { symbol: 'NLY', name: 'Annaly Capital Management', price: 20.50, pe: 6.5, dividend: 13.2, roe: 7.2, category: 'dividend', change: -0.5, marketCap: '10B' },
    { symbol: 'O', name: 'Realty Income Corp.', price: 58.30, pe: 52.1, dividend: 5.4, roe: 3.9, category: 'dividend', change: 0.4, marketCap: '44B' },
    { symbol: 'STAG', name: 'STAG Industrial', price: 37.80, pe: 28.3, dividend: 4.3, roe: 5.2, category: 'dividend', change: 0.6, marketCap: '7.2B' },
    { symbol: 'KMI', name: 'Kinder Morgan', price: 21.40, pe: 15.8, dividend: 5.6, roe: 9.3, category: 'dividend', change: 1.1, marketCap: '48B' },
    { symbol: 'OKE', name: 'ONEOK Inc.', price: 82.50, pe: 18.2, dividend: 5.1, roe: 16.7, category: 'dividend', change: 1.5, marketCap: '46B' },
    { symbol: 'WMB', name: 'Williams Companies', price: 42.30, pe: 19.5, dividend: 4.8, roe: 12.4, category: 'dividend', change: 0.9, marketCap: '51B' },
    { symbol: 'LYB', name: 'LyondellBasell Industries', price: 92.80, pe: 10.7, dividend: 5.3, roe: 15.8, category: 'dividend', change: 1.3, marketCap: '30B' },
    { symbol: 'VALE', name: 'Vale S.A.', price: 12.45, pe: 4.2, dividend: 9.8, roe: 18.5, category: 'dividend', change: 2.7, marketCap: '57B' },
    { symbol: 'RIO', name: 'Rio Tinto Group', price: 68.90, pe: 9.8, dividend: 6.7, roe: 19.2, category: 'dividend', change: 1.8, marketCap: '110B' },
    { symbol: 'BHP', name: 'BHP Group', price: 58.30, pe: 11.2, dividend: 5.9, roe: 16.3, category: 'dividend', change: 2.1, marketCap: '147B' },
    { symbol: 'GOLD', name: 'Barrick Gold', price: 18.70, pe: 16.5, dividend: 2.1, roe: 7.8, category: 'dividend', change: 3.5, marketCap: '32B' },

    // 저평가 가치주 (Undervalued)
    { symbol: 'GS', name: 'Goldman Sachs', price: 445.30, pe: 12.5, dividend: 2.3, roe: 10.8, category: 'undervalued', change: 0.9, marketCap: '148B' },
    { symbol: 'WFC', name: 'Wells Fargo', price: 52.30, pe: 11.5, dividend: 2.5, roe: 12.3, category: 'undervalued', change: 0.8, marketCap: '190B' },
    { symbol: 'C', name: 'Citigroup Inc.', price: 60.40, pe: 9.7, dividend: 3.2, roe: 7.8, category: 'undervalued', change: -0.6, marketCap: '115B' },
    { symbol: 'USB', name: 'U.S. Bancorp', price: 45.80, pe: 12.3, dividend: 4.1, roe: 13.5, category: 'undervalued', change: 0.5, marketCap: '67B' },
    { symbol: 'PNC', name: 'PNC Financial Services', price: 165.90, pe: 13.2, dividend: 3.3, roe: 14.2, category: 'undervalued', change: 1.1, marketCap: '68B' },
    { symbol: 'TFC', name: 'Truist Financial', price: 38.70, pe: 10.9, dividend: 4.8, roe: 8.9, category: 'undervalued', change: -0.4, marketCap: '52B' },
    { symbol: 'INTC', name: 'Intel Corp.', price: 35.20, pe: 28.4, dividend: 1.5, roe: -1.2, category: 'undervalued', change: -2.1, marketCap: '145B' },
    { symbol: 'F', name: 'Ford Motor Co.', price: 12.45, pe: 6.2, dividend: 4.9, roe: 9.8, category: 'undervalued', change: 1.8, marketCap: '50B' },
    { symbol: 'GM', name: 'General Motors', price: 38.90, pe: 5.8, dividend: 1.0, roe: 18.5, category: 'undervalued', change: 2.3, marketCap: '48B' },
    { symbol: 'PARA', name: 'Paramount Global', price: 11.80, pe: 4.5, dividend: 2.5, roe: -7.3, category: 'undervalued', change: -1.5, marketCap: '7.5B' },
    { symbol: 'CMCSA', name: 'Comcast Corp.', price: 43.50, pe: 10.2, dividend: 2.8, roe: 14.7, category: 'undervalued', change: 0.9, marketCap: '180B' },
    { symbol: 'VFC', name: 'VF Corp.', price: 18.30, pe: 7.3, dividend: 5.2, roe: -2.8, category: 'undervalued', change: -1.8, marketCap: '7B' },
    { symbol: 'KSS', name: "Kohl's Corp.", price: 28.60, pe: 8.5, dividend: 5.8, roe: 12.1, category: 'undervalued', change: -0.7, marketCap: '3.5B' },
    { symbol: 'M', name: "Macy's Inc.", price: 19.70, pe: 5.9, dividend: 3.4, roe: 21.5, category: 'undervalued', change: -1.3, marketCap: '5.5B' },
    { symbol: 'SIRI', name: 'Sirius XM Holdings', price: 4.25, pe: 8.7, dividend: 1.2, roe: -15.2, category: 'undervalued', change: -0.5, marketCap: '15B' },
    { symbol: 'PFE', name: 'Pfizer Inc.', price: 29.80, pe: 11.3, dividend: 5.8, roe: 6.2, category: 'undervalued', change: 0.6, marketCap: '167B' },
    { symbol: 'MRK', name: 'Merck & Co.', price: 112.50, pe: 14.7, dividend: 2.6, roe: 28.5, category: 'undervalued', change: 1.2, marketCap: '285B' },
    { symbol: 'ABBV', name: 'AbbVie Inc.', price: 173.80, pe: 38.2, dividend: 3.5, roe: 59.8, category: 'undervalued', change: 0.9, marketCap: '307B' },
    { symbol: 'BMY', name: 'Bristol-Myers Squibb', price: 55.60, pe: 13.8, dividend: 4.2, roe: 29.7, category: 'undervalued', change: -0.3, marketCap: '115B' },
    { symbol: 'GILD', name: 'Gilead Sciences', price: 82.30, pe: 15.2, dividend: 3.8, roe: 12.5, category: 'undervalued', change: 0.7, marketCap: '103B' },
];

export default function UndervaluedStocksPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [showGuide, setShowGuide] = useState(false);

    const filteredStocks = undervaluedStocks.filter(stock => {
        const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stock.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'all' || stock.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const categoryInfo = {
        profitable: { name: '수익성 높은', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50', count: undervaluedStocks.filter(s => s.category === 'profitable').length },
        safe: { name: '안전한', icon: Shield, color: 'text-blue-600', bg: 'bg-blue-50', count: undervaluedStocks.filter(s => s.category === 'safe').length },
        consistent: { name: '꾸준한', icon: Star, color: 'text-purple-600', bg: 'bg-purple-50', count: undervaluedStocks.filter(s => s.category === 'consistent').length },
        dividend: { name: '고배당', icon: DollarSign, color: 'text-orange-600', bg: 'bg-orange-50', count: undervaluedStocks.filter(s => s.category === 'dividend').length },
        undervalued: { name: '저평가', icon: TrendingDown, color: 'text-indigo-600', bg: 'bg-indigo-50', count: undervaluedStocks.filter(s => s.category === 'undervalued').length },
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="text-sm">
                        <Star className="w-4 h-4 mr-2" />
                        투자 추천 리스트
                    </Badge>
                </div>
                <h1 className="text-4xl font-bold mb-4">
                    현재 투자하기 좋은 저평가 우량주 100선
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                    카테고리별로 엄선된 저평가 우량주를 확인하고 포트폴리오를 구성하세요
                </p>

                {/* Quick Guide */}
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                    <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <p className="text-sm text-gray-700">
                                    <strong>💡 이용 방법:</strong> 상단 카테고리 카드를 클릭하여 원하는 유형의 종목만 필터링하거나,
                                    검색창에서 종목명/심볼로 검색하세요. 각 종목을 클릭하면 상세 정보를 볼 수 있습니다.
                                    <strong className="ml-2">분산투자를 위해 서로 다른 카테고리에서 5-10개 종목을 선택하는 것을 추천합니다.</strong>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Category Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {Object.entries(categoryInfo).map(([key, info]) => {
                    const Icon = info.icon;
                    return (
                        <Card
                            key={key}
                            className={`cursor-pointer transition-all ${activeCategory === key ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}`}
                            onClick={() => setActiveCategory(key)}
                        >
                            <CardContent className="p-4 text-center">
                                <div className={`w-12 h-12 ${info.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                                    <Icon className={`w-6 h-6 ${info.color}`} />
                                </div>
                                <p className="font-semibold text-sm mb-1">{info.name}</p>
                                <p className="text-2xl font-bold">{info.count}</p>
                                <p className="text-xs text-gray-500">종목</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Search & Filters */}
            <Card className="mb-6">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="종목명 또는 심볼 검색 (예: AAPL, Apple)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <Button
                                variant={activeCategory === 'all' ? 'default' : 'outline'}
                                onClick={() => setActiveCategory('all')}
                                size="sm"
                            >
                                전체 ({undervaluedStocks.length})
                            </Button>
                            {Object.entries(categoryInfo).map(([key, info]) => (
                                <Button
                                    key={key}
                                    variant={activeCategory === key ? 'default' : 'outline'}
                                    onClick={() => setActiveCategory(key)}
                                    size="sm"
                                >
                                    {info.name} ({info.count})
                                </Button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Stock List */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>저평가 우량주 리스트 ({filteredStocks.length}개)</span>
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={() => setShowGuide(!showGuide)}
                        >
                            <HelpCircle className="w-4 h-4" />
                            {showGuide ? '가이드 숨기기' : '지표 설명 보기'}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    {showGuide && (
                        <div className="p-6 bg-blue-50 border-b border-blue-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">📊 P/E 비율 (주가수익비율)</p>
                                    <p className="text-gray-700">• 15 이하: 저평가 (녹색)</p>
                                    <p className="text-gray-700">• 15-25: 적정 (회색)</p>
                                    <p className="text-gray-700">• 25 이상: 고평가 (흰색)</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">💰 배당수익률</p>
                                    <p className="text-gray-700">• 3% 이상: 우수 (녹색 강조)</p>
                                    <p className="text-gray-700">• 5% 이상: 고배당주</p>
                                    <p className="text-gray-700">• 안정적 현금흐름 확인 필수</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">📈 ROE (자기자본이익률)</p>
                                    <p className="text-gray-700">• 15% 이상: 양호 (파란색)</p>
                                    <p className="text-gray-700">• 20% 이상: 우수</p>
                                    <p className="text-gray-700">• 마이너스: 적자 (빨간색)</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        종목
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        가격
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        변동
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        P/E
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        배당수익률
                                    </th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        ROE
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        카테고리
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        시가총액
                                    </th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredStocks.map((stock) => (
                                    <tr key={stock.symbol} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="font-bold text-gray-900">{stock.symbol}</div>
                                                <div className="text-sm text-gray-500">{stock.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right font-semibold">
                                            ${stock.price.toFixed(2)}
                                        </td>
                                        <td className={`px-6 py-4 text-right font-semibold ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            <div className="flex items-center justify-end gap-1">
                                                {stock.change >= 0 ? (
                                                    <ArrowUpRight className="w-4 h-4" />
                                                ) : (
                                                    <ArrowDownRight className="w-4 h-4" />
                                                )}
                                                {stock.change >= 0 ? '+' : ''}{stock.change}%
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Badge variant={stock.pe < 15 ? 'default' : stock.pe < 25 ? 'secondary' : 'outline'}>
                                                {stock.pe.toFixed(1)}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={stock.dividend >= 3 ? 'text-green-600 font-semibold' : ''}>
                                                {stock.dividend.toFixed(1)}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={stock.roe >= 15 ? 'text-blue-600 font-semibold' : stock.roe < 0 ? 'text-red-600' : ''}>
                                                {stock.roe.toFixed(1)}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Badge className={categoryInfo[stock.category as keyof typeof categoryInfo].bg}>
                                                <span className={categoryInfo[stock.category as keyof typeof categoryInfo].color}>
                                                    {categoryInfo[stock.category as keyof typeof categoryInfo].name}
                                                </span>
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-center text-sm text-gray-600">
                                            ${stock.marketCap}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link href={`/stocks/${stock.symbol}`}>
                                                <Button variant="ghost" size="sm" className="gap-1">
                                                    상세보기
                                                    <ChevronRight className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="mt-8 bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg mb-2">지표 해석 가이드</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">P/E 비율 (주가수익비율)</p>
                                    <p className="text-gray-700">• 15 이하: 저평가 (녹색)</p>
                                    <p className="text-gray-700">• 15-25: 적정 (회색)</p>
                                    <p className="text-gray-700">• 25 이상: 고평가 (흰색)</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">배당수익률</p>
                                    <p className="text-gray-700">• 3% 이상: 우수 (녹색 강조)</p>
                                    <p className="text-gray-700">• 5% 이상: 고배당주</p>
                                    <p className="text-gray-700">• 안정적 현금흐름 확인 필수</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-900 mb-1">ROE (자기자본이익률)</p>
                                    <p className="text-gray-700">• 15% 이상: 양호 (파란색)</p>
                                    <p className="text-gray-700">• 20% 이상: 우수</p>
                                    <p className="text-gray-700">• 마이너스: 적자 (빨간색)</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-blue-300">
                                <p className="text-sm text-gray-700">
                                    💡 <strong>투자 팁:</strong> 카테고리별로 5-10개 종목을 선택하여 포트폴리오를 분산하면 리스크를 줄일 수 있습니다.
                                    각 종목의 상세 정보를 확인하고 재무제표를 검토한 후 투자 결정을 내리세요.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
