let ul = document.querySelector("ul");
let productos = JSON.parse(localStorage.getItem("lista")) || [];
let productosModificados = [...productos];//creo un nuevo array sin afectar al nuevo array, ... saca los corchetes
// SELECT
let categorias = new Set(); //el set es PARECIDO a un arreglo 
productos.forEach((producto) => categorias.add(producto.categoria)); //me va a permitir agregar sin repetir los nombres de las categorias
let categoriasArray = [...categorias]; //convierte el set en array
let select = document.querySelector("#categoria");//
let optionsSelect = categoriasArray.map( //el map crea un nuevo array a traves de un array ya existente
  (option) => `<option>${option}</option>` //transforma los 3 elementos del 3 array en opciones
);
let allOptions = ["<option>Todas</option>", ...optionsSelect]; // agrega la quinta opcion que es todas al principio
select.innerHTML = allOptions.join().replaceAll(",", "");
select.addEventListener("change", (event) => {
  if (event.target.value === "Todas") {
    productosModificados = [...productos];
  } else {
    productosModificados = [...productos].filter(
      (producto) => producto.categoria === event.target.value
    );
  }
  muestreo()
});
// LISTA
muestreo()

function muestreo() {
let elements = productosModificados.map(
  (element) =>
    `<li>
    <img src="https://raw.githubusercontent.com/Leonardodiaz96/proyecto2-g3/dev/img-productos/${element.codigo}.jpg" alt="producto" width="400px" />
    <br><br>Producto: ${element.nombre}<br>Precio: ${element.precio}<br>Stock: ${element.stock}<br><br></li>`
);
ul.innerHTML = elements.join().replaceAll(",", ""); //me mostrara todo en la pantalla de html
}