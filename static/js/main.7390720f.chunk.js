(this.webpackJsonptestform=this.webpackJsonptestform||[]).push([[0],{107:function(e,t,r){},108:function(e,t,r){},161:function(e,t,r){},168:function(e,t,r){"use strict";r.r(t);var c=r(1),o=r.n(c),s=r(95),i=r.n(s),a=(r(107),r(108),r(37)),l=r(96),n=r.n(l),u=r(17),d=r(2),b=[{id:5,product:"5 products",price:80,priceForEach:16,discount:36,isSelect:!0},{id:4,product:"4 products",price:72,priceForEach:18,discount:28,isSelect:!1},{id:3,product:"3 products",price:60,priceForEach:20,discount:20,isSelect:!1},{id:2,product:"2 products",price:44,priceForEach:22,discount:12,isSelect:!1},{id:1,product:"1 product",price:24.99,isSelect:!1}],p=[{id:1,name:"Product 1",isToDelete:!1}],m=r(57),j=r.n(m),g=r(14),h=r(102),x=(r(160),r(161),r(3)),S=r.n(x),f=r(0),O=function(e){var t=e.styles;return Object(f.jsxs)("div",{className:t.blockMargins,children:[Object(f.jsx)("h2",{className:S()(t.title,t.infoTitleMargin),children:"Info"}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:S()(t.subtitle,t.infoSubtitleMargin),children:"Enter your email address"}),Object(f.jsx)("input",{className:t.input,placeholder:"team@checkforpatent.com",type:"email"})]})]})},C=r(98),y=r.n(C),k=function(e){var t=e.onDeleteProd,r=e.prodictId;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{type:"button",className:y.a.button,onClick:function(){return t(r)}})})},B=function(e){var t=e.styles,r=e.product,c=e.onDeleteProd;return Object(f.jsxs)("div",{className:t.blockMargins,children:[Object(f.jsxs)("div",{className:S()(t.titleWrapper,t.productTitleMargin),children:[Object(f.jsx)("h2",{className:t.title,children:r.name}),r.isToDelete?Object(f.jsx)(k,{prodictId:r.id,onDeleteProd:c}):""]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:S()(t.subtitle,t.productSubtitleMargin),children:"Enter main keyword for the product"}),Object(f.jsx)("input",{className:t.input,placeholder:"for example, sylicon wine cup",type:"text"})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{className:S()(t.subtitle,t.productSubtitleMargin),children:"Enter link to the similar product as a reference"}),Object(f.jsx)("input",{className:t.input,placeholder:"https://...",type:"text"})]})]})},P=function(e){var t=e.styles,r=e.products,c=e.onDeleteProd;return Object(f.jsx)("div",{className:S()(t.blockMargins),children:r.map((function(e){return Object(f.jsx)(B,{styles:t,product:e,onDeleteProd:c},e.id)}))})},N=r(99),E=r.n(N),F=["onAddMoreProd"],Q=function(e){var t=e.onAddMoreProd,r=Object(g.a)(e,F);return Object(f.jsxs)("div",{className:S()(r.styles.addMoreProducts,r.styles.blockMarginsSmall),children:[Object(f.jsx)("button",{type:"button",onClick:function(){return t()},className:S()(E.a.button,r.styles.addProductButtonMargin),children:"Add more products"}),Object(f.jsx)("p",{className:r.styles.subtitle,children:"We offer discount up to 36% for multiple checks"})]})},v=r(16),A=r(28),w=r.n(A),I=r.p+"static/media/loader.8f843768.svg",G=["value","isDisable","onButtonClick"],M=function(e){var t,r=e.value,o=e.isDisable,s=e.onButtonClick,i=Object(g.a)(e,G),a=Object(c.useState)(!1),l=Object(u.a)(a,2),n=l[0],d=l[1];return Object(f.jsx)("div",{className:i.blockStyle,children:Object(f.jsx)("button",{disabled:o,className:S()(w.a.button,(t={},Object(v.a)(t,w.a.bgColorSuccess,!o),Object(v.a)(t,w.a.bgColorFail,"fail"===i.bgColor),Object(v.a)(t,w.a.disabled,o),t)),type:"button",onClick:function(){d({isLoading:!0}),s()},children:n?Object(f.jsx)("img",{className:w.a.loader,src:I,alt:""}):r})})},U=r(38),_=r.n(U),D=r.p+"static/media/lock.a609c157.svg",K=function(){return Object(f.jsxs)("div",{className:_.a.wrapper,children:[Object(f.jsx)("img",{src:D,alt:"",className:_.a.imgLabel}),Object(f.jsx)("span",{className:_.a.textField,children:"Secure payment with Stripe"})]})},L=["styles","products","price","onAddMoreProd","onDeleteProd","onSubmitAndPay"],q=function(e){var t=e.styles,r=e.products,c=e.price,o=e.onAddMoreProd,s=e.onDeleteProd,i=e.onSubmitAndPay,a=Object(g.a)(e,L);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h.a,{style:{maxHeight:"25vw"},autoHide:!1,forceVisible:!1,scrollbarMaxSize:"13",classNames:{scrollbar:"simplebar-scrollbar",track:"simplebar-track"},children:Object(f.jsxs)("div",{className:t.productList,children:[Object(f.jsx)(O,{styles:t}),Object(f.jsx)(P,{styles:t,products:r,onDeleteProd:s}),a.productCount<5?Object(f.jsx)(Q,{styles:t,onAddMoreProd:o}):""]})}),Object(f.jsx)(M,{blockStyle:t.blockMarginsVerySmall,value:0===c?"Add more products, please":"Submit and Pay ".concat(c," USD"),isDisable:!(c<0)&&!c,onButtonClick:i}),Object(f.jsx)(K,{})]})},W=r(61),J=r.n(W),H=r(39),X=r.n(H),V=function(e){var t=e.title,r=e.subtitle;return Object(f.jsxs)("div",{className:X.a.blockMargins,children:[Object(f.jsx)("h2",{className:X.a.title,children:t}),Object(f.jsx)("p",{className:X.a.subtitle,children:r})]})},T=r(100),Y=r(62),R=r.n(Y),z=r.p+"static/media/radio.2848fbf7.svg",Z=r.p+"static/media/radioWithDot.cfee21c3.svg",$=["id","product","price","priceForEach","discount","isSelect","onSelect"],ee=function(e){var t=e.id,r=e.product,c=e.price,o=e.priceForEach,s=e.discount,i=e.isSelect,a=e.onSelect,l=Object(g.a)(e,$);return Object(f.jsx)("li",{className:l.styles.listItem,onChange:function(){return a(t)},children:Object(f.jsxs)("label",{className:S()(l.styles.column,Object(v.a)({},l.styles.selectedColumn,i)),children:[Object(f.jsxs)("span",{className:l.styles.radioBox,children:[Object(f.jsx)("img",{className:l.styles.radioImg,src:i?Z:z,alt:""}),Object(f.jsx)("input",{className:l.styles.radio,name:"selectProduct",type:"radio",value:"5"})]}),Object(f.jsxs)("div",{className:l.styles.description,children:[Object(f.jsxs)("p",{className:S()(l.styles.title,Object(v.a)({},l.styles.onlyTitle,!s)),children:[r," for ",c," usd ",o?"/ ".concat(o,"$ for each"):""]}),s?Object(f.jsxs)("p",{className:S()(l.styles.subtitle,Object(v.a)({},l.styles.choicedSubtitle,i)),children:["You safe $",s,"% on each patent check"]}):""]})]})})},te=["produstsList","setProdustsList"],re=function(e){var t=e.produstsList,r=e.setProdustsList,c=Object(g.a)(e,te),o=function(e){var c=t.map((function(t){var r=Object(T.a)({},t);return t.id===e?r.isSelect=!0:r.isSelect=!1,r}));r(c)};return Object(f.jsx)("ul",{className:S()(R.a.list,c.blockStyle),children:t.map((function(e){return Object(f.jsx)(ee,{styles:R.a,id:e.id,product:e.product,price:e.price,priceForEach:e.priceForEach,discount:e.discount,isSelect:e.isSelect,onSelect:o},e.id)}))})},ce=function(e){var t=e.produstsList,r=e.setProdustsList,c=e.onSubmitMoreProd;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(V,{title:"Adding more products",subtitle:"The more items you check, the better the price."}),Object(f.jsx)(re,{produstsList:t,setProdustsList:r,blockStyle:J.a.blockMarginsNormal}),Object(f.jsx)(M,{blockStyle:J.a.blockMarginsLarge,value:"Continue",bgColor:"success",onButtonClick:c})]})},oe=r(32),se=r.n(oe),ie=[{title:"Your payment failed",subtitle:"Sorry, but we\u2019ve having trouble processing your payment.\n      You have been not charged for this transaction.",buttonValue:"Try to pay again",buttonBgColor:"fail"},{title:"Successfull payment",subtitle:"Your request has been accepted and will be processed within\n      24 working hours.\n      We will send you a payment details and all information to your email.",buttonValue:"Back"}],ae=r.p+"static/media/creditCardFail.93abe08b.png",le=function(e){var t=e.status,r=Object(c.useState)(ie),o=Object(u.a)(r,1)[0],s=Object(d.f)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:se.a.headerWrapper,children:Object(f.jsx)(V,{title:o[Number(t)].title,subtitle:o[Number(t)].subtitle})}),Object(f.jsx)("div",{className:se.a.imgWrapper,children:Object(f.jsx)("img",{className:se.a.img,src:t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAACWCAYAAADXE53IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABfSSURBVHgB7Z0JkFxHecf//Y6ZvXel1UqyJRvZyBfYlgIG28QGAeYMtiliRDgDAQpCUcS4UuUAFWwIhJADQapcTgVDDAQX4ZIwp4u4LBxsC2wHOca3jHVfK61Wuzu7O/uOTn/vzfFmdnZ3dnek0cz8f6rRvnn3e9P976/7+7obIIQQQgghhBBCCCGEEEIIqSUKhLQgfX0b+rqcrvUaar2l8DzA6stv01rvCqxwu6XDnfsGf7YdLQZFgbQUq5e9aQOUuglarTepv2+u/U0G2RlCbQ287GcODv9iJ1oAigJpCUQMlLL+QwNrsECMVXF7K4gDRYE0NVE1we3ebJL6hvJt7ZcvQ/qFS5B+QW/03T2jA96ecQQjU5h4YBDZx0bg781MP6nCzXsP3/kZNCkUBdK0rBp443oLzuakdWD1uFjygbXo+8A50fJciDiMfG8XRr67q3SD0lvGpkbfNzy8dRhNBkWBNCUiCEo79yTbDUQMlt7wgqrEoBxv7zgOvP8BYz0UNcCIzfaMN/LKZhMGG4Q0GSv7Xr/GttwH8oIg1YLTv3Y5et99NlR6YUneNkISHQ+xHo5E68zyypSdumxk/OlvoImgKJCmQgTBdVNiIayU7yIIq777ctN2MKejoSraLx+IBGJ866HcGrWmu/O8vtHxp+5Ck0BRIE1Fb/cFm/KNinlBcM/oRC1pe1F/ucVwWU/HOb8yFsNONAEWCGkSVg28eb2Cem/++8DN62ouCHmkbaJn4/MK38XdiSaBokCaBgW9Kb8sGbbzdafjRCKik2+0FA/HqoGr34smgKJAmgJpSzBZc0P++9KPX4ATjQhCn/Fo5DHViD9HE0BRIE2BY6euzy+LlVCraoO4Ive+9d7oE45407YvKYl3UBuiMOoGh6JAmgOFV+QXe976PNQKiU2QACb5HP/uzmnbRRCSbQvSwQoNDkWBNDxr+t7cZ0QhyoySScVtWAsGb/6/kmClrhnaKDoS11PW9HDqRoOiQBoe3/ELpXP6hb2oBUe/9ASGb3um8H3g5otnrJKkEjEQSmMdGhyKAml4tFJr8svVtCWMm6rA2F37Z9yeMduGvvR44Xv/DRdEfSVmwl3dUbyXRfTCPFWgKJCGx9bF/g1OIoNWYtJUB/aZRkNpKzj08YembZeGxYOJ9eLWlJiEuXBWF8VIemaigaEokJZCJzwI0vsxKQyRp+G6opdBIiJXbroE82UJltamDlMnHJAZMQ1YazxXSqHA1FmD7a6Xarpuss2Ar0KdX67kNkwijZBSHZA2A0GEQVhhMr9YD/nxE/Ih0tX2qAxHpgrLzw3/cBcaGIpCBeJRetS1PsLr477l8r8D3w1BTm1kkJS5yFcHksIwsW2w5NjTbru86lgHEaKEGDV8wUFRKGPVsquvh1KbNEgjIvEE1VAuDElBEE/DfHpVTibcltC64Qd6pSgkWLX8mg8bl1Ihft74nGGtcqBW2rGxkFSKTlUcosZYjk7GRnZwEpr9TuvDoQDI6qjEFmGoJlahXBiEuTwNlRj9XqK2oPQjaHAoCjlW9clIPbhVlpXJ7PaFadh/bUqL/uraYkUvUugGqQ/+V0cQ/ChuDxivUhSEpDBIZGI1noZyxu8/UvyisQUNDodjy3HGwDXPmIwd9W5xXt8J+0Mmg7t8PY1C+OgUvE8cjZalcfCsbW9Y0LBr80XGbjx0Q+zBMOln577BO89Cg0OXJKTa8KZ1eUGwVjqw30dBaDSsi1JQ5iNIFeJYIhrxRJKsehhZaIoRnikKkOqCU3BG21e0xe0FpOFw3lGsvg3ftsM0HmZwIhFByLswxUoIbHsrmgCKghCEZ0R/pe3wZW0gjUm5tbBv471zxi0sFGm3SIZCi5Vw8OCWnWgCKAoJxNug+uk+aGTc6/ugOuNkLW7GmcZBWAzSc1ICnfLIzFH7Bn98O5oEikI5DFBoaNQKG87Hi1HGkoFFGGpVlZDOUkmhiasNqqlmi6IokKbDuqwN9gd7Ct9FGKQqMW2Wp3kgIiDjK+w3FkKpIFivbJZqQx7ayoaejvM2mPaEDVJ9sK/tBDrY0NjoWOebtgVTjdD/m42+S0aWUl6GZbd6XaTWVhdTIscN3fI0Dn7kNyXRks0qCAKDl0jT4hiBt43VIPEL+nAQrcsPrSYdniTASbpGSzxDckyE7OPHo+pG5q4DkZVR3iahEX4j4znXDw9uacoOchSFFkVLx8IW6N8lbQypry+Hf8cYgjtGC+ulEdLbs2teVQqxDpQO37fvyE+2oomhKLQiRgyCzRmEd55YP369US9Owf3YkmjZeUcX7Fe3I7h7AuF/jxcsh6rQemtg6a8cOPyThg9hrgaKQgsiVkJ4/yT00eY2FdRE2XfxTBhxgPnoP3hRaLR8dCaMO1RldLyMqP/LL0Ot78h49pbh4easJswERaEFUY5pUH1bF4Jf5LsLJ/2wue6gskp6hmlduqn0TKXH5hdVfn3ir5wnubuqcD2UXbNSe+9MxxeuUbyWOm/mvg/qbBe2fK4tjpkQPDgJ/zPHomXbtn++58Dm29GCUBRaFPulbdGHVEa3cGdBxikQUgHVwmFsFAVCKkBLgRAClWx31eEkWhSKAiF5/OKi66gRtCgUBULysDNcBL0PtcC4uK2nfPi7jM87O/+UpVLmh1iTRvB8GyrNfhd1g68+gqKwSPSvswi+M4Zg5xQWg0TXW6c7cN/WDWxIG58hU2hdCVTL2g0UhcWw3YO/aRhhtjaRgeF+H9lNx5AKl0C9hjEEJx1WHyIoCgtET4QIbx8pCMKF57u46so2pBJBdMr809OiBfNLxS2+aeC676EsHvzdFKSfUvDNEbhXpqHbaC2Qkw9FYYGoHQH8HXGVYf3FLr5/60q4PZdCtT8fStnmzfbL+G7Qx38FjP1WXFzIi4JGUR60Fa/46Lu7cNNXRvGt75uqyLEAziPm3JemQU4eOstpAQWKwgIJ9hX72L/96k6klm+E6r0S5a1VKr0amDpgPnuRl4PkHioX568cjWtfkzKikNtwYB69+EhN8Eazxd/G1gxeIvNkolgtaG+zoDrOQ8Xma3EtpE9HscKqyz5FOtsSPwfrtycV39ThvKwPQlGoGTqcmGmLKYLmnvRU6+mHkZOHbdtId7FxV6Ao1ARTF/WPVd4UjJuqwz7MRVypYMNivVBKwelNtBK3sEuSolAr/BnG4ZC2hDCb+5LM9BXSnKZ5cKoQsE2BLJpwrPL6bHIMwMruyYrfaTTUlVYe5pyiUCO0N1R5w8SzqPIMKFECGg31hdUHsmj8SqJg3IrZnRXW6wp/aSnUneQ7Z/WBLA4N5R00f8pdWjJQoI3pIlCp6qDjoQ1J/UjaBi0cJkJRqAWmUNHeKDD5TNkG83o7LgIKnoVCHCOmWQfGWg2TEzGw+lBXghZuVKAo1ACd/3/47lw4c2JLcLxkryJq2jrduhbrKYfdwpYCw5wXiNVd1NNndwUmQ8ucAY9BHbwFuneDebMDQOZR83mkLO+XWwiIXJHaUth9sJgSdY9is0I9aWFLgaJQTpU50To3BZW2ok4037kzg1dc1olLLjaZefxxU414MteW4EeZXSVrDVH/yEIrQmH9g49m8bkvHy/exlkuSB3heAqkQJVJQa+y4byuA96dYzg8GGLjhw5goN+scyxYqrS3XXlFQSXmLRHCUGP/YY0gZyg469LAGk4IftIpKRBaty5HUVgoJs+qd3XBfmoKgXxChYODIgaL637rrk3B+lAPR16qByUFAi0FsgBUh4Lz6aWwfjkO/9cTsKX7Q5SUyqZSK8nfqtJKhKIDL07DemsX0EVBIPWDorBYehWs6zqRuq4Ti4GVBXKqQJckIZVgRCMhhMRQFAjJk7QN2CGKEFICqw+kABv+W5eSDlG0FEieeSYFlTEHPDwFHCoLln9kCvr3pbNGqcEQ+t5J4FgxlkH75vgHssDTHuDPcfHhEOF95vjjpcfr+7LxtZLH7/WB/5mMp57KM2H23ToJ/WwVA5QOBwjlXveVPddTXnyvSY6a5zLPqyZL7996wlxnqLq4Db3L7LvNPMdU8Rxazne/WXeg9H7V7gBqT+l9KfNu8JB5B1PsSbZY6JJcJOG/j2Dq7nE4Z6Rg39IfyawyGWfyU0ej7W2f7Yd+USpa9m4aQrDbg/2yNjifXBKtUz+ZQPa241BtCu4/LoM6e+afJNh0HP7Dk3Be1g77k33xSiMoU188Zi6kkPqHfqi1LpTkjU8MIZT5I67tgv3B7vhevz0Gb8sYVL8N98vmWktmLhOCfx2B/1tzrT9Kw/67pfG9Pmae68YjMp0F0l9fCb0sNqvCzx6D9+wUUm/vgnpnfC3rpxOYuHUY9lIbzjeXYza0EVTvY0egA430e3qAjbF7N/jn4wi2TcBZ7sD++kC0ztkdYvxjg5BZc9r+ZTnCc2Jnrm+e19/nwb2uG9Z7urAgaCVG0FJYJOFwXGL5e01O9HL9JY8USzF/T6JUPRqvD/cWSz6dWyelopXFrOjBeN9ASs58iZg7HuZ4nR92Xv6O5+aTGEmU1MPxssqaa/mz54DgUO4eEyV9sD9eJx1B9WDxufLP4w8WnzvM7RsMzd3dUGfCSBCi4xLvLhyMzyHilsd7biq2jsLcO8/fm7wTsy7Ytbg5PQlFYfGUj58izGgxV5oXQk071ZzXmmvdTNfU8zmuwqWChGmfHPohrKHJXkmrEgPa6sSyqjQqzWJuhTWPCIrCYplHQqo4stIJNln1YlP6TIfPdd8n6rmSEeQc/fqEQFFYLKd4PXTGURmqve+FPt+Jyq/JoShUjQe6ZZtCBEWhltTjbZ5qmTbPybAUav0QydMxToEsmGTSCWffXNHcLe3Dj5oxWw+rCoNHz0iyZHaKX0pKaStethKpSeW7fldzHbvy9crPHy0mu5Qn8q3K77OY0W9pKURQFBaJ/fIOWF02UlcbN1g6l6rOc2GvcKKPZdyHeazL22C1W3CuKK5TF7nR8c75aWDV7B5i6/J0dLxrXJpI5a61zqzrtGCfZq51Rny8Nh496+I0lKy/IjE/4rp4tCj7wjR096yXgiPPJRPnXpIuPqs5zl7hwjnTuD3PKt6r82rjIu22YV3RUTzBpWk4Sx2krpq796hl3JbuBeZ+e8w5riy+G9ec1+qwYL068Q7Nc7nmPlLnpiN3aeEe/qQj2td+VQcWDEdzjqA2GlYvu+Zm8yZuktIt9TXjU182P62UACYt6TZRokWBPOK660i8YuNKU+Px+Ivlxwu6c46fw7T+qwnE10qUmBWP9xP7Jkv4kdy9unP/9NG+HWXHT+Weq630eMs8V1iWHy1PQTtSoM9tAUnQkuVNfwdqVEciV/JuxUIQt2RyxDrjAVEZc3z3wpO0BIZ5X4jnBG1z7HftOLD522hBGLxUAypl5vJME2Eyl+6p7viKGCHQXVUeL9eqYA2UC9JsVNpXpyofH1YooEO3+uqQMufVqQr3UCGTRyJTPoSlpea0fkh1sPpQDm2n1oUezgiKQjkNnjAk2k/t8IFDZa2eEs341Az9K3aa/e+eKPbJkOrQg1nosbJ9JXJxZxX9JhoVFggRrD40Gz/IYPJbo1Cm8S516wBgqhbSF8K7/iiCIz7ct3TB+ouina2GwrifxGgQNS7aN/TA/9QQgh1TsE2jn3Njro/FYx6yNx6JMk7bpgHotU2YdGgpRNBSaDL0kbi010MBrKFcKs+ECHM9K4M9pSV9+MNMJAiCdMqSXpVhrt+DlbA2VN5CkEmvDjaptUBLIYKi0GTMWNhV6ibwUBbeTzPRsiXuwHd2VhU20RJ5h8FLpFmYMSWXZXDpKRn+1xh0rmen/RbjPui3y2atQX2R9pGszOg9u10v28UFrPxF2v8cZCWCbQqtQHLC6xzh/Vn4T8TdjO0zXVhvWtwQ9bXE+r0H/94JhM94UXtIaFyV9ioHSubFuDQdxX4o6bm9fQrBtkmEf5gy4qEQpE2ClvEkXtsBdc4CknbyHbWwpUBRaDZm6l6ti18ko/k/Ho++ScCW+5c9leMqEuHHqiS8GCeGAwHCr40iu21i2qbwGXPTW8fhrjXC8PZO+KZB1X98+gAUnux3Vwbuy9uh3t8NtWQeM2qwoTGC1YdyGrx8UM+Pdd5Z7iLsix9GSlb7zHi9/aK2qA+GcuIcIKHX+qJi1JAEEDlr4/BhdWaxzAjPtqE6LCgJ5T7zBJQlxmXq/e1ReAlBsM31nFWpKFw6/7t4O7LIfm6oKAhmvd1l9ltt9hMBkP1M+6i3dQL+F4bNeReY01l9IAUaPCmoN3Sg/cVtCHtVsS+G+Wv//RI4Ega8PC4H7E8vgbUnmG5mOwrWTb1oO2qsh/6EQp7rIn2LcXG2S1RljZXTtAn4XxxGeDD2gjimquB8pM+IlVsotpwdPoI7xuD9dqLwG9lnu0iZ/cLzc89gDnef8ZG9zZzrSQ/h41Pw/mkI7uf7q7sPFpERfA3lNEFNMpSMny57kE6rIAgRpnRVF7gl/RoKSIj0CmvaNj1g1V4QhK2TCB6NS37nLBf2F/qh17klqVPiIuy/6YP7xmI8tXVJuigIgjEU5Hvq88uQemnciSqUAXR/k63uPlh9iKAolMOEcXKRsRZ/mWvfMFaI88mlwNLKyVKqNtbGLtir444P0WjTk9N/MG1qP9aHe2D1xefxfzA2pweDFKEokLoirsQwF1DlGO+CPm2OJLnMhn1Vzgo47EMdrNzHWawie33cNqJ3eNCjVYgCdSOCokDqiozUrMfiyEnr/HRVx6jzY0shGjz20CwDH1yYE4Up07B6pLr5JwoweImQ+qAlT+dLaLfKgxJjQYSzBSwlNEaz+lA1FAVSV2wJRErHyTDf52Iu9OGidWAtmdmBVphFSk6/pIqkzglmIygKpL5In4sVcYBR+EAWaqKKUZq2xrEMVpvxkpw9Q3CS0YPg1/F+UQDTQBVJnQO3RlAUSF2JPAoviceRlFmegs1jsx+wJQP/4djFaK9vi6bLq0RozhPk5qB0ru2savi5pKXQwkM0UhRI/bFf2w7VnXMffi8D/Z2xqCPUNO6ZwNQ3RuNJeQ3KWBjl+ymjA3pzBsG3xqKSX6wE66p2zJd5BEc3HYxoJHVHr7Lh/FUfvM8NRQ2CU/85CufnE7Bf1Y5wqYKVMSX3w5OFDlx5pn40Bud3psrxxybTrzBtE4c0gvsn4O+K57mU8SFSH+41VZQqy74SfWGYc2ujdBtH2Kgv1mVpuDf0Ifi3EYTjIfyjvrEaRqfvaH4m11Qb/EezkcXg7zYCsNubvp/M4n3jEuAl1bk58+fOk2pLj6JFoSgIWk1GCULraMQitYy1qnpgGcvAOtf4JbeYasI949DZxMhPbRZss82WoeTWukjvDKJRo7z7Jor7mZ9N9dqwZR6KPzXtCN3z/B3Hi9ebmPR60KJQFCCzC2FEJm+Kplj/vQd1brUOc1JzVpsk+dFupN/bBewP4nkfZO6Mfgt6mSrM/6DXmPaEG3ri/QbNj5cJoihGaUOoesj8MsJE9cSb9NaiRaEoQFzS/rOWjl9F8NMMrNe1RwOekvoRdbw615kz8lhLP4mlshQ3DS60IUAiK8Nthe7Y+8a8kS+jRaGdbNh/6Gc/MknwD7IsATThN0cZAddKyNB0pi1Dj+TCrYHbhoe3DqNFaWXPSwm97efshlJ/JsvRMGC7g7h+20XdbGbCvT6CrxxHUOxePZay7HcfyzyZQYvC6kMOO3C2+ircbkzH9fLdf2ACwUOm/XGlE02oWrCp8gaEqvC9GuNipv3y62c7b/m2hVDN+SrdAxL3p2c4H+ZYX/6MmOH6yf1n255ExpyVUGY9x/Gyi/yWUzqa2wJP+9CBzu9/1Fb2xmcPbT6MFoYV5wQrV755jR2E95iXsgaktVBqyHLsa3bv/+F9aHFYfUgwNvbkcFfvOV+1AvWE+XoESjrdyqTvSiwqeVcU0SbA/Kbj5jcdQTyC4w6lsKmtx9v43K4fPwfCRD4ba9e+IT0y4va52jpNhTrtBOrQjDtL+P4kSAPg276nlKWN29GbSiE7NPTzERBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIY3I/wMZ1How/bjqEgAAAABJRU5ErkJggg==":ae,alt:""})}),Object(f.jsx)("div",{className:se.a.buttonWrapper,children:Object(f.jsx)(M,{value:o[Number(t)].buttonValue,onButtonClick:function(){return s.push("/")},bgColor:o[Number(t)].buttonBgColor})})]})},ne=function(){var e=Object(c.useState)(p),t=Object(u.a)(e,2),r=t[0],o=t[1],s=Object(c.useState)(24.99),i=Object(u.a)(s,2),a=i[0],l=i[1],n=Object(c.useState)(!1),m=Object(u.a)(n,2),g=m[0],h=m[1],x=Object(c.useState)(!0),S=Object(u.a)(x,2),O=S[0],C=S[1],y=Object(c.useState)(b),k=Object(u.a)(y,2),B=k[0],P=k[1],N=Object(d.f)();return Object(f.jsx)("form",{className:j.a.form,children:Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/",children:g?Object(f.jsx)(ce,{produstsList:B,setProdustsList:P,onSubmitMoreProd:function(){var e=B.filter((function(e){return!!e.isSelect}));l(e[0].price),function(e){for(var t=[],r=1;r<=e;r++)t.push({id:r,name:"Product ".concat(r),isToDelete:!0});1===t.length&&(t[0].isToDelete=!1),o(t)}(e[0].id),h(!1)}}):Object(f.jsx)(q,{styles:j.a,products:r,price:a,onAddMoreProd:function(){return h(!g)},onDeleteProd:function(e){var t=r.filter((function(t){return t.id!==e}));o(t),t.length>1?l((22-2*(t.length-2))*t.length):t.length<1?l(0):l(24.99)},onSubmitAndPay:function(){setTimeout((function(){return C(!O),O?N.push("/paymentsuccess"):N.push("/paymenterror")}),2e3)},productCount:r.length})}),Object(f.jsx)(d.a,{path:"/paymentsuccess",children:Object(f.jsx)(le,{status:!0})}),Object(f.jsx)(d.a,{path:"/paymenterror",children:Object(f.jsx)(le,{status:!1})})]})})},ue=function(){return Object(f.jsx)(a.a,{basename:"/",children:Object(f.jsx)("div",{className:n.a.wrapper,children:Object(f.jsx)(ne,{})})})};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(ue,{})}),document.getElementById("root"))},28:function(e,t,r){e.exports={button:"SubmitButton_button__16St1",disabled:"SubmitButton_disabled__3f3ez",bgColorSuccess:"SubmitButton_bgColorSuccess__3X5Qn",bgColorFail:"SubmitButton_bgColorFail__2_rGf",loader:"SubmitButton_loader__1zgIl"}},32:function(e,t,r){e.exports={imgWrapper:"StatusPay_imgWrapper__xKrwi",img:"StatusPay_img__iT4xI",buttonWrapper:"StatusPay_buttonWrapper__1N3gJ"}},38:function(e,t,r){e.exports={wrapper:"SecurePayment_wrapper__2nhy2",imgLabel:"SecurePayment_imgLabel__2vVuD",textField:"SecurePayment_textField__2ojYX"}},39:function(e,t,r){e.exports={title:"Header_title__3SH2Q",subtitle:"Header_subtitle__VxvKU"}},57:function(e,t,r){e.exports={form:"Form_form__2TM1N",titleWrapper:"Form_titleWrapper__Z9fi5",title:"Form_title__lNS_Y",subtitle:"Form_subtitle__37mW6",productListWrapper:"Form_productListWrapper__1Oz52",productList:"Form_productList__2FfFv",scrollWrapper:"Form_scrollWrapper__1OL1u",addMoreProducts:"Form_addMoreProducts__2o9LX",input:"Form_input__2ESfd",blockMargins:"Form_blockMargins__3KFZ-",blockMarginsSmall:"Form_blockMarginsSmall__28dmp",blockMarginsVerySmall:"Form_blockMarginsVerySmall__3qCwr",infoTitleMargin:"Form_infoTitleMargin__2sM-y",infoSubtitleMargin:"Form_infoSubtitleMargin__1uIgl",productTitleMargin:"Form_productTitleMargin__2juwa",productSubtitleMargin:"Form_productSubtitleMargin__3hcL8",addProductButtonMargin:"Form_addProductButtonMargin__3Yarh"}},61:function(e,t,r){e.exports={blockMarginsNormal:"AddProductForm_blockMarginsNormal__z2f2A",blockMarginsLarge:"AddProductForm_blockMarginsLarge__1VZo9"}},62:function(e,t,r){e.exports={list:"ProductSelectionBlock_list__3pjwZ",listItem:"ProductSelectionBlock_listItem__2EKaz",column:"ProductSelectionBlock_column__1hriK",selectedColumn:"ProductSelectionBlock_selectedColumn__1ayMU",radioBox:"ProductSelectionBlock_radioBox__2wq5A",radioImg:"ProductSelectionBlock_radioImg__28zYx",radio:"ProductSelectionBlock_radio__3S5xH",description:"ProductSelectionBlock_description__3PGxS",title:"ProductSelectionBlock_title__131Iy",onlyTitle:"ProductSelectionBlock_onlyTitle__1mc8N",subtitle:"ProductSelectionBlock_subtitle__CB2sr",choicedSubtitle:"ProductSelectionBlock_choicedSubtitle__3RUkF",label:"ProductSelectionBlock_label__31AMP"}},96:function(e,t,r){e.exports={wrapper:"FormWrapper_wrapper__2eXYk"}},98:function(e,t,r){e.exports={button:"DeleteButton_button__1XqAA"}},99:function(e,t,r){e.exports={button:"AddProducts_button__1qmyU"}}},[[168,1,2]]]);
//# sourceMappingURL=main.7390720f.chunk.js.map