(()=>{"use strict";var e={800:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(537),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([e.id,'.header-container{margin:auto;padding:0;display:flex;justify-content:center;align-items:center;position:relative}.header-container div{margin:1vmin;padding:1vmin;background-color:#333}.header{padding:0 0 2vmin;display:flex;flex-direction:row}*{font-family:Arial,Helvetica,sans-serif;font-weight:bold;box-sizing:border-box;border-radius:2vmin}body{background-color:#000}html{height:100%;display:flex;justify-content:center;align-items:center}.button{position:relative;display:inline-block;margin:1vmin;padding:1vmin 1vmin;color:#2196f3;text-transform:uppercase;text-decoration:none;font-size:3vmin;letter-spacing:.5vmin;overflow:hidden;transition:.2s;align-items:center;justify-content:center}.button:hover{box-shadow:0 0 1vmin #2196f3,0 0 5vmin #2196f3,0 0 10vmin #2196f3;background-color:#2196f3;color:#333;transition-delay:1s}.button__line{position:absolute;display:block}.button__line--top{top:0;left:-100%;width:100%;height:1vmin;background:linear-gradient(90deg, transparent, #2196f3)}.button:hover .button__line--top{left:100%;transition:1s;transition-delay:.25s}.button__line--bottom{bottom:0;right:-100%;width:100%;height:1vmin;background:linear-gradient(270deg, transparent, #2196f3)}.button__line--left{bottom:-100%;left:0;width:1vmin;height:100%;background:linear-gradient(0deg, transparent, #2196f3)}.button__line--right{top:-100%;right:0;width:1vmin;height:100%;background:linear-gradient(180deg, transparent, #2196f3)}.button:hover .button__line--bottom{right:100%;transition:1s;transition-delay:.25s}.button:hover .button__line--left{bottom:100%;transition:1s;transition-delay:0s}.button:hover .button__line--right{top:100%;transition:1s;transition-delay:0s}#current-page{display:flex;position:relative;align-items:center;justify-content:center;color:#2196f3}.count:before{content:"счет";position:absolute;width:100%;top:1.5vmin;font-size:2vmin;text-transform:uppercase;color:#000}.record:before{content:"рекорд";position:absolute;width:100%;top:1vmin;font-size:2vmin;text-transform:uppercase;color:#000}.title{padding:1.5vmin;font-size:7vmin;display:flex;justify-content:center;align-items:center}.header .count,.header .record{display:flex;justify-content:center;align-items:center;margin:1vmin 1vmin;text-transform:uppercase;font-weight:bold;padding:2vmin 5vmin;background-color:#bbb;text-align:center;border-radius:1vmin;position:relative;color:#fff;line-height:1vmin;font-size:3vmin;height:10vmin;min-width:20vmin}.container{margin:auto;background-color:#333;padding:1vmin 3vmin 3vmin 3vmin}#game-board{--cell-size: 15vmin;--cell-gap: 1vmin;position:relative;display:grid;grid-template-columns:repeat(4, var(--cell-size));grid-template-rows:repeat(4, var(--cell-size));gap:var(--cell-gap);border-radius:1vmin}.cell{background-color:#444;border-radius:1vmin}.tile{position:absolute;top:calc(var(--y)*(var(--cell-size) + var(--cell-gap)));left:calc(var(--x)*(var(--cell-size) + var(--cell-gap)));display:flex;justify-content:center;align-items:center;width:var(--cell-size);height:var(--cell-size);border-radius:1vmin;font-size:7.5vmin;background-color:hsl(200, 60%, var(--bg-lightness));color:hsl(20, 25%, var(--text-lightness));animation:show 200ms;transition:100ms}@keyframes show{0%{opacity:.5;transform:scale(0)}}#game-over{position:absolute;height:100%;width:100%;display:none;justify-content:center;align-items:center;z-index:100;flex-direction:column;background-color:#333;border-radius:1vmin;opacity:90%}#game-over>p{font-size:5vmin;font-weight:bold;color:var(--colorValue2or4orTitle)}#game-over>a{margin-top:2vmin;background-color:#000;color:var(--colorValue2or4orTitle);font-size:3vmin;font-weight:bold;padding:1vmin 20px;cursor:pointer}',"",{version:3,sources:["webpack://./src/index.scss","webpack://./src/styles/header.scss","webpack://./src/styles/body.scss","webpack://./src/styles/buttons.scss","webpack://./src/styles/current_page.scss","webpack://./src/styles/style.scss","webpack://./src/styles/container.scss","webpack://./src/styles/gameboard.scss","webpack://./src/styles/gameover.scss"],names:[],mappings:"AAAA,kBCAA,WACI,CAAA,SACA,CAAA,YACA,CAAA,sBACA,CAAA,kBACA,CAAA,iBACA,CAAA,sBACA,YACI,CAAA,aACA,CAAA,qBACA,CAAA,QAIR,iBACI,CAAA,YACA,CAAA,kBACA,CAAA,ECjBJ,sCACI,CAAA,gBACA,CAAA,qBACA,CAAA,mBACA,CAAA,KAGJ,qBACI,CAAA,KAEJ,WACI,CAAA,YACA,CAAA,sBACA,CAAA,kBACA,CAAA,QCdJ,iBACI,CAAA,oBACA,CAAA,YACA,CAAA,mBACA,CAAA,aACA,CAAA,wBACA,CAAA,oBACA,CAAA,eACA,CAAA,qBACA,CAAA,eACA,CAAA,cACA,CAAA,kBACA,CAAA,sBACA,CAAA,cAGJ,iEACI,CAAA,wBACA,CAAA,UACA,CAAA,mBACA,CAAA,cAGJ,iBACI,CAAA,aACA,CAAA,mBAGJ,KACI,CAAA,UACA,CAAA,UACA,CAAA,YACA,CAAA,uDACA,CAAA,iCAEJ,SACI,CAAA,aACA,CAAA,qBACA,CAAA,sBAIJ,QACI,CAAA,WACA,CAAA,UACA,CAAA,YACA,CAAA,wDACA,CAAA,oBAGJ,YACI,CAAA,MACA,CAAA,WACA,CAAA,WACA,CAAA,sDACA,CAAA,qBAGJ,SACI,CAAA,OACA,CAAA,WACA,CAAA,WACA,CAAA,wDACA,CAAA,oCAGJ,UACI,CAAA,aACA,CAAA,qBACA,CAAA,kCAGJ,WACI,CAAA,aACA,CAAA,mBACA,CAAA,mCAGJ,QACI,CAAA,aACA,CAAA,mBACA,CAAA,cCjFJ,YACI,CAAA,iBACA,CAAA,kBACA,CAAA,sBACA,CAAA,aACA,CAAA,cCJA,cACI,CAAA,iBACA,CAAA,UACA,CAAA,WACA,CAAA,eACA,CAAA,wBACA,CAAA,UACA,CAAA,eAKJ,gBACI,CAAA,iBACA,CAAA,UACA,CAAA,SACA,CAAA,eACA,CAAA,wBACA,CAAA,UACA,CAAA,OAIR,eACI,CAAA,eACA,CAAA,YACA,CAAA,sBACA,CAAA,kBACA,CAAA,+BAGJ,YAEI,CAAA,sBACA,CAAA,kBACA,CAAA,kBACA,CAAA,wBACA,CAAA,gBACA,CAAA,mBACA,CAAA,qBACA,CAAA,iBACA,CAAA,mBACA,CAAA,iBACA,CAAA,UACA,CAAA,iBACA,CAAA,eACA,CAAA,aACA,CAAA,gBACA,CAAA,WCjDJ,WACI,CAAA,qBACA,CAAA,+BACA,CAAA,YCHJ,mBACI,CAAA,iBACA,CAAA,iBACA,CAAA,YACA,CAAA,iDACA,CAAA,8CACA,CAAA,mBACA,CAAA,mBACA,CAAA,MAGJ,qBACI,CAAA,mBACA,CAAA,MAGJ,iBACI,CAAA,uDACA,CAAA,wDACA,CAAA,YACA,CAAA,sBACA,CAAA,kBACA,CAAA,sBACA,CAAA,uBACA,CAAA,mBACA,CAAA,iBACA,CAAA,mDACA,CAAA,yCACA,CAAA,oBACA,CAAA,gBACA,CAAA,gBAGJ,GACI,UACI,CAAA,kBACA,CAAA,CAAA,WCpCR,iBACI,CAAA,WACA,CAAA,UACA,CAAA,YACA,CAAA,sBACA,CAAA,kBACA,CAAA,WACA,CAAA,qBACA,CAAA,qBACA,CAAA,mBACA,CAAA,WACA,CAAA,aAGJ,eACI,CAAA,gBACA,CAAA,kCACA,CAAA,aAIJ,gBACI,CAAA,qBACA,CAAA,kCACA,CAAA,eACA,CAAA,gBACA,CAAA,kBACA,CAAA,cACA",sourcesContent:['.header-container{margin:auto;padding:0;display:flex;justify-content:center;align-items:center;position:relative}.header-container div{margin:1vmin;padding:1vmin;background-color:#333}.header{padding:0 0 2vmin;display:flex;flex-direction:row}*{font-family:Arial,Helvetica,sans-serif;font-weight:bold;box-sizing:border-box;border-radius:2vmin}body{background-color:#000}html{height:100%;display:flex;justify-content:center;align-items:center}.button{position:relative;display:inline-block;margin:1vmin;padding:1vmin 1vmin;color:#2196f3;text-transform:uppercase;text-decoration:none;font-size:3vmin;letter-spacing:.5vmin;overflow:hidden;transition:.2s;align-items:center;justify-content:center}.button:hover{box-shadow:0 0 1vmin #2196f3,0 0 5vmin #2196f3,0 0 10vmin #2196f3;background-color:#2196f3;color:#333;transition-delay:1s}.button__line{position:absolute;display:block}.button__line--top{top:0;left:-100%;width:100%;height:1vmin;background:linear-gradient(90deg, transparent, #2196f3)}.button:hover .button__line--top{left:100%;transition:1s;transition-delay:.25s}.button__line--bottom{bottom:0;right:-100%;width:100%;height:1vmin;background:linear-gradient(270deg, transparent, #2196f3)}.button__line--left{bottom:-100%;left:0;width:1vmin;height:100%;background:linear-gradient(0deg, transparent, #2196f3)}.button__line--right{top:-100%;right:0;width:1vmin;height:100%;background:linear-gradient(180deg, transparent, #2196f3)}.button:hover .button__line--bottom{right:100%;transition:1s;transition-delay:.25s}.button:hover .button__line--left{bottom:100%;transition:1s;transition-delay:0s}.button:hover .button__line--right{top:100%;transition:1s;transition-delay:0s}#current-page{display:flex;position:relative;align-items:center;justify-content:center;color:#2196f3}.count:before{content:"счет";position:absolute;width:100%;top:1.5vmin;font-size:2vmin;text-transform:uppercase;color:#000}.record:before{content:"рекорд";position:absolute;width:100%;top:1vmin;font-size:2vmin;text-transform:uppercase;color:#000}.title{padding:1.5vmin;font-size:7vmin;display:flex;justify-content:center;align-items:center}.header .count,.header .record{display:flex;justify-content:center;align-items:center;margin:1vmin 1vmin;text-transform:uppercase;font-weight:bold;padding:2vmin 5vmin;background-color:#bbb;text-align:center;border-radius:1vmin;position:relative;color:#fff;line-height:1vmin;font-size:3vmin;height:10vmin;min-width:20vmin}.container{margin:auto;background-color:#333;padding:1vmin 3vmin 3vmin 3vmin}#game-board{--cell-size: 15vmin;--cell-gap: 1vmin;position:relative;display:grid;grid-template-columns:repeat(4, var(--cell-size));grid-template-rows:repeat(4, var(--cell-size));gap:var(--cell-gap);border-radius:1vmin}.cell{background-color:#444;border-radius:1vmin}.tile{position:absolute;top:calc(var(--y)*(var(--cell-size) + var(--cell-gap)));left:calc(var(--x)*(var(--cell-size) + var(--cell-gap)));display:flex;justify-content:center;align-items:center;width:var(--cell-size);height:var(--cell-size);border-radius:1vmin;font-size:7.5vmin;background-color:hsl(200, 60%, var(--bg-lightness));color:hsl(20, 25%, var(--text-lightness));animation:show 200ms;transition:100ms}@keyframes show{0%{opacity:.5;transform:scale(0)}}#game-over{position:absolute;height:100%;width:100%;display:none;justify-content:center;align-items:center;z-index:100;flex-direction:column;background-color:#333;border-radius:1vmin;opacity:90%}#game-over>p{font-size:5vmin;font-weight:bold;color:var(--colorValue2or4orTitle)}#game-over>a{margin-top:2vmin;background-color:#000;color:var(--colorValue2or4orTitle);font-size:3vmin;font-weight:bold;padding:1vmin 20px;cursor:pointer}',".header-container {\r\n    margin: auto;\r\n    padding: 0 ;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    div {\r\n        margin: 1vmin;\r\n        padding: 1vmin;\r\n        background-color: #333;\r\n    }\r\n}\r\n\r\n.header {\r\n    padding: 0 0 2vmin;\r\n    display: flex;\r\n    flex-direction: row;\r\n}","* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    box-sizing: border-box;\r\n    border-radius: 2vmin;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n}\r\nhtml {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}",".button {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin: 1vmin;\r\n    padding: 1vmin 1vmin;\r\n    color: #2196f3;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    font-size: 3vmin;\r\n    letter-spacing: 0.5vmin;\r\n    overflow: hidden;\r\n    transition: 0.2s;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.button:hover {\r\n    box-shadow: 0 0 1vmin #2196f3, 0 0 5vmin #2196f3, 0 0 10vmin #2196f3;\r\n    background-color: #2196f3;\r\n    color: #333;\r\n    transition-delay: 1s;\r\n}\r\n\r\n.button__line {\r\n    position: absolute;\r\n    display: block;\r\n}\r\n\r\n.button__line--top {\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 1vmin;\r\n    background: linear-gradient(90deg, transparent, #2196f3);\r\n}\r\n.button:hover .button__line--top {\r\n    left: 100%;\r\n    transition: 1s;\r\n    transition-delay: 0.25s;\r\n}\r\n\r\n\r\n.button__line--bottom {\r\n    bottom: 0;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 1vmin;\r\n    background: linear-gradient(270deg, transparent, #2196f3);\r\n}\r\n\r\n.button__line--left {\r\n    bottom: -100%;\r\n    left: 0;\r\n    width: 1vmin;\r\n    height: 100%;\r\n    background: linear-gradient(0deg, transparent, #2196f3);\r\n}\r\n\r\n.button__line--right {\r\n    top: -100%;\r\n    right: 0;\r\n    width: 1vmin;\r\n    height: 100%;\r\n    background: linear-gradient(180deg, transparent, #2196f3);\r\n}\r\n\r\n.button:hover .button__line--bottom {\r\n    right: 100%;\r\n    transition: 1s;\r\n    transition-delay: 0.25s;\r\n}\r\n\r\n.button:hover .button__line--left {\r\n    bottom: 100%;\r\n    transition: 1s;\r\n    transition-delay: 0s;\r\n}\r\n\r\n.button:hover .button__line--right{\r\n    top: 100%;\r\n    transition: 1s;\r\n    transition-delay: 0s;\r\n}","#current-page {\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #2196f3;\r\n}\r\n\r\n",".count {\r\n    &:before {\r\n        content: 'счет';\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 1.5vmin;\r\n        font-size: 2vmin;\r\n        text-transform: uppercase;\r\n        color: black;\r\n    }\r\n}\r\n\r\n.record {\r\n    &:before {\r\n        content: 'рекорд';\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 1vmin;\r\n        font-size: 2vmin;\r\n        text-transform: uppercase;\r\n        color: black;\r\n    }\r\n}\r\n\r\n.title {\r\n    padding: 1.5vmin;\r\n    font-size: 7vmin;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.header .count,\r\n.header .record {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 1vmin 1vmin;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    padding: 2vmin 5vmin;\r\n    background-color: #bbb;\r\n    text-align: center;\r\n    border-radius: 1vmin;\r\n    position: relative;\r\n    color: white;\r\n    line-height: 1vmin;\r\n    font-size: 3vmin;\r\n    height: 10vmin;\r\n    min-width: 20vmin;\r\n}",".container {\r\n    margin: auto;\r\n    background-color: #333;\r\n    padding:  1vmin 3vmin 3vmin 3vmin;\r\n}","#game-board {\r\n    --cell-size: 15vmin;\r\n    --cell-gap: 1vmin;\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, var(--cell-size));\r\n    grid-template-rows: repeat(4, var(--cell-size));\r\n    gap: var(--cell-gap);\r\n    border-radius: 1vmin;\r\n}\r\n\r\n.cell {\r\n    background-color: #444;\r\n    border-radius: 1vmin;\r\n}\r\n\r\n.tile {\r\n    position: absolute;\r\n    top: calc(var(--y) * (var(--cell-size) + var(--cell-gap)));\r\n    left: calc(var(--x) * (var(--cell-size) + var(--cell-gap)));\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: var(--cell-size);\r\n    height: var(--cell-size);\r\n    border-radius: 1vmin;\r\n    font-size: 7.5vmin;\r\n    background-color: hsl(200, 60%, var(--bg-lightness));\r\n    color: hsl(20, 25%, var(--text-lightness));\r\n    animation: show 200ms;\r\n    transition: 100ms;\r\n}\r\n\r\n@keyframes show {\r\n    0% {\r\n        opacity: 0.5;\r\n        transform: scale(0);\r\n    }\r\n}","#game-over {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 100;\r\n    flex-direction: column;\r\n    background-color: #333;\r\n    border-radius: 1vmin;\r\n    opacity: 90%;\r\n}\r\n\r\n#game-over > p{\r\n    font-size: 5vmin;\r\n    font-weight: bold;\r\n    color: var(--colorValue2or4orTitle);\r\n\r\n}\r\n\r\n#game-over > a{\r\n    margin-top: 2vmin;\r\n    background-color: black;\r\n    color: var(--colorValue2or4orTitle);;\r\n    font-size: 3vmin;\r\n    font-weight: bold;\r\n    padding: 1vmin 20px;\r\n    cursor: pointer;\r\n}"],sourceRoot:""}]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var A=0;A<e.length;A++){var c=[].concat(e[A]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */");return[n].concat([o]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],A=r.base?l[0]+r.base:l[0],c=o[A]||0,d="".concat(A," ").concat(c);o[A]=c+1;var u=t(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var p=i(m,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var l=r(e,i),A=0;A<o.length;A++){var c=t(o[A]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{class e{constructor(e){this.container=document.createElement("div"),this.container.id=e}createHeaderTitle(e){const n=document.createElement("div");return n.innerText=e,n}render(){return this.container}}e.TextObject={};const n=e;class r extends n{constructor(e){super(e)}render(){const e=this.createHeaderTitle(r.TextObject.MainTitle);e.className="title";const n=document.createElement("div");n.className="header";const t=document.createElement("div");t.id="game-board";const i=document.createElement("div");i.id="game-over";const o=document.createElement("p");o.innerText="Game Over!";const a=document.createElement("a");a.href="./",a.className="button",a.innerText="Try again";const s=document.createElement("span"),l=document.createElement("span"),A=document.createElement("span"),c=document.createElement("span");s.className="button__line button__line--top",l.className="button__line button__line--right",A.className="button__line button__line--bottom",c.className="button__line button__line--left",a.append(s,l,A,c),i.append(o,a),t.append(i);const d=document.createElement("div");d.className="count",d.innerText="0";const u=document.createElement("div");u.className="record",u.innerText="0",n.append(e,d,u);const m=document.createElement("div");return m.append(n,t),m.className="container",this.container.append(m),this.container}}r.TextObject={MainTitle:"2048"};const i=r,o=class{constructor(e,n){this.container=document.createElement(e),this.container.className=n}render(){return this.container}},a=[{id:"main-page",text:"Главная"},{id:"rules-page",text:"Правила"},{id:"records-page",text:"Рекорды"}],s=class extends o{constructor(e,n){super(e,n)}renderPageButtons(){const e=document.createElement("div");a.forEach((n=>{const t=document.createElement("a");t.href=`#${n.id}`,t.className="button",t.innerText=n.text,e.append(t);const r=document.createElement("span"),i=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");r.className="button__line button__line--top",i.className="button__line button__line--right",o.className="button__line button__line--bottom",a.className="button__line button__line--left",t.append(r,i,o,a)})),this.container.append(e)}render(){return this.renderPageButtons(),this.container}};class l extends n{constructor(e,n){super(e),this.errorType=n}render(){const e=this.createHeaderTitle(l.TextObject[this.errorType]);return this.container.append(e),this.container}}l.TextObject={404:"Error! The page was not found."};const A=l;class c{constructor(e,n,t){this.recordElement=document.querySelector(".record"),this.recordElement.textContent=localStorage.best_score_value||"0";const r=document.createElement("div");r.classList.add("cell"),e.append(r),this.x=n,this.y=t}linkTile(e){e.setXY(this.x,this.y),this.linkedTile=e}unlinkTile(){this.linkedTile=null}isEmpty(){return!this.linkedTile}linkTileForMerge(e){e.setXY(this.x,this.y),this.linkedTileForMerge=e}unlinkTileForMerge(){this.linkedTileForMerge=null}hasTileForMerge(){return!!this.linkedTileForMerge}canAccept(e){return this.isEmpty()||!this.hasTileForMerge()&&this.linkedTile.value===e.value}mergeTiles(){const e=document.querySelector(".count");let n=Number(e.textContent)+(this.linkedTile.value+this.linkedTileForMerge.value);this.linkedTile.setValue(this.linkedTile.value+this.linkedTileForMerge.value),this.linkedTileForMerge.removeFromDOM(),this.unlinkTileForMerge(),e.textContent=n.toString(),"undefined"!=typeof Storage&&(localStorage.best_score_value?localStorage.best_score_value<n?(localStorage.best_score_value=n,this.recordElement.textContent=localStorage.best_score_value):this.recordElement.textContent=localStorage.best_score_value:(localStorage.best_score_value=n,this.recordElement.textContent=localStorage.best_score_value))}}class d{constructor(e){this.cells=[];for(let n=0;n<16;n++)this.cells.push(new c(e,n%4,Math.floor(n/4)));this.cellsGroupedByColumn=this.groupCellsByColumn(),this.cellsGroupedByReversedColumn=this.cellsGroupedByColumn.map((e=>[...e].reverse())),this.cellsGroupedByRow=this.groupCellsByRow(),this.cellsGroupedByReversedRow=this.cellsGroupedByRow.map((e=>[...e].reverse()))}getRandomEmptyCell(){const e=this.cells.filter((e=>e.isEmpty()));return e[Math.floor(Math.random()*e.length)]}groupCellsByColumn(){return this.cells.reduce(((e,n)=>(e[n.x]=e[n.x]||[],e[n.x][n.y]=n,e)),[])}groupCellsByRow(){return this.cells.reduce(((e,n)=>(e[n.y]=e[n.y]||[],e[n.y][n.x]=n,e)),[])}}class u{constructor(e){this.tileElement=document.createElement("div"),this.tileElement.classList.add("tile"),this.setValue(Math.random()>.5?2:4),e.append(this.tileElement)}setValue(e){this.value=e,this.tileElement.textContent=e;const n=100-9*Math.log2(e);this.tileElement.style.setProperty("--bg-lightness",`${n}%`),this.tileElement.style.setProperty("--text-lightness",(n<50?90:10)+"%")}setXY(e,n){this.x=e,this.y=n,this.tileElement.style.setProperty("--x",e),this.tileElement.style.setProperty("--y",n)}removeFromDOM(){this.tileElement.remove()}waitForTransitionEnd(){return new Promise((e=>{this.tileElement.addEventListener("transitionend",e,{once:!0})}))}waitForAnimationEnd(){return new Promise((e=>{this.tileElement.addEventListener("animationend",e,{once:!0})}))}}function m(){const e=document.getElementById("game-board"),n=new d(e);function t(){window.addEventListener("keydown",s,{once:!0}),window.addEventListener("touchstart",o,!1),window.addEventListener("touchmove",a,!1)}n.getRandomEmptyCell().linkTile(new u(e)),n.getRandomEmptyCell().linkTile(new u(e)),t();let r=null,i=null;function o(e){const n=function(e){return e.touches||e.originalEvent.touches}(e)[0];r=n.clientX,i=n.clientY}function a(e){if(!r||!i)return;const n=e.touches[0].clientX,o=e.touches[0].clientY,a=r-n,s=i-o;if(Math.abs(a)>Math.abs(s))if(a>0){if(!h())return void t();m()}else{if(!g())return void t();c()}else if(s>0){if(!v())return void t();A()}else{if(!C())return void t();l()}r=null,i=null}async function s(r){switch(r.key){case"ArrowUp":if(!C())return void t();await l();break;case"ArrowDown":if(!v())return void t();await A();break;case"ArrowLeft":if(!g())return void t();await c();break;case"ArrowRight":if(!h())return void t();await m();break;default:return void t()}const i=new u(e);if(n.getRandomEmptyCell().linkTile(i),!(C()||v()||g()||h()))return setTimeout((()=>document.getElementById("game-over").style.display="flex"),200),void await i.waitForAnimationEnd();t()}async function l(){await p(n.cellsGroupedByColumn)}async function A(){await p(n.cellsGroupedByReversedColumn)}async function c(){await p(n.cellsGroupedByRow)}async function m(){await p(n.cellsGroupedByReversedRow)}async function p(e){const t=[];e.forEach((e=>function(e,n){for(let t=1;t<e.length;t++){if(e[t].isEmpty())continue;const r=e[t];let i,o=t-1;for(;o>=0&&e[o].canAccept(r.linkedTile);)i=e[o],o--;i&&(n.push(r.linkedTile.waitForTransitionEnd()),i.isEmpty()?i.linkTile(r.linkedTile):i.linkTileForMerge(r.linkedTile),r.unlinkTile())}}(e,t))),await Promise.all(t),n.cells.forEach((e=>{e.hasTileForMerge()&&e.mergeTiles()}))}function C(){return f(n.cellsGroupedByColumn)}function v(){return f(n.cellsGroupedByReversedColumn)}function g(){return f(n.cellsGroupedByRow)}function h(){return f(n.cellsGroupedByReversedRow)}function f(e){return e.some((e=>function(e){return e.some(((n,t)=>0!==t&&(!n.isEmpty()&&e[t-1].canAccept(n.linkedTile))))}(e)))}}class p extends n{constructor(e){super(e)}render(){const e=this.createHeaderTitle(p.TextObject.MainTitle);return this.container.append(e),this.container}}p.TextObject={MainTitle:"Правила игры"};const C=p;class v extends n{constructor(e){super(e)}render(){const e=this.createHeaderTitle(v.TextObject.MainTitle);return this.container.append(e),this.container}}v.TextObject={MainTitle:"Таблица рекордов"};const g=v;class h{static renderNewPage(e){const n=document.querySelector(`#${h.defaultPageId}`);n&&n.remove();let t=null;if(t="main-page"===e?new i(e):"rules-page"===e?new C(e):"records-page"===e?new g(e):new A(e,404),t){const e=t.render();e.id=h.defaultPageId,h.container.append(e)}}enableRouteChange(){window.addEventListener("hashchange",(()=>{const e=window.location.hash.slice(1);h.renderNewPage(e),m()}))}constructor(){this.header=new s("div","header-container")}run(){h.container.append(this.header.render()),h.renderNewPage("main-page"),this.enableRouteChange(),m()}}h.container=document.body,h.defaultPageId="current-page";const f=h;var b=t(379),y=t.n(b),w=t(795),x=t.n(w),k=t(569),B=t.n(k),_=t(565),T=t.n(_),E=t(216),z=t.n(E),I=t(589),j=t.n(I),M=t(800),G={};G.styleTagTransform=j(),G.setAttributes=T(),G.insert=B().bind(null,"head"),G.domAPI=x(),G.insertStyleElement=z(),y()(M.Z,G),M.Z&&M.Z.locals&&M.Z.locals,(new f).run()})()})();
//# sourceMappingURL=main.5afe7df1beb5d181487a.js.map
