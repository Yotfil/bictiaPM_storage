const btnDark = document.getElementById('dark')

btnDark.addEventListener('click', ()=>{
    const container = document.getElementById('container')
    container.className = "container dark"
    // container.classList.remove('cian')
    // container.classList.remove('pink')
    localStorage.setItem('tema', "dark")
})


/* Aca empieza el tema pink
 */
const btnPink = document.getElementById('pink')

btnPink.addEventListener('click', ()=>{
    const container = document.getElementById('container')
    // container.classList.remove('dark')
    // container.classList.remove('cian')
    container.className = "container pink"
    localStorage.setItem('tema', "pink")
})



/* Acá empieza Cian */
const btnCian = document.getElementById('cian')

btnCian.addEventListener('click', ()=>{
    const container = document.getElementById('container')
    // container.classList.remove('dark')
    // container.classList.remove('pink')
    container.className = "container cian"
    localStorage.setItem('tema', "cian")
})



/* Acá empieza light */
const btnLight = document.getElementById('light')

btnLight.addEventListener('click', ()=>{
    const container = document.getElementById('container')
    container.className = "container"
    // container.classList.remove('cian')
    // container.classList.remove('pink')
    localStorage.setItem('tema', "light")
})



/* Función para traer tema del storage */

const temaEnStorage = ()=>{
    const temaGuardado = localStorage.getItem('tema')

    if(temaGuardado == "dark"){
        document.getElementById('container').classList.add('dark')
    }else if(temaGuardado == "pink"){
        document.getElementById('container').classList.add('pink')
    }else if(temaGuardado == "cian"){
        document.getElementById('container').classList.add('cian')
    }else if(temaGuardado == "light"){
        document.getElementById('container').container.className = "container"
    }
}

temaEnStorage()








































// const usuario = document.getElementById('usuario')

// usuario.addEventListener('click', ()=>{
//     const nombreUsuario = prompt('Escribe tu nombre')
//     localStorage.setItem("usuarioStorage", nombreUsuario)
// })


// const traerUsuarioStorage = ()=>{
//     const usuarioGuardadoEnStorage = localStorage.getItem('usuarioStorage')
//     document.getElementById('mostrarUsuario').innerText = usuarioGuardadoEnStorage
//     console.log(usuarioGuardadoEnStorage, "Este es el usuario")
// }

// traerUsuarioStorage()
