(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(1),l=a(5),c=a(6),u=a(8),m=a(7),d=a(2),h=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=(a(15),a(16),a(17),function(e){var t=e.name,a=e.id;return r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement("p",{className:"user-name"},t))}),g=function(e){var t=e.title,a=e.completed,n=e.user;return r.a.createElement("div",{className:"todo-container"},r.a.createElement("h2",null,t),!0===a?"Done":"Unfinished",r.a.createElement(b,n))};g.defaultProps={completed:!1};var y=function(e){var t=e.todos;return r.a.createElement("div",{className:"todos-list"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"todos-list__item"},r.a.createElement(g,e))})))};y.defaultProps={todos:[]};var f=p.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todo:"",id:f.map((function(e){return e.id})).length>0?f.map((function(e){return e.id})).length+1:1,user:"",userError:!1,titleError:!1},e.getValue=function(t){var a,n=t.target,r=n.name,i=n.value;e.setState((a={},Object(s.a)(a,r,i),Object(s.a)(a,"userError",!1),Object(s.a)(a,"titleError",!1),a))},e.addTodo=function(t){var a=e.state,n=a.todo,r=a.id,i=a.user;t.preventDefault(),i&&n&&f.push({title:n,id:r,user:h.find((function(t){return t.name===e.state.user}))}),i||e.setState({userError:!0}),n||e.setState({titleError:!0}),e.setState((function(e){return{todo:"",id:e.id+1}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todo,a=e.user,n=e.userError,i=e.titleError;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),h.length),r.a.createElement("form",{onSubmit:this.addTodo},n&&r.a.createElement("h3",null,"Please choose a user"),r.a.createElement("select",{name:"user",id:"",value:a,onChange:this.getValue},r.a.createElement("option",{value:""},"Choose a user"),h.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))),i&&r.a.createElement("h3",null,"Please enter the title"),r.a.createElement("input",{type:"text",name:"todo",placeholder:"Please, write your todo",value:t,onChange:this.getValue}),r.a.createElement("button",{type:"submit"},"Add")),r.a.createElement(y,{todos:f}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.48669681.chunk.js.map