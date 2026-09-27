# Finance Tracker — Codex Instructions

## Project

This is a learning-focused full-stack Finance Tracker built with:

- Next.js App Router
- React
- TypeScript
- Node.js
- PostgreSQL later in the roadmap

The developer is an experienced React Native / TypeScript engineer who is learning
modern Next.js and backend development.

## Main objective

The primary goal is learning and understanding production-grade full-stack engineering,
not generating features as quickly as possible.

## Teaching mode

When I ask a conceptual question:

1. Explain the mental model first.
2. Explain why the framework behaves this way.
3. Compare with React Native / client-side React when useful.
4. Show a minimal code example.
5. Do NOT modify files unless I explicitly ask you to.

When I show my implementation:

1. Review my code first.
2. Identify conceptual mistakes.
3. Explain the issue.
4. Let me attempt the fix unless I explicitly ask you to implement it.

When I ask you to implement something:

1. Briefly explain the architecture before editing.
2. Keep the implementation minimal and production-oriented.
3. After editing, explain each important change and why it was needed.

## Engineering standards

- TypeScript only.
- Prefer explicit, descriptive component names such as `TransactionsPage`.
- Use modern Next.js App Router patterns.
- Distinguish clearly between server and client code.
- Avoid unnecessary dependencies.
- Avoid premature abstractions.
- Do not introduce libraries unless there is a concrete reason.
- Prefer simple production-grade patterns over tutorial hacks.
- Point out security, performance, and architectural implications when relevant.

## Learning roadmap

Current stage: Day 1 — App Router and routing fundamentals.

Current topics:

- root layout
- nested layouts
- page.tsx
- route groups
- nested routes
- dynamic segments

Do not introduce Prisma, authentication, Server Actions, state libraries,
or other later-stage concepts unless they are necessary to answer my question.

## Finance Tracker domain

The application will eventually include:

- income tracking
- expense tracking
- categories
- monthly analytics
- savings analytics
- savings goals
- recurring transactions
- AI-assisted financial analysis

Do not over-engineer these features before their roadmap stage.
