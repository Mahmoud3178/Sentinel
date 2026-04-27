# Sentinel – Angular 18 Project

## هيكل المشروع (Project Structure)

```
sentinel-angular/
├── src/
│   ├── app/
│   │   ├── app.component.ts          ← Root component (Navbar + Router)
│   │   ├── app.config.ts             ← App configuration
│   │   ├── app.routes.ts             ← Routing configuration
│   │   │
│   │   ├── core/
│   │   │   └── scan.service.ts       ← Shared state (domain signal)
│   │   │
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.html
│   │   │   │   └── navbar.component.scss
│   │   │   └── footer/
│   │   │       ├── footer.component.ts
│   │   │       ├── footer.component.html
│   │   │       └── footer.component.scss
│   │   │
│   │   └── pages/
│   │       ├── home/                 ← PAGE 1: Landing Page
│   │       │   ├── home.component.ts
│   │       │   ├── home.component.html
│   │       │   └── home.component.scss
│   │       ├── scan/                 ← PAGE 2: New Scan
│   │       │   ├── scan.component.ts
│   │       │   ├── scan.component.html
│   │       │   └── scan.component.scss
│   │       ├── progress/             ← PAGE 3: Scan In Progress
│   │       │   ├── progress.component.ts
│   │       │   ├── progress.component.html
│   │       │   └── progress.component.scss
│   │       └── dashboard/            ← PAGE 4: Results Dashboard
│   │           ├── dashboard.component.ts
│   │           ├── dashboard.component.html
│   │           └── dashboard.component.scss
│   │
│   ├── styles.scss                   ← Global styles + CSS variables
│   ├── index.html
│   └── main.ts
│
├── angular.json
├── package.json
└── tsconfig.json
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Run development server
ng serve

# 3. Open browser
# http://localhost:4200
```

## Routes

| Path         | Component         | Description           |
|--------------|-------------------|-----------------------|
| `/`          | HomeComponent     | Landing page          |
| `/scan`      | ScanComponent     | Start a new scan      |
| `/progress`  | ProgressComponent | Scan in progress view |
| `/dashboard` | DashboardComponent| Results & findings    |

## Notes
- Angular 18 Standalone Components (no NgModules)
- Angular Signals used for shared domain state
- Bootstrap 5.3 via CDN in global styles
- Google Fonts: Share Tech Mono + Rajdhani + Inter
- `@for` and `@if` new Angular 17+ control flow syntax
