(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{100:function(e,t,a){e.exports=a(165)},165:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),i=(a(53),a(105),a(97)),o=a(25),s=a(9),m=a(36),u=a(24);function d(){var e=Object(n.useContext)(f),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useContext)(w),i=r.handleOnChange,o=r.search;return c.a.createElement(n.Fragment,null,a&&c.a.createElement("input",{type:"text",placeholder:"Search...",className:"search",defaultValue:o,onChange:function(e){return i(e)}}),c.a.createElement("i",{className:"fas fa-search",onClick:l}))}function p(){var e=Object(n.useContext)(w).totalItem;return c.a.createElement("div",null,c.a.createElement(m.b,{to:"/cart"},c.a.createElement("i",{className:"fas fa-shopping-cart"})),e>0&&c.a.createElement("div",{className:"cartLabel"},e))}function E(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"logo"},c.a.createElement(m.b,{to:"/"},c.a.createElement("i",{className:"fas fa-star"}))),c.a.createElement("div",{className:"search-cart"},c.a.createElement(d,null),c.a.createElement(p,null)))}var f=Object(n.createContext)();function h(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return c.a.createElement(f.Provider,{value:[a,function(){return l(!a)}]},c.a.createElement(E,null))}var g=function(e){return c.a.createElement("div",{className:"container-fluid mainContainer"},c.a.createElement(h,null),e.body,c.a.createElement("div",{className:"footer"},"Copyright @therohitjha 2020"))},b=a(167);var v=function(e){var t=Object(n.useContext)(w),a=t.sorting,l=t.setSorting,r=t.handleProductSorting;return c.a.createElement("div",{className:"filterModalContainer"},c.a.createElement("h6",null,"Sorting By"),c.a.createElement("div",{className:"filterBody"},c.a.createElement("div",null,c.a.createElement("input",{type:"radio",id:"high",name:"high",value:"high",checked:"high"===a,onChange:function(){return l("high")}}),c.a.createElement("label",{htmlFor:"high"},"Price -- High To Low")),c.a.createElement("div",null,c.a.createElement("input",{type:"radio",id:"low",name:"low",value:"low",checked:"low"===a,onChange:function(){return l("low")}}),c.a.createElement("label",{htmlFor:"low"},"Price -- Low To High")),c.a.createElement("div",null,c.a.createElement("input",{type:"radio",id:"discount",name:"discount",value:"discount",checked:"discount"===a,onChange:function(){return l("discount")}}),c.a.createElement("label",{htmlFor:"discount"},"Discount")),c.a.createElement("div",null,c.a.createElement("input",{type:"radio",id:"discount",name:"reset",value:"reset",checked:"reset"===a,onChange:function(){return l("reset")}}),c.a.createElement("label",{htmlFor:"discount"},"Reset")),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"applyBtn",onClick:function(){return r()}},"Apply"))),c.a.createElement("div",{className:"filterCancelApply hide4Web"},e.handleClose&&c.a.createElement("div",{className:"filterCancel",onClick:e.handleClose},"Cancel"),e.handleClose&&c.a.createElement("div",{className:"filterApply",onClick:function(){r(),e.handleClose()}},"Apply")))};var y=function(e){var t=e.show,a=e.handleClose;return c.a.createElement(b.a,{show:t,onHide:a},c.a.createElement(b.a.Header,{closeButton:!0},"Sorting"),c.a.createElement(b.a.Body,null,c.a.createElement(v,{handleClose:a})))},C=a(49);a(86);var N=function(e){var t=e.show,a=e.handleClose;return c.a.createElement(b.a,{show:t,onHide:a},c.a.createElement(b.a.Header,{closeButton:!0},"Filter"),c.a.createElement(b.a.Body,null,c.a.createElement("div",{className:"filterModalContainer"},c.a.createElement("div",{className:"filterBody"},c.a.createElement(C.a,{defaultValue:[100,1e3],min:100,max:1e3})),c.a.createElement("div",{className:"filterCancelApply"},c.a.createElement("div",{className:"filterCancel",onClick:a},"Cancel"),c.a.createElement("div",{className:"filterApply"},"Apply")))))};function j(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],m=i[1];return c.a.createElement("div",{className:"row filter-container"},c.a.createElement("div",{className:"col sortingCol",onClick:function(){return l(!0)}},c.a.createElement("i",{className:"fas fa-sort"}),c.a.createElement("span",null,"Sorting")),c.a.createElement("div",{className:"col filterCol",onClick:function(){return m(!0)}},c.a.createElement("i",{className:"fas fa-filter"}),c.a.createElement("span",null,"Filter")),c.a.createElement(y,{show:a,handleClose:function(){return l(!1)}}),c.a.createElement(N,{show:o,handleClose:function(){return m(!1)}}))}var k=function(){var e=Object(n.useContext)(w),t=e.addToCart,a=e.productList;return c.a.createElement("div",null,c.a.createElement("div",{className:"hide4Web"},c.a.createElement(j,null)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"filterColumn hide4Mobile"},c.a.createElement("div",{className:"sideMenuFilterBody"},c.a.createElement("span",null,"Filter"),c.a.createElement(C.a,{defaultValue:[100,1e3],min:100,max:1e3}),c.a.createElement("button",{className:"applyBtn"},"Apply")),c.a.createElement("div",{className:"mt-4"},c.a.createElement(v,null))),c.a.createElement("div",{className:"productContainer"},a&&a.map((function(e){return c.a.createElement("div",{key:e.name},c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:e.img_url,className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},e.name),c.a.createElement("div",{className:"priceContainer"},c.a.createElement("p",{className:"card-text"},"\u20b9",e.price.actual),c.a.createElement("p",{className:"card-text oldPrice"},"\u20b9",e.price.display),c.a.createElement("p",{className:"card-text discountColor"},e.discount,"% OFF")),c.a.createElement("button",{className:"cartBtn",onClick:function(){return t(e)}},"Add To Cart"))))})))))};function O(){var e=Object(n.useContext)(w),t=e.cartList,a=e.removeFromCart,l=e.increaseQty,r=e.decreaseQty,i=e.price,o=e.discount,s=e.totalPrice,m=e.totalItem;return c.a.createElement("div",{className:"cartContainer"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-xs-12"},t.length>0&&t.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{display:"flex"}},c.a.createElement("div",{className:"cartImgContainer"},c.a.createElement("img",{src:e.img_url,className:"card-img-top",alt:"..."})),c.a.createElement("div",{style:{width:"100%"}},c.a.createElement("h6",{className:"card-title"},e.name),c.a.createElement("div",{className:"cartBody4Web"},c.a.createElement("div",{className:"priceContainer"},c.a.createElement("p",{className:"card-text"},"\u20b9",e.price.actual),c.a.createElement("p",{className:"card-text oldPrice"},"\u20b9",e.price.display),c.a.createElement("p",{className:"card-text discountColor"},e.discount,"% OFF")),c.a.createElement("div",null,c.a.createElement("button",{className:"qty",onClick:function(){return r(e)}},"-"),c.a.createElement("input",{type:"text",value:e.count,className:"qtyInput"}),c.a.createElement("button",{className:"qty",onClick:function(){return l(e)}},"+")),c.a.createElement("button",{className:"cartRemoveBtn",onClick:function(){return a(e.id)}},"Remove"))))))}))),c.a.createElement("div",{className:"col-lg-4 col-xs-12"},t.length>0&&c.a.createElement("div",{className:"card mb-3"},c.a.createElement("div",{className:"card-header"},"Product Details"),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("span",null,"Price (Item ",m,") : "),c.a.createElement("span",null,"\u20b9",i)),c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("span",null,"Discount",c.a.createElement("span",{style:{marginLeft:"49px"}},":")),c.a.createElement("span",null,"\u20b9",o))),c.a.createElement("div",{className:"card-footer",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,"Total Payable"),c.a.createElement("div",null,"\u20b9",s))))))}var x=[{name:"Samsung Series 4",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:13999,display:22500},discount:37,id:1},{name:"Samsung Super 6",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:35999,display:66900},discount:46,id:2},{name:"Samsung The Frame",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:84999,display:133900},discount:36,id:3},{name:"Thomson B9 Pro",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:9999,display:16999},discount:41,id:4},{name:"LG Ultra HD",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:39990,display:79990},discount:50,id:5},{name:"Vu Ready LED TV",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:7999,display:17e3},discount:52,id:6},{name:"Koryo Android TV",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:55999,display:199990},discount:71,id:7},{name:"Micromax LED Smart",img_url:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:9999,display:27990},discount:64,id:8}],w=Object(n.createContext)();r.a.render(c.a.createElement((function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),d=Object(s.a)(r,2),p=d[0],E=d[1],f=Object(n.useState)(0),h=Object(s.a)(f,2),b=h[0],v=h[1],y=Object(n.useState)(0),C=Object(s.a)(y,2),N=C[0],j=C[1],S=Object(n.useState)(0),z=Object(s.a)(S,2),q=z[0],F=z[1],B=Object(n.useState)(""),P=Object(s.a)(B,2),L=P[0],A=P[1],T=Object(n.useState)(""),_=Object(s.a)(T,2),H=_[0],I=_[1],D=Object(n.useState)(0),V=Object(s.a)(D,2),M=V[0],Q=V[1];return Object(n.useEffect)((function(){new Promise((function(e,t){x?e(l(x)):t("Something went Wrong...")})).then((function(){H&&l((function(e){return e.filter((function(e){return e.name.toLowerCase().includes(H.toLowerCase())}))}))})).catch(console.log())}),[H]),Object(n.useEffect)((function(){var e=0,t=0,a=0,n=0;p.forEach((function(c){e+=c.total,t+=c.count,a+=c.mrp-c.total,n+=c.mrp})),Q(t),F(e),j(a),v(n)}),[p,M,q,N]),c.a.createElement(m.a,{basename:"/"},c.a.createElement(u.c,null,c.a.createElement(w.Provider,{value:{cartList:p,removeFromCart:function(e){if(p.length>0){var t=p.filter((function(t){return t.id!==e}));E(Object(o.a)(t))}},increaseQty:function(e){if(e){var t=Object(o.a)(p),a=t.find((function(t){return t.id===e.id}));a.count++,a.total=a.price.actual*a.count,a.mrp=a.price.display*a.count,E(t)}},decreaseQty:function(e){if(e){var t=Object(o.a)(p),a=t.find((function(t){return t.id===e.id}));a.count--,a.total=a.price.actual*a.count,a.mrp=a.price.display*a.count,E(t)}},price:b,discount:N,totalPrice:q,totalItem:M,addToCart:function(e){var t=Object(o.a)(p),n=Object(o.a)(a),c=t.find((function(t){return t.id===e.id}));if(c)c.count++,c.total=c.price.actual*c.count,c.mrp=c.price.display*c.count;else{var l=(c=n.find((function(t){return t.id===e.id}))).price.actual,r=c.price.display,s=Object(i.a)({},c,{count:1,total:l,mrp:r});t=[].concat(Object(o.a)(t),[s])}E(t),v(c.mrp)},productList:a,sorting:L,setSorting:A,handleProductSorting:function(){var e=Object(o.a)(a);"reset"===L?l(e.sort((function(e,t){return e.id-t.id}))):"high"===L?l(e.sort((function(e,t){return t.price.actual-e.price.actual}))):"low"===L?l(e.sort((function(e,t){return e.price.actual-t.price.actual}))):"discount"===L&&l(e.sort((function(e,t){return t.discount-e.discount})))},handleOnChange:function(e){var t=e.target.value;I(t)},search:H}},c.a.createElement(u.a,{exact:!0,path:"/",render:function(){return c.a.createElement(g,{body:c.a.createElement(k,null)})}}),c.a.createElement(u.a,{exact:!0,path:"/cart",render:function(){return c.a.createElement(g,{body:c.a.createElement(O,null)})}}))))}),null),document.getElementById("root"))},53:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.a1e5b63b.chunk.js.map