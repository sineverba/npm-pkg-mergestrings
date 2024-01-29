| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/mergestrings.svg)](https://badge.fury.io/js/mergestrings) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-mergestrings/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-mergestrings) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-mergestrings.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-mergestrings) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-mergestrings/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-mergestrings?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-mergestrings&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-mergestrings) |

`mergestrings` merge multiple strings in one string, seaparte by space.

## Installation
`npm install @sineverba/mergestrings`

## Usage

```js
import { mergeStrings } from "@sineverba/mergestrings";

const first = "alfa beta";
const second = "foo bar baz"

const result = mergeStrings(first, second);
console.log(result); // it prints "alfa beta foo bar baz"

```

## Tests

`npm run test` for simple test

`npm run coverage` for coverage
