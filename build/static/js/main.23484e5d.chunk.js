(this["webpackJsonpvg-api-react-tailwind"]=this["webpackJsonpvg-api-react-tailwind"]||[]).push([[0],{13:function(e,t,c){},37:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(30),s=c.n(n),l=(c(37),c(13),c(2)),i=c.n(l),o=c(6),d=c(10),u=c(5),j=(c.p,c(31)),m=c.n(j).a.create({baseURL:"https://api.rawg.io/api/",timeout:1e4}),b="games",x=function(e){var t=new Date,c=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return c.length<2&&(c="0"+c),a.length<2&&(a="0"+a),[r,c,a].join("-")},h=function(){var e=new Date,t=""+(e.getMonth()+1),c=""+e.getDate(),a=e.getFullYear()+1;return t.length<2&&(t="0"+t),c.length<2&&(c="0"+c),[a,t,c].join("-")},p=function(){var e=new Date,t=""+(e.getMonth()+1),c=""+e.getDate(),a=e.getFullYear()-1;return t.length<2&&(t="0"+t),c.length<2&&(c="0"+c),[a,t,c].join("-")},f=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("".concat(b,"?key=").concat("497f361e3bdc4f069030a213e8371ee0","&platforms=18,1,7&dates=").concat(p(),",").concat(x(),"&page_size=12"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("".concat(b,"/").concat(t,"?key=").concat("497f361e3bdc4f069030a213e8371ee0"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("".concat(b,"/").concat(t,"/").concat("screenshots","?key=").concat("497f361e3bdc4f069030a213e8371ee0"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("".concat(b,"?key=").concat("497f361e3bdc4f069030a213e8371ee0","&dates=").concat(x(),",").concat(h(),"&ordering=-added&page_size=10"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("".concat(b,"?key=").concat("497f361e3bdc4f069030a213e8371ee0","&dates=").concat(p(),",").concat(x(),"&ordering=-rating&page_size=10"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("".concat(b,"?search=").concat(t,"&key=").concat("497f361e3bdc4f069030a213e8371ee0"));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),y=c(0);function k(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),s=Object(d.a)(n,2),l=s[0],j=s[1],m=Object(a.useState)(!1),b=Object(d.a)(m,2),x=b[0],h=b[1],p=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(l.split(" ").join("-"));case 2:t=e.sent,c=t.data,l&&(r(c.results),h(!0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("nav",{className:"container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-6",children:[Object(y.jsxs)("div",{className:"container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-6",children:[Object(y.jsx)(u.b,{to:"/",children:Object(y.jsxs)("h1",{className:"text-blue-500 uppercase tracking-wide font-semibold",children:[" ","Lara-R"," "]})}),Object(y.jsxs)("ul",{className:"flex ml-0 lg:ml-16 space-x-8 mt-6 lg:mt-0",children:[Object(y.jsx)("li",{children:Object(y.jsx)(u.b,{to:"/",className:"hover:text-gray-400",children:"Games"})}),Object(y.jsx)("li",{children:Object(y.jsx)(u.b,{to:"/",className:"hover:text-gray-400",children:"Reviews"})}),Object(y.jsx)("li",{children:Object(y.jsx)(u.b,{to:"/",className:"hover:text-gray-400",children:"Coming Soon"})})]})]}),Object(y.jsx)("div",{className:"flex items-center mt-6 lg:mt-0",children:Object(y.jsxs)("div",{className:"relative",children:[Object(y.jsx)("input",{type:"text",onChange:function(e){j(e.target.value),p()},onFocus:function(){return p()},onBlur:function(){return setTimeout((function(){return h(!1)}),400)},className:"bg-gray-800 text-sm rounded-full focus:outline-none focus:shadow-outline w-64 px-3 pl-8 py-1",placeholder:"Search..."}),x?Object(y.jsx)(z,{data:c,setsearch:h}):null,Object(y.jsx)("div",{className:"absolute top-0 flex items-center h-full ml-2 searchbtn",onClick:p,children:Object(y.jsx)("svg",{className:"fill-current text-gray-400 w-4",viewBox:"0 0 24 24",children:Object(y.jsx)("path",{className:" heroicon-ui",d:"M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"})})})]})})]})}function z(e){var t=e.data;e.setsearch;return Object(y.jsx)("ul",{className:"list-group",children:t&&t.map((function(e,t){return Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),children:Object(y.jsx)("li",{className:"list-group-item",children:e.name},t)})}))})}function M(){return Object(y.jsx)("div",{className:"border-b border-gray-800",children:Object(y.jsx)(k,{})})}c.p;function S(){var e,t=Object(a.useState)([]),c=Object(d.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)([]),l=Object(d.a)(s,2),j=l[0],m=l[1],b=Object(a.useState)([]),x=Object(d.a)(b,2),h=x[0],p=x[1];Object(a.useEffect)(Object(o.a)(i.a.mark((function e(){var t,c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return t=e.sent,e.next=5,O();case 5:return c=e.sent,a=c.data,m(a.results),e.next=10,N();case 10:r=e.sent,n(t.data),p(r.data.results);case 13:case"end":return e.stop()}}),e)}))),[]);var g=new Array;return g[0]="Jan",g[1]="Feb",g[2]="Mar",g[3]="Apr",g[4]="May",g[5]="Jun",g[6]="Jul",g[7]="Aug",g[8]="Sep",g[9]="Oct",g[10]="Nov",g[11]="Dec",Object(y.jsxs)("div",{className:"container mx-auto px-4",children:[Object(y.jsx)("h2",{className:"text-blue-500 uppercase tracking-wide font-semibold",children:"Most recent games"}),Object(y.jsx)("div",{className:"popular-games text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-12 border-b border-gray-800 pb-16",children:r&&(null===r||void 0===r||null===(e=r.results)||void 0===e?void 0:e.map((function(e){var t;return Object(y.jsx)("div",{className:"game mt-8",children:Object(y.jsxs)("div",{className:"relative inline-block card-size",children:[Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),children:Object(y.jsxs)("div",{className:"card-img",children:[Object(y.jsx)("img",{src:e.background_image,alt:e.name,className:"hover:opacity-75 transition ease-in-out duration-150 img-size"}),Object(y.jsx)("div",{className:"absolute percentage-box  w-16 h-16 bg-gray-800 rounded-full",children:Object(y.jsxs)("div",{className:"font-semibold text-xs flex justify-center items-center h-full",children:[e.metacritic,"%"]})})]})}),Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),className:"block text-base font-semibold leading-tight hover:text-gray-400 mt-9",children:null===e||void 0===e?void 0:e.name}),Object(y.jsx)("div",{className:"text-gray-400 mt-1",children:null===e||void 0===e||null===(t=e.platforms)||void 0===t?void 0:t.map((function(e,t,c){return c.length-1===t?Object(y.jsxs)("span",{children:[" ",e.platform.name]}):Object(y.jsxs)("span",{children:[" ",e.platform.name,","]})}))})]})})})))}),Object(y.jsxs)("div",{className:"flex flex-col lg:flex-row my-10",children:[Object(y.jsxs)("div",{className:"recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32",children:[Object(y.jsx)("h2",{className:"text-blue-500 uppercase tracking-wide font-semibold",children:"Popular Games"}),Object(y.jsxs)("div",{className:"recently-reviewed-container space-y-12 mt-8",children:[h&&h.map((function(e){var t;return Object(y.jsxs)("div",{className:"game bg-gray-800 rounded-lg shadow-md flex px-6 py-6",children:[Object(y.jsx)("div",{className:"",children:Object(y.jsxs)("div",{className:"relative flex-none",children:[Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),children:Object(y.jsx)("div",{className:"popular-card-img",children:Object(y.jsx)("img",{src:e.background_image,alt:e.name,className:"hover:opacity-75 transition ease-in-out duration-150",style:{height:"100%",width:"100%"}})})}),Object(y.jsx)("div",{className:"absolute -bottom-2 -right-5  w-16 h-16 bg-gray-800 rounded-full",children:Object(y.jsx)("div",{className:"font-semibold text-xs flex justify-center items-center h-full",children:e.metacritic?"".concat(e.metacritic,"%"):"N/A"})})]})}),Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),children:Object(y.jsxs)("div",{className:"ml-6 lg:ml-12",children:[Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),children:e.name}),Object(y.jsxs)("div",{className:"text-gray-400 mt-1",children:[" ",null===e||void 0===e||null===(t=e.platforms)||void 0===t?void 0:t.map((function(e,t,c){return c.length-1===t?Object(y.jsxs)("span",{children:[" ",e.platform.name]}):Object(y.jsxs)("span",{children:[" ",e.platform.name,","]})}))]}),Object(y.jsx)(A,{id:e.id})]})})]})}))," "]})]}),Object(y.jsxs)("div",{className:"most-anticipated lg:w-1/4 mt-12 lg:mt-0",children:[Object(y.jsx)("h2",{className:"text-blue-500 uppercase tracking-wide font-semibold",children:"Upcoming Games"}),Object(y.jsx)("div",{className:"most-anticipated-container space-y-10 mt-8",children:j.map((function(e){var t=new Date(null===e||void 0===e?void 0:e.released);return Object(y.jsxs)("div",{className:"game flex",children:[Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),children:Object(y.jsx)("div",{className:"upcoming-img-box",children:Object(y.jsx)("img",{src:e.background_image,alt:e.name,className:"hover:opacity-75 upcoming-img transition ease-in-out duration-150",style:{width:"100%",height:"100%"}})})}),Object(y.jsxs)("div",{className:"ml-4",children:[Object(y.jsx)(u.b,{to:"/singlegame/".concat(e.id),children:e.name}),Object(y.jsx)("div",{className:"text-gray-400 text-sm mt-1",children:"".concat(g[null===t||void 0===t?void 0:t.getMonth()]," ").concat(t.getDate()," ").concat(t.getFullYear()," ")})]})]})}))})]})]})]})}var A=function(e){var t=e.id,c=Object(a.useState)({}),r=Object(d.a)(c,2),n=r[0],s=r[1];function l(){return(l=Object(o.a)(i.a.mark((function e(){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:c=e.sent,a=c.data,s(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),Object(y.jsxs)("p",{className:"mt-6 text-gray-400 hidden lg:block",children:[null===n||void 0===n?void 0:n.description_raw," "]})};function _(){return Object(y.jsx)("div",{className:"border-t border-gray-800",children:Object(y.jsxs)("div",{className:"container flex flex-row justify-center items-center py-3",children:["Powered By -",Object(y.jsx)("a",{target:"_blank",href:"https://rawg.io/",rel:"noreferrer",children:"RAWG API-"})]})})}c.p;var B=c(3);function D(e){var t,c=Object(B.f)().id,r=Object(a.useState)([]),n=Object(d.a)(r,2),s=n[0],l=n[1],u=Object(a.useState)([]),j=Object(d.a)(u,2),m=j[0],b=j[1],x=Object(a.useCallback)(Object(o.a)(i.a.mark((function e(){var t,a,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(c);case 2:return a=e.sent,r=a.data,l(r),e.next=7,v(c);case 7:n=e.sent,b(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.results);case 9:case"end":return e.stop()}}),e)}))),[s,m]);return Object(a.useEffect)((function(){x()}),[]),Object(y.jsxs)("div",{className:"container mx-auto px-4",children:[Object(y.jsxs)("div",{className:"game-details border-b border-gray-800 pb-12 flex flex-col lg:flex-row",children:[Object(y.jsx)("div",{className:"flex-none",children:Object(y.jsx)("img",{src:s&&s.background_image,alt:s&&s.name,className:"game-img"})}),Object(y.jsxs)("div",{className:"lg:ml-12 xl:mr-64",children:[Object(y.jsx)("h2",{className:"font-semibold text-4xl leading-tight mt-1",children:s&&(null===s||void 0===s?void 0:s.name)}),Object(y.jsx)("div",{className:"text-gray-400",children:null===s||void 0===s||null===(t=s.platforms)||void 0===t?void 0:t.map((function(e,t,c){return c.length-1===t?Object(y.jsxs)("span",{children:[" ",e.platform.name]}):Object(y.jsxs)("span",{children:[" ",e.platform.name,","]})}))}),Object(y.jsxs)("div",{className:"flex flex-wrap items-center mt-8",children:[Object(y.jsxs)("div",{className:"flex items-center ml-1 mr-3",children:[Object(y.jsx)("div",{className:"w-16 h-16 bg-gray-800 rounded-full",children:Object(y.jsx)("div",{className:"font-semibold text-xs flex justify-center items-center h-full",children:s.metacritic?"".concat(s.metacritic," %"):"N/A"})}),Object(y.jsxs)("div",{className:"ml-4 text-xs",children:["Users ",Object(y.jsx)("br",{})," Score"]})]}),Object(y.jsxs)("div",{className:"flex items-center space-x-4 mt-4 sm:mt-0 sm:ml-12",children:[Object(y.jsx)("div",{className:"w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center",children:Object(y.jsx)("a",{href:"/",className:"hover:text-gray-400",children:Object(y.jsx)("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 16 17",fill:"none",children:Object(y.jsx)("path",{d:"M8 .266C3.582.266 0 3.952 0 8.5s3.582 8.234 8 8.234 8-3.686 8-8.234S12.418.266 8 .266zm2.655 11.873l-.365.375a.8.8 0 00-.2.355c-.048.188-.087.378-.153.56l-.561 1.556c-.444.1-.903.156-1.376.156v-.91c.055-.418-.246-1.203-.73-1.701-.194-.2-.302-.47-.302-.752v-1.062c0-.387-.203-.742-.531-.93a52.733 52.733 0 00-1.575-.866 4.648 4.648 0 01-1.02-.722l-.027-.024a3.781 3.781 0 01-.582-.689c-.303-.457-.796-1.209-1.116-1.698a6.581 6.581 0 013.33-3.383l.774.399c.343.177.747-.08.747-.475v-.375c.257-.043.52-.07.787-.08l.912.939a.542.542 0 010 .751l-.15.156-.334.343c-.101.104-.101.272 0 .376l.15.155c.102.104.102.272 0 .376l-.257.265a.255.255 0 01-.183.078h-.29a.254.254 0 00-.18.076l-.32.32a.269.269 0 00-.05.31l.502 1.035c.086.176-.039.384-.23.384h-.182a.253.253 0 01-.17-.065l-.299-.268a.51.51 0 00-.501-.102l-1.006.345a.386.386 0 00-.19.144.405.405 0 00.14.587l.357.184c.304.156.639.238.978.238.34 0 .729.906 1.032 1.062h2.153c.274 0 .537.112.73.311l.442.455c.184.19.288.447.288.716a1.584 1.584 0 01-.442 1.095zm2.797-3.033a.775.775 0 01-.457-.331l-.58-.896a.812.812 0 010-.883l.632-.976a.78.78 0 01.298-.27l.419-.216c.436.894.688 1.9.688 2.966 0 .288-.024.57-.06.848l-.94-.242z"})})})}),Object(y.jsx)("div",{className:"w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center",children:Object(y.jsx)("a",{href:"/",className:"hover:text-gray-400",children:Object(y.jsxs)("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 16 18",fill:"none",children:[Object(y.jsx)("g",{"clip-path":"url(#clip0)",children:Object(y.jsx)("path",{d:"M8.004 4.957c-2.272 0-4.104 1.804-4.104 4.04 0 2.235 1.832 4.039 4.104 4.039 2.271 0 4.103-1.804 4.103-4.04 0-2.235-1.832-4.039-4.103-4.039zm0 6.666c-1.468 0-2.668-1.178-2.668-2.627 0-1.448 1.196-2.626 2.668-2.626 1.471 0 2.667 1.178 2.667 2.626 0 1.449-1.2 2.627-2.667 2.627zm5.228-6.831a.948.948 0 01-.957.942.948.948 0 01-.957-.942.95.95 0 01.957-.942.95.95 0 01.957.942zm2.718.956c-.06-1.262-.354-2.38-1.293-3.301-.936-.921-2.071-1.21-3.353-1.273C9.982 1.1 6.02 1.1 4.7 1.174c-1.279.06-2.414.348-3.354 1.27-.939.92-1.228 2.038-1.292 3.3-.075 1.301-.075 5.2 0 6.5.06 1.263.353 2.381 1.292 3.302.94.921 2.072 1.21 3.354 1.273 1.321.074 5.282.074 6.604 0 1.282-.06 2.417-.348 3.353-1.273.936-.921 1.229-2.039 1.293-3.301.075-1.3.075-5.196 0-6.497zm-1.707 7.893a2.68 2.68 0 01-1.522 1.497c-1.053.412-3.553.317-4.717.317-1.165 0-3.668.091-4.718-.317a2.68 2.68 0 01-1.522-1.497c-.418-1.037-.321-3.498-.321-4.645 0-1.146-.093-3.61.321-4.644a2.68 2.68 0 011.522-1.497c1.053-.412 3.553-.317 4.718-.317 1.164 0 3.667-.091 4.717.317.7.274 1.24.805 1.522 1.497.418 1.037.321 3.498.321 4.644 0 1.147.097 3.611-.321 4.645z"})}),Object(y.jsx)("defs",{children:Object(y.jsx)("clipPath",{id:"clip0",children:Object(y.jsx)("path",{fill:"#fff",d:"M0 0h16v18H0z"})})})]})})}),Object(y.jsx)("div",{className:"w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center",children:Object(y.jsx)("a",{href:"/",className:"hover:text-gray-400",children:Object(y.jsx)("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 18 18",fill:"none",children:Object(y.jsx)("path",{d:"M6.382 15h-.06a8.152 8.152 0 01-3.487-.818 1.035 1.035 0 01-.585-1.08 1.057 1.057 0 01.87-.885 4.972 4.972 0 001.905-.667 7.117 7.117 0 01-2.633-6.803 1.058 1.058 0 01.75-.862 1.012 1.012 0 011.073.308 5.317 5.317 0 003.66 2.062A3.375 3.375 0 018.932 3.93a3.352 3.352 0 014.778.142.525.525 0 00.585.075 1.043 1.043 0 011.455 1.2 4.993 4.993 0 01-.96 1.95A8.093 8.093 0 016.382 15zm0-1.5h.06a6.592 6.592 0 006.818-6.442.99.99 0 01.277-.638c.183-.232.34-.483.465-.75a1.92 1.92 0 01-1.432-.638 1.836 1.836 0 00-1.32-.532 1.875 1.875 0 00-1.343.518 1.897 1.897 0 00-.54 1.814l.195.856-.877.06a6.225 6.225 0 01-4.905-1.8 5.34 5.34 0 002.797 4.845l.713.405-.473.675a4.216 4.216 0 01-2.01 1.44 6.25 6.25 0 001.568.187h.007z"})})})}),Object(y.jsx)("div",{className:"w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center",children:Object(y.jsx)("a",{href:"/",className:"hover:text-gray-400",children:Object(y.jsx)("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 14 16",fill:"none",children:Object(y.jsx)("path",{d:"M14 2.5v11a1.5 1.5 0 01-1.5 1.5H9.834V9.463h1.894L12 7.35H9.834V6c0-.612.17-1.028 1.047-1.028H12V3.084A15.044 15.044 0 0010.369 3C8.756 3 7.65 3.984 7.65 5.794v1.56h-1.9v2.112h1.903V15H1.5A1.5 1.5 0 010 13.5v-11A1.5 1.5 0 011.5 1h11A1.5 1.5 0 0114 2.5z"})})})})]})]}),Object(y.jsx)("p",{className:"mt-12",children:s&&s.description_raw}),Object(y.jsx)("div",{className:"mt-12",children:Object(y.jsxs)("button",{className:"flex bg-blue-500 text-white font-semibold px-4 py-4 hover:bg-blue-600 rounded transition ease-in-out duration-150",children:[Object(y.jsxs)("svg",{className:"w-6 fill-current",viewBox:"0 0 24 24",children:[Object(y.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(y.jsx)("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]}),Object(y.jsx)("span",{className:"ml-2",children:"Play Trailer"})]})})]})]}),Object(y.jsxs)("div",{className:"images-container border-b border-gray-800 pb-12 mt-8",children:[Object(y.jsxs)("h2",{className:"text-blue-500 uppercase tracking-wide font-semibold",children:[" ","Screenshots"," "]}),Object(y.jsx)("div",{className:"grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8",children:m&&m.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)("a",{href:"/",children:Object(y.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:"screenshot",className:"hover:opacity-75 transition ease-in-out duration-150"})})})}))})]})," "]})}var C=function(){return Object(y.jsx)(u.a,{children:Object(y.jsxs)("div",{className:"App bg-gray-900 text-white",children:[Object(y.jsx)(M,{children:Object(y.jsx)(k,{})}),Object(y.jsx)(B.c,{children:Object(y.jsxs)(u.b,{children:[Object(y.jsx)(B.a,{exact:!0,path:"/",component:S}),Object(y.jsx)(B.a,{path:"/singlegame/:id",component:D})]})}),Object(y.jsx)(_,{})]})})};s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(C,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.23484e5d.chunk.js.map