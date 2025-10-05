import SimpleHero from '@/components/home/SimpleHero';
import BeginnerGuide from '@/components/home/BeginnerGuide';
import TopStocks from '@/components/home/TopStocks';
import LatestNews from '@/components/home/LatestNews';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 심플하고 트렌디한 히어로 섹션 */}
      <SimpleHero />

      {/* 최신 핫토픽 뉴스 */}
      <LatestNews />

      {/* Today's Top Value Stocks */}
      <TopStocks />

      {/* 미국 주식이 처음이라면 - A to Z 가이드 */}
      <BeginnerGuide />
    </main>
  );
}

