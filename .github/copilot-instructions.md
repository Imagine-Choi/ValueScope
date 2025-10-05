# ValueScope - US Stock Value Screener & Portfolio Manager

## Project Overview
ValueScope is a beginner-friendly web application for US stock value screening and small-capital portfolio management targeting Korean investors interested in US stocks.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: React Query (@tanstack/react-query)
- **Charts**: Recharts
- **Database**: PostgreSQL (future: Vercel Postgres)
- **Backend**: Next.js API Routes
- **Deployment**: Vercel

## Project Status
✅ Project scaffolding complete
✅ Core UI components implemented
✅ Main pages created (Home, Screener, Portfolio, Learn)
✅ Responsive design with shadcn/ui
✅ Educational content for beginners
⏳ API integration (Yahoo Finance) - pending
⏳ Database setup - pending
⏳ User authentication - pending

## Key Features Implemented
1. **Home Page** - Hero section, educational banners, quick start simulator, top stocks, how it works
2. **Stock Screener** - Filter by P/E, dividend yield, sort by various metrics
3. **Portfolio Builder** - Budget input, stock selection, weight allocation, simulation
4. **Learning Center** - Beginner guides on P/E, dividends, diversification, value investing

## Development Commands
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## Project Structure
- `/src/app/*` - Next.js App Router pages
- `/src/components/home/*` - Home page components
- `/src/components/screener/*` - Stock screener components
- `/src/components/portfolio/*` - Portfolio builder components
- `/src/components/layout/*` - Navbar, Footer
- `/src/components/ui/*` - shadcn/ui components
- `/src/lib/*` - Utilities and data logic

## Design Guidelines
- **Colors**: Blue (#2563eb) primary, complementary greens/purples for features
- **Typography**: Inter font, clear hierarchy
- **Components**: Use shadcn/ui for consistency
- **Responsive**: Mobile-first approach
- **Accessibility**: WCAG AA compliance

## Target Audience
- Beginner investors with limited capital ($100-$1000)
- Korean speakers interested in US stocks
- Focus on value investing and dividend stocks
- Need educational content and simple UX

## Next Steps (Priority Order)
1. Implement Yahoo Finance API integration
2. Add individual stock detail pages with charts
3. Set up PostgreSQL database and save portfolios
4. Add user authentication (NextAuth.js)
5. Implement real-time price updates
6. Add stock news integration
7. Build backtesting feature

## Notes for Developers
- All mock data is currently hardcoded in components
- API routes are prepared but not implemented
- Database models need to be defined
- Consider rate limiting for external APIs
- Educational content should remain beginner-friendly

## Deployment
- **Platform**: Vercel (recommended)
- **Environment Variables** (to be set):
  - `DATABASE_URL` - PostgreSQL connection
  - `NEXTAUTH_SECRET` - Auth secret
  - `YAHOO_FINANCE_API_KEY` - API key (if needed)

## Contact
- Project for portfolio/job application in Korean securities firm IT
- Focus on clean code, modern UI, and educational value
