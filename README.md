# tsitser.com

Портфолио Flutter-разработчика на базе дизайна **Developer Portfolio Design** (Stitch, тема Midnight Pulse).

## Стек

- [Astro](https://astro.build) 6
- Tailwind CSS 4
- Светлая и тёмная тема (переключатель + `prefers-color-scheme`)

## Разработка

```bash
npm install
npm run dev
```

Откройте http://localhost:4321

## Сборка

```bash
npm run build
npm run preview
```

## Контент

Данные профиля и проектов — в `src/data/site.ts` (источник: [LinkedIn](https://www.linkedin.com/in/ruslan-tsitser/)).

## Деплой на Vercel

Проект настроен как **статический Astro** (`dist/`). В репозитории есть `vercel.json` с явными командами сборки.

### 1. Залить код в Git

```bash
git init
git add .
git commit -m "feat: portfolio site with Astro and Vercel config"
git branch -M main
git remote add origin git@github.com:<user>/tsitser_com.git
git push -u origin main
```

### 2. Подключить репозиторий в Vercel Dashboard

1. [vercel.com/new](https://vercel.com/new) → **Import Git Repository**
2. Выберите репозиторий с этим проектом
3. Vercel подставит настройки из `vercel.json`:

   | Параметр | Значение |
   |----------|----------|
   | Framework Preset | Astro |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

4. **Deploy** — после пуша в `main` каждый коммит даёт preview, merge в `main` — production

### 3. Домен (опционально)

В проекте → **Settings → Domains** добавьте `tsitser.com` и следуйте DNS-инструкциям Vercel.

В `astro.config.mjs` уже указан `site: 'https://tsitser.com'` для canonical URL. Если домен другой — обновите там.

### 4. Node.js

В `package.json`: `"node": ">=22.12.0"`. Vercel возьмёт подходящую версию Node 22 автоматически.

### CLI (по желанию)

```bash
npm i -g vercel
vercel link
vercel        # preview
vercel --prod # production
```

Переменные окружения для этого сайта не требуются.
