"use strict";(self.webpackChunkgrocerymenus=self.webpackChunkgrocerymenus||[]).push([[828],{945:function(n,e,t){t.d(e,{Z:function(){return c}});t(7313);var r,i=t(168),a=t(3282).ZP.label(r||(r=(0,i.Z)(["\n   display: inline-flex;\n   align-items: center;\n   gap: 0.75rem;\n   cursor: pointer;\n   user-select: none;\n\n   p {\n      color: ",";\n\n      a {\n         color: ",";\n         font-weight: 550;\n      }\n   }\n\n   @media screen and (max-width: 350px) {\n      flex-wrap: wrap;\n      justify-content: center;\n   }\n"])),(function(n){return n.theme.text.main.para}),(function(n){return n.theme.back.accent})),o=t(6417);function c(n){var e=n.children,t=n.handler;return(0,o.jsxs)(a,{children:[(0,o.jsx)("input",{type:"checkbox",onInput:function(n){if(!t)return!1;t(n)},required:!0}),(0,o.jsx)("p",{children:e})]})}},479:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(1413);function i(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}t(7313);var a=t(3765),o=t(6417),c=["value","name","type","none","handler"];function s(n){var e=n.value,t=n.name,s=n.type,d=n.none,u=n.handler,l=i(n,c);return(0,o.jsxs)(a.v$,{children:[(0,o.jsx)(a.fS,(0,r.Z)({type:s,onChange:u,none:d,placeholder:t,spellCheck:"false",autoComplete:"off",value:e,required:!0,"data-on":Boolean(e)},l)),(0,o.jsx)(a.Qk,{children:t})]})}},8011:function(n,e,t){t.d(e,{Z:function(){return c}});t(7313);var r,i=t(168),a=t(3282).ZP.h1(r||(r=(0,i.Z)(["\n   padding: 5rem 0;\n   font-size: 4.5rem;\n   line-height: 1;\n   font-weight: 400;\n   color: ",";\n   font-family: 'Bungee Inline', cursive;\n\n   span {\n      color: ",";\n      font-size: inherit;\n      line-height: inherit;\n      font-family: inherit;\n      font-weight: inherit;\n   }\n\n   @media screen and (max-width: 450px) {\n      font-size: 4rem;\n   }\n\n   @media screen and (max-width: 400px) {\n      font-size: 3.5rem;\n   }\n\n   @media screen and (max-width: 350px) {\n      font-size: 3rem;\n   }\n"])),(function(n){return n.theme.text.main.head}),(function(n){return n.theme.back.accent})),o=t(6417);function c(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},9828:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i=t(885),a=t(3560),o=t(3091),c=t(479),s=t(945),d=t(8011),u=t(7313),l=t(2524),m=t(168),h=t(3282),f=h.ZP.span(r||(r=(0,m.Z)(["\n   width: 100%;\n   height: auto;\n   aspect-ratio: 2/1.1;\n   border: 0.2rem solid ",";\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   transition: 0.1s ease;\n   border-radius: 1rem;\n   cursor: pointer;\n\n   svg {\n      pointer-events: none;\n      height: 50%;\n      width: auto;\n      opacity: 0.9;\n      color: inherit;\n      transition: 0.1s ease;\n      color: ",";\n   }\n\n   &:hover {\n      background-color: ",";\n\n      svg {\n         color: ",";\n      }\n   }\n\n   &:active {\n      transform: scale(0.95);\n   }\n\n   @media screen and (max-width: 600px) {\n      width: 8rem;\n   }\n"])),(function(n){return n.theme.back.accent}),(function(n){return n.theme.back.accent}),(function(n){return n.theme.back.accent}),(function(n){return n.theme.back.page})),p=t(6417);function g(n){var e=n.icon,t=n.handler;return(0,p.jsx)(f,{onClick:t,children:(0,p.jsx)(l.JO,{icon:e})})}var x=t(1909),v=t(7700),w=(0,v.v0)();function b(n){var e=a.Am.loading("Wait... Connecting to the server!");(0,v.rh)(w,n).then((function(n){a.Am.update(e,{render:"Signed in! Now getting access token...!"}),(0,x.Z)(n,e)})).catch((function(n){var t={render:n.message,type:"error",isLoading:!1,autoClose:3e3};a.Am.update(e,t)}))}var y=new v.GH;var j=new v.hJ;var Z=new v._O;var k,P=new v.O4("microsoft.com");var C=h.ZP.div(k||(k=(0,m.Z)(["\n   width: 100%;\n   display: grid;\n   grid-template-columns: repeat(4, 1fr);\n   gap: 2.5rem;\n\n   @media screen and (max-width: 600px) {\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 2rem;\n   }\n"])));function z(){return(0,p.jsxs)(C,{children:[(0,p.jsx)(g,{icon:"cib:google",handler:function(){b(j)}}),(0,p.jsx)(g,{icon:"cib:microsoft",handler:function(){b(P)}}),(0,p.jsx)(g,{icon:"cib:facebook-f",handler:function(){b(Z)}}),(0,p.jsx)(g,{icon:"cib:github",handler:function(){b(y)}})]})}var O=(0,v.v0)();var S,A,I,N=t(8358),U=t(5660),B=t(9466),F=t(7890),L=h.ZP.div(S||(S=(0,m.Z)(["\n   width: 100%;\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   gap: 1rem;\n   flex-wrap: wrap;\n\n   a {\n      color: ",";\n      font-weight: 550;\n      text-transform: capitalize;\n      transition: 0.1s ease;\n\n      &:hover {\n         opacity: 0.85;\n      }\n\n      &:active {\n         transform: scale(0.95);\n      }\n   }\n"])),(function(n){return n.theme.back.accent})),T=h.ZP.div(A||(A=(0,m.Z)(["\n   width: 70%;\n   display: flex;\n   align-items: center;\n   gap: 1rem;\n   padding: 2.5rem 0;\n\n   .text {\n      display: inline-block;\n      font-size: 1.5rem;\n      font-weight: 550;\n      color: ",";\n      text-transform: uppercase;\n      line-height: 1;\n      opacity: 0.7;\n   }\n\n   .line {\n      height: 0.2rem;\n      flex-grow: 1;\n      background-color: ",";\n      border-radius: 1rem;\n      opacity: 0.4;\n   }\n"])),(function(n){return n.theme.text.main.head}),(function(n){return n.theme.text.main.head})),q=h.ZP.p(I||(I=(0,m.Z)(["\n   color: ",";\n   width: 100%;\n   text-align: left;\n   font-size: 1.5rem;\n   margin-top: 2.5rem;\n\n   strong {\n      font-weight: 700;\n      font-size: inherit;\n      color: inherit;\n      line-height: inherit;\n      margin-right: 0.5rem;\n   }\n\n   a {\n      color: ",";\n      font-weight: 550;\n      font-size: inherit;\n      transition: 0.1s ease;\n\n      &:hover {\n         opacity: 0.85;\n      }\n\n      &:active {\n         transform: scale(0.95);\n      }\n   }\n"])),(function(n){return n.theme.text.main.para}),(function(n){return n.theme.back.accent})),D=t(5331);function W(){var n=(0,u.useContext)(N.x).user,e=(0,u.useState)(""),t=(0,i.Z)(e,2),r=t[0],l=t[1],m=(0,u.useState)(""),h=(0,i.Z)(m,2),f=h[0],g=h[1],w=(0,F.TH)();function b(n){return function(e){n(e.target.value)}}function y(n,e){return!!n||(a.Am.error("Please provide the ".concat(e,"!"),{autoClose:3e3}),!1)}if(n.uid){var j,Z,k=(null===w||void 0===w||null===(j=w.state)||void 0===j||null===(Z=j.from)||void 0===Z?void 0:Z.pathname)||"/";return(0,p.jsx)(F.Fg,{to:k,replace:!0})}return(0,p.jsxs)(u.Fragment,{children:[(0,p.jsx)(o.Z,{title:"Signin - Welcome Back!"}),(0,p.jsx)(D.DT,{children:(0,p.jsxs)(U.Z,{children:[(0,p.jsxs)(d.Z,{children:["signin ",(0,p.jsx)("span",{children:"form"})]}),(0,p.jsx)(D.Ur,{children:(0,p.jsxs)(D.Cd,{children:[(0,p.jsx)(D.oO,{children:"hey, welcome back!"}),(0,p.jsx)(D.Fk,{children:"Signin an Account"}),(0,p.jsxs)(D.Cc,{children:["Don't have an account? ",(0,p.jsx)(B.rU,{to:"/signup",children:"Signup"})]}),(0,p.jsxs)(D.nw,{children:[(0,p.jsx)(c.Z,{name:"your email",type:"email",handler:b(l),value:r}),(0,p.jsx)(c.Z,{name:"password",none:!0,type:"password",handler:b(g),value:f}),(0,p.jsxs)(L,{children:[(0,p.jsx)(s.Z,{children:"Keep me signed in!"}),(0,p.jsx)(B.rU,{to:"/forget",children:"forget password?"})]})]}),(0,p.jsx)(D.MI,{onClick:function(){var n=y(r,"email address"),e=y(f,"password");n&&e&&function(n){var e=n.email,t=n.password,r=a.Am.loading("Wait... Connecting to the server!");(0,v.e5)(O,e,t).then((function(n){a.Am.update(r,{render:"Signed in! Now getting access token...!"}),(0,x.Z)(n,r)})).catch((function(n){var e={render:n.message,type:"error",isLoading:!1,autoClose:3e3};a.Am.update(r,e)}))}({email:r,password:f})},children:"signin"}),(0,p.jsxs)(T,{children:[(0,p.jsx)("span",{className:"line"}),(0,p.jsx)("span",{className:"text",children:"or"}),(0,p.jsx)("span",{className:"line"})]}),(0,p.jsx)(z,{}),(0,p.jsxs)(q,{children:[(0,p.jsx)("strong",{children:"Note: "}),"By signing in you agree our ",(0,p.jsx)(B.rU,{to:"/terms",children:"Terms and Conditions!"})," Please read our"," ",(0,p.jsx)(B.rU,{to:"/privacy",children:"Privacy and Policy"})," carefully."]})]})})]})})]})}},3765:function(n,e,t){t.d(e,{Qk:function(){return l},fS:function(){return u},v$:function(){return d}});var r,i,a,o,c=t(168),s=t(3282),d=s.ZP.div(r||(r=(0,c.Z)(["\n   width: 100%;\n"]))),u=s.ZP.input(i||(i=(0,c.Z)(["\n   height: 4.6rem;\n   width: 100%;\n   border-radius: 0.75rem;\n   border: 0.2rem solid rgba(0, 0, 0, 0.4);\n   background-color: transparent;\n   padding: 0 1.5rem;\n   font-weight: 700;\n   transition: 0.2s ease;\n   color: ",";\n\n   &[data-on='true'] {\n      background-color: ",";\n\n      & + p {\n         top: 0.1rem;\n         opacity: 1;\n      }\n   }\n\n   &:focus {\n      border-color: ",";\n      background-color: ",";\n\n      & + p {\n         color: ",";\n         background-color: ",";\n      }\n   }\n\n   ","\n"])),(function(n){return n.theme.text.main.head}),(function(n){return n.theme.back.page}),(function(n){return n.theme.back.accent}),(function(n){return n.theme.back.page}),(function(n){return n.theme.text.sub.para}),(function(n){return n.theme.back.accent}),(function(n){return n.none?(0,s.iv)(a||(a=(0,c.Z)(["\n              text-transform: none;\n           "]))):null})),l=s.ZP.p(o||(o=(0,c.Z)(["\n   position: absolute;\n   pointer-events: none;\n   text-transform: capitalize;\n   transition: 0.2s ease;\n   top: 50%;\n   right: 2rem;\n   transform: translateY(-50%);\n   font-size: 1.2rem;\n   font-weight: 550;\n   color: ",";\n   background-color: ",";\n   padding: 0.35rem 0.8rem 0.45rem;\n   border-radius: 1rem;\n   line-height: 1;\n   opacity: 0;\n"])),(function(n){return n.theme.text.sub.para}),(function(n){return n.theme.text.main.para}))},5331:function(n,e,t){t.d(e,{Cb:function(){return y},Cc:function(){return w},Cd:function(){return g},DT:function(){return f},Fk:function(){return x},MI:function(){return j},Ur:function(){return p},nw:function(){return b},oO:function(){return v}});var r,i,a,o,c,s,d,u,l,m=t(168),h=t(3282),f=h.ZP.section(r||(r=(0,m.Z)(["\n   background-color: ",";\n   padding-bottom: 8rem;\n"])),(function(n){return n.theme.back.page})),p=h.ZP.article(i||(i=(0,m.Z)(["\n   padding: 8rem;\n   border-radius: 3rem;\n   overflow: hidden;\n   background-color: ",";\n\n   @media screen and (max-width: 700px) {\n      padding: 6rem;\n   }\n\n   @media screen and (max-width: 600px) {\n      padding: 5rem;\n   }\n\n   @media screen and (max-width: 500px) {\n      padding: 4rem;\n   }\n\n   @media screen and (max-width: 400px) {\n      padding: 3rem;\n   }\n"])),(function(n){return n.theme.back.card0})),g=h.ZP.div(a||(a=(0,m.Z)(["\n   width: 47rem;\n   padding: 4rem 5rem;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   flex-direction: column;\n   text-align: center;\n   background-color: rgba(255, 255, 255, 0.75);\n   margin: 0 auto;\n   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);\n   border-radius: 2rem;\n   z-index: 2;\n\n   @media screen and (max-width: 700px) {\n      width: 100%;\n   }\n\n   @media screen and (max-width: 600px) {\n      padding: 4rem;\n   }\n\n   @media screen and (max-width: 500px) {\n      padding: 3rem;\n   }\n"]))),x=h.ZP.h1(o||(o=(0,m.Z)(["\n   font-size: 3rem;\n   text-transform: none;\n   line-height: 1;\n   color: ",";\n\n   @media screen and (max-width: 400px) {\n      margin: 1rem 0;\n   }\n"])),(function(n){return n.theme.text.main.head})),v=h.ZP.p(c||(c=(0,m.Z)(["\n   font-size: 2rem;\n   text-transform: capitalize;\n   margin-bottom: 0.5rem;\n   color: ",";\n"])),(function(n){return n.theme.text.main.para})),w=h.ZP.p(s||(s=(0,m.Z)(["\n   margin-top: 1rem;\n   color: ",";\n\n   a {\n      color: ",";\n      font-weight: 550;\n      transition: 0.1s ease;\n\n      &:hover {\n         opacity: 0.85;\n      }\n\n      &:active {\n         transform: scale(0.95);\n      }\n   }\n"])),(function(n){return n.theme.text.main.para}),(function(n){return n.theme.back.accent})),b=h.ZP.div(d||(d=(0,m.Z)(["\n   padding: 3rem 0;\n   width: 100%;\n   display: flex;\n   flex-direction: column;\n   align-items: flex-start;\n   gap: 2rem;\n"]))),y=h.ZP.span(u||(u=(0,m.Z)(["\n   width: 100%;\n   display: grid;\n   grid-template-columns: repeat(2, 1fr);\n   gap: 2rem;\n\n   @media screen and (max-width: 550px) {\n      grid-template-columns: repeat(1, 1fr);\n   }\n"]))),j=h.ZP.button(l||(l=(0,m.Z)(["\n   height: 4.5rem;\n   width: 100%;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   font-size: 1.5rem;\n   text-transform: capitalize;\n   font-weight: 550;\n   background-color: ",";\n   color: ",";\n   border-radius: 10rem;\n   transition: 0.1s ease;\n\n   &:hover {\n      opacity: 0.85;\n   }\n\n   &:active {\n      transform: scale(0.95);\n   }\n"])),(function(n){return n.theme.back.accent}),(function(n){return n.theme.text.sub.head}))},1909:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(1881),i=t.n(r),a=t(3560);function o(n,e){var t=n.user.email;i().post("https://grocerymenus-1-i4533289.deta.app/token",{email:t}).then((function(n){var t=n.data.token;window.localStorage.setItem("bearer",t),a.Am.update(e,{render:"Your access token successfully added!",type:"success",isLoading:!1,autoClose:3e3})})).catch((function(n){a.Am.update(e,{render:n.message,type:"error",isLoading:!1,autoClose:3e3})}))}},3091:function(n,e,t){t.d(e,{Z:function(){return a}});t(7313);var r=t(5964),i=t(6417);function a(n){var e=n.title;return(0,i.jsx)(r.ql,{children:(0,i.jsx)("title",{children:e})})}}}]);