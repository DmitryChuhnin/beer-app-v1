(function(){"use strict";var e={3544:function(e,t,n){var r=n(9242),a=n(3396);const o={class:"main"},i={class:"card"};function s(e,t,n,r,s,c){const u=(0,a.up)("Profile"),l=(0,a.up)("BeerRecomendation");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,[(0,a.Wm)(u),(0,a.Wm)(l)])])}var c=n(7139);const u={class:"profile"},l=(0,a._)("h1",null,"Beer App",-1),p={class:"person"},f=["src"],d={class:"person-name"},h={class:"age"},m={class:"post"};function b(e,t,n,r,o,i){return(0,a.wg)(),(0,a.iD)("div",u,[l,(0,a._)("div",p,[(0,a._)("img",{src:o.picture},null,8,f),(0,a._)("h2",d,(0,c.zw)(o.firstName),1),(0,a._)("p",h,(0,c.zw)(o.age),1),(0,a._)("p",m,(0,c.zw)(o.post),1),(0,a._)("button",{onClick:t[0]||(t[0]=e=>i.getUser()),id:"user-button"},"Get Random User")])])}var v={name:"Profile",components:{},data(){return{firstName:"John",picture:"https://randomuser.me/api/portraits/men/0.jpg",age:"20",post:"name"}},methods:{getDate(e){let t,n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),a=e.replace(/[^0-9,.]/g,", "),o=new Date(a),i=new Date(n.getFullYear(),o.getMonth(),o.getDate());return t=r.getFullYear()-o.getFullYear(),r<i?t-1:t},async getUser(){const e=await fetch("https://random-data-api.com/api/users/random_user"),t=await e.json();this.firstName=t.first_name,this.age=this.getDate(t.date_of_birth),this.picture=t.avatar,this.post=t.employment.title}},beforeMount(){this.getUser()}},g=n(89);const w=(0,g.Z)(v,[["render",b]]);var _=w;const y={class:"beer-recomendation"},D={class:"beer"},O={class:"beer-name"},j={class:"beer-characters"},z={class:"buttons"};function k(e,t,n,r,o,i){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",D,[(0,a._)("p",O,(0,c.zw)(o.beerName),1),(0,a._)("div",j,[(0,a._)("p",null,(0,c.zw)(o.brand),1),(0,a._)("p",null,(0,c.zw)(o.style),1),(0,a._)("p",null,(0,c.zw)(o.ibu),1),(0,a._)("p",null,(0,c.zw)(o.alcohol),1)])]),(0,a._)("div",z,[(0,a._)("button",{id:"next",onClick:t[0]||(t[0]=e=>i.getBeer())}," Next ")])])}var N={name:"BeerRecomendation",components:{},data(){return{beerName:"John",style:"Test",brand:"beer",ibu:"20",alcohol:"name"}},methods:{async getBeer(){const e=await fetch("https://random-data-api.com/api/beer/random_beer"),t=await e.json();this.beerName=t.name,this.style=t.style,this.brand=t.brand,this.ibu=t.ibu,this.alcohol=t.alcohol}}};const x=(0,g.Z)(N,[["render",k]]);var B=x,F={name:"App",components:{Profile:_,BeerRecomendation:B}};const P=(0,g.Z)(F,[["render",s]]);var C=P;(0,r.ri)(C).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkbeer_app"]=self["webpackChunkbeer_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3544)}));r=n.O(r)})();
//# sourceMappingURL=app.646e7403.js.map