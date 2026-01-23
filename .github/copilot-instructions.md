# Copilot instructions for this repo

## Big picture
- React + Vite single-page app. `App` is the state container; UI is split into presentational components in [src/components](src/components).
- Core domain types live in [src/types.ts](src/types.ts). `Book` has `words`, and `Settings` controls UI behavior.
- Persistence uses an async wrapper over `localStorage` in [src/services/storageService.ts](src/services/storageService.ts). App state is hydrated on mount and saved on changes.

## Data flow & persistence
- `App` owns `bookState` (`books`, `currentBookIndex`, `currentWordIndex`) and `settings`. Components receive props + callbacks.
- Persisted state key is `wordMasterState`. Legacy keys `wordMasterBooks` and `wordMasterSettings` are still written for migration.
- Use `getJsonItem`/`setJsonItem` from [src/services/storageService.ts](src/services/storageService.ts) for storage access (async API).

## Conventions & patterns
- Avoid mutating nested arrays/objects in state updates; use immutable copies (see `addWord`, `editWord`, `deleteWord` in [src/App.tsx](src/App.tsx)).
- UI sections are toggled by `activeSection` in `App` and rendered conditionally.
- Styles are global in [src/styles/index.css](src/styles/index.css). Keep class names consistent with components.

## Developer workflows
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Preview build: `npm run preview`

## Examples to follow
- Storage hydration + save guard (`isInitialized`) in [src/App.tsx](src/App.tsx).
- Word/Book operations live in `App` and are passed down to [src/components/WordList.tsx](src/components/WordList.tsx) and [src/components/Header.tsx](src/components/Header.tsx).
