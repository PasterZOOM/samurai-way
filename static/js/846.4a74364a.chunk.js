"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[846],{7237:function(e,n,s){s.r(n),s.d(n,{ProfileForRedirect:function(){return X},default:function(){return q}});var t=s(2791),i="Profile_content__jp0a7",r=s.p+"static/media/userPhoto.4e632004c20243965a03.png",o="Profile_mainPhoto__9zE8L",c="Profile_aboutMe__yF8E5",a="Profile_contact__BsWkL",l=s(7300),u=function(e){return e.profilePage.posts},d=function(e){return e.profilePage.profile},f=function(e){return e.profilePage.status},j=s(885),x=s(5022),h=s(1313),m=s(184),v=function(){var e=(0,h.T)(),n=(0,h.C)(f),s=(0,t.useState)(!1),i=(0,j.Z)(s,2),r=i[0],o=i[1],c=(0,t.useState)(n),a=(0,j.Z)(c,2),l=a[0],u=a[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Status: "}),!r&&(0,m.jsx)("span",{onDoubleClick:function(){o(!0),u(n)},children:n||"No Status"}),r&&(0,m.jsx)("input",{value:l||"",onChange:function(e){u(e.currentTarget.value)},onBlur:function(n){e((0,x.Nf)(n.currentTarget.value)),o(!1)}})]})},p=s(2525),g=s(6871),b=function(){var e=(0,h.T)(),n=(0,h.C)(d),s=(0,h.C)(p.zv),t=(0,g.UO)().userId;if(!n)return(0,m.jsx)(l.Z,{});return(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:n.photos.large||r,alt:"avatar",className:o}),Number(t)===s&&(0,m.jsx)("input",{type:"file",onChange:function(n){n.target.files&&n.target.files.length&&e((0,x.tU)(n.target.files[0]))}}),(0,m.jsx)(v,{}),(0,m.jsx)(k,{profile:n})]})},k=function(e){var n=e.profile;return(0,m.jsxs)("div",{className:c,children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Full name"}),": ",n.fullName]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job"}),": ",n.lookingForAJob?"yes":"no"]}),n.lookingForAJob&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My professional skills"}),": ",n.lookingForAJobDescription]})]}),(0,m.jsx)("b",{children:"About me:"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts:"}),Object.keys(n.contacts).map((function(e){return(0,m.jsx)(P,{contactTitle:e,contactValue:n.contacts[e]},e)}))]})]})},P=function(e){var n=e.contactTitle,s=e.contactValue;return(0,m.jsxs)("div",{className:a,children:[(0,m.jsx)("b",{children:n}),": ",s]})},_=s(2982),C="MyPosts_content__VkFSJ",N={},y=s(2381),F=s(6139),T=s(704),S=s(1117),w=s(3079),M=function(){var e=(0,h.T)();return(0,m.jsx)("div",{className:N.content,children:(0,m.jsx)(Z,{onSubmit:function(n){e((0,x.Pi)(n.newPostText)),e((0,y.mc)("profileAddNewPostFormRedux"))}})})},Z=(0,T.Z)({form:"profileAddNewPostFormRedux"})((function(e){return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(F.Z,{name:"newPostText",component:S.g,placeholder:"New post text",validate:[w.C1,w.Bq]})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"New Post"})})]})})),A="Post_content__zTnjZ",J=t.memo((function(e){var n=e.id,s=e.message,t=e.likes,i=(0,h.T)();return(0,m.jsxs)("div",{className:A,children:[(0,m.jsx)("img",{src:"https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/MqXj-7Skelx32X1KmSmMCnSC5Fi6VIPMDvj4Y0fCyy8keZMLHM2LXsmCEh55rfocJevsF7cthbjk56UqJmtgaXPM.jpg?size=200x200&quality=95&crop=295,99,996,996&ava=1",alt:""}),(0,m.jsx)("span",{children:s}),(0,m.jsxs)("span",{children:["  Likes ",t]}),(0,m.jsx)("button",{onClick:function(){i((0,x.Uc)(n))},children:"X"})]})})),L=function(){var e=(0,h.C)(u);return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)(M,{}),(0,_.Z)(e).reverse().map((function(e){return(0,m.jsx)(J,{id:e.id,message:e.message,likes:e.likes},e.id)}))]})},U=s(3590),X=function(){var e=(0,h.T)(),n=(0,g.UO)(),s=(0,h.C)(p.Od),t=n.userId;return t&&e((0,x.et)(+t)),t&&e((0,x.lR)(+t)),s?(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)(b,{}),(0,m.jsx)(L,{})]}):(0,m.jsx)(g.Fg,{to:"/login"})},q=(0,U.D)(X)}}]);
//# sourceMappingURL=846.4a74364a.chunk.js.map