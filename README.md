# Hahow_Project

## Quick Start

- [Demo](https://dianyuyi-hahowproject.netlify.app/heroes)
- 本機執行：

```shell
git clone https://github.com/dianyuyi/hahow_project.git
cd hahow_project
yarn
yarn start
# open localhost:3000
```

更多關於React的原始碼指令請見[CONTRIBUTING.md](./CONTRIBUTING.md)。


## 架構規劃

### 目錄結構設計
```bash
.
├── public/                      
├── src/
│  ├── actions/                    # Redux actions
│  ├── components/              
│  │  ├── AbilityCounter.js        # Ability counter
│  │  ├── Loading.js               # Loading for data fetching
│  │  └── SubmitButton.js          # Update Hero profile
│  ├── reducers/                   # Redux reducers
│  ├── screens/                
│  │  ├── ListScreen/              # Display Hero list
│  │  └── ProfileScreen.js         # Display Hero Profile
│  ├── styles/                     # All styles
│  ├── store.js                    # Redux store and middlewares
│  ├── App.js                      
│  └── index.js
├── LICENSE
├── package.json
├── CONTRIBUTING.md
├── README.md
└── yarn.lock
```

### Web顯示結構

最初原本想將`List`和`Profile`作為Form screen包在一個Main Screen中，但因為專案規模小，後來決定各自獨立狀態。變成在`App.js`下，`ListScreen`和`ProfileScreen`並列的狀態。


### 狀態管理

- 使用 Redux 管理。狀態由`store.js`, `/reducers`, `/actions`處理，在Screens和Components中則利用`useSelector`和`useDispatch`進行存取。
- 透過`action`獲取資料時，前端的畫面會根據`loading`, `error`及回傳的`data`切換顯示。

### 第三方 library 的使用及簡介
- `redux`
  - 管理跨組件狀態傳遞的重要library，與 `react-redux`搭配，用來保持取用資料時的一致性。使狀態可以與 react 進行整合，除了可以集中管理應用的狀態、避免將狀態一層一層傳遞外，也可讓狀態相關的領域邏輯與非同步行為從 React components 中抽離出來。
- `redux-thunk`
  - 處理非同步的Redux Middleware。
- `axios`
  - 支援Promise API的HTTP library，瀏覽器和`node.js`都能使用。而且本身有支援JSON自動轉換和CSRF的支援。
- `styled-components`
  - CSS-in-JS 的方案之一。選擇它而非emotion或styled-system，是因為個人習慣使用起來更加直覺。雖然也可以另外搭配Tailwind，不過小專案獨立使用的自由度更高。可以傳入變數當成小型的HOC來用。


## 寫註解的原則

通常會盡可能避免，用命名和有層次的編排方式來增加可讀性。但如果是未完成的功能、暫停開發/尚待優化的功能、某些較難找到對應位置的變數，就會寫註解幫助自己或其他人快速找到程式碼用途。

## 專案中遇到的困難、問題，以及解決的方法

### 初始架構規劃和library選擇

因為做過的專案有類似架構，最初帶入APP的習慣來寫，但後來發現小專案弄太複雜是自找麻煩，於是放棄了`redux-form`。另一方面，小專案也代表能自我實驗的東西很多，所以沒有選擇工作上常用的Connect，改用`useSelector`, `useDispatch`來體驗不同Component操作上的差異。


### Hero Card 的Selected Color

當幾乎所有功能都完成，才想起要亡羊補牢的東西。因為`List`和`Profile`已經是各自獨立的頁面，就單純用`useState`來記錄`heroId`，順便用`styled-componemts`的特性控制style變化。


### Hero 能力值不能小於零

當專案已經Deploy後，才驚覺這條應該是指`單一能力值不能為零`才對。原本引入`reselect`想在reducer中解決，但仔細想想又發現這不是計算而是個boolean的問題，於是用最簡單的土方法`some`解決了。可惜能力值裡沒有DEF，不然把其他能力壓榨成零來點出血牛還是合理的。