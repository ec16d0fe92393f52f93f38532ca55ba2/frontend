# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # start dev server (Vite HMR)
yarn build      # tsc + vite build
yarn lint       # ESLint (zero errors, warnings allowed)
yarn preview    # preview production build
```

No test runner is configured.

## Environment

Copy `.env.example` to `.env` and set `VITE_SERVER_URL` to the backend base URL (e.g. `http://localhost:3000/`).

## Architecture

React 18 + TypeScript SPA following **Feature-Sliced Design (FSD)**. Layers top-down:

```
src/
  app/       # entry, router, global styles, AuthProvider, ProtectedRoute/PublicOnlyRoute
  pages/     # route-level slices: pages/login/ui/, pages/main/ui/, pages/register/ui/
  widgets/   # composite UI blocks (empty — scaffold ready)
  features/  # user scenarios: features/auth/{api,hooks,types,ui}/
  entities/  # domain: entities/user/{api,hooks,model,types,ui}/
  shared/    # api/, store/, hooks/, types/, config/, ui/
```

Imports flow **strictly downward** — pages can import from features/entities/shared, never the reverse. Each slice exports only through its own `index.ts` barrel. The `boundaries/dependencies` ESLint rule enforces this at lint time.

**Pragmatic exception:** `src/shared/store/store.ts` imports entity reducers to compose the Redux root store. This is the designated composition root and is intentional.

## State management

- Redux store: [src/shared/store/store.ts](src/shared/store/store.ts). Exports `RootState` and `AppDispatch`.
- All API calls use **RTK Query** via a single `mainApi` base ([src/shared/api/mainApi.ts](src/shared/api/mainApi.ts)). Feature/entity APIs inject endpoints — never call `createApi` again.
- `mainApi` handles JWT: Bearer token from `localStorage`, auto-refresh on 401 via `/auth/refresh-tokens`.
- Use `useAppDispatch` / `useAppSelector` from `@shared/hooks`.

## Authentication flow

1. `App` wraps everything in `AuthProvider` ([src/app/providers/AuthProvider.tsx](src/app/providers/AuthProvider.tsx)).
2. On mount, `AuthProvider` calls `useGetMeQuery` (skipped if no token). On success → `setUser`; on error → `removeUser` + clear localStorage. Shows a full-screen spinner while the check is in-flight.
3. `ProtectedRoute` / `PublicOnlyRoute` ([src/app/providers/](src/app/providers/)) guard routes: unauthenticated → `/auth/login`; authenticated → `/`.

## Shared UI components

All in [src/shared/ui/](src/shared/ui/). Each folder: `ComponentName.tsx` + `ComponentName.props.ts` + `index.ts`.

| Component | Notes |
|---|---|
| `Button` | `variant`: primary/secondary/ghost/outline; `size`: sm/md/lg; `isLoading`, `leftIcon`, `rightIcon` |
| `FloatingInput` | Floating label animation; `label`, `error`, `hint` props; `forwardRef`-compatible |
| `Icon` | `as: ComponentType<SVGProps<SVGSVGElement>>` — works with lucide-react AND `@svgx` SVGs |
| `Container` | `max-w-[480px]` mobile-first centered wrapper |
| `Card` | Surface with `padding` and optional `shadow` |
| `Heading` / `Text` | Typography with `level`/`variant`/`size` props |
| `Spinner` | SVG spinner, sizes sm/md/lg |
| `Badge` | Pill chip, variants primary/accent/success/muted |

## Design tokens

Defined in `@theme {}` in [src/app/styles/main.css](src/app/styles/main.css). Dark theme via `[data-theme="dark"]`. Toggle with `useTheme()` from `@shared/hooks`.

Key token names: `--color-primary`, `--color-bg`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--color-accent`, `--color-border`, `--radius-md`, `--container-max`.

## Path aliases

| Alias | Resolves to |
|---|---|
| `@app` | `src/app` |
| `@pages` | `src/pages` |
| `@features` | `src/features` |
| `@entities` | `src/entities` |
| `@widgets` | `src/widgets` |
| `@shared` | `src/shared` |
| `@store` | `src/shared/store` |
| `@assets` | `src/shared/assets` |
| `@styles` | `src/app/styles` |

## Styling

Tailwind CSS v4 (`@tailwindcss/vite`). Use CSS variable tokens via `[var(--color-primary)]` etc. SVGs import as React components via `@svgx/vite-plugin-react`. SCSS available (`sass` installed). `clsx` available for conditional classNames.

## PWA

`vite-plugin-pwa` generates service worker + manifest on `yarn build`. App name: "Voronka", theme color: `#3D7D3F`. Replace placeholder icons in `public/` (`pwa-192x192.png`, `pwa-512x512.png`, `apple-touch-icon.png`) before production.

## Routing

React Router v6 in [src/app/providers/RouterProvider.tsx](src/app/providers/RouterProvider.tsx). Current routes: `/` (protected), `/auth/login`, `/auth/register` (public-only).

## Notifications

`react-toastify` mounted globally in `App.tsx` (top-center, 2 s). Call `toast.success()` / `toast.error()` anywhere.

## Linting

`import/order` enforces blank lines between import groups (external → internal FSD layers → relative). `boundaries/dependencies` enforces FSD layer hierarchy. Running `yarn lint` must exit zero errors before committing.
