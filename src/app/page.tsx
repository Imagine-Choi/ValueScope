import HeroSection from '@/components/home/HeroSection';
import EducationalBanner from '@/components/home/EducationalBanner';
import QuickStart from '@/components/home/QuickStart';
import TopStocks from '@/components/home/TopStocks';
import HowItWorks from '@/components/home/HowItWorks';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Educational Banner - 미국 주식 기초 가이드 */}
      <EducationalBanner />

      {/* Quick Start - 빠른 포트폴리오 시뮬레이터 */}
      <QuickStart />

      {/* Today's Top Value Stocks */}
      <TopStocks />

      {/* How It Works - 3단계 가이드 */}
      <HowItWorks />
    </main>
  );
}

