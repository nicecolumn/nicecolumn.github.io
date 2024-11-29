// --- Gallery Script ---

function showModal(image) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex';
    modalImg.src = image;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}