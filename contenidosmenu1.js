function cargar(seccion) {
    let html = "";

    switch (seccion) {

        case "Iniciar Sesion":

            html = `<nav class="contenedor"></nav>`;
html += `
<div class="login-box ingresando">
    <img src="img/Captura de pantalla_24-11-2025_154335_www.bing.com.jpeg" alt="login" width="80">
    <h1>Ingresando al Login</h1>

    <form id="loginForm">
        <label for="username">Usuario</label>
        <input type="text" id="username" name="username" placeholder="Ingrese su usuario">

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Ingrese su contraseña">

        <input type="submit" value="Login" class="entrar">
    </form>
</div>
`;
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'loginForm') {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
    
        if (username === '' || password === '') {
            alert('Por favor, ingrese usuario y contraseña');
            return;
        }

     
        if (username === 'Anthony' && password === '123') {
          
            window.location.href = 'http://localhost/Mi_Crud-main/index.php';
        } else {
           
            alert('Usuario o Contraseña incorrectos.');
            
        }
    }
});

         
break;

        case "Videos":
            html = "";
            html += `<nav class="contenedor3"></nav>`;
            html += `<nav class="contenedor4"></nav>`;
            html += `<div class="espaciador"></div>`;
            html += `<iframe class="videYT" width="560" height="315" 
            src="https://www.youtube.com/embed/JBCDIsM-Fks" 
            frameborder="0" allowfullscreen controls></iframe>`;

        case "Videos":
            html = "";
            html += `<nav class="contenedor3"></nav>`;
            html += `<nav class="contenedor4"></nav>`;
            html += `<div class="espaciador"></div>`;
            html += `
        <iframe class="videYT" width="560" height="315"
        src="https://www.youtube.com/embed/JBCDIsM-Fks"
        frameborder="0" allowfullscreen></iframe>

        <button id="likeBtn" class="like">👍 Like <span id="count">0</span></button>
    `;

            setTimeout(() => {
                let likes = localStorage.getItem("likesVideo") || 0;
                document.getElementById("count").innerText = likes;

                document.getElementById("likeBtn").onclick = function () {
                    likes++;
                    document.getElementById("count").innerText = likes;
                    localStorage.setItem("likesVideo", likes);
                };
            }, 100);

            break;





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