frasese=[ "No importa lo que pase, siempre tendrás una historia que contar",
          "Tu mejor profesor es tu mayor error",
          "Cualquier cosa que te plante la vida florécela con gracia",
          "Deséalo, espéralo, suéñalo, pero por todos los medios… ¡Hazlo!",
          "Levántate, suspira, sonríe, y sigue adelante",
          "Dale a cada día la posibilidad de ser el mejor día de tu vida"];

frasesi=[ "If you can dream it, you can do it",
          "Don't be afraid to be yourself",
          "You only fail when you stop trying",
          "Life is way too short for bad vibes",
          "Do it now. Sometimes “later” becomes “never",
          "Fall seven times, stand up eight"];

function obtieneFrase(flag) {
    let indice = Math.floor(Math.random() * frasese.length);   
    if (flag==1) { 
        console.log(frasese[indice]);
    } else {
        console.log(frasesi[indice]);
    }
};

module.exports.obtieneFrase = obtieneFrase;
