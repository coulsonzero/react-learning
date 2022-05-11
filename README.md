# Getting Started with Create React App

### 快速开始

```sh
npm install # OR yarn
npm start   # OR yarn start
```

[http://localhost:3000](http://localhost:3000) to view it

### package.json

```json
	"scripts": {
		"start": "node ../node_modules/.bin/react-scripts start ./src/index.js",
		"build": "ode ../node_modules/.bin/react-scripts build ./src/index.js"
	},
```

### React降低版本

先创建react项目，然后进入项目中修改指定版本
```sh
$ npx create-react-app react-demo
$ cd react-demo
$ npm install —-save react@17.0.2 react-dom@17.0.2
```

- index.js
```js
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"


ReactDOM.render(<App />, document.getElementById("root"))

```