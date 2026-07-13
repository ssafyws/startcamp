// Init Icons
lucide.createIcons();

// --- Custom Dialog Modal Utility (shared across all pages) ---
function showCustomModal(icon, title, text) {
    const modal = document.getElementById('custom-modal');
    document.getElementById('modal-icon').innerText = icon;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;

    modal.classList.remove('hidden');
    modal.style.opacity = '1';
}

function closeCustomModal() {
    const modal = document.getElementById('custom-modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}
