// Funkce pro filtrování pracovníků podle specializace
function filterWorkers() {
    const specialization = document.getElementById('specialization').value.toLowerCase();
    const workerCards = document.querySelectorAll('.worker-card');

    workerCards.forEach(card => {
        const specializationText = card.querySelector('p').innerText.toLowerCase();
        if (specialization === 'all' || specializationText.includes(specialization)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Zobrazení formuláře pro novou fotografii
function showPhotoForm() {
    document.getElementById('photo-form').style.display = 'block';
}

// Odeslání nové fotografie
function submitPhoto() {
    const title = document.getElementById('photo-title').value;
    const url = document.getElementById('photo-url').value;
    if (title && url) {
        const gallery = document.getElementById('photo-gallery');
        const newPhoto = document.createElement('div');
        newPhoto.classList.add('photo-item');
        newPhoto.innerHTML = <img src="${url}" alt="${title}"><p>${title}</p>;
        gallery.appendChild(newPhoto);

        // Reset formuláře
        document.getElementById('photo-title').value = '';
        document.getElementById('photo-url').value = '';
        document.getElementById('photo-form').style.display = 'none';
    } else {
        alert('Vyplňte popis a URL obrázku.');
    }
}