//** REVISION **//

const obj = {
  pseudo: "Aghilas",
  ville: "Lille",
  admin: false,
  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
};

// Ajouter ou modfier (les deux ca marche )
obj.age = 24;
obj.ville = "paris";
obj["admin"] = true; //==> Celle là nous permet de faire la concatenation

// Remplacer
obj["admin"] = true;

//Supprimer
delete obj.ville;

//Checker si propriété existe
//console.log("pseudo" in obj);
//console.log("ville" in obj);

//Parcourir un objet
for (const key in obj) {
  //console.log(key); //==> afficher l'index des données ( Pseudo/Admin.....)
  //console.log(obj[key]); //==> Nous afficher les données de l'objet(Aghilas/False....)
  //console.log(key + " : " + obj[key]); // La on affiche les deux
}

//console.log(obj.direBonjour());

//-----------------------------------------------------------------------------------

//Obtenir les clés
const keys = Object.keys(obj);
//console.log(keys);

//Obtenir des valeurs
const values = Object.values(obj);
//console.log(values);

const nestedArray = Object.entries(obj);
//console.log(nestedArray);

//Fusinner des objects
const obj2 = {
  taille: "1m80",
  poids: "75kg",
  pseudo: "xeelesa",
};

const fusion = Object.assign({}, obj, obj2);
//console.log(fusion); ==> Si les deux objets on les memes index de données différentes ca vas prendre le dernier

// Empécher les modifications

const newObj = Object.freeze(obj);
//console.log(newObj);

//-----------------------------------------------------------------------------------
// Construire des objets
//--------------------------------------------

// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}
const user1 = new User("Aghilas", "Paris");
const user2 = new User("Lisa", "Lille");
//console.log(user2.getCity());

// Factory functions

function User3(pseudo, ville) {
  return {
    pseudo: pseudo,
    ville: ville,
  };
}
const user4 = User3("FS", "Nice");
//console.log(user4);

//--------------------------------------------
//Class

class Utulisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;

    this.sui = function () {
      console.log(this.pseudo + " la salope habite à " + this.ville); //==> on peux mettre toutes les fonctions qu'on veux
    };
  }
}

const user5 = new Utulisateur("Samia", "Lyon");

Utulisateur.prototype.sayCity = function () {
  console.log(" j'habite à " + this.ville);
};

Object.assign(Utulisateur.prototype, {
  methode1() {
    //Ma Méthode
  },
  methode2() {
    // Ma Méthode
  },
});
//console.log(user5);

//----------------------------
//L'hérutage
//----------------------------

class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomthing(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends animal {
  run() {
    console.log("Le chien court !");
  }
}
const rintintin = new Dog("rintintin", 9);

console.log(rintintin);