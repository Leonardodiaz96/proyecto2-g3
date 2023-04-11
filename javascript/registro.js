let form = document.querySelector("form");
let arrayUsuarios = [];

form.addEventListener("submit", (event) => {  //realizara un evento en especifico
      event.preventDefault();
      const usuarioActual = {
             nameActual : document.getElementById("name").value,
             emailActual : document.getElementById("email").value,
             passwordActual : document.getElementById("password").value,
      };
      if (usuarioActual.nameActual === "" || usuarioActual.emailActual === "" || usuarioActual.passwordActual === "") {
            alert("Por favor, llene todos los campos.");
            return;
      }
      arrayUsuarios.push(usuarioActual); //agrego el registro actual junto con los demas registrados
      form.reset(); //vacio el formulario para volver a ser llenado cuando registre nuevo usuario
      localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios)); //guardo los datos del vector con todos los registros en la variable usuarios en forma de string
      window.location.href = "../pages/login.html";
      alert("Usuario registrado con exito!!")
});


  