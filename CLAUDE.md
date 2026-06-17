# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build       # Compile TypeScript to dist/
npm test            # Run tests with Jest
npm run coverage    # Run tests with coverage report
npm run lint        # TSLint check
npm run prettier    # Check formatting
npm run fixprettier # Auto-fix formatting
```

Run a single test file:
```bash
npx jest src/__tests__/mergeStrings.test.ts
```

## Architecture

This is a minimal TypeScript npm package (`@sineverba/mergestrings`) that exports a single function:

- **`src/index.ts`** — exports `mergeStrings(...strings: string[])`, which joins variadic string arguments with a space, filtering out empty/falsy values via `filter(Boolean)`.
- **`dist/`** — compiled output (gitignored), what gets published to npm (`"files": ["dist/**/*"]`).
- Tests live in `src/__tests__/` and use `ts-jest` so TypeScript is tested directly without a separate compile step.

The pre-commit hook (Husky) runs before each commit. Publishing targets npm public registry.
