(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{40:function(e,t,n){},79:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),i=n(24),o=n.n(i),c=n(10),l=n(4),h=n(5),u=n(7),d=n(6),p=n(13),j=n(27),b=n(9),m=n.n(b),g=new(function(){function e(){Object(l.a)(this,e),this.auth=m.a.create({baseURL:"https://travel-guru.herokuapp.com",withCredentials:!0})}return Object(h.a)(e,[{key:"signup",value:function(e,t,n,a,r){return console.log("stringname",e,"stringusername",t,"stringemail",n,"stringpassword",a,"stringimage",r),this.auth.post("/auth/signup",{name:e,username:t,email:n,password:a,image:r}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),v=s.a.createContext(),O=v.Consumer,x=v.Provider,f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n,a,r,s){g.signup(t,n,a,r,s).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){g.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){g.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,r=e.user,s=this.signup,i=this.login,o=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(x,{value:{isLoggedIn:t,isLoading:n,user:r,signup:s,login:i,logout:o},children:this.props.children})}}]),n}(s.a.Component),y=function(e){return function(t){Object(u.a)(r,t);var n=Object(d.a)(r);function r(){return Object(l.a)(this,r),n.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var t=this;return Object(a.jsx)(O,{children:function(n){var r=n.isLoggedIn,s=n.isLoading,i=n.user,o=n.signup,c=n.login,l=n.logout;return Object(a.jsx)(e,Object(j.a)(Object(j.a)({},t.props),{},{isLoggedIn:r,isLoading:s,user:i,signup:o,login:c,logout:l}))}})}}]),r}(s.a.Component)},C=n(102),k=n(103),L=n(101),w=(n(79),y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(C.a,{className:"ourNavbar",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(a.jsx)(C.a.Brand,{href:"/",children:"Travel Guru"}),Object(a.jsx)(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsx)(C.a.Collapse,{id:"responsive-navbar-nav",children:this.props.isLoggedIn?Object(a.jsxs)(k.a,{className:"mr-auto",children:[Object(a.jsx)(k.a.Link,{href:"/dashboard",children:"Search"}),Object(a.jsx)(k.a.Link,{href:"/profile/".concat(this.props.user._id),children:"Profile"}),Object(a.jsxs)(L.a,{title:"Travel Posts",id:"collasible-nav-dropdown",children:[Object(a.jsx)(L.a.Item,{href:"/myPosts/".concat(this.props.user._id),children:"My Travel posts"}),Object(a.jsx)(L.a.Item,{href:"/createPost",children:"Create Travel Posts"})]}),Object(a.jsx)(k.a.Link,{href:"/favoritePosts/".concat(this.props.user._id),children:"My Favorites"}),Object(a.jsx)(k.a.Link,{href:"/travelLogs",children:"My Travel Log"}),Object(a.jsx)(k.a.Link,{onClick:this.props.logout,children:"Logout"})]}):Object(a.jsxs)(k.a,{className:"mr-auto",children:[Object(a.jsx)(k.a.Link,{href:"/signup",children:"Sign Up"}),Object(a.jsx)(k.a.Link,{href:"/login",children:"Login"})]})})]})}}]),n}(r.Component))),S=(n(85),y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("p",{children:"Copyright \xa9 2020 Travel Guru "})})}}]),n}(s.a.Component)));n(86),n(40);var A=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"header-img"}),Object(a.jsx)("div",{className:"header-title",children:Object(a.jsx)("h1",{children:"Travel Guru"})})]}),Object(a.jsxs)("section",{className:"landing-buttons",children:[Object(a.jsx)(c.b,{to:"/signup",children:Object(a.jsx)("button",{className:"buttons",children:"Sign Up"})}),Object(a.jsx)(c.b,{to:"login",children:Object(a.jsx)("button",{className:"buttons",children:"Login"})})]}),Object(a.jsxs)("section",{className:"about-us",children:[Object(a.jsx)("h4",{children:"What is Travel Guru?"}),Object(a.jsx)("p",{children:"Have you ever been on holiday and forgotten where you have been exactly and what you have done? Also, looking for some inspiration? Join our community and search for travel ideas and keep a record of all your travel memories. Travel experiences should never be forgotten!"})]})]})},I=n(14),F=(n(90),y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",username:"",email:"",password:"",image:"",imageReady:!1},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.username,s=n.email,i=n.password,o=n.image;o?e.props.signup(a,r,s,i,o):e.props.signup(a,r,s,i)},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("image",n),m.a.post("".concat("https://travel-guru.herokuapp.com","/auth/upload"),a,{withCredentials:!0}).then((function(t){e.setState({image:t.data.secure_url,isReady:!0})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.username,r=e.email,s=e.password;e.image;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"signup-header",children:Object(a.jsx)("h1",{children:"Sign Up"})}),Object(a.jsxs)("form",{className:"signup-form",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:n,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"text",name:"email",value:r,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:s,onChange:this.handleChange}),Object(a.jsx)("label",{className:"image-label",children:"Image:"}),Object(a.jsx)("input",{id:"image-upload",type:"file",onChange:this.handleFileUpload}),Object(a.jsx)("button",{className:"form-button",type:"submit",value:"Signup",disabled:!this.state.isReady,children:"Sign Up"})]}),Object(a.jsxs)("div",{className:"existing-account",children:[Object(a.jsx)("h4",{children:"Already have an account?"}),Object(a.jsxs)(c.b,{to:"/login",children:[" ",Object(a.jsx)("h5",{children:"Login"})]})]})]})}}]),n}(r.Component))),P=(n(91),y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.login(a,r)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsx)("div",{className:"login-header",children:Object(a.jsx)("h1",{children:"Login"})}),Object(a.jsxs)("form",{className:"login-form",onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("button",{className:"form-button",type:"submit",value:"Login",children:"Login"}),Object(a.jsxs)("div",{className:"existing-account",children:[Object(a.jsx)("h4",{children:"Don't have an account?"}),Object(a.jsx)(c.b,{exact:!0,to:"/signup",children:Object(a.jsx)("h5",{children:"Sign Up"})})]})]})]})}}]),n}(r.Component))),T=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",username:"",nationality:"",email:"",myFavoriteTrip:"",description:"",image:"",_id:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;m.a.get("".concat("https://travel-guru.herokuapp.com","/api/profile/").concat(t),{withCredentials:!0}).then((function(t){var n=t.data,a=n.name,r=n.username,s=n.nationality,i=n.email,o=n.myFavoriteTrip,c=n.description,l=n.image,h=n._id;e.setState({name:a,username:r,nationality:s,email:i,myFavoriteTrip:o,description:c,image:l,_id:h})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:this.state.image,alt:"User profile"}),Object(a.jsxs)("h2",{children:["name ",this.state.name]}),Object(a.jsx)(c.b,{to:{pathname:"/editProfile/".concat(this.state._id),state:{userInfo:this.state}},children:"Edit Profile"})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["email ",this.state.email]}),Object(a.jsxs)("p",{children:["username ",this.state.username]}),Object(a.jsxs)("p",{children:["nationality ",this.state.nationality]}),Object(a.jsxs)("p",{children:["fav trip ",this.state.myFavoriteTrip]}),Object(a.jsxs)("p",{children:["description ",this.state.description]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(c.b,{exact:!0,to:"/favoritePosts/".concat(this.state._id),children:Object(a.jsx)("button",{children:"Favorite Posts"})}),Object(a.jsx)(c.b,{exact:!0,to:"/createPost",children:Object(a.jsx)("button",{children:"Create a Post"})}),Object(a.jsx)(c.b,{exact:!0,to:"/travelLogs",children:Object(a.jsx)("button",{children:"Travel Log"})})]})]})}}]),n}(s.a.Component));var D=y((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,s=e.exact,i=e.path;return n?"Loading":Object(a.jsx)(p.b,{exact:s,path:i,render:function(e){return t?Object(a.jsx)(p.a,{to:"/dashboard"}):t?void 0:Object(a.jsx)(r,Object(j.a)({},e))}})}));var _=y((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,s=e.exact,i=e.path;return n?"Loading":Object(a.jsx)(p.b,{exact:s,path:i,render:function(e){return t?t?Object(a.jsx)(r,Object(j.a)({},e)):void 0:Object(a.jsx)(p.a,{to:"/login"})}})})),N=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:void 0,username:void 0,nationality:void 0,myFavoriteTrip:void 0,description:void 0,image:void 0,isReady:!0},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.username,s=n.nationality,i=n.myFavoriteTrip,o=n.description,c=n.image,l=e.props.match.params.userId;m.a.put("".concat("https://travel-guru.herokuapp.com","/api/editProfile/").concat(l),{name:a,username:r,nationality:s,myFavoriteTrip:i,description:o,image:c},{withCredentials:!0}).then((function(){e.props.history.push("/profile/".concat(l))})).catch((function(e){return console.log(e)}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("image",n),e.setState({isReady:!1},(function(){m.a.post("".concat("https://travel-guru.herokuapp.com","/api/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({image:t.data.secure_url,isReady:!0})})).catch((function(e){console.log("Error while uploading the file: ",e)}))}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.location.state?this.setState({name:this.props.location.state.userInfo.name,username:this.props.location.state.userInfo.username,nationality:this.props.location.state.userInfo.nationality,myFavoriteTrip:this.props.location.state.userInfo.myFavoriteTrip,description:this.props.location.state.userInfo.description,image:this.props.location.state.userInfo.image}):this.props.history.push("/profile/".concat(e))}},{key:"render",value:function(){return console.log("object",this.props.location.state),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:this.state.image,alt:"User profile"}),Object(a.jsx)("h2",{children:this.state.name})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Nationality:"}),Object(a.jsx)("input",{type:"text",name:"nationality",value:this.state.nationality,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Favorite Trip:"}),Object(a.jsx)("input",{type:"text",name:"myFavoriteTrip",value:this.state.myFavoriteTrip,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("textarea",{name:"description",value:this.state.description,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Image"}),Object(a.jsx)("input",{name:"image",type:"file",onChange:this.handleFileUpload}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{style:{width:"100px"},src:this.state.image&&this.state.image,alt:""})}),Object(a.jsx)("button",{type:"submit",disabled:!this.state.isReady,children:"Submit"})]})}),this.props.location.state.userInfo?Object(a.jsx)("div",{children:Object(a.jsx)(c.b,{to:"/deleteProfileConfirmation/".concat(this.props.location.state.userInfo._id),children:"Delete Account"})}):null]})}}]),n}(s.a.Component)),U=n(56),R=(n(92),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleSearch=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(I.a)({},r,a)),e.props.filteredPostsSearch(a)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"searchbar",children:Object(a.jsx)("input",{type:"text",placeholder:"Search by Country/City...",name:"search",value:this.state.search,onChange:this.handleSearch})})}}]),n}(s.a.Component)),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(c.b,{to:"/postDetails/".concat(this.props.post._id),children:[Object(a.jsx)("h2",{children:this.props.post.title}),Object(a.jsx)("h3",{children:this.props.post.country}),Object(a.jsx)("h4",{children:this.props.post.city})]})})}}]),n}(s.a.Component),H=(n(93),y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={postArray:[],search:[]},e.filteredPost=function(t){var n=Object(U.a)(e.state.postArray).filter((function(e){var n=t.toLowerCase(),a=e.country.toLowerCase(),r=e.city.toLowerCase();return a.includes(n)||r.includes(n)}));e.setState({search:n})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get("".concat("https://travel-guru.herokuapp.com","/api/dashboard"),{withCredentials:!0}).then((function(t){e.setState({postArray:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"header-img"}),Object(a.jsx)("div",{className:"header-searchbar",children:Object(a.jsx)(R,{postSearch:this.state.postArray,filteredPostsSearch:this.filteredPost})})]}),this.state.search[0]?this.state.search.map((function(e){return Object(a.jsx)(M,{post:e})})):this.state.postArray.map((function(e){return Object(a.jsx)(M,{post:e})}))]})}}]),n}(s.a.Component))),E=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:this.props.postDetails.commentAuthor.username}),Object(a.jsx)("p",{children:this.props.postDetails.description})]})}}]),n}(s.a.Component)),q=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={description:void 0,isRender:!1},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(){return e.props.handleFormSubmit(e.state.description)},children:[Object(a.jsx)("textarea",{name:"description",value:this.state.description,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",children:"Send"})]})})}}]),n}(s.a.Component)),G=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={postDetails:"",postAuthor:"",commentsArray:[],isActive:!1},e.getPost=function(){var t=e.props.match.params.postId;m.a.get("".concat("https://travel-guru.herokuapp.com","/api/post/").concat(t),{withCredentials:!0}).then((function(t){e.setState({postDetails:t.data,postAuthor:t.data.postAuthor.name,commentsArray:t.data.comments})})).catch((function(e){return console.log(e)}))},e.handleFavorite=function(){var t=e.props.match.params.postId,n=e.props.user._id;console.log("usr",n),m.a.post("".concat("https://travel-guru.herokuapp.com","/api/favoritePost/add/").concat(t,"/").concat(n),{withCredentials:!0}).then((function(t){console.log("response comment",t),e.props.history.push("/favoritePosts/".concat(e.props.user._id))})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){var n=e.props.match.params.postId;m.a.post("".concat("https://travel-guru.herokuapp.com","/api/createComment/").concat(n),{description:t},{withCredentials:!0}).then((function(t){console.log("response",t),e.getPost()})).catch((function(e){return console.log(e)}))},e.handleToggle=function(){e.setState({isActive:!e.state.isActive})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getPost()}},{key:"render",value:function(){var e=this.state.postDetails,t=e.title,n=e.image,r=e.country,s=e.city,i=e.description;e.updated_at;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("img",{src:n,alt:"a photo of this post"}),Object(a.jsx)("h2",{children:r}),Object(a.jsx)("h3",{children:s}),Object(a.jsx)("p",{children:i}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:this.state.postAuthor}),this.state.postDetails.updated_at?this.state.postDetails.updated_at.slice(0,10).split("-").reverse().join("-"):null]}),Object(a.jsx)("button",{type:"submit",onClick:this.handleFavorite,children:"Save to Favorites"}),Object(a.jsx)("button",{onClick:this.handleToggle,children:"Write a comment"}),this.state.isActive?Object(a.jsx)(q,{handleFormSubmit:this.handleFormSubmit}):null,this.state.commentsArray.map((function(e){return Object(a.jsx)(E,{postDetails:e})}))]})}}]),n}(s.a.Component)),Y=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={postsArr:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;this.setState({userId:t}),m.a.get("".concat("https://travel-guru.herokuapp.com","/api/myPosts/").concat(t),{withCredentials:!0}).then((function(t){console.log("reponse",t);var n=t.data;e.setState({postsArr:n})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[this.state.postsArr&&this.state.postsArr.length>0?this.state.postsArr.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{post:e}),Object(a.jsx)(c.b,{exact:!0,to:{pathname:"/editPost/".concat(e._id),state:{post:e}},children:Object(a.jsx)("button",{children:"Edit Post"})})]})})):Object(a.jsxs)("p",{children:["You don't have any Travel Posts. Create one"," ",Object(a.jsx)(c.b,{exact:!0,to:"/createPost",children:"here!"})]}),Object(a.jsx)("div",{})]})}}]),n}(s.a.Component)),J=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:void 0,country:void 0,city:void 0,description:void 0,image:void 0,isReady:!1},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.title,r=n.country,s=n.city,i=n.description,o=n.image;e.props.match.params.userId;console.log("userId",e.props),m.a.post("".concat("https://travel-guru.herokuapp.com","/api/createPost"),{title:a,country:r,city:s,description:i,image:o},{withCredentials:!0}).then((function(){e.props.history.push("/myPosts/".concat(e.props.user._id))})).catch((function(e){return console.log(e)}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("image",n),m.a.post("".concat("https://travel-guru.herokuapp.com","/api/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({image:t.data.secure_url,isReady:!0})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Create a Post"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Title:"}),Object(a.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{children:"Country:"}),Object(a.jsx)("input",{type:"text",name:"country",value:this.state.country,onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{children:"City:"}),Object(a.jsx)("input",{type:"text",name:"city",value:this.state.city,onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("textarea",{name:"description",value:this.state.description,onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{children:"Image"}),Object(a.jsx)("input",{name:"image",type:"file",onChange:this.handleFileUpload,required:!0}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{style:{width:"100px"},src:this.state.image&&this.state.image,alt:""})}),Object(a.jsx)("input",{type:"submit",value:"Submit",disabled:!this.state.isReady})]})})]})}}]),n}(s.a.Component)),B=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:void 0,country:void 0,city:void 0,description:void 0,image:void 0,isReady:!0},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.title,r=n.country,s=n.city,i=n.description,o=n.image,c=e.props.match.params.postId;m.a.put("".concat("https://travel-guru.herokuapp.com","/api/editPost/").concat(c),{title:a,country:r,city:s,description:i,image:o},{withCredentials:!0}).then((function(){e.props.history.push("/myPosts/".concat(e.props.user._id))})).catch((function(e){return console.log(e)}))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("image",n),e.setState({isReady:!1},(function(){m.a.post("".concat("https://travel-guru.herokuapp.com","/api/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({image:t.data.secure_url,isReady:!0})})).catch((function(e){console.log("Error while uploading the file: ",e)}))}))},e.deleteHandler=function(){var t=e.props.match.params.postId,n=e.props.user._id;m.a.delete("".concat("https://travel-guru.herokuapp.com","/api/deletePost/").concat(t),{withCredentials:!0}).then((function(t){console.log("reponse",t),e.props.history.push("/myPosts/".concat(n))})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;m.a.get("".concat("https://travel-guru.herokuapp.com","/api/post/").concat(t),{withCredentials:!0}).then((function(t){var n=t.data,a=n.title,r=n.country,s=n.city,i=n.description,o=n.image;e.setState({title:a,country:r,city:s,description:i,image:o})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Edit Post"})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Title:"}),Object(a.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Country:"}),Object(a.jsx)("input",{type:"text",name:"country",value:this.state.country,onChange:this.handleChange}),Object(a.jsx)("label",{children:"City:"}),Object(a.jsx)("input",{type:"text",name:"city",value:this.state.city,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("textarea",{name:"description",value:this.state.description,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Image"}),Object(a.jsx)("input",{name:"image",type:"file",onChange:this.handleFileUpload}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{style:{width:"100px"},src:this.state.image&&this.state.image,alt:""})}),Object(a.jsx)("input",{type:"submit",value:"Submit",disabled:!this.state.isReady})]}),Object(a.jsx)("button",{onClick:this.deleteHandler,children:"Delete"})]})]})}}]),n}(s.a.Component)),W=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:this.props.travelLog.title}),this.props.travelLog.updated_at?Object(a.jsx)("h4",{children:this.props.travelLog.updated_at.slice(0,10).split("-").reverse().join("-")}):null,Object(a.jsx)("h3",{children:this.props.travelLog.country}),Object(a.jsx)("h4",{children:this.props.travelLog.city}),Object(a.jsx)("p",{children:this.props.travelLog.description}),Object(a.jsx)("button",{onClick:function(){return e.props.deleteHandler(e.props.travelLog._id)},children:"Delete"})]})}}]),n}(s.a.Component)),z=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={travelLogsArr:[]},e.getTravelLogs=function(){m.a.get("".concat("https://travel-guru.herokuapp.com","/api/travelLogs"),{withCredentials:!0}).then((function(t){console.log("reponse",t);var n=t.data;e.setState({travelLogsArr:n})})).catch((function(e){return console.log(e)}))},e.deleteHandler=function(t){m.a.delete("".concat("https://travel-guru.herokuapp.com","/api/deleteTravelLog/").concat(t),{withCredentials:!0}).then((function(t){console.log("reponse",t),e.getTravelLogs()})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getTravelLogs()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"My Travel Log"}),Object(a.jsx)("div",{children:Object(a.jsx)(c.b,{exact:!0,to:"/createTravelLog",children:Object(a.jsx)("button",{children:"Create Travel Log"})})}),this.state.travelLogsArr?this.state.travelLogsArr.map((function(t){return Object(a.jsx)("div",{children:Object(a.jsx)(W,{travelLog:t,deleteHandler:e.deleteHandler})})})):null]})}}]),n}(s.a.Component)),K=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:void 0,country:void 0,city:void 0,description:void 0},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(I.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.title,r=n.country,s=n.city,i=n.description;console.log("userId",e.props),m.a.post("".concat("https://travel-guru.herokuapp.com","/api/createTravelLog"),{title:a,country:r,city:s,description:i},{withCredentials:!0}).then((function(){e.props.history.push("/travelLogs")})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Create Travel Log Entry"})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Title:"}),Object(a.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{children:"Country:"}),Object(a.jsx)("input",{type:"text",name:"country",value:this.state.country,onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{children:"City:"}),Object(a.jsx)("input",{type:"text",name:"city",value:this.state.city,onChange:this.handleChange,required:!0}),Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("textarea",{name:"description",value:this.state.description,onChange:this.handleChange,required:!0}),Object(a.jsx)("input",{type:"submit",value:"Save"})]}),Object(a.jsx)(c.b,{exact:!0,to:"/travelLogs",children:Object(a.jsx)("button",{children:"Go back to your Travel Logs"})})]})]})}}]),n}(s.a.Component)),Q=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).deleteHandler=function(){var t=e.props.user._id;m.a.delete("".concat("https://travel-guru.herokuapp.com","/api/deleteProfileConfirmation/").concat(t),{withCredentials:!0}).then((function(t){console.log("reponse",t),e.props.logout()})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log("props",this.props),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Delete Your Account"}),Object(a.jsx)("p",{children:"Are you sure you want to delete your account? This will permanently erase your profile and all your posts"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:this.deleteHandler,children:"Delete"}),Object(a.jsx)(c.b,{to:"/profile/".concat(this.props.user._id),children:Object(a.jsx)("button",{children:"Cancel"})})]})]})}}]),n}(s.a.Component)),V=y(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={favoritesArr:[]},e.getFavorites=function(){var t=e.props.user._id;m.a.get("".concat("https://travel-guru.herokuapp.com","/api/favoritePosts/").concat(t),{withCredentials:!0}).then((function(t){console.log("reponse",t.data);var n=t.data;e.setState({favoritesArr:n})})).catch((function(e){return console.log(e)}))},e.deleteHandler=function(t){m.a.delete("".concat("https://travel-guru.herokuapp.com","/api/deleteFavorite/").concat(t),{withCredentials:!0}).then((function(t){console.log("reponse",t),e.getFavorites()})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getFavorites()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"My Favorite Posts"}),this.state.favoritesArr&&this.state.favoritesArr.length>0?this.state.favoritesArr.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{post:t}),Object(a.jsx)("button",{onClick:function(){return e.deleteHandler(t._id)},children:"Delete"})]})})):Object(a.jsxs)("p",{children:["You don't have any favorites \ud83d\udc94 You can add more favorites by searching for travel posts ",Object(a.jsx)(c.b,{exact:!0,to:"/dashboard",children:"here"})]}),Object(a.jsx)("div",{})]})}}]),n}(s.a.Component)),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return console.log("props",this.props),Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(D,{exact:!0,path:"/",component:A}),Object(a.jsx)(D,{exact:!0,path:"/signup",component:F}),Object(a.jsx)(D,{exact:!0,path:"/login",component:P}),Object(a.jsx)(_,{exact:!0,path:"/profile/:userId",component:T}),Object(a.jsx)(_,{exact:!0,path:"/editProfile/:userId",component:N}),Object(a.jsx)(_,{exact:!0,path:"/dashboard",component:H}),Object(a.jsx)(_,{exact:!0,path:"/postDetails/:postId",component:G}),Object(a.jsx)(_,{exact:!0,path:"/myPosts/:userId",component:Y}),Object(a.jsx)(_,{exact:!0,path:"/createPost",component:J}),Object(a.jsx)(_,{exact:!0,path:"/editPost/:postId",component:B}),Object(a.jsx)(_,{exact:!0,path:"/travelLogs",component:z}),Object(a.jsx)(_,{exact:!0,path:"/createTravelLog",component:K}),Object(a.jsx)(_,{exact:!0,path:"/deleteProfileConfirmation/:userId",component:Q}),Object(a.jsx)(_,{exact:!0,path:"/favoritePosts/:userId",component:V})]}),Object(a.jsx)(S,{})]})}}]),n}(r.Component);n(94);o.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(f,{children:Object(a.jsx)(X,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.294f53b9.chunk.js.map