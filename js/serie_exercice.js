//01 Mot de passe correct et incorrect

function mdp_verif() {
    let mdp="12345"
    let res= prompt("veillez saisir le mdp")
    if (mdp==res) {
        alert("Bienvenue")
    } else {
        alert("erreur de mdp")
    }
    }


//02 Nombre pair et impair

function nb_pair_impair() {
    let nb=prompt("veillez saisir le nombre interval")
let rep= prompt("1. Pair\n2. impair")

if (rep==1) {
    for (let index = 0; index <= nb; index++) {
        if (index % 2 == 0) {
            console.log(index)
        } 
    }
}else if (rep==2) {
    for (let index = 0; index <= nb; index++) {
        if (index % 2 != 0) {
            console.log(index)
        } 
    }
}else{
    alert("choix non géré !")
}
}


//03 A Swap B

function AswapB() {
let a=prompt("entrez la valeur de A")
let b=prompt("entrez la valeur de B")
let c=a
a=b
b=c
alert("A = "+a+"\nB = "+b)
}

//04 Année bissextile ou pas

function An_bissex() {
    var an=prompt("veuillez sasir l'année");
if (an%4==0) {
    alert("l'année "+an+" est bissextile")    
}else if (an%4>0) {
    alert("l'année "+an+" n'est pas bissextile")
}else{
    alert("vous n'avez pas saisi une année")
}

}


//05 Equation du segond dégrès

function racine2() {
    let racine1, racine2, racine;

let a = prompt("Entrez le premier nombre: ");
let b = prompt("Entrez le segond nombre: ");
let c = prompt("Entrez le troisième nombre: ");

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    racine1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    racine2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    alert(`Les racines quadratiques sont: \n X1 = ${root1}\nX2 = ${root2}`);
}

// Racine réelle égale à 0
else if (discriminant == 0) {
    racine = racine1 = racine2 = -b / (2 * a);

    alert(`La solution racine quadratique est: X1 = X2 = ${racine}`);
}

// Pas de racine réelle
else {
    let partieR = (-b / (2 * a)).toFixed(2);
    let partieIM = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    alert(`Les racines sont: \n ${partieR} + ${partieIM}i et ${partieR} - ${partieIM}i`);
}
}


//06 Compris entre 1 et 3

function Compris_entre() {
    
let nb=prompt("veuillez entrer le nombre")
while (nb<=1 || nb>=3) {
        nb=prompt("Le nombre n'est pas valide\nEssayez encore...")
}
alert("bravo ! "+nb+" est dans l'interval")

}


//07 Compris entre 10 et 20 avec précision

function Compris_avec_precision() {
    
    let nb=prompt("veuillez entrer le nombre")
while (nb<=10 || nb>=20) {
    if (nb<=10) {
        nb=prompt("Essayez un peu plus grand...")
    }
    if (nb>=20) {
        nb=prompt("Essayez un peu plus petit...")
    }        
}
alert("bravo ! "+nb+" est dans l'interval")
}


//08 nombres suivant le départ

function nb_suivant() {
    let nb=parseInt(prompt("veuillez entrer le nombre départ"))
nb-=1
for (let i = 0; i <= 10; i++) {
    nb+=1;
    console.log(nb);
}
}


//09 Multiplication nombre

function multiplication7() {
    
    let nb=parseInt(prompt("veuillez entrer le nombre"))
for (let i = 1; i <= 10; i++) {
    console.log(nb+" + "+i+" = "+nb*i+"\n");
}
}

//10 Nombre de départ somme jusqu'à lui

function somme_jusqua_depart() {
    
    let nb=parseInt(prompt("veuillez entrer le nombre départ"))
let arr=nb
for (let i = -1; i <= arr; i++) {
    console.log(nb+=i)
}
}


//11 Factorielle du nombre

function factoriel() {
    factorielle(parseInt(prompt("Veuillez saisir la valeur pour factoriel")))

function factorielle(n) {
    var res=1;
    for (i=n;i>=1;i=i-1) {
        res= res*i;
}
        return(alert("le factoriel "+n+" vaut "+res));
}
}


//12 Le plus grand dans un tableau

function plusgrand() {
    let tab=[]
for (let i = 1; i < 10; i++) {
    tab.push(parseInt(prompt("ajoutez la "+i+" ieme valeur")));
}
tab.sort(function (a, b) {
    if (a < b) {
        return 1;
    }else if (a > b) {
        return -1;
    }else {
        return 0;
}
})
alert(tab[0]);
}

//Indice du plus grand

// function indice_du_pls_gd() {
    
// }


//14 Le plus grand dans un tableau taille indéterminée

function plusgdtabindetermine() {
    
    let tab=[]
tab.push(parseInt(prompt("ajoutez des valeurs. \n 0 pour arrêter")))
let i=0
while (tab[tab.length-1] != 0) {
    i+=1
    tab.push(parseInt(prompt("ajoutez la "+i+" ieme valeur")));
}
tab.sort(function (a, b) {
    if (a < b) {
        return 1;
}else if (a > b) {
    return -1;
}else {
return 0;
}
})
alert(tab[0]);
}


//Navigation

function ouvrir() {
    document.getElementById("mySidenav").style.width = "55%";
    document.getElementById("main").style.marginLeft = "55%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function fermer() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
