## Express.js 앱 생성 

```
$ npx express-generator expressapp
```

```
$ cd expressapp 
$ npm install
$ npm start 
```

## Direcotry Structure
```
📂 expressapp
    📂src
    ├── 📂api
    |   ├── 📂middlewares   
    |   |   └── 📄index.js
    |   ├── 📂routes
    |   └── 📄index.js
    ├── 📂conifg
    |   └── 📄index.js
    ├── 📂loaders
    |   ├──📄event.js
    |   ├──📄express.js
    |   ├──📄index.js
    |   ├──📄logger.js
    ├── 📂 models
    ├── 📂 services
    └── 📄 app.js
    📄 package.json
    📄 README.md
```