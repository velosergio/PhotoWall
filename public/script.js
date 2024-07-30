$(document).ready(function () {
    // Cargar imágenes dinámicamente
    $.get('/images', function(data) {
        const nanogallery2 = $('#nanogallery2');
        nanogallery2.empty(); // Vaciar la galería antes de agregar imágenes nuevas

        data.forEach(function(image) {
            nanogallery2.append(`<a href="/uploads/${image}" data-ngthumb="/uploads/${image}">Imagen</a>`);
        });

        nanogallery2.nanogallery2({
            galleryMosaic: [
                { w: 2, h: 2, c: 1, r: 1 },
                { w: 1, h: 1, c: 3, r: 1 },
                { w: 1, h: 1, c: 3, r: 2 },
                { w: 1, h: 2, c: 4, r: 1 },
                { w: 2, h: 1, c: 5, r: 1 },
                { w: 2, h: 2, c: 5, r: 2 },
                { w: 1, h: 1, c: 4, r: 3 },
                { w: 2, h: 1, c: 2, r: 3 },
                { w: 1, h: 2, c: 1, r: 3 },
                { w: 1, h: 1, c: 2, r: 4 },
                { w: 2, h: 1, c: 3, r: 4 },
                { w: 1, h: 1, c: 5, r: 4 },
                { w: 1, h: 1, c: 6, r: 4 },
                // Nuevas columnas y filas ajustadas
                { w: 1, h: 1, c: 7, r: 1 },
                { w: 1, h: 1, c: 7, r: 2 },
                { w: 1, h: 1, c: 8, r: 1 },
                { w: 1, h: 1, c: 8, r: 2 },
                { w: 1, h: 2, c: 9, r: 1 },
                { w: 1, h: 1, c: 8, r: 3 },
                { w: 1, h: 1, c: 9, r: 3 },
                { w: 1, h: 1, c: 1, r: 5 },
                { w: 1, h: 1, c: 2, r: 5 },
                { w: 2, h: 1, c: 3, r: 5 },
                { w: 1, h: 1, c: 5, r: 5 },
                { w: 2, h: 1, c: 6, r: 5 },
                { w: 1, h: 1, c: 8, r: 5 },
                { w: 1, h: 1, c: 9, r: 5 },
                { w: 1, h: 1, c: 4, r: 5 },  // Ajustar para eliminar espacios en blanco
                { w: 1, h: 1, c: 7, r: 5 }  // Ajustar para eliminar espacios en blanco
            ],
            galleryMosaicXS: [
                { w: 2, h: 2, c: 1, r: 1 },
                { w: 1, h: 1, c: 3, r: 1 },
                { w: 1, h: 1, c: 3, r: 2 },
                { w: 1, h: 2, c: 1, r: 3 },
                { w: 2, h: 1, c: 2, r: 3 },
                { w: 1, h: 1, c: 2, r: 4 },
                { w: 1, h: 1, c: 3, r: 4 }
            ],
            galleryMosaicSM: [
                { w: 2, h: 2, c: 1, r: 1 },
                { w: 1, h: 1, c: 3, r: 1 },
                { w: 1, h: 1, c: 3, r: 2 },
                { w: 1, h: 2, c: 1, r: 3 },
                { w: 2, h: 1, c: 2, r: 3 },
                { w: 1, h: 1, c: 2, r: 4 },
                { w: 1, h: 1, c: 3, r: 4 }
            ],
            galleryMaxRows: 1,
            galleryDisplayMode: 'rows',
            gallerySorting: 'random',
            thumbnailDisplayOrder: 'random',
            thumbnailHeight: '180',
            thumbnailWidth: '220',
            thumbnailAlignment: 'scaled',
            thumbnailGutterWidth: 0,
            thumbnailGutterHeight: 0,
            thumbnailBorderHorizontal: 0,
            thumbnailBorderVertical: 0,
            thumbnailToolbarImage: null,
            thumbnailToolbarAlbum: null,
            thumbnailLabel: { display: false },
            galleryDisplayTransitionDuration: 1500,
            thumbnailDisplayTransition: 'imageSlideUp',
            thumbnailDisplayTransitionDuration: 1200,
            thumbnailDisplayTransitionEasing: 'easeInOutQuint',
            thumbnailDisplayInterval: 60,
            thumbnailBuildInit2: 'image_scale_1.15',
            thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
            touchAnimation: true,
            touchAutoOpenDelay: 500,
            viewerToolbar: { display: false },
            viewerTools: {
                topLeft: 'label',
                topRight: 'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
            },
            galleryTheme: {
                thumbnail: { background: '#111' },
            },
            locationHash: true
        });
    });

    document.getElementById('imageInput').addEventListener('change', async (e) => {
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
});
