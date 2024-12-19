const imagenesCarros = [
    "https://i.pinimg.com/474x/48/a2/69/48a2691382f2c34b1fee899ee2b1ae4f.jpg",
    "https://i.pinimg.com/736x/c7/71/5a/c7715acec532f6d711f38dc3ab500002.jpg",
    "https://i.pinimg.com/474x/a2/04/61/a2046124ebd1405bef9bd68a1d18deac.jpg",
    "https://i.pinimg.com/474x/bb/2f/cc/bb2fcca02f3e31477da64559f49f073e.jpg",
    "https://i.pinimg.com/474x/c0/a9/62/c0a9620c414e65e61d88c2a9cfb06abf.jpg",
    "https://i.pinimg.com/474x/7b/a6/53/7ba653dd45286e584b1c7165a09d634b.jpg",
    "https://i.pinimg.com/474x/10/35/ab/1035ab6765a0abfa3871d0eb90a654dc.jpg",
    "https://i.pinimg.com/736x/02/b3/3d/02b33db921eb2abb662d67b8be30e402.jpg",
    "https://i.pinimg.com/736x/87/d5/24/87d524c69ef287e9e559f95c8936004b.jpg",
    "https://i.pinimg.com/474x/e0/96/eb/e096eb9952503a88610c45dffea6ad87.jpg",
    "https://i.pinimg.com/736x/4b/cb/b5/4bcbb5d7cb15129f9f15286d5fd29c53.jpg",
    "https://i.pinimg.com/474x/6f/37/bd/6f37bdf0a699f8b84f4bf50f425a1122.jpg",
    "https://i.pinimg.com/736x/28/0c/3d/280c3d89981f7719f5984e01e0dece71.jpg"
];

// Función para generar la galería
function generarGaleria() {
    const galeria = document.getElementById('galeria');
    imagenesCarros.forEach((url) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${url}" class="car-img" alt="Carro">
            </div>
        `;
        galeria.appendChild(col);
    });
}

// Función para mostrar una imagen aleatoria
function mostrarImagenAleatoria() {
    const imagenAleatoria = imagenesCarros[Math.floor(Math.random() * imagenesCarros.length)];
    document.getElementById('carro-aleatorio').src = imagenAleatoria;
}

// Generar la galería al cargar la página
window.onload = generarGaleria;
