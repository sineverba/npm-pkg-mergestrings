# mergestrings ✂️

> Merges multiple strings into one, separated by a space. Empty strings are automatically filtered out.

[![npm version](https://img.shields.io/npm/v/@sineverba/mergestrings?style=flat-square&logo=npm)](https://www.npmjs.com/package/@sineverba/mergestrings)
[![CircleCI](https://img.shields.io/circleci/build/github/sineverba/npm-pkg-mergestrings/master?style=flat-square&logo=circleci)](https://circleci.com/gh/sineverba/npm-pkg-mergestrings)
[![Coverage Status](https://img.shields.io/coveralls/github/sineverba/npm-pkg-mergestrings/master?style=flat-square&logo=coveralls)](https://coveralls.io/github/sineverba/npm-pkg-mergestrings?branch=master)
[![Quality Gate](https://img.shields.io/sonar/quality_gate/npm-pkg-mergestrings?server=https%3A%2F%2Fsonarcloud.io&style=flat-square&logo=sonarcloud)](https://sonarcloud.io/dashboard?id=npm-pkg-mergestrings)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

---

## ⚙️ Installation

```bash
npm install @sineverba/mergestrings
```

## ⚡️ Quickstart

```ts
import { mergeStrings } from "@sineverba/mergestrings";

const result = mergeStrings("alfa beta", "foo bar baz");
console.log(result); // "alfa beta foo bar baz"
```

## 🎯 Features

- Accepts any number of string arguments
- Automatically filters out empty strings
- Zero dependencies
- Fully typed (TypeScript)

## 💡 Usage examples

```ts
// Basic usage
mergeStrings("hello", "world");
// → "hello world"

// Empty strings are ignored
mergeStrings("hello", "", "world");
// → "hello world"

// Single argument
mergeStrings("hello");
// → "hello"

// No arguments
mergeStrings();
// → ""
```

## 💻 Development

```bash
nvm use
npm run test       # run tests
npm run coverage   # run tests with coverage report
npm run lint       # ESLint check
npm run prettier   # check formatting
npm run build      # compile TypeScript to dist/
```

## 🧾 License

MIT © [sineverba](https://github.com/sineverba)
