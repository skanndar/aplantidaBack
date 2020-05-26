(this["webpackJsonpreact-auth-client"]=this["webpackJsonpreact-auth-client"]||[]).push([[0],{223:function(e,t,a){e.exports=a(440)},228:function(e,t,a){},440:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),i=a.n(l),o=a(29),c=a(14),s=a(15),m=a(17),u=a(16),p=(a(228),a(13)),d=a(91),g=a(44);var h=function(){return r.a.createElement(d.a,{className:"logoRow",justify:"center",align:"middle"},r.a.createElement(g.a,{className:"homeLogo",span:24},r.a.createElement(o.b,{to:"/login"},r.a.createElement("img",{src:"/isoLogo.png",alt:"logo-home"}))))},f=a(24),E=a.n(f),v=a(451),y=r.a.createContext(),b=y.Consumer,w=y.Provider;function k(e){return function(t){return r.a.createElement(b,null,(function(a){return r.a.createElement(e,Object.assign({},t,{user:a.user,isLoggedIn:a.isLoggedIn,isLoading:a.isLoading,login:a.login,signup:a.signup,logout:a.logout,errorMessage:a.errorMessage,me:a.me}))}))}}var j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:null,isLoggedIn:!1,isLoading:!0,errorMessage:void 0},e.me=function(){E.a.get("https://aplantida.herokuapp.com/auth/me",{withCredentials:!0}).then((function(t){var a=t.data;e.setState({isLoggedIn:!0,isLoading:!1,user:a})})).catch((function(t){return e.setState({isLoggedIn:!1,isLoading:!1,user:null})}))},e.login=function(t,a){E.a.post("https://aplantida.herokuapp.com/auth/login",{email:t,password:a},{withCredentials:!0}).then((function(t){var a=t.data;e.setState({isLoggedIn:!0,isLoading:!1,user:a})})).catch((function(e){return console.log(e)}))},e.signup=function(t,a,n,r,l,i,o){E.a.post("https://aplantida.herokuapp.com/auth/signup",{agreement:t,confirm:a,email:n,fName:r,genre:l,lName:i,password:o},{withCredentials:!0}).then((function(t){var a=t.data;e.setState({isLoggedIn:!0,isLoading:!1,user:a,errorMessage:void 0})})).catch((function(t){e.setState({isLoggedIn:!1,isLoading:!1,errorMessage:"Something went wrong, try again!"}),console.log(t)}))},e.logout=function(){E.a.get("https://aplantida.herokuapp.com/auth/logout",{withCredentials:!0}).then((function(t){e.setState({isLoggedIn:!1,isLoading:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://aplantida.herokuapp.com/auth/me",{withCredentials:!0}).then((function(t){var a=t.data;e.setState({isLoggedIn:!0,isLoading:!1,user:a})})).catch((function(t){return e.setState({isLoggedIn:!1,isLoading:!1,user:null})}))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.isLoggedIn,n=e.isLoading,l=e.errorMessage,i=this.login,o=this.signup,c=this.logout,s=this.me;return r.a.createElement(w,{value:{user:t,isLoggedIn:a,isLoading:n,login:i,signup:o,logout:c,errorMessage:l,me:s}},n?r.a.createElement(v.a,{active:!0,paragraph:{rows:16}}):this.props.children)}}]),a}(r.a.Component),O=a(452),C=a(457),L=a(459),N=a(62),x=a(461),I=a(462),S=k((function(e){return r.a.createElement(d.a,{className:"loginRow",justify:"center",align:"middle"},r.a.createElement(g.a,{className:"homeLogo"},r.a.createElement("img",{src:"/isoLogo.png",alt:"logo-home"}),r.a.createElement(O.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){var a=t.email,n=t.password;e.login(a,n),console.log("Received values of form: ",t)}},r.a.createElement(O.a.Item,{ref:function(e){return e&&e.focus()},name:"email",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(C.a,{ref:function(e){return e&&e.focus()},prefix:r.a.createElement(x.a,{className:"site-form-item-icon"}),placeholder:"email"})),r.a.createElement(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(C.a,{prefix:r.a.createElement(I.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(O.a.Item,null,r.a.createElement(O.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(L.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:"#"},"Forgot password")),r.a.createElement(O.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{href:"/signup"},"register now!")))))})),T=a(83),F=a(448),M=a(74),A=a(441),P=a(446),R=a(453),D=a(442),q=a(463),U=a(464),z=a(465),H=a(466);var _=k((function(e){var t=Object(n.useState)(e.data.reviews),a=Object(M.a)(t,2),l=a[0],i=a[1],o=function(e){var t=e.icon,a=e.text;return r.a.createElement(A.a,null,r.a.createElement(t),a)};return r.a.createElement(P.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:4},dataSource:l,footer:r.a.createElement("div",null,r.a.createElement("b",null,"Designed by ALIADOS")),renderItem:function(t){return r.a.createElement(P.b.Item,{key:t._id,actions:[r.a.createElement(R.a,{disabled:!0,defaultValue:t.stars,character:r.a.createElement(q.a,null),allowHalf:!0}),r.a.createElement(o,{icon:U.a,text:t.likes,key:"list-vertical-like-o"}),r.a.createElement(o,{icon:z.a,text:parseInt(144*Math.random()*9),key:"list-vertical-message"})],extra:r.a.createElement("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},r.a.createElement(P.b.Item.Meta,{avatar:r.a.createElement(D.a,{src:t.avatar}),title:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:t.href},t.title)," ",e.user._id===t.user?r.a.createElement(N.a,{onClick:function(){return e=t._id,void E.a.delete("https://aplantida.herokuapp.com"+"/review/".concat(e),{withCredentials:!0}).then((function(e){console.log("response.data :>> ",e.data);var t=e.data._id,a=l.filter((function(e){return e._id!==t}));console.log("newReviewsArray :>> ",a),i(a)})).catch((function(e){return console.log("error :>> ",e)}));var e},type:"ghost"},r.a.createElement(H.a,{twoToneColor:"#43bd26"})):null),description:e.data.latinName}),t.text)}})})),B=a(454),K=a(447),W=a(467),G=a(468);function V(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}function Y(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||B.a.error("You can only upload JPG/PNG file!");var a=e.size/1024/1024<2;return a||B.a.error("Image must smaller than 2MB!"),t&&a}var J=k(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,imageUrl:e.props.user.image},e.handleChange=function(t){console.log("info :>> ",t),"uploading"!==t.file.status?"done"===t.file.status&&V(t.file.originFileObj,(function(t){return e.setState({imageUrl:t,loading:!1},(function(){e.props.me()}))})):e.setState({loading:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=r.a.createElement("div",null,this.state.loading?r.a.createElement(W.a,null):r.a.createElement(G.a,null),r.a.createElement("div",{className:"ant-upload-text"},"Upload")),t=this.state.imageUrl;return r.a.createElement(K.a,{name:"photo",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"https://aplantida.herokuapp.com/profile-picture",withCredentials:"true",beforeUpload:Y,onChange:this.handleChange},t?r.a.createElement("img",{src:t,alt:"avatar",style:{width:"100%"}}):e)}}]),a}(n.Component)),Q=a(450).a.Paragraph,X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={str:e.props.text},e.onChange=function(t){console.log("Content change:",t),e.setState({str:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(Q,{editable:{onChange:this.onChange}},this.state.str)}}]),a}(n.Component),Z=[{key:"tab1",tab:"Profile"},{key:"tab2",tab:"My Reviews"}],$=k(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={plant:null,reviews:null,key:"tab1",user:null},e.onTabChange=function(t,a){console.log(t,a),e.setState(Object(T.a)({},a,t))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://aplantida.herokuapp.com/auth/profile",{withCredentials:!0}).then((function(t){console.log("response.data :>> ",t.data);var a=t.data;e.setState({user:a})})).catch((function(e){return console.log("error :>> ",e)}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=(a.plant,a.reviews,a.user);return n&&(e={tab1:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{gutter:[16,16]},r.a.createElement(g.a,null,r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Name"},r.a.createElement(X,{text:n.fName}))),r.a.createElement(g.a,null,r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Lastname"},r.a.createElement(X,{text:n.lName}))),r.a.createElement(g.a,null,r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Email"},r.a.createElement(X,{text:n.email}))),r.a.createElement(g.a,null,r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Genre"},r.a.createElement(X,{text:n.genre}))),r.a.createElement(g.a,null,r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Favorites"},n.favorites.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"/plant/".concat(e.latinName)}," ",e.latinName," "),r.a.createElement("br",null))})))))),tab2:r.a.createElement(_,Object.assign({data:n},this.props))}),n?r.a.createElement(d.a,{className:"userDetail",justify:"center",align:"top"},r.a.createElement(g.a,null),r.a.createElement(F.a,{style:{width:"100%"},title:r.a.createElement(J,{size:256,shape:"square"},n.image),tabList:Z,activeTabKey:this.state.key,onTabChange:function(e){t.onTabChange(e,"key")}},e[this.state.key])):null}}]),a}(n.Component)),ee=F.a.Meta;function te(e){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/plant/".concat(e.latinName)},r.a.createElement(F.a,{hoverable:!0,size:"small",style:{width:"20vw",minWidth:288},cover:r.a.createElement("div",{style:{height:220,width:"20vw",minWidth:288,overflow:"hidden"}}," ",r.a.createElement("img",{style:{width:"20vw",minWidth:288},alt:e.latinName,src:e.img[0]}))},r.a.createElement(ee,{title:e.latinName,description:e.characteristics.habitats}))))}var ae=a(460),ne=a(455),re=function(){var e=Object(n.useState)(!1),t=Object(M.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(110),o=Object(M.a)(i,2),c=o[0];o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{offsetTop:c},r.a.createElement(N.a,{type:"primary",onClick:function(){l(!0)}},"Filter")),r.a.createElement(ne.a,{title:"Filters",placement:"left",closable:!0,onClose:function(){l(!1)},visible:a,width:"320",keyboard:!0,footer:"Powered by ALIADOS"},r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents...")))},le=k(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={plants:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){if(console.log("this.props.location.state :>> ",this.props.location.state),this.props.location.state){var e=this.props.location.state.plants;this.setState({plants:e})}}},{key:"componentDidUpdate",value:function(e){var t=this.props.location.state.plants;t!==e.location.state.plants&&this.setState({plants:t})}},{key:"render",value:function(){var e=this.state.plants;return r.a.createElement("div",null,r.a.createElement("h1",null,"Found ",e.length," plants"),r.a.createElement(re,null),r.a.createElement(P.b,{className:"site-card-wrapper",grid:{gutter:16,xs:1,sm:2,md:2,lg:3,xl:4,xxl:4},dataSource:e,renderItem:function(e){return r.a.createElement(P.b.Item,null,r.a.createElement(te,e))}}))}}]),a}(n.Component)),ie=a(126),oe=a(443),ce=a(470),se=a(449),me=a(469),ue=K.a.Dragger,pe={name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:function(e){var t=e.file.status;"uploading"!==t&&console.log(e.file,e.fileList),"done"===t?B.a.success("".concat(e.file.name," file uploaded successfully.")):"error"===t&&B.a.error("".concat(e.file.name," file upload failed."))}};function de(){return r.a.createElement(ue,pe,r.a.createElement("p",{className:"ant-upload-drag-icon"},r.a.createElement(me.a,null)),r.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),r.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"))}var ge={wrapperCol:{span:24}},he={required:"${name} is required!"},fe=k(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ModalText:"",visible:!1,confirmLoading:!1},e.onFinish=function(t){console.log("this is the new review --\x3e ",t);var a=t.title,n=t.text,r=t.stars,l=e.props.user._id,i=e.props.plant._id;E.a.post("https://aplantida.herokuapp.com/review",{title:a,text:n,stars:r,user:l,plant:i},{withCredentials:!0}).then((function(t){e.props.addReview(t.data),console.log("response.data from review :>> ",t.data),e.handleOk()})).catch((function(e){return console.log("error :>> ",e)}))},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){e.setState({ModalText:"The modal will be closed after two seconds",confirmLoading:!0}),setTimeout((function(){e.setState({visible:!1,confirmLoading:!1})}),2e3)},e.handleCancel=function(){console.log("Clicked cancel button"),e.setState({visible:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.confirmLoading,n=e.ModalText;return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(N.a,{type:"primary",onClick:this.showModal},"Add Review"),r.a.createElement(se.a,{title:"New Review",visible:t,confirmLoading:a,onCancel:this.handleCancel,footer:null},r.a.createElement(O.a,Object.assign({},ge,{name:"nest-messages",onFinish:this.onFinish,validateMessages:he}),r.a.createElement("p",null,n),r.a.createElement(O.a.Item,{name:"stars",rules:[{required:!0}]},r.a.createElement(R.a,{initialValues:parseInt(6*Math.random()),character:r.a.createElement(q.a,null),allowHalf:!0})),r.a.createElement(O.a.Item,{name:"title",rules:[{required:!0}]},r.a.createElement(C.a,{placeholder:"Title"})),r.a.createElement(O.a.Item,{name:"text",rules:[{required:!0}]},r.a.createElement(C.a.TextArea,{placeholder:"Write your comment here..."})),r.a.createElement(O.a.Item,{name:"image"},r.a.createElement(de,null)),r.a.createElement(O.a.Item,{wrapperCol:Object(ie.a)({},ge.wrapperCol)},r.a.createElement(N.a,{type:"primary",htmlType:"submit"},"Submit")))))}}]),a}(n.Component)),Ee=[{key:"tab1",tab:"Characteristics"},{key:"tab2",tab:"Reviews"}],ve=function(e){var t=e.icon,a=e.text;return r.a.createElement("div",{style:{textAlign:"right",paddingBottom:"5px"}},r.a.createElement(t),a)},ye=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={plant:null,reviews:null,key:"tab1"},e.addReview=function(t){console.log("review :>> ",t);var a=Object(ie.a)({},e.state.plant);a.reviews.unshift(t),e.setState({plant:a})},e.search=function(){var t=e.props.match.params.latinName;console.log("plantLatinName :>> ",t),E.a.get("https://aplantida.herokuapp.com"+"/plant/".concat(t),{withCredentials:!0}).then((function(t){console.log("response",t),e.setState({plant:t.data,reviews:t.data.reviews})})).catch((function(e){return console.log(e)}))},e.onTabChange=function(t,a){console.log(t,a),e.setState(Object(T.a)({},a,t))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.search()}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.plant;a.reviews;return console.log("this.state.plant :>> ",this.state.plant),n&&(e={tab1:r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Common Name"},n.commonName),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Family"},n.characteristics.family),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Habitats"},n.characteristics.habitats),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Edibility Rating"},n.characteristics.edibilityRating),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Medicinal Rating"},n.characteristics.medicinalRating),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Other Uses"},n.characteristics.otherUses),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Care"},n.characteristics.care.imgUrl.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e,alt:""})," ")}))),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Range"},n.characteristics.range),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Weed Potential"},n.characteristics.weedPotential),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:r.a.createElement(r.a.Fragment,null,"Known Hazards"," ",r.a.createElement("img",{src:n.characteristics.knownHazards.imgUrl,alt:""}))},n.characteristics.knownHazards.text),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"USDA Hardiness"},n.characteristics.USDAHardiness),r.a.createElement(F.a,{style:{marginTop:16},type:"inner",title:"Liked"},n.characteristics.liked)),tab2:r.a.createElement(_,{data:n})}),n?r.a.createElement(d.a,{className:"plantDetail",justify:"center",align:"top"},r.a.createElement(g.a,null,r.a.createElement(oe.a,{autoplay:!0},n.img.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e,style:{minWidth:"288px"},alt:n.latinName}))})))),r.a.createElement(F.a,{style:{width:"100%"},title:r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{icon:ce.a,text:parseInt(144*Math.random()*9),key:"list-vertical-like-o"}),r.a.createElement(d.a,{style:{justifyContent:"space-between"}},r.a.createElement("h1",null," ",n.latinName),"tab2"===this.state.key?r.a.createElement(fe,{addReview:this.addReview,search:this.search,plant:n}):null)),tabList:Ee,activeTabKey:this.state.key,onTabChange:function(e){t.onTabChange(e,"key")}},e[this.state.key])):null}}]),a}(n.Component),be=a(444),we=a(471),ke=a(472),je={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:24}}},Oe={wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},Ce=k((function(e){var t=O.a.useForm(),a=Object(M.a)(t,1)[0],n=e.errorMessage;return r.a.createElement(d.a,{className:"signupRow",justify:"center",align:"middle"},r.a.createElement(g.a,{className:"homeLogo"},r.a.createElement("img",{src:"/isoLogo.png",alt:"logo-home"}),r.a.createElement(O.a,Object.assign({},je,{form:a,name:"register",onFinish:function(t){var a=t.agreement,n=t.confirm,r=t.email,l=t.fName,i=t.genre,o=t.lName,c=t.password;console.log("props :>> ",e),e.signup(a,n,r,l,i,o,c),console.log("Received values of form: ",a,n,r,l,i,o,c)},scrollToFirstError:!0}),r.a.createElement(O.a.Item,{ref:function(e){return e&&e.focus()},name:"fName",rules:[{required:!0,message:"Your Name is required!",whitespace:!0}]},r.a.createElement(C.a,{ref:function(e){return e&&e.focus()},prefix:r.a.createElement(x.a,{className:"site-form-item-icon"}),placeholder:"Name"})),r.a.createElement(O.a.Item,{name:"lName",rules:[{required:!0,message:"Your Lastname is required!",whitespace:!0}]},r.a.createElement(C.a,{prefix:r.a.createElement(x.a,{className:"site-form-item-icon"}),placeholder:"Lastname"})),r.a.createElement(O.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(C.a,{prefix:r.a.createElement(we.a,{className:"site-form-item-icon"}),placeholder:"email"})),r.a.createElement(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},r.a.createElement(C.a.Password,{prefix:r.a.createElement(ke.a,{className:"site-form-item-icon"}),placeholder:"password"})),r.a.createElement(O.a.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(C.a.Password,{prefix:r.a.createElement(ke.a,{className:"site-form-item-icon"}),placeholder:"confirm password"})),r.a.createElement(O.a.Item,{name:"genre",rules:[{required:!0,message:"Gender is required!",whitespace:!0}]},r.a.createElement(be.default.Group,null,r.a.createElement(be.default,{value:"male"},"Male"),r.a.createElement(be.default,{value:"female"},"Female"))),r.a.createElement(O.a.Item,Object.assign({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject("Should accept agreement")}}]},Oe),r.a.createElement(L.a,null,"I have read the ",r.a.createElement("a",{href:"#"},"agreement"))),r.a.createElement(O.a.Item,Oe,r.a.createElement(N.a,{type:"primary",htmlType:"submit"},"Register"))),n?r.a.createElement("h1",null,n):null))}));var Le=k((function(e){console.log("props :>> ",e);var t=e.exact,a=e.path,n=e.component,l=e.isLoggedIn,i=n;return r.a.createElement(p.b,{exact:t,path:a,render:function(e){return l?r.a.createElement(p.a,{to:"/profile"}):l?void 0:r.a.createElement(i,e)}})}));var Ne=k((function(e){var t=e.exact,a=e.path,n=e.component,l=e.isLoggedIn,i=n;return r.a.createElement(p.b,{exact:t,path:a,render:function(e){return l?r.a.createElement(i,e):l?void 0:r.a.createElement(p.a,{to:"/login"})}})})),xe=a(473),Ie=a(474),Se=a(445),Te=a(456),Fe=Se.a.Header,Me=C.a.Search,Ae=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={plants:[]},e.search=function(t){E.a.post("https://aplantida.herokuapp.com/plants",{searchStr:t},{withCredentials:!0}).then((function(t){console.log(t),e.setState({plants:t.data},(function(){e.props.history.push({pathname:"/search",state:{plants:e.state.plants}})}))})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.logout,a=e.isLoggedIn,n=e.isLoading,l=e.user,i=this.search;return r.a.createElement(Fe,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"containerLogo"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:"/aplantidalogo.svg",className:"logo",alt:"logo"}))),n?null:a?r.a.createElement(Te.a,{className:"menu",theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(Te.a.Item,{key:"1"},r.a.createElement(o.b,{to:"/plants"},r.a.createElement(xe.a,{spin:!0}))),r.a.createElement(Te.a.Item,{key:"2"},r.a.createElement(o.b,{to:"/profile"},l.image?r.a.createElement(D.a,{src:l.image}):r.a.createElement(D.a,null,l.fName))),r.a.createElement(Te.a.Item,{key:"3",onClick:t},r.a.createElement(Ie.a,null))):r.a.createElement(Te.a,{className:"menu",theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(Te.a.Item,{key:"1"},r.a.createElement(o.b,{to:"/profile"},r.a.createElement(x.a,null)))),r.a.createElement(Me,{ref:function(e){return e&&e.focus()},className:"searchBar",placeholder:a?"Search plants":"Login to search plants",enterButton:"search",size:"large",allowClear:!0,onSearch:function(e){i(e)}}))}}]),a}(n.Component),Pe=Object(p.g)(k(Ae)),Re=a(458),De=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(Re.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement("a",{href:"/"},r.a.createElement(N.a,{type:"primary"},"Back Home"))})}}]),a}(n.Component),qe=(Se.a.Header,Se.a.Content),Ue=Se.a.Footer,ze=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,null,r.a.createElement(Pe,null),r.a.createElement(qe,{className:"site-layout",style:{padding:"0 10px",marginTop:114}},r.a.createElement("div",{className:"site-layout-background",style:{padding:14,minHeight:"75vh"}},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:h}),r.a.createElement(Le,{exact:!0,path:"/signup",component:Ce}),r.a.createElement(Le,{exact:!0,path:"/login",component:S}),r.a.createElement(Ne,{exact:!0,path:"/profile",component:$}),r.a.createElement(Ne,{exact:!0,path:"/search",component:le}),r.a.createElement(Ne,{exact:!0,path:"/plant/:latinName",component:ye}),r.a.createElement(p.b,{component:De})))),r.a.createElement(Ue,{style:{textAlign:"center"}},"APLANTIDA \xa9",(new Date).getFullYear()," ",r.a.createElement("br",null)," Powered by ALIADOS")))}}]),a}(n.Component);i.a.render(r.a.createElement(o.a,null,r.a.createElement(j,null,r.a.createElement(ze,null))),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.cca1558d.chunk.js.map