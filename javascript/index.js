let ul = document.querySelector("ul");
let productos = [
  {
    codigo: "vehiculo1",
    nombre: "Cubierta Michelin",
    precio: "$40000",
    descripcion: "Tamaño y rodado: 255/70 R16 y Carga máxima: 1090 kg",
    categoria: "Accesorios para vehiculos",
    stock: 8,
  },
  {
    codigo: "vehiculo2",
    nombre: "Compresor Aire 12v Metal Auto Inflador Neumatico Portatil",
    precio: "$8000",
    descripcion: "Minicompresor portátil 12v conexión al encendedor 12v, interruptor de encendido, manómetro de precisión, válvula metálica y espiral neumático.",
    categoria: "Accesorios para vehiculos",
    stock: 25,
  },
  {
    codigo: "vehiculo3",
    nombre: "Llanta original de volkswagen vento",
    precio: "$13000",
    descripcion: "Tamaño y rodado: 255/70 R16. Aceptamos cualquier metodo de pago",
    categoria: "Accesorios para vehiculos",
    stock: 12,
  },
  {
    codigo: "electrod1",
    nombre: "Ventilador de mesa 16 Moulinex",
    precio: "$15890",
    descripcion: "Con su óptimo rendimiento, la sensación térmica disminuirá. Es un aparato práctico, fácil de armar e instalar.",
    categoria: "Electrodomesticos",
    stock: 90,
  },
  {
    codigo: "electrod2",
    nombre: "Freezer Vertical Philco",
    precio: "$12340",
    descripcion: "Philco se destaca en el mercado por ofrecer productos que han conquistado a sus clientes por su calidad, durabilidad y eficiencia. Siempre a la vanguardia, tiene como filosofía la innovación y creatividad como principales características.",
    categoria: "Electrodomesticos",
    stock: 90,
  },
  {
    codigo: "electrod3",
    nombre: "Aire Acondicionado Siam Split Frío/calor 4472 Frigorías",
    precio: "$234890",
    descripcion: "Climatizar tus espacios a lo largo del año es sin duda algo importante para tu comodidad y la de tus seres queridos. Contar con un aire acondicionado con función frío/calor es la mejor decisión.",
    categoria: "Electrodomesticos",
    stock: 49,
  },
  {
    codigo: "dep1",
    nombre: "Bicicleta Mountain Mtb Wolfbike Rodado 29 Shimano",
    precio: "$18000",
    descripcion: "Las Bicicletas WOLF EDICION LIMITADA fueron concebidas teniendo en cuenta las necesidades y pedidos de nuestros clientes a lo largo de los mas de 13 años que llevamos vendiendo dentro del sitio. Pensadas especialmente para ciclistas que se inician en este apasionante deporte que no quieren resignar calidad ni descuidar su presupuesto",
    categoria: "Deportes y fitness",
    stock: 2,
  },
  {
    codigo: "dep2",
    nombre: "4Kg De Proteína Whey Protein (4 De 1 Kg) + 1 Kg De Creatina",
    precio: "$11300",
    descripcion: "NUEVA FORMULA: Mejor digestión, mejor absorción, mejor biodisponibilidad (sin cólicos, sin malestar estomacal).",
    categoria: "Deportes y fitness",
    stock: 22,
  },
  {
    codigo: "dep3",
    nombre: "Zapatillas Strong Pace III Topper Team Sport",
    precio: "$8500",
    descripcion: "Las Zapatillas Topper Strong Pace III, estan diseñadas para que puedas entrenar con comidad y con estilo que conjuga diseño y minimalismo. Capellada de open mesh con tecnología SKINNECT para aportar diseño y liviandad.",
    categoria: "Deportes y fitness",
    stock: 56,
  },
];
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