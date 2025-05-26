// Fonction pour défiler vers un élément spécifique
function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// modal

function openModal(modalId, pdfSrc) {
  document.getElementById(modalId).style.display = 'block';
  document.getElementById(modalId).querySelector('iframe').src = pdfSrc;
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  modal.querySelector('iframe').src = ''; // vide le src
}