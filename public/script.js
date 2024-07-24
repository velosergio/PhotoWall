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
        loadRandomImages();
    } catch (error) {
        console.error('Error al subir la imagen:', error);
    }
});

async function loadRandomImages() {
    try {
        const response = await fetch('/images');
        const images = await response.json();
        const imageGallery = document.getElementById('imageGallery');
        imageGallery.innerHTML = '';

        const shuffledImages = images.sort(() => 0.5 - Math.random());

        shuffledImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `/uploads/${image}`;
            imageGallery.appendChild(imgElement);
        });
    } catch (error) {
        console.error('Error al cargar las imágenes:', error);
    }
}

window.onload = loadRandomImages;
