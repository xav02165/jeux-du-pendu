Jeu de Pendu

Objectif: developper un jeu de pendu qui puisse se jouer a 2, un joueur choisissant un mot de deviner et l'autre aura pour objectif de deviner ce mot en choisissant des lettres en utilisant le HTML, CSS et Javascript et en utilisant les fonctions de bases deja vu en formation.
Ce jeux comportera un affichage des lettres deja trouvées, un compteur du nombre d' essais restant, un bouton pour reinitialiser ainsi qu'une animation du pendu qui evoluera au fur et a mesure des mauvaises reponses.


Decoupage du projet:
1: HTML
2: CSS
3: Javascript

Les fonctions crées et leurs objectifs:

Decoupage du projet:
1: HTML
   4 Parties distincts:
        - une premiere Div contenant le titre du jeu et les paragraphes avec un ID qui seront utilisés afin d'afficher le mot demandés et les essais restants. 
        - une deuxieme DIV pour creer une GRID qui englobe 10 sections (ensemble de case) qui vont permettrent de faire apparaitre le pendu, partie par partie.
        - un h2 qui apparait en rouge uniquement lorsque l'on demande a taper une lettre sur le clavier afin de choisir une lettre.
        - un bouton Reset afin de reinitialiser la page pour redemarrer le jeu.

2: CSS
    -Creation d'un Grid de 99 cases, englobant 10 sections (ens1, ens2,...), toutes definis qui representent chacune un morceaux du pendu.
    -Centrage des élements (h,p, bouton)

3: Javascript:
    -Determiner les principales variables du jeu
    -Determiner les actions necessaire a coder pour la jouabilitée:
        a: Choisir un mot
        b: En faire un tableau pour en faciliter la comparaison avec une lettre et determiner sa position
        c: Demander et reconnaitre une lettre via un ecouteur d'evenement
        d: Comparer la lettre avec le tableau, determiner si elle fait partie du mot ou nom.
        e: Si la lettre est bonne, l'integrer au mot caché et la faire apparaitre, sinon decompter sur le compteur d'erreurs et afficher une section du pendu via un switch
        f: Verifier les conditions de victoire ou de defaites
        g: Donner la possibilitée de redemarrer un jeu en faisant un reset

Fonction créé: function verifierLettre(event) , la seul fonction du jeu qui regroupe le fait de recuperer la lettre de l'ecouter d'evenement, la validé si celle ci est correct, la comparer avec le mot demander en debut de jeu via le prompt.
Elle met egalement a jour les lettres trouvée, le nombre d'erreur et permet l'affichage des sections du pendu via un switch, elle verifie ensuite si le jeu est victorieux ou non avec un message dans chacun des cas.

Morceau de code recuperer ici et la puis adapté a mon jeu:

let lettresTrouvees = Array(motADeviner.length).fill("_");  => difficulté pour moi pour avoir une syntaxe correct

affichageEssais.textContent = `Essais restants : ${essaisRestants}`; => pareil, difficulté recontré pour positionné correctement le $

for (let i = 0; i < motADeviner.length; i++)   => repris d'un precedent exercice puis adapté (morpion)
      if (motADeviner[i] === lettre) {
        lettresTrouvees[i] = lettre;
      }

 location.reload();  => commande qui m'etait connu qui permet de reinitialiser la page sans faire veritablement de reset (plus simple a utilisé pour moi)