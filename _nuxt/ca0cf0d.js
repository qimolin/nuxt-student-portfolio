(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,4,5,9],{252:function(t,e,n){"use strict";n.r(e);var r=n(253),l=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},253:function(t,e){},259:function(t,e,n){"use strict";n.r(e);var r={props:{jobRole:{type:String,required:!0},companyName:{type:String,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0},bulletPoints:{type:Array,required:!0}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"font-bold text-secondary"},[t._v(t._s(t.jobRole))]),t._v(" "),e("h3",{staticClass:"font-bold"},[t._v(t._s(t.companyName))]),t._v(" "),e("h3",{staticClass:"italic"},[t._v(t._s(t.startDate)+" - "+t._s(t.endDate))]),t._v(" "),e("ul",t._l(t.bulletPoints,(function(n){return e("li",{key:n,staticClass:"list-disc"},[t._v("\n      "+t._s(n)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var r={props:{universityName:{type:String,required:!0},major:{type:String,required:!0},location:{type:String,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0},bulletPoints:{type:Array,required:!0}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"font-bold text-secondary"},[t._v(t._s(t.universityName))]),t._v(" "),e("h3",{staticClass:"font-bold"},[t._v(t._s(t.major))]),t._v(" "),e("h3",{staticClass:"italic"},[t._v(t._s(t.startDate)+" - "+t._s(t.endDate))]),t._v(" "),e("h3",{staticClass:"italic"},[t._v(t._s(t.location))]),t._v(" "),e("ul",t._l(t.bulletPoints,(function(n){return e("li",{key:n,staticClass:"list-disc"},[t._v("\n      "+t._s(n)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);n(27),n(254);var r={props:{name:{type:String,required:!0},circles:{type:Number,required:!0}},data:function(){return{circlesLeft:5-this.circles}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center justify-between"},[e("span",[t._v(t._s(t.name))]),t._v(" "),e("div",{staticClass:"flex items-center space-x-1 h-full mr-6"},[t._l(t.circles,(function(circle,i){return e("svg",{key:"A"+i,staticClass:"text-secondary",attrs:{fill:"currentColor",height:"15",width:"15"}},[e("circle",{attrs:{cx:"6",cy:"6",r:"6"}})])})),t._v(" "),t._l(t.circlesLeft,(function(circle,i){return e("svg",{key:"B"+i,staticClass:"text-secondary",attrs:{fill:"none",stroke:"currentColor",height:"15",width:"15"}},[e("circle",{attrs:{cx:"6",cy:"6",r:"5.5"}})])}))],2)])}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(59),n(258)),o={data:function(){return{full_name:"",email:"",message:"",status:""}},methods:{sendEmail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector("#status"),e.next=3,Object(l.a)(void 0,void 0,{full_name:t.full_name,email:t.email,message:t.message},void 0).then((function(){t.status="message sent succesfully",n.textContent=t.status}),(function(){t.status="something went wrong",n.textContent=t.status}));case 3:t.$refs.form.reset(),n.className="text-center text-xl text-gray-100";case 5:case"end":return e.stop()}}),e)})))()}}},c=n(44),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("form",{ref:"form",staticClass:"w-2/3 sm:w-1/3"},[e("h4",{staticClass:"text-center text-2xl text-gray-100"},[t._v("Contact Me")]),t._v(" "),e("p",{staticClass:"text-center text-xl text-gray-100 hidden",attrs:{id:"status"}},[t._v("\n    "+t._s(t.status)+"\n  ")]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.full_name,expression:"full_name"}],staticClass:"w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"FULL NAME",required:""},domProps:{value:t.full_name},on:{input:function(e){e.target.composing||(t.full_name=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mt-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"EMAIL",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mt-4"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"w-full h-32 bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"MESSAGE",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"my-4"},[e("button",{staticClass:"uppercase text-sm font-bold tracking-wide bg-secondary text-gray-100 p-3 rounded-lg hover:opacity-90 w-full focus:outline-none focus:shadow-outline",on:{click:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._v("\n      Send Message\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){t.exports=n.p+"img/qimo.a059a51.jpg"},264:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"pb-4 px-2 pt-8 sm:px-8 md:px-14 lg:px-22 bg-primary"},[e("div",{staticClass:"flex justify-center"},[e("ContactMe",{attrs:{id:"contact"}})],1),t._v(" "),e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"flex justify-center items-center space-x-2"},[e("p",{staticClass:"text-md text-gray-100"},[t._v("All rights reserved")]),t._v(" "),e("fa",{staticClass:"text-lg text-gray-100",attrs:{icon:["fas","copyright"]}}),t._v(" "),e("p",{staticClass:"text-md text-gray-100"},[t._v(t._s((new Date).getFullYear()))])],1),t._v(" "),e("div",{staticClass:"space-x-3"},[e("a",{staticClass:"text-xl text-gray-100",attrs:{href:"https://www.linkedin.com/in/qi-mo-lin"}},[e("fa",{attrs:{icon:["fab","linkedin"]}})],1),t._v(" "),e("a",{staticClass:"text-xl text-gray-100",attrs:{href:"https://github.com/qimolin"}},[e("fa",{attrs:{icon:["fab","github"]}})],1),t._v(" "),e("a",{staticClass:"text-xl text-gray-100",attrs:{href:"https://stackoverflow.com/users/18646229/qimolin"}},[e("fa",{attrs:{icon:["fab","stack-overflow"]}})],1),t._v(" "),e("a",{staticClass:"text-xl text-gray-100",attrs:{href:"https://www.instagram.com/qimo.lin"}},[e("fa",{attrs:{icon:["fab","instagram"]}})],1)])])])])},l=[]},265:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("2dd4db91",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n.r(e);var r=n(264),l=n(252);for(var o in l)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(o);var c=n(44),component=Object(c.a)(l.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{ContactMe:n(262).default})},267:function(t,e,n){"use strict";n.r(e);var r={methods:{getCurrentAge:function(){var t=Date.now()-new Date("01/10/2001"),e=new Date(t);return Math.abs(e.getUTCFullYear()-1970)}}},l=n(44),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex flex-col justicy-center items-center w-auto my-14",attrs:{"data-aos":"zoom-in"}},[t._m(0),t._v(" "),e("p",{staticClass:"flex justify-center text-center w-96 px-4"},[t._v("\n    I am a "+t._s(t.getCurrentAge())+" year old graduate student studying ICT &\n    Software Engineering at Fontys University of Applied Sciences and working\n    part-time as a software developer. I really enjoy building apps and\n    learning new things.\n  ")]),t._v(" "),e("a",{staticClass:"flex flex-col items-center text-3xl text-secondary mt-6 animate-bounce cursor-pointer",attrs:{onclick:"document.getElementById('resume').scrollIntoView();"}},[e("fa",{attrs:{icon:["fas","chevron-down"]}})],1)])}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"flex justify-center text-2xl font-bold text-gray-800 space-x-2"},[e("section",[t._v("About")]),t._v(" "),e("section",{staticClass:"text-secondary"},[t._v("Me.")])])}],!1,null,null,null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);n(27);var r=[function(){var t=this._self._c;return t("div",[t("div",{staticClass:"flex justify-center",attrs:{"data-aos":"zoom-in"}},[t("img",{staticClass:"rounded-full transform -translate-y-2/4",attrs:{src:n(263),alt:"image of qimo",width:"250"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center transform -translate-y-28"},[e("h1",{staticClass:"text-2xl uppercase tracking-widest",attrs:{"data-aos":"zoom-in"}},[t._v("\n        Qi Mo Lin\n      ")]),t._v(" "),e("p",{staticClass:"text-xl text-primary uppercase tracking-widest",attrs:{"data-aos":"zoom-in"}},[t._v("\n        Software Developer\n      ")])])},function(){var t=this,e=t._self._c;return e("section",{attrs:{"data-aos":"fade-right"}},[e("h2",{staticClass:"text-xl text-primary mb-2"},[t._v("Summary")]),t._v(" "),e("p",{staticClass:"mb-4"},[t._v("\n              I am a graduate student studying ICT & Software engineering. I\n              am very passionate about technology and keeping up with the\n              latest trends. I am going to pursue my MSc degree in Computer\n              Science and want to work next to that.\n            ")])])}],l={data:function(){return{skills:[{name:"JavaScript",circles:5},{name:"VueJS",circles:5},{name:"OO Design",circles:4},{name:"C#",circles:5},{name:"HTML5",circles:4},{name:"CSS3",circles:3},{name:"SQL",circles:3},{name:"NoSQL",circles:2},{name:"REST",circles:4},{name:"Git",circles:4},{name:"Agile & SCRUM",circles:4},{name:"Python",circles:3},{name:"PHP",circles:2},{name:"Wordpress",circles:2},{name:"C++",circles:2}],projects:[{name:"This website (Nuxt and TailwindCSS)"},{name:"Chat app (Vue2 with Quasar)"},{name:"Condominium management app (Angular with material)"},{name:"Airport luggage belt simulation (C# Windows form)"},{name:"Festival ticketing and consumables purchasing (C# Windows form)"}],work_experiences:[{jobRole:"Frontend Developer (intern)",companyName:"Sogeti",startDate:"February 2022",endDate:"July 2022",bulletPoints:["Building a cross-platform sports challenges app","Quasar, Vue3, Pinia, Typescript, Vite, Gitlab CI with a dockerized runner, and Firebase"]},{jobRole:"Full-stack Developer",companyName:"DOEN Horeca uitzendbureau",startDate:"March 2021",endDate:"present",bulletPoints:["Built recruitment system from the ground up","Vue2 with Vuetify, ExpressJS with Sequelize, MariaDB, and Docker","Implementing features, fixing bugs"]},{jobRole:"Software Engineer (intern)",companyName:"DAF Trucks N.V.",startDate:"September 2020",endDate:"January 2021",bulletPoints:["Researched how to display Simulink models in Bitbucket","Achieved grade: 9/10"]}],educations:[{universityName:"Fontys University of Applied Sciences",major:"BSc in ICT & Software Engineering",startDate:"September 2018",endDate:"July 2022",location:"Eindhoven, The Netherlands",bulletPoints:["Taking up specialization courses in cyber security","Taking up electives in image processing, logic engineering, test-driven development, data warehousing, C, and C++"]},{universityName:"Haaga-Helia University of Applied Sciences",major:"Exchange semester in Business IT",startDate:"August 2021",endDate:"December 2021",location:"Helsinki, Finland",bulletPoints:["Taking up courses in SAP ERP, project management, Internationalization & Globalization, self marketing","Taking up an IoT project"]}],languages:["Dutch (mother tongue, C2)","English (fluent, C2)"]}}},o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"bg-primary flex pt-8 pb-40"}),t._v(" "),t._m(0),t._v(" "),e("div",[t._m(1),t._v(" "),e("div",{staticClass:"block sm:flex sm:flex-grow transform -translate-y-20 mx-8"},[e("div",{staticClass:"flex w-full justify-center"},[e("div",{staticClass:"flex flex-col w-4/5 sm:w-2/5"},[t._m(2),t._v(" "),e("section",{staticClass:"mb-4",attrs:{"data-aos":"fade-right"}},[e("h2",{staticClass:"text-xl text-primary mb-2"},[t._v("Work experience")]),t._v(" "),t._l(t.work_experiences,(function(t){return e("WorkExperience",{key:t.companyName,staticClass:"mb-2",attrs:{"data-aos":"fade-left","job-role":t.jobRole,"company-name":t.companyName,"start-date":t.startDate,"end-date":t.endDate,"bullet-points":t.bulletPoints}})}))],2),t._v(" "),e("section",{staticClass:"mb-4",attrs:{"data-aos":"fade-right"}},[e("h2",{staticClass:"text-xl text-primary mb-2",attrs:{id:"projects"}},[t._v("Projects")]),t._v(" "),e("ul",t._l(t.projects,(function(n){return e("li",{key:n.name,staticClass:"list-disc"},[t._v("\n                "+t._s(n.name)+"\n              ")])})),0)])])]),t._v(" "),e("div",{staticClass:"flex w-full justify-center"},[e("div",{staticClass:"flex flex-col w-4/5 sm:w-2/5"},[e("section",{staticClass:"mb-4",attrs:{"data-aos":"fade-left"}},[e("h2",{staticClass:"text-xl text-primary mb-2"},[t._v("Education")]),t._v(" "),t._l(t.educations,(function(t){return e("EducationComponent",{key:t.universityName,staticClass:"mb-4",attrs:{"data-aos":"fade-left","university-name":t.universityName,major:t.major,"start-date":t.startDate,location:t.location,"end-date":t.endDate,"bullet-points":t.bulletPoints}})}))],2),t._v(" "),e("section",{attrs:{"data-aos":"fade-left"}},[e("h2",{staticClass:"text-xl text-primary mb-4"},[t._v("Skills")]),t._v(" "),t._l(t.skills,(function(t){return e("SkillsComponent",{key:t.name,attrs:{name:t.name,circles:t.circles}})}))],2),t._v(" "),e("section",{staticClass:"mb-4",attrs:{"data-aos":"fade-left"}},[e("h2",{staticClass:"text-xl text-primary mb-2"},[t._v("Languages")]),t._v(" "),e("ul",t._l(t.languages,(function(n){return e("li",{key:n,staticClass:"list-disc"},[t._v("\n                "+t._s(n)+"\n              ")])})),0)])])])]),t._v(" "),e("div",{staticClass:"flex justify-center transform -translate-y-12",attrs:{id:"contact"}},[e("section",{attrs:{"data-aos":"fade-up"}},[e("h2",{staticClass:"text-2xl text-primary mb-2"},[t._v("Send me an email")]),t._v(" "),e("ul",[e("li",{staticClass:"flex items-center"},[e("a",{staticClass:"text-2xl text-secondary",attrs:{href:"mailto:info@qimolin.com"}},[e("fa",{attrs:{icon:["fas","envelope"]}})],1),t._v(" "),e("span",{staticClass:"text-lg ml-2 mb-1"},[t._v("info@qimolin.com")])])])])])])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{WorkExperience:n(259).default,EducationComponent:n(260).default,SkillsComponent:n(261).default})},269:function(t,e,n){"use strict";n.r(e);var r=n(44),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("nav",[e("div",{staticClass:"flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-10"},[e("div",[e("NuxtLink",{staticClass:"text-gray-800 text-xl font-bold",attrs:{to:"/"}},[e("span",[t._v("Qi Mo Lin")])])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-x-6 sm:space-x-10 text-base sm:text-lg text-secondary"},[e("a",{staticClass:"cursor-pointer",attrs:{onclick:"document.getElementById('projects').scrollIntoView();"}},[e("span",[t._v("Projects")])]),t._v(" "),e("a",{staticClass:"cursor-pointer",attrs:{onclick:"document.getElementById('contact').scrollIntoView();"}},[e("span",[t._v("Contact")])])])}],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n(265)},274:function(t,e,n){var r=n(108)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n*{\n  margin:0;\n  padding:0;\n  font-family:"Arimo",sans-serif\n}\nhtml{\n  scroll-behavior:smooth\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},275:function(t,e,n){"use strict";n.r(e);var r=n(270),l=n.n(r),o=(n(271),{mixins:[{mounted:function(){l.a.init({disable:"mobile"})}}]}),c=(n(273),n(44)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-screen"},[e("NavComponent"),t._v(" "),t._m(0),t._v(" "),e("AboutMe"),t._v(" "),e("ResumeComponent",{attrs:{id:"resume"}}),t._v(" "),e("WebsiteFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex bg-primary"},[e("section",{staticClass:"sm:flex sm:items-center sm:justify-center sm:flex-grow w-full"},[e("div",{staticClass:"px-4 mt-20 mb-20",attrs:{"data-aos":"zoom-in"}},[e("h1",{staticClass:"flex sm:block justify-center text-center text-lg sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-2"},[t._v("\n          Hello! I am Qi Mo\n        ")]),t._v(" "),e("p",{staticClass:"flex sm:block justify-center text-center text-base sm:text-xl lg:text-xl text-gray-100"},[t._v("\n          Software developer based in The Netherlands\n        ")]),t._v(" "),e("div",{staticClass:"block text-center space-x-2"},[e("button",{staticClass:"p-2 sm:p-3 mt-3 text-bold text-sm lg:text-base uppercase bg-secondary text-gray-100 rounded-2xl hover:opacity-90",attrs:{onclick:"document.getElementById('contact').scrollIntoView();"}},[t._v("\n            Contact me\n          ")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavComponent:n(269).default,AboutMe:n(267).default,ResumeComponent:n(268).default,WebsiteFooter:n(266).default})}}]);