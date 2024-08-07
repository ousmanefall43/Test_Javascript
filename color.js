document.addEventListener('DOMContentLoaded', function() {
  const blocs = document.querySelectorAll('.bloc');
  
  // Tableau de couleurs prédéfinies pour les blocs et les textes
  const colors = [
    { blocColor: '#FF0000', textColor: '#FFFFFF' }, // Rouge et Blanc
    { blocColor: '#00FF00', textColor: '#000000' }, // Vert et Noir
    { blocColor: '#0000FF', textColor: '#FFD700' }, // Bleu et Or
    { blocColor: '#FFFF00', textColor: '#4B0082' }, // Jaune et Indigo
    { blocColor: '#FF00FF', textColor: '#8B4513' }, // Magenta et Marron
    { blocColor: '#00FFFF', textColor: '#2F4F4F' }, // Cyan et Gris foncé
    { blocColor: '#FFA500', textColor: '#FF69B4' }, // Orange et Rose vif
    { blocColor: '#800080', textColor: '#00CED1' }, // Violet et Turquoise
    { blocColor: '#008000', textColor: '#ADFF2F' }, // Vert foncé et Vert jaune
    { blocColor: '#000080', textColor: '#D2691E' }  // Bleu marine et Chocolat
  ];

  let currentIndex = 0;

  function changeColors() {
    // Obtient les prochaines couleurs des tableaux et incrémente l'index
    const { blocColor, textColor } = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;

    // Applique les nouvelles couleurs à chaque bloc et au texte à l'intérieur
    blocs.forEach(function(bloc) {
      bloc.style.backgroundColor = blocColor; // Change la couleur de fond du bloc
      bloc.querySelector('.titre_bloc').style.color = textColor; // Change la couleur du texte du bloc
    });
  }

  // Change les couleurs toutes les 2 secondes
  setInterval(changeColors, 2000);
});
