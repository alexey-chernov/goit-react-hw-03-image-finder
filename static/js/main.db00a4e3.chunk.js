(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{106:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(5),c=t.n(o),l=(t(54),t(6)),s=t.n(l),i=t(28),u=t(12),d=t(13),m=t(14),p=t(16),g=t(15),h=t(17),b=t.n(h);b.a.defaults.baseURL="https://pixabay.com/api/",b.a.defaults.params={key:"21693934-b739dad2632fdbf7884e4d0a2",image_type:"photo",orientation:"horizontal",per_page:12};var j=function(){var e=Object(u.a)(s.a.mark((function e(a,t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("",{params:{q:a,page:t}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.hits);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a,t){return e.apply(this,arguments)}}(),f=t(41),_=t.n(f),O=t(2);var v=function(e){var a=e.children;return Object(O.jsx)("div",{className:_.a.Container,children:a})},x=t(7),y=t.n(x);var w=function(e){var a=e.onHandleSubmit,t=e.onHandleChangeQuery,r=e.query;return Object(O.jsx)("header",{className:y.a.Searchbar,children:Object(O.jsxs)("form",{className:y.a.SearchForm,onSubmit:a,children:[Object(O.jsx)("button",{type:"submit",className:y.a.SearchForm_button,children:Object(O.jsx)("span",{className:y.a.SearchForm_button_label,children:"Search"})}),Object(O.jsx)("input",{className:y.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u0428\u0443\u043a\u0430\u0439\u0442\u0435 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0442\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0456\u0457 ",value:r,onChange:t})]})})},S=t(25),I=t.n(S);var M=function(e){var a=e.webformatURL,t=e.largeImageURL,r=e.tags,n=e.onOpenModal;return Object(O.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(O.jsx)("img",{className:I.a.ImageGalleryItem_image,src:a,alt:r,"data-source":t,onClick:n})})},L=t(42),k=t.n(L);var N=function(e){var a=e.images,t=e.onOpenModal;return Object(O.jsx)("ul",{className:k.a.ImageGallery,children:a.map((function(e){var a=e.id,r=e.webformatURL,n=e.largeImageURL,o=e.tags;return Object(O.jsx)(M,{webformatURL:r,largeImageURL:n,tags:o,onOpenModal:t},a)}))})},C=t(43),F=t(18),U=t.n(F);var T=function(e){var a=e.onLoadMore;return Object(O.jsx)("div",{className:U.a.Button_wrapper,children:Object(O.jsxs)("button",{type:"button",className:U.a.Button,onClick:a,children:["\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435 ",Object(O.jsx)(C.a,{className:U.a.arrow})]})})},B=t(44),G=t.n(B),R=(t(96),t(45)),q=t.n(R);var D=function(){return Object(O.jsx)("div",{className:q.a.Overlay,children:Object(O.jsx)(G.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})})},E=t(26),K=t.n(E),Y=document.querySelector("#modal-root"),A=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onToggleModal()},e.handleBackdropClick=function(a){a.currentTarget===a.target&&e.props.onToggleModal()},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(o.createPortal)(Object(O.jsx)("div",{className:K.a.Overlay,onClick:this.handleBackdropClick,children:Object(O.jsx)("div",{className:K.a.Modal,children:Object(O.jsx)("img",{src:e,alt:""})})}),Y)}}]),t}(r.Component),H=t.p+"static/media/oops.7a0c2fd0.jpeg",W=t(27),J=t.n(W);var P=function(e){var a=e.texterror;return Object(O.jsxs)("div",{role:"alert",className:J.a.Wrapper,children:[Object(O.jsx)("img",{src:H,width:"550",alt:"no_res"}),Object(O.jsx)("p",{text:a,className:J.a.Text,children:a})]})},V=t(49),z=t(47),Q=t(46),X=t.n(Q),Z=function(){var e=Object(r.useState)(!1),a=Object(V.a)(e,2),t=a[0],n=a[1];return window.addEventListener("scroll",(function(){!t&&window.pageYOffset>400?n(!0):t&&window.pageYOffset<=400&&n(!1)})),Object(O.jsx)(z.a,{className:X.a.scrollTop,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:t?"flex":"none"}})},$=t(29),ee=(t(97),t(48)),ae=(t(106),function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={query:"",images:[],page:1,isLoading:!1,largeImageURL:"",showModal:!1,error:null},e.handleChange=function(a){e.setState({query:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.renderImages()},e.onLoadMore=function(){e.renderImages(),e.scroll()},e.renderImages=Object(u.a)(s.a.mark((function a(){var t,r,n,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.state,r=t.query,n=t.page,r.trim()){a.next=3;break}return a.abrupt("return",$.b.info("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0445 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c! "));case 3:return e.toggleLoader(),a.prev=4,a.next=7,j(r,n);case 7:o=a.sent,e.setState((function(e){var a=e.images,t=e.page;return{images:[].concat(Object(i.a)(a),Object(i.a)(o)),page:t+1}})),0===o.length&&e.setState({error:"\u041d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u0434\u043b\u044f ".concat(r,"!")}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(4),e.setState({error:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437. "});case 15:return a.prev=15,e.toggleLoader(),a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[4,12,15,18]])}))),e.onOpenModal=function(a){e.setState({largeImageURL:a.target.dataset.source}),e.toggleModal()},e.toggleLoader=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.scroll=function(){ee.animateScroll.scrollToBottom()},e}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.query!==this.state.query&&this.setState({images:[],page:1,error:null})}},{key:"render",value:function(){var e=this.state,a=e.query,t=e.images,r=e.largeImageURL,n=e.isLoading,o=e.showModal,c=e.error;return Object(O.jsxs)(v,{children:[Object(O.jsx)(w,{onHandleSubmit:this.handleSubmit,onHandleChangeQuery:this.handleChange,query:a}),Object(O.jsx)(Z,{}),c&&Object(O.jsx)(P,{texterror:c}),n&&Object(O.jsx)(D,{}),t.length>0&&!c&&Object(O.jsx)(N,{images:t,onOpenModal:this.onOpenModal}),!n&&t.length>0&&!c&&Object(O.jsx)(T,{onLoadMore:this.onLoadMore}),o&&Object(O.jsx)(A,{onToggleModal:this.toggleModal,largeImageURL:r}),Object(O.jsx)($.a,{})]})}}]),t}(r.Component));c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(ae,{})}),document.getElementById("root"))},18:function(e,a,t){e.exports={Button_wrapper:"Button_Button_wrapper__1gFcV",Button:"Button_Button__1yYDF",arrow:"Button_arrow__1Ky0V"}},25:function(e,a,t){e.exports={ImageGalleryItem:"GalleryImageItem_ImageGalleryItem__1EO8f",ImageGalleryItem_image:"GalleryImageItem_ImageGalleryItem_image__2Ys4l"}},26:function(e,a,t){e.exports={Overlay:"Modal_Overlay__PehPI",Modal:"Modal_Modal__3gyKl"}},27:function(e,a,t){e.exports={Wrapper:"Error_Wrapper__12oiz",Text:"Error_Text__2Y6C0"}},41:function(e,a,t){e.exports={Container:"Container_Container__1rNNm"}},42:function(e,a,t){e.exports={ImageGallery:"GalleryImage_ImageGallery__35CoG"}},45:function(e,a,t){e.exports={Overlay:"Loader_Overlay__Mg29A"}},46:function(e,a,t){e.exports={scrollTop:"ScrollToUp_scrollTop__1lnIp",fadeIn:"ScrollToUp_fadeIn__INVlJ"}},54:function(e,a,t){},7:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__2dog0",SearchForm:"Searchbar_SearchForm__2K02U",SearchForm_button:"Searchbar_SearchForm_button__3xAMo",SearchForm_button_label:"Searchbar_SearchForm_button_label__3Tx-s",SearchForm_input:"Searchbar_SearchForm_input__2U1fD"}}},[[107,1,2]]]);
//# sourceMappingURL=main.db00a4e3.chunk.js.map