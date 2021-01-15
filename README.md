This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# home

Just adding here in case anyone sees this error message after upgrading a project to create-react-app v4:

Theme UI currently only supports the classic JSX runtime. Until emotion is upgraded to support the automatic runtime and Theme UI can be upgraded, add the comment /\*_ @jsxRuntime classic _/ to all files using the sx prop. This should fix the issue.

```
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
```

[link](https://github.com/system-ui/theme-ui/issues/1160#issuecomment-715530924)

## 開発環境の立ち上げ

```
yarn dev
```

## ローカルで本番環境を確認する手順

```
yarn build
yarn start
```
