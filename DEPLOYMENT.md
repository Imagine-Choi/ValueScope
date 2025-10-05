# 🚀 ValueScope 배포 가이드

이 가이드는 ValueScope 웹 애플리케이션을 Vercel에 배포하는 방법을 설명합니다.

## 📋 배포 전 체크리스트

- [ ] 프로젝트가 로컬에서 정상 작동 (`npm run dev`)
- [ ] 빌드 에러 없음 (`npm run build`)
- [ ] Git 저장소 생성 및 커밋
- [ ] Vercel 계정 생성 (무료)

## 🎯 Vercel 배포 (권장)

### 방법 1: Vercel CLI (빠른 배포)

```bash
# 1. Vercel CLI 설치
npm install -g vercel

# 2. Vercel 로그인
vercel login

# 3. 프로젝트 배포
vercel

# 4. 프로덕션 배포
vercel --prod
```

### 방법 2: Vercel 대시보드 (GUI)

1. **Vercel 웹사이트 접속**
   - https://vercel.com 방문
   - GitHub 계정으로 로그인

2. **New Project 클릭**
   - "Import Git Repository" 선택
   - GitHub 저장소 연결

3. **프로젝트 설정**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **환경 변수 설정 (선택)**
   - Settings → Environment Variables
   - 필요한 환경 변수 추가 (아래 참조)

5. **Deploy 클릭**
   - 자동 빌드 및 배포 시작
   - 완료 후 URL 제공 (예: https://valuescope.vercel.app)

## 🔧 환경 변수 설정

현재 프로젝트는 Mock 데이터를 사용하므로 환경 변수가 필수는 아닙니다.
향후 API 통합 시 다음 변수들이 필요합니다:

```bash
# Database (향후)
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Authentication (향후)
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key-here

# API Keys (향후)
YAHOO_FINANCE_API_KEY=your-api-key
NEXT_PUBLIC_API_URL=https://your-api.com
```

### 환경 변수 추가 방법 (Vercel)
1. Vercel 대시보드에서 프로젝트 선택
2. Settings → Environment Variables
3. 변수 이름과 값 입력
4. Production, Preview, Development 선택
5. Save 클릭

## 🌐 커스텀 도메인 설정

### Vercel에서 도메인 연결

1. **도메인 구매** (예: namecheap.com, GoDaddy)

2. **Vercel에 도메인 추가**
   - 프로젝트 Settings → Domains
   - 도메인 입력 (예: valuescope.com)
   - Add 클릭

3. **DNS 설정**
   - 도메인 등록업체 DNS 설정 페이지 이동
   - A 레코드 추가:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```
   - CNAME 레코드 추가:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **SSL 자동 설정**
   - Vercel이 자동으로 Let's Encrypt SSL 인증서 발급
   - HTTPS 자동 활성화

## 📊 성능 최적화

### 이미지 최적화
```typescript
// next.config.ts
const config = {
  images: {
    domains: ['your-image-cdn.com'],
    formats: ['image/webp', 'image/avif'],
  },
};
```

### 빌드 시간 단축
```bash
# Turbopack 사용 (이미 적용됨)
npm run dev --turbopack

# 의존성 캐싱 (Vercel 자동)
```

### 정적 생성 (SSG) 활용
```typescript
// app/stock/[ticker]/page.tsx
export async function generateStaticParams() {
  return [
    { ticker: 'AAPL' },
    { ticker: 'MSFT' },
    // ... 주요 종목들
  ];
}
```

## 🔍 모니터링 및 분석

### Vercel Analytics 활성화
1. 프로젝트 Settings → Analytics
2. Enable Analytics 클릭
3. 무료 플랜으로 기본 분석 제공

### 성능 모니터링
- Vercel Speed Insights 활성화
- Web Vitals 자동 추적 (CLS, FID, LCP)

## 🚨 트러블슈팅

### 빌드 실패 시
```bash
# 로컬에서 빌드 테스트
npm run build

# 캐시 삭제 후 재빌드
rm -rf .next node_modules
npm install
npm run build
```

### 환경 변수 미적용 시
- Vercel 대시보드에서 변수 확인
- Redeploy (Deployments → 최신 배포 → Redeploy)

### 도메인 연결 안 될 시
- DNS 전파 시간 대기 (최대 48시간)
- DNS 전파 확인: https://dnschecker.org

## 📱 모바일 반응형 테스트

배포 후 다양한 기기에서 테스트:
- Chrome DevTools (F12 → Toggle Device Toolbar)
- 실제 모바일 기기
- BrowserStack 또는 LambdaTest (유료)

## 🔄 CI/CD 자동화 (선택)

Vercel은 Git 연동 시 자동 배포를 지원합니다:

1. **자동 배포 트리거**
   - `main` 브랜치 푸시 → 프로덕션 배포
   - PR 생성 → 미리보기 배포

2. **GitHub Actions 통합** (선택)
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

## 📈 배포 후 할 일

- [ ] Google Search Console 등록
- [ ] Google Analytics 설정 (선택)
- [ ] 소셜 미디어 메타 태그 확인
- [ ] Open Graph 이미지 설정
- [ ] robots.txt 및 sitemap.xml 생성

## 💰 비용

### Vercel 무료 플랜
- ✅ 무제한 배포
- ✅ SSL 인증서 자동
- ✅ 100GB 대역폭/월
- ✅ Serverless Functions
- ⚠️ 상업용은 Pro 플랜 권장 ($20/월)

## 🎉 배포 완료!

축하합니다! 이제 전 세계에서 ValueScope에 접속할 수 있습니다.

**다음 단계**: 
1. API 통합 (Yahoo Finance)
2. 데이터베이스 설정 (Vercel Postgres)
3. 사용자 인증 (NextAuth.js)

문의: contact@valuescope.com
