# 📈 ValueScope - 미국 저평가 우량주 스크리너

> 소액으로 시작하는 미국 주식 가치투자 플랫폼

ValueScope는 **초보 투자자**를 위한 미국 주식 가치투자 웹 애플리케이션입니다. 저평가된 우량주를 쉽게 찾고, 소액으로 분산 투자 포트폴리오를 시뮬레이션할 수 있습니다.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ 주요 기능

### 🎯 1. 종목 스크리너
- **밸류 지표 기반 필터링**: P/E, P/B, 배당수익률, 시가총액 등
- **실시간 정렬**: ValueScope 점수, P/E, 배당률 기준
- **상세 정보**: 각 종목의 재무 지표와 성과

### 💼 2. 포트폴리오 빌더
- **소액 분산 투자 시뮬레이션**: $100부터 시작 가능
- **스마트 자산 배분**: 비중 조정 및 실시간 계산
- **투자 결과 미리보기**: 주식 수, 실제 투자금, 남은 금액

### 📚 3. 투자 가이드
- **초보자 친화적 교육 콘텐츠**: P/E, 배당, 분산투자, 가치투자 등
- **실전 예시**: 각 개념을 실제 종목으로 설명
- **단계별 가이드**: 3단계로 시작하는 가치투자

### 🎨 4. 트렌디한 UI/UX
- **깔끔하고 현대적인 디자인**: shadcn/ui 컴포넌트
- **반응형 레이아웃**: 모바일·태블릿·데스크톱 최적화
- **직관적인 네비게이션**: 초보자도 쉽게 사용 가능

## 🚀 빠른 시작

### 사전 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/yourusername/valuescope.git
cd valuescope

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저에서 열기
# http://localhost:3000
```

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🏗️ 기술 스택

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui
- **State Management**: React Query (@tanstack/react-query)
- **Charts**: Recharts
- **Icons**: Lucide React

### Backend (향후 구현)
- **API**: Next.js API Routes
- **Database**: PostgreSQL (Vercel Postgres 또는 Supabase)
- **Caching**: Redis
- **Data Source**: Yahoo Finance API (yfinance)

### Deployment
- **Platform**: Vercel (권장)
- **CI/CD**: GitHub Actions (선택)

## 📁 프로젝트 구조

```
valuescope/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # 메인 페이지
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   ├── screener/             # 종목 스크리너 페이지
│   │   ├── portfolio/            # 포트폴리오 빌더 페이지
│   │   ├── learn/                # 투자 가이드 페이지
│   │   ├── stock/[ticker]/       # 개별 종목 상세 페이지
│   │   └── api/                  # API Routes
│   ├── components/               # React 컴포넌트
│   │   ├── home/                 # 홈 페이지 컴포넌트
│   │   ├── screener/             # 스크리너 컴포넌트
│   │   ├── portfolio/            # 포트폴리오 컴포넌트
│   │   ├── layout/               # 레이아웃 컴포넌트
│   │   └── ui/                   # shadcn/ui 컴포넌트
│   └── lib/                      # 유틸리티 및 설정
│       ├── utils.ts              # 공통 유틸리티
│       └── data/                 # 데이터 로직
├── public/                       # 정적 파일
└── README.md
```

## 🎓 주요 페이지

### 1. 메인 페이지 (`/`)
- **히어로 섹션**: 서비스 소개 및 CTA
- **교육 배너**: 미국 주식 기초 가이드 (P/E, 배당, 분산, 가치투자)
- **빠른 시작**: 포트폴리오 시뮬레이터
- **오늘의 TOP 5**: 저평가 우량주 추천
- **3단계 가이드**: 서비스 사용법

### 2. 종목 스크리너 (`/screener`)
- 필터: P/E 최대값, 배당수익률 최소값
- 정렬: ValueScope 점수, P/E, 배당률
- 결과 테이블: 티커, 회사명, 가격, 재무지표, 점수

### 3. 포트폴리오 빌더 (`/portfolio`)
- 예산 설정
- 종목 추가/제거
- 비중 조정 (합계 100%)
- 실시간 시뮬레이션 결과

### 4. 투자 가이드 (`/learn`)
- P/E 비율, P/B 비율
- 배당 투자 전략
- 포트폴리오 분산
- 가치투자 원칙
- 초보자 체크리스트

## 🔮 향후 개발 계획

### Phase 1: 데이터 통합 (현재 Mock 데이터)
- [ ] Yahoo Finance API 연동
- [ ] 실시간 주가 데이터
- [ ] 재무제표 자동 수집
- [ ] PostgreSQL 데이터베이스 설정

### Phase 2: 고급 기능
- [ ] 개별 종목 상세 페이지 (차트, 뉴스, 재무제표)
- [ ] 포트폴리오 저장 및 추적
- [ ] 백테스팅 기능
- [ ] 알림 설정 (가격 알림, 배당 일정)

### Phase 3: 사용자 기능
- [ ] 회원 가입 및 로그인 (NextAuth.js)
- [ ] 관심 종목 리스트
- [ ] 포트폴리오 히스토리
- [ ] 커뮤니티 기능

### Phase 4: AI 및 고도화
- [ ] AI 기반 종목 추천
- [ ] 뉴스 감성 분석
- [ ] 자동 리밸런싱 제안
- [ ] 맞춤형 투자 전략

## 🤝 기여하기

기여는 언제나 환영합니다! 다음 절차를 따라주세요:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## ⚠️ 면책 조항

이 애플리케이션은 **교육 및 정보 제공 목적**으로만 사용됩니다. 
투자 권유가 아니며, 모든 투자 결정의 책임은 투자자 본인에게 있습니다.
실제 투자 전 전문가와 상담하시기 바랍니다.

---

**Made with ❤️ for beginner investors**
