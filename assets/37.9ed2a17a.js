webpackJsonp([37],{100:function(e,t,i){var a,n;i(103),i(104),a=i(93);var l=i(101);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-214e9252",e.exports=a},101:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tocas section header",class:e.size},["large"==e.size?i("h2",{staticClass:"ts dividing header"},[i("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?i("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),"normal"==e.size?i("h3",{staticClass:"ts dividing header"},[i("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?i("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),"small"==e.size?i("h4",{staticClass:"ts header"},[i("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?i("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),"tiny"==e.size?i("h5",{staticClass:"ts header"},[i("span",{domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.wip?i("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")]):e._e()]):e._e(),e._v(" "),e.description?i("p",{staticClass:"description",domProps:{innerHTML:e._s(e.description)}}):e._e(),e._v(" "),e.expandableExample&&"large"!=e.size&&"normal"!=e.size?i("button",{staticClass:"ts expand tiny labeled icon button",on:{click:e.expand}},[i("i",{staticClass:"code icon"}),e._v(" "),i("span",[e._v("原始碼")])]):e._e()])},staticRenderFns:[]}},102:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("doc-nav"),e._v(" "),i("doc-jumbotron",{attrs:{title:e.items.header.title,subTitle:e.items.header.subTitle}}),e._v(" "),i("div",{staticClass:"ts narrow container"},[i("div",{staticClass:"ts relaxed stackable grid"},[e.sidebar?i("div",{staticClass:"four wide column"},[i("div",{staticClass:"ts flatted borderless secondary relaxed vertical menu"},[e._l(e.items.html,function(t){return[t.link===!1?i("span",{staticClass:"item",domProps:{textContent:e._s(t.title)}}):e._e(),e._v(" "),t.link?i("a",{staticClass:"item",attrs:{href:"#"+t.link}},[t.wip?i("span",[e._v(e._s(t.title)+" "),i("span",{staticClass:"ts warning horizontal label"},[e._v("未完成")])]):e._e(),e._v(" "),t.wip?e._e():i("span",[e._v(e._s(t.title))])]):e._e()]})],2)]):e._e(),e._v(" "),i("div",{class:{"twelve wide column":e.sidebar,"sixteen wide column":!e.sidebar}},[e._l(e.items.html,function(t){return[t.link?i("a",{staticClass:"anchor",attrs:{name:t.link}}):e._e(),e._v(" "),"large"==t.type?i("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"large"}}):e._e(),e._v(" "),"normal"==t.type?i("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"normal"}}):e._e(),e._v(" "),"tiny"==t.type?i("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"tiny"}}):e._e(),e._v(" "),"small"==t.type?i("doc-header",{attrs:{title:t.title,description:t.description,expandableExample:t.expandableExample,wip:t.wip,size:"small"}}):e._e(),e._v(" "),"example"==t.type?i("doc-example",{style:t.style,attrs:{executable:t.executable,inverted:t.inverted,code:t.code,mark:t.mark,tagMark:t.tagMark,remove:t.remove}}):e._e(),e._v(" "),"source"==t.type?i("doc-example",{style:t.style,attrs:{executable:t.executable,inverted:t.inverted,code:t.code,mark:t.mark,tagMark:t.tagMark,hasExample:!1}}):e._e()]})],2)]),e._v(" "),e._m(0),e._v(" "),i("div",{attrs:{id:"disqus_thread"}})]),e._v(" "),i("doc-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h2",{staticClass:"ts massive disqus header"},[e._v("\n            本頁留言\n            "),i("div",{staticClass:"sub header"},[e._v("你現在可以在這裡留言啦！如果有功能建議或是發現錯誤，可以"),i("a",{attrs:{href:"https://github.com/TeaMeow/TocasUI"}},[e._v("這裡提出 Issue")]),e._v("。")])])}]}},103:function(e,t,i){var a=i(94);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},104:function(e,t,i){var a=i(95);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},105:function(e,t,i){var a=i(97);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},125:function(e,t,i){"use strict";var a="normal",n="large",l="small";t.a={header:{title:"表單",subTitle:"\n            以最有條理的方式送出資料。\n        "},html:[{type:n,title:"說明",description:"\n                <p>表單也具有網格系統，對於這部分並不熟悉的使用者還請參閱網格系統的教學。</p>\n                <p>這個元件的設計很自由化，因此使用方式可能對初心者來說過度複雜，可以參考實際範例中的註冊頁面。</p>\n            "},{type:a,title:"種類",description:"表單有不同的種類。",link:!1},{type:l,title:"基本",description:"最基本的表單。",link:"form"},{type:"example",code:'<form class="ts form">\n    <div class="field">\n        <label>姓氏</label>\n        <input type="text">\n    </div>\n    <div class="field">\n        <label>名字</label>\n        <input type="text">\n    </div>\n    <div class="field">\n        <div class="ts checkbox">\n            <input id="agree" type="checkbox">\n            <label for="agree">我同意伊繁星最高協議。</label>\n        </div>\n    </div>\n    <button class="ts button">送出</button>\n</form>\n<br><br>\n<form class="ts form">\n    <h4 class="ts dividing header">結帳資訊</h4>\n    <div class="field">\n        <label>真實姓名</label>\n        <div class="two fields">\n            <div class="field">\n                <input type="text" placeholder="姓氏">\n            </div>\n            <div class="field">\n                <input type="text" placeholder="名字">\n            </div>\n        </div>\n    </div>\n    <div class="field">\n        <label>帳單地址</label>\n        <div class="fields">\n            <div class="twelve wide field">\n                <input type="text" placeholder="道路地址">\n            </div>\n            <div class="four wide field">\n                <input type="text" placeholder="縣市名稱">\n            </div>\n        </div>\n    </div>\n    <button class="ts button">送出</button>\n</form>',mark:"form",remove:"<br><br>"},{type:a,title:"內容",description:"表單內可以有許多不同種類的內容、欄位。",link:!1},{type:l,title:"欄位",description:"欄位是組成表單的最基本元素，而其中可以帶有標籤用以命名該欄位。",link:"field"},{type:"example",code:'<div class="ts form">\n    <div class="field">\n        <label>使用者輸入欄位</label>\n        <input type="text">\n    </div>\n</div>',mark:"field"},{type:l,title:"靜態文字",description:"你可以在欄位中擺放靜態文字，用作不可改變的欄位。",link:"static"},{type:"example",code:'<div class="ts form">\n    <div class="field">\n        <label>使用者名稱</label>\n        <span class="text">YamiOdymel</span>\n    </div>\n    <div class="field">\n        <label>密碼</label>\n        <input type="password">\n    </div>\n</div>',mark:"text"},{type:l,title:"提醒",description:'欄位中可以透過 <span class="ts horizontal label">small</span> 標籤來新增一個提醒。',link:"small"},{type:"example",code:'<div class="ts form">\n    <div class="field">\n        <label>帳號</label>\n        <input type="text">\n        <small>你未來將無法更改這項設定。</small>\n    </div>\n</div>',tagMark:"small"},{type:l,title:"欄位群組",description:"多個欄位可以被規劃成群組，並自動均分寬度，在行動裝置上將會縮成一行。",link:"fields"},{type:"example",code:'<div class="ts form">\n    <div class="fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>中間名</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>',mark:"fields"},{type:l,title:"文字區塊",description:'你可以在表單內放入文字區塊的欄位，搭配 HTML5 原生的 <span class="ts horizontal label">rows</span> 可以指定文字區塊的預設高度。',link:"textarea"},{type:"example",code:'<div class="ts form">\n    <div class="field">\n        <label>長篇文章</label>\n        <textarea></textarea>\n    </div>\n    <div class="field">\n        <label>指定五行高度</label>\n        <textarea rows="5"></textarea>\n    </div>\n    <div class="resizable field">\n        <label>自由伸縮</label>\n        <textarea></textarea>\n    </div>\n</div>',tagMark:"textarea",mark:"resizable"},{type:l,title:"核取方塊",description:'你也可以將核取方塊做成一個欄位來使用。如果你希望省去 <span class="ts horizontal label">[id=""]</span> 和 <span class="ts horizontal label">[for=""]</span> 的困擾，\n            那麼你可以參考<a href="/modules/checkbox">核取方塊章節</a>。',link:"checkbox"},{type:"example",code:'<div class="ts form">\n    <div class="field">\n        <div class="ts checkbox">\n            <input id="adult" type="checkbox">\n            <label for="adult">我已滿 18 歲。</label>\n        </div>\n    </div>\n    <div class="field">\n        <div class="ts checkbox">\n            <input id="thirty" type="checkbox">\n            <label for="thirty">我有 30 公分。</label>\n        </div>\n    </div>\n    <div class="field">\n        <div class="ts toggle checkbox">\n            <input id="fastCharging" type="checkbox">\n            <label for="fastCharging" >開啟快速充電。</label>\n        </div>\n    </div>\n</div>',mark:"checkbox, toggle"},{type:l,title:"單選核取方塊",description:"理所當然地，單選核取方塊也能夠是欄位。",link:"radio"},{type:"example",code:'<div class="ts form">\n    <div class="field">\n        <label>您最喜愛的食物？</label>\n        <div class="ts compact horizontal checkboxes">\n            <div class="ts radio checkbox">\n                <input id="mango" type="radio" name="fruits">\n                <label for="mango">芒果</label>\n            </div>\n            <div class="ts radio checkbox">\n                <input id="apple" type="radio" name="fruits">\n                <label for="apple">蘋果</label>\n            </div>\n            <div class="ts radio checkbox">\n                <input id="guava" type="radio" name="fruits">\n                <label for="guava">芭樂</label>\n            </div>\n        </div>\n    </div>\n    <div class="field">\n        <label>您最常搭乘的交通工具？</label>\n        <div class="ts checkboxes">\n            <div class="ts radio checkbox">\n                <input id="bus" type="radio" name="traffic">\n                <label for="bus">公車</label>\n            </div>\n            <div class="ts radio checkbox">\n                <input id="motor" type="radio" name="traffic">\n                <label for="motor">機車</label>\n            </div>\n            <div class="ts radio checkbox">\n                <input id="walk" type="radio" name="traffic">\n                <label for="walk">步行</label>\n            </div>\n        </div>\n    </div>\n</div>',mark:"radio, checkboxes"},{type:l,title:"下拉式選單",description:"你也能夠在欄位中放入下拉式選單。",link:"field"},{type:"example",code:'<div class="ts form">\n    <div class="field">\n        <label>您所使用的系統版本為何？</label>\n        <select>\n            <option>macOS</option>\n            <option>Windows</option>\n            <option>Linux</option>\n        </select>\n    </div>\n</div>',tagMark:"select"},{type:l,title:"訊息",description:"別忘記，你還可以在表單中帶入訊息元件。",link:"message"},{type:"example",code:'<div class="ts form">\n    <div class="ts message">\n        <div class="header">不好了！</div>\n        <ul class="list">\n            <li>請輸入您的姓氏。</li>\n            <li>請輸入您的名字。</li>\n        </ul>\n    </div>\n</div>',mark:"message"},{type:a,title:"狀態",description:"表單具有不同性質的狀態。",link:!1},{type:l,title:"讀取中",description:"表單可以出現一個讀取指示器告訴使用者正在進行讀取。",link:"loading"},{type:"example",code:'<div class="ts loading form">\n    <div class="field">\n        <label>電子郵件地址</label>\n        <input type="email">\n    </div>\n    <div class="ts submit button">送出</div>\n</div>',mark:"loading"},{type:l,title:"欄位錯誤",description:"表單中的欄位可以呈現為一個錯誤狀態。",link:"error"},{type:"example",code:'<div class="ts form">\n    <div class="two fields">\n        <div class="field error">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n    <div class="field error">\n      <label>性別</label>\n      <select>\n            <option>男性</option>\n            <option>女性</option>\n            <option>第三性</option>\n      </select>\n    </div>\n    <div class="inline field error">\n        <div class="ts checkbox">\n            <input id="agree2" type="checkbox">\n            <label for="agree2">我同意伊繁星最高協議。</label>\n        </div>\n    </div>\n</div>',mark:"loading"},{type:l,title:"欄位成功",description:"欄位也可以呈現為一個成功狀態。",link:"success"},{type:"example",code:'<div class="ts form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field success">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>',mark:"success"},{type:l,title:"欄位警告",description:"你也可以讓欄位呈現一個警告的狀態。",link:"warning"},{type:"example",code:'<div class="ts form">\n    <div class="two fields">\n        <div class="field warning">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>',mark:"warning"},{type:l,title:"基本欄位語意",description:"欄位的狀態表現方式可以更加的簡潔、基本化。",link:"basic-status"},{type:"example",code:'<div class="ts form">\n    <div class="field basic success">\n        <label>姓氏</label>\n        <input type="text">\n    </div>\n    <div class="field basic warning">\n        <label>名字</label>\n        <input type="text">\n    </div>\n    <div class="field basic error">\n        <label>電子郵件地址</label>\n        <input type="text">\n    </div>\n</div>',mark:"basic"},{type:l,title:"停用欄位",description:"欄位可以呈現一個已經被停用、不可用的狀態。",link:"disabled-field"},{type:"example",code:'<div class="ts form">\n    <div class="two fields">\n        <div class="disabled field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="disabled field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>',mark:"disabled"},{type:a,title:"表單外觀",description:"你可以點綴表單的外觀。",link:!1},{type:l,title:"尺寸",description:"表單可以有不同的尺寸。",link:"sizes"},{type:"example",code:'<div class="ts mini form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>\n<div class="ts tiny form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>\n<div class="ts small form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>\n<div class="ts medium form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>\n<div class="ts large form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>\n<div class="ts big form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>\n<div class="ts huge form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>\n<div class="ts massive form">\n    <div class="two fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n    </div>\n</div>',mark:"mini, tiny, small, medium, large, big, huge, massive"},{type:a,title:"欄位外觀",description:"欄位也具有不同的外觀。",link:!1},{type:l,title:"同行欄位",description:"欄位和標籤可以是同一行的。",link:"inline-field"},{type:"example",code:'<div class="ts form">\n    <div class="inline field">\n      <label>名字</label>\n      <input type="text" placeholder="全名">\n    </div>\n</div>',mark:"inline"},{type:l,title:"網格寬度",description:"欄位的寬度也可以用網格系統來劃分。",link:"grid-field"},{type:"example",code:'<div class="ts form">\n    <div class="fields">\n        <div class="seven wide field">\n            <label>電子信箱地址</label>\n            <input type="text">\n        </div>\n        <div class="four wide field">\n            <label>真實姓名</label>\n            <input type="text">\n        </div>\n        <div class="five wide field">\n            <label>暱稱</label>\n            <input type="text">\n        </div>\n    </div>\n</div>',mark:"seven wide, four wide, five wide"},{type:l,title:"必填",description:"欄位可以顯示一個必填的樣式。",link:"required"},{type:"example",code:'<div class="ts form">\n    <div class="required field">\n        <label>使用者輸入欄位</label>\n        <input type="text">\n    </div>\n    <div class="required field">\n        <div class="ts checkbox">\n            <input id="agree3" type="checkbox">\n            <label for="agree3">我同意伊繁星最高協議。</label>\n        </div>\n    </div>\n</div>',mark:"required"},{type:a,title:"群組外觀",description:"群組也具有不同的外觀。",link:!1},{type:l,title:"平均劃分",description:'群組中的欄位寬度可以被平均劃分，從 <span class="ts horizontal label">one</span> 至 <span class="ts horizontal label">ten</span>。',link:"evenly-divided"},{type:"example",code:'<div class="ts form">\n    <div class="four fields">\n        <div class="field">\n            <label>姓氏</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>中間名</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>名字</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>暱稱</label>\n            <input type="text">\n        </div>\n    </div>\n    <div class="three fields">\n        <div class="field">\n            <label>帳號</label>\n            <input type="text">\n        </div>\n        <div class="field">\n            <label>密碼</label>\n            <input type="password">\n        </div>\n        <div class="field">\n            <label>電子郵件地址</label>\n            <input type="text">\n        </div>\n    </div>\n</div>',mark:"four fields, three fields"},{type:l,title:"同行欄位",description:"群組中的欄位和標籤可以是同一行的。",link:"inline-group"},{type:"example",code:'<div class="ts form">\n    <div class="inline fields">\n        <div class="eight wide field">\n            <label>名字</label>\n            <input type="text" placeholder="姓氏">\n        </div>\n        <div class="three wide field">\n            <input type="text" placeholder="中間名">\n        </div>\n        <div class="five wide field">\n            <input type="text" placeholder="名字">\n        </div>\n    </div>\n</div>',mark:"inline"}]}},177:function(e,t,i){"use strict";var a=i(99),n=i.n(a),l=i(125);Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{DocBasic:n.a},data:function(){return{items:l.a}},beforeCreate:function(){document.title="表單 | Tocas UI"},mounted:function(){}}},265:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("doc-basic",{attrs:{items:e.items}})],1)},staticRenderFns:[]}},30:function(e,t,i){var a,n;a=i(177);var l=i(265);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,e.exports=a},72:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocFooter",methods:{toTop:function(){window.scrollTo(0,0)}}}},73:function(e,t,i){"use strict";var a=i(0),n=i.n(a);Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocNav",data:function(){return{language:"English"}},methods:{changeLang:function(){"English"===this.language?(this.language="正體中文",n.a.config.lang="en_US"):(this.language="English",n.a.config.lang="zh_TW")}}}},74:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,".segment[data-v-001c2e60]{margin-top:3em!important}ul.ts.list li[data-v-001c2e60]:before{display:none}.ts.link.list[data-v-001c2e60]{margin:0;list-style-type:none!important}.ts.link.list li[data-v-001c2e60]{display:inline-block}.ts.link.list li a[data-v-001c2e60]{color:#666;margin-right:1.5em}.ts.link.list li a[data-v-001c2e60]:hover{color:#333}.ts.link.list .to.top[data-v-001c2e60]{opacity:.7}p[data-v-001c2e60]{margin-top:1.5em;font-size:13px;color:#a0a0a0}p a[data-v-001c2e60]{color:#598ab9}p a[data-v-001c2e60]:hover{color:#3b5d7d}.render.time[data-v-001c2e60]{margin-top:3em;opacity:.6}",""])},75:function(e,t,i){var a,n;i(79),a=i(72);var l=i(77);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-001c2e60",e.exports=a},76:function(e,t,i){var a,n;a=i(73);var l=i(78);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,e.exports=a},77:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{staticClass:"ts very padded horizontally fitted fluid secondary segment"},[i("div",{staticClass:"ts narrow container"},[i("ul",{staticClass:"ts relaxed link list"},[i("li",[i("a",{staticClass:"to top",attrs:{href:"#!"},on:{click:function(t){e.toTop()}}},[i("i",{staticClass:"arrow up icon"}),e._v(" "+e._s(e.$t("footer.to_top"))+"\n                ")])]),e._v(" "),e._m(0),e._v(" "),i("li",[i("router-link",{attrs:{to:"/examples/"}},[e._v(e._s(e.$t("footer.examples")))])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/about/"}},[e._v(e._s(e.$t("footer.about")))])],1)]),e._v(" "),i("p",{domProps:{innerHTML:e._s(e.$t("footer.copyright"))}}),e._v(" "),i("p",{staticClass:"render time"},[e._v("\n            "+e._s(e.$t("footer.render"))+e._s(this.$store.state.renderTime)+" ms\n        ")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("a",{attrs:{href:"//github.com/TeaMeow/TocasUI/"}},[e._v("Github")])])}]}},78:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"ts horizontally scrollable large fluid borderless pure basic menu"},[i("div",{staticClass:"ts narrow container"},[i("router-link",{staticClass:"item",attrs:{to:"/"}},[e._v("Tocas UI")]),e._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/getting-started/"}},[e._v(e._s(e.$t("nav.getting_started")))]),e._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/elements/"}},[e._v(e._s(e.$t("nav.elements")))]),e._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/collections/"}},[e._v(e._s(e.$t("nav.collections")))]),e._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/modules/"}},[e._v(e._s(e.$t("nav.modules")))]),e._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/views/"}},[e._v(e._s(e.$t("nav.views")))]),e._v(" "),i("router-link",{staticClass:"item",attrs:{to:"/rwd/"}},[e._v(e._s(e.$t("nav.rwd")))]),e._v(" "),i("div",{staticClass:"right menu"},[i("a",{staticClass:"item",attrs:{href:"//patreon.com/yamiodymel"}},[e._v(e._s(e.$t("nav.donate")))]),e._v(" "),i("a",{staticClass:"item",attrs:{href:"//github.com/TeaMeow/TocasUI/"}},[e._v("Github")])])],1)])},staticRenderFns:[]}},79:function(e,t,i){var a=i(74);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},80:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocJumbotron",props:{title:{default:""},subTitle:{default:""}}}},81:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,"h1[data-v-08340912]{font-size:3em!important}h1 .sub.header[data-v-08340912]{margin-top:.8em;font-size:.45em!important}.jumbotron[data-v-08340912]{margin-bottom:2em!important}",""])},82:function(e,t,i){var a=i(81);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},83:function(e,t,i){var a,n;i(82),a=i(80);var l=i(84);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-08340912",e.exports=a},84:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"ts fluid horizontally fitted extra padded jumbotron"},[i("div",{staticClass:"ts narrow container"},[i("h1",{staticClass:"ts left aligned header"},[e._v("\n            "+e._s(e.title)+"\n            "),i("br"),e._v(" "),i("small",{staticClass:"sub header",domProps:{innerHTML:e._s(e.subTitle)}})])])])},staticRenderFns:[]}},85:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"ExampleSegments",methods:{ev:function ev(code){var prev=jA(this.$el).prev().prev();prev.hasClass("example")&&prev.removeClass("expanded"),eval(code)}},props:{style:{default:null},code:{default:""},mark:{default:null},tagMark:{default:null},inverted:{default:!1},remove:{default:null},hasExample:{default:!0},showingCode:{default:!1},executable:{default:!1}}}},86:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,".hljs{background:none!important;color:#8e8e8e!important;line-height:21px!important;font-size:14px;overflow-x:scroll;font-weight:400;font-family:Ubuntu Mono;word-spacing:2px;letter-spacing:.02em}.hljs .hljs-deletion,.hljs .hljs-name,.hljs .hljs-regexp,.hljs .hljs-selector-class,.hljs .hljs-selector-id,.hljs .hljs-tag,.hljs .hljs-template-variable,.hljs .hljs-variable{color:#8e8e8e}.hljs .hljs-addition,.hljs .hljs-bullet,.hljs .hljs-string,.hljs .hljs-symbol{color:#0683a3!important}.hljs .hljs-attribute{color:#b58e00!important;margin-right:.2em}.hljs .hljs-important-class{background-color:#52c6ca;padding:1px 3px;border-radius:4px;color:#fff!important}.hljs .hljs-important-class *{color:#fff!important}.hljs *{font-weight:400!important;font-family:Ubuntu Mono!important}code.hljs.javascript{color:#008076!important}code.hljs.javascript .hljs-string{margin:0 4px}.example.segments .preview.segment strong{opacity:.7}.ts.example.segments+.ts.example.segments{margin-top:50px}",""])},87:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,"pre[data-v-50c168f5]{overflow-x:auto;margin:0}.example.preview.inverted .real.example[data-v-50c168f5],.example.preview.inverted .ts.example.segments .preview.segment[data-v-50c168f5],.example.preview.inverted[data-v-50c168f5]{border-radius:4px;background-color:#34495e}.example.preview .real.example[data-v-50c168f5]{display:block}.example.preview.expanded .real.example[data-v-50c168f5],.example.preview .ts.example.segments[data-v-50c168f5]{display:none}.example.preview.expanded .ts.example.segments[data-v-50c168f5]{display:block}",""])},88:function(e,t,i){var a=i(86);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},89:function(e,t,i){var a,n;i(88),i(91),a=i(85);var l=i(90);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-50c168f5",e.exports=a},90:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"example preview",class:{inverted:e.inverted}},[e.hasExample?i("div",{staticClass:"real example",style:e.style,domProps:{innerHTML:e._s(e.code)}}):e._e(),e._v(" "),!e.hasExample&&e.executable?i("button",{staticClass:"ts small secondary labeled icon button",on:{click:function(t){e.ev(e.code)}}},[i("i",{staticClass:"bug icon"}),e._v("\n        執行程式碼\n    ")]):e._e(),e._v(" "),e.hasExample?e._e():i("div",{staticClass:"ts padded secondary segment"},[i("pre",{staticClass:"code"},[i("code",{staticClass:"hljs",attrs:{"data-utaha-hightlight":e.mark,"data-utaha-tag-hightlight":e.tagMark,"data-utaha-remove":e.remove}},[e._v(e._s(e.code))])])]),e._v(" "),e.hasExample?i("div",{staticClass:"ts example segments"},[i("div",{staticClass:"ts clearing preview segment",style:e.style,domProps:{innerHTML:e._s(e.code)}}),e._v(" "),i("div",{staticClass:"ts padded secondary segment"},[i("pre",{staticClass:"code"},[i("code",{staticClass:"hljs",attrs:{"data-utaha-hightlight":e.mark,"data-utaha-tag-hightlight":e.tagMark,"data-utaha-remove":e.remove}},[e._v(e._s(e.code))])])])]):e._e()])},staticRenderFns:[]}},91:function(e,t,i){var a=i(87);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},92:function(e,t,i){"use strict";var a=i(100),n=i.n(a),l=i(83),s=i.n(l),d=i(76),o=i.n(d),r=i(89),c=i.n(r),p=i(75),v=i.n(p);Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocBasic",components:{DocHeader:n.a,DocJumbotron:s.a,DocNav:o.a,DocExample:c.a,DocFooter:v.a},props:{items:{default:null},sidebar:{default:!0}},beforeCreate:function(){window.RENDER_STARTED_TIME=(new Date).getTime()},mounted:function(){window.scrollTo(0,0),function(){var e=document,t=e.createElement("script");t.src="//tocas-ui.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}();var e=document.querySelectorAll(".hljs");for(var t in e){var t=e[t];if("number"!=typeof t&&"function"!=typeof t){var i=t.getAttribute("data-utaha-remove");if(null!==i){var i=i.split(", ");for(var a in i){var n=i[a],l=new RegExp(n,"g");t.innerText.indexOf(n)!=-1&&(t.innerText=t.innerText.replace(l,""))}}}}hljs.initHighlighting.called=!1,hljs.initHighlighting();for(var t in e){var t=e[t];if("number"!=typeof t&&"function"!=typeof t){var s=t.getAttribute("data-utaha-hightlight");if(null!==s){var s=s.split(", ");for(var d in s)for(var n=s[d],o=t.querySelectorAll(".hljs-string"),r='<span class="hljs-important-class">'+n+"</span>",c=0;c<o.length;c++)o[c].innerHTML.indexOf(n)!=-1&&(o[c].innerHTML=o[c].innerHTML.replace(n,r))}}}for(var t in e){var t=e[t];if("number"!=typeof t&&"function"!=typeof t){var s=t.getAttribute("data-utaha-tag-hightlight");if(null!==s){var s=s.split(", ");for(var d in s)for(var n=s[d],o=t.querySelectorAll(".hljs-name"),r='<span class="hljs-important-class">'+n+"</span>",c=0;c<o.length;c++)o[c].innerHTML.indexOf(n)!=-1&&(o[c].innerHTML=o[c].innerHTML.replace(n,r))}}}this.$store.dispatch("CALCULATE_RENDER_TIME",{time:(new Date).getTime(),startedTime:window.RENDER_STARTED_TIME})}}},93:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DocHeader",props:{title:{},size:{default:!1},description:{default:!1},expandableExample:{default:!0},wip:{default:!1}},methods:{expand:function(){var e=jA(this.$el).next();e.toggleClass("expanded")}}}},94:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,".tocas.section.header,.tocas.section.header p{clear:both;position:relative;font-size:16px;line-height:28px;letter-spacing:.08px;color:#6f6e6e}.tocas.section.header.small,.tocas.section.header.tiny,.tocas.section.header p.small,.tocas.section.header p.tiny{margin-bottom:1.5em}.tocas.section.header.tiny .tiny.button,.tocas.section.header p.tiny .tiny.button{top:-.5em!important}.tocas.section.header .description,.tocas.section.header p .description{margin-top:0!important}.tocas.section.header .description .ts.label,.tocas.section.header p .description .ts.label{color:#676767!important}.tocas.section.header.normal:first-child{font-size:28px;margin-top:-4em}",""]);
},95:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,"h2[data-v-214e9252]{font-size:32px!important;line-height:1.8em!important;border-bottom:2px solid #d9d9d9!important;color:#636262!important}h3[data-v-214e9252]{font-size:28px!important;line-height:1.5em!important;border-bottom:2px solid #d9d9d9!important}h3[data-v-214e9252],h4[data-v-214e9252]{color:#606060!important;margin-top:4em!important}h4[data-v-214e9252]{font-size:24px!important;display:inline-block}h4+.description[data-v-214e9252],h4+.description p[data-v-214e9252]{font-size:15px!important}h5[data-v-214e9252]{margin-top:3em!important}h5+.description[data-v-214e9252],h5+.description p[data-v-214e9252]{font-size:15px!important}.button[data-v-214e9252]{position:absolute!important;right:-6px;top:6.7em;transform:scale(.9)}",""])},96:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,"p>.ts.label{color:#333!important}",""])},97:function(e,t,i){t=e.exports=i(18)(),t.push([e.i,'.ts.disqus.header[data-v-bf9feb0e]{margin-top:3em;margin-bottom:.5em}.ts.narrow.container[data-v-bf9feb0e]{overflow-x:hidden;overflow-y:hidden}.ts.warning.horizontal.label[data-v-bf9feb0e]{margin-left:8px!important}.four.column[data-v-bf9feb0e]{padding-right:4rem!important}.four.column[data-v-bf9feb0e]:after{content:"";position:absolute;top:1em;right:2em;bottom:0;left:0;border-right:2px solid rgba(0,0,0,.1);pointer-events:none}.vertical.menu .item[data-v-bf9feb0e]{padding:1.2em}.vertical.menu span.item[data-v-bf9feb0e]{padding-left:0;display:block;margin:0 0 15px 6px!important;font-size:18px;font-weight:500;color:#005f5f;border-bottom:1px dashed #b3ffff;padding-bottom:.8em}@media (max-width:767px){.ts.disqus.header[data-v-bf9feb0e]{border-top:2px solid rgba(0,0,0,.1);padding-top:1em}.four.column[data-v-bf9feb0e]{margin-top:-1em;margin-bottom:2em;padding-right:1.2rem!important;padding-left:1.2rem!important}.four.column[data-v-bf9feb0e]:after{display:none!important}.four.column .vertical.menu span.item[data-v-bf9feb0e]{margin-right:0}.twelve.column[data-v-bf9feb0e]{padding-right:1.2rem!important;padding-left:1.2rem!important}}',""])},98:function(e,t,i){var a=i(96);"string"==typeof a&&(a=[[e.i,a,""]]);i(19)(a,{});a.locals&&(e.exports=a.locals)},99:function(e,t,i){var a,n;i(105),i(98),a=i(92);var l=i(102);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-bf9feb0e",e.exports=a}});