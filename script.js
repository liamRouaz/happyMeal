
document.addEventListener('DOMContentLoaded', e => {
// Charger le fichier JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.recettes)

        const listTimezone = document.getElementById('list-timezone');
        // Itérer sur les données JSON et créer des options
        data.recettes.forEach(recette => {
            const option = document.createElement('option');
            option.innerHTML = recette.nom ;
            console.log(option)
            listTimezone.appendChild(option);
        });
    })
    .catch(error => console.error('Une erreur s\'est produite lors du chargement du fichier JSON : ', error));
}, false);
