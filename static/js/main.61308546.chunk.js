(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var A=i(1),a=i.n(A),s=i(6),n=i.n(s),h=(i(13),i(14),[{text:"about me",link:"#about_me"},{text:"skills",link:"#skills"},{text:"projects",link:"#projects"}]),c=(i(15),i(7)),l=i.n(c),g=i(0),o=function(){var t=Object(A.useRef)(null),e=Object(A.useRef)(null),i=function(){t.current.classList.toggle("active"),e.current.classList.toggle("active")};return Object(g.jsxs)("header",{children:[Object(g.jsxs)("div",{className:"burger",onClick:i,ref:t,children:[Object(g.jsx)("div",{className:"line line1"}),Object(g.jsx)("div",{className:"line line2"}),Object(g.jsx)("div",{className:"line line3"})]}),Object(g.jsx)("ul",{className:"anchor-link-list",ref:e,children:h.map((function(t,e){return Object(g.jsx)("li",{className:"anchor-link-wrap",children:Object(g.jsx)(l.a,{href:t.link,offset:"100",className:"anchor-link-item",onClick:i,children:t.text})},e)}))})]})},r=(i(17),{name:"Alexandr Shobotenko",job:"Frontend Developer",img_path:"./me.png",social_links:[{link:"https://telegram.me/Al_ex_Ash",className:"fab fa-telegram"},{link:"https://github.com/Sane404",className:"fab fa-github"},{link:"https://www.linkedin.com/in/alexandr-shobotenko-354b37206/",className:"fab fa-linkedin"}]}),p=i.p+"static/media/me.23c31c21.png",v=function(){return Object(g.jsx)("section",{className:"hero",id:"about_me",children:Object(g.jsxs)("div",{className:"hero-wrap",children:[Object(g.jsx)("img",{src:p,alt:""}),Object(g.jsx)("div",{className:"name",children:r.name}),Object(g.jsx)("div",{className:"job",children:r.job}),Object(g.jsx)("ul",{className:"socials",children:r.social_links.map((function(t,e){return Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:t.link,children:Object(g.jsx)("i",{className:t.className})})},e)}))})]})})},m=i(3),u=i(8),d=[{title:"kyiv-more.org.ua",about:"My first commercial project.",code_link:null,site_link:"https://kyiv-more.org.ua/",coding_lang:"PHP/Wordpress",commercial:!0,img:"./assets/imgs/kyiv-more.png"},{title:"MeTube",about:"Youtube clone made with Youtube API",code_link:"https://github.com/Sane404/Youtube_clone",site_link:"https://sane404.github.io/Youtube_clone",coding_lang:"Angular",img:"./assets/imgs/youtube_clone.png"},{title:"Weather App",about:"Weather app.Use map to select a city or type in the city you would like to look at and watch the result. Made with Angular",code_link:"https://github.com/Sane404/weather_app",site_link:"https://sane404.github.io/weather_app/home",coding_lang:"Angular",img:"./assets/imgs/weather.jpg"},{title:"Halloween store",about:"Halloween themed shop with cart functionality. Made with Javascript",code_link:"https://github.com/Sane404/HalloweenShop",site_link:"https://sane404.github.io/HalloweenShop/",coding_lang:"Javascript",img:"./assets/imgs/halloween.jpg"},{title:"Task app",about:"Task App with authorization via email and password. Made with Angular/Firebase.",code_link:"https://github.com/Sane404/Task-App",site_link:"https://sane404.github.io/Task-App/",coding_lang:"Angular",img:"./assets/imgs/task.png"},{title:"Library App",about:"A library-like app where  you can add your authors to it and their work aswell. Made with Angular/Firebase",code_link:"https://github.com/Sane404/author_library",site_link:"https://sane404.github.io/author_library/main",coding_lang:"Angular",img:"./assets/imgs/library.png"},{title:"Electronics shop",about:"eShop app. Select items add them to the cart and finalize your order. Made with Angular",code_link:"https://github.com/Sane404/eShopAngular",site_link:"https://sane404.github.io/eShopAngular/shop",coding_lang:"Angular",img:"./assets/imgs/eShop.png"},{title:"Quiz App",about:"Simple quiz app. Answer general questions and get your result. Made with Javascript",code_link:"https://github.com/Sane404/SimpleQuiz",site_link:"https://sane404.github.io/SimpleQuiz/",coding_lang:"Javascript",img:"./assets/imgs/quiz.jpg"},{title:"React Cities Gallery",about:"Gallery of famous cities. Using Pixabay API and Routing",code_link:"https://github.com/Sane404/gallery",site_link:"https://sane404.github.io/gallery/",coding_lang:"React",img:"./assets/imgs/gallery.png"},{title:"Clicker Game",about:"Simplified version of the famous Cookie Clicker",code_link:"https://github.com/Sane404/clicker",site_link:"https://sane404.github.io/clicker/",coding_lang:"React",img:"./assets/imgs/clicker.png"}],x=(i(18),["All","Commercial"].concat(Object(u.a)(new Set(d.map((function(t){return t.coding_lang})))))),B=function(){var t=Object(A.useState)(d),e=Object(m.a)(t,2),i=e[0],a=e[1],s=Object(A.useState)(0),n=Object(m.a)(s,2),h=n[0],c=n[1];return Object(g.jsxs)("div",{id:"projects",children:[Object(g.jsx)("h2",{children:"Projects"}),Object(g.jsx)("div",{className:"filter",children:x.map((function(t,e){return Object(g.jsx)("button",{onClick:function(t){return function(t,e){var i,A=t.target.innerText;c(e),"All"===A?a(d):"Commercial"===A?(i=d.filter((function(t){return!0===t.commercial})),a(i)):(i=d.filter((function(t){return t.coding_lang===A})),a(i))}(t,e)},className:h===e?"btn active":"btn",children:t},e)}))}),Object(g.jsx)("div",{className:"projects_wrap",children:i.map((function(t,e){return Object(g.jsxs)("div",{className:"project_item",children:[Object(g.jsx)("img",{src:t.img,alt:"project_image",className:"project_image"}),Object(g.jsxs)("div",{className:"project_description_wrap",children:[Object(g.jsx)("div",{className:"project_title",children:t.title}),Object(g.jsx)("span",{className:"project_lang",children:t.coding_lang}),Object(g.jsx)("div",{className:"project_about",children:t.about}),Object(g.jsxs)("div",{className:"project_links",children:[t.code_link&&Object(g.jsx)("a",{href:t.code_link,children:"Check the code"}),Object(g.jsx)("a",{href:t.site_link,children:"Visit website"})]})]})]},e)}))})]})},b=(i(19),[{path:"./HTML.png",short_desc:"Solid knowledge of HTML",title:"HTML",shorthand:"HTML"},{path:"./CSS.png",short_desc:"Solid knowledge of CSS",title:"CSS",shorthand:"CSS"},{path:"./JS.png",short_desc:"Solid knowledge of Javascript",title:"Javascript",shorthand:"JS"},{path:"./A.png",short_desc:"Good knowledge of Angular",title:"Angular",shorthand:"A"},{path:"./R.png",short_desc:"Basic knowledge of React",title:"React",shorthand:"R"},{path:"./WP.png",short_desc:"Basic knowledge of Wordpress",title:"Wordpress",shorthand:"WP"},{path:"./PHP.png",short_desc:"Basic knowledge of PHP",title:"PHP",shorthand:"PHP"}]),j=i.p+"static/media/CSS.a327b6ba.png",f=[i.p+"static/media/HTML.91c24f93.png",j,"data:image/png;base64,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","data:image/png;base64,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","data:image/png;base64,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",i.p+"static/media/WP.b424d1d9.png","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA+CAIAAABsnISZAAAABmJLR0QA/wD/AP+gvaeTAAAFOElEQVR4nO2bW28bRRSAz67ttRPfkjqOnYvtJG5TkZIKaBuV0qq0KqoQUNTAA0+o6hMSPwAJiRf+CSoSEeKJSyqlVEi9SSmBkjakzaVJHDu+O8naazu2410e1uzOOhdI4nAcOt/TzuxoMzPf7pkzY4W59uUtoODBYnfgRYcKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQIYKQEaP3YEd47Cb+v0O+TpXWH/4Zwy3P3vk4Ak40982eMEvX0dTuYMu4OCFII/LolwvRjOIPakJB0+Az21VrhdjVMB/i4nTOZsblOL/4AvAXwPOvdJ+8WTnxnpRlPhscTbI338c5oWiXOlxWRmGUdp89Fbv4IWyfC3kSqGEMDoRW4iklbtHfU0bnyxJkMmV5sP8r5OxpUS2xuPZIfgCjh9u6WqzbXX31V7n++d7bgw/uzceBgCvy0rebXeayeLLfsfl077vbs8OP1gAgIFjrmarceu/67hyrvv2WOibkWlRlPY4il2DH4J8bdbtG3B69vqVvr7uQwDgdf9DYwbgg4v+JqvRZua2mf1KY4a5dMpz9XzPjjpcW5C/gEaTvqVJjelPnqdS/BrLMHYL53VZm22VGWQA3nmja3J+2etWU6BQXIgkswBg5HRdbTabmZPrWYbxua2S9p1+NJ3ghSLLMDazocNpIReSy6d9ww8C+cL6vo1yO5AFeF1WhigOjUyHk5WgrGOZzz4+ccRTCeK93iYdy3Q4VQE/3J1/OFnZBPR02L+4fkq5JYpSd7smrH3101NlIWEAPhnsHzjmkosGPevvtE88T9V0ZP8W5BBEhpRiqRxN5ZRiWZRmQ7xS1OtYr8tq0KsdJnNQsh4AEqt5cl1ZyRSU2QcACeBZYIVsbzahvYh1JCAYF0Rt4LA0GJTrQqlMLrmFYjm2nFeKnlYL2TK2nCeXFiUvUp/caCCL6WxplwPYM8gCNLsqbVLPAMgLr0woLni1WzCJsOUhsqNgTLA2Gg7ZTEpNIFK9XVBOkwBAkqSlhLD7MewNTAEGPdveor7UAa2AEy+1OuzqJD6aSni3tkWKDETTXdrMquoLOOJpOtxpV4ozQT6dLQISmItwZ6uFZdU1WJlTs8nwer9bOXEDgOxa6c7vS2+f8amNY+o7y7IMGZ2CMcHn1qzAyhfQaNIP9Lmuvuknd3M/3puvzXh2BaYAnzap//TD46Io2cyckdOR9RLAjZtTRqPebFIDN/kFdDjN5CIciGTePdtFPuHzaycBwGbhjAbNkwHgl99CT5DyHxlMAVW7KjLgKIiSNDQyPToRfe2oU60UNVGb3B7Lt6q21mTWT3L3j/DXN6d21/laUUcCNjK3xH/78+zU4kpV43AyW1oXN31OJJk1crpNXZKEk9nv78yN1sFvCXj5L8OQuePj2VQoXokqubX11UxhLpyOJNWTsvlwWj7hgQ3L9Uxwdb1c8bEYzVS9/qMT0VR6TXkyny0uhNNLcQHt9EcLmgB3SyNHROTh+wvym74V4zPJ8ZnkprfGnsbHnsaV4ntnu8m7Q7dmVoXC3jq7j6CloWSiItX0pxVyC8YLxXqefUAVoE5TYiVfw7MwMgRt3APXG2gCyMy9hj9sNRj15Apc/wIYrP+UtzQYGv4+AhNypRp+AQ67SdnfrWYKZL5Uh6AtwkK+JOT35Qgsxa/tx2P3CfxfxF5wqABkqABkqABkqABkqABkqABkqABkqABkqABkqABkqABkqABkqABkqABkqABkqABkqABk/gKu0c1EKrcR2gAAAABJRU5ErkJggg=="],w=function(){return Object(g.jsxs)("section",{className:"skills",id:"skills",children:[Object(g.jsx)("h2",{children:"SKILLS"}),Object(g.jsx)("div",{className:"skills-wrap",children:b.map((function(t,e){return Object(g.jsxs)("div",{className:"skill-card",children:[Object(g.jsx)("img",{src:f[e],alt:"",className:"skill-shorthand"}),Object(g.jsx)("div",{className:"skill-title",children:t.title}),Object(g.jsx)("div",{className:"skill-description",children:t.short_desc})]},e)}))})]})},k=(i(20),function(){var t=Object(A.useState)(null),e=Object(m.a)(t,2),i=e[0],a=e[1];return Object(A.useEffect)((function(){var t=new Date;a(t.getFullYear())}),[]),Object(g.jsxs)("footer",{children:["Made with React @",i]})});var Q=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(o,{}),Object(g.jsx)(v,{}),Object(g.jsx)(w,{}),Object(g.jsx)(B,{}),Object(g.jsx)(k,{})]})},O=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,22)).then((function(e){var i=e.getCLS,A=e.getFID,a=e.getFCP,s=e.getLCP,n=e.getTTFB;i(t),A(t),a(t),s(t),n(t)}))};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.61308546.chunk.js.map