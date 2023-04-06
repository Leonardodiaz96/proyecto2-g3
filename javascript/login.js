function login() {

    const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	if (email === "leonardodiaz96@hotmail.com" && password === "1234") {
		window.location = "../index.html";
        alert("Bienvenido usuario " + email)
	} else {
		alert("Los datos ingresados son incorrectos")
	}
}