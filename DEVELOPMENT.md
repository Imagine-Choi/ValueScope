# 🛠️ ValueScope 개발 가이드

이 문서는 ValueScope 프로젝트에 기여하거나 로컬 개발 환경을 설정하는 방법을 설명합니다.

## 📋 목차
1. [개발 환경 설정](#개발-환경-설정)
2. [프로젝트 구조](#프로젝트-구조)
3. [코딩 컨벤션](#코딩-컨벤션)
4. [컴포넌트 작성 가이드](#컴포넌트-작성-가이드)
5. [API 통합 가이드](#api-통합-가이드)
6. [테스팅](#테스팅)
7. [디버깅](#디버깅)

## 🚀 개발 환경 설정

### 사전 요구사항
- Node.js 18.x 이상
- npm 9.x 이상 또는 yarn
- Git
- VS Code (권장)

### VS Code 확장 프로그램 (권장)
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### 초기 설정
```bash
# 1. 저장소 클론
git clone https://github.com/yourusername/valuescope.git
cd valuescope

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. http://localhost:3000 접속
```

### 환경 변수 설정 (향후)
```bash
# .env.local 파일 생성
cp .env.example .env.local

# 환경 변수 입력
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
```

## 📁 프로젝트 구조

```
valuescope/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 메인 페이지
│   │   ├── screener/           # 스크리너 페이지
│   │   ├── portfolio/          # 포트폴리오 페이지
│   │   ├── learn/              # 학습 페이지
│   │   ├── stock/[ticker]/     # 동적 종목 페이지
│   │   └── api/                # API Routes
│   │       └── stocks/         # 주식 API
│   ├── components/             # React 컴포넌트
│   │   ├── home/              # 홈 페이지 컴포넌트
│   │   ├── screener/          # 스크리너 컴포넌트
│   │   ├── portfolio/         # 포트폴리오 컴포넌트
│   │   ├── layout/            # 레이아웃 컴포넌트
│   │   └── ui/                # shadcn/ui 컴포넌트
│   └── lib/                   # 유틸리티 및 로직
│       ├── utils.ts           # 공통 유틸리티
│       ├── data/              # 데이터 처리
│       └── hooks/             # 커스텀 React Hooks
├── public/                    # 정적 파일
├── .github/                   # GitHub 설정
└── docs/                      # 문서
```

## 🎨 코딩 컨벤션

### TypeScript
- **파일명**: PascalCase for components, camelCase for utilities
  ```
  ✅ HeroSection.tsx
  ✅ useStockData.ts
  ❌ hero-section.tsx
  ```

- **타입 정의**: Interface 우선, Type은 Union/Intersection 시
  ```typescript
  // ✅ Good
  interface Stock {
    ticker: string;
    price: number;
  }

  // ✅ Good (Union type)
  type SortBy = 'score' | 'pe' | 'dividend';
  ```

### React 컴포넌트
```typescript
// ✅ Good: 명확한 Props 타입
interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

### CSS/Tailwind
- **우선순위**: Tailwind > CSS Modules > Inline styles
- **클래스 순서**: 레이아웃 → 스타일링 → 반응형
  ```tsx
  // ✅ Good
  <div className="flex items-center gap-4 p-4 bg-blue-500 rounded-lg md:p-6">

  // ❌ Bad
  <div className="bg-blue-500 flex rounded-lg items-center p-4 gap-4 md:p-6">
  ```

### 네이밍
- **컴포넌트**: PascalCase
- **함수/변수**: camelCase
- **상수**: UPPER_SNAKE_CASE
- **Private**: 언더스코어 접두사

```typescript
// ✅ Good
const MAX_STOCKS = 100;
const calculatePE = (price: number, earnings: number) => price / earnings;
function _privateHelper() {}
```

## 🧩 컴포넌트 작성 가이드

### 1. Client vs Server Components

```typescript
// ✅ Server Component (기본)
// app/page.tsx
export default function Page() {
  return <div>Static content</div>;
}

// ✅ Client Component (상호작용 필요)
// components/PortfolioBuilder.tsx
'use client';
import { useState } from 'react';

export default function PortfolioBuilder() {
  const [budget, setBudget] = useState(1000);
  // ...
}
```

### 2. 컴포넌트 구조
```typescript
'use client'; // 필요 시

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Types
interface MyComponentProps {
  title: string;
}

// Component
export default function MyComponent({ title }: MyComponentProps) {
  // 1. Hooks
  const [state, setState] = useState('');

  // 2. Effects
  useEffect(() => {
    // ...
  }, []);

  // 3. Handlers
  const handleClick = () => {
    // ...
  };

  // 4. Render
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}
```

### 3. shadcn/ui 컴포넌트 추가
```bash
# 새 컴포넌트 추가
npx shadcn@latest add [component-name]

# 예: Toast 추가
npx shadcn@latest add toast
```

## 🔌 API 통합 가이드

### 1. API Route 생성
```typescript
// app/api/stocks/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker');

  // API 호출 로직
  const data = await fetchStockData(ticker);

  return NextResponse.json(data);
}
```

### 2. React Query 사용
```typescript
// lib/hooks/useStocks.ts
import { useQuery } from '@tanstack/react-query';

export function useStocks(filters: StockFilters) {
  return useQuery({
    queryKey: ['stocks', filters],
    queryFn: () => fetchStocks(filters),
    staleTime: 60 * 1000, // 1분
  });
}

// Component에서 사용
function ScreenerContent() {
  const { data, isLoading, error } = useStocks({ pe: 30 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return <div>{/* 데이터 렌더링 */}</div>;
}
```

## 🧪 테스팅

### Jest + React Testing Library (향후 추가)
```bash
# 설치
npm install -D jest @testing-library/react @testing-library/jest-dom

# 테스트 실행
npm test
```

### 테스트 예시
```typescript
// __tests__/components/HeroSection.test.tsx
import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/home/HeroSection';

describe('HeroSection', () => {
  it('renders title correctly', () => {
    render(<HeroSection />);
    expect(screen.getByText(/소액으로 시작하는/)).toBeInTheDocument();
  });
});
```

## 🐛 디버깅

### VS Code 디버그 설정
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    }
  ]
}
```

### React DevTools
- Chrome 확장 프로그램 설치
- 컴포넌트 계층 구조 확인
- Props/State 실시간 디버깅

### Network 탭 (API 디버깅)
```typescript
// API 응답 로깅
console.log('API Response:', data);

// 성능 측정
console.time('API Call');
const data = await fetchData();
console.timeEnd('API Call');
```

## 📊 성능 최적화

### 1. 이미지 최적화
```tsx
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={100}
  priority // Above the fold
/>
```

### 2. 코드 스플리팅
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### 3. 메모이제이션
```typescript
import { useMemo, useCallback } from 'react';

function Component({ data }) {
  const expensiveValue = useMemo(() => {
    return calculateExpensive(data);
  }, [data]);

  const handleClick = useCallback(() => {
    // ...
  }, []);
}
```

## 🔄 Git 워크플로우

### 브랜치 전략
```bash
main           # 프로덕션
├── develop    # 개발
    ├── feature/screener-filters
    ├── feature/portfolio-builder
    └── bugfix/navbar-mobile
```

### 커밋 메시지
```
feat: Add P/E ratio filter to screener
fix: Fix navbar mobile menu toggle
docs: Update README with deployment guide
style: Format code with Prettier
refactor: Simplify portfolio calculation logic
test: Add tests for stock filters
```

### Pull Request
1. Feature 브랜치 생성
2. 변경사항 커밋
3. PR 생성 (develop ← feature)
4. 코드 리뷰
5. 병합

## 📚 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Query](https://tanstack.com/query/latest)

## 🤝 기여하기

1. 이슈 생성 또는 선택
2. Feature 브랜치 생성
3. 코드 작성 + 테스트
4. PR 생성
5. 리뷰 대기

## 💬 문의

문제가 생기면 GitHub Issues에 등록해주세요!
