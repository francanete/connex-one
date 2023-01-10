# Connex One App

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `frontend`: Create React App
- `backend`: Express app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
cd connex-one
yarn build
```

### Create .env files

Inside `apps/frontend` folder create a file called `.env` and the following variable:

```
REACT_APP_TOKEN=mysecrettoken
```

Inside `apps/backend` folder create a file called `.env` and the following variables:

```
PORT=8000
TOKEN=mysecrettoken
```

### Develop

To develop all apps and packages, run the following command:

```
cd connex-one
yarn dev
```
