"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[717],{717:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(434),a=n(233),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i=n(439),o="contactForm_formEl__9cL+j",s=n(791),u=n(184),l=function(){var e=(0,r.I0)(),t=(0,s.useState)(""),n=(0,i.Z)(t,2),l=n[0],d=n[1],f=(0,s.useState)(""),m=(0,i.Z)(f,2),h=m[0],v=m[1],x=function(e){var t=e.target,n=t.name,r=t.value;"name"===n?d(r):"number"===n&&v(r)};return(0,u.jsxs)("form",{className:o,onSubmit:function(t){if(t.preventDefault(),""!==l.trim()){var n={id:c(),name:l,number:h};e((0,a.xf)(n)),d(""),v("")}},children:[(0,u.jsx)("label",{children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:l,onChange:x}),(0,u.jsx)("label",{children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:h,onChange:x}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})},d="contactList_btnDelete__AtZgl",f=function(){var e=(0,r.v9)(a.DI),t=(0,r.I0)();return(0,u.jsx)("ul",{children:e.map((function(e){return(0,u.jsxs)("li",{children:[e.name,": ",e.number,(0,u.jsx)("button",{className:d,onClick:function(){return n=e.id,void t((0,a.GK)(n));var n},children:"Delete"})]},e.id)}))})},m="filter_filterDiv__xdMQV",h=function(){var e=(0,r.v9)((function(e){return e.contacts.filter})),t=(0,r.I0)();return(0,u.jsxs)("div",{className:m,children:[(0,u.jsx)("label",{children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",value:e,onChange:function(e){t((0,a.Tv)(e.target.value))}})]})},v=function(){var e=(0,r.v9)((function(e){return e.contacts.contacts})),t=(0,r.v9)((function(e){return e.contacts.filter})),n=(0,r.I0)();(0,s.useEffect)((function(){n((0,a.yF)())}),[n]);var i=(0,r.v9)((function(e){return e.contacts.filteredContacts}));return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(l,{onAddContact:function(t,r){if(""===t.trim())return alert("no text in input");if(e.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("'".concat(t,"' is already in contacts."));var i={id:c(),name:t,number:r};n((0,a.xf)(i))}})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(h,{value:t,onChange:function(e){n((0,a.Tv)(e))}}),(0,u.jsx)(f,{contacts:i,onDeleteContact:function(e){n((0,a.GK)(e))}})]})]})}}}]);
//# sourceMappingURL=717.e4459fe5.chunk.js.map