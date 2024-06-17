---
date: "2024-06-16"
title: "zenn markdownの記法について"
description: "ブログ執筆に使用しているzenn markdownの記法について、備忘録も兼ねてまとめています。エディタには vscode を使用しています。"
thumbnail: "post-1.png"
---

## 見出し

```md
# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4
```

アクセシビリティの観点から`見出し2`から始めることが推奨されています。

## リスト

```md
- Hello!
- Hola!
  - Bonjour!
  * Hi!
```

- Hello!
- Hola!
  - Bonjour!
  * Hi!

リストのアイテムには`-`または`*`が使用できます。`tab` または `space` でインデントします。

## 番号付きリスト

```md
1. first
1. second
```

1. first
1. second

## テキストリンク

```md
[google へ移動](https://google.com)
```

[google へ移動](https://google.com)

エディタ上でテキストを選択し、url をペーストすると自動でテキストリンクに変換されます。

## 画像

```md
<!-- ![altテキスト](url =oox) -->

![](/images/blog/post-1/post-1.png =250x)
_キャプション_
```

![](/images/blog/post-1/post-1.png =250x)
_キャプション_

oox の部分で、画像の横幅を px 単位で指定できます。url 以外はオプションです。

## テーブル

```md
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

## コードブロック

````md
```js: hello.js
const func = () => {
  console.log("Hello World!");
};
```
````

```js: hello.js
const func = () => {
  console.log("Hello World!");
};
```

言語を指定することでシンタックスハイライトを適用できます。([対応言語の一覧](https://prismjs.com/#supported-languages))
また、`: hello.js`によりファイル名を表示しています。

````md
```diff js: hello.js
const func = () => {
＋  console.log("Hello World!");
－};
```
````

```diff js: hello.js
const func = () => {
+  console.log("Hello World!");
-};
```

`diff`を設定し、`+`、`-`を行の先頭に入れることで差分表示ができます。
