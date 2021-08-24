const cabeza = document.querySelector("header")

// agregar menu

const divmenu = document.createElement("div");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const li = document.createElement("li");
const a = document.createElement("a");

const li2 = document.createElement("li");
const a2 = document.createElement("a");

const li3 = document.createElement("li");
const a3 = document.createElement("a");

a.href="index.xhtml";
a.textContent = "home";

a2.href="pedidos/index.xhtml";
a2.textContent = "pedido";

a3.href="index.xhtml";
a3.textContent = "home";


divmenu.id = "menu";

li.appendChild(a);
ul.appendChild(li);

li2.appendChild(a2);
ul.appendChild(li2);

li3.appendChild(a3);
ul.appendChild(li3);

nav.appendChild(ul);
divmenu.appendChild(nav);

cabeza.appendChild(divmenu);





const footer = document.querySelector("footer");
const clonul = ul.cloneNode(true);
//crear pie

const divfoot = document.createElement("div");

const divurl = document.createElement("div");

divurl.appendChild(clonul);
divfoot.appendChild(divurl);

const divcopyright = document.createElement("div");
const h4 = document.createElement("h4");
h4.textContent = "© 2021 VISTO S.A. FACTORIA DE SOFTWARE - todo los derechos reservados"

divcopyright.appendChild(h4);
divfoot.appendChild(divcopyright)





footer.appendChild(divfoot)
