//Const principales utilisées:
const ens1 = document.querySelector('.ens1');
const ens2 = document.querySelector('.ens2');
const ens3 = document.querySelector('.ens3');
const ens4 = document.querySelector('.ens4');
const ens5 = document.querySelector('.ens5');
const ens6 = document.querySelector('.ens6');
const ens7 = document.querySelector('.ens7');
const ens8 = document.querySelector('.ens8');
const ens9 = document.querySelector('.ens9');
const ens10 = document.querySelector('.ens10');
const h2 = document.querySelector('h2');

// Recuperation du mot a deviner + variables contenant les lettres deja trouvées et le nombre d'essais restant
const motADeviner = prompt("Entrez un mot pour le jeu du pendu :");
let lettresTrouvees = Array(motADeviner.length).fill("_");
let essaisRestants = 10;

// Affichage initial en interaction avec le HTML
const affichageMot = document.getElementById("mot");
const affichageEssais = document.getElementById("essais");
affichageMot.textContent = lettresTrouvees.join(" ");


/**
 * @param {string} event -la lettre obtenu par addEventListener
 * @param {string} lettre -constante creé apres recuperation de la lettre par addEventlistener
 * Fonction pour gérer le choix d'une lettre (validation de la lettre, comparaison avec le mot a trouver, declenchement ou non de l'affichage du pendu)
 */ 
function verifierLettre(event) {
  const lettre = event.key.toLowerCase(); 
  if (!/[a-z]/.test(lettre) || lettre.length !== 1) {
    alert("Veuillez entrer une lettre valide !");
    return;
  }

  if (motADeviner.includes(lettre)) {
    // Met à jour les lettres trouvées
    for (let i = 0; i < motADeviner.length; i++) {
      if (motADeviner[i] === lettre) {
        lettresTrouvees[i] = lettre;
      }
    }
  } else { 
    essaisRestants--;
  }


  //switch qui permet de faire apparaitre les sections du pendu en utilisant le nombre d'erreurs restant (a chaque erreur une section apparait dans la limite de 10)
    switch (essaisRestants) {
        case 9 :
        ens1.style.backgroundColor = "black";
        break;

        case 8:  
        ens2.style.backgroundColor = "black";
        break;
    
        case 7:   
        ens3.style.backgroundColor = "black";
        break;
    
        case 6:
        ens4.style.backgroundColor = "black";
        break;
    
        case 5:  
        ens5.style.backgroundColor = "black";
        break;
    
        case 4:
        ens6.style.backgroundColor = "black";
        break;
    
        case 3:  
        ens7.style.backgroundColor = "black";
        break;
    
        case 2: 
        ens8.style.backgroundColor = "black";
        break;
    
        case 1: 
        ens9.style.backgroundColor = "black";
        break;
    
        case 0:
        ens10.style.backgroundColor = "black" ;
        break;
    }
    
    // Affichage des lettres trouvées et du nombres d'essais restant sur la page.
  affichageMot.textContent = lettresTrouvees.join(" ");
  affichageEssais.textContent = `Essais restants : ${essaisRestants}`;

    // Vérifie les conditions de victoire ou de défaite
  if (!lettresTrouvees.includes("_")) {
    alert("Félicitations, vous avez gagné !");
    document.removeEventListener("keydown", verifierLettre);
  } else if (essaisRestants <= 0) {
    alert(`Vous avez perdu ! Le mot était : ${motADeviner}`);
    document.removeEventListener("keydown", verifierLettre);
  }
}

// Ecouteur d'evenement au 'click' qui sert a recuperer les lettres choisis et a appeler la fonction principal.
// Modification du h2 via le DOM qui deviens visible pour demander a choisr une lettre au clavier.
h2.style.color= "red";
document.addEventListener("keydown", verifierLettre);

//Bouton reinitialiser : declencheur d'evenement via un 'click' sur le bouton qui recharge la page a l'origine pour recommencer une nouvelle partie.
const button = document.getElementById("Reinitialiser");

button.addEventListener('click', () => {

    location.reload();
}
    
)