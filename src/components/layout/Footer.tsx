import Link from 'next/link';
import { TrendingUp, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white">Value<span className="text-blue-400">Scope</span></span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            소액으로 시작하는 미국 주식 가치투자 플랫폼.
                            초보자를 위한 스마트한 투자 도구.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">서비스</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/screener" className="hover:text-blue-400 transition-colors">종목 스크리너</Link></li>
                            <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">포트폴리오 빌더</Link></li>
                            <li><Link href="/learn" className="hover:text-blue-400 transition-colors">투자 가이드</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">학습 자료</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/learn/pe-ratio" className="hover:text-blue-400 transition-colors">P/E 비율 이해하기</Link></li>
                            <li><Link href="/learn/dividends" className="hover:text-blue-400 transition-colors">배당 투자 가이드</Link></li>
                            <li><Link href="/learn/diversification" className="hover:text-blue-400 transition-colors">포트폴리오 분산</Link></li>
                            <li><Link href="/learn/value-investing" className="hover:text-blue-400 transition-colors">가치투자 전략</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">연결하기</h3>
                        <div className="flex gap-4 mb-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="mailto:contact@valuescope.com" className="hover:text-blue-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">
                            문의: contact@valuescope.com
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {currentYear} ValueScope. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy" className="hover:text-blue-400 transition-colors">개인정보처리방침</Link>
                            <Link href="/terms" className="hover:text-blue-400 transition-colors">이용약관</Link>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        ⚠️ 투자 권유가 아니며, 모든 투자 결정의 책임은 투자자 본인에게 있습니다.
                    </p>
                </div>
            </div>
        </footer>
    );
}
