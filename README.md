<div align="center">

# 🎨 Pargin CSS ✨  
**A PostCSS plugin that supercharges your CSS with `pargin` and `madding` shorthand properties**

[![PostCSS](https://img.shields.io/badge/PostCSS-%23DD3A0A.svg?style=flat&logo=postcss&logoColor=white)](https://postcss.org/)
[![npm](https://img.shields.io/npm/v/pargin-css)](https://www.npmjs.com/package/pargin-css)
[![License](https://img.shields.io/npm/l/pargin-css)](./LICENSE)

</div>

---

## 🔗 Table of Contents

- [✨ Features](#-features)
- [🔧 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
  - [📦 Vite](#-vite-configuration)
  - [🧰 Webpack](#-webpack-configuration)
  - [🪄 PostCSS Config](#-postcssconfigjs)
- [🚀 Usage](#-usage)
- [📄 License](#-license)

---

## ✨ Features

- 🆕 Adds two new CSS properties: `pargin` and `madding`
- 🔄 Converts shorthand into standard `padding` and `margin`
- 🪶 Lightweight with **zero dependencies**
- 🔧 Compatible with any PostCSS setup

---

## 🔧 Installation

```bash
npm install --save-dev pargin-css
# or
yarn add --dev pargin-css
# or
pnpm add --save-dev pargin-css
```

---

## ⚙️ Configuration

### 📦 Vite Configuration

```ts
// vite.config.js
import { defineConfig } from 'vite'
import postcss from 'rollup-plugin-postcss'
import parginCss from 'pargin-css'

export default defineConfig({
  plugins: [
    postcss({
      plugins: [
        parginCss() // Add plugin with optional config
      ]
    })
  ]
})
```

---

### 🧰 Webpack Configuration

Install required dependencies:

```bash
npm install --save-dev postcss postcss-loader pargin-css
```

Then configure:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'pargin-css',
                    {
                      // Optional configuration
                    }
                  ]
                ]
              }
            }
          }
        ]
      }
    ]
  }
}
```

---

### 🪄 postcss.config.js

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('pargin-css')({
      // Optional configuration
    })
  ]
}
```

---

## 🚀 Usage

### ✅ Basic

```css
/* Input */
.box {
  pargin: 10px 20px;
}

/* Output */
.box {
  padding: 10px 20px;
  margin: 10px 20px;
}
```

### 🔁 Longhand Expansion

```css
.pargin-example {
  pargin: 5px 10px, 15px 20px;
}

.madding-example {
  madding: 1rem 2rem, 4px;
}
```

Becomes:

```css
.pargin-example {
  padding: 5px 10px;
  margin: 15px 20px;
}

.madding-example {
  padding 4px;
  margin: 1rem 2rem;
}
```

---

## 📄 License

Licensed under the [MIT License](./LICENSE).
