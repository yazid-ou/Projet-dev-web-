// Vérifier que le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le toggle, la navbar et le body
    const toggle = document.getElementById('toogle');
    const navbar = document.getElementById('navbar');
    const body = document.body;
    // Vérification pour s'assurer que les éléments sont bien sélectionnés
    console.log("Toggle: ", toggle);
    console.log("Navbar: ", navbar);
    // Ajouter un événement de clic au toggle
    toggle.addEventListener('click', (event) => {
        // Empêcher la propagation du clic pour éviter que l'événement ne soit capturé plus tard
        event.stopPropagation();
        // Vérification de l'état actuel de la navbar
        console.log("Navbar state before click: ", navbar.style.right); // Log de l'état actuel de 'right'
        if (navbar.style.right === '0px') {
            // Si visible, la cacher en déplaçant la navbar à droite (-300px)
            navbar.style.right = '-300px';
        } else {
            // Si cachée, l'afficher en déplaçant la navbar vers la gauche (right à 0)
            navbar.style.right = '0px';
        }
        // Vérification après clic
        console.log("Navbar state after click: ", navbar.style.right); // Log de l'état après le clic
    });
    // Ajouter un événement pour fermer la navbar lorsqu'on clique à l'extérieur de celle-ci
    body.addEventListener('click', (event) => {
        // Si le clic est en dehors de la navbar et du toggle, la navbar disparaît
        if (!navbar.contains(event.target) && !toggle.contains(event.target)) {
            navbar.style.right = '-300px';  // Cacher la navbar
        }
    });
});
