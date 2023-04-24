let list = JSON.parse(localStorage.getItem("lista")) || [];
let h1 = document.querySelector("h1");
h1.innerText = "Administrador";
// if (localStorage.getItem("logged", false)) { 
//     window.location = "../pages/login.html";
// }
let h3 = document.querySelector("h3");
h3.innerText = "Productos";
let button = document.querySelector("button");
button.innerText = "AGREGAR PRODUCTO";
let table = document.querySelector("table");
let tbody = document.querySelector("tbody");

const agregarProducto = () => {
    button.addEventListener("click", (event) => { 
    event.preventDefault();})
    let id = document.querySelector("#id")
    let codigo = document.querySelector("#codigo")
    let categoria = document.querySelector("#categoria")
    let nombre = document.querySelector("#nombre")
    let precio = document.querySelector("#precio")
    let stock = document.querySelector("#stock")
    list.push({id: id.value, codigo: codigo.value, categoria: categoria.value, nombre: nombre.value, precio: precio.value, stock: stock.value})
    let listaMapeada = list.map(fila => `<tr><td>${fila.id}</td><td>${fila.codigo}</td><td>${fila.categoria}</td><td>${fila.nombre}</td><td>${fila.precio}</td><td>${fila.stock}</td><td><button onclick="">Detalle</button></td><button onclick="editarFila()">Editar</button></td><td><button onclick="eliminarFila(${list.indexOf(fila)})">Eliminar</button></td></tr>`);
    tbody.innerHTML = listaMapeada.join().replaceAll(",", "")
    localStorage.setItem("lista", JSON.stringify(list));
    id.value = "";
    codigo.value = "";
    categoria.value = "";
    nombre.value = "";
    precio.value = "";
    stock.value = "";
}   
const actualizarTabla = () => {
    let listaMapeada = list.map((fila, indice) => `<tr><td>${fila.id}</td><td>${fila.codigo}</td><td>${fila.categoria}</td><td>${fila.nombre}</td><td>${fila.precio}</td><td>${fila.stock}</td><td><button onclick="">Detalle</button></td><td><button onclick="editarFila(${indice})">Editar</button></td><td><button onclick="eliminarFila(${indice})">Eliminar</button></td></tr>`);
    tbody.innerHTML = listaMapeada.join("");
}
const editarFila = (indice) => {    
    let listaMapeada = list.map((fila, i) => {
        if (i === indice) {
            return `<tr><td contenteditable>${fila.id}</td><td contenteditable>${fila.codigo}</td><td contenteditable>${fila.categoria}</td><td contenteditable>${fila.nombre}</td><td contenteditable>${fila.precio}</td><td contenteditable>${fila.stock}</td><td><button onclick="">Detalle</button></td><td><button onclick="guardarFila(${indice})">Guardar</button></td><td><button onclick="eliminarFila(${indice})">Eliminar</button></td></tr>`;
        } else {
            return `<tr><td>${fila.id}</td><td>${fila.codigo}</td><td>${fila.categoria}</td><td>${fila.nombre}</td><td>${fila.precio}</td><td>${fila.stock}</td><td><button onclick="">Detalle</button></td><td><button onclick="editarFila(${i})">Editar</button></td><td><button onclick="eliminarFila(${i})">Eliminar</button></td></tr>`;
        }
    });
    tbody.innerHTML = listaMapeada.join("");
}
const guardarFila = (indice) => {
    let filaEditada = tbody.children[indice];
    let id = filaEditada.children[0].textContent;
    let codigo = filaEditada.children[1].textContent;
    let categoria = filaEditada.children[2].textContent;
    let nombre = filaEditada.children[3].textContent;
    let precio = filaEditada.children[4].textContent;
    let stock = filaEditada.children[5].textContent;
    list[indice] = { id, codigo, categoria, nombre, precio, stock };
    localStorage.setItem("lista", JSON.stringify(list));
    actualizarTabla();
}
const eliminarFila = (indice) => {
    let confirmacion = confirm("¿Seguro que deseas eliminar este producto?");
    if (confirmacion) {
        list.splice(indice, 1);
        localStorage.setItem("lista", JSON.stringify(list));
        actualizarTabla();
    }
}
agregarProducto();
actualizarTabla();