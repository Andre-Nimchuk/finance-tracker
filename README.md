# Finance Tracker

Навчальний проєкт для вивчення Next.js App Router, Node.js та full-stack розробки.
Поточний етап — маршрути, вкладені layouts, route groups і динамічні сегменти.

## Запуск

Використовуй Node.js 22 LTS та pnpm 11.5.1 (версія закріплена в `package.json`).

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Відкрий [localhost:3000](http://localhost:3000).

## Якість коду

- **ESLint** — правила Next.js Core Web Vitals, React та TypeScript.
- **Prettier** — єдине форматування: два пробіли, подвійні лапки, крапки з комою та LF.
- **TypeScript** — перевірка типів у strict mode.
- **eslint-config-prettier** — вимикає правила ESLint, що конфліктують із Prettier;
  сам форматування не запускає.

Ця конфігурація використовує офіційні [правила ESLint для Next.js](https://nextjs.org/docs/app/api-reference/config/eslint).
У Next.js 16 lint запускається окремо: успішний build не замінює перевірку ESLint.

| Команда             | Призначення                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `pnpm lint`         | Перевірити код; попередження також спричиняють невдалу перевірку |
| `pnpm lint:fix`     | Застосувати доступні автоматичні виправлення ESLint              |
| `pnpm format`       | Відформатувати проєкт                                            |
| `pnpm format:check` | Перевірити форматування без змін файлів                          |
| `pnpm typecheck`    | Згенерувати типи маршрутів Next.js і перевірити TypeScript       |
| `pnpm check`        | Послідовно перевірити lint, форматування та типи                 |
| `pnpm build`        | Створити production-збірку                                       |

Перед push:

```bash
pnpm check
pnpm build
```

## Форматування при збереженні

У VS Code або Cursor відкрий кореневу папку проєкту та встанови рекомендовані розширення:

- **Prettier – Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)

Рекомендації збережені в `.vscode/extensions.json`; їх можна знайти через
`Extensions: Show Recommended Extensions` у Command Palette.

Налаштування `.vscode/settings.json` форматують файл через Prettier при збереженні.
При явному збереженні (`Cmd+S` / `Ctrl+S`) також виконуються доступні виправлення ESLint.
Помилки, які неможливо виправити автоматично, залишаються в панелі Problems.
Prettier змінює оформлення коду, але не перебудовує компоненти чи архітектуру.

`.editorconfig` задає базові відступи й кінці рядків для редакторів із підтримкою EditorConfig.
Згенеровані файли та lockfile не форматуються; `pnpm-lock.yaml` потрібно комітити.

## Навчальний процес

Правила наставництва та поточний навчальний етап описані в `AGENTS.md`.
Сторінки входу й реєстрації наразі є навчальними заглушками; авторизації та бази даних ще немає.
