$(document).ready(function () {
    // Cargar imágenes dinámicamente
    $.get('/images', function(data) {
        const nanogallery2 = $('#nanogallery2');
        nanogallery2.empty(); // Vaciar la galería antes de agregar imágenes nuevas

        data.forEach(function(image) {
            nanogallery2.append(`<a href="/uploads/${image}" data-ngthumb="/uploads/${image}">Imagen</a>`);
        });

        nanogallery2.nanogallery2({
            "thumbnailHeight": 200,
            "thumbnailWidth": "auto",
            "thumbnailAlignment": "scaled",
            "galleryMosaic": [                       // Opcional - Define el layout de la galería
                { w: 1, h: 1, c: 1, r: 1 },
                { w: 2, h: 1, c: 2, r: 1 },
                { w: 1, h: 2, c: 1, r: 2 },
                { w: 1, h: 1, c: 3, r: 1 },
                { w: 1, h: 1, c: 4, r: 1 },
                { w: 1, h: 1, c: 3, r: 2 },
                { w: 1, h: 1, c: 4, r: 2 },
                { w: 1, h: 2, c: 5, r: 1 }
            ],
            "thumbnailGutterWidth": 2,
            "thumbnailGutterHeight": 2,
            "thumbnailL1": 1,                       // Define el nivel de zoom en las miniaturas
            "thumbnailL2": 1.2,
            "thumbnailL3": 1.4
        });
    });
});

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    const fileField = document.getElementById('imageInput');

    formData.append('image', fileField.files[0]);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        alert('Imagen subida con éxito');
        location.reload(); // Recargar la página para mostrar la nueva imagen
    } catch (error) {
        console.error('Error al subir la imagen:', error);
    }
});
