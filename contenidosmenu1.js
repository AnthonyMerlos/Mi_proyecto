function cargar(seccion) {
    let html = "";

    switch (seccion) {

        case "Iniciar Sesion":

            html = `<nav class="contenedor"></nav>`;
            html += `
<div class="login-box ingresando">
    <img src="img/Captura de pantalla_24-11-2025_154335_www.bing.com.jpeg" alt="login" width="80">
    <h1>Ingresando al Login</h1>

     <form action="">
        <label for="username">Usuario</label>
        <input type="text" id="username" name="username" placeholder="Ingrese su usuario">

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Ingrese su contraseña">
        <input type="submit" value="Login" class="entrar">

        <a href="#" class="olvido">¿Olvidó su contraseña?</a>
        <a href="#" class="registrarse">¿No tiene cuenta?</a>
    </form>
</div>`;

            break;

        case "Videos":
            html = "<h1>Historial</h1><p>Estos son los videos que has visto.</p>";
            break;

    case "Cerrar Sesion":
    html = `<div class="contenedor2"></div>
            <header>
                <button class="boton" onclick="if(confirm('¿Desea Salir de la cuenta?')) { localStorage.removeItem('usuario'); location.replace('https://www.google.com/'); }">
                    Salir
                </button>
            </header>`;

            html += '<p class="cerrar">Desea Cerrar Sesión</p>'
    break;



        case "doc1":
            html = "<h1>Documento 1</h1><p>Contenido del documento 1.</p>";
            break;

        case "doc2":
            html = "<h1>Documento 2</h1><p>Contenido del documento 2.</p>";
            break;

        case "doc3":
            html = "<h1>Documento 3</h1><p>Contenido del documento 3.</p>";
            break;

        default:
            html = "<h1>Bienvenido</h1>";
    }

    document.getElementById("contenido").innerHTML = html;
}