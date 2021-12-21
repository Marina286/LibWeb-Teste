function redirecionar() {
    window.location.href = 'cadastro.html';
}

const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.getElementById('email')
    const password = document.getElementById('password')

    const name = document.getElementById('name')
    const usuario = document.getElementById('usuario')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')

    if (name.value == '') {
        name.classList.add("errorInput")
    } else {
        name.classList.remove("errorInput")
    }

    if (usuario.value == '') {
        usuario.classList.add("errorInput")
    } else {
        usuario.classList.remove("errorInput")
    }

    if (cidade.value == '') {
        cidade.classList.add("errorInput")
    } else {
        cidade.classList.remove("errorInput")
    }

    if (estado.value == '') {
        estado.classList.add("errorInput")
    } else {
        estado.classList.remove("errorInput")
    }

    if (email.value == '') {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (password.value == '') {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (password.value.length <= 5) {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }
})

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js

    $input.addEventListener('input', e => {
        e.target.value = masks[field](e.target.value)
    }, false)
})
