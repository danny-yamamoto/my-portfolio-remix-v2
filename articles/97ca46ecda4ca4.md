---
title: "About Remix v2-flat routes"
emoji: "💿"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: []
published: false
---
## Introduction
この記事では、Remix v2 で App を構築する過程で学んだことの一部を共有します。

## Background
現職の Frontend は、Vue/Nuxt、React/Gatsby など複数の構成が存在します。

現在のデファクトと言える Next.js は、数ある Framework の中で最もユーザーが多く、コミュニティーが活発です。
一方で、Next.js を Vercel 以外、例えば Cloud Run で動かす場合、恩恵を受けられないことがあります。
また、Vercel としては他の platform で使われると開発する incentive がありません。

その他の Framework を問われると、monetize がはっきりしているものが妥当な選択肢だと思います。

そこで、Shopifyと提携した Remix です。

v2 が release されたため、大きな変更の1つである flat routes とその他の変更点について調べます。

## Overview
僕は、Remix v1 で future flags を有効にしたため、flat routes は経験しました。
v2 における flat routes は、変わりありませんでした。

> Also in v1.11 we added "flat" routing, which simplifies doing nested layouts without requiring nested directories. This is the default in v2[^1]
>
> また、v1.11では "フラット "ルーティングが追加され、ネストされたディレクトリを必要とせず、ネストされたレイアウトを簡単に行えるようになりました。これはv2のデフォルトです。

[^1]: https://remix.run/blog/remix-v2

`Outlet` の初期表示は、`portfolio._index.tsx`
```html
      <div className="flex-container">
        <div className="flex-item">
          <h2 id="experience"><Link to={`/portfolio/experience`}>Experience</Link></h2>
          <h2 id="articles"><Link to={`/portfolio/articles`}>Top 20 Articles</Link></h2>
          <h2 id="certificates"><Link to={`/portfolio/certificates`}>Certificates</Link></h2>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
```

```bash
│   ├── routes
│   │   ├── _index.tsx
│   │   ├── portfolio.articles.tsx      // Outlet
│   │   ├── portfolio.certificates.tsx  // Outlet
│   │   ├── portfolio.experience.tsx    // Outlet
│   │   ├── portfolio._index.tsx        // Outlet
│   │   └── portfolio.tsx               // layout
```
